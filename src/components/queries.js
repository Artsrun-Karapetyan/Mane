import useSWR from "swr";

export const useGetUsers = () => {
  return useSWR(`/users`, {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetCourts = () => {
  return useSWR("/courts", {
    onError: (error) => {
      console.error(error);
    },
  });
};
