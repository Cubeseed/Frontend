import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "./Textarea"

const meta: Meta<typeof Textarea> = {
  title: "Inputs/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Primary: Story = {
  args: {
    label: "About",
  },
}

export const Focused: Story = {
  args: {
    label: "About",
    autoFocus: true,
  },
}
