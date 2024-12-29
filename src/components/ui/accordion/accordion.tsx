import { ReactNode, memo } from 'react'

import { ArrowIcon, Typography } from '@/components'
import * as AccordionRadix from '@radix-ui/react-accordion'
import {
  AccordionItemProps,
  AccordionMultipleProps,
  AccordionSingleProps,
} from '@radix-ui/react-accordion'

import s from './accordion.module.scss'

type AccordionPropsType = {
  className?: string
} & (AccordionMultipleProps | AccordionSingleProps)

export const Accordion = memo(({ className, ...rest }: AccordionPropsType) => {
  return <AccordionRadix.Root className={className} {...rest} />
})

type AccordionItemPropsType = {
  children: ReactNode
  className?: string
  title: string
} & AccordionItemProps
export const AccordionItem = memo(
  ({ children, className, title, value, ...rest }: AccordionItemPropsType) => {
    return (
      <AccordionRadix.Item className={`${s.item} ${className}`} value={value} {...rest}>
        <AccordionRadix.Header>
          <AccordionRadix.Trigger asChild>
            <div className={s.trigger}>
              <Typography as={'h3'}>{title}</Typography>
              <ArrowIcon className={s.icon}></ArrowIcon>
            </div>
          </AccordionRadix.Trigger>
        </AccordionRadix.Header>

        <AccordionRadix.Content className={`${s.content} ${className}`}>
          <div className={s.box}>{children}</div>
        </AccordionRadix.Content>
      </AccordionRadix.Item>
    )
  }
)
