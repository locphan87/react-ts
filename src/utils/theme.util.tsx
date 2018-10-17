import match from 'match-values'
import { isString } from 'ramda-adjunct'

interface IBgOptions {
  w: number
  h: number
  isFixedSize?: boolean
  repeat?: string
  position?: string
  size?: string
}

const bgImage = (source: string) => ({
  backgroundImage: `url(${source})`
})
const applyBackground = (source: string, options: IBgOptions) => {
  const {
    isFixedSize = true,
    w,
    h,
    repeat = 'no-repeat',
    position = 'left top',
    size = 'contain'
  } = options || { w: 0, h: 0 }

  return {
    background: `url(${source})`,
    ...(isFixedSize && w && h
      ? {
          width: isString(w) ? w : vw(w),
          height: isString(h) ? h : vw(h)
        }
      : {}),
    backgroundPosition: position,
    backgroundRepeat: repeat,
    backgroundSize: size
  }
}
const setUpTriangle = () => ({
  width: 0,
  height: 0,
  zIndex: 1,
  position: 'absolute'
})
const applyDimension = (w: number, h: number) => ({
  width: vw(w),
  height: vw(h)
})
const applyPadding = (t: number, r: number, b: number, l: number) => ({
  paddingTop: vw(t),
  paddingBottom: vw(b),
  paddingLeft: vw(l),
  paddingRight: vw(r)
})
const createTriangle = (
  color: string,
  _size: number,
  options: {
    direction: string
  }
) => {
  const size = vw(_size)
  const { direction = 'bottom' } = options || {}
  const props = match(direction, {
    bottom: {
      bottom: `calc(-${size} + 1px)`,
      left: 0,
      right: 0,
      margin: '0 auto',
      borderLeft: `${size} solid transparent`,
      borderRight: `${size} solid transparent`,
      borderTop: `${size} solid ${color}`
    },
    top: {
      borderLeft: `${size} solid transparent`,
      borderRight: `${size} solid transparent`,
      borderBottom: `${size} solid ${color}`
    },
    right: {
      borderTop: `${size} solid transparent`,
      borderBottom: `${size} solid transparent`,
      borderLeft: `${size} solid ${color}`
    },
    left: {
      borderTop: `${size} solid transparent`,
      borderBottom: `${size} solid transparent`,
      borderRight: `${size} solid ${color}`
    },
    _: {}
  })

  return {
    ...setUpTriangle(),
    ...props
  }
}
const percent = (value: number, base = 1400) =>
  `${((value * 100) / base).toFixed(4)}%`
const vw = (value: number, base = 1400) =>
  `${((value * 100) / base).toFixed(4)}vw`
const rem = (value: number, base = 16) => `${(value / base).toFixed(4)}rem`
const inlineTriangle = (color: string, size: number, marginRight: number) => ({
  content: '""',
  display: 'inline-block',
  ...createTriangle(color, size, { direction: 'right' }),
  position: 'static',
  marginRight: vw(marginRight)
})

export {
  applyPadding,
  applyDimension,
  applyBackground,
  bgImage,
  createTriangle,
  percent,
  rem,
  vw,
  inlineTriangle
}
