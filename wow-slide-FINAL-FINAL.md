# FINAL: The Beam Through The Nodes

The beam keeps rendering ABOVE the nodes instead of THROUGH them. This prompt gives Lovable the exact CSS structure to make it work. Do not rebuild the full section. Replace ONLY the pipeline/flow diagram area inside the existing component.

---

## THE PROBLEM

The beam (horizontal gradient line) is positioned at the top of the pipeline container. The nodes sit below it. This makes the pipeline look like icons hanging from a clothesline. The beam MUST pass through the vertical centre of each icon container.

Also: "Your Calendar" is wrapping to two lines and left-aligned. Fix alignment.

---

## REPLACE THE PIPELINE WITH THIS EXACT STRUCTURE

The key insight: use a RELATIVE positioned container with the beam as an ABSOLUTE element positioned at exactly 50% of the icon height. Nodes use a flex layout. The beam sits behind them.

```jsx
{/* Pipeline Container */}
<div className="relative max-w-5xl mx-auto mt-16 rounded-2xl bg-white/[0.02] border border-white/[0.04] px-16 py-16">

  {/* === THE BEAM === */}
  {/* Positioned at the vertical centre of the icon containers */}
  {/* Icons are 80px tall (w-20 h-20), container has py-16 (64px top padding) */}
  {/* So beam top = 64px padding + 40px (half of 80px icon) = 104px from top of container */}
  {/* Adjust this value if icon sizes change */}

  {/* Beam core line */}
  <div className="absolute left-16 right-16 h-[3px] bg-gradient-to-r from-violet-500/40 via-violet-400/50 to-emerald-400/40"
       style={{ top: '104px' }} />

  {/* Beam soft glow */}
  <div className="absolute left-16 right-16 h-[8px] blur-[4px] bg-gradient-to-r from-violet-500/20 via-violet-400/25 to-emerald-400/20"
       style={{ top: '101px' }} />

  {/* Beam wide aura */}
  <div className="absolute left-16 right-16 h-[20px] blur-[12px] bg-gradient-to-r from-violet-500/8 via-violet-400/10 to-emerald-400/8"
       style={{ top: '95px' }} />

  {/* === SAME DAY BADGE === */}
  {/* Positioned on the beam, between node 2 and node 3 */}
  {/* Horizontally: roughly 55% from left (shifted right because trigger node is wider) */}
  <div className="absolute z-30 left-[55%] -translate-x-1/2"
       style={{ top: '94px' }}>
    <span className="px-3 py-1.5 rounded-md text-[11px] font-bold tracking-[0.08em] uppercase
                     text-violet-200 bg-[#0a0e1a] border border-violet-500/25
                     shadow-[0_0_12px_rgba(139,92,246,0.1)]">
      SAME DAY
    </span>
  </div>

  {/* === NODES ROW === */}
  <div className="relative z-10 flex items-start justify-between">

    {/* Node 1: Emails Sent */}
    <div className="flex flex-col items-center w-[140px]">
      <div className="w-20 h-20 rounded-2xl bg-[#0d1117] border border-violet-500/20
                      flex items-center justify-center
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Mail icon, w-9 h-9, text-violet-400/60 */}
      </div>
      <span className="text-[13px] font-semibold text-white/90 mt-5 text-center">Emails Sent</span>
      <span className="text-[28px] font-bold text-white mt-1 leading-none">10,000</span>
      <span className="text-[9px] tracking-[0.16em] uppercase text-slate-600 mt-1.5">PER MONTH</span>
    </div>

    {/* Node 2: Email Opened (TRIGGER - larger) */}
    <div className="flex flex-col items-center w-[160px]">
      <div className="w-24 h-24 rounded-2xl bg-[#0f0d1f] border border-violet-500/30
                      flex items-center justify-center
                      shadow-[0_0_20px_rgba(139,92,246,0.15),inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Eye icon, w-10 h-10, text-violet-300/80 */}
      </div>
      <span className="text-[13px] font-semibold text-white/90 mt-5 text-center">Email Opened</span>
      <span className="text-[28px] font-bold text-violet-200/90 mt-1 leading-none">Real-Time</span>
      <span className="text-[9px] tracking-[0.16em] uppercase text-violet-500/50 mt-1.5">AI DETECTION</span>
    </div>

    {/* Node 3: SDR Calls */}
    <div className="flex flex-col items-center w-[140px]">
      <div className="w-20 h-20 rounded-2xl bg-[#0d1117] border border-violet-500/20
                      flex items-center justify-center
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Phone icon, w-9 h-9, text-violet-400/60 */}
      </div>
      <span className="text-[13px] font-semibold text-white/90 mt-5 text-center">SDR Calls</span>
      <span className="text-[28px] font-bold text-white mt-1 leading-none">1,500+</span>
      <span className="text-[9px] tracking-[0.16em] uppercase text-slate-600 mt-1.5">DIALS PER DAY</span>
    </div>

    {/* Node 4: Meeting Booked */}
    <div className="flex flex-col items-center w-[160px]">
      <div className="w-20 h-20 rounded-2xl bg-[#0a110d] border border-emerald-500/20
                      flex items-center justify-center
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* CalendarCheck icon, w-9 h-9, text-emerald-400/60 */}
      </div>
      <span className="text-[13px] font-semibold text-white/90 mt-5 text-center">Meeting Booked</span>
      <span className="text-[28px] font-bold text-white mt-1 leading-none text-center">Your Calendar</span>
      <span className="text-[9px] tracking-[0.16em] uppercase text-slate-600 mt-1.5">BOOKED DIRECTLY</span>
    </div>

  </div>

  {/* === BEAM PARTICLES === */}
  {/* 3 dots traveling the full beam width, staggered */}
  {/* Each dot: absolute, same top as beam core, z-20 */}
  {/* Animate left from 0% to 100% over 4.5s linear infinite */}
  {/* Dots shift from violet to emerald at 65% of journey */}
  {/* Size: w-2.5 h-2.5 rounded-full */}
  {/* Stagger: 0s, 1.5s, 3s delays */}

</div>
```

## CRITICAL POSITIONING NOTE

The beam's `top` value MUST be calculated based on:
- Container top padding (py-16 = 64px)
- Plus half the icon container height

For STANDARD nodes (h-20 = 80px): beam top = 64 + 40 = 104px
For the TRIGGER node (h-24 = 96px): its centre is at 64 + 48 = 112px

Since the trigger node is taller, the beam should split the difference. Set beam top to 104px. The standard nodes will have the beam through their exact centre. The trigger node will have the beam slightly above centre, which actually looks fine because the trigger icon container extends below the beam, reinforcing its prominence.

If Lovable changes the padding or icon sizes, recalculate this value. The beam top = container top padding + (standard icon height / 2).

## ALSO FIX: "Your Calendar" Text Wrapping

Give the Meeting Booked node a wider column: w-[160px] (same as the trigger node). And add text-center to the stat text. This prevents "Your Calendar" from wrapping and left-aligning.

## ALSO FIX: Junction Dots

At each point where the beam enters/exits a node, place a small dot ON the beam:

```jsx
{/* Junction dots - positioned at beam height, at the left and right edges of each icon container */}
{/* 8 dots total (entry and exit for each of 4 nodes) */}
{/* Each: absolute, w-2 h-2 rounded-full bg-violet-400/30, z-20 */}
{/* Meeting Booked junction dots: bg-emerald-400/30 */}
```

These dots mark where the beam "plugs into" each station. They're tiny but they reinforce the physical connection.

## MOBILE LAYOUT

On mobile (below 768px), restructure to vertical:

```jsx
<div className="flex flex-col items-center gap-0">
  {/* Vertical beam: absolute, left-1/2, top-[first node centre] bottom-[last node centre], w-[3px] */}
  {/* Same 3-layer treatment but rotated: h-full instead of w-full */}

  {/* Each node: flex-row, icon on left, text on right */}
  {/* Horizontal connector notch from icon to vertical beam */}

  {/* SAME DAY badge rotated or positioned between nodes 2 and 3 on the vertical beam */}
</div>
```

## WHAT THIS FIXES

The beam-through-nodes problem has persisted across 3 versions because I was describing the layout instead of giving exact CSS values. This prompt gives Lovable the actual pixel positions. The beam at top: 104px, the nodes in a flex row at the same vertical position. The beam passes through their centres because the math is explicit.

The clothesline problem dies here.
