import Technologies from "@/app/Components/Technologies";
import Project from "@/app/Components/Project";
import Home from "@/app/Components/Home"
import About from "@/app/Components/About";
import LetConnect from "@/app/Components/LetConnect";

const page = () => {
  return (
    <>
      <Home />
      <About />
      <Technologies />
      <Project/>
      
      <LetConnect />
    </>
  );
};

export default page;
