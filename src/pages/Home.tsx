import { GovernmentSection } from "../components/GovernmentSection";
import { SmarterNJHelps } from "../components/SmarterNJHelps";
import { Partners } from "../components/Partners";
import { ContactSection } from "../components/ContactSection";

export function Home() {
  return (
    <div>
      <GovernmentSection />
      <SmarterNJHelps />
      <Partners />
      <ContactSection />
    </div>
  );
}
