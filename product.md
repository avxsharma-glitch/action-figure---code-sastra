# Transformers Hub Frontend Product Documentation

Transformers Hub is a responsive collectibles storefront experience for fans and collectors of iconic Transformers action figures.

## Page structure

| Section | ID | Purpose |
|---|---|---|
| Navigation | — | Brand navigation and figure discovery CTA |
| Hero | `#hero` | Introduces the Cybertron collectible experience with Optimus Prime |
| Featured figures | `#figures` | Carousel for Optimus Prime, Bumblebee, and Megatron |
| Character spotlight | `#spotlight` | Editorial Megatron showcase with traits and discovery CTA |
| Collection details | `#collections` | Four collector-focused product qualities |
| Community | `#community` | Meetups, custom showcases, fan collections, and conventions |
| Character archive | `#characters` | Gallery of available character assets |
| Footer/newsletter | `#contact` | Community signup, collection links, and legal links |

## Character data

- Optimus Prime: Autobot Leader
- Bumblebee: Autobot Scout
- Megatron: Decepticon Commander
- Starscream: Decepticon Seeker
- Ironhide: Autobot Warrior
- Jazz: Autobot Specialist
- Soundwave: Decepticon Communications
- Shockwave: Decepticon Scientist
- Grimlock: Autobot Dinobot
- Sideswipe: Autobot Warrior

Starscream is not included because no corresponding asset exists in `public/images/`.

## Interaction

- Lenis provides smooth scrolling.
- Framer Motion provides entrance, hover, carousel, spring, parallax, and pointer interactions.
- Hero CTAs scroll to the figure and character sections.
- Navigation links target real page sections.
- The featured figure carousel wraps between all available character assets.
- The community form provides animated joining feedback.

## Assets

- `public/images/optimus-prime.png`
- `public/images/bumblebee.png`
- `public/images/megatron.png`
- `public/images/starscream.png`
- `public/images/ironhide.png`
- `public/images/jazz.png`
- `public/images/soundwave.png`
- `public/images/shockwave.png`
- `public/images/grimlock.png`
- `public/images/sideswipe.png`
- `public/images/cybertron-archive.png`
- `public/images/archive-optimus-prime.png`
- `public/images/archive-bumblebee.png`
- `public/images/archive-megatron.png`
- `public/images/archive-starscream.png`
- `public/images/archive-ironhide.png`
- `public/images/archive-jazz.png`
- `public/images/archive-soundwave.png`
- `public/images/archive-shockwave.png`
- `public/images/archive-grimlock.png`
- `public/images/archive-sideswipe.png`

These are local character assets sourced from the supplied figure imagery. The original source images are not modified.
