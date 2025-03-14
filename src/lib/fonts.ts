import {
  JetBrains_Mono as FontMono,
  Open_Sans as FontSans,
  Nunito as FontTitle,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontTitle = FontTitle({
  subsets: ["latin"],
  variable: "--font-title",
})
