import type { Meta, StoryObj } from '@storybook/react';
import Input from '../Components/input-field/InputField'
import { fn } from '@storybook/test';

const meta: Meta<typeof Input> = {
  title: 'Sample/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Type of the input field',
      control: { type: 'select' },
      options: ['text', 'email', 'number', 'password', 'file', 'range', 'search'],
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'select' },
      },
    },
    label: {
      description: 'Label for the input field',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      description: 'Current value of the input field',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
      },
    },
    placeholder: {
      description: 'Placeholder text for the input',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: 'Disabled state',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    required: {
      description: 'Marks the input as required',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    errorMsg: {
      description: 'Error message to display when `isError` is true',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    isError: {
      description: 'Indicates if there is an error',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: 'Callback function when input value changes',
      action: 'onChange',
      table: {
        type: { summary: 'function' },
      },
    },
    onBlur:{
        description: "Event emitter",
        action:"onBlur"
    },
    onFocus:{
        description: "Event emitter",
        action:"onFocus"
    },
    onkeyup:{
        description: "Event emitter",
        action:"onkeyup"
    },
    onkeyDown:{
        description: "Event emitter",
        action:"onkeyDown"
    }
  },
  args: {
    type: 'text',
    label: 'Input Label',
    value: '',
    placeholder: 'Enter text...',
    disabled: false,
    required: false,
    errorMsg: 'This field is required.',
    isError: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Input
export const Default: Story = {};

// Error State
export const ErrorState: Story = {
  args: {
    isError: true,
  },
};

// Disabled Input
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// Required Input
export const Required: Story = {
  args: {
    required: true,
  },
};

// Controlled Input (with State)
// export const Controlled: Story = {
//   render: (args) => {
//     const [inputValue, setInputValue] = useState('');

//     return (
//       <Input
//         {...args}
//         value={inputValue}
//         onChange={(value) => setInputValue(value)}
//       />
//     );
//   },
//   args: {
//     label: 'Controlled Input',
//     placeholder: 'Type to see value...',
//     isError: false,
//     errorMsg: '',
//   },
// };

// const meta = {
//   title: 'Example/Input',
//   component: Input,
//   parameters: {
//     layout: 'centered',
//   },
//   tags: ['autodocs'],
//   argTypes: {
//     type: {
//       description: 'Input type',
//       control: { type: 'select' },
//       options: ['text', 'email', 'number', 'password', 'file', 'range', 'search'],
//       table: {
//         defaultValue: { summary: 'text' },
//         type: { summary: 'select' },
//       },
//     },
//     label: {
//       description: 'Input label',
//       control: 'text',
//       table: {
//         type: { summary: 'string' },
//       },
//     },
//     value: {
//       description: 'Input value',
//       control: 'text',
//       table: {
//         type: { summary: 'string | number' },
//       },
//     },
//     placeholder: {
//       description: 'Placeholder text',
//       control: 'text',
//       table: {
//         type: { summary: 'string' },
//       },
//     },
//     disabled: {
//       description: 'Disabled state',
//       control: { type: 'boolean' },
//       table: {
//         defaultValue: { summary: 'false' },
//         type: { summary: 'boolean' },
//       },
//     },
//     required: {
//       description: 'Required field',
//       control: { type: 'boolean' },
//       table: {
//         defaultValue: { summary: 'false' },
//         type: { summary: 'boolean' },
//       },
//     },
//     onChange: {
//       description: 'Change event handler',
//       action: 'onChange',
//       table: {
//         type: { summary: 'function' },
//       },
//     },
//   },
//   args: {
//     onChange: fn(),
//     label: 'Input Label',
//     type: 'text',
//     value: '',
//     placeholder: 'Enter text...',
//     disabled: false,
//     required: false,
//   },
// } satisfies Meta<typeof Input>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {};

// export const EmailInput: Story = {
//   args: {
//     type: 'email',
//     label: 'Email Address',
//     placeholder: 'Enter your email...',

//   },
// };

// export const PasswordInput: Story = {
//   args: {
//     type: 'password',
//     label: 'Password',
//     placeholder: 'Enter your password...',
//   },
// };

// export const DisabledInput: Story = {
//   args: {
//     type: 'text',
//     label: 'Disabled Input',
//     placeholder: 'Cannot edit this...',
//     disabled: true,
//   },
// };

// export const RequiredInput: Story = {
//   args: {
//     type: 'text',
//     label: 'Required Input',
//     placeholder: 'This field is required...',
//     required: true,
//   },
// };

// export const NumberInput: Story = {
//   args: {
//     type: 'number',
//     label: 'Enter a Number',
//     placeholder: '0',
//   },
// };
