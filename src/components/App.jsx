import React from 'react';

import WeekContainer from './WeekContainer';

import '../scss/style.scss';

const App = () => {

  return (
    <div className="app">
      <header className="app_header">
        <h1>React Weather App Demo</h1>
      </header>
      <main>
        <WeekContainer />
      </main>
    </div>
  );
}

export default App;
