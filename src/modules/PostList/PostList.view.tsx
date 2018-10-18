import React, { SFC } from 'react'
import { Page } from '../../components/UI'

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
  <Page>
    <div className="flex-col">
      {posts.map(post => {
        return (
          <div key={post.id} className="flex flex-row">
            <p>
              Id: {post.id} - {post.title} - {post.body} - Author: {post.author}
            </p>
          </div>
        )
      })}
    </div>
  </Page>
)

export default PageList
