import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const poppins = Poppins({ subsets: ["latin"],weight: ['200','400','700']});

export const metadata = {
  title: "Synapse",
  description: "website synapes AI Generative LLM IA GPT ChatGPT",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
      
      </body>
    </html>
  )
}
