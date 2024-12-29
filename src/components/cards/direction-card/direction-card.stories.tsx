import { DirectionCard } from '@/components'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  argTypes: {
    title: { control: 'text' },
  },
  args: {
    img: {
      alt: 'Helping people',
      basePath: '/assets/images/directions/people/people',
    },
    linkTo: '',
    text: [
      <p>
        Our charitable foundation regularly provides assistance to&nbsp;low-income families
        in&nbsp;many areas. Among our clients there are people who have suffered from military
        conflicts, loss of&nbsp;property, and emigration.
      </p>,
      <p>
        With our help, you can send money, food and any goods to&nbsp;the war zone.
        We&nbsp;do&nbsp;not adhere to&nbsp;any political views, we&nbsp;simply help everyone who
        needs help.
      </p>,
    ],
    title: 'Helping people in need',
  },
  component: DirectionCard,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Components/Cards/DirectionCard',
} satisfies Meta<typeof DirectionCard>

export default meta
type Story = StoryObj<typeof meta>
export const DirectionCardDefault: Story = {
  render: args => {
    return <DirectionCard {...args} />
  },
}
