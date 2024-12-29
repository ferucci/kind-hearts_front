import { Accordion, AccordionItem } from '@/components'
import { StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['single', 'multiple'],
    },
  },
  component: Accordion,
  tags: ['autodocs'],
  title: 'Components/ui/Accordion',
}

export default meta

type Story = StoryObj<typeof meta>

export const AccordionDefault: Story = {
  args: {
    type: 'single',
  },

  render: args => {
    const items = [
      {
        content:
          'It is a small contribution that speaks of a big heart. Don’t think about the fact that you can’t do much, but just imagine how much food a kitten needs, and you will understand that what is a matter of dinner for some is a matter of life for others.',
        header: 'Is it possible to make small contributions?',
        id: '1',
      },
      {
        content:
          'Yes, sure! This will be a great help for people in need. Moreover, this will be mutual assistance: we will be able to provide you with a certificate that will allow you to reduce taxes on the donation amount.',
        header: 'I have a wholesale batch of shoes in my warehouse. Can I donate it to the fund?',
        id: '2',
      },
    ]

    const onValueChange = (value: string | string[]) => console.log(value)

    return (
      <Accordion
        {...args}
        onValueChange={onValueChange}
        style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
      >
        {items.map(item => (
          <AccordionItem key={item.id} title={item.header} value={item.id}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    )
  },
}
