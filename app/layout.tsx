import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Navbar, Footer } from "./(shared)";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog AI App",
  description: "Blog App built in Nextjs 13.4.4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
