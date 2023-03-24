import '../css/globals.css';
import { Itim } from '@next/font/google';

const itim = Itim({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-itim',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Richard | Portfolio',
    template: '%s | Richard',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// eslint-disable-next-line arrow-body-style
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className={`${itim.variable} font-sans`}>{children}</body>
    </html>
  );
};

export default RootLayout;
