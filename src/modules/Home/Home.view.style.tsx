import styled from 'react-emotion'

const Container = styled.h1(
  {
    margin: '2em 0 1em 0',
    textTransform: 'uppercase'
  },
  ({ theme }) => ({
    color: theme.colors.white
  })
)

export { Container }
