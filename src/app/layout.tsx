import ThemeSwitcher from "@/components/ThemeSwitcher";
import { cn } from "@/libs";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Miller Mosquera | Portafolio",
  description: "Desarrollador de Software",
  icons:{
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body className={cn(inter.className)}>
        <Providers>
          <main
            className="animate-fade-down animate-once top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          >
            <div className="flex flex-row-reverse p-5">
              <ThemeSwitcher />
            </div>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
