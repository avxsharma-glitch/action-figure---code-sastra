# Intentional Bugs Answer Key

This file is private challenge metadata and is not rendered by the application.

1. Navigation: `components/navigation.tsx` — the Characters item targets `#community` instead of `#characters`.
2. Hero CTA: `components/hero-section.tsx` — Meet the Characters targets `#figures`.
3. Carousel next: `components/flavor-carousel.tsx` — pressing next while viewing index 1 advances by two.
4. Carousel previous boundary: `components/flavor-carousel.tsx` — pressing previous at index 0 produces index -1.
5. Gallery image: `components/social-section.tsx` — Bumblebee renders the Optimus archive image.
6. Gallery image sizing: `components/social-section.tsx` — `sm:object-contain` changes image sizing at the small breakpoint, leaving the base crop behavior on the smallest viewport.
7. Character subtitle: `components/flavor-carousel.tsx` — Bumblebee is assigned Optimus Prime's "Autobot Leader" subtitle.
8. Mobile overflow: `components/bento-grid.tsx` — each feature card has a 220px minimum width despite the two-column mobile grid.
9. Heading clipping: `components/social-section.tsx` — the archive heading's fixed large typography can clip at the small breakpoint when the title wraps around the constrained grid.
10. Accent color: `components/bento-grid.tsx` — the Detailed feature uses the red accent instead of the surrounding slate accent.
11. Card CTA: `components/activations-section.tsx` — the Custom Showcases CTA is disabled and does not respond.
12. Footer link: `components/footer.tsx` — Community links to `#characters` instead of `#community`.
13. Form validation: `components/footer.tsx` — validation accepts any value containing `@`, including malformed `name@`.
14. Accessibility label: `components/navigation.tsx` — the mobile menu control announces Open menu while closed and Close menu while open.
15. Hover reset: `components/bento-grid.tsx` — feature-card hover state is not cleared on pointer exit, so the shine animation remains active.

## Additional Intentional Bugs

16. 404 route: `components/footer.tsx` — the existing About footer link opens `/about-us`, which has no route and renders the 404 page. Reproduce by clicking Company > About.
17. Wrong page: `components/lifestyle-section.tsx` — Discover Character targets `#collections` instead of the related figures section. Reproduce by clicking the spotlight CTA.
18. Broken image: `components/social-section.tsx` — the Shockwave archive card references `/images/archive-shockwave-missing.png`. Reproduce by opening the character archive and inspecting Shockwave.
19. Wrong character image: `components/flavor-carousel.tsx` — the Bumblebee carousel item uses `/images/megatron.png`. Reproduce by advancing to Bumblebee.
20. Wrong heading: `components/lifestyle-section.tsx` — the Megatron spotlight heading displays `BUMBLEBEE`. Reproduce by viewing the character spotlight section.
21. No-op CTA: `components/social-section.tsx` — Join the Community prevents its default navigation and performs no action. Reproduce by clicking the archive CTA.
22. Inconsistent color: `components/lifestyle-section.tsx` — Discover Character uses bright green instead of the section’s purple accent. Reproduce by viewing the spotlight CTA.
23. Mobile overflow: `components/lifestyle-section.tsx` — the spotlight grid has a 520px minimum width below the small breakpoint. Reproduce at a narrow mobile viewport and inspect horizontal scrolling.
