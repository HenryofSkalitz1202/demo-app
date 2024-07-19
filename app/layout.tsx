import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";

const poppins = Poppins({ weight: ["300", "400", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication",
  description: "Using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sunset">
      <body className={poppins.className}>
        <Provider>
          <main className='h-screen flex flex-col mt-4 justify-center items-center'>
            <Navbar/>
            {children}
          </main>
          <Toaster/>
        </Provider>
      </body>
    </html>
  );
}
