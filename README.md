# ai-excited — three breach entries

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Moodymue2903/ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Moodymue2903/ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

Entries for make.fun's **ai-excited-01** — "Make the AI judge excited".
The brief: one image that gives the judge a jolt. The pattern that wins
the leaderboard is the breach — something bursting out of the frame or
container that was supposed to hold it. All three entries here are built
on that idea, each with a different creature and a different container.

## The three entries

Every commit in this repo sets `entry.png` to one of them; `main.ts`
copies it to the output directory.

1. **Boar from a Piggy Bank** — a wild boar charges out of a shattered
   pink ceramic piggy bank, gold coins arcing along the diagonal.
2. **The Thunderhead Fawn** — a stag made of storm cloud and lightning
   bursts out of a shattered brass barometer.
3. **Mantis from a Thimble** — a colossal bioluminescent praying mantis
   erupts out of a tiny silver sewing thimble.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`, defaulting to `/output`. Before copying
it checks the image exists, is a regular file, and is within the
competition's 1 MiB cap (and 1024x1024 limit, which the artwork already
meets — each entry is 1024x1024).

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=XSCZ-RCXQ&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
