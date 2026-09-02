/**
 * Project data.
 *
 * HOW TO EDIT: replace the placeholder values below (anything in [BRACKETS])
 * with your real project information, then delete entries you don't need or
 * add more by copying the object shape. Do not remove any fields — main.js
 * expects all of them to exist (use an empty string or `null` if something
 * genuinely doesn't apply).
 *
 * Fields:
 *   name        — project name.
 *   visibility  — "Public" | "Private" | "Internal". Controls the badge
 *                 color and whether a GitHub link is shown.
 *   description — one or two sentences. For Private/Internal projects,
 *                 describe the kind of system without exposing confidential
 *                 details (client names, internal URLs, proprietary logic).
 *   role        — your role on the project.
 *   tech        — array of technology names shown as chips.
 *   focus       — the architecture / engineering focus, in your own words.
 *   status      — e.g. "In Production", "In Development", "Maintained".
 *   link        — GitHub URL, only used (and only shown) when visibility
 *                 is "Public". Leave as null for Private/Internal projects.
 */
const PROJECTS = [
  {
    name: "[Add Project Name]",
    visibility: "Public",
    description: "[Add a short, honest description of what this project does and who it's for.]",
    role: "[Add your role — e.g. Backend Developer, Project Lead]",
    tech: ["Laravel", "PHP", "SQL", "AWS EC2", "Ubuntu"],
    focus: "[Describe the architecture or engineering focus — e.g. API design, database structure, deployment pipeline]",
    status: "[e.g. In Production]",
    link: "[ADD GITHUB LINK]",
  },
  {
    name: "[Add Project Name]",
    visibility: "Private",
    description: "[Add a general description that doesn't expose confidential details — the type of system and the problem it solves.]",
    role: "[Add your role]",
    tech: ["Flutter", "Dart", "Laravel", "SQL"],
    focus: "[Describe your engineering focus without revealing confidential information]",
    status: "[Add status]",
    link: null,
  },
  {
    name: "[Add Project Name]",
    visibility: "Internal",
    description: "[Add description — e.g. an internal tool or system built for a team]",
    role: "[Add your role]",
    tech: ["Laravel", "SQL", "Linux", "AWS"],
    focus: "[Describe the engineering focus of this internal system]",
    status: "[Add status]",
    link: null,
  },
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const badgeClass = {
    Public: "badge-public",
    Private: "badge-private",
    Internal: "badge-internal",
  };

  grid.innerHTML = PROJECTS.map((p) => {
    const techChips = p.tech
      .map((t) => `<span class="chip">${escapeHTML(t)}</span>`)
      .join("");

    const showLink = p.visibility === "Public" && p.link;
    const footer = showLink
      ? `<a class="project-link" href="${escapeAttr(p.link)}" target="_blank" rel="noopener noreferrer">View repository ↗</a>`
      : `<span class="project-restricted">${p.visibility === "Public" ? "Repository link coming soon" : `${escapeHTML(p.visibility)} — details withheld`}</span>`;

    return `
      <article class="project-card reveal">
        <div class="project-head">
          <h3 class="project-name">${escapeHTML(p.name)}</h3>
          <span class="badge ${badgeClass[p.visibility] || ""}">${escapeHTML(p.visibility)}</span>
        </div>
        <p class="project-desc">${escapeHTML(p.description)}</p>
        <div class="project-meta">
          <div class="project-meta-row">
            <span class="project-meta-label">Role</span>
            <span class="project-meta-value">${escapeHTML(p.role)}</span>
          </div>
          <div class="project-meta-row">
            <span class="project-meta-label">Focus</span>
            <span class="project-meta-value">${escapeHTML(p.focus)}</span>
          </div>
          <div class="project-meta-row">
            <span class="project-meta-label">Status</span>
            <span class="project-meta-value">${escapeHTML(p.status)}</span>
          </div>
        </div>
        <div class="chip-row">${techChips}</div>
        <div class="project-footer">${footer}</div>
      </article>
    `;
  }).join("");
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str ?? "");
  return div.innerHTML;
}

function escapeAttr(str) {
  return escapeHTML(str).replace(/"/g, "&quot;");
}

// Both scripts are loaded at the end of <body> with no `defer`, so the DOM
// is already fully parsed by the time this runs — render immediately rather
// than waiting for DOMContentLoaded. (main.js runs right after this file and
// sets up the scroll-reveal observer synchronously, so these cards need to
// already exist in the DOM by then.)
renderProjects();
