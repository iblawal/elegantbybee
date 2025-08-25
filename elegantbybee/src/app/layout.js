import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './globals.css';                        // your custom styles override



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elegante Bee",
  description: "Elegance meets experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Navbar always at top */}
        <Navbar />

        {/* Page Content */}
        {children}

        {/* Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
