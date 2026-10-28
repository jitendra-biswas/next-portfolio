import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/app/Components/Nav";
import Footer from "@/app/Components/Footer";
import { ThemeProvider } from "@/app/Components/theme-provider";
import CustomCursor from "@/app/Components/CustomCursor";



export const metadata: Metadata = {
  title: "Jitendra Biswas - Full Stack Web Developer",
  description: "I am Full Stack Developer enjoys building modern, responsive, and interactive web applications. I love turning ideas into clean, user-friendly digital experiences.",
  icons:"/images/favicon.png"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col px-[30vw] lg:px-[25vw] max-lg:px-[20vw] max-md:px-[5vw] dark:bg-black">
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        >
          <CustomCursor />
          <Nav />
        {children}
        <Footer />
        </ThemeProvider>
        
        </body>
    </html>
  );
}
