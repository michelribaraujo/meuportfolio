import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap";

function useGoogleFonts(href: string) {
  useEffect(() => {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const preconnect1 = Object.assign(document.createElement("link"), {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    });
    const preconnect2 = Object.assign(document.createElement("link"), {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "",
    });
    const link = Object.assign(document.createElement("link"), {
      rel: "stylesheet",
      href,
    });
    document.head.append(preconnect1, preconnect2, link);
  }, [href]);
}

export default function App() {
  useGoogleFonts(FONTS_HREF);
  return (
    <>
      {/* MARKER-MAKE-KIT-INVOKED */}
      {/* MARKER-MAKE-KIT-DISCOVERY-READ */}
      <RouterProvider router={router} />
    </>
  );
}
