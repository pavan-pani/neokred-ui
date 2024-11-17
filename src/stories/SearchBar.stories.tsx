import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SearchBar from '../Components/Searchbar/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Neokred componets/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the search input',
    },
    onSearch: {
      action: 'search',
      description: 'Callback when the search button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: (args) => <SearchBar {...args} />,
  args: {
    placeholder: 'Search',
  },
};
