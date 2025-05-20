import { Jost } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
});

export const metadata = {
  title: "Recovo",
  description: "Your trusted source for product recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
