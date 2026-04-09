# Final Lovable Prompt: Wow Slide (Restrained 10/10)

Paste this as a REPLACEMENT prompt. Start fresh. Do not iterate on the existing component. Build from scratch.

---

## THE BRIEF

Build a single full-viewport section for a B2B sales deck. This is the "wow" slide showing how cold email and cold calling work as one integrated system. The design must follow Stripe/Linear/Vercel level restraint. One argument. One focal point. No visual noise.

Tech: React, TypeScript, Tailwind CSS, Framer Motion, Lucide React.

---

## DESIGN RULES (follow these strictly)

1. Maximum 1 continuous animation system running at any time
2. Only 2 accent colours in the entire section: violet (#8b5cf6) and green (#22c55e). Green appears ONLY on the final node.
3. Glow shadows never exceed 24px blur radius
4. No glow on text, buttons, or headlines. Glow only on diagram nodes.
5. Borders use white at 8% opacity maximum
6. Vertical spacing between layers: 80-96px minimum
7. Typography creates hierarchy BEFORE any colour is applied
8. ONE element gets the premium treatment (the trigger node). Everything else steps back.

---

## BACKGROUND

Background colour: #060811. No dot grid. No noise texture. No radial gradient overlays.

One single ambient effect: a very subtle, barely visible radial gradient centred behind the flow diagram area. `radial-gradient(ellipse 70% 40% at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 60%)`. This should be almost invisible. If you can clearly see it, it's too strong.

---

## LAYOUT (top to bottom)

### Layer 1: Eyebrow + Headline
Centred. max-w-3xl mx-auto. py-24 at the top.

Eyebrow: "OMNICHANNEL SYSTEM" in a small pill. text-[10px] uppercase tracking-[0.14em] font-medium text-violet-400/70 border border-violet-500/20 rounded-full px-3 py-1. No background fill. Subtle, not attention-grabbing.

Headline: "They Open the Email. You're Already Calling." in pure white. text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.1] text-white. NO gradient text. NO glow behind it. Let the words do the work.

Subhead: "Same-day contact after an email open. 287% higher engagement than single-channel outreach." in text-base text-slate-400 max-w-lg mx-auto mt-6 leading-relaxed.

The headline is the FIRST thing the eye should land on. It must be the largest, heaviest element on the entire slide.

---

### Layer 2: Flow Diagram
Centred. max-w-5xl mx-auto. mt-20.

Four nodes in a horizontal row on desktop (flex-row items-center justify-between), vertical stack on mobile (flex-col items-center).

**ALL NODES share the same base style:**
- Icon container: w-16 h-16 rounded-xl. bg-white/[0.04] border border-white/[0.08]. No box-shadow on default nodes.
- Icon: w-7 h-7 text-violet-400/80 (stroke-width 1.5)
- Label: text-sm font-medium text-white mt-3 text-center
- Stat: text-lg font-semibold text-white/90 mt-1
- Stat label: text-[10px] tracking-[0.12em] uppercase text-slate-600 mt-0.5

**Node 1: Emails Sent**
- Icon: Mail
- Stat: "10,000"
- Stat label: "PER MONTH"

**Node 2: Email Opened (THE TRIGGER NODE)**
This is the ONE element that gets premium treatment:
- Icon container: w-20 h-20 (slightly larger than others). Same rounded-xl shape.
- Background: bg-violet-950/40 border border-violet-500/20
- Box-shadow: 0 0 20px rgba(139,92,246,0.15) (subtle, not dramatic)
- Icon: Eye, text-violet-300 (slightly brighter than other icons)
- Stat: "Real-Time"
- Stat label: "AI DETECTION"

**Node 3: SDR Calls**
- Icon: Phone
- Stat: "1,500+"
- Stat label: "DIALS PER DAY"

**Node 4: Meeting Booked**
- Icon: CalendarCheck
- Icon colour: text-emerald-400/80 (the ONLY green in the section)
- Border: border-emerald-500/15 (very subtle green tint)
- Stat: "Your Calendar"
- Stat label: "BOOKED DIRECTLY"

**Connectors between nodes:**
Simple. A horizontal line (flex-1 h-px bg-white/[0.06] mx-6) connecting each pair. No particles. No comet tails. No animated dots on connectors 1 and 2.

Between Node 2 and Node 3: a small static badge centred on the connector line. Text: "SAME DAY" in text-[9px] tracking-[0.1em] uppercase font-medium text-violet-400/60 bg-violet-950/50 border border-violet-500/15 rounded-full px-2.5 py-0.5. Static. No pulsing. No animation.

Between Node 3 and Node 4 (the LAST connector only): two small dots (w-1.5 h-1.5 rounded-full bg-violet-400/50) travel slowly along the line from left to right. Duration 3s, linear, repeat infinity, staggered 1.5s apart. Very subtle. Box-shadow: 0 0 4px rgba(139,92,246,0.3). These should be noticed after 3 seconds of looking, not immediately.

Below the diagram, centred: "Prospect opens your email. SDR calls them the same day. Meeting booked." in text-sm text-slate-600 italic mt-8. This text should be QUIET. Almost invisible.

---

### Layer 3: Feature Bullets
max-w-4xl mx-auto. mt-20.

NO section title. No "WHAT THE SYSTEM DELIVERS" heading. It adds visual weight without earning it.

A barely-there card: bg-white/[0.02] border border-white/[0.06] rounded-xl p-6.

3 bullets only (not 6). In a single row on desktop (grid-cols-3 gap-6), stacked on mobile (grid-cols-1 gap-4).

Each bullet:
- A small violet dot: w-1.5 h-1.5 rounded-full bg-violet-400/50 mt-1.5 flex-shrink-0
- Headline: text-sm font-medium text-white/90
- Description: text-xs text-white/35 mt-1 leading-relaxed

The 3 bullets (most impactful, ranked):
1. "Same-day SDR calls on warm opens" / "Prospects who opened your email get called within hours. Not days."
2. "Full team, fully managed" / "SDR recruited, trained, and replaced if they leave. Zero overhead."
3. "Your domain stays clean" / "Separate sending infrastructure. Your main domain never touches outreach."

---

### Layer 4: Closing
Centred. mt-16 mb-24.

Primary: "20-30 qualified conversations per month." in text-lg font-semibold text-white tracking-tight.

Secondary: "The output of 5-10 SDRs. The cost of one." in text-sm text-violet-400/60 font-normal mt-2.

No divider line. No decorative elements. Just two lines of text with space around them.

---

## ANIMATIONS (3 systems maximum)

**System 1: Entry stagger (runs once)**
When 30% of the section enters the viewport (whileInView, viewport once true amount 0.3):
- Headline: opacity 0 to 1, y 12 to 0, duration 400ms
- Subhead: same, delay 100ms
- Flow nodes: stagger 80ms apart, opacity 0 to 1, y 8 to 0, duration 300ms
- Connectors: opacity 0 to 1, duration 300ms, after nodes finish
- Bullets: opacity 0 to 1, y 8 to 0, stagger 60ms, after connectors
- Closing: opacity 0 to 1, delay 200ms after bullets
Total sequence: under 1.5 seconds. Fast. Clean. Done.

**System 2: Trigger node ambient pulse (continuous)**
ONLY on Node 2 (Email Opened). A single ring (position absolute, inset -2px, rounded-xl, border 1px solid rgba(139,92,246,0.2)) that breathes:
- Scale: 1 to 1.06 to 1
- Opacity: 0.3 to 0.15 to 0.3
- Duration: 3.5s, ease-in-out, repeat infinity
This is the ONLY continuously animated element besides the particles. It should be barely noticeable.

**System 3: Last-connector particles (continuous)**
Two dots on the connector between SDR Calls and Meeting Booked. Already described above. Slow, subtle, barely there.

**NO other animations:**
- No counter animations (stats appear static)
- No shockwave rings
- No hover scale effects
- No glow pulses on other nodes
- No noise overlay
- No rotating rings
- No green flash on meeting booked

**Hover (desktop only, minimal):**
Nodes on hover: border-white/[0.12] (from 0.08). That's it. A 4% opacity shift on the border. No scale. No glow bloom. Transition 200ms.

---

## RESPONSIVE

Desktop (1280px+): Horizontal flow, 3-col bullets, full spacing.
Tablet (768-1279px): Horizontal flow, nodes slightly smaller (w-14 h-14), 3-col bullets, spacing reduced to py-16 mt-16.
Mobile (below 768px): Vertical flow. Each node becomes a horizontal card (flex-row, icon left, text right). Vertical connectors (h-8 w-px bg-white/[0.06]). Bullets stack single column. Headline text-3xl.

---

## WHAT THIS SLIDE DOES NOT HAVE

- No contrast bar / "old way vs new way" comparison (that belongs on its own slide)
- No gradient text on the headline
- No particle effects on the first two connectors
- No counter animations
- No multiple glow colours
- No noise texture
- No glassmorphism with gradient borders
- No green checkmarks
- No section titles in uppercase
- No circular feedback loop

The slide has ONE job: show the system, make it feel alive, make the prospect want it. Everything that doesn't serve that job is removed.

---

## THE QUALITY TEST

If you removed all colour and animation from this section and rendered it in pure white on white, the layout and typography should still communicate the message clearly. The effects support. They never carry.
