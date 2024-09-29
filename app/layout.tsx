import "@/app/css/globals.css";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Menu />
        {children}
      </body>
    </html>
  );
}
