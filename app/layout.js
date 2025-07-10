import './globals.css';
export const metadata = {
  title: "Modern Business Landing",
  description: "Landing page for business with Tailwind and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
