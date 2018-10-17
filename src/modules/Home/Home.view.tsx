import React from 'react'

import { Page } from '../../components/UI'
import { t } from '../../i18n'
import { Container } from './Home.view.style'

const HomeView = () => (
  <Page>
    <Container>{t('home.title')}</Container>
  </Page>
)

export default HomeView
