

import Image from "next/image";
import Layout from './layout'
import Button from "../components/button";

//capter comment foutre h-4/5
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen"> 
      <div className="text-7xl font-thin">We build your <span className="font-bold">generative AI</span> app</div>

      <div className="m-8 text-3xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <Button buttonText="Get Started"/>

    </div>
  );
}
