# Portfolio

A personal portfolio site: about you, your skills, your projects, and a contact form.
No build step, no dependencies — plain HTML, CSS, and JavaScript.

## Before you publish

Projects, skills, social links and bio are already filled in. Optional extras:

- [ ] Add a CV to `resumeUrl` to reveal the "Download CV" button
- [ ] Add screenshots for the projects that have none (HandyHub, Ubuntu Store, ClinicConnect)
- [ ] Read through the project descriptions and make them sound like you
- [ ] Check the `featured` flags — only the top ones get the badge

## Files

```
portfolio/
├── index.html   page structure
├── styles.css   all styling (colours, layout, animations)
├── data.js      <-- EDIT THIS to change your content
├── main.js      renders data.js into the page + interactivity
└── README.md
```

## How to edit your content

Open **`data.js`**. Everything on the site comes from that one file — the page
rebuilds itself from it. You never need to touch the HTML.

### 1. `profile` — who you are

```js
name: "Your Name",          // big heading in the hero
shortName: "YN",            // logo in the top-left corner
role: "Full-Stack Developer",   // the line under your name
tagline: "One sentence about what you build.",
availability: "Available for freelance work",   // small green-dot badge
email: "you@example.com",
resumeUrl: "",              // paste a PDF link, e.g. "cv.pdf" or a Google Drive link
resumeLabel: "Download CV"
```

`resumeUrl` adds a "Download CV" button to the hero. Leave it as `""` and the
button stays hidden.

### 1b. Your photo

```js
photoUrl: "images/profile.jpg",   // "" hides the photo entirely
```

Put your photo in the `images/` folder and point `photoUrl` at it. It shows in
the hero, next to your intro, in a 4:5 portrait frame. Use a roughly portrait
image (e.g. 800x1000). If the image is missing it hides itself automatically.

### 2. `about` — the About me text

An array of paragraphs. One string = one paragraph. Add or remove items freely.

```js
about: [
  "First paragraph.",
  "Second paragraph."
]
```

### 3. `facts` — the quick-facts card next to About me

```js
facts: [
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Experience", value: "3+ years" }
]
```

### 4. `skills` — grouped skill tags

Add a new group by adding another object to the array.

```js
skills: [
  { category: "Languages", items: ["JavaScript", "Python"] },
  { category: "Frameworks", items: ["React", "Next.js"] }
]
```

### 5. `projects` — your work

```js
{
  title: "Project One",
  description: "What it does, who it's for, what was interesting about it.",
  image: "images/project-one.jpg",   // "" = shows your initial on a gradient
  tech: ["React", "Node.js"],        // the little tags
  liveUrl: "https://your-demo.com",  // "" hides the "Live demo" link
  repoUrl: "https://github.com/you/project-one",  // "" hides the "Code" link
  featured: true                     // true = "Featured" badge, sorted first
}
```

**Order doesn't matter** — anything with `featured: true` floats to the top.

To use screenshots, put them in an `images/` folder next to `index.html` and
reference them as `images/your-file.jpg`.

### 5b. Case studies (scenarios)

Each project can carry one or more written scenarios that appear in a folded
"Case study" panel under the description. Add a `scenarios` array:

```js
scenarios: [
  {
    scenario: "One line setting the scene — who needs what.",
    problem: "The problem that existed before you built it.",
    approach: "What you built and the key decisions you made.",
    outcome: "What changed as a result."
  }
]
```

Every field except nothing is required — omit `problem`, `approach` or `outcome`
and that row just won't render. Delete the whole `scenarios` array to hide the
panel. Add several objects to a project to list several scenarios.

### 6. `socials` — links in the hero and Contact section

```js
{ label: "GitHub", url: "https://github.com/PamMasina", icon: "github" },
{ label: "LinkedIn", url: "https://www.linkedin.com/in/andile-masina-a099ba220/", icon: "linkedin" },
{ label: "Email", url: "mailto:masinaa55@gmail.com", icon: "mail" }
```

Available `icon` values: `github`, `linkedin`, `x`, `mail`. Anything else falls
back to a generic link icon. These appear twice — as small icons under the
hero, and as a list in the Contact section.

### 7. `contact` — the form

`formEndpoint: ""` means the form opens the visitor's email app with everything
pre-filled. Zero setup, works immediately.

To collect submissions in a database instead, create a free form at
[formspree.io](https://formspree.io), then paste the endpoint URL:

```js
formEndpoint: "https://formspree.io/f/xxxxxxxx",
```

## Changing the colours

The palette lives at the top of `styles.css` as CSS variables:

```css
--accent: #7c8cff;      /* main accent — buttons, links, highlights */
--accent-2: #4dd6b4;    /* secondary accent — gradients, status dot */
```

There are two blocks: `:root` for dark theme and `[data-theme="light"]` for
light theme. Change the hex values in both to rebrand the whole site.

## Previewing your changes

Double-click `index.html` to open it in your browser, or run a local server:

```bash
npx serve .
```

Edits show up on refresh. There's nothing to compile.

## Publishing it (free)

**Netlify Drop** — quickest:

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `portfolio` folder onto the page
3. Done — you get a live URL immediately

**GitHub Pages** — better if you want version history:

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/portfolio.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → main /
(root) → Save**. Your site goes live at
`https://YOURUSERNAME.github.io/portfolio/`.

To use a custom domain later, add a `CNAME` file containing your domain and set
it in the same Pages settings.

## Browser support

Works in all current browsers. Uses `IntersectionObserver` for scroll
animations and falls back gracefully if unavailable. Respects
`prefers-reduced-motion` for accessibility, and has a print stylesheet.
