import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Crazy Cattle 3D',
  description: 'Terms of Service - Please read these terms carefully before using our service.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}