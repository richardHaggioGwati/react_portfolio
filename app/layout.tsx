import '../css/globals.css';
import { Itim } from '@next/font/google';
import Link from 'next/link';

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
      <body className={`${itim.variable} font-sans`}>
        {children}
        <Link id="source-link" rel="noreferrer" className="meta-link" href="/">
          <i className="fa-solid fa-link" />
          <span className="">Navigation</span>
        </Link>
      </body>
    </html>
  );
};

export default RootLayout;
