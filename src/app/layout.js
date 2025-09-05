import "./globals.css";
import Script from "next/script";
import LayoutContent from "./LayoutContent";

export const metadata = {
  title: "ChatGPT",
  description:
    "A powerful AI assistant chatbot powered by advanced language models. Ask anything, anytime.",
  icons: { icon: "/icons/Vector.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased font-segoe">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
