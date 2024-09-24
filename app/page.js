import Blog from "@/components/homeComponents/Blog";
import Contact from "@/components/homeComponents/Contact";
import EtatApp from "@/components/homeComponents/EtatApp";
import FormationPart1 from "@/components/homeComponents/FormationPart1";
import FormationPart2 from "@/components/homeComponents/FormationPart2";
import HeroSection from "@/components/homeComponents/HeroSection";
import Navbar from "@/components/homeComponents/Navbar";  

export default function Home() {
  return (
    <> 
        <Navbar /> 
        <HeroSection /> 
        <FormationPart1/>
        <FormationPart2/>
        <EtatApp/>
        <Blog/>
        <Contact/>
    </>
  );
}
