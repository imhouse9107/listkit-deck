# Lovable Prompt: Wow Slide (THE 10/10)

Replace the existing OmnichannelWowSection component entirely. Build from scratch.

The previous version was too restrained. It's clean but dead. This version finds the sweet spot: structurally strong, visually alive, not noisy.

Tech: React, TypeScript, Tailwind CSS, Framer Motion, Lucide React.

---

## WHAT WENT WRONG BEFORE

The nodes are too small, too far apart, and the connectors are invisible. It reads as 4 orphaned icons, not a connected machine. The fix is structural: make the pipeline feel PHYSICALLY connected, like plumbing, not like floating icons with invisible lines between them.

---

## BACKGROUND

Background: #060811.

One ambient glow behind the flow diagram area: radial-gradient(ellipse 80% 50% at 50% 48%, rgba(139,92,246,0.06) 0%, transparent 60%). Barely visible. Sets the stage without competing.

---

## LAYER 1: HEADLINE

Centred. max-w-3xl mx-auto. pt-20 pb-4.

Eyebrow: "OMNICHANNEL SYSTEM" pill badge. text-[10px] uppercase tracking-[0.14em] font-medium text-violet-400/60 border border-violet-500/20 rounded-full px-3 py-1 mb-6.

Headline: "They Open the Email. You're Already Calling." Pure white. text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.03em] leading-[1.05] text-white. No gradient. No glow.

Subhead: "Same-day contact after an email open. 287% higher engagement than single-channel outreach." text-lg text-slate-400 max-w-xl mx-auto mt-6 leading-relaxed.

---

## LAYER 2: THE PIPELINE (this is the centrepiece)

max-w-4xl mx-auto. mt-16 mb-4.

This is NOT 4 separate nodes with thin lines between them. This is ONE CONTINUOUS PIPELINE rendered as a unified visual unit.

### The Pipeline Container

Wrap the entire pipeline in a single container with a very subtle shared background to make it feel unified:

```
<div class="relative flex items-start justify-between px-8 py-10 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
```

This container makes all 4 nodes feel like they belong to ONE system, not 4 separate elements.

### The Connection Rail

Behind the nodes, render a single CONTINUOUS horizontal line that spans the full width of the container. This is the "backbone" of the pipeline:

```
<div class="absolute top-[72px] left-[120px] right-[120px] h-[2px] bg-gradient-to-r from-violet-500/20 via-violet-500/30 to-emerald-500/20" />
```

This line is ALWAYS visible. It's the spine. Nodes sit ON TOP of it, not between separate connector segments. The gradient shifts from violet to emerald across the full width, reinforcing the flow from "outreach" to "outcome."

### Nodes

Each node sits on top of the rail. They're larger and more substantial than before.

**Standard node (Emails Sent, SDR Calls):**
```
flex flex-col items-center relative z-10
```
- Icon container: w-[72px] h-[72px] rounded-2xl bg-[#0c0a1a] border border-violet-500/25 flex items-center justify-center
- Shadow: shadow-[0_0_16px_rgba(139,92,246,0.12)]
- A small downward notch/tick on the bottom of the icon container that visually "plugs into" the rail line beneath it. Use a small triangle or a 2px wide, 8px tall line in violet-500/30 extending from the bottom centre of the icon container down to the rail.
- Icon: w-8 h-8 text-violet-400/70, stroke-width 1.5
- Label: text-sm font-semibold text-white mt-3
- Stat: text-xl font-bold text-white mt-0.5
- Stat label: text-[10px] tracking-[0.12em] uppercase text-slate-600 mt-0.5

**Trigger node (Email Opened) - THE STAR:**
- Icon container: w-[88px] h-[88px] (noticeably larger). Same rounded-2xl.
- Background: bg-gradient-to-b from-violet-900/30 to-[#0c0a1a]
- Border: border-violet-500/35 (brighter than others)
- Shadow: shadow-[0_0_24px_rgba(139,92,246,0.2)] (the ONLY node with visible glow)
- Same connector notch to the rail, but slightly wider (3px)
- Icon: Eye, w-9 h-9 text-violet-300 (brighter)
- Label: text-sm font-semibold text-white mt-3
- Stat: "Real-Time" text-xl font-bold text-violet-300 (the ONLY coloured stat, all others are white)
- Stat label: "AI DETECTION" text-[10px] tracking-[0.12em] uppercase text-violet-500/60

**Outcome node (Meeting Booked):**
- Same size as standard nodes
- Icon container: same w-[72px] h-[72px] rounded-2xl but bg-[#0a1a10] border border-emerald-500/25
- Shadow: shadow-[0_0_16px_rgba(34,197,94,0.12)]
- Connector notch in emerald-500/30
- Icon: CalendarCheck, w-8 h-8 text-emerald-400/70
- Stat: "Your Calendar" text-xl font-bold text-white
- Stat label: "BOOKED DIRECTLY"

### SAME DAY Marker

Between Email Opened and SDR Calls, ON the rail line, place the SAME DAY badge. It should feel like a label stamped onto the pipeline:

```
<div class="absolute top-[64px] left-1/2 -translate-x-1/2 z-20">
  <span class="px-3 py-1 rounded-md text-[10px] font-bold tracking-[0.1em] uppercase
               text-violet-300 bg-violet-950 border border-violet-500/25
               shadow-[0_0_12px_rgba(139,92,246,0.15)]">
    SAME DAY
  </span>
</div>
```

Make it a rounded-md (not rounded-full). Slightly bolder border. It should feel like a label on a piece of infrastructure, not a floating pill.

### Pipeline Particles

On the rail line, 3 small dots travel from left to right across the FULL width of the pipeline (not per-segment). They represent data flowing through the entire system:

- Dot: w-2 h-2 rounded-full bg-violet-400/60 shadow-[0_0_6px_rgba(139,92,246,0.4)]
- Animation: translateX from left edge to right edge. Duration 4s, linear, repeat infinity.
- Stagger the 3 dots 1.3s apart so they're evenly spaced across the rail.
- As each dot passes the halfway point, it shifts colour from violet to emerald (use a CSS transition or keyframe that changes bg at 70% of the journey).
- These particles should be SUBTLE. Not the first thing you see. They reward a second look.

### Below the Pipeline Container

Centred, mt-6: "Prospect opens your email. SDR calls them the same day. Meeting booked." in text-sm text-slate-500/70 italic.

---

## LAYER 3: PROOF STRIP

max-w-4xl mx-auto. mt-16.

NOT a card. NOT a glassmorphism box. Just a clean horizontal strip with a thin top border as a section divider:

```
<div class="border-t border-white/[0.06] pt-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
```

3 proof points in a clean row. No card background. No checkmarks. No dots. Just text with hierarchy:

Each proof point:
- Headline: text-sm font-semibold text-white/90 leading-snug
- Description: text-[13px] text-slate-500 mt-1.5 leading-relaxed

The 3 points:
1. "Same-day calls on warm opens" / "Prospects who opened your email get called within hours. 21x more likely to qualify than cold outreach."
2. "Full team, fully managed" / "SDR recruited, trained, and replaced if they leave. No hiring. No management. No turnover."
3. "Your domain stays clean" / "Private sending infrastructure. Your primary domain never touches cold outreach. 98%+ delivery rate."

---

## LAYER 4: CLOSING

Centred. mt-14 pb-20.

Primary: "20-30 qualified conversations per month." in text-xl md:text-2xl font-bold text-white tracking-tight.

Secondary: "The output of 5-10 SDRs. The cost of one." in text-base text-violet-400/50 mt-2.

---

## ANIMATIONS (carefully balanced)

**Entry (runs once, fast):**
When 25% of section enters viewport:
- Headline block: opacity 0 to 1, y 16 to 0, duration 500ms, ease [0.16, 1, 0.3, 1]
- Pipeline container: opacity 0 to 1, y 12 to 0, duration 500ms, delay 200ms
- Individual nodes: stagger 100ms apart WITHIN the container, opacity 0 to 1, scale 0.95 to 1, duration 400ms
- Rail line: scaleX 0 to 1, origin-left, duration 600ms, delay 300ms (the line DRAWS across as nodes appear)
- SAME DAY badge: opacity 0 to 1, scale 0.9 to 1, duration 300ms, delay 700ms
- Proof strip: opacity 0 to 1, y 8 to 0, duration 400ms, delay 600ms
- Closing: opacity 0 to 1, duration 300ms, delay 700ms

Total: under 1.5 seconds.

**Continuous (the machine humming):**

1. Trigger node pulse: The icon container on Email Opened has ONE subtle breathing ring. Position absolute, inset -3px, rounded-2xl, border border-violet-500/15. Animates: opacity 0.2 to 0.08 to 0.2, scale 1 to 1.04 to 1, duration 3s, ease-in-out, repeat. ONLY this node breathes. Others are static.

2. Pipeline particles: 3 dots crossing the rail as described above. Subtle, continuous, slow.

That's it. TWO continuous animation systems. Nothing else moves after the entry sequence completes.

**Hover (desktop, minimal):**
- Nodes: border opacity increases from current to +10% (e.g., border-violet-500/25 becomes border-violet-500/35). Transition 200ms. No scale. No glow change.
- Proof points: no hover effect.

---

## RESPONSIVE

Desktop (1280px+): Horizontal pipeline, 3-col proof strip, full spacing.

Tablet (768-1279px): Horizontal pipeline, nodes slightly smaller (w-16 h-16 icons), proof strip stays 3-col, spacing reduced.

Mobile (below 768px):
- Pipeline container switches to flex-col. Rail line rotates to VERTICAL (h-full w-[2px], positioned left-1/2).
- Nodes sit to the right of the vertical rail with horizontal connector notches going left to meet the rail.
- Each node becomes a compact horizontal card: icon on left, text on right (flex-row items-center gap-4).
- Particles travel top-to-bottom on the vertical rail.
- SAME DAY badge sits on the rail between node 2 and node 3.
- Proof strip: single column.
- Headline: text-3xl.
- Closing: text-lg.

---

## WHY THIS VERSION IS 10/10

The pipeline CONTAINER solves the structural problem. The nodes aren't floating in space anymore. They sit on a visible backbone, physically connected, clearly part of one system. The rail line drawing across during entry is the "machine turning on" moment. The particles are data flowing through the pipeline. The trigger node is obviously the centrepiece because it's physically larger and the only thing that breathes.

No noise. No gradients on text. No 4-colour glow rainbow. No glassmorphism. No dot grids. Just one clean machine, humming.
