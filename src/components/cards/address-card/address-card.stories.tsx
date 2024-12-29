import { AddressCard } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    text: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
  },
  args: {
    backgroundColor: '#F2FFEF',
    borderColor: '#CCDBC9',
    text: 'Monday-Thursday: 10\u00A0a.m.\u00A0to\u00A05 p.m.',
    title: 'Opening hours',
  },
  component: AddressCard,
  tags: ['autodocs'],
  title: 'Components/Cards/AddressCard',
} satisfies Meta<typeof AddressCard>

export default meta
type Story = StoryObj<typeof meta>
export const AddressCardDefault: Story = {
  render: args => {
    return <AddressCard {...args} />
  },
}
