/*
 * ============================================================================
 *  EDIT EVERYTHING HERE
 * ============================================================================
 *  This is the ONLY file you need to touch to personalize the site.
 *  - Change the hero, closing text, and contact links below.
 *  - Add or edit the people in the `people` array (constellation).
 *  - Add photos by dropping image files into /public and setting `photo`.
 *  See README.md for step-by-step instructions.
 * ============================================================================
 */

export const site = {
  // ---- Your name / signature (shown in the hero + closing) ----
  authorName: 'Selina Yang',
  years: '2021 – 2026',
  // ---- Contact links (used in the closing section) ----
  linkedInUrl: 'https://www.linkedin.com/in/selina-ruiqi-yang1999/',
  email: 'selinayang1999@outlook.com',
}

export const hero = {
  headline:
    'I came to Microsoft straight from college, still figuring out both my career and adulthood. Four years later, I’m leaving with countless lessons—and many people to thank.',
  cta: 'Explore the people who shaped this chapter',
}

/*
 *  THE PEOPLE (Constellation)
 *  ---------------------------------------------------------------------------
 *  TODO: Replace these six placeholders with real coworkers.
 *  - name:    Person's name
 *  - role:    A short label (optional) — e.g. "My first manager"
 *  - message: Your personal note to them
 *  - photo:   OPTIONAL. Drop an image in /public and reference it as
 *             '/her-photo.jpg'. Leave as null to show an elegant initial.
 *  - x / y:   Position on the constellation, in percent (0–100).
 *             Tweak these to arrange the stars however you like.
 */
export const people = [
  {
    id: 1,
    name: 'Placeholder — Person One', // TODO: replace
    role: 'My first manager',
    message:
      'You took a chance on a brand-new grad and taught me that selling a good idea matters as much as having one. Thank you for your patience.',
    photo: null,
    x: 20,
    y: 30,
  },
  {
    id: 2,
    name: 'Placeholder — Person Two', // TODO: replace
    role: 'Mentor',
    message:
      'You showed me how to ask better questions and to sit with ambiguity long enough to find clarity. I carry that with me everywhere.',
    photo: null,
    x: 42,
    y: 18,
  },
  {
    id: 3,
    name: 'Placeholder — Person Three', // TODO: replace
    role: 'Desk neighbor & friend',
    message:
      'The coffee chats got me through the hard weeks. You made this place feel like home.',
    photo: null,
    x: 68,
    y: 26,
  },
  {
    id: 4,
    name: 'Placeholder — Person Four', // TODO: replace
    role: 'Cross-functional partner',
    message:
      'We disagreed, aligned, and shipped it anyway. You taught me that tension in the system is a feature, not a bug.',
    photo: null,
    x: 33,
    y: 58,
  },
  {
    id: 5,
    name: 'Placeholder — Person Five', // TODO: replace
    role: 'Teammate',
    message:
      'Thank you for celebrating the small wins with me and reminding me to zoom out when I got lost in the details.',
    photo: null,
    x: 58,
    y: 62,
  },
  {
    id: 6,
    name: 'Placeholder — Person Six', // TODO: replace
    role: 'Skip / sponsor',
    message:
      'You believed I could do more than I thought I could, and then made room for me to try. That confidence is a gift.',
    photo: null,
    x: 80,
    y: 54,
  },
]

/*
 *  THE MEMORY GALAXY (searchable — shows everyone)
 *  ---------------------------------------------------------------------------
 *  Every person you want to thank, with a personal note. This powers the
 *  interactive, searchable galaxy map. Add / edit / remove freely.
 *   - name:   Person's name
 *   - note:   Your personal message
 *   - extra:  OPTIONAL small caption (a shared memory, an inside joke, etc.)
 *   - photo:  OPTIONAL '/name.jpg' from the /public folder; null shows initials
 */
export const messages = [
  {
    name: 'Terry',
    note: 'I realized you can be a VP and a professional poker player at the same time. Thank you for helping me understand what good leadership looks like!',
    extra: null,
    photo: null,
  },
  {
    name: 'Corey',
    note: 'You helped me see strengths in myself that I had not recognized.',
    extra: null,
    photo: null,
  },
  {
    name: 'Lynn',
    note: 'Thank you for taking my ideas seriously, especially when I was early in my career.',
    extra: null,
    photo: null,
  },
  {
    name: 'Jeff E',
    note: 'I will carry many of your leadership lessons into whatever I do next.',
    extra: null,
    photo: null,
  },
  {
    name: 'Tarun',
    note: 'Thank you for making difficult days lighter and good days even better.',
    extra: null,
    photo: null,
  },
  {
    name: 'Erik',
    note: 'I hope I can offer someone else the same generosity you offered me.',
    extra: null,
    photo: null,
  },
  {
    name: 'Angel',
    note: 'My first mentor! You made time for me when you did not have to, and I will never forget that.',
    extra: null,
    photo: null,
  },
  {
    name: 'Greg',
    note: 'You bring so much clarity to complicated situations.',
    extra: null,
    photo: null,
  },
  {
    name: 'Sara',
    note: 'I have always admired the care you put into work that others might overlook.',
    extra: null,
    photo: null,
  },
  {
    name: 'Amy',
    note: 'I admired your ability to balance speed, quality, and relationships.',
    extra: null,
    photo: null,
  },
  {
    name: 'Gloria',
    note: 'I hope our friendship continues without requiring a calendar invitation.',
    extra: null,
    photo: null,
  },
  {
    name: 'Jong',
    note: 'That short conversation we had in the hallway stayed with me much longer than you probably realized.',
    extra: null,
    photo: null,
  },
  {
    name: 'Xiao',
    note: 'A brief conversation with you often gave me a new way to approach a problem.',
    extra: null,
    photo: null,
  },
  {
    name: 'Diana',
    note: 'You are one of the most dependable people I have worked with.',
    extra: null,
    photo: null,
  },
  {
    name: 'Mack',
    note: 'I became a stronger communicator because of our work together.',
    extra: null,
    photo: null,
  },
  {
    name: 'Wan',
    note: 'You bring a fresh perspective that the team genuinely benefits from.',
    extra: null,
    photo: null,
  },
  {
    name: 'Mary',
    note: 'Some of my favorite memories here came from working alongside you.',
    extra: null,
    photo: null,
  },
  {
    name: 'Rick',
    note: 'You made work feel more human, and I appreciate your ability to remain thoughtful under pressure.',
    extra: null,
    photo: null,
  },
  {
    name: 'Miles',
    note: 'I could always count on you for both an honest answer and a good laugh.',
    extra: null,
    photo: null,
  },
  {
    name: 'Morgan',
    note: 'You are one of the people who made this place feel like home.',
    extra: null,
    photo: null,
  },
  {
    name: 'Chris M',
    note: 'Your sense of humor made stressful weeks much more survivable.',
    extra: null,
    photo: null,
  },
  {
    name: 'Yingying',
    note: 'You saw potential in me before I knew how to see it myself.',
    extra: null,
    photo: null,
  },
  {
    name: 'Christine',
    note: 'Thank you for creating an environment where someone early in their career could contribute ideas and be taken seriously.',
    extra: null,
    photo: null,
  },
  {
    name: 'Zack',
    note: 'Every time I came to you with an idea, you helped me see three more possibilities.',
    extra: null,
    photo: null,
  },
  {
    name: 'Maria',
    note: 'So much of my interest in AI grew from our conversations.',
    extra: null,
    photo: null,
  },
  {
    name: 'Nick',
    note: 'You were someone I could count on to be honest, responsive, and solutions-oriented.',
    extra: null,
    photo: null,
  },
  {
    name: 'Carlos',
    note: 'You always approached our work as a shared problem rather than “my team versus your team.”',
    extra: null,
    photo: null,
  },
  {
    name: 'Eric',
    note: 'You may not know how much confidence your encouragement gave me.',
    extra: null,
    photo: null,
  },
]

/*
 *  FOUR-YEAR TIMELINE (the lessons)
 *  ---------------------------------------------------------------------------
 *  Each entry has a year, an optional short label, and the lesson text.
 */
export const timeline = [
  {
    year: '2021',
    label: 'Internship',
    lesson:
      'Miscommunication happens to anyone — meet it with humility, not defensiveness. In a negotiation, align on a common goal first, then find creative paths to it.',
  },
  {
    year: '2022',
    label: 'Finding my footing',
    lesson:
      'Growth compounds when it’s deliberate — capture a few key learnings every week and actually reflect on them. Onboarding is the best time to question the status quo.',
  },
  {
    year: '2023',
    label: 'Learning to lead',
    lesson:
      'Don’t assume alignment — keep stakeholders updated even when nothing has changed; silence reads as risk. Seek clarity before executing, and reach for experienced peers instead of assuming I can figure it all out alone.',
  },
  {
    year: '2024',
    label: 'Owning the room',
    lesson:
      'An agreement is only real when it’s in writing. Build walk-away power to create pressure. Find the actual decision-maker instead of convincing individuals. Always ask for more than I expect — I might just get it.',
  },
  {
    year: '2025',
    label: 'Balance & focus',
    lesson:
      'Innovation can’t come at the expense of core deliverables. Schedule risk needs earlier mitigation — escalate the moment risk surfaces, protect foundational work first, and course-correct with my manager before I drift off track.',
  },
  {
    year: '2026',
    label: 'Winning with data',
    lesson:
      'Data tells the story but anecdotes don’t survive. Map decision authority before the meeting; the loudest objector isn’t always the decision-maker. When alignment stalls, take it to the decision-maker directly and loop in my manager early to turn solo defense into a united front.',
  },
]

/*
 *  THINGS I’M TAKING WITH ME (draggable into the suitcase)
 *  ---------------------------------------------------------------------------
 *  Add, remove, or rename freely. `icon` is any emoji.
 */
export const takeaways = [
  { id: 'curiosity', label: 'Curiosity', icon: '🔭' },
  { id: 'courage', label: 'Courage', icon: '🔥' },
  { id: 'friendship', label: 'Friendship', icon: '🤝' },
  { id: 'generosity', label: 'Generosity', icon: '🎁' },
  { id: 'good-questions', label: 'Good questions', icon: '💬' },
  { id: 'resilience', label: 'Resilience', icon: '🌿' },
  { id: 'partnership', label: 'Partnership', icon: '🧩' },
  { id: 'foresight', label: 'Foresight', icon: '🧭' },
  { id: 'accountability', label: 'Accountability', icon: '⚖️' },
  { id: 'continuity', label: 'Continuity', icon: '♾️' },
  { id: 'begin-again', label: 'The confidence to begin again', icon: '🌅' },
]

export const closing = {
  message:
    'Microsoft gave me my first professional home. You gave me the courage, perspective, and memories I’m taking into whatever comes next. Thank you for being part of my first chapter.',
}
