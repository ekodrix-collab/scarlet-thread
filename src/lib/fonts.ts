import { Playfair_Display, Outfit } from 'next/font/google';

export const fontHeading = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const fontSans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
