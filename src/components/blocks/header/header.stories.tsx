import { Header } from '@/components'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: Header,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Components/Blocks/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>
//@ts-ignore
export const HeaderDefault: Story = {}
