import { useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const searchParams = useSearchParams();

  const getParam = (key: string) => searchParams.get(key);
  const hasParam = (key: string) => searchParams.has(key);

  return { getParam, hasParam };
};
