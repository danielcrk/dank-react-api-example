import React, { useState } from 'react';
import useTimeFetcher from '../hooks/useTimeFetcher';

interface ITime {
  status: 'LOADING' | 'DONE';
  value?: string;
}

interface ITimeContext {
  time: ITime;

  getTime: () => void;
  clearTime: () => void;
}

export const TimeContext = React.createContext({} as ITimeContext);

// In this example, we want to context to to more or less be a traditional controller,
// keeping state and performing actions.
export const TimeContextProvider: React.FC = ({ children }) => {
  const [time, setTime] = useState<ITime>({ status: 'LOADING' });
  const fetchTimeFromApi = useTimeFetcher();

  const getTime = () => {
    console.log('TimeContextProvider => getTime()');

    setTime({ status: 'LOADING' });

    fetchTimeFromApi().then((time) =>
      setTime({
        status: 'DONE',
        value: time,
      })
    );
  };

  const clearTime = () => {
    console.log('TimeContextProvider => clearTime()');

    setTime({ status: 'LOADING' });
  };

  return (
    <TimeContext.Provider
      value={{
        time,

        getTime,
        clearTime,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};
