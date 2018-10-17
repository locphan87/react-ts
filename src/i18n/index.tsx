import I18n from 'i18n-js'
import en from './locales/en'
import vn from './locales/vn'

I18n.fallbacks = true
I18n.defaultLocale = 'en'
I18n.locale = 'en'
// choose a different default separator
// so it's allowed to use dots in i18n keys
I18n.defaultSeparator = '/'
I18n.translations = {
  en,
  vn
}

const i18n = I18n

export default i18n
