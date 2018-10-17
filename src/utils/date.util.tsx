import format from 'date-fns/format'
import vi from 'date-fns/locale/vi'

const formatDate = (date: Date, formatString: string) =>
  format(date, formatString, {
    locale: vi
  })

export { formatDate }
