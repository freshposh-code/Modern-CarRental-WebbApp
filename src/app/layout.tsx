import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/Theme/theme-provider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-darkBackground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ToastContainer
          position="top-center"
          toastStyle={{
            backgroundColor: '#868686',
            color: '#fff',
            borderRadius: '22px',
            fontSize: '14px',
          }}
        />
      </body>
    </html>
  );
}
