# Bug Audit Report

## Summary

- Confirmed pre-existing issues: 4
- Potential pre-existing issues: 2
- Intentional challenge bugs: 15
- Total documented issues: 21

## Intentional Challenge Bugs

These defects were deliberately introduced for the controlled bug-hunting challenge. They are reproducible from the current source and are not accidental audit findings.

### INT-001 | Characters navigation targets Community | Medium
- Affected file and line: `components/navigation.tsx:57`
- Evidence: The `Characters` navigation item uses `href: "#community"` while the archive section uses `id="characters"`.
- Reproduction: Click `Characters` in the desktop or mobile navigation.
- Expected: Scroll to the character archive.
- Actual: Scrolls to the community section.
- Recommended fix: Point the item to `#characters`.

### INT-002 | Hero character CTA targets Figures | Medium
- Affected file and line: `components/hero-section.tsx:150`
- Evidence: `Meet the Characters` calls `scrollTo("#figures")`.
- Reproduction: Click `Meet the Characters` in the hero.
- Expected: Scroll to `#characters`.
- Actual: Scrolls to `#figures`.
- Recommended fix: Use the character archive anchor.

### INT-003 | Carousel next skips a character at index 1 | Medium
- Affected file and lines: `components/flavor-carousel.tsx:154-160`
- Evidence: When `currentIndex === 1` and direction is positive, the index is incremented by two.
- Reproduction: Start on Optimus Prime, click Next once to reach Bumblebee, then click Next again.
- Expected: Show Megatron.
- Actual: Skips Megatron and shows Starscream.
- Recommended fix: Increment by one for every next navigation.

### INT-004 | Carousel previous fails at the first boundary | Medium
- Affected file and lines: `components/flavor-carousel.tsx:154-160`
- Evidence: At index zero, the negative-direction branch returns `currentIndex + newDirection`, producing `-1`.
- Reproduction: Load the page and click Previous before changing slides.
- Expected: Wrap to the final character.
- Actual: The carousel attempts to render an undefined figure and can fail at runtime.
- Recommended fix: Apply modulo wrapping consistently.

### INT-005 | Bumblebee gallery card renders Optimus image | Medium
- Affected file and line: `components/social-section.tsx:111`
- Evidence: The Bumblebee case substitutes `/images/archive-optimus-prime.png`.
- Reproduction: Open the character archive and inspect the Bumblebee card.
- Expected: Bumblebee artwork.
- Actual: Optimus Prime artwork.
- Recommended fix: Use the figure’s own image path.

### INT-006 | Gallery image sizing changes incorrectly at small viewport | Low
- Affected file and line: `components/social-section.tsx:114`
- Evidence: The base class is `object-cover`, but `sm:object-contain` changes sizing only at the small breakpoint.
- Reproduction: Compare a viewport below 640px with one at or above 640px.
- Expected: Consistent intended image fitting.
- Actual: The smallest viewport crops while the small breakpoint contains.
- Recommended fix: Use one deliberate object-fit rule for the intended responsive range.

### INT-007 | Bumblebee receives Optimus subtitle | Low
- Affected file and line: `components/flavor-carousel.tsx:24`
- Evidence: Bumblebee’s tagline is `Autobot Leader`, which belongs to Optimus Prime.
- Reproduction: Show Bumblebee in the featured carousel.
- Expected: `Autobot Scout`.
- Actual: `Autobot Leader`.
- Recommended fix: Restore Bumblebee’s character-specific tagline.

### INT-008 | Feature cards overflow on narrow mobile screens | Medium
- Affected file and line: `components/bento-grid.tsx:76`
- Evidence: Cards have `min-w-[220px]` inside a two-column mobile grid.
- Reproduction: View the collections section below approximately 440px wide.
- Expected: Cards remain within their grid columns.
- Actual: Cards can exceed their grid tracks and create horizontal overflow.
- Recommended fix: Remove or constrain the minimum width at mobile sizes.

### INT-009 | Archive heading is forced onto one line on the smallest breakpoint | Low
- Affected file and line: `components/social-section.tsx:76`
- Evidence: `whitespace-nowrap` applies below `sm`, while the heading contains two long words.
- Reproduction: Open the page at a narrow mobile width.
- Expected: Heading wraps or scales to fit.
- Actual: The heading can clip horizontally.
- Recommended fix: Allow wrapping or reduce typography below the breakpoint.

### INT-010 | Detailed feature uses the wrong accent color | Low
- Affected file and line: `components/bento-grid.tsx:19`
- Evidence: The Detailed card uses red instead of its intended slate accent.
- Reproduction: Compare the Detailed card accent with the collection design.
- Expected: The Detailed card uses the neutral/slate accent.
- Actual: It uses the red accent.
- Recommended fix: Restore the card’s intended accent value.

### INT-011 | Custom Showcases CTA is disabled | Medium
- Affected file and line: `components/activations-section.tsx:129`
- Evidence: The CTA is rendered with `disabled={activation.title === "Custom Showcases"}`.
- Reproduction: Click `View Showcases`.
- Expected: The CTA responds like the other community CTAs.
- Actual: The control is disabled and does not respond.
- Recommended fix: Remove the unintended disabled state and provide the intended action.

### INT-012 | Footer Community link targets Characters | Low | Resolved
- Resolution: Removed the dead Community footer link. The footer now retains only the Contact and Terms links.

### INT-013 | Malformed email containing `@` is accepted | Medium
- Affected file and line: `components/footer.tsx:35`
- Evidence: Submission is accepted whenever `email.includes("@")`; values such as `name@` pass.
- Reproduction: Enter `name@` and click the signup button.
- Expected: Invalid email is rejected.
- Actual: The joining state begins.
- Recommended fix: Use proper email-format validation.

### INT-014 | Mobile menu accessible label is inverted | Medium
- Affected file and line: `components/navigation.tsx:143`
- Evidence: The closed-menu state announces `Close menu`, and the open state announces `Open menu`.
- Reproduction: Focus the mobile menu control before and after opening it with a screen reader.
- Expected: Closed state says `Open menu`; open state says `Close menu`.
- Actual: The labels are reversed.
- Recommended fix: Swap the two label branches.

### INT-015 | Feature-card hover state does not reset | Low
- Affected file and lines: `components/bento-grid.tsx:66-69`
- Evidence: `handleMouseLeave` resets pointer coordinates but no longer calls `setIsHovered(false)`.
- Reproduction: Hover a collection card, then move the pointer away.
- Expected: Shine animation and hover styling stop.
- Actual: The hover state remains active.
- Recommended fix: Clear `isHovered` on pointer exit.

## Pre-existing Confirmed Issues

### BUG-001 | Broken lint script | Medium
- Affected file: `package.json:5-9`
- Evidence: `npm run lint` fails because `eslint` is not installed.
- Recommended fix: Install/configure the declared lint tooling or remove the script.

### BUG-002 | Newsletter signup has no backend action | Medium
- Affected file: `components/footer.tsx:30-42`
- Evidence: The handler only toggles a two-second loading state and performs no submission.
- Recommended fix: Connect the form to a real validated submission flow.

### BUG-003 | Community CTAs have no actions | Medium
- Affected file: `components/activations-section.tsx:117-162`
- Evidence: The buttons have no navigation or click handlers.
- Recommended fix: Wire each CTA to a valid destination or interaction.

### BUG-004 | TypeScript build errors are ignored | Medium
- Affected file: `next.config.mjs:2-5`
- Evidence: `typescript.ignoreBuildErrors` is enabled.
- Recommended fix: Enforce type checking in production builds.

## Potential Issues

### BUG-005 | Imported font variables are unused | Low
- Affected files: `app/layout.tsx:5-18`, `app/globals.css:1-80`
- Evidence: The imported font variable classes are not attached to the rendered root elements.
- Verification needed: Confirm computed fonts in a browser.

### BUG-006 | Spotlight section is not in the primary navigation flow | Low
- Affected files: `components/lifestyle-section.tsx:5`, `components/navigation.tsx:52-57`
- Evidence: The section uses `id="spotlight"` but no primary navigation item targets it.
- Verification needed: Confirm whether this is intentional content prioritization or an omitted link.

## Checks Performed

- `npm run build` — Passed after the intentional changes; `/` and `/_not-found` were generated successfully.
- `npm run lint` — Failed because `eslint` is not recognized in the project environment.
- `npm run dev` — The prior server session stopped before verification; a fresh server start is required for runtime checks.
- Static source review — Completed for application entry points, page sections, shared interaction components, configuration, styles, assets, and the private intentional-bug answer key.

## Manual Verification Required

- Test all 15 intentional defects in a browser at desktop and narrow mobile widths.
- Inspect browser console output while exercising the carousel boundary case.
- Verify the actual computed font family and responsive clipping/overflow behavior.

## Final Intentional Bug Inventory and Reproduction Guide

The current application contains **21 active intentional bugs**: the original 15 plus 6 additional defects. Two footer-link issues were resolved by removing the dead links. The entries below are the final challenge inventory and describe how to find each one.

| ID | Location | Bug | How to find it |
|---|---|---|---|
| INT-001 | `components/navigation.tsx:57` | Characters navigation goes to Community. | Click **Characters** in the desktop or mobile navigation and observe that it scrolls to the community section instead of the archive. |
| INT-002 | `components/hero-section.tsx:150` | Meet the Characters hero CTA goes to Figures. | Click **Meet the Characters** and observe that the featured figures section opens instead of the character archive. |
| INT-003 | `components/flavor-carousel.tsx:154-160` | Next skips Megatron from the Bumblebee slide. | In the carousel, advance from Optimus to Bumblebee, then click Next; Starscream appears instead of Megatron. |
| INT-004 | `components/flavor-carousel.tsx:154-160` | Previous fails at the first carousel boundary. | On the initial Optimus slide, click Previous and observe the invalid boundary behavior or runtime rendering failure. |
| INT-005 | `components/social-section.tsx:111` | Bumblebee archive card displays Optimus artwork. | Scroll to the archive and inspect the Bumblebee card image. |
| INT-006 | `components/social-section.tsx:114` | Archive image fitting changes incorrectly by viewport. | Compare archive cards below 640px with cards at or above 640px; the object-fit behavior changes at the `sm` breakpoint. |
| INT-007 | `components/flavor-carousel.tsx:24` | Bumblebee has Optimus’s subtitle. | Show Bumblebee in the carousel and read the subtitle: it says `Autobot Leader` instead of `Autobot Scout`. |
| INT-008 | `components/bento-grid.tsx:76` | Collection cards can overflow narrow mobile columns. | Open Collections below roughly 440px wide and inspect for horizontal overflow caused by the 220px minimum card width. |
| INT-009 | `components/social-section.tsx:76` | Archive heading can be clipped on narrow mobile. | Open the archive below the `sm` breakpoint and inspect the forced single-line heading. |
| INT-010 | `components/bento-grid.tsx:19` | Detailed card uses the wrong accent color. | Compare the Detailed collection card with its intended slate styling; it uses the red accent instead. |
| INT-011 | `components/activations-section.tsx:129` | View Showcases CTA is disabled. | Click **View Showcases** in the community section and observe that the control does not respond. |
| INT-012 | `components/footer.tsx` | Resolved: the dead Community footer link was removed. | Confirm that only Contact and Terms remain in the footer link groups. |
| INT-013 | `components/footer.tsx:35` | Malformed email containing `@` is accepted. | Enter `name@` in the signup field and click the button; the joining state starts instead of rejecting the address. |
| INT-014 | `components/navigation.tsx:143` | Mobile menu accessible label is inverted. | Use a screen reader or inspect the accessible name: the closed control says `Close menu`, and the open control says `Open menu`. |
| INT-015 | `components/bento-grid.tsx:66-69` | Feature-card hover state does not reset. | Hover a collection card, move the pointer away, and observe that hover shine behavior remains active. |
| INT-016 | `components/footer.tsx` | Resolved: the dead About footer link was removed. | Confirm that only Contact and Terms remain in the footer link groups. |
| INT-017 | `components/lifestyle-section.tsx` | Character spotlight CTA goes to an unrelated section. | Click **Discover Character** in the spotlight; it targets Collections rather than the related Figures section. |
| INT-018 | `components/social-section.tsx` | Shockwave archive image fails to load. | Inspect the Shockwave card in the archive; its missing image path produces a broken image. |
| INT-019 | `components/flavor-carousel.tsx` | Bumblebee carousel item displays Megatron’s image. | Advance to Bumblebee in the featured carousel and compare the displayed image with the name. |
| INT-020 | `components/lifestyle-section.tsx` | Megatron spotlight heading says Bumblebee. | Scroll to Character Spotlight and compare the heading with the Megatron image and copy. |
| INT-021 | `components/social-section.tsx` | Join the Community archive CTA is a no-op. | Click the archive’s **Join the Community** CTA and observe that it does not navigate or change state. |
| INT-022 | `components/lifestyle-section.tsx` | Spotlight CTA uses an inconsistent green color. | Compare **Discover Character** with the purple spotlight theme; the button is bright green. |
| INT-023 | `components/lifestyle-section.tsx` | Spotlight section forces mobile horizontal overflow. | Open the page at a narrow mobile width and inspect horizontal scrolling caused by the 520px minimum-width grid. |

### Recommended Challenge Workflow

1. Start the app with `npm run dev`.
2. Open `http://localhost:3000`.
3. Use the navigation and hero buttons first, then inspect each page section from top to bottom.
4. Exercise the carousel in both directions, including the initial slide and the Bumblebee slide.
5. Test the footer links and newsletter input with valid and malformed values.
6. Resize the browser to narrow mobile widths, especially below 440px and below 640px.
7. Open browser DevTools to inspect broken images, horizontal overflow, accessible names, and console errors.
8. For source confirmation, search the affected files and line locations listed in the table.

### Final Count

- Intentional bugs: **21 active; 2 resolved**
- Pre-existing confirmed issues: **4**
- Potential pre-existing issues: **2**
- Total documented issues in this report: **27 active; 2 resolved**

## Issues Requiring Browser Testing or Manual Verification

- The actual motion/rendering behavior of `LenisProvider` and `ClickSpark` should be verified in a browser, because the runtime experience depends heavily on scroll and pointer interactions that are difficult to validate from static source alone.
- The CTA and signup flows in `components/footer.tsx` and `components/activations-section.tsx` should be checked in a browser to confirm whether the placeholder state is intentional for the marketing page or a genuine unfinished feature.
- The typography implementation in `app/layout.tsx` should be confirmed in a browser to verify whether the intended fonts are actually applied after rendering.

## Files or Functionality That Could Not Be Fully Audited

- Browser-side runtime behavior could not be fully validated because no real browser automation or DOM console inspection tooling was available in this environment.
- Interactive motion polish and pointer effects were reviewed by code inspection only; their end-user behavior under load, on mobile devices, and across browsers still requires manual validation.
- The project contains a large number of generated UI primitives under `components/ui/`, but they were not individually executed or visually tested. They appear to be templated library components and were not directly tied to broken behavior in the landing page flow.
