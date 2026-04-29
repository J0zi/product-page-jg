import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joziglobal.net"),
  title: {
    default: "JoziGlobal s.r.o. — Custom Cloud Platform Development",
    template: "%s | JoziGlobal s.r.o.",
  },
  description:
    "JoziGlobal s.r.o. designs, builds and operates modern cloud platforms for software companies. Specialists in AWS, Kubernetes, Terraform, Ansible, Service Mesh, GitOps and platform engineering.",
  keywords: [
    "cloud platform development",
    "platform engineering",
    "AWS consulting",
    "Kubernetes consulting",
    "Terraform infrastructure as code",
    "Ansible automation",
    "Service Mesh",
    "Istio",
    "GitOps",
    "ArgoCD",
    "internal developer platform",
    "DevOps consulting Slovakia",
    "SRE consulting",
    "JoziGlobal",
  ],
  authors: [{ name: "JoziGlobal s.r.o." }],
  creator: "JoziGlobal s.r.o.",
  publisher: "JoziGlobal s.r.o.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joziglobal.net",
    title: "JoziGlobal s.r.o. — Custom Cloud Platform Development",
    description:
      "We help software teams design, automate, and operate modern cloud platforms on AWS and Kubernetes — built with Terraform, Ansible, Service Mesh and GitOps.",
    siteName: "JoziGlobal s.r.o.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "JoziGlobal s.r.o. — Custom Cloud Platform Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JoziGlobal s.r.o. — Custom Cloud Platform Development",
    description:
      "Custom cloud platforms on AWS and Kubernetes. Terraform, Ansible, Service Mesh, GitOps and platform reliability — done right.",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://joziglobal.net" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
