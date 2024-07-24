import HeroSection from "@/components/HeroSection";
import ServiceBar from "@/components/ServiceBar";
import DernierCollection from "@/components/DernierCollection";
import AppelezNousMaintenant from "@/components/AppelezNousMaintenant";
import AiderlesIndividus from "@/components/AiderlesIndividus";
import ParcourezLeGamme from "@/components/ParcourezLeGamme";
import OfrireMeilleurService from "@/components/OfrireMeilleurService";
import AppelezNouTwo from "@/components/AppelezNouTwo";
import DisentNosClients from "@/components/DisentNosClients";
import JoignezVous from "@/components/JoignezVous";
import NosBlog from "@/components/NosBlog";

export default function HomePage() {
  return (
    <div >
      <HeroSection />
      <ServiceBar/>
      <DernierCollection/>
      <AppelezNousMaintenant/>
      <ParcourezLeGamme/>
      <OfrireMeilleurService/>
      <AiderlesIndividus/>
      <AppelezNouTwo/>
      <DisentNosClients/>
      <NosBlog/>
      <JoignezVous/>

    </div>     
    
  );
}
