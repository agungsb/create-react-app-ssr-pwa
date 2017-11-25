const path = require('path')
const fs = require('fs')

const React = require('react')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router-dom')

import configureStore from './../src/redux-modules/create'
import Helmet from 'react-helmet';
import ApiClient from './../src/utils/ApiClient'
import App from './../src/containers/App/App'
const client = new ApiClient();

const { matchPath } = require('react-router-dom')

const { MainRoutes } = require('utils/TheRoutes')

module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }

    function renderToClient(promises, req, res, htmlData, store) {
      Promise.all(promises).then(success => {
        // const data = success && success.length > 0 ? success[0].data : null;
        const data = store.getState();
        // console.log('i am last', data);
        // do something w/ the data so the client
        // can access it then render the app
        const context = {}

        // Create a styleManager instance.

        const markup = renderToString(
          <Provider store={store}>
            <StaticRouter
              location={req.url}
              context={context}>
              <App initialData={data} />
            </StaticRouter>
          </Provider>
        )
        let head = Helmet.rewind();

        if (context.url) {
          // Somewhere a `<Redirect>` was rendered
          res.redirect(301, context.url)
        } else {
          // we're good, send the response
          const RenderedApp = htmlData
            .replace('<meta/>', head.meta)
            .replace('<link/>', head.link)
            .replace('{{SSR}}', markup)
            .replace('[\'WINDOW_DATA\']', JSON.stringify(data));
          res.send(RenderedApp)
        }
      }, (error) => {
        // handleError(res, error);
        // throw new Error(res, error);
        res.status(200).send(store.getState());
        // res.redirect(301, '/');
      });
    }

    // we'd probably want some recursion here so our routes could have
    // child routes like `{ path, component, routes: [ { route, route } ] }`
    // and then reduce to the entire branch of matched routes, but for
    // illustrative purposes, sticking to a flat route config

    // const matches = routes.reduce((matches, route) => {
    //   const match = matchPath(req.url, route.path, route)
    //   if (match) {
    //     console.log('route', route.path);
    //     const promise = route.component.fetchData ?
    //       route.component.fetchData(match) : Promise.resolve(null);
    //     console.log('promise', route.component.fetchData);
    //     matches.push({
    //       route,
    //       match,
    //       promise
    //     })
    //   }
    //   return matches
    // }, [])

    // if (matches.length === 0) {
    //   res.status(404)
    // }

    // const promises = matches.map((match) => match.promise)

    const store = configureStore(client);
    let promises = [];
    MainRoutes.some(route => {
      // use `matchPath` here
      const match = matchPath(req.url, route);
      if (match) {
        // console.log('req.url', req.url);
        // console.log(route.component);
        if (req.url === route.path) { // Only do this if the route and the req is matched
          if (route.component.fetchData) { // Only do if the container has fetchData method
            const requests = route.component.fetchData(match);
            for (let i = 0; i < requests.length; i++) {
              let fields;
              if (requests[i].fields) {
                fields = { ...requests[i].fields };
              }
              promises.push(store.dispatch(requests[i]));
            }
          }
        }
        // promises.push(route.component.fetchData ?
        //   route.component.fetchData(match) : Promise.resolve(null))
      }
      return match;
    });
    renderToClient(promises, req, res, htmlData, store);
  })
}

