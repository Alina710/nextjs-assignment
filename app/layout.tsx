import './globals.css';

export const metadata = {
  title: 'My Country App',
  description: 'A simple country listing app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container mx-auto p-5">{children}</body>
    </html>
  );
}
