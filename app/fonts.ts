import localFont from "next/font/local";

// Monument Fonts
export const monumentFonts = localFont({
  src: [
    {
      path: "../public/fonts/MonumentExtended-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MonumentExtended-Ultrabold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-heading",
});

// General Sans Fonts
export const generalSansFonts = localFont({
  src: [
    {
      path: "../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../public/fonts/GeneralSans-Medium.woff2",
    //   weight: "500",
    //   style: "normal",
    // },
    // {
    //   path: "../public/fonts/GeneralSans-Bold.woff2",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  display: "swap",
  variable: "--font-body",
});
