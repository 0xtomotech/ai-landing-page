"use client";

import { ScrollProvider } from "@/contexts/ScrollContext";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ScrollProvider>{children}</ScrollProvider>;
}
