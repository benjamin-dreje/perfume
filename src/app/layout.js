
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <NavBar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
