import React, { SFC } from 'react'

import { Page } from '../../components/UI'
import { Container } from '../Home/Home.view.style'

interface IPost {
  id: string
  title: string
  body: string
  author: string
}

interface IProps {
  posts: IPost[]
}

const PageList: SFC<IProps> = ({ posts = [] }) => (
  <Page className="flex-col items-center">
    <Container>Post List</Container>
    <div className="flex-col pb-8">
      {posts.map(post => {
        return (
          <div key={post.id} className="flex flex-row">
            <p className="text-white">
              Id: {post.id} - {post.title} - {post.body} - Author: {post.author}
            </p>
          </div>
        )
      })}
    </div>
  </Page>
)

export default PageList
