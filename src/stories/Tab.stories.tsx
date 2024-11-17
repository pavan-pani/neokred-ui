import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tabs from '../Components/Tab/Tab';
// import './Tabs.scss';

const meta: Meta<typeof Tabs> = {
  title: 'Neokred componets/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      description: 'Array of tab labels',
      control: { type: 'object' },
      defaultValue: ['Verify', 'Pay', 'Consent'],
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: "['Verify', 'Pay', 'Consent']" },
      },
    },
    onTabChange: {
      description: 'Callback when a tab is selected',
      action: 'tab changed',
      table: {
        type: { summary: '(tab: string) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => <Tabs {...args} />,
  args: {
    tabs: ['Verify', 'Pay', 'Consent'],
  },
};
