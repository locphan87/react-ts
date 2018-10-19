import { isString } from 'ramda-adjunct'
import { SFC } from 'react'
import styled from 'react-emotion'

import { withClassName } from './withClassName.hoc'

const withStyled = (component: SFC<any> | string, className?: string) => (
  ...styles
) => {
  const _component = className ? withClassName(className)(component) : component

  // TODO TS
  // @ts-ignore
  return isString(_component)
    ? styled(_component)(...styles)
    : styled(_component)(...styles)
}

export { withStyled }
