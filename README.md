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
│   ├── icons/
│   │   └── favicon.svg   Browser tab icon
│   └── images/
│       └── profile.jpg  About-section portrait (cropped/compressed from the original upload)
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

Everything else — About, the Contact section's email/academic-email/
LinkedIn/Facebook rows, the GitHub links, and the profile photo — already
reflects real information and doesn't need editing to go live.

## Local preview

No build step is required. Either open `index.html` directly in a browser,
or serve it locally so relative paths behave exactly as they will on GitHub
Pages:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

The repository is `maruf3535/maruf3535.github.io` — that special name makes
it a GitHub **user site**, served from the domain root rather than a
project subpath. Pages is configured as: **Source → Deploy from a branch**,
**Branch → `main`**, folder **`/ (root)`**.

Live at: **https://maruf3535.github.io**

Because everything is relative paths and there's no build step, every push
to `main` updates the live site automatically — no CI pipeline needed. A
deploy usually takes a minute or two to show up after a push.

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
  testimonials or client logos. The only spot without real content yet is
  Projects, which shows an honest empty state (see above) rather than
  fake example cards.
- **Technologies still being learned** (Python, C++, OpenCV, Rust, Arduino,
  Robotics, SolidWorks) are visually distinguished from the established
  stack — dashed card border, amber "Learning / Exploring" styling — rather
  than blended in as equivalent expertise.
- **Motion is restrained.** Scroll-reveal and hover states are the only
  animation, and everything respects `prefers-reduced-motion`.
- **Accessibility**: semantic landmarks, skip-to-content link, visible focus
  states, keyboard-operable mobile menu (closes on `Escape`), and sufficient
  color contrast in both themes.
