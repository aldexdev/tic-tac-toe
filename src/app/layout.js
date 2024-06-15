import "./globals.css";

export const metadata = {
  title: "Tres en Raya",
  description: "Versión del famoso juego Tres en Raya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
