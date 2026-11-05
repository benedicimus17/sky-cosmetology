# PROMPT TEMPLATE — 11 sections

Reference structure. Every incoming prompt should match this shape.
If a section is missing, the agent fills it with a flagged decision.

---

## 1. ROLE & OBJECTIVE
Who the agent is for this task and what to produce. 1–3 sentences.

## 2. CONTEXT
Product, audience, brand, where this will live.

## 3. DELIVERABLES
Exact list: which screens/pages, which components, which states
(default, hover, active, disabled, loading, empty, error).

## 4. DESIGN DIRECTION
- **Palette** — HEX for primary / secondary / accent / neutral scale /
  success / warning / error; separate values for light and dark theme
- **Typography** — font names, size scale (px or rem), line height,
  weight, letter-spacing for headings
- **Grid** — columns, gutter, container max-width
- **Spacing scale** — e.g. 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
- **Radii, shadows, borders**
- **Icons** — set and size
- **Motion** — duration, easing, where applied

## 5. SCREENS & LAYOUT
Screen by screen or section by section: top-to-bottom order,
hierarchy, CTA placement, header and footer content.

## 6. CONTENT
Ready copy for every section. If no copy is supplied — explicit
instruction to write it, with character counts.

## 7. TECHNICAL REQUIREMENTS
- Stack and versions
- File and folder structure
- Breakpoints in px (mobile / tablet / desktop / wide)
- Semantic HTML, alt text, focus states, WCAG AA contrast
- Dark theme via CSS variables or class
- No dependencies outside the list

## 8. SKILLS & TOOLS TO LOAD
Explicit list the agent must load **before** starting. Default for web/app:
- UI/UX design skill (patterns, accessibility, typography, palettes)
- frontend design skill (visual direction, so it doesn't read as a template)
- responsive / accessibility verification
- browser tool for previewing the result, if available

Phrase it as: `Before writing any code, load and apply: …`

## 9. CONSTRAINTS / DO NOT
- No third-party logos, brands, characters, or copies of existing sites
- No lorem ipsum
- No stock clichés
- No libraries outside the list
- No emoji in UI unless requested

## 10. ACCEPTANCE CRITERIA
5–10 checkable items. Each must be verifiable, e.g.
`Layout holds at 360px without horizontal scroll`

## 11. OUTPUT FORMAT
What to return: which files, one HTML or a component tree,
whether code comments are required.

---

## Section priority on conflict

```
CONSTRAINTS > TECHNICAL REQUIREMENTS > DESIGN DIRECTION >
DELIVERABLES > SCREENS & LAYOUT > CONTENT
```

`[ASSUMPTION]` markers are soft — may be overridden, must be reported.
