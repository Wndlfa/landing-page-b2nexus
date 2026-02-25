import LogoLoop from './logo-loop/LogoLoop';
import { FaMeta } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaWhatsapp, FaStripe } from 'react-icons/fa';
import { SiElevenlabs, SiOpenai, SiAnthropic, SiGoogle, SiGooglegemini } from 'react-icons/si';

const techLogos = [
  { node: <FaMeta />, title: "Meta", href: "https://meta.com" },
  { node: <FaFacebook />, title: "Facebook", href: "https://facebook.com" },
  { node: <FaInstagram />, title: "Instagram", href: "https://instagram.com" },
  { node: <FaWhatsapp />, title: "Whatsapp", href: "https://whatsapp.com" },
  { node: <SiGoogle />, title: "Google", href: "https://google.com" },
  { node: <FaStripe />, title: "Stripe", href: "https://stripe.com" },
  { node: <SiElevenlabs />, title: "ElevenLabs", href: "https://elevenlabs.io" },
  { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
  { node: <SiAnthropic />, title: "Anthropic AI", href: "https://anthropic.com" },
  { node: <SiGooglegemini />, title: "Gemini", href: "https://gemini.com" },
];


export function TrustIndicators() {
  return (
    <div style={{ width: '100%', height: '80px', position: 'relative', overflow: 'hidden', marginTop: '30px', color: '#bdbabb', opacity: 0.5}}>
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={35}
        gap={80}
        hoverSpeed={0}
        scaleOnHover
        showTitle
        ariaLabel="Powered by:"
      />
    </div>
  );
}