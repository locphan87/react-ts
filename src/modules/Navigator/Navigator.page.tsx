import Loadable from 'react-loadable'

import Loading from '../../components/Loading/Loading.component'

const Pages = {
  Home: Loadable({
    loader: () => import('../Home/Home.page'),
    loading: Loading
  }),
  About: Loadable({
    loader: () => import('../About/About.page'),
    loading: Loading
  })
}

export default Pages
