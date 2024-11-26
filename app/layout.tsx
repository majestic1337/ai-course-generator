import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Course Generator",
  description:
    "AI Course Generator це платформа, яка дозволяє користувачам легко створювати та генерувати навчальні курси за допомогою штучного інтелекту. Просто ввівши дані про курс, такі як назва, тривалість, кількість розділів і вказавши, чи включені відео, ШІ генерує всю структуру курсу, а також відповідні відео з YouTube для кожного розділу.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <GoogleOneTap />
        <body className={inter.className}>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </ClerkProvider>
    </html>
  );
}
