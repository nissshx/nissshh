import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: './noto.otf' })
export const metadata = {
  title: "@nissshh",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
