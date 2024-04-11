'use client';

import Header from "./components/Header"
import Hero from "./components/Hero";
import Info from "./components/Info";
import Galery from "./components/Galery";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Info />
      <Galery />
    </main>
  );
}
