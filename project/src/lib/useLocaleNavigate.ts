import { useNavigate } from 'react-router-dom';
import { localePath } from './useTranslations';

type ToLike = string | { pathname?: string } & Record<string, any>;

const toWithLocale = (to: ToLike): ToLike =>
  typeof to === 'string'
    ? localePath(to)
    : { ...to, pathname: localePath(to.pathname ?? '/') };

export function useLocaleNavigate() {
  const navigate = useNavigate();
  return (to: ToLike, options?: Parameters<typeof navigate>[1]) =>
    navigate(toWithLocale(to) as any, options);
}
