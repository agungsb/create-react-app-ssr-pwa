import Loadable from 'react-loadable';
import { Loading } from 'containers';

const LoadableComponent = opts => Loadable({
  LoadingComponent: Loading,
  delay: 300,
  ...opts
})

export default LoadableComponent;