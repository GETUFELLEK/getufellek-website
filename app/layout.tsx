import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio website of Getu Tadesse Fellek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Getu Tadesse Fellek - AI Engineer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Getu Tadesse Fellek, an AI Engineer and software developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
