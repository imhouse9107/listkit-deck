# THE ONE: Wow Slide Final

Do NOT iterate. Replace the entire OmnichannelWowSection component. This is the last version.

The previous builds were technically correct but emotionally flat. This version makes ONE bold design choice: the pipeline is the hero. Everything else serves it.

---

## THE BOLD CHOICE

The pipeline rail is not a 2px line. It is a THICK GLOWING BEAM. A 6px wide gradient band with a soft underglow, stretching across the full width of the pipeline container. It looks like a piece of live infrastructure. A fibre optic cable carrying data. When the viewer sees it, they think "that's a system" not "that's a diagram."

Everything else is quiet. The headline is strong but doesn't compete. The proof points are whispers. The closing is a single confident line. The beam is the star.

---

## BACKGROUND

#060811. One ambient glow centred on the pipeline area: radial-gradient(ellipse 90% 50% at 50% 55%, rgba(139,92,246,0.05) 0%, transparent 55%). This positions the warmth behind the pipeline, drawing the eye there.

---

## LAYER 1: HEADLINE

Centred. max-w-2xl mx-auto. pt-16.

NO eyebrow badge. Remove "OMNICHANNEL SYSTEM" entirely. It adds nothing. The headline says everything.

Headline: "They Open the Email. You're Already Calling." text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.08] text-white text-center.

Subhead: "Same-day contact after an email open. 287% higher engagement than single-channel outreach." text-base text-slate-400/80 max-w-md mx-auto mt-5 leading-relaxed text-center.

That's it. Two elements. Then space.

---

## LAYER 2: THE PIPELINE (70% of the viewport's visual weight)

max-w-5xl mx-auto. mt-16.

### Pipeline Container

```jsx
<div className="relative rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] px-12 py-14">
```

The container uses a gradient from slightly visible at top to transparent at bottom. This creates a subtle "stage" without a hard box.

### THE BEAM (the bold move)

A single horizontal element spanning the full width of the container, vertically centred behind the nodes. Three layers stacked:

Layer 1 (the core): h-[3px], bg-gradient-to-r from-violet-600/50 via-violet-500/60 to-emerald-500/50. Sharp, clean, the actual "wire."

Layer 2 (the glow): Same position, h-[6px], bg-gradient-to-r from-violet-500/20 via-violet-400/30 to-emerald-400/20, filter blur(4px). The soft halo around the wire.

Layer 3 (the wide aura): Same position, h-[16px], bg-gradient-to-r from-violet-500/5 via-violet-400/8 to-emerald-400/5, filter blur(12px). The ambient light the beam casts on its surroundings.

Together these three layers create a beam that looks like a glowing fibre optic cable. The gradient shifts from violet (outreach) to emerald (outcome) across its full length.

Position this beam at the vertical centre of the node icons (roughly top-[50%] of the icon containers).

### Nodes

Larger than any previous version. Spaced evenly across the beam.

**Every node sits ON the beam.** The icon container overlaps it. The beam passes behind/through the icon container, creating the visual metaphor of "plugged into the system."

**Standard node (Emails Sent, SDR Calls):**
- Icon container: w-20 h-20 rounded-2xl bg-[#0a0d1a] border border-violet-500/20
- No box-shadow (the beam provides all the visual energy)
- Icon: w-9 h-9 text-violet-400/60 stroke-[1.5]
- Below the icon container:
  - Label: text-sm font-semibold text-white mt-4
  - Stat: text-2xl font-bold text-white mt-1
  - Stat label: text-[10px] tracking-[0.14em] uppercase text-slate-600 mt-1

**Trigger node (Email Opened):**
- Icon container: w-24 h-24 rounded-2xl bg-[#0c0a1a] border border-violet-500/30
- Shadow: shadow-[0_0_20px_rgba(139,92,246,0.15)] (the ONLY node with a shadow)
- Icon: Eye, w-10 h-10 text-violet-300/80
- Stat: "Real-Time" in text-2xl font-bold text-violet-200 (slightly tinted, the only coloured stat)
- Stat label: "AI DETECTION" in text-[10px] text-violet-500/50

**Outcome node (Meeting Booked):**
- Icon container: w-20 h-20 rounded-2xl bg-[#080d0a] border border-emerald-500/20
- Icon: CalendarCheck, w-9 h-9 text-emerald-400/60
- Stat: "Your Calendar" text-2xl font-bold text-white

### SAME DAY Badge

Positioned on the beam, between Email Opened and SDR Calls. It should feel STAMPED onto the infrastructure.

```jsx
<span className="absolute z-20 px-3 py-1.5 rounded-md text-[11px] font-bold tracking-[0.08em] uppercase
                 text-violet-200 bg-[#0c0a1a] border border-violet-500/25
                 shadow-[0_0_12px_rgba(139,92,246,0.12)]">
  SAME DAY
</span>
```

Rounded-md not rounded-full. Bigger than before (text-[11px] not text-[9px]). This is a KEY piece of information. It needs to be read easily.

### Beam Particles

3 dots traveling the full length of the beam, left to right. They are part of the beam, not separate from it.

- Size: w-2.5 h-2.5 rounded-full
- Start colour: bg-violet-400/70, shadow 0 0 8px rgba(139,92,246,0.5)
- At 65% of journey: transitions to bg-emerald-400/70, shadow 0 0 8px rgba(52,211,153,0.5)
- Duration: 4.5s, linear, repeat infinity
- Stagger: 1.5s apart
- These particles should be CLEARLY visible. Not squinting-subtle. They're data flowing through the pipe.

### NO italic description text below the pipeline.

Remove "Prospect opens your email. SDR calls them the same day. Meeting booked." entirely. The pipeline IS the explanation. Captions weaken it.

---

## LAYER 3: PROOF STRIP

max-w-4xl mx-auto. mt-20.

A thin border-t border-white/[0.05] as a divider. pt-10.

3 columns (grid-cols-1 md:grid-cols-3 gap-10).

Each proof point:
- Small accent line: w-8 h-[2px] bg-violet-500/25 mb-4 (third column: bg-emerald-500/25)
- Headline: text-[15px] font-semibold text-white/90 leading-snug
- Description: text-sm text-slate-500 mt-2 leading-relaxed

1. "Same-day calls on warm opens" / "Prospects who opened your email get called within hours. 21x more likely to qualify."
2. "Full team, fully managed" / "SDR recruited, trained, and replaced if they leave. No hiring. No oversight."
3. "Your domain stays clean" / "Private sending infrastructure. 98%+ delivery rate. Your primary domain never touches outreach."

---

## LAYER 4: CLOSING

Centred. mt-16 pb-20.

One line only: "20-30 qualified conversations per month. The output of 5-10 SDRs. The cost of one." ALL in one sentence. text-xl md:text-2xl font-semibold text-white tracking-tight text-center.

No secondary violet line. No split. One clean, confident statement.

---

## ANIMATIONS (2 systems only)

### Entry (once, 1.2 seconds total)

Trigger: 25% of section in viewport.

Sequence:
- T=0ms: Headline block, opacity 0 to 1, y 12 to 0, duration 400ms
- T=150ms: Pipeline container fades in, opacity 0 to 1, duration 300ms
- T=200ms: THE BEAM draws across. scaleX 0 to 1, origin-left, duration 700ms, ease [0.22, 1, 0.36, 1] (starts slow, accelerates). The underglow layers fade in 150ms after the core line reaches full width.
- T=250ms: Node 1 appears (as beam reaches it). opacity 0 to 1, scale 0.96 to 1, duration 250ms
- T=400ms: Node 2 appears (as beam reaches it)
- T=550ms: Node 3 appears + SAME DAY badge
- T=700ms: Node 4 appears
- T=900ms: Particles begin flowing
- T=1000ms: Proof strip fades in, opacity 0 to 1, y 8 to 0
- T=1100ms: Closing fades in

The beam drawing across with nodes appearing as it reaches them IS the wow moment. It's a machine powering up. Each station comes online as the power arrives.

### Continuous (the hum)

1. Trigger node breathing: ONE ring, position absolute inset -4px, rounded-2xl, border border-violet-500/20. Opacity 0.25 to 0.10 to 0.25, scale 1 to 1.05 to 1, duration 3.5s ease-in-out repeat. ONLY on Email Opened. All other nodes are static.

2. Beam particles: 3 dots as described above, continuous.

Nothing else moves. No hover effects. No flashes. No counter animations.

---

## RESPONSIVE

Mobile (below 768px):
- Headline: text-3xl
- Pipeline rotates vertical. The BEAM becomes a vertical line (w-[3px] h-full) with the same 3-layer glow treatment. Nodes arranged vertically with the beam running down the left side. Each node is a horizontal card (icon left, text right) connected to the vertical beam with a short horizontal notch.
- Particles travel top to bottom.
- SAME DAY badge sits on the vertical beam between node 2 and node 3.
- Proof strip: single column.
- Closing: text-lg.

Tablet (768-1279px):
- Horizontal pipeline, slightly narrower container (px-8).
- Nodes slightly smaller (w-18 h-18, trigger w-22 h-22).

---

## WHY THIS IS THE 10

Previous versions treated the pipeline as a DIAGRAM to be read. This version treats it as a MACHINE to be witnessed. The beam is physical. The nodes are stations. The particles are data. The entry animation is the machine turning on.

The headline tells you what happens. The pipeline shows you HOW it happens. The closing tells you what you GET. Three layers, zero noise.

One bold move (the beam), executed with confidence. Everything else quiet. That's the 10.
