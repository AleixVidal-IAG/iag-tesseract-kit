import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from '@/components/ui';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'text',
    iconLeft: '',
    iconRight: '',
  },
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'outline'] },
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDefaultButton: Story = {
  args: {
    text: 'Run Scenario',
  },
};

export const PrimaryWithLeftIcon: Story = {
  args: {
    text: 'text',
    iconLeft: <ArrowRight />,
    variant: 'primary',
    size: 'md',
  },
};

export const PrimaryWithRightIcon: Story = {
  args: {
    text: 'text',
    iconRight: <ArrowRight />,
    variant: 'primary',
    size: 'md',
  },
};

export const PrimaryWithIcons: Story = {
  args: {
    text: 'text',
    iconLeft: <ArrowRight />,
    iconRight: <ArrowRight />,
    variant: 'primary',
    size: 'md',
  },
};

export const PrimaryWithIconsOnClick: Story = {
  args: {
    text: 'text',
    iconLeft: <ArrowRight />,
    iconRight: <ArrowRight />,
    variant: 'primary',
    size: 'md',
    onClick: () => {
      alert('With Icons OnClick!');
    },
  },
};

export const PrimaryWithLoading: Story = {
  args: {
    text: 'Loading ...',
    iconLeft: <Loader2 className="animate-spin" />,
    variant: 'primary',
    size: 'md',
  },
};

export const SecondaryWithLeftIcon: Story = {
  args: {
    text: 'text',
    iconLeft: <ArrowRight />,
    variant: 'secondary',
    size: 'md',
  },
};

export const SecondaryWithRightIcon: Story = {
  args: {
    text: 'text',
    iconRight: <ArrowRight />,
    variant: 'secondary',
    size: 'md',
  },
};

export const SecondaryWithIcons: Story = {
  args: {
    text: 'text',
    iconLeft: <ArrowRight />,
    iconRight: <ArrowRight />,
    variant: 'secondary',
    size: 'md',
  },
};

export const SecondaryWithIconsOnClick: Story = {
  args: {
    text: 'text',
    iconLeft: <ArrowRight />,
    iconRight: <ArrowRight />,
    variant: 'secondary',
    size: 'md',
    onClick: () => {
      alert('With Icons OnClick!');
    },
  },
};

export const SecondaryWithLoading: Story = {
  args: {
    text: 'Loading ...',
    iconLeft: <Loader2 className="animate-spin" />,
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    text: 'Back',
    iconLeft: <ArrowLeft />,
    variant: 'outline',
  },
};
