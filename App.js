import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routers from './src/routers';

export default function App() {
  return (
    <>
      <Routers />
      <StatusBar style="auto" />
    </>
  );
}

