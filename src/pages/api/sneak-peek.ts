import type { NextApiRequest, NextApiResponse } from 'next';

interface SneakPeekRequest {
  websiteUrl: string;
  referenceUrl?: string;
  designStyle: string;
  layoutFocus: string;
}

interface SneakPeekResponse {
  previewUrl?: string;
  message?: string;
  screenshot?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SneakPeekResponse | { error: string }>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { websiteUrl, referenceUrl, designStyle, layoutFocus } = req.body as SneakPeekRequest;

  if (!websiteUrl || !designStyle || !layoutFocus) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // TODO: Replace with actual API call to the transformation engine
  // This is a placeholder that simulates the sneak peek generation
  // In production, this should call cyanate.scandium (scraper) + cyanate.mercury (transformer)

  try {
    // Placeholder response — replace with real API integration
    return res.status(200).json({
      previewUrl: `https://preview.forgefoxy.com/${encodeURIComponent(websiteUrl)}`,
      message: `Your ${designStyle} ${layoutFocus} preview is ready! This is a sneak peek of what your transformed website could look like.`,
    });
  } catch {
    return res.status(500).json({ error: 'Failed to generate preview. Please try again.' });
  }
}
