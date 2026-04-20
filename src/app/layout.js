import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";

// הגדרת הפונט
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // 400 זה רגיל, 700 זה מודגש
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
