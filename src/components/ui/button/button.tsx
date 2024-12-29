import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  memo,
} from 'react'

import { ButtonVariant } from '@/common'

import s from './button.module.scss'

type Props<T extends ElementType> = {
  as?: T
  variant?: keyof typeof ButtonVariant
}

export const ButtonPolymorph = <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref: ElementRef<T>
) => {
  const {
    as: Tag = 'button',
    children,
    className,
    variant = ButtonVariant.primary,
    ...rest
  } = props

  const buttonClassName = `${s.button} ${s[String(variant)]} ${className}`

  return (
    // @ts-expect-error TS2322
    <Tag className={buttonClassName} ref={ref} {...rest}>
      <span>{children}</span>
    </Tag>
  )
}

export const Button = memo(
  // @ts-ignore
  forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
    props: Props<T> &
      Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & {
        ref?: ForwardedRef<ElementRef<T>>
      }
  ) => ReturnType<typeof ButtonPolymorph>
)
