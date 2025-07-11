import type { Meta, StoryObj } from '@storybook/react';

import { CustomDocsPage } from '@storybook-docs';
import { ButtonV2 } from '@/ui/Button/ButtonV2';

import { action } from '@storybook/addon-actions';
import { Icons } from '@/icons/icon';

const meta = {
  component: ButtonV2,
  parameters: {
    docs: {
      page: CustomDocsPage,
    },
    layout: 'centered',
  },
  args: {
    text: 'text',
    iconLeft: '',
    iconRight: '',
    onClick: action('on-click'),
  },
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'outline'] },
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
  },
} satisfies Meta<typeof ButtonV2>;

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
    iconLeft: <Icons.arrowRight />,
    variant: 'primary',
    size: 'md',
  },
};

export const PrimaryWithRightIcon: Story = {
  args: {
    text: 'text',
    iconRight: <Icons.arrowRight />,
    variant: 'primary',
    size: 'md',
  },
};

export const PrimaryWithIcons: Story = {
  args: {
    text: 'text',
    iconLeft: <Icons.arrowRight />,
    iconRight: <Icons.arrowRight />,
    variant: 'primary',
    size: 'md',
  },
};

export const PrimaryWithIconsOnClick: Story = {
  args: {
    text: 'text',
    iconLeft: <Icons.arrowRight />,
    iconRight: <Icons.arrowRight />,
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
    iconLeft: <Icons.loader2 className="animate-spin" />,
    variant: 'primary',
    size: 'md',
  },
};

export const SecondaryWithLeftIcon: Story = {
  args: {
    text: 'text',
    iconLeft: <Icons.arrowRight />,
    variant: 'secondary',
    size: 'md',
  },
};

export const SecondaryWithRightIcon: Story = {
  args: {
    text: 'text',
    iconRight: <Icons.arrowRight />,
    variant: 'secondary',
    size: 'md',
  },
};

export const SecondaryWithIcons: Story = {
  args: {
    text: 'text',
    iconLeft: <Icons.arrowRight />,
    iconRight: <Icons.arrowRight />,
    variant: 'secondary',
    size: 'md',
  },
};

export const SecondaryWithIconsOnClick: Story = {
  args: {
    text: 'text',
    iconLeft: <Icons.arrowRight />,
    iconRight: <Icons.arrowRight />,
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
    iconLeft: <Icons.loader2 className="animate-spin" />,
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    text: 'Back',
    iconLeft: <Icons.arrowLeft />,
    variant: 'outline',
  },
};
