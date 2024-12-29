import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  memo,
} from 'react'

import { TypographyVariant } from '@/common'

import s from './typography.module.scss'

type Props<T extends ElementType = 'p'> = {
  as?: T
  variant?: keyof typeof TypographyVariant
} & ComponentPropsWithoutRef<T>

export const TypographyPolymorph = <T extends ElementType = 'p'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref: ElementRef<T>
) => {
  const { as: Tag = 'p', className, variant = TypographyVariant.text, ...rest } = props

  const typographyClassName = `${s[String(variant)]} ${className}`

  return (
    // @ts-expect-error TS2322
    <Tag className={typographyClassName} ref={ref} {...rest} />
  )
}

export const Typography = memo(
  // @ts-ignore
  forwardRef(TypographyPolymorph) as <T extends ElementType = 'button'>(
    props: Props<T> &
      Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & {
        ref?: ForwardedRef<ElementRef<T>>
      }
  ) => ReturnType<typeof TypographyPolymorph>
)
