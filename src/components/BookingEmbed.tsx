import { useEffect, useRef, useState } from "react";
import { CLINIC } from "@/lib/clinic";

const EMBED_SRC = `${CLINIC.booking.url}?embed=1`;

const isSocioverse = (origin: string) => {
  try {
    const host = new URL(origin).hostname;
    return host === "socioverse.io" || host.endsWith(".socioverse.io");
  } catch {
    return false;
  }
};

// Inline Socioverse booking page. The embedded page posts its height so the
// frame grows with the calendar and never shows an inner scrollbar.
const BookingEmbed = () => {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(760);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!isSocioverse(e.origin) || e.source !== frameRef.current?.contentWindow) return;
      const data = e.data as { type?: string; height?: unknown } | null;
      if (data?.type === "socioverse:embed-height" && typeof data.height === "number") {
        setHeight(Math.max(480, Math.ceil(data.height)));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center" aria-hidden>
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-forest/20 border-t-forest" />
        </div>
      )}
      <iframe
        ref={frameRef}
        src={EMBED_SRC}
        title="Book an appointment at Sai Clinic"
        loading="lazy"
        allow="payment *"
        scrolling="no"
        onLoad={() => setLoaded(true)}
        style={{ height }}
        className="block w-full border-0"
      />
    </div>
  );
};

export default BookingEmbed;
