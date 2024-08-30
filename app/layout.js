
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import NavMenu from "./_components/NavMenu";

import { firaGo, gordeziani } from "./_lib/fonts";

import "./globals.css";

export const metadata = {
  title: "ქართული ფუტურიზმის 100 წელი",
  description: "ეძღვნება ქართველი ავანგარდისტების (ფუტურისტების და დადაისტების) ლიტერატურულ ასპარეზზე გამოსვლის ასი წლის იუბილეს.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaGo.variable} ${gordeziani.variable} font-firaGo font-light flex flex-col h-screen`}>

        <div className="px-4 container container-xl mx-auto">
          <Header />
          <main className="flex">
            <NavMenu />
            <div className="flex flex-1">
              {children}
            </div>
          </main>
        </div>
        <Footer />

      </body>
    </html>
  );
}
