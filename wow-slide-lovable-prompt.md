# Lovable Prompt: ListKit "1+1=11" Wow Slide Section

Paste the sections below into Lovable in order. Start with PROMPT 1 (layout + static design), verify it looks right, then paste PROMPT 2 (animations + interactions).

---

## PROMPT 1: Layout + Static Design

Build a full-viewport "wow" section for a B2B SaaS sales deck website. This is the centrepiece slide that shows how cold email + cold calling work as ONE integrated system.

Tech stack: React, TypeScript, Tailwind CSS, Framer Motion, Lucide React icons, shadcn/ui.

### DESIGN SYSTEM

Background: #060811 base with a dot-grid overlay using `radial-gradient(circle, rgba(139,92,246,0.15) 1px, transparent 1px)` at 28px spacing. Add a radial purple glow at top center: `radial-gradient(ellipse 80% 50% at 50% -5%, rgba(109,40,217,0.12) 0%, transparent 60%)`.

Colors:
- Background: #060811
- Surface: #0a0a1a
- Violet primary: #8b5cf6
- Violet bright: #a78bfa
- Blue secondary: #3b82f6
- Cyan trigger: #06b6d4
- Green success: #22c55e (ONLY used on the final "Meeting Booked" node)
- Text primary: #f8fafc
- Text secondary: #94a3b8
- Text muted: #64748b

### LAYOUT (top to bottom, full min-h-screen section)

**LAYER 1: Contrast Bar (top)**
A compact horizontal split bar, roughly 80px tall, max-w-5xl centered. Two panels side by side separated by a thin vertical divider.

Left panel (muted, desaturated):
- Label: "THE OLD WAY" in text-xs uppercase tracking-widest, text-slate-500
- Three small icons (Mail, Phone, User from Lucide) each inside their own isolated bordered box (border-dashed border-slate-700 rounded-lg p-2)
- Dashed connector lines between them that STOP SHORT and do not connect (visible gaps)
- Below icons: "Three tools. Three logins. Zero coordination." in text-xs text-slate-600

Right panel (vivid, glowing):
- Label: "THE LISTKIT WAY" in text-xs uppercase tracking-widest, text-violet-400
- Same three icons but inside ONE unified rounded container (border border-violet-500/30 bg-violet-600/10 rounded-xl p-2)
- Solid glowing connector lines between them (bg-violet-500/60)
- Below icons: "One system. Email opens trigger calls. Same day." in text-xs text-violet-300

The divider between panels: a thin vertical line that is border-slate-700 on the left half and border-violet-500/30 on the right half.

**LAYER 2: Headline (below contrast bar)**
Centered, max-w-3xl mx-auto, mt-12.

Eyebrow badge: "OMNICHANNEL SYSTEM" in a small pill/capsule (text-[10px] uppercase tracking-[0.14em] font-semibold text-cyan-400 border border-cyan-500/30 rounded-full px-4 py-1 bg-cyan-500/5).

Main headline: "They Open the Email. You're Already Calling." in font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.03em] leading-[1.1]. Apply gradient text: bg-gradient-to-br from-slate-50 via-violet-300 to-blue-300 bg-clip-text text-transparent.

Subhead: "Same-day contact after an email open. 287% higher engagement than single-channel outreach." in text-lg text-slate-400, max-w-xl mx-auto, mt-4.

**LAYER 3: System Flow Diagram (hero visual)**
Centered, max-w-6xl, mt-16. This is THE centrepiece.

Four nodes connected by three animated connector beams, laid out horizontally on desktop (flex-row items-center justify-between), vertically on mobile (flex-col).

Each node is a card with:
- A rounded-2xl icon container (w-20 h-20) with glow shadow and 1px border
- Icon inside (from Lucide)
- Label below (text-sm font-semibold text-white)
- Stat below label (text-2xl font-bold, coloured to match node accent)
- Stat label below stat (text-xs text-slate-500 uppercase tracking-wide)
- Subtle pulse ring animation on the icon container

NODE 1 - "Emails Sent"
- Icon: Mail (Lucide)
- Accent: #3b82f6 (blue)
- Stat: "10,000" (animated counter)
- Stat label: "PER MONTH"
- Glow: box-shadow 0 0 30px rgba(59,130,246,0.25)

NODE 2 - "Email Opened"
- Icon: Eye (Lucide)
- Accent: #8b5cf6 (violet)
- Stat: "Real-Time"
- Stat label: "AI DETECTION"
- This is the TRIGGER node. Make it slightly larger (w-24 h-24 icon container). Add a stronger glow: box-shadow 0 0 40px rgba(139,92,246,0.4). Background gradient on the icon container: from-violet-900/60 to-violet-700/30.

NODE 3 - "SDR Calls"
- Icon: Phone (Lucide)
- Accent: #a78bfa (bright violet)
- Stat: "1,500+"
- Stat label: "DIALS PER DAY"
- Glow: box-shadow 0 0 30px rgba(167,139,250,0.25)

NODE 4 - "Meeting Booked"
- Icon: CalendarCheck (Lucide)
- Accent: #22c55e (green, the ONLY green in the entire section)
- Stat: "Your Calendar"
- Stat label: "BOOKED DIRECTLY"
- Glow: box-shadow 0 0 30px rgba(34,197,94,0.25)

CONNECTORS between nodes:
Each connector is a horizontal beam (flex-1 mx-4 h-[2px]) with:
- Base: a dashed line (border-dashed border-white/10)
- Active beam: gradient line that draws in (from the source node accent color, fading to the next node's accent color)
- A small glowing dot (w-2 h-2 rounded-full) that travels along the connector continuously
- Between Node 2 and Node 3: add a small capsule badge centered on the connector that says "SAME DAY" (text-[10px] font-bold text-violet-300 bg-violet-900/60 border border-violet-500/30 rounded-full px-3 py-0.5)

Below the flow diagram, centered: "Prospect opens your email. SDR calls them the same day. Meeting booked." in text-sm text-slate-500 italic.

NO return line. NO circular loop. The flow is strictly left-to-right (top-to-bottom on mobile). This is intentional.

**LAYER 4: "What The System Delivers" (below diagram)**
max-w-5xl mx-auto, mt-20.

Section title: "What The System Delivers" in text-sm font-semibold tracking-widest uppercase text-slate-500 text-center mb-10.

Glassmorphism card: bg-white/[0.035] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8. Add a gradient top border using a ::before pseudo-element (linear-gradient from transparent through rgba(139,92,246,0.6) to transparent).

Inside: 2-column grid (grid-cols-1 md:grid-cols-2 gap-5) with 6 feature bullets:

Each bullet is a flex row with:
- A green checkmark icon (CheckCircle2 from Lucide, w-5 h-5 text-emerald-400, flex-shrink-0)
- Text: headline in text-sm font-semibold text-white, description in text-sm text-slate-400

The 6 bullets (in order):
1. "Hot email opens trigger same-day SDR calls" / "Prospects who opened get called within hours. 21x more likely to qualify."
2. "SDR recruited, trained, managed for your account" / "Dedicated rep. Fully onboarded. No hiring, no management overhead."
3. "1,500+ dials per day via AI parallel dialer" / "Volume no in-house team can match. Compression of months into days."
4. "Handles objections live. Books directly to your calendar" / "Trained on your offer. Real conversations, real meetings. Not lead forms."
5. "AI personalisation. 2-3x higher reply rates" / "Every email uniquely written. No templates. No batch-and-blast."
6. "Warmed inboxes. Main domain 100% protected" / "Separate sending infrastructure. Your primary domain never touches cold outreach."

**LAYER 5: Closing Tagline**
Below the feature card, centered, mt-10 mb-16.

Main close: "20-30 qualified conversations per month. No headcount. No ramp time. No excuses." in text-xl md:text-2xl font-bold text-white text-center tracking-tight.

Secondary: "The output of 5-10 SDRs. The cost of one." in text-base text-violet-400 text-center mt-3 font-medium.

### RESPONSIVE BEHAVIOR

Desktop (1280px+): Full horizontal flow diagram. 2-column feature grid. Full padding px-16.

Tablet (768-1279px): Flow diagram stays horizontal but nodes shrink (w-16 h-16 icons). 2-column grid stays. Padding px-10.

Mobile (below 768px): Flow diagram becomes VERTICAL (flex-col). Each node becomes a full-width card (flex-row with icon left, text right, step number far right in text-3xl font-black text-violet-500/30). Vertical connectors (h-10 w-px bg-violet-500/30) with downward-traveling dots. Feature grid becomes single column. Headline text-3xl.

### PACKAGES
Required: framer-motion, lucide-react (both should already be in Lovable).
Do NOT use: three.js, canvas-confetti, GSAP, or any heavy animation library.

Export as a single named component: OmnichannelWowSection.tsx

---

## PROMPT 2: Animations + Interactions

(Paste this AFTER Prompt 1 is working and looks correct)

Add the following animations to the OmnichannelWowSection component. Use Framer Motion throughout. All animations trigger once when 30% of the section enters the viewport (use whileInView with viewport={{ once: true, amount: 0.3 }}).

### ENTRY SEQUENCE (timed from scroll trigger)

T=0ms: Section background fades in (opacity 0 to 1, duration 400ms).

T=0ms: Contrast bar fades up (y: 20 to 0, opacity 0 to 1, duration 500ms).

T=300ms: Headline fades up with blur clearing (y: 24 to 0, opacity 0 to 1, filter blur(8px) to blur(0px), duration 600ms, ease [0.16, 1, 0.3, 1]).

T=500ms: Eyebrow badge and subhead fade in (opacity 0 to 1, duration 400ms).

T=700ms: Flow nodes stagger in. Use a parent container with staggerChildren: 0.15. Each node: scale 0.85 to 1, opacity 0 to 1, y: 12 to 0, duration 400ms, ease [0.34, 1.56, 0.64, 1] (spring overshoot).

T=1000ms: Connector beams draw in (SVG pathLength 0 to 1, or scaleX 0 to 1 origin-left, duration 600ms).

T=1200ms: Counter animations begin. "10,000" counts from 0 over 1800ms. "1,500" counts from 0 over 1400ms. Both use easeOut.

T=1400ms: Connector particles start flowing (see below).

T=1800ms: Feature card fades up (y: 24 to 0, opacity 0 to 1, duration 500ms).

T=2000ms: Feature bullets stagger in (staggerChildren: 0.1, each: y: 16 to 0, opacity 0 to 1, duration 400ms).

T=2400ms: Closing tagline fades in (opacity 0 to 1, duration 500ms).

### CONTINUOUS ANIMATIONS (loop forever after entry)

**Node pulse rings:** Each node's icon container has an outer ring that pulses continuously. The ring scales from 1 to 1.15 and opacity fades from 0.6 to 0 over 2.4s, ease-in-out, repeat Infinity. Stagger the start times: Node 1 at 0s, Node 2 at 0.6s, Node 3 at 1.2s, Node 4 at 1.8s. This makes them breathe independently.

**Connector particles:** 3 glowing dots per connector, traveling from left to right continuously. Each dot: w-2 h-2 rounded-full, colored to match the source node's accent. Box-shadow: 0 0 8px [accent color at 80% opacity]. Animation: translateX from 0% to 100% of connector width, duration 2s, linear, repeat Infinity. Stagger the 3 dots by 0.7s each. Particle count per connector varies to show funnel narrowing: Connector 1 has 4 dots, Connector 2 has 3 dots, Connector 3 has 2 dots.

**Trigger pulse (Node 2):** Every 3 seconds, Node 2 (Email Opened) fires a shockwave. A ring expands from the node (scale 1 to 2.5, opacity 0.7 to 0, duration 700ms). Simultaneously, the connector between Node 2 and Node 3 flashes brighter (opacity pulses from 0.6 to 1 and back over 400ms). This is the "heartbeat" of the system.

**Meeting confirmation flash (Node 4):** When a particle reaches Node 4, a brief green flash expands from the node (box-shadow pulses to 0 0 40px rgba(34,197,94,0.5) then back to normal over 600ms). This fires every time the last connector's particle completes a cycle.

### HOVER INTERACTIONS (desktop only)

**Flow nodes on hover:** scale 1.05, border brightens to full accent color opacity, glow intensifies (box-shadow doubles), transition duration 200ms.

**Feature bullets on hover:** border-color transitions to violet-500/40, subtle translateY(-2px), duration 200ms.

### MOBILE ADJUSTMENTS

On mobile (below 768px):
- Replace pulse rings with a simpler opacity pulse (opacity 0.5 to 1, repeat, 2s)
- Connector particles: only 1 dot per vertical connector (not 3)
- Remove trigger shockwave (too intense on small screen)
- Add active:scale-95 on flow node cards for touch feedback
- Counter animations still run but with shorter duration (1200ms each)

### REDUCED MOTION

Wrap all animations in a useReducedMotion check from Framer Motion. If reduced motion is preferred, show all elements at full opacity with no animation. Particles and pulse rings do not run.

---

## COPY REFERENCE (exact text, no changes)

Contrast bar left: "Three tools. Three logins. Zero coordination."
Contrast bar right: "One system. Email opens trigger calls. Same day."
Eyebrow: "OMNICHANNEL SYSTEM"
Headline: "They Open the Email. You're Already Calling."
Subhead: "Same-day contact after an email open. 287% higher engagement than single-channel outreach."
Flow description: "Prospect opens your email. SDR calls them the same day. Meeting booked."
Connector badge: "SAME DAY"
Feature section title: "What The System Delivers"
Closing main: "20-30 qualified conversations per month. No headcount. No ramp time. No excuses."
Closing secondary: "The output of 5-10 SDRs. The cost of one."

---

## WHAT THIS SECTION DOES NOT SHOW

There is NO circular feedback loop. Prospects do NOT get added back into email sequences after a call. The flow is strictly linear: email goes out, prospect opens, SDR calls the same day, meeting gets booked. That is the whole machine. Do not add any return arrows or loop indicators.
