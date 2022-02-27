import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';

function App() {

  const tabList = [
    {
      label: "Tab 1",
      text: "Content for the first tab."
    },
    {
      label: "Tab 2",
      text: "Content for the second tab."
    },
    {
      label: "Tab 3",
      text: "Content for the third tab."
    }
  ]

  const [currentTab, setCurrentTab] = useState(0);



  return (
    <div className="App">
      <Tabs 
      tabList={tabList}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      />
      <Display tabText={tabList[currentTab].text} />
    </div>
  );
}

export default App;
