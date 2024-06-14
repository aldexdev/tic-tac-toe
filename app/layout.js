import { Metadata } from "next";

// These styles apply to every route in the application
import "./globals.css";

export const metadata = {
  title: "Tres en Raya",
  description: "Versión del famoso juego Tres en Raya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
