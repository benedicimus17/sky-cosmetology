# S.K.Y. — approved background plates

Brand: S.K.Y. (Skin Keeps Youth) — private aesthetic-cosmetology practice,
Costa del Sol. Owner: Mariia Stefaniuk.

## Rule for all plates

Every image in this folder is a BACKGROUND PLATE.
All copy is overlaid in code, in four languages: UK / ES / EN / RU.
Do not bake text into these images. The only exception is the S·K·Y
wordmark, which is identical in all languages.

`01_home_hero.png` still has Ukrainian text baked in from an earlier pass.
Treat that text as a position reference only, and replace it with live text.

## Shared visual system

- Background: warm sand plaster wall, hand-trowelled texture
- Light: one soft daylight source from the upper left, long shadow to the right
- Palette:
  - cream      #F6EFE4
  - sand       #E6D7C4
  - taupe      #C9B49C
  - warm brown #A9683F   (accent, buttons, hairlines)
  - deep brown #4A3327   (headings)
  - near-black #2B2420   (body text)
- Type: high-contrast display serif for headings, light sans for labels
- UI material: frosted glass, 1.5px specular highlight top and left,
  soft drop shadow, corner radius ~1.2–1.4% of canvas width
- All plates are 1080 x 1920 (9:16), except `03b` which is 1920 x 1080

## Home page — assemble top to bottom in this order

| File | Section | What goes on it |
|---|---|---|
| `01_home_hero.png` | Hero | S·K·Y wordmark, SKIN KEEPS YOUTH, descriptor line, slogan, one glass CTA button |
| `02_home_about.png` | Who we are | Heading, name, role, body copy, FDA line inside the empty glass chip |
| `03_home_equipment.png` | What we work on | Heading above the device band, three device names below it |
| `04_home_protocols.png` | Professional protocols | Heading and body copy in the empty right-hand area |
| `05_home_howitworks.png` | How it works | Three steps inside the three glass strips, numbers in the circles, CTA in the pill |

`03b_devices_zemits_16x9.png` is the source device render already composited
inside `03_home_equipment.png`. Kept separately for reuse and for repainting
the model names.

## Second screen

| File | Screen | What goes on it |
|---|---|---|
| `06_screen_services.png` | Services hub | Four zone names on the four cascading glass cards, one arrow per card |

Reached from the hero CTA. Card order top to bottom:
Procedures, Outcall, Injectables, Home care.
Each card leads to its own page.

## Known issues to fix in build

- `03b` — model names printed on the casings are garbled.
  Correct spellings: ZEMITS VERSTAND HD PRO, ZEMITS ABIGON PRO, ZEMITS SKYFRAX.
  Repaint them over the render.
- `05_home_howitworks.png` — glass strips came out almost opaque.
  Lower their opacity in build so the wall shows through, matching the
  cards in `06`.
- `03_home_equipment.png` — the three hairlines under the device band sit
  too close together. Space them out in layout.

## Transitions to build

1. Window reveal — on scroll, the colour window in the hero widens until it
   fills the screen; the page goes from warm monochrome to full colour.
2. Shadow travel — the wall shadow creeps right as the page scrolls; the
   portrait moves slower than the wall.
3. Glass reveal — each section arrives as a frosted pane and sharpens from
   blurred to clear as it enters the viewport.
4. CTA transition — the glass of the hero button expands to fill the screen,
   the portrait blurs behind it, and the four service cards fly in from the
   lower right with 60 ms stagger. About 600 ms total.
