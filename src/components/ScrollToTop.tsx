import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the window to the top when the route changes.
 * Ensures that when users click nav links (e.g. Upcoming Events, Programs),
 * they land at the beginning of the page instead of having to scroll up.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly
    window.scrollTo(0, 0);
    
    // Scroll after a short delay to account for React rendering and Framer Motion layouts
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
