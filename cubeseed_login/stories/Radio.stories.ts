import type { Meta, StoryObj } from "@storybook/react"
import { Radio } from "./Radio"
import { Input } from "./Input"

const meta: Meta<typeof Radio> = {
  title: "Inputs/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Radio>

export const Primary: Story = {
  args: {
    label: "Input",
  },
}

export const Focused: Story = {
  args: {
    label: "Input",
    autoFocus: true,
  },
}

export const Required: Story = {
  args: {
    label: "Input",
    required: true,
  },
}
