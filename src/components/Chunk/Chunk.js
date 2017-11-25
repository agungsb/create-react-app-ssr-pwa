import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './../../containers/Loading/Loading';

class Chunk extends Component {
  static propTypes = {
    load: PropTypes.func
  }

  state = {
    LoadedComponent: null,
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      LoadedComponent: null,
    });
    Promise.resolve(props.load()).then(mod => {
      console.log('mod', mod);
      this.setState({
        // handle both es imports and cjs
        LoadedComponent: mod.default ? mod.default : mod,
      });
    })
    // props.load().then(mod => {
    //   this.setState({
    //     // handle both es imports and cjs
    //     LoadedComponent: mod.default ? mod.default : mod,
    //   });
    // });
  }

  render() {
    const { LoadedComponent } = this.state;

    const otherProps = Object.assign({}, this.props);
    delete otherProps.load;

    return LoadedComponent ? <LoadedComponent {...otherProps} /> : <Loading />;
  }
}

export default Chunk;
