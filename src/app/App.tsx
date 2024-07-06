"use client";

import { Footer, Navbar } from "@/components";
import { UpButton } from "@/components/UpButton";
import { usePathname } from "next/navigation";

const AppPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const routes = ["/register", "/sign-in", "/profilea"];

  if (routes.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <UpButton />
      <Footer />
    </>
  );
};

export default AppPage;
