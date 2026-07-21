# The Architectural Evolution: From Mainframes to Microprocessors

## CSARCH2 S02 Group 1 Case Study

### Group Members

- Ac-ac, Mikhael Darryl
- Cordero, Ramuel Sean
- Degullado, Joseph Edward Kelvin
- Gomez, Luis Royce
- Panaligan, Louis Raphael

## Repository Structure

```txt
├── astro.config.mjs
├── package.json
├── package-lock.json
├── src
│   ├── components       # ReactComponent.jsx / AstroComponent.astro
│   ├── layouts           # ExhibitLayout.astro
│   └── pages             # topic_name.mdx
├── docs                  # proposal assets (style guide snapshot, etc.)
└── tsconfig.json
```

---

## Incremental Plans

### Stage 1: Proposal (Submitted)

#### Topic Theme

The topic bridges the gap between hardware history and fundamental computer architecture concepts, showing how we shrunk
rooms into pockets.

**Goal**: To trace the physical and architectural shifts from vacuum tubes (ENIAC) to discrete transistors
(IBM System/360) and finally to silicon microprocessors (Intel 4004).

**Highlights**: How the concept of Stored-Program Architecture (Von Neumann architecture) changed everything.

The study will follow **Three Major Milestones**:

#### 1. Vacuum Tube Era - ENIAC (1945)

One of the world's first general-purpose electronic computers. Built using approximately 18,000 vacuum tubes, ENIAC
occupied an entire room, consumed enormous amounts of electricity, and required manual rewiring to perform different
tasks. It demonstrated that electronic computation was possible and laid the foundation for future computer development.

##### Key concepts

- Vacuum tube technology
- Room-sized computing
- High power consumption
- Manual programming

#### 2. The Transistor Revolution – IBM System/360 (1964)

The invention of the transistor dramatically changed computer design. Instead of relying on fragile vacuum tubes,
computers became smaller, faster, more energy-efficient, and significantly more reliable.

IBM's System/360 family introduced the idea that multiple computer models could share the same instruction set
architecture while offering different levels of performance. This compatibility allowed software to run across different
machines without being rewritten, making computing more practical for businesses and organizations.

##### Key concepts

- Discrete transistors
- Improved reliability
- Reduced size and power consumption
- Standardized instruction set architecture

#### 3. The Microprocessor Age – Intel 4004 (1971)

The Intel 4004 represented a major breakthrough by integrating the central processing unit onto a single silicon chip.
What once required cabinets of hardware could now fit into a device smaller than a fingernail.

This innovation enabled the development of personal computers, embedded systems, smartphones, and countless modern
electronic devices, proving that increasing computing power could coexist with decreasing physical size.

##### Key concepts

- Silicon integrated circuits
- Single-chip CPU
- Miniaturization
- Beginning of modern computing

### Tech Stack Plan

Utilizing React in Astro because of its ecosystem. There are plenty of libraries available for different components,
including interactive components, that can help in building the primary interactive component. Plan to use Framer Motion
for animations and Recharts for spec comparisons.

### Interactive Component/s

An interactive timeline that lets users compare ENIAC, IBM System/360, and Intel 4004 side by side.

- A scale comparison showing room-sized vs. chip-sized hardware.
- A spec comparison card with component count, power consumption, and key concepts.
- Tabs for switching between a scale view and an architecture diagram view.
- Mobile view switches to a vertical stepper, one era per screen.

### Style Guide Snapshot

![guide](/guide.png "Style Guide Snapshot")

### Stage 2: Development (Upcoming)

- [ ] Scaffold Astro project from the provided template (Node.js 26, Astro 6)
- [ ] Set up content collections for milestone data (ENIAC, System/360, Intel 4004)
- [ ] Build the interactive timeline component
- [ ] Implement architecture diagram view
- [ ] Implement mobile stepper layout
- [ ] Write exhibit content in `topic_name.mdx`
- [ ] Style pass to match shared museum template

### Stage 3: Final Exhibit (Upcoming)

- [ ] Integration testing with merged museum site
- [ ] Accessibility and mobile responsiveness review
- [ ] Final content review and submission

### AI/LLM Disclosure

Artificial Intelligence (AI) was utilized in this work solely for summarizing and organizing reference materials using Gemini AI Pro. All final interpretations, analysis, and conclusions were independently verified and remain the sole responsibility of the human authors.

---
