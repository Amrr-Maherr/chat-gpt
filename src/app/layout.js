import "./globals.css";

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
      <body className="antialiased font-segoe">{children}</body>
    </html>
  );
}
