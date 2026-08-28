import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/ui/MouseGlow";
import { ContactModalProvider } from "@/components/ui/ContactModal";
import ChatAgent from "@/components/ui/ChatAgent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyRebanho | Gestão Pecuária Inteligente",
  description:
    "Visibilidade total do seu negócio pecuário: controle de animais, GMD, mapeamento por satélite e gestão financeira em um único sistema.",
  keywords: [
    "gestão pecuária",
    "software fazenda",
    "controle de gado",
    "SaaS pecuária",
    "GMD bovino",
    "MyRebanho",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MyRebanho | Gestão Pecuária Inteligente",
    description: "Visibilidade total do seu negócio pecuário.",
    type: "website",
    locale: "pt_BR",
  },
};

const FB_PIXEL_ID = "3341992665953540";
const HS_PORTAL_ID = "47673728";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-charcoal text-branco font-sans antialiased">
        <ContactModalProvider>
          <MouseGlow />
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatAgent />
        </ContactModalProvider>

        {/* Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {/* HubSpot tracking */}
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src={`//js-na1.hs-scripts.com/${HS_PORTAL_ID}.js`}
        />
                
        {/* Agent site */}
        <Script
          id="n8n-chat-agent"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const n8nWebhookUrl = "https://poisonouspiranha-n8n.cloudfy.live/webhook/chat-agent";
              const sessionId = localStorage.getItem('chatSessionId') || crypto.randomUUID();
              localStorage.setItem('chatSessionId', sessionId);

              window.sendMessageToAgent = async function(userMessage) {
                try {
                  const response = await fetch(n8nWebhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ sessionId, message: userMessage })
                  });
                  const data = await response.json();
                  return data.reply;
                } catch (error) {
                  console.error("Erro n8n:", error);
                }
              };
            `
          }}
        />
      </body>
    </html>
  );
}
