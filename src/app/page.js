"use client"
import React, { useCallback } from 'react';
import PokemonList from "./components/PokemonList";

import { ThemeContext } from "./contexts";

export default function Home() {

    const alertCallback = useCallback((message) => {
        console.warn(message);
        alert(message);
    }, []);

  return (
      <ThemeContext.Provider>
          <PokemonList />
      </ThemeContext.Provider>
  );
}
