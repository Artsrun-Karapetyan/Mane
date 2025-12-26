import useSWR from "swr";


export const useGetCourts = () => {
  return useSWR("/courts", {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useCourtDetail = (id) => {
  return useSWR(`/courts/${id}`, {
    onError: (error) => {
      console.error(error);
    },
  });
};
