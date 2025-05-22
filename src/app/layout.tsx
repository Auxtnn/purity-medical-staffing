import { Space_Grotesk } from "next/font/google";
import { ClientLayoutWrapper } from "@/component/LayoutWrapper";
import { Metadata } from "next";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purity Medical Staffing | Building Healthier Communities",
  description:
    "Your partner in providing quality healthcare staffing solutions for facilities and opportunities for medical professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.className}`}>
      <body>
        <ClientLayoutWrapper>
          <main>{children}</main>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
