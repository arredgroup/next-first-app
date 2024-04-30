"use client"
import React, { useCallback } from 'react';
import Count from './components/Count';
import Chatbot from "./components/Chatbot";
import CardInfo from './components/CardInfo';
import PanicButton from './components/PanicButton';
import Memo from './components/Memo';
import { ThemeContext } from "./contexts";

export default function Home() {

    const alertCallback = useCallback((message) => {
        console.warn(message);
        alert(message);
    }, []);

  return (
      <ThemeContext.Provider value={{user: "Juan", clicks: 100}}>
          <Count/>
          <br />
          <Chatbot/>
          <br />
          <CardInfo/>
          <br />
          <PanicButton alertCallback={alertCallback}/>
          <br />
          <Memo data={[1,2,3,4]} />
      </ThemeContext.Provider>
  );
}
