import Loadable from 'react-loadable';
import { Loading } from 'containers';

export default function LoadableComponent(opts) {
  return Loadable(Object.assign({
    loading: Loading,
    delay: 200,
    timeout: 10,
  }, opts));
};