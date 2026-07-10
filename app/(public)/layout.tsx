import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "../globals.css"

import { ContainerPage } from "@/components/container-page";
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip";

const oxanium = Oxanium({
  weight: ['400', '600', "800"],
  subsets: ["latin"],
  style: ["normal"]
})

export const metadata: Metadata = {
  title: "Augusto Sousa",
  description: "Desenvolvedor Full Stack",
};

export default function RootLayout() {
  return (
    <html lang="pt-br" className="scroll-smooth dark">
      <body
        className={`${oxanium.className} antialiased bg-background da`}
      >
        <TooltipProvider>
          <ContainerPage />
        </TooltipProvider>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
