import "./globals.css";
import { Inter } from "next/font/google";
import FooterSection from "@/sections/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Comprehensive Driver's and Vehicle's Record Reports | DriveCheck",
  description:
    "Access reliable and comprehensive driver's and vehicle's record reports with DriveCheck. Make informed decisions for safer roads. Get started now!",
  keywords:
    "driver's record report, vehicle record report, driving history, traffic violations, license suspension, accident history, vehicle ownership information, comprehensive reports, reliable data, informed decisions, road safety, DriveCheck",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-gray-700">
      <body className={inter.className}>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
