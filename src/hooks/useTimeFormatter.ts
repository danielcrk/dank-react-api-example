// This could have been a plain mixin, but let's assume it needs
// to run within the React context.
const useTimeFormatter = () => {
  const formatTime = (timeDate: Date) => {
    console.log('useTimeFormatter => formatTime()');

    const formattedTime = `${timeDate.getHours()}:${timeDate.getMinutes()}:${timeDate.getSeconds()}`;
    return formattedTime;
  };

  return formatTime;
};

export default useTimeFormatter;
