/**
 * googleDrive.ts
 * Utility helpers for using Google Drive links across the NITRRFIE website.
 *
 * Google Drive sharing URLs come in forms like:
 *   https://drive.google.com/file/d/FILE_ID/view?usp=drive_link
 *   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *   https://drive.google.com/open?id=FILE_ID
 *
 * For <img> / CSS background-image, use:
 *   https://lh3.googleusercontent.com/d/FILE_ID   ← fastest, works for shared files
 *   https://drive.google.com/thumbnail?id=FILE_ID&sz=w1600  ← thumbnail/resizable
 *   https://drive.google.com/uc?export=view&id=FILE_ID      ← classic direct view
 *
 * For <iframe> video embed, use:
 *   https://drive.google.com/file/d/FILE_ID/preview
 *
 * For YouTube videos the embed form is:
 *   https://www.youtube.com/embed/VIDEO_ID
 */

/**
 * Extracts the file ID from any known Google Drive URL format.
 * Returns null if the URL is not a Google Drive URL or cannot be parsed.
 */
export function extractDriveId(url: string): string | null {
  if (!url) return null;

  // Pattern: /file/d/FILE_ID/
  const filePattern = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const fileMatch = url.match(filePattern);
  if (fileMatch) return fileMatch[1];

  // Pattern: open?id=FILE_ID or uc?id=FILE_ID or thumbnail?id=FILE_ID
  const idPattern = /[?&]id=([a-zA-Z0-9_-]+)/;
  const idMatch = url.match(idPattern);
  if (idMatch) return idMatch[1];

  return null;
}

/**
 * Checks if a URL is a Google Drive URL.
 */
export function isDriveUrl(url: string): boolean {
  return url.includes('drive.google.com') || url.includes('docs.google.com');
}

/**
 * Checks if a URL is a YouTube URL.
 */
export function isYouTubeUrl(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be');
}

/**
 * Converts a Google Drive sharing URL to a URL suitable for use in
 * <img src="..."> or CSS background-image: url(...).
 *
 * For non-Drive URLs, returns the URL unchanged.
 *
 * The `lh3.googleusercontent.com/d/FILE_ID` format is the most reliable
 * for images — it streams the file without a redirect page.
 */
export function driveImageUrl(url: string): string {
  if (!url) return url;
  if (!isDriveUrl(url)) return url;

  const id = extractDriveId(url);
  if (!id) return url;

  // Use lh3.googleusercontent.com which streams the image directly without 302 redirects
  return `https://lh3.googleusercontent.com/d/${id}=w1000`;
}

/**
 * Converts a Google Drive / YouTube sharing URL to an embeddable URL
 * suitable for use in <iframe src="...">.
 *
 * For local .mp4 paths or other non-embeddable sources, returns the URL
 * unchanged (use a <video> element for those).
 */
export function embedUrl(url: string): string {
  if (!url) return url;

  // Google Drive → /preview endpoint
  if (isDriveUrl(url)) {
    const id = extractDriveId(url);
    if (id) return `https://drive.google.com/file/d/${id}/preview`;
    return url;
  }

  // YouTube watch URL → embed URL
  if (isYouTubeUrl(url)) {
    // Handle youtu.be short links
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

    // Handle standard watch?v= links
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  return url;
}

/**
 * Determines whether a video src should be rendered as an <iframe>
 * (YouTube or Drive) or a native <video> element (local .mp4 etc.).
 */
export function isEmbedVideo(url: string): boolean {
  return isDriveUrl(url) || isYouTubeUrl(url);
}
