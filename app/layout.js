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
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
