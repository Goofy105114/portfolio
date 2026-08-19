import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Verma | AI/ML Engineer & Visual Storyteller",
  description:
    "The portfolio of Ankit Verma: building intelligent systems, useful software, and cinematic stories.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
