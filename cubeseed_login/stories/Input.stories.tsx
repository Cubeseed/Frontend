import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Input>

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
