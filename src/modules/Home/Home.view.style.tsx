import styled from 'react-emotion'

import { withClassName } from '../../hocs'

const Container = withClassName('mt-8 mb-4 uppercase')(
  styled.h1(({ theme }) => ({
    color: theme.colors.white
  }))
)

export { Container }
