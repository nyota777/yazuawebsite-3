import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FAVICON_URL = '/logo4.png?v=7';

function setFavicon() {
  const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]') ?? (() => {
    const el = document.createElement('link');
    el.rel = 'icon';
    el.type = 'image/png';
    document.head.appendChild(el);
    return el;
  })();
  link.href = FAVICON_URL;
  link.type = 'image/png';
}

/**
 * Keeps the favicon set to logo4.png (transparent) on every route and hash,
 * so Blog, Upcoming Events, and all pages show the same favicon.
 */
export function FaviconSync() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setFavicon();
  }, [pathname, hash]);

  return null;
}
