import useSWR from 'swr';

const fetcher = (url) =>
  fetch(url).then((res) => {
    return res.json();
  });


export const useGetUsers = () => {
  return useSWR(`https://69415461686bc3ca816695fc.mockapi.io/users`, fetcher,{
    onError: (error) => {
      console.error(error);
    }
  });
};
