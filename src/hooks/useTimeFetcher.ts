import useTimeFormatter from './useTimeFormatter';

const useTimeFetcher = () => {
  const formatTime = useTimeFormatter();

  // Simulates an async request and returns a promise.
  const fetchTimeFromApi = (): Promise<string> => {
    console.log('useTimeFetcher => fetchTime()');

    return new Promise((resolve) => {
      window.setTimeout(() => {
        const dateTime = new Date();
        const time = formatTime(dateTime);

        resolve(time);
      }, 1000);
    });
  };

  return fetchTimeFromApi;
};

export default useTimeFetcher;
