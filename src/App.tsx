// import third party dependencies
import React from 'react';

// import local dependencies
import HomePage from './Pages/HomePage/HomePage';

function App(): JSX.Element {
  return (
    <div className="App">
      {HomePage()}
    </div>
  );
}

export default App;
