import {
  Poppins,
  Russo_One,
  Hanken_Grotesk,
  Montserrat,
  Paytone_One,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const russoOne = Russo_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-russo-one",
  weight: "400",
});

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const paytoneOne = Paytone_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-paytone-one",
  weight: "400",
});
