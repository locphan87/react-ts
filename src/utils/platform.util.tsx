import { equals } from 'ramda'

const isDEV = () => equals(process.env.NODE_ENV, 'development')
const isPROD = () => equals(process.env.NODE_ENV, 'production')

export { isDEV, isPROD }
