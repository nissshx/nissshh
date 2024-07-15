
import { Spline_Sans } from "next/font/google";
import "./globals.css";
const spline = Spline_Sans({subsets:["latin"]})
export const metadata = {
  title: "@nissshh",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spline.className}>{children}</body>
    </html>
  );
}
