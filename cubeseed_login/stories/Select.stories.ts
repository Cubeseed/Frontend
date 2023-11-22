import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "./Select"

const meta: Meta<typeof Select> = {
  title: "Inputs/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
  args: {
    label: "Input, Input, Input",
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
