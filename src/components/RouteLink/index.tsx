import { Link, LinkProps } from 'react-router-dom';

export function RouteLink(props: LinkProps) {
  return <Link style={{ textDecoration: 'none' }} {...props} />;
}
