import type { Meta, StoryObj } from '@storybook/react';
import Button  from '../Components/button/Button';
import { fn } from '@storybook/test';

const meta = {
  title: 'Sample/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Button label',
      control: 'text',
      table: {
        defaultValue: { summary: 'Button' },
        type: { summary: 'text' },
      },
    },
    size: {
      description: 'Button size',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'select' },
      },
    },
    disabled: {
      description: 'Disabled state',
      control: {type :'boolean'},
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    customClass: {
      description: 'Custom CSS class',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      description: 'onClick event',
      action: 'onClick',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Medium: Story = {
  name: 'Medium',
  args: {
    size: 'medium',
    label: 'Medium Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};


