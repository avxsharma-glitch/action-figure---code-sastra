# TRANSFORMERS: THE DEBUGGING WAR

> **Every system has a weakness. Every glitch leaves a trace. Can you find what the machines are hiding?**

## Mission Briefing

Cybertron has gone quiet.

The interface still glows. The figures still stand watch. Motion flows through the surface like energon through a damaged circuit. But beneath the polished shell, the system is not behaving like a stable machine.

You are a rookie Cybertronian engineer recruited for a field investigation. Your assignment is to explore the Transformers Hub, identify anomalies, gather proof, and help restore confidence in the machine. Do not trust appearances. Do not trust assumptions. Follow the evidence.

The debugging war begins when you open the page.

## Transmission from Cybertron

> **[ENCRYPTED TRANSMISSION // ORIGIN UNKNOWN]**
>
> Engineers, the visible layer is only the outer armor.
>
> Some signals arrive late. Some paths lead somewhere unexpected. Some mechanisms answer only under certain conditions. The logs may whisper before the interface speaks, and a tiny visual tremor may point toward a deeper systems fault.
>
> Record what the machine does, not what you expected it to do. Separate a design decision from a real defect. A single observation is a clue; a repeatable observation is evidence.
>
> The system will attempt to look stable. Let it. Test it patiently. Resize the viewport. Change the sequence. Use the keyboard. Watch the console. Inspect the network. The truth is rarely hidden in one dramatic explosion; it is usually buried in a quiet mismatch between intention and behavior.
>
> Find the trace. Preserve the evidence. Return the signal to Cybertron.

## The Debugging Shayari

*On Cybertron, where sparks meet code and gears remember every scar:*

```text
Code may wear a perfect mask, yet stumble when the circuits turn,
An innocent-looking signal may be the first bright spark to burn.
When console whispers rise at night, do not dismiss the sound,
The smallest log can map the fault beneath the polished ground.

A button waits like a silent bot, its promise dressed in light,
A route may bend through hidden space and vanish out of sight.
Pixels march in careful rows, then drift when worlds resize,
What fits the desktop kingdom may break beneath mobile skies.

State transitions change their tune when timing shifts the gear,
An animation may leave a ghost where no machine should appear.
Do not let assumptions command; let evidence take the throne,
Repeat the path, record the frame, and make the truth your own.

Ask every signal where it came from, trace every moving part,
Follow imports, events, and props like maps across the dark.
If one world behaves unlike the next, compare the worlds with care,
The answer hides in differences that careful tests can share.

Bring patience to the terminal, bring curiosity to the screen,
Bring questions to the network where invisible roads have been.
When Cybertron's damaged logic finally yields its guarded light,
The engineer who finds the cause has won a quiet fight.
```

## Mission Objectives

Your mission is to:

1. Explore the website thoroughly from top to bottom.
2. Observe behavior that differs from a reasonable user expectation.
3. Investigate with browser developer tools and the local development environment.
4. Record evidence that another engineer can independently verify.
5. Document expected behavior versus actual behavior.
6. Suggest a reasonable fix for every confirmed finding.

Treat every interaction as a test case. Try normal flows first, then vary timing, viewport size, input, navigation order, and interaction method.

## Rules of Engagement

- Investigate before making assumptions.
- Reproduce an issue before reporting it.
- Distinguish genuine defects from intentional design choices.
- Avoid destructive changes, data loss, and unrelated refactors.
- Respect the original project design and visual language.
- Keep reports precise, calm, and evidence-based.
- Do not expose another team’s discoveries during the challenge if the organizer requests confidentiality.
- Do not treat a console warning alone as proof of a user-facing defect.
- Preserve enough context that another engineer can follow your trail.

## Technical Arsenal

Recommended equipment for the investigation:

| Tool | Use |
|---|---|
| Browser DevTools | Inspect rendered structure, styles, events, and runtime behavior |
| Console tab | Capture errors, warnings, and useful runtime clues |
| Network tab | Observe requests, failed resources, and navigation responses |
| Responsive device emulation | Compare desktop, tablet, and narrow mobile worlds |
| Keyboard navigation | Test focus order, controls, and non-pointer workflows |
| Accessibility inspection | Review accessible names, roles, contrast, and semantics |
| React/Next.js environment | Trace components and client-side interactions |
| Terminal output | Review development-server output and build diagnostics |

## Getting Started

### Prerequisites

- Node.js compatible with the installed Next.js toolchain
- `pnpm`
- A modern browser with developer tools
- Git, if you are working from a repository checkout

### Install dependencies

From the project root:

```bash
pnpm install
```

### Start the investigation environment

```bash
pnpm dev
```

Open the local application at:

```text
http://localhost:3000
```

### Other available project commands

The project configuration also defines:

```bash
pnpm build
pnpm start
pnpm lint
```

Use the production command sequence only after creating a production build:

```bash
pnpm build
pnpm start
```

The challenge is intended to be solved through investigation. No claim is made here about the result of any command on your machine.

## How to Report a Finding

Use this template for each confirmed anomaly:

```markdown
### Finding ID — Short title

- **Severity:** Critical / High / Medium / Low
- **Browser and viewport:** Browser name, version, operating system, and viewport
- **Steps to reproduce:**
  1. 
  2. 
  3. 
- **Expected behavior:** 
- **Actual behavior:** 
- **Supporting evidence:** Console output, screenshot, network entry, or source observation
- **Suggested fix:** 
```

Keep one finding per report entry. If an issue appears only under a specific sequence or viewport, state that condition explicitly. If you cannot reproduce it consistently, label it as a lead rather than a confirmed defect.

## Investigation Checklist

- [ ] Load the page from a clean browser session.
- [ ] Walk through every visible section.
- [ ] Exercise navigation and calls to action.
- [ ] Test carousel or animated content in both directions.
- [ ] Try keyboard-only navigation.
- [ ] Inspect image and font loading behavior.
- [ ] Compare multiple viewport sizes.
- [ ] Check the console and network panel.
- [ ] Capture expected and actual behavior.
- [ ] Reproduce before escalating severity.

## Final Transmission

The strongest engineer is not the one who clicks the fastest. It is the one who notices the quiet signal, follows it through the gears, and returns with proof.

**Cybertron is waiting: find the hidden fracture, name the evidence, and make the machine tell the truth.**
