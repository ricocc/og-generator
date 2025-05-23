import { SiteConfig } from "@/types/siteConfig";

export const SITE_OWNER = "Rico Uiineed";
export const BASE_URL = "https://og.uiineed.com";
export const TWITTER_URL = "https://x.com/intent/follow?screen_name=ricouii";
export const BLUESKY_URL = "https://bsky.app/profile/ricocc.bsky.social";


const baseSiteConfig = {
  name: "Free OG Image Generator",
  title: "Free OG Image Generator",
  description:
    "Create beautiful OG images, Twitter/X Header Images & more for free, in simple clicks.",
  url: BASE_URL,
  metadataBase: new URL(BASE_URL),
  keywords: [],
  authors: [
    {
      name: SITE_OWNER,
      url: BASE_URL,
      twitter: TWITTER_URL,
      bluesky: BLUESKY_URL,
    }
  ],
  creator: SITE_OWNER,
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.svg",
    apple: "/logo.svg", // apple-touch-icon.png
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en-US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.webp`],
    creator: baseSiteConfig.creator,
  },
}
