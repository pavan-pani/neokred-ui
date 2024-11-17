import type { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from '../Components/Check-box/CheckBox'
import { fn } from '@storybook/test';

const meta = {
  title: 'Sample/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Checkbox label',
      control: 'text',
      table: {
        defaultValue: { summary: 'Checkbox' },
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
    onChange: {
      description: 'Change event handler',
      action: 'onChange',
      table: {
        type: { summary: 'function' },
      },
    },
    checkboxEventemiter:{
        description: 'Change checkboxEventemiter',
        action: 'onClick',
        table: {
          type: { summary: 'checkboxEventemiter' },
        },
      },
  },
//   args: {
//     label: 'Default Checkbox',
//     checked: false,
//     disabled: false,
//     // onChange: fn()
//   },
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    checked: false,
    disabled:false
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Disabled Unchecked Checkbox',
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Checkbox',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    label: '',
    checked: true,
  },
};


