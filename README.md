# Fleet Parts Reference — Tomorrow.bio internal tool

Static site (no build step) with the service parts, fluids and intervals for the seven Mercedes-Benz Sprinter W906 vans.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page — layout, styles and rendering code |
| `data.js` | **All content**: vehicles, part numbers, fluids, kits, intervals, sources. Edit this file to update anything. |
| `logo.png` | Tomorrow.bio logo |

## Publish on GitHub Pages

1. Create a new repository (e.g. `fleet-parts`) and upload the three files to its root.
2. Repository **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`, Save.
3. After about a minute the site is live at `https://<user-or-org>.github.io/fleet-parts/`.

Deep links work: `…/#vehicle/1773` opens B IO 1773 directly, `…/#brakes` opens the brakes tab.

## Updating

- Change a part number, add a vehicle or a note: edit `data.js`, commit, done. The page renders everything from it.
- No service worker is used, so updates appear immediately after a normal refresh.
- Open `index.html` locally by double-clicking it; everything works offline except the web font.

Last verified 02.10.2026.
