import "./globals.css";

export const metadata = {
  title: "Student Life OS",
  description: "A platform for student life management"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
