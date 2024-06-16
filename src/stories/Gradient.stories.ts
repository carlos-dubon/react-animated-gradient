import type { Meta, StoryObj } from '@storybook/react';
import { Gradient as GradientComponent } from '../Gradient';
import type { GradientProps } from '../Gradient';

const meta: Meta<GradientProps> = {
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
        style: {
            width: 300,
            height: 300,
        }
    },
};
