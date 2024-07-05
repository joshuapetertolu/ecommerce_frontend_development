import { Inter, Poppins, DM_Sans } from "next/font/google";

export const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const dmSans_init = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
  display: "swap",
  weight: ["600"],
});

export const poppins = poppins_init.variable;
export const dmSans = dmSans_init.variable;
