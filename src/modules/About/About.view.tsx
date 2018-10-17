import React from 'react'

import { Page } from '../../components/UI'
import { t } from '../../i18n'
import { Container } from '../Home/Home.view.style'

const AboutView = () => (
  <Page>
    <Container>{t('about.title')}</Container>
  </Page>
)

export default AboutView
