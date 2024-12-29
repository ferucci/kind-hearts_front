import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      // @ts-ignore
      options: TypographyVariant,
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/ui/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    as: 'h1',
    children: 'Typography large',
    variant: TypographyVariant.large,
  },
}

export const Title: Story = {
  args: {
    as: 'h2',
    children: 'Typography title',
    variant: TypographyVariant.title,
  },
}

export const Subtitle1: Story = {
  args: {
    as: 'h3',
    children: 'Typography subtitle 1',
    variant: TypographyVariant.subtitle1,
  },
}

export const Subtitle2: Story = {
  args: {
    as: 'h3',
    children: 'Typography subtitle 2',
    variant: TypographyVariant.subtitle2,
  },
}

export const Slogan: Story = {
  args: {
    as: 'p',
    children: 'Typography text',
    variant: TypographyVariant.text,
  },
}
