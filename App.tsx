import React from 'react';
import Routes from './src/Routes/Index';
import {AuthProvider} from './src/Context/Auth';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
