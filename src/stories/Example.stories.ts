import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Example as ExampleComponent } from '../Example';

const meta = {
    title: 'Example',
    component: ExampleComponent,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'This is the most basic example on how to use the `Gradient` component. We have a list of gradients and we set an `interval` to change the gradient every second.',
            },
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
    args: {
    },
};
