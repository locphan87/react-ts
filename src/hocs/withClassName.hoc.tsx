import { compose, isNil, join, reject } from 'ramda'
import React from 'react'

interface IProps {
  [otherPropName: string]: any
  children?: any
  className?: string
}

const withClassName = classses => WrappedComponent => ({
  className,
  children,
  ...rest
}: IProps) => {
  const cls = compose(
    join(' '),
    reject(isNil)
  )([className, classses])

  if (!children) {
    return <WrappedComponent className={cls} {...rest} />
  }

  return (
    <WrappedComponent className={cls} {...rest}>
      {children}
    </WrappedComponent>
  )
}

export { withClassName }
