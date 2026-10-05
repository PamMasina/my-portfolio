const ICONS = {
  github: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57A12.02 12.02 0 0024 12.297c0-6.627-5.373-12-12-12"/>',
  linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>',
  x: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
  mail: '<path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>'
};

const STROKE_ICONS = {
  external: '<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
  code: '<path d="M9 8l-4 4 4 4"/><path d="M15 8l4 4-4 4"/>',
  link: '<path d="M10 13a5 5 0 007.07 0l2-2A5 5 0 1012.9 4.9l-1.2 1.2"/><path d="M14 11a5 5 0 00-7.07 0l-2 2A5 5 0 1012.1 19.1l1.2-1.2"/>'
};

function svg(paths, extra = "") {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" ${extra}>${paths}</svg>`;
}

function get(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));
}

function bind() {
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const value = get(PORTFOLIO, el.dataset.bind);
    if (value != null && value !== "") el.textContent = value;
  });
}

function renderSocials() {
  const list = document.querySelector('[data-render="socials"]');
  if (!list) return;
  list.innerHTML = PORTFOLIO.socials.map((s) => `
    <li>
      <a href="${esc(s.url)}" aria-label="${esc(s.label)}" title="${esc(s.label)}" target="_blank" rel="noopener noreferrer">
        ${svg(ICONS[s.icon] || ICONS.link)}
      </a>
    </li>`).join("");

  const full = document.querySelector('[data-render="socials-list"]');
  if (full) {
    full.innerHTML = PORTFOLIO.socials.map((s) => `
      <li>
        <a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">
          ${svg(ICONS[s.icon] || ICONS.link)}
          <span>${esc(s.label)}</span>
          <span class="arrow" aria-hidden="true">&rarr;</span>
        </a>
      </li>`).join("");
  }
}

function renderAbout() {
  const box = document.querySelector('[data-render="about"]');
  if (box) box.innerHTML = PORTFOLIO.about.map((para) => `<p>${esc(para)}</p>`).join("");

  const facts = document.querySelector('[data-render="facts"]');
  if (facts) {
    facts.innerHTML = PORTFOLIO.facts.map((f) => `
      <li>
        <span class="facts-label">${esc(f.label)}</span>
        <span class="facts-value">${esc(f.value)}</span>
      </li>`).join("");
  }
}

function renderSkills() {
  const grid = document.querySelector('[data-render="skills"]');
  if (!grid) return;
  grid.innerHTML = PORTFOLIO.skills.map((group) => `
    <article class="skill-card">
      <h3>${esc(group.category)}</h3>
      <ul class="tag-list">
        ${group.items.map((item) => `<li class="tag">${esc(item)}</li>`).join("")}
      </ul>
    </article>`).join("");
}

function renderProjects() {
  const grid = document.querySelector('[data-render="projects"]');
  if (!grid) return;

  const projects = [...PORTFOLIO.projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  grid.innerHTML = projects.map((p) => {
    const media = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">`
      : `<span class="project-initial" aria-hidden="true">${esc((p.title || "?").trim().charAt(0))}</span>`;

    const links = [
      p.liveUrl ? `<a class="project-link" href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer">${svg(STROKE_ICONS.external)} Live demo</a>` : "",
      p.repoUrl ? `<a class="project-link" href="${esc(p.repoUrl)}" target="_blank" rel="noopener noreferrer">${svg(STROKE_ICONS.code)} Code</a>` : ""
    ].filter(Boolean).join("");

    return `
      <article class="project-card">
        <div class="project-media">
          ${media}
          ${p.featured ? '<span class="badge-featured">Featured</span>' : ""}
        </div>
        <div class="project-body">
          <h3>${esc(p.title)}</h3>
          <p class="project-desc">${esc(p.description)}</p>
          <ul class="tag-list">
            ${p.tech.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}
          </ul>
          ${links ? `<div class="project-links">${links}</div>` : ""}
        </div>
      </article>`;
  }).join("");
}

function renderResumeLink() {
  const { resumeUrl, resumeLabel } = PORTFOLIO.profile;
  if (!resumeUrl) return;
  const cta = document.querySelector(".hero-cta");
  if (!cta) return;
  const a = document.createElement("a");
  a.className = "btn btn-ghost";
  a.href = resumeUrl;
  a.textContent = resumeLabel || "Download CV";
  a.setAttribute("download", resumeUrl.split("/").pop().split("?")[0]);
  cta.append(a);
}

function setupTheme() {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  root.dataset.theme = stored || preferred;

  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
  });
}

function setupHeader() {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menu-toggle");

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") nav.classList.remove("open");
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...nav.querySelectorAll('a[href^="#"]')];

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach((s) => spy.observe(s));
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add("in"), i * 70);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  items.forEach((el) => io.observe(el));
}

function setupCopyEmail() {
  const btn = document.getElementById("copy-email");
  const hint = document.getElementById("copy-hint");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const email = PORTFOLIO.profile.email;
    try {
      await navigator.clipboard.writeText(email);
      hint.textContent = "Email copied to clipboard";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(btn);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      hint.textContent = "Press Ctrl+C to copy";
    }
    setTimeout(() => { hint.textContent = ""; }, 2600);
  });
}

function setupForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  const rules = {
    name: (v) => (v.trim() ? "" : "Please tell me your name."),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "That email doesn't look right."),
    message: (v) => (v.trim().length >= 10 ? "" : "A bit more detail would help. 10 characters minimum.")
  };

  const validateField = (input) => {
    const msg = rules[input.name](input.value);
    const field = input.closest(".field");
    field.classList.toggle("invalid", Boolean(msg));
    const err = field.querySelector(`[data-error-for="${input.name}"]`);
    if (err) err.textContent = msg;
    return !msg;
  };

  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.closest(".field").classList.contains("invalid")) validateField(input);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputs = [...form.querySelectorAll("input, textarea")];
    if (!inputs.map(validateField).every(Boolean)) return;

    const data = Object.fromEntries(inputs.map((i) => [i.name, i.value.trim()]));
    const endpoint = PORTFOLIO.contact.formEndpoint;
    const submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;
    submit.textContent = "Sending…";
    status.className = "form-status";
    status.textContent = "";

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(res.statusText);
      } else {
        const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\nSent from your portfolio by ${data.name}\n${data.email}`);
        window.location.href = `mailto:${PORTFOLIO.profile.email}?subject=${subject}&body=${body}`;
      }
      form.reset();
      status.className = "form-status ok";
      status.textContent = endpoint ? PORTFOLIO.contact.successMessage : "Opening your email app…";
    } catch {
      status.className = "form-status bad";
      status.textContent = PORTFOLIO.contact.errorMessage;
    } finally {
      submit.disabled = false;
      submit.textContent = "Send message";
    }
  });
}

function render() {
  bind();
  renderSocials();
  renderAbout();
  renderSkills();
  renderProjects();
  renderResumeLink();
  document.getElementById("year").textContent = new Date().getFullYear();
  document.title = `${PORTFOLIO.profile.name} | ${PORTFOLIO.profile.role}`;
}

render();
setupTheme();
setupHeader();
setupReveal();
setupCopyEmail();
setupForm();
