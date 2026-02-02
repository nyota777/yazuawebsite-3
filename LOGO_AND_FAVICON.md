# Logo & Favicon (logo4.png)

The site uses **logo4.png** for the favicon (browser tab), navbar, footer, about section, and Open Graph image. There is **no favicon.ico** so the browser only uses logo4.png.

## Removing the white square in the browser tab

If the favicon still shows a white background in the tab:

1. **Ensure logo4.png has true transparency**
   - The file must be **PNG-24 with alpha channel** (transparent pixels), not just “background removed” in a tool that might still save white pixels.
   - In Photoshop: delete the background layer, then **Export As** → PNG, and enable **Transparency**.
   - In Figma: hide the background, then export as PNG with **Include "id" attribute** off and **2x** if needed; transparency is kept by default.
   - With [remove.bg](https://www.remove.bg): download the result and **replace** `public/logo4.png` with it (same filename).

2. **Replace the file**
   - Overwrite `public/logo4.png` with your transparent version (same name).
   - Redeploy; the HTML already points to `/logo4.png?v=5` (cache-busting).

3. **Hard refresh**
   - After deploy, do a hard refresh (Ctrl+F5 or Cmd+Shift+R) or clear the site’s cache so the new favicon loads.

Some browsers or OS tab bars may still add a light background for contrast; that cannot be changed from the site. Making sure logo4.png has real transparency gives the best result.
