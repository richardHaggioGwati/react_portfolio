import '../css/globals.css';
import { Itim } from '@next/font/google';

const itim = Itim({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-itim',
});

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
