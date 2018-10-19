import styled from 'react-emotion'

import { withClassName } from '../../hocs'

const Page = withClassName('flex bg-blue justify-center')(
  styled.div({
    lineHeight: 1.5
  })
)

export { Page }
