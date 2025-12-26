import useSWRMutation from "swr/mutation";
import { useApiRequests } from '../../services/useApiRequests';
import { useSWRConfig } from "swr";

export const useAddCourts = () => {
  const { mutate } = useSWRConfig();
  const { POST } = useApiRequests();
  return useSWRMutation("/courts", POST, {
    onSuccess: async () => {
      mutate("/courts");
    },
    onError: async (error) => {
      console.log(error);
    },
  });
};

export const useCourtsUpdate = (id) => {
  const { mutate } = useSWRConfig();
  const { PUT } = useApiRequests();
  return useSWRMutation(`courts/${id}`, PUT, {
    onSuccess: async () => {
      mutate("/courts");
    },
    onError: async (error) => {
      console.log(error);
    },
  });
};

export const useCourtsDelete = (id) => {
  const { DELETE } = useApiRequests();
  const { mutate } = useSWRConfig();
  return useSWRMutation(`/courts/${id}`, DELETE, {
    onSuccess: async () => {
      mutate("/courts");
    },
    onError: async (error) => {
      console.log(error);
    },
  });
};
