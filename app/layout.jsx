import "./globals.css";

export const metadata = {
  title: "The Crochet Corner | Handmade Studio",
  description:
    "Soft, handmade crochet pieces that feel like a warm hug. Handmade Studio landing page."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
