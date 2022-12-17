import useSWR from "swr";
const fetcher = url => fetch(url).then(res => res.json());

export const useGetPosts = (initialData) => {
  return useSWR('/api/posts', fetcher, {
    fallbackData: initialData
  });
}