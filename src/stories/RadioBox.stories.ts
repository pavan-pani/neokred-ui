import type { Meta, StoryObj } from '@storybook/react';
import RadioButton, { RadioButtonProps } from '../Components/Radio-button/RadioButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Sample/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Radio button label',
      control: 'text',
      table: {
        defaultValue: { summary: 'Radio Button' },
        type: { summary: 'string' },
      },
    },
    checked: {
      description: 'Checked state',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'checked' },
      },
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'disabled' },
      },
    },
    value: {
      description: 'Radio button value',
      control: 'text',
      table: {
        defaultValue: { summary: 'radio_value' },
        type: { summary: 'string' },
      },
    },
    name: {
      description: 'Radio button group name',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Change event handler',
      action: 'onChange',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: {
    label: 'Default Radio Button',
    checked: false,
    disabled: false,
    value: 'radio_value',
    name: 'group1',
    onChange: fn(),
  },
} satisfies Meta<RadioButtonProps>;

export default meta;
type Story = StoryObj<RadioButtonProps>;

export const Default: Story = {
  args: {
    label: 'Default Radio Button',
    checked: false,
    disabled: false,
    value: 'radio_value',
    name: 'group1',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Radio Button',
    checked: true,
    value: 'radio_value',
    name: 'group1',
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Disabled Unchecked Radio Button',
    checked: false,
    disabled: true,
    value: 'radio_value',
    name: 'group1',
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Radio Button',
    checked: true,
    disabled: true,
    value: 'radio_value',
    name: 'group1',
  },
};

export const WithoutLabel: Story = {
  args: {
    label: '',
    checked: true,
    value: 'radio_value',
    name: 'group1',
  },
};
