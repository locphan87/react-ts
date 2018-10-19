import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import withLoading from '../../hocs/withLoading.hoc'
import PostListView from './PostList.view'
import getPostList from './Query/getPostList.query'

const enhancer = compose(
  graphql(getPostList.query, getPostList.params),
  withLoading
)

export default enhancer(PostListView)
