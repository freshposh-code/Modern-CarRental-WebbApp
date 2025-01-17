import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/Theme/theme-provider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SessionWrapper from "@/lib/SessionWrapper";
import App from "./App";

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
      <body className="bg-zinc-100 dark:bg-zinc-900">
      <SessionWrapper>
        <App>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </App>
      </SessionWrapper>
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
