import { Intent, Spinner } from '@blueprintjs/core'
import React from 'react'

const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <Spinner intent={Intent.PRIMARY} size={50} />
  </div>
)

export default Loading
