import React, {
  ReactNode,
  ButtonHTMLAttributes,
  MouseEvent,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react';

import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const Button = ({
  text,
  iconLeft,
  iconRight,
  variant = 'primary',
  size,
  disabled,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const renderIcon = (icon: ReactNode) => {
    if (!isValidElement(icon)) return null;

    const element = icon as ReactElement<any>;
    return cloneElement(element, {
      className: cn('w-4 h-4', element.props.className),
      'aria-hidden': true,
    });
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-gradient-to-r from-pink-600 to-cyan-700 
      text-white 
      hover:from-pink-500 hover:to-cyan-600 
      disabled:opacity-30
    `,
    secondary: `
      bg-[#027582] 
      text-white 
      hover:bg-cyan-600 
      disabled:opacity-30
    `,
    outline: `
      border border-[#5F5F5E] 
      text-[#5F5F5E]
      bg-white 
      hover:bg-gray-100 
      disabled:opacity-30
    `,
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-base gap-1 min-w-[147px] h-[32px]',
    md: 'px-4 py-2 text-base font-semibold gap-2 min-w-[154px] h-[44px] leading-5',
    lg: 'text-lg gap-2.5 min-w-[260px] h-[56px] py-2 px-6 font-semibold leading-4',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-colors disabled:cursor-not-allowed disabled:pointer-events-none px-8 gap-2 py-1.5',
        variantClasses[variant],
        size ? sizeClasses[size] : '',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconLeft && renderIcon(iconLeft)}
      <span>{text}</span>
      {iconRight && renderIcon(iconRight)}
    </button>
  );
};
