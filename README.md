[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Rahullpc/gta6-clipper-01-clip4/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Rahullpc/gta6-clipper-01-clip4/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# gta6-clipper-01 — clip 4: "Jason Ketemu Kucing di Toko GTA VI!"

Entry for the [make.fun](https://make.fun/bounty/gta6-clipper-01) bounty "Clip GTA 6 for the most YouTube views"
($500, top 20 share). Places go by the video's views at the deadline.

## The clip

GTA VI gameplay: Jason in a minimarket meets a small white cat (orange
collar) in the store aisle and walks up to it — the streamer joking
"bisa di tendang ga?" ("can it be kicked?") — then Jason goes to the
counter and buys a Glazed Donut ($5). The sweet, absurd moment of a GTA
criminal going soft over a cat in a shop, plus Windah Basudara's laughing
reaction in the facecam. The clip then pitches make.fun on screen
("Bikin klip pakai AI / dapat cuan di make.fun") in its last 5 seconds.

- Video (public Short): https://www.youtube.com/shorts/UaMlaq9w4bs
- Channel: @hu2dzwynnn
- Format: vertical 576x1024, 30.00 s

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, where the gate reads it. That is
all the program has to do — the entry is the video, and the house reads
its views through the YouTube Data API.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
