


"use client";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmoothScroll from "../SmoothScroll";
import { usePathname } from "next/navigation";

const IntroLoader = dynamic(() => import("./IntroLoader"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";
  const isStudio = pathname?.startsWith("/studio");

  // Sanity Studio runs its own UI — skip Navbar, Footer, IntroLoader, and SmoothScroll entirely
  if (isStudio) {
    return <>{children}</>;
  }

  if (isContact) {
    return (
      <>
        <IntroLoader />
        {children}
      </>
    );
  }

  return (
    <>
      <IntroLoader />
      <SmoothScroll>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </SmoothScroll>
    </>
  );
}