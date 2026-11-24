import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { CartProvider } from "./context/cartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryProvider from "../app/QueryProvider/QueryProvider";
// הגדרת הפונט
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // 400 זה רגיל, 700 זה מודגש
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryProvider>
          <CartProvider>
           <div className="app-container">
              <NavBar />
              <div className="main-content">{children}</div>
              <Footer />
            </div>
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
