import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../Components/Accordion/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Sample/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof Accordion>;


const sampleSections = [
  {
    title: 'Section 1',
    content: <p>This is the content of Section 1</p>,
  },
  {
    title: 'Section 2',
    content: <p>Content of Section 2 goes here</p>,
  },
  {
    title: 'Section 3',
    content: <p>Details inside Section 3</p>,
  },
];

const longContentSections = [
  {
    title: 'Long Content Section',
    content: (
      <div>
        <p>Here is some detailed content that spans multiple lines.</p>
        <p>We can include lists, paragraphs, or even other components.</p>
      </div>
    ),
  },
  {
    title: 'Another Section',
    content: (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    ),
  },
];


export const Default: Story = {
  args: {
    sections: sampleSections,
  },
};


export const SingleSection: Story = {
  args: {
    sections: [
      {
        title: 'Single Section',
        content: <p>This is a single section with some content.</p>,
      },
    ],
  },
};
