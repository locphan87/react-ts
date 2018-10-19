import { pathEq } from 'ramda'
import { withLoadingCreator } from 'react-web-hocs'

import LoadingMask from '../components/Loading/Loading.component'

const loadingPredicate = pathEq(['data', 'loading'], true)
const withLoading = withLoadingCreator({
  predicate: loadingPredicate,
  component: LoadingMask
})

export { withLoading }
