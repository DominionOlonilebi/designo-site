"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/landing-page/Hero";
import Design from "@/components/landing-page/Design";
import Service from "@/components/landing-page/Service";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      {/* landing page */}

      <Hero />
      <Design />
      <Service />
    </>
  );
}
