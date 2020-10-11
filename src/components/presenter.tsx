import React, { useContext, useEffect } from 'react';
import { TimeContext } from '../contexts/timeContext';

const Presenter = () => {
  const { time, getTime, clearTime } = useContext(TimeContext);

  // Manually refresh time.
  const onRefreshButtonClick = () => {
    getTime();
  };

  // Get time when the component renders. We only want to do this once.
  // As getTime doesn't have a stable signature, adding it to the dependency array
  // of course cases a loop.
  // Lets also assume we want the time to be cleared when the component unmounts (dismounts?).
  useEffect(() => {
    getTime();

    return clearTime;
  }, []);

  return (
    <div>
      {/* Loading state */}
      {time.status === 'LOADING' && <div>Loading...</div>}

      {/* Done state */}
      {time.status === 'DONE' && <div>Time is {time.value}</div>}

      {/* Refresh time button */}
      <button onClick={onRefreshButtonClick}>Refresh time</button>
    </div>
  );
};

export default Presenter;
