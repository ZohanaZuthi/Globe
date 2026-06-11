import "./globals.css";

export const metadata = {
  title: "Globe",
  description: "Flight booking landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}






