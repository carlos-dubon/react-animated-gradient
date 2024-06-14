import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Gradient as GradientComponent } from '../Gradient';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Gradient',
    component: GradientComponent,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'This is the main component for the `react-animated-gradient` package. It animates when the `currentGradient` prop changes.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof GradientComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Gradient: Story = {
    args: {
        currentGradient: ["#00dfd8", "#007cf0"],
        animationDuration: 400,
    },
};
