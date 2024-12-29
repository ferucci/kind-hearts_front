import { ChangeEvent, ComponentPropsWithoutRef, ElementType, forwardRef, useState } from 'react'

import { AlertIcon, Typography } from '@/components'

import s from './text-field.module.scss'

export type TextFieldProps<T extends ElementType> = {
  as?: T
  errorMessage?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<T>
export const TextField = forwardRef<HTMLDivElement, TextFieldProps<ElementType>>((props, ref) => {
  const { as: Tag = 'input', className, errorMessage, onValueChange, ...rest } = props

  const [isShowError, setIsShowError] = useState(false)
  const changeIsShowError = () => setIsShowError(!isShowError)

  const fieldClassName = `${s.field} ${errorMessage ? s.error : ''} ${
    Tag === 'textarea' ? s.textarea : ''
  }`
  const containerClassName = `${className} ${s.container} ${errorMessage ? s.errorContainer : ''}`

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onValueChange?.(e.currentTarget.value)

  return (
    <div className={containerClassName} ref={ref}>
      <Tag
        aria-describedby={isShowError ? 'errorMessage' : undefined}
        aria-invalid={!!errorMessage}
        className={fieldClassName}
        onChange={changeHandler}
        {...rest}
      />
      {errorMessage && (
        <button
          aria-controls={'errorMessage'}
          aria-expanded={isShowError}
          aria-label={isShowError ? 'hide error' : 'show error'}
          className={s.buttonShowError}
          id={'buttonShowError'}
          onClick={changeIsShowError}
        >
          <AlertIcon />
        </button>
      )}
      {isShowError && errorMessage && (
        <Typography
          aria-live={'assertive'}
          as={'span'}
          className={s.errorMessage}
          id={'errorMessage'}
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
