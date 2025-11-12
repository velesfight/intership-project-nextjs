import { ComponentProps, ReactNode } from 'react';

import { Link as NavigationLink } from '~/shared/lib/navigation';

export type ButtonVariant =
  | 'primary'
  | 'semiPrimary'
  | 'secondary'
  | 'whitePrimary'
  | 'transparentPrimary'
  | 'transparentGray'
  | 'transparentWhite'
  | 'semiGray';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonIconSide = 'start' | 'end';
export type ButtonElement = 'button' | 'a' | 'Link';

export interface CommonButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconSide?: ButtonIconSide;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
}

interface ButtonAsButtonProps extends CommonButtonProps, ComponentProps<'button'> {
  as?: 'button';
  loading?: boolean;
}

interface ButtonAsAnchorProps extends CommonButtonProps, ComponentProps<'a'> {
  as: 'a';
}

type NavigationLinkProps = ComponentProps<typeof NavigationLink>;

interface ButtonAsLinkProps extends CommonButtonProps, NavigationLinkProps {
  as: 'Link';
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps;
