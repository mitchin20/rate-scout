import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: 'Mortgage Platform',
    description:
        'Compare real-time mortgage rates from multiple lenders and find the best loan options for your needs.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning // add this to fix browser extensions injecting attributes into your HTML after the server rendered it.
                // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                <main className="container mx-auto p-6">{children}</main>
            </body>
        </html>
    );
}
