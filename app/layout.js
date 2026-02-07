import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EduHealth",
  description: "Created with Love",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-shell text-slate-900 dark:text-slate-100">
        <Navbar />
        <main className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
