import HeroSection from "@/components/HeroSection";
import ServiceBar from "@/components/ServiceBar";
import DernierCollection from "@/components/DernierCollection";
import AppelezNousMaintenant from "@/components/AppelezNousMaintenant";
import AiderlesIndividus from "@/components/AiderlesIndividus";
import ParcourezLeGamme from "@/components/ParcourezLeGamme";
import OfrireMeilleurService from "@/components/OfrireMeilleurService";
import AppelezNouTwo from "@/components/AppelezNouTwo";
import DisentNosClients from "@/components/DisentNosClients";

export default function HomePage() {
  return (
    <div >
      <HeroSection />
      <ServiceBar/>
      <DernierCollection/>
      <AppelezNousMaintenant/>
      <AiderlesIndividus/>
      <ParcourezLeGamme/>
      <OfrireMeilleurService/>
      <AppelezNouTwo/>
      <DisentNosClients/>
        </div>     
    
  );
}
