# ACCEPTANCE CHECKLIST

Run this literally, item by item, before reporting a task done.
Report **pass / fail** per item. Never mark pass without checking.

This is the baseline. If the incoming prompt has its own
ACCEPTANCE CRITERIA section, run that **in addition**, not instead.

---

## Layout & responsiveness
- [ ] No horizontal scroll at 360px, 768px, 1024px, 1440px
- [ ] Spacing uses only the defined scale — no arbitrary values
- [ ] Container max-width and grid match the brief
- [ ] Section padding is consistent across the page

## Typography
- [ ] No more than 3 competing font sizes in a single view
- [ ] Body line length is 50–80 characters
- [ ] Body line height 1.4–1.6; display headings 1.1–1.25
- [ ] No centered long paragraphs

## Color & contrast
- [ ] Palette HEX values match the brief exactly
- [ ] Body text contrast ≥ 4.5:1, large text ≥ 3:1
- [ ] No state or meaning conveyed by color alone
- [ ] Dark theme values applied where specified

## Component states
- [ ] Every interactive element has default, hover, focus-visible, active, disabled
- [ ] Forms have labels, helper text, inline error states
- [ ] Lists and data views have empty, loading, error states
- [ ] Touch targets ≥ 44×44px

## Motion
- [ ] Transitions 150–300ms, ease-out on entrance
- [ ] `prefers-reduced-motion` respected
- [ ] No animation blocks interaction

## Accessibility
- [ ] Headings in correct order, landmarks present
- [ ] Buttons are buttons, links are links
- [ ] Visible focus indicator on every focusable element
- [ ] `alt` on meaningful images, empty `alt` on decorative
- [ ] Fully keyboard-operable

## Craft
- [ ] No lorem ipsum, no text reading "placeholder"
- [ ] Copy is specific to this product, not generic filler
- [ ] No third-party logos, brand marks, or copies of existing sites
- [ ] No libraries outside the approved list

## Report
- [ ] File list included
- [ ] Decisions made where the brief was silent are listed
- [ ] Every overridden `[ASSUMPTION]` is named with a reason
- [ ] Anything not satisfied is stated plainly, not hidden
