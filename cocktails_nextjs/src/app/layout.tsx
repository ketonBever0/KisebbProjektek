import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search Cocktails",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="synthwave">
        <Providers>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost normal-case text-xl">The Cocktails DB</Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/search">Search Cocktails</Link>
                </li>
                <li>
                  <details>
                    <summary>About...</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <Link href="/about">...Me</Link>
                      </li>
                      <li>
                        <a>...the Page</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral mx-auto px-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
