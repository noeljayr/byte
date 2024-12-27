import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/plus-jakarta-sans/200-italic.css";
import "@fontsource/plus-jakarta-sans/300-italic.css";
import "@fontsource/plus-jakarta-sans/400-italic.css";
import "@fontsource/plus-jakarta-sans/500-italic.css";
import "@fontsource/plus-jakarta-sans/600-italic.css";
import "@fontsource/plus-jakarta-sans/700-italic.css";
import "@fontsource/plus-jakarta-sans/800-italic.css";
import "@/css/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "byte.",
  description: "Buy best quality laptops",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col  pt-24 gap-16">
        <Navbar />

        <div className="main-content w-full h-full">
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
