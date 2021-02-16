import React from 'react';


import { TopSection } from './components/Top-Section/Top-Section';
import { SecondSection } from './components/Second-Section/Second-Section';
import { LastSection } from './components/Last-Section/Last-Section';
import './App.css';

function App() {
  return (
    <div className='App'>
      <TopSection />
      <SecondSection />
      <LastSection/>
    </div>
  );
}

export default App;
