import React, { FC } from 'react';
import './App.less';

import Header from './components/Header';
import Cover from './components/Cover';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

const App: FC = () => (
  <div className="App">
    <Header/>
    <Cover/>
    <About/>
    <Resume/>
    <Portfolio/>
  </div>
);

export default App;
