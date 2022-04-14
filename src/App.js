import './App.css';
import React from 'react';
import { TimerStopWatch } from './components/timerStopWatch';
import { Layout } from './_layout';

function App() {
  return (
    <Layout>
      <TimerStopWatch/>
    </Layout>
  );
}

export default App;
