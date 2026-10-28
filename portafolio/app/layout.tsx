import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bricolage",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata = {
  title: "Santiago Barrientos, desarrollador backend",
  description: "Portafolio de desarrollo backend: chatbots, apps web y automatizaciones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
