import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants';
import axiosClient from '~/libs/axios';

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
};

const getUserById = async (id: string) => {
  return (await axiosClient.get(`users/${id}`)).data as User;
};

export const useQueryUserById = (
  id: string,
  options?: Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.USER_BY_ID, id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};
