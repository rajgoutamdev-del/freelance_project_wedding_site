import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import styles from './Button.module.css';

interface BaseProps {
  children: ReactNode;
  className?: string;
}

interface InternalLinkProps extends BaseProps {
  to: string;
  href?: never;
  type?: never;
  onClick?: never;
}

interface ExternalLinkProps extends BaseProps {
  href: string;
  to?: never;
  type?: never;
  onClick?: never;
}

interface ActionButtonProps
  extends BaseProps,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'> {
  type?: 'button' | 'submit';
  to?: never;
  href?: never;
}

type ButtonProps = InternalLinkProps | ExternalLinkProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const { children, className } = props;
  const content = (
    <>
      <span className={styles.label}>{children}</span>
      <span className={styles.fill} aria-hidden="true" />
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cn(styles.button, className)}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={cn(styles.button, className)}
      >
        {content}
      </a>
    );
  }

  const { type = 'button', onClick, disabled } = props as ActionButtonProps;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(styles.button, className)}
    >
      {content}
    </button>
  );
}
