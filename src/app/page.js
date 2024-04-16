"use client"
import React, { createContext } from 'react';
import Count from './components/Count';
import Chatbot from "./components/Chatbot";
import Card from './components/Card';
import { ThemeContext } from "./contexts";

export default function Home() {

  return (
      <ThemeContext.Provider value={{user: "Juan", clicks: 100}}>
          <Count/>
          <Chatbot/>
          <Card/>
      </ThemeContext.Provider>
  );
}
