const PptxGenJS = require("pptxgenjs");
const pptx = new PptxGenJS();

// ============================================================
// DESIGN SYSTEM
// ============================================================

const C = {
  navyPrimary: "0F1729",
  navyMid: "152036",
  navyLight: "1E3350",
  bluePrimary: "3C83F6",
  blueLight: "7BAFFF",
  greenPrimary: "21C45D",
  greenLight: "47EB83",
  redPrimary: "EF4343",
  redLight: "F87171",
  orangeWarn: "F59E0B",
  white: "FFFFFF",
  offWhite: "F5F3EE",
  lightGrey: "E8E6E1",
  textDark: "1A1A1A",
  textMid: "6B7280",
  textMuted: "94A3B8",
  textDim: "64748B",
};

const makeShadow = () => ({
  type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.08,
});

// ============================================================
// PPTX SETUP
// ============================================================

pptx.layout = "LAYOUT_16x9";
pptx.author = "ListKit";
pptx.company = "ListKit LLC";
pptx.subject = "Omnichannel Outbound System";

// ============================================================
// SLIDE 1: HERO
// ============================================================

let slide1 = pptx.addSlide();
slide1.background = { fill: C.navyPrimary };

slide1.addText("LISTKIT", {
  x: 0.6, y: 0.4, w: 2, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true, color: C.textMid,
  charSpacing: 4,
});

slide1.addText("Stop Hiring SDRs.\nStart Booking Meetings.", {
  x: 0.6, y: 1.2, w: 8.8, h: 1.8,
  fontSize: 44, fontFace: "Georgia", bold: true, color: C.blueLight,
  align: "center", valign: "middle",
});

slide1.addText("Cold Email + Cold Calling. Fully Managed. Meetings on Your Calendar.", {
  x: 1.5, y: 3.1, w: 7, h: 0.5,
  fontSize: 18, fontFace: "Calibri", color: C.textMuted,
  align: "center",
});

// Gold separator
slide1.addShape(pptx.shapes.LINE, {
  x: 3.5, y: 3.8, w: 3, h: 0,
  line: { color: C.bluePrimary, width: 0.75, transparency: 40 },
});

// Stats bar
const heroStats = [
  { val: "2,200+", label: "B2B Companies" },
  { val: "4.8/5", label: "G2 (376 Reviews)" },
  { val: "4/5", label: "Trustpilot (218 Reviews)" },
  { val: "156", label: "Active Case Studies" },
];
heroStats.forEach((s, i) => {
  const x = 0.6 + i * 2.3;
  slide1.addText(s.val, {
    x, y: 4.2, w: 2.0, h: 0.5,
    fontSize: 28, fontFace: "Georgia", bold: true, color: C.bluePrimary,
    align: "center",
  });
  slide1.addText(s.label, {
    x, y: 4.7, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: C.textMid,
    align: "center",
  });
});

// ============================================================
// SLIDE 2: THE SOLUTION (Most Important Slide)
// ============================================================

let slide2 = pptx.addSlide();
slide2.background = { fill: C.navyPrimary };

slide2.addText("THE SOLUTION", {
  x: 0.6, y: 0.3, w: 3, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true, color: C.bluePrimary,
  charSpacing: 3,
});

slide2.addText([
  { text: "One System. Two Channels. ", options: { fontSize: 38, fontFace: "Georgia", bold: true, color: C.white } },
  { text: "They Feed Each Other.", options: { fontSize: 38, fontFace: "Georgia", bold: true, color: C.blueLight } },
], {
  x: 0.6, y: 0.6, w: 8.8, h: 0.8, align: "left",
});

slide2.addText("Email opens trigger same-day SDR calls. Call requests trigger personalised email sequences. The channels reinforce each other. 287% higher engagement.", {
  x: 0.6, y: 1.45, w: 8.8, h: 0.6,
  fontSize: 14, fontFace: "Calibri", color: C.textMuted,
  align: "center",
});

slide2.addText("MARTAL 2026, LANDBASE", {
  x: 0.6, y: 2.0, w: 8.8, h: 0.25,
  fontSize: 9, fontFace: "Calibri", color: C.textDim, align: "center",
});

// Tandem Effect Card
slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 2.35, w: 8.8, h: 1.1,
  fill: { color: C.navyMid },
  rectRadius: 0.1,
  line: { color: C.navyLight, width: 0.5 },
});

slide2.addText("THE TANDEM EFFECT", {
  x: 1.0, y: 2.45, w: 3, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true, color: C.bluePrimary,
  charSpacing: 2,
});

const tandemPoints = [
  { text: "Email opens trigger same-day SDR calls", x: 1.0, y: 2.8 },
  { text: "Call requests trigger personalised email sequences", x: 5.3, y: 2.8 },
  { text: "Warm reactivation gets 3-5x higher response", x: 1.0, y: 3.1 },
  { text: "One system. One investment. Compounding results.", x: 5.3, y: 3.1 },
];
tandemPoints.forEach(p => {
  slide2.addText("+ " + p.text, {
    x: p.x, y: p.y, w: 4.0, h: 0.25,
    fontSize: 12, fontFace: "Calibri", color: C.white,
  });
});

// Cold Email + Cold Calling Split
// Left card
slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 3.6, w: 4.0, h: 1.65,
  fill: { color: C.navyMid },
  rectRadius: 0.1,
  line: { color: C.navyLight, width: 0.5 },
});

slide2.addText("Cold Email", {
  x: 0.9, y: 3.7, w: 3.4, h: 0.3,
  fontSize: 16, fontFace: "Calibri", bold: true, color: C.white,
});

const emailBullets = [
  "10,000 prospects contacted per month",
  "Co-founder writes every email script",
  "Warmed inboxes. Main domain protected.",
  "AI personalisation. 2-3x reply rates.",
  "98%+ deliverability monitoring",
];
emailBullets.forEach((b, i) => {
  slide2.addText(b, {
    x: 0.9, y: 4.05 + i * 0.23, w: 3.4, h: 0.22,
    fontSize: 10.5, fontFace: "Calibri", color: C.textMuted,
    bullet: { code: "2713", color: C.greenPrimary },
  });
});

// Plus connector
slide2.addShape(pptx.shapes.OVAL, {
  x: 4.7, y: 4.1, w: 0.45, h: 0.45,
  fill: { color: C.bluePrimary },
});
slide2.addText("+", {
  x: 4.7, y: 4.1, w: 0.45, h: 0.45,
  fontSize: 20, fontFace: "Calibri", bold: true, color: C.white,
  align: "center", valign: "middle",
});

// Right card
slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 5.4, y: 3.6, w: 4.0, h: 1.65,
  fill: { color: C.navyMid },
  rectRadius: 0.1,
  line: { color: C.navyLight, width: 0.5 },
});

slide2.addText("Cold Calling", {
  x: 5.7, y: 3.7, w: 3.4, h: 0.3,
  fontSize: 16, fontFace: "Calibri", bold: true, color: C.white,
});

const callBullets = [
  "SDR hired, trained, managed for your account",
  "1,500+ dials/day via AI parallel dialer",
  "Private DIDs. No 'Spam Likely' on caller ID.",
  "Hot leads from email called the same day",
  "Full DNC scrubbing. TCPA compliant.",
];
callBullets.forEach((b, i) => {
  slide2.addText(b, {
    x: 5.7, y: 4.05 + i * 0.23, w: 3.4, h: 0.22,
    fontSize: 10.5, fontFace: "Calibri", color: C.textMuted,
    bullet: { code: "2713", color: C.greenPrimary },
  });
});

// Bottom line
slide2.addText("The equivalent of 5-10 SDRs. For the price of one good sales hire.", {
  x: 0.6, y: 5.35, w: 8.8, h: 0.3,
  fontSize: 15, fontFace: "Calibri", bold: true, color: C.white,
  align: "center",
});

// ============================================================
// SLIDE 3: SDR IN ACTION
// ============================================================

let slide3 = pptx.addSlide();
slide3.background = { fill: C.navyPrimary };

slide3.addText("LIVE SAMPLE", {
  x: 0.6, y: 0.3, w: 3, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true, color: C.bluePrimary,
  charSpacing: 3,
});

slide3.addText("This is who's calling on your behalf", {
  x: 0.6, y: 0.7, w: 8.8, h: 0.7,
  fontSize: 36, fontFace: "Georgia", bold: true, color: C.white,
  align: "center",
});

slide3.addText("DIALS PER DAY", {
  x: 0.6, y: 1.5, w: 8.8, h: 0.3,
  fontSize: 12, fontFace: "Calibri", bold: true, color: C.textMid,
  align: "center", charSpacing: 3,
});

slide3.addText("1,500+", {
  x: 0.6, y: 1.8, w: 8.8, h: 1.0,
  fontSize: 72, fontFace: "Georgia", bold: true, color: C.bluePrimary,
  align: "center",
});

slide3.addText("Hear what that sounds like. This is an actual cold call made by one of our SDRs.", {
  x: 1.5, y: 2.85, w: 7, h: 0.4,
  fontSize: 14, fontFace: "Calibri", color: C.textMuted,
  align: "center",
});

// Audio player placeholder
slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 2.5, y: 3.35, w: 5, h: 0.6,
  fill: { color: C.navyMid },
  rectRadius: 0.3,
  line: { color: C.navyLight, width: 0.5 },
});
slide3.addText("[ Audio Sample Available in Live Presentation ]", {
  x: 2.5, y: 3.35, w: 5, h: 0.6,
  fontSize: 12, fontFace: "Calibri", color: C.textDim,
  align: "center", valign: "middle",
});

// Callout pills
const callouts = ["Neutral accent", "Trained on YOUR offer", "Handles objections live", "Books directly to calendar"];
callouts.forEach((c, i) => {
  const x = 0.6 + i * 2.3;
  slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x, y: 4.15, w: 2.1, h: 0.45,
    fill: { color: C.navyMid },
    rectRadius: 0.05,
    line: { color: C.navyLight, width: 0.5 },
  });
  slide3.addText(c, {
    x, y: 4.15, w: 2.1, h: 0.45,
    fontSize: 11, fontFace: "Calibri", bold: true, color: C.white,
    align: "center", valign: "middle",
  });
});

// KPI strip
const kpis = [
  { val: "6-8%", label: "live connect rate" },
  { val: "~10%", label: "connects to leads" },
  { val: "1 meeting", label: "per 500 contacts" },
  { val: "Private DIDs", label: "zero Spam Likely" },
];
kpis.forEach((k, i) => {
  const x = 0.6 + i * 2.3;
  slide3.addText(k.val, {
    x, y: 4.8, w: 2.1, h: 0.35,
    fontSize: 18, fontFace: "Georgia", bold: true, color: C.greenPrimary,
    align: "center",
  });
  slide3.addText(k.label, {
    x, y: 5.1, w: 2.1, h: 0.25,
    fontSize: 10, fontFace: "Calibri", color: C.textDim,
    align: "center",
  });
});

// ============================================================
// SLIDE 4: PROOF
// ============================================================

let slide4 = pptx.addSlide();
slide4.background = { fill: C.navyPrimary };

slide4.addText("PROOF", {
  x: 0.6, y: 0.3, w: 3, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true, color: C.greenPrimary,
  charSpacing: 3,
});

slide4.addText("The numbers across 594 verified reviews", {
  x: 0.6, y: 0.6, w: 8.8, h: 0.6,
  fontSize: 32, fontFace: "Georgia", bold: true, color: C.white,
});

slide4.addText("Rated 4.8/5 on G2. 4/5 on Trustpilot. 2,200+ companies and counting.", {
  x: 0.6, y: 1.15, w: 8.8, h: 0.3,
  fontSize: 14, fontFace: "Calibri", color: C.textMuted,
});

// Case study cards
const cases = [
  { val: "$108K", label: "LISTKIT INTERNAL", desc: "MRR in 87 days. 685 meetings." },
  { val: "156/mo", label: "TRUCKING INSURANCE", desc: "$30 per lead." },
  { val: "612", label: "CUSTOM MERCHANDISE", desc: "Leads from one campaign." },
  { val: "$46K/mo", label: "COACHING", desc: "From cold outbound alone." },
];
cases.forEach((c, i) => {
  const x = 0.6 + i * 2.3;
  slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x, y: 1.7, w: 2.1, h: 1.6,
    fill: { color: C.navyMid },
    rectRadius: 0.1,
    line: { color: C.navyLight, width: 0.5 },
  });
  slide4.addText(c.val, {
    x: x + 0.15, y: 1.85, w: 1.8, h: 0.5,
    fontSize: 32, fontFace: "Georgia", bold: true, color: C.greenPrimary,
  });
  slide4.addText(c.label, {
    x: x + 0.15, y: 2.35, w: 1.8, h: 0.25,
    fontSize: 9, fontFace: "Calibri", bold: true, color: C.textDim,
    charSpacing: 1,
  });
  slide4.addText(c.desc, {
    x: x + 0.15, y: 2.6, w: 1.8, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: C.textMuted,
  });
});

// Quote card
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 3.55, w: 8.8, h: 1.1,
  fill: { color: C.navyMid },
  rectRadius: 0.1,
  line: { color: C.greenPrimary, width: 0.5 },
});

// Green left border accent
slide4.addShape(pptx.shapes.RECTANGLE, {
  x: 0.6, y: 3.55, w: 0.05, h: 1.1,
  fill: { color: C.greenPrimary },
});

slide4.addText('"We went from zero outbound to 19 closed deals and $39K cash collected in 90 days. $947 to acquire each customer."', {
  x: 0.9, y: 3.65, w: 8.2, h: 0.55,
  fontSize: 14, fontFace: "Calibri", italic: true, color: C.textMuted,
});

slide4.addText("Anthony, IT Services. ListKit client.", {
  x: 0.9, y: 4.2, w: 8.2, h: 0.3,
  fontSize: 12, fontFace: "Calibri", bold: true, color: C.greenPrimary,
});

slide4.addText("Here's what it actually costs.", {
  x: 0.6, y: 4.9, w: 8.8, h: 0.3,
  fontSize: 13, fontFace: "Calibri", color: C.textDim,
  align: "center",
});

// ============================================================
// SLIDE 5: INVESTMENT
// ============================================================

let slide5 = pptx.addSlide();
slide5.background = { fill: C.navyPrimary };

slide5.addText("INVESTMENT", {
  x: 0.6, y: 0.3, w: 3, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true, color: C.orangeWarn,
  charSpacing: 3,
});

slide5.addText([
  { text: "Stop Burning Cash on a Team That ", options: { color: C.white } },
  { text: "Might ", options: { color: C.redPrimary, italic: true } },
  { text: "Work", options: { color: C.white } },
], {
  x: 0.6, y: 0.6, w: 8.8, h: 0.6,
  fontSize: 32, fontFace: "Georgia", bold: true,
});

slide5.addText("$18,000/quarter. Billing begins at checkout.", {
  x: 0.6, y: 1.15, w: 8.8, h: 0.3,
  fontSize: 14, fontFace: "Calibri", color: C.textMuted,
});

// Left side: Build In-House
slide5.addText("BUILD IN-HOUSE", {
  x: 0.6, y: 1.65, w: 4.2, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true, color: C.redPrimary,
  charSpacing: 2,
});

// Receipt stack
const receipts = [
  { item: "SDR Salary", cost: "$60-80K/yr" },
  { item: "SDR Manager", cost: "$80-120K/yr" },
  { item: "Data (ZoomInfo / Apollo)", cost: "$20-50K/yr" },
  { item: "Tools + Dialer", cost: "$9-18K/yr" },
  { item: "Ramp Time + Churn", cost: "3-6 mo ramp, 35% leave" },
];

receipts.forEach((r, i) => {
  const y = 2.05 + i * 0.4;
  slide5.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y, w: 4.2, h: 0.35,
    fill: { color: i % 2 === 0 ? C.navyMid : C.navyPrimary },
  });
  slide5.addText(r.item, {
    x: 0.75, y, w: 2.5, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: C.textMuted,
    valign: "middle",
  });
  slide5.addText(r.cost, {
    x: 3.3, y, w: 1.4, h: 0.35,
    fontSize: 12, fontFace: "Calibri", bold: true, color: C.redPrimary,
    align: "right", valign: "middle",
  });
  // Dashed separator
  if (i < receipts.length - 1) {
    slide5.addShape(pptx.shapes.LINE, {
      x: 0.75, y: y + 0.35, w: 3.9, h: 0,
      line: { color: C.redPrimary, width: 0.5, dashType: "dash", transparency: 60 },
    });
  }
});

// Total
slide5.addText("ANNUAL TOTAL", {
  x: 0.6, y: 4.15, w: 2.5, h: 0.3,
  fontSize: 10, fontFace: "Calibri", bold: true, color: C.textDim,
  charSpacing: 2,
});
slide5.addText("$186-298K", {
  x: 2.8, y: 3.95, w: 2.0, h: 0.6,
  fontSize: 32, fontFace: "Georgia", bold: true, color: C.redPrimary,
  align: "right",
});

// VS Badge
slide5.addShape(pptx.shapes.OVAL, {
  x: 4.65, y: 2.8, w: 0.5, h: 0.5,
  fill: { color: C.navyLight },
  line: { color: C.textDim, width: 0.5 },
});
slide5.addText("VS", {
  x: 4.65, y: 2.8, w: 0.5, h: 0.5,
  fontSize: 10, fontFace: "Calibri", bold: true, color: C.textMid,
  align: "center", valign: "middle",
});

// Right side: ListKit
slide5.addText("FULLY MANAGED BY LISTKIT", {
  x: 5.4, y: 1.65, w: 4.0, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true, color: C.greenPrimary,
  charSpacing: 2,
});

slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 5.4, y: 2.05, w: 4.0, h: 2.5,
  fill: { color: C.navyMid },
  rectRadius: 0.1,
  line: { color: C.greenPrimary, width: 1 },
});

// Green top accent bar
slide5.addShape(pptx.shapes.RECTANGLE, {
  x: 5.4, y: 2.05, w: 4.0, h: 0.04,
  fill: { color: C.greenPrimary },
});

slide5.addText("$6,000", {
  x: 5.6, y: 2.25, w: 3.6, h: 0.7,
  fontSize: 48, fontFace: "Georgia", bold: true, color: C.white,
  align: "center",
});
slide5.addText("/mo", {
  x: 7.8, y: 2.55, w: 1, h: 0.35,
  fontSize: 18, fontFace: "Calibri", color: C.textMid,
});

slide5.addText("$72K/yr all-in", {
  x: 5.6, y: 3.0, w: 3.6, h: 0.35,
  fontSize: 20, fontFace: "Georgia", bold: true, color: C.greenPrimary,
  align: "center",
});

// Savings badge
slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 5.9, y: 3.5, w: 3.0, h: 0.4,
  fill: { color: "0D2218" },
  rectRadius: 0.05,
  line: { color: C.greenPrimary, width: 0.5, dashType: "dash" },
});
slide5.addText("Save $114-226K/yr vs. in-house", {
  x: 5.9, y: 3.5, w: 3.0, h: 0.4,
  fontSize: 12, fontFace: "Calibri", bold: true, color: C.greenPrimary,
  align: "center", valign: "middle",
});

// Risk reversal card
slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 4.7, w: 8.8, h: 0.6,
  fill: { color: C.navyMid },
  rectRadius: 0.08,
  line: { color: C.bluePrimary, width: 0.75 },
});

slide5.addText("No ROI in 90 days? No contract. You walk with every asset we built. You own every domain, contact, and data point.", {
  x: 0.9, y: 4.7, w: 8.2, h: 0.6,
  fontSize: 12, fontFace: "Calibri", bold: true, color: C.white,
  align: "center", valign: "middle",
});

// ============================================================
// SLIDE 6: ONBOARDING
// ============================================================

let slide6 = pptx.addSlide();
slide6.background = { fill: C.navyPrimary };

slide6.addText("ONBOARDING", {
  x: 0.6, y: 0.3, w: 3, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true, color: C.bluePrimary,
  charSpacing: 3,
});

slide6.addText("YOUR TOTAL TIME: 40 MINUTES", {
  x: 0.6, y: 0.7, w: 8.8, h: 0.7,
  fontSize: 36, fontFace: "Georgia", bold: true, color: C.greenPrimary,
  align: "center",
});

slide6.addText("This is all you do. Seriously.", {
  x: 0.6, y: 1.4, w: 8.8, h: 0.4,
  fontSize: 20, fontFace: "Georgia", bold: true, color: C.white,
  align: "center",
});

slide6.addText("Fill one form. Jump on one call. We handle the rest. You just close deals.", {
  x: 1.5, y: 1.8, w: 7, h: 0.35,
  fontSize: 14, fontFace: "Calibri", color: C.textMuted,
  align: "center",
});

// Timeline steps
const steps = [
  { num: "1", title: "Fill the Onboarding Form", desc: "10 minutes. Who you sell to, what makes you different, which companies you want." },
  { num: "2", title: "30-Min Kickoff Call", desc: "Meet your account manager. Lock in ICP. SDR starts 1,500+ dials/day from day 2." },
  { num: "3", title: "We Build Everything", desc: "Dedicated domains, SPF/DKIM/DMARC, warm-up. Triple-verified list. You do nothing." },
  { num: "4", title: "Campaigns Go Live", desc: "AI-personalised emails firing. Cold calling engine running. Both channels working." },
  { num: "5", title: "You Show Up to Meetings", desc: "Monthly reporting, strategy sessions, Slack channel. You just close deals." },
];

// Vertical line
slide6.addShape(pptx.shapes.LINE, {
  x: 1.2, y: 2.4, w: 0, h: 2.8,
  line: { color: C.navyLight, width: 1.5 },
});

steps.forEach((s, i) => {
  const y = 2.4 + i * 0.58;
  const isLast = i === steps.length - 1;
  const dotColor = isLast ? C.greenPrimary : C.bluePrimary;

  // Dot
  slide6.addShape(pptx.shapes.OVAL, {
    x: 1.0, y: y + 0.05, w: 0.35, h: 0.35,
    fill: { color: dotColor },
  });
  slide6.addText(isLast ? "\u2713" : s.num, {
    x: 1.0, y: y + 0.05, w: 0.35, h: 0.35,
    fontSize: 12, fontFace: "Calibri", bold: true, color: C.white,
    align: "center", valign: "middle",
  });

  // Title
  slide6.addText(s.title, {
    x: 1.6, y, w: 7.4, h: 0.25,
    fontSize: 15, fontFace: "Calibri", bold: true, color: C.white,
  });

  // Description
  slide6.addText(s.desc, {
    x: 1.6, y: y + 0.25, w: 7.4, h: 0.25,
    fontSize: 12, fontFace: "Calibri", color: C.textMuted,
  });
});

// ============================================================
// SLIDE 7: CTA
// ============================================================

let slide7 = pptx.addSlide();
slide7.background = { fill: C.navyPrimary };

slide7.addText([
  { text: "You've seen the numbers.\nYou've heard the SDR.\n", options: { color: C.white } },
  { text: "The hardest part was booking this call.", options: { color: C.blueLight } },
], {
  x: 0.6, y: 1.0, w: 8.8, h: 1.5,
  fontSize: 32, fontFace: "Georgia", bold: true,
  align: "center",
});

// Separator
slide7.addShape(pptx.shapes.LINE, {
  x: 3.5, y: 2.7, w: 3, h: 0,
  line: { color: C.bluePrimary, width: 0.75, transparency: 40 },
});

// Three stats
const ctaStats = [
  { val: "14 days", label: "to live" },
  { val: "$947", label: "average CAC" },
  { val: "$72K/yr", label: "vs $186-298K in-house" },
];
ctaStats.forEach((s, i) => {
  const x = 1.0 + i * 2.8;
  slide7.addText(s.val, {
    x, y: 3.0, w: 2.5, h: 0.6,
    fontSize: 36, fontFace: "Georgia", bold: true,
    color: i === 1 ? C.bluePrimary : C.greenPrimary,
    align: "center",
  });
  slide7.addText(s.label, {
    x, y: 3.55, w: 2.5, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: C.textDim,
    align: "center",
  });
});

// Risk line
slide7.addText("SDR quits? Replaced next day. No ROI in 90 days? Walk. No questions.", {
  x: 1, y: 4.1, w: 8, h: 0.3,
  fontSize: 13, fontFace: "Calibri", color: C.textMuted,
  align: "center",
});

// CTA Button
slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 3.5, y: 4.6, w: 3, h: 0.55,
  fill: { color: C.bluePrimary },
  rectRadius: 0.08,
});
slide7.addText("Let's Go", {
  x: 3.5, y: 4.6, w: 3, h: 0.55,
  fontSize: 16, fontFace: "Calibri", bold: true, color: C.white,
  align: "center", valign: "middle",
});

slide7.addText("Questions? Ask on the call. That's what it's for.", {
  x: 1, y: 5.3, w: 8, h: 0.25,
  fontSize: 11, fontFace: "Calibri", color: C.textDim,
  align: "center",
});

// ============================================================
// SAVE
// ============================================================

const outputPath = "/Users/henrywilliams/Desktop/ListKit-Omnichannel-Deck-V3.pptx";
pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log("Deck saved to: " + outputPath);
  })
  .catch(err => {
    console.error("Error:", err);
  });