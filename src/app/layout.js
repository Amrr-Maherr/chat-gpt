import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: "chatGPT",
  description:
    "A powerful AI assistant chatbot powered by advanced language models. Ask anything, anytime.",
  icons: {
    icon: "/icons/Vector.png",
  },
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
      <body className="antialiased font-segoe">{children}</body>
    </html>
  );
}
