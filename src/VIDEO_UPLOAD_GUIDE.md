# Video Upload Guide for YAZUA AFRIKA Website

## How to Add the Programs Overview Video

### Step 1: Create a Public Folder
In your project root directory, create a folder called `public` if it doesn't exist already.

### Step 2: Upload Your Video File
Place your downloaded video file in the `public` folder. 

**Recommended filename:** `yazua-programs-overview.mp4`

Your folder structure should look like:
```
/public/
  └── yazua-programs-overview.mp4
```

### Step 3: Update the Video URL (if needed)
The code is already set up to look for the file at `/yazua-programs-overview.mp4`

If your video file has a **different name**, open `/components/ProgramsSection.tsx` and update line that says:
```javascript
<source src="/yazua-programs-overview.mp4" type="video/mp4" />
```

Change it to match your actual filename:
```javascript
<source src="/your-actual-video-name.mp4" type="video/mp4" />
```

### Step 4: That's It!
The video will automatically appear on the Programs section:
- Located right after the "Our Programs" header
- Before the filter buttons
- Centered with a nice rounded shadow design
- Full video controls (play, pause, volume, fullscreen)
- Responsive for all screen sizes

### Supported Video Formats
- MP4 (recommended - best browser support)
- WebM
- OGG

### Where the Video Appears

The video displays prominently at the top of the Programs section with:
- Full width (up to 1024px max on larger screens)
- Rounded corners and shadow for professional look
- A thumbnail/poster image until the video plays
- A helpful caption below explaining the video's purpose

### Notes

- The video shows a brief description of all the programs
- Users can play, pause, adjust volume, and view fullscreen
- The video is completely optional - if the file doesn't exist, it simply won't display
- Video files can be large - consider compressing your video for web use (recommended max: 50MB)
