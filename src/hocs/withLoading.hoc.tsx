import { pathEq } from 'ramda'
import { branch, renderComponent } from 'recompose'

import LoadingMask from '../components/Loading/Loading.component'

const isDataLoading = pathEq(['data', 'loading'] as ReadonlyArray<string>, true)
const withLoadingCreator = (predicate: any) =>
  branch(predicate, renderComponent(LoadingMask))
const withLoading = withLoadingCreator(isDataLoading)

export { withLoadingCreator }
export default withLoading
