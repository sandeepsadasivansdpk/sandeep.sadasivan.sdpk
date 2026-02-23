import React from "react";
import { Header } from "../containers";
import { About } from "../containers";
import { Work } from "../containers";
import { Skills } from "../containers";
import { Testimonial } from "../containers";
import { Contact } from "../containers";

const HomePage = () => {
  return <>
    <Header />
    <About />
    {/* <Work /> */}
    <Skills />
    <Testimonial />
    <Contact />
  </>;
};

export default HomePage;
