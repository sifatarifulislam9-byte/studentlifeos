import "./globals.css";

export const metadata = {
  title: "EduFlow – Student Life OS",
  description: "Student Life Operating System for Class 9–12",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
