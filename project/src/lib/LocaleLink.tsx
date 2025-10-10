import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { localePath } from '@/lib/useTranslations';

type ToLike = string | { pathname?: string } & Record<string, any>;

function toWithLocale(to: ToLike): ToLike {
  if (typeof to === 'string') return localePath(to);
  const pathname = to.pathname ?? '/';
  return { ...to, pathname: localePath(pathname) };
}

export function LocaleLink(props: LinkProps) {
  const nextTo = toWithLocale(props.to as ToLike);
  return <Link {...props} to={nextTo as any} />;
}
