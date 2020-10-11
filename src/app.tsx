import React from 'react';
import Presenter from './components/presenter';
import { TimeContextProvider } from './contexts/timeContext';

const App = () => {
  return (
    <TimeContextProvider>
      <Presenter />
    </TimeContextProvider>
  );
};

export default App;
