
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from  './components/shared/Navbar.jsx';
import { Toaster } from "react-hot-toast";
import { Providers } from "./provider.js";
import ProgressBar from "./components/progressbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Toaster/> */}
      <ProgressBar/>
     <Providers>
      <Navbar/>
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}
      </body>
</Providers>
    
      
    </html>
  );
}
