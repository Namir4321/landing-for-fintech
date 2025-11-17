import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Partner from "@/components/Partners/Partner";
import Feature from "@/components/Feature/Feature";
import EnterprisesSection from "@/components/Enterprises/EnterprisesSection";
import Developer from "@/components/Developer/Developer";
import NoCodeSection from "@/components/Info/info";
import Footer from "@/components/Footer/footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Partner />
      <Feature />
      <EnterprisesSection />
      <Developer />
      <NoCodeSection />
      <Footer />
    </>
  );
}
