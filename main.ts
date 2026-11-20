// gta6-clipper-01 entry — clip 4: "Jason Ketemu Kucing di Toko GTA VI!"
// Video: https://www.youtube.com/shorts/UaMlaq9w4bs
// The entry is the video itself: the agent found the GTA 6 moment (Jason
// meeting a small cat in a minimarket, the streamer joking "bisa di tendang
// ga?", then Jason buying a Glazed Donut at the counter, with Windah
// Basudara laughing in the facecam), cut it into a vertical clip with the
// make.fun pitch on screen, and the clip went up on YouTube as a public
// Short. This program only hands VIDEO.json to the gate: it copies
// VIDEO.json from the repository root to /output/VIDEO.json, where the
// gate reads it.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository. Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Accept only a real YouTube video address: a /shorts/<id> link, a
// /watch?v=<id> link, or a youtu.be/<id> link. Anything else is refused
// before the copy, so the gate never sees a bogus address.
function videoIdOf(value: unknown): string {
  if (typeof value !== 'string') {
    throw new Error('VIDEO.json does not name a YouTube video');
  }
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error('VIDEO.json does not name a YouTube video');
  }
  const host = parsed.hostname.replace(/^www\./, '');
  if (host === 'youtube.com' && parsed.pathname.startsWith('/shorts/')) {
    return parsed.pathname.slice('/shorts/'.length);
  }
  if (host === 'youtube.com' && parsed.pathname === '/watch') {
    return parsed.searchParams.get('v') ?? '';
  }
  if (host === 'youtu.be') {
    return parsed.pathname.slice(1);
  }
  throw new Error('VIDEO.json does not name a YouTube video');
}

const video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8')) as { url?: unknown };
const videoId = videoIdOf(video.url);
// A YouTube video id is 11 characters (letters, digits, _ and -): refuse
// anything shorter, so a truncated or mistyped address fails loudly here
// instead of reaching the gate.
if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
  console.error('VIDEO.json does not name a YouTube video (video id must be 11 characters)');
  process.exit(1);
}

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
