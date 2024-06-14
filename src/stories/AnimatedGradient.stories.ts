import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AnimatedGradient } from '../AnimatedGradient';

const meta = {
    title: 'AnimatedGradient',
    component: AnimatedGradient,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     gradients: { control: 'color' },
    // },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
} satisfies Meta<typeof AnimatedGradient>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Gradient: Story = {
    args: {
        gradients: [
            ["#00dfd8", "#007cf0"],
            ["#ff0080d", "#7928ca"],
            ["#ff4d4d", "#f9cb28"],
        ],
        changeInterval: 1000,
        animationDuration: 400,
    },
};

