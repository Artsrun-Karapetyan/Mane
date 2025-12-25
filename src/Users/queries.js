import useSWR from "swr";

export const useGetUsers = () => {
  return useSWR(`/users`, {
    onError: (error) => {
      console.error(error);
    },
  });
};