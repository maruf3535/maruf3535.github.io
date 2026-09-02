# Maruf Hossain Rafsan — Personal Engineering Site

A static, dark-mode-first personal portfolio. Built with plain HTML5, CSS3,
and vanilla JavaScript — no build step, no framework, deployable directly to
GitHub Pages.

## File structure

```
/
├── index.html            All page content and section structure
├── css/
│   ├── style.css         Design tokens, base styles, components
│   └── responsive.css    Breakpoint overrides (tablet / desktop)
├── js/
│   ├── main.js            Theme toggle, mobile nav, scroll-reveal, active-link highlighting
│   └── projects.js        Project data + rendering for the Projects section
├── assets/
│   └── icons/
│       └── favicon.svg   Browser tab icon
└── README.md
```

## Content you should replace

1. **Projects — `js/projects.js`**
   The `PROJECTS` array starts **empty on purpose**. Until you add real
   projects, the Projects section shows an honest "write-ups are in
   progress, see GitHub" message instead of fake example cards — a live
   page full of bracketed placeholder text reads as broken, not modest.

   To add a project, copy the `EXAMPLE_PROJECT` shape documented in the
   comment at the top of the file into the `PROJECTS` array and fill in
   `name`, `description`, `role`, `tech`, `focus`, `status`, and `link`.
   For Public projects, set `link` to the GitHub URL — the "View
   repository" button only appears when `visibility` is `"Public"` and
   `link` is set. The empty state disappears automatically once the array
   has at least one entry.

2. **Contact section — `index.html`, inside `<section id="contact">`**
   Three rows are marked `contact-row-placeholder` with visible
   `[ADD YOUR EMAIL]`, `[ADD YOUR LINKEDIN URL]`, and `[ADD ADDITIONAL LINK]`
   text. For each one:
   - Replace the `href="#"` with the real destination (`mailto:you@example.com`
     for email, your LinkedIn URL, etc.)
   - Replace the placeholder text with the real value
   - Remove the `contact-row-placeholder` class and the `aria-disabled="true"`
     attribute once it's a real link

   There's an HTML comment directly above each row pointing this out.

3. **GitHub link**
   Already points to `https://github.com/maruf3535` throughout the site —
   update this if your username changes.

Nothing else needs to change to go live — everything else reflects the
information provided when this site was built (current stack, working
style, and the areas being explored).

## Local preview

No build step is required. Either open `index.html` directly in a browser,
or serve it locally so relative paths behave exactly as they will on GitHub
Pages:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

This repository is already named `personal-website` and can be published
directly:

1. Push this branch's content to your default branch (e.g. `main`), or open
   a pull request and merge it.
2. In the repository on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a
   branch**.
4. Choose the branch (e.g. `main`) and the `/ (root)` folder, then **Save**.
5. GitHub will publish the site at:
   `https://maruf3535.github.io/personal-website/`
   (it can take a minute or two after the first deploy).

Because everything is relative paths and there's no build step, every push
to the published branch updates the live site automatically — no CI
pipeline needed.

## Design notes

- **Seven sections, each saying one thing once.** About, Systems, Stack,
  Projects, Journey, Leadership, Contact. There's no separate "Focus" or
  "GitHub" section — the robotics/hardware direction lives in About and
  the Journey timeline (where it's one real step among several, not its
  own showcase), and the GitHub CTA lives inside Contact, since that's
  already where it's needed. Earlier drafts had both as standalone
  sections and it read as padding — the same three ideas restated five
  different ways.
- **Dark mode is the default and primary experience.** A light theme is
  available via the toggle in the header and persists in `localStorage`.
- **No fabricated data.** Skill levels aren't shown as percentages or
  progress bars, GitHub stats aren't faked, and there are no placeholder
  testimonials or client logos. Where something is a placeholder, it's
  visibly marked as one (dashed border + "placeholder" badge) rather than
  looking like real content.
- **Technologies still being learned** (Python, C++, OpenCV, Rust, Arduino,
  Robotics, SolidWorks) are visually distinguished from the established
  stack — dashed card border, amber "Learning / Exploring" styling — rather
  than blended in as equivalent expertise.
- **Motion is restrained.** Scroll-reveal and hover states are the only
  animation, and everything respects `prefers-reduced-motion`.
- **Accessibility**: semantic landmarks, skip-to-content link, visible focus
  states, keyboard-operable mobile menu (closes on `Escape`), and sufficient
  color contrast in both themes.
