"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom 
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          navItems={
            [
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "How to Buy", id: "how-to-buy" },
              { name: "Tokenomics", id: "tokenomics" },
              { name: "FAQ", id: "faq" },
              { name: "Footer", id: "footer" }
            ]
          }
          defaultSelectorValue="#hero"  
          onSelectorChange={() => { }}
          buttonText="Buy Now"
          className="bg-[#fff]"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero 
          title="Welcome to MemePulse!"
          subtitle="The fun community-driven memecoin"
          contractAddress="0x123456789"
          copyButtonText="Copy Address"
          copiedText="Address copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout 
          title="About MemePulse"
          descriptions={["MemePulse is a playful memecoin designed for the community.", "Join the fun and invest in your future!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Understanding the tokenomics of MemePulse is key to participating in our community."
          cardItems={[{ id: 1, title: "Supply", description: "1 Billion tokens" }, { id: 2, title: "Market Cap", description: "$10 Million" }]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ 
          items={[{ title: "What is MemePulse?", content: "MemePulse is a community meme coin that promotes fun and accessibility." }]} 
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemePulse logo"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => console.log('Clicked Privacy Policy') }] },
            { items: [{ label: "Contact", onClick: () => console.log('Clicked Contact') }] },
            { items: [{ label: "Terms of Service", onClick: () => console.log('Clicked Terms of Service') }] }
          ]}
          logoText="MemePulse"
          onPrivacyClick={() => console.log('Clicked Privacy Policy')}
          className="footer-class"  // Add other needed classes here
        />
      </div>
    </SiteThemeProvider>
  );
}
