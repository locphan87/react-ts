import React from 'react'

import { Page } from '../../components/UI'
import i18n from '../../i18n'
import { Container } from './Home.view.style'

const HomeView = () => (
  <Page>
    <Container>{i18n.t('hello')}</Container>
  </Page>
)

export default HomeView
