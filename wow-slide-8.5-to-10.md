# 8.5 to 10: Final Adjustments

Do NOT rebuild. Apply these 6 specific changes to the existing component.

---

## FIX 1: BEAM MUST PASS THROUGH NODE CENTRES

The beam is currently positioned ABOVE the nodes. The nodes hang below it. This breaks the "machine" metaphor. The beam needs to pass through the VERTICAL CENTRE of each icon container.

Calculate the beam's top position so it aligns with the midpoint of the icon containers. If icon containers are w-20 h-20 (80px), and their top edge starts at, say, 0px within the pipeline area, the beam should be at top: 40px (half of 80px).

The icon containers should have a higher z-index (z-10) so they sit ON TOP of the beam, with the beam visible entering from the left side and exiting from the right side of each icon container. The beam passes BEHIND the icons, like a cable plugged into each station.

This is the single most important fix. Get this right and the whole pipeline reads as connected infrastructure.

---

## FIX 2: SAME DAY BADGE POSITIONING

The SAME DAY badge should sit precisely on the beam line, horizontally centred between the Email Opened node and the SDR Calls node. Not above the beam. ON it. Same vertical position as the beam core line.

Position it with:
- absolute positioning
- left: calculate the midpoint between node 2 and node 3 (roughly 50% of the pipeline width, shifted slightly right to account for the larger trigger node)
- top: same as the beam's top position, then offset up by half the badge height to centre it vertically on the beam
- z-20 so it sits above both the beam and any particles

The badge should visually INTERRUPT the beam. The beam enters the left side of the badge and exits the right side. Like a label welded onto a pipe.

---

## FIX 3: NODE ICON CONTAINERS NEED MORE PRESENCE

The icon containers are currently too dark against the already-dark background. They need slightly more contrast to read as solid objects sitting on the beam.

Standard nodes: change bg from bg-[#0a0d1a] to bg-[#0d1117]. This is a slightly lighter dark that creates enough contrast to feel like a physical object. Add a very subtle inner highlight: shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]. This tiny inner top-edge highlight creates the illusion of a 3D surface.

Trigger node: bg-[#0f0d1f] (slightly lighter with a violet tint). Keep the existing border-violet-500/30 and shadow.

Meeting Booked node: bg-[#0a110d] (slightly lighter with a green tint).

These are tiny shifts but they make the icons feel like OBJECTS, not holes in the page.

---

## FIX 4: STATS SIZE AND SPACING

The stats under each node need slightly more vertical breathing room and size to create clear hierarchy:

- Label (e.g., "Emails Sent"): text-[13px] font-semibold text-white/90 mt-5 (increase mt from mt-4)
- Stat (e.g., "10,000"): text-[28px] font-bold text-white mt-1 leading-none
- Stat label (e.g., "PER MONTH"): text-[9px] tracking-[0.16em] uppercase text-slate-600 mt-1.5

The stat number should be noticeably larger than any other text in the pipeline area except the headline. It's the data point. Make it count.

For the trigger node "Real-Time" stat: text-[28px] font-bold text-violet-200/90 (keep the violet tint).

---

## FIX 5: CLOSING LINE FORMATTING

The closing line is wrapping to 3 lines which weakens it. Split it into two lines with intentional breaks:

Line 1: "20-30 qualified conversations per month." in text-2xl font-bold text-white tracking-tight.
Line 2: "The output of 5-10 SDRs. The cost of one." in text-lg text-white/50 font-normal mt-2.

By splitting into two elements (bold claim + quiet proof), the primary line stays on one line at most screen sizes and the secondary provides contrast. The secondary line at white/50 opacity reads as a confident footnote, not a competing statement.

---

## FIX 6: PIPELINE CONTAINER INTERNAL PADDING

The pipeline area feels vertically compressed. The nodes need more room above and below.

Increase the pipeline container's vertical padding: py-16 (was py-14 or less). Also increase px to px-16 on desktop for more horizontal breathing room around the first and last nodes.

On the container itself, soften the border slightly: border-white/[0.04] (was likely /[0.06]). The container should be FELT more than SEEN. It groups the elements without drawing attention to itself.

---

## NOTHING ELSE CHANGES

The beam gradient, the particles, the entry animation, the trigger node breathing, the proof strip, the headline, the subhead, the responsive behaviour, all stay exactly as they are. These 6 fixes are purely about PRECISION: positioning the beam correctly through node centres, sizing elements for proper hierarchy, and giving the pipeline the vertical space it deserves.

---

## THE RESULT

After these fixes, the pipeline reads as: a glowing beam of data passing through four stations, with the trigger station visibly larger and breathing, particles flowing from outreach to outcome shifting colour along the way, and SAME DAY stamped on the infrastructure where the magic happens.

Not a diagram. A machine. That's the 10.
