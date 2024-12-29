import { useState } from 'react'

import { TextField } from '@/components'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['input', 'textarea'],
    },
    disabled: { type: 'boolean' },
    errorMessage: { type: 'string' },
    placeholder: { type: 'string' },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/ui/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
  render: args => {
    const [value, setValue] = useState('')

    const changeHandler = (value: string) => {
      setValue(value)
      action(value)()
    }

    return (
      <TextField
        placeholder={'placeholder'}
        {...args}
        onValueChange={changeHandler}
        value={value}
      />
    )
  },
}

export const TextareaDefault: Story = {
  render: args => {
    const [value, setValue] = useState('')

    const changeHandler = (value: string) => {
      setValue(value)
      action(value)()
    }

    return (
      <TextField
        as={'textarea'}
        placeholder={'placeholder'}
        {...args}
        onValueChange={changeHandler}
        value={value}
      />
    )
  },
}

export const InputWithError: Story = {
  render: args => {
    const [value, setValue] = useState('')

    const changeHandler = (value: string) => {
      setValue(value)
      action(value)()
    }

    return (
      <TextField
        placeholder={'placeholder'}
        {...args}
        onValueChange={changeHandler}
        value={value}
      />
    )
  },
}
