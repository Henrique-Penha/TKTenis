'use client';

import Hero from "./components/Hero";
import Info from "./components/Info";
import Galery from "./components/Galery";

export default async function Home() {

  return (
    <main>
      <Hero />
      <Info />
      <Galery />
    </main>
  );
}
