import gql from 'graphql-tag'

const query = gql`
  query Posts {
    post @rest(type: "Post", path: "/posts") {
      id
      title
      body
      author
    }
  }
`

const params = {
  props: ({ data }: any) => {
    return {
      data,
      posts: data.post
    }
  }
}

export default {
  query,
  params
}
