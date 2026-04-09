# Final 1% Polish: 9/10 to 10/10

This is a surgical follow-up. Do NOT rebuild. Apply these changes to the existing OmnichannelWowSection component.

---

## 1. THE RAIL LINE NEEDS TO GLOW

The pipeline backbone is structurally right but visually too quiet. It should feel like a live wire carrying current, not a grey line.

Change the rail from a flat div to a layered element:

- Keep the existing 2px line but increase opacity: bg-gradient-to-r from-violet-500/30 via-violet-400/40 to-emerald-500/30
- Add a SECOND line directly behind it (position absolute, same dimensions) with: bg-gradient-to-r from-violet-500/15 via-violet-400/20 to-emerald-500/15, filter blur(6px). This creates a soft underglow beneath the sharp line. Like neon tubing.
- The sharp line is the wire. The blurred line is the light it casts. Together they read as "powered on."

---

## 2. TRIGGER NODE NEEDS TO BREATHE VISIBLY

The breathing pulse on Email Opened is too subtle. The viewer should notice it within 2 seconds, not 5. It's the heartbeat of the system.

Increase the pulse ring:
- Border: border-violet-500/25 (was /15)
- Scale range: 1 to 1.06 (keep this)
- Opacity range: 0.35 to 0.12 to 0.35 (was 0.2 to 0.08)
- Add a SECOND, larger pulse ring behind the first: inset -8px, border-violet-500/10, same animation but 0.5s delayed and scale 1 to 1.10. This creates a double-ripple, like a stone dropped in water. Very subtle but reads as "active."

Also: the "Real-Time" stat text under the trigger node should have a very faint text-shadow: 0 0 12px rgba(139,92,246,0.3). This is the ONLY text in the section with any glow. It marks it as the live element.

---

## 3. PARTICLES NEED A COLOUR SHIFT

The 3 dots crossing the rail should visually TRANSITION from violet to green as they travel left to right. This reinforces the narrative: outreach (violet) becomes outcome (green).

Implement with a keyframe that changes background-color at 65% of the journey:

```css
@keyframes rail-particle {
  0%   { left: 0%; opacity: 0; background-color: rgba(139,92,246,0.6); box-shadow: 0 0 6px rgba(139,92,246,0.4); }
  8%   { opacity: 1; }
  60%  { background-color: rgba(139,92,246,0.6); box-shadow: 0 0 6px rgba(139,92,246,0.4); }
  75%  { background-color: rgba(52,211,153,0.6); box-shadow: 0 0 6px rgba(34,197,94,0.4); }
  92%  { opacity: 1; }
  100% { left: 100%; opacity: 0; background-color: rgba(52,211,153,0.6); box-shadow: 0 0 6px rgba(34,197,94,0.4); }
}
```

Also make the particles w-2.5 h-2.5 (slightly larger than current w-2). They need to be visible without squinting.

---

## 4. MEETING BOOKED NODE NEEDS A CONFIRMATION FLASH

When a particle reaches the Meeting Booked node, the node's border should briefly flash brighter. This is the "cash register" moment. A deal just landed.

Every time a particle's animation cycle completes (every 4s, staggered), the Meeting Booked icon container border transitions:
- From: border-emerald-500/25
- To: border-emerald-400/50
- Back to: border-emerald-500/25
- Duration: 600ms, ease-out

And the shadow briefly intensifies:
- From: shadow-[0_0_16px_rgba(34,197,94,0.12)]
- To: shadow-[0_0_24px_rgba(34,197,94,0.25)]
- Back to original
- Duration: 600ms

This is ONE subtle flash, synchronized with particle arrival. Not a constant pulse. It fires, it settles. The viewer connects cause and effect: data flows through the pipeline, meeting lands.

---

## 5. CONNECTOR DOTS BETWEEN NODES

The small dots on the rail line at each node junction (where the node connects to the rail) should be slightly larger and brighter. Currently they're hard to see.

Each junction dot:
- w-2.5 h-2.5 rounded-full bg-violet-400/40 (was likely smaller or dimmer)
- The junction dot at Meeting Booked: bg-emerald-400/40

These dots mark the "stations" on the pipeline. They need to register visually.

---

## 6. PROOF STRIP NEEDS HIERARCHY MARKERS

The 3 proof points below the pipeline are clean but they all read at the same level. Add a tiny visual marker to create a reading entry point for each:

Before each headline, add a small horizontal accent line:
```
<div class="w-6 h-[2px] bg-violet-500/30 mb-3"></div>
```

Third proof point (domain protection): change the accent line to bg-emerald-500/30. This ties it back to the green "outcome" side of the pipeline.

These 6-pixel-wide lines cost nothing visually but create 3 clear entry points for the eye.

---

## 7. CLOSING TAGLINE WEIGHT

The closing needs fractionally more presence. It's the last thing seen.

Primary line: increase from text-xl to text-2xl on desktop. Add font-medium tracking-[-0.01em].

Between the primary and secondary line, add a tiny breathing space: mt-3 (was mt-2).

The violet secondary line: increase opacity from text-violet-400/50 to text-violet-400/60. It's currently a touch too ghostly.

---

## 8. THE ENTRY ANIMATION REFINEMENT

The rail line drawing across is the "machine turning on" moment. Make it more deliberate:

- Duration: 800ms (was 600ms). Slightly slower so it reads as intentional.
- Easing: [0.22, 1, 0.36, 1] (a custom ease that starts slow and accelerates, like a machine spinning up)
- As the rail draws, the underglow (the blurred second line from fix #1) should fade in 200ms AFTER the sharp line reaches full width. The light follows the wire. Cause and effect.

Node entry should start at 60% of the rail draw (not after it completes). The nodes APPEAR as the rail reaches them, like the power is arriving at each station. This means:
- Node 1 starts appearing at 200ms (when rail is ~25% drawn)
- Node 2 at 350ms (~45%)
- Node 3 at 500ms (~65%)
- Node 4 at 650ms (~85%)

This synchronized timing makes it feel like one connected system powering up, not separate elements fading in.

---

## WHAT NOT TO TOUCH

Everything else is right. Do not change:
- The headline (size, weight, colour are perfect)
- The pipeline container (the bg-white/[0.02] border approach works)
- The number of proof points (3 is correct)
- The overall spacing
- The background (keep it minimal)
- The SAME DAY badge (position and styling are right)

---

## THE DIFFERENCE THIS MAKES

These 8 fixes add LIFE without adding NOISE. The rail glows like it's carrying current. The trigger node visibly breathes. Particles shift colour as they cross from outreach to outcome. The meeting node flashes when a result lands. Nodes power up as the rail reaches them.

The viewer watches for 5 seconds and thinks: "that's a machine running." Not "that's a diagram." Not "that's a light show." A machine. Quietly, confidently, continuously running.

That's the 10.
