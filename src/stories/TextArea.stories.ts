import type { Meta, StoryObj } from '@storybook/react';
import Textarea, { TextareaProps } from '../Components/Text-area/TextArea';
import { fn } from '@storybook/test';

const meta = {
  title: 'Sample/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Textarea label',
      control: 'text',
      table: {
        defaultValue: { summary: 'Textarea' },
        type: { summary: 'string' },
      },
    },
    value: {
      description: 'Textarea value',
      control: 'text',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'onChange event handler',
      action: 'onChange',
      table: {
        type: { summary: 'function' },
      },
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    required: {
      description: 'Required state',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    placeholder: {
      description: 'Placeholder text',
      control: 'text',
      table: {
        defaultValue: { summary: 'Enter text' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    value: '',
    placeholder: 'Enter text here...',
    onChange: fn(),
    disabled: false,
    required: false,
  },
} satisfies Meta<TextareaProps>;

export default meta;

type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    value: 'This is a default textarea.',
    label: 'Default Textarea',
  },
};

export const Disabled: Story = {
  args: {
    value: 'This textarea is disabled.',
    label: 'Disabled Textarea',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    value: '',
    label: 'Required Textarea',
    required: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    value: 'This textarea has a placeholder.',
    label: 'Textarea with Placeholder',
    placeholder: 'Please enter your comments here...',
  },
};
