import type { Meta, StoryObj } from '@storybook/react';
import DropdownMenu from '../Components/dropdownBox/DropdownBox';
import { ReactNode } from 'react';
import './styelebox.scss'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Neokred componets/Hover Dropdown',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Dropdown title displayed on the header',
      control: 'text',
      table: {
        defaultValue: { summary: 'Dropdown' },
        type: { summary: 'string' },
      },
    },
    // children: {
    //   description: 'Dropdown content',
    //   control: 'text',
    //   table: {
    //     type: { summary: 'ReactNode' },
    //   },
    // },
    width: {
      description: 'Dropdown content width',
      control: 'text',
      table: {
        defaultValue: { summary: '400px' },
        type: { summary: 'string' },
      },
    },
    left: {
      description: 'Left offset for dropdown positioning',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    right: {
      description: 'Right offset for dropdown positioning',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
   title:"Options" ,
    width:"700px",
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const CustomWidth: Story = {
  render: (args) => (
    <DropdownMenu {...args}
        content={
          <div className="container">
        <div className="card">
            <h3>CollectBot</h3>
            <p>Integrate frictionless payment solutions in your product.</p>
            <a href="#">Payin</a>
            <a href="#">Payout</a>
            <a href="#">Virtual Account Number</a>
            <a href="#">UPI Switch</a>
        </div>
        <div className="card">
            <h3>ProfileX</h3>
            <p>Identify and onboard ideal customers using 360° profile data.</p>
            <a href="#">KYC</a>
            <a href="#">Mobile Number Intelligence</a>
        </div>
        <div className="card">
            <h3>Blutic</h3>
            <p>Build user trust with respectful data processing and retention practices.</p>
            <a href="#">DPDP Consent Manager</a>
            <a href="#">Blutic B2C</a>
        </div>
    </div>
        } 
      />
  ),
};

