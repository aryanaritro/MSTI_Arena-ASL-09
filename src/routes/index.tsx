/* Index */

import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";

import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footprints } from "@/components/sections/Footprints";
import { SelectedWork } from "@/components/sections/SelectedWork";
//import { LiveOnTheWeb } from "@/components/sections/LiveOnTheWeb";
//import { Experiments } from "@/components/sections/Experiments";
import { About } from "@/components/sections/About";
//import { Skills } from "@/components/sections/Skills";
//import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const TITLE = "Aryan Aritro — Developer, Innovator, Technologist";
const DESC =
  "Portfolio of Aryan Aritro: web and software development, AI assistants, creative technology and experimental builds.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);
  const done = useCallback(() => setReady(true), []);

  return (
    <SmoothScroll>
      <Preloader onDone={done} />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero ready={ready} />
        <About />
        <SelectedWork />
        <Footprints />
        {/* <LiveOnTheWeb /> */}
        {/* <Experiments /> */}
        {/* <Skills /> */}
        {/* <Journey /> */}
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
