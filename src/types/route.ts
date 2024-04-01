export interface PublicRouteObject {
  path: string;
  isRestricted?: boolean;
  layout?: React.ReactNode;
}
export interface PrivateRouteObject {
  roles: string[];
  layout?: React.ReactNode;
}
