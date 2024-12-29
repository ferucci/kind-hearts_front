import { CaseCard } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    date: {
      control: { type: 'text' },
    },
    dateTime: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
  },
  component: CaseCard,
  tags: ['autodocs'],
  title: 'Components/Cards/CaseCard',
} satisfies Meta<typeof CaseCard>

export default meta
type Story = StoryObj<typeof meta>

export const CaseCardDefault: Story = {
  args: {
    alt: 'People',
    avif: '/assets/images/cases/1.avif',
    date: 'June 2023',
    dateTime: '2023-06',
    src: '/assets/images/cases/1.jpg',
    title: 'Charity Day, ',
    webp: '/assets/images/cases/1.webp',
  },
}
