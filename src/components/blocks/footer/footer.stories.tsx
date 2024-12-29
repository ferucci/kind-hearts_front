import { Footer } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Footer,
  tags: ['autodocs'],
  title: 'Components/Blocks/Footer',
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

//@ts-ignore
export const FooterDefault: Story = {}
