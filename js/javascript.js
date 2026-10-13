const ES = {
    meta: {
    title: "Luis Enrique Pérez Señalin · Portafolio",
    description: "Portafolio de Luis Enrique Pérez Señalin, ingeniero de software con experiencia en backend, nube y ciberseguridad."
    },
    skip: "Saltar al contenido",
    opensNew: "(se abre en una pestaña nueva)",
    nav: {
    label: "Navegación principal",
    about: "Perfil", experience: "Experiencia", skills: "Habilidades",
    projects: "Proyectos", education: "Formación", events: "Eventos", contact: "Contacto"
    },
    controls: {
    lang: "Idioma", theme: "Cambiar tema claro u oscuro", themeTitle: "Cambiar tema (T)",
    help: "Abrir ayuda", helpTitle: "Ayuda (?)", menu: "Abrir o cerrar menú"
    },
    hero: {
    eyebrow: "Ingeniero de software",
    summary: "Estudiante de Ingeniería en Ciencias de la Computación en la EPN. Desarrollo backend y funcionalidades de extremo a extremo con Python, Java y AWS, con experiencia en automatización y ciberseguridad.",
    ctaExp: "Ver experiencia", ctaContact: "Contactarme",
    location: "Quito, Ecuador",
    study: "Ing. en Ciencias de la Computación · EPN"
    },
    about: {
    title: "Perfil",
    intro: "Lo que hago, resumido en tres áreas.",
    cards: [
        { title: "Backend y datos", text: "APIs y servicios con FastAPI y Spring Boot, consultas, migraciones de base de datos con Alembic y Liquibase." },
        { title: "Nube y automatización", text: "Funciones AWS Lambda, S3, Secrets Manager, CronJobs y pipelines de datos hacia plataformas de engagement." },
        { title: "Ciberseguridad", text: "Pasantía en SOC: automatización de informes de filtraciones y análisis de incidentes. Participación en charlas y hackatones." }
    ]
    },
    experience: {
    title: "Experiencia",
    intro: "Mi trayectoria profesional, de la más reciente a la más antigua. Abre cada puesto para ver los detalles.",
    filterLabel: "Filtrar experiencia por área",
    filters: { all: "Todas", backend: "Backend", cloud: "Nube", security: "Seguridad", mobile: "Móvil" },
    showing: "Mostrando {{count}} de {{total}} experiencias",
    expandAll: "Expandir todo", collapseAll: "Contraer todo",
    open: "Ver detalles", close: "Ocultar detalles",
    empty: "No hay experiencias en esta área. Selecciona «Todas» para ver el listado completo.",
    items: {
        kamina: {
        role: "Ingeniero de Software", company: "Kamina",
        period: "Octubre 2025 – Septiembre 2026",
        bullets: [
            "Diseñé y mantuve cambios en el esquema de base de datos con Alembic (Python/FastAPI) y Liquibase (Java/Spring Boot), manteniendo la consistencia de los datos entre despliegues.",
            "Construí pipelines de datos automatizados hacia CleverTap: envíos basados en eventos del backend y CronJobs diarios para las actualizaciones mensuales del buró de crédito.",
            "Modifiqué y mantuve funciones AWS Lambda que extraen datos y los cargan en la base de datos de forma programada; trabajé con S3 y AWS Secrets Manager para el manejo seguro de credenciales y archivos.",
            "Desarrollé y optimicé consultas, interfaces de repositorio y DTOs en Java Spring Boot para una plataforma de crédito que atiende a comercios y usuarios finales.",
            "Integré múltiples servidores (servicio FastAPI y servicios de administración y master en Spring Boot) para habilitar el intercambio de datos entre sistemas.",
            "Construí funcionalidades de extremo a extremo (endpoints, servicios y capa de datos) tras mapear el flujo de datos de la plataforma. Ejemplo: integración del método de pago SafetyPay en Angular/Spring Boot, usando un backend previo en FastAPI.",
            "Revisé logs de servidor para depurar errores en producción e inconsistencias de datos en el servicio FastAPI."
        ]
        },
        gms: {
        role: "Pasante SOC", company: "GMS Seguridad de la Información",
        period: "Abril 2025",
        bullets: [
            "Creé un sistema de automatización para generar informes de filtraciones de seguridad con envío automático.",
            "Analicé incidentes de seguridad y notifiqué de inmediato al administrador del sistema correspondiente."
        ]
        },
        clear: {
        role: "Pasante Desarrollador de Software", company: "Clear Minds Consultores",
        period: "Junio 2023 – Septiembre 2023",
        bullets: [
            "Desarrollé aplicaciones móviles con React Native y usé servicios de backend con Firebase para una aplicación de restaurante."
        ]
        }
    }
    },
    skills: {
    title: "Habilidades",
    intro: "Tecnologías con las que he trabajado, agrupadas por área.",
    certsTitle: "Certificaciones",
    groups: {
        backend: "Backend", frontend: "Frontend y móvil", cloud: "Nube y datos",
        security: "Seguridad y herramientas", practices: "Metodologías"
    }
    },
    projects: {
    title: "Proyectos",
    intro: "Selección de proyectos personales y académicos. El código está en mi repositorio de GitHub.",
    repoCta: "Ver repositorio en GitHub",
    items: {
        mern: { name: "Página web MERN", desc: "Aplicación web full-stack con MongoDB, Express, React y Node.js." },
        life: { name: "Juego de la vida", desc: "Implementación en Python con interfaz gráfica." },
        mobile: { name: "Aplicación móvil", desc: "Aplicación móvil desarrollada con React Native." }
    }
    },
    education: {
    title: "Formación",
    school: "Escuela Politécnica Nacional",
    degree: "Ingeniería en Ciencias de la Computación · Quito, Ecuador",
    status: "En curso"
    },
    events: {
    title: "Participación en eventos",
    items: [
        { name: "PWNORDIE 2025", type: "Charla de ciberseguridad", place: "Quito, Ecuador", date: "Julio 2025" },
        { name: "Cybersecurity Bank & Government Ecuador 2025", type: "Charla de ciberseguridad", place: "Quito, Ecuador", date: "Junio 2025" },
        { name: "Interact2Hack · USFQ", type: "Hackatón", place: "Quito, Ecuador", date: "Marzo 2025" }
    ]
    },
    references: {
    text: "Las referencias (GMS Seguridad de la Información y Escuela Politécnica Nacional) se entregan bajo solicitud."
    },
    contact: {
    title: "Contacto",
    intro: "¿Tienes una oportunidad o una pregunta? Escríbeme o llámame.",
    email: "Correo", phone: "Teléfono", github: "GitHub", linkedin: "LinkedIn",
    write: "Escribir", call: "Whatsapp", visit: "Visitar",
    copy: "Copiar", copied: "Copiado: {{value}}",
    copyFail: "No se pudo copiar automáticamente. Selecciona y copia: {{value}}",
    mailSubject: "Contacto desde tu portafolio"
    },
    footer: { updated: "Actualizado: octubre 2026", top: "Volver arriba ↑" },
    toast: {
    lang: "Idioma: Español", themeDark: "Tema oscuro activado", themeLight: "Tema claro activado"
    },
    help: {
    title: "Ayuda",
    close: "Cerrar",
    intro: "Este portafolio se puede recorrer con el mouse, el teclado o el lector de pantalla. Atajos disponibles:",
    kLang: "Cambiar idioma (español / inglés)",
    kTheme: "Cambiar tema claro / oscuro",
    kHelp: "Abrir esta ayuda",
    kEsc: "Cerrar ayuda o el menú móvil",
    tips: "Consejos: en «Experiencia» puedes filtrar por área y expandir todos los detalles. Tus preferencias de idioma y tema se recuerdan en este navegador."
    },
    errors: { i18nFallback: "No se pudo cargar la librería de traducción; se usa el modo de respaldo." }
};

const EN = {
    meta: {
    title: "Luis Enrique Pérez Señalin · Portfolio",
    description: "Portfolio of Luis Enrique Pérez Señalin, software engineer with experience in backend, cloud and cybersecurity."
    },
    skip: "Skip to content",
    opensNew: "(opens in a new tab)",
    nav: {
    label: "Main navigation",
    about: "About", experience: "Experience", skills: "Skills",
    projects: "Projects", education: "Education", events: "Events", contact: "Contact"
    },
    controls: {
    lang: "Language", theme: "Toggle light or dark theme", themeTitle: "Toggle theme (T)",
    help: "Open help", helpTitle: "Help (?)", menu: "Open or close menu"
    },
    hero: {
    eyebrow: "Software engineer",
    summary: "Computer Science student at EPN. I build backend services and end-to-end features with Python, Java and AWS, with hands-on experience in automation and cybersecurity.",
    ctaExp: "View experience", ctaContact: "Get in touch",
    location: "Quito, Ecuador",
    study: "B.Sc. Computer Science · EPN"
    },
    about: {
    title: "About",
    intro: "What I do, in three areas.",
    cards: [
        { title: "Backend & data", text: "APIs and services with FastAPI and Spring Boot, queries, and database migrations with Alembic and Liquibase." },
        { title: "Cloud & automation", text: "AWS Lambda functions, S3, Secrets Manager, CronJobs and data pipelines to customer-engagement platforms." },
        { title: "Cybersecurity", text: "SOC internship: automated breach reports and incident analysis. Speaker-session and hackathon participation." }
    ]
    },
    experience: {
    title: "Experience",
    intro: "My professional path, most recent first. Open each role to see the details.",
    filterLabel: "Filter experience by area",
    filters: { all: "All", backend: "Backend", cloud: "Cloud", security: "Security", mobile: "Mobile" },
    showing: "Showing {{count}} of {{total}} roles",
    expandAll: "Expand all", collapseAll: "Collapse all",
    open: "Show details", close: "Hide details",
    empty: "No roles in this area. Select “All” to see the full list.",
    items: {
        kamina: {
        role: "Software Engineer", company: "Kamina",
        period: "October 2025 – September 2026",
        bullets: [
            "Designed and maintained database schema changes with Alembic (Python/FastAPI) and Liquibase (Java/Spring Boot), keeping data consistent across deployments.",
            "Built automated data pipelines to CleverTap: event-based sends triggered by backend actions and daily CronJobs for the monthly credit-bureau data updates.",
            "Modified and maintained AWS Lambda functions that extract data and load it into the database on a schedule; worked with S3 and AWS Secrets Manager for secure handling of credentials and files.",
            "Developed and optimized queries, repository interfaces and DTOs in Java Spring Boot for a credit platform serving merchants and end users.",
            "Integrated multiple servers (a FastAPI service plus admin and master services in Spring Boot) to enable data exchange between systems.",
            "Built end-to-end features (endpoints, services and data layer) after mapping the platform's full data flow. Example: SafetyPay payment method integration in Angular/Spring Boot, using an existing FastAPI backend.",
            "Reviewed server logs to debug production errors and data inconsistencies in the FastAPI service."
        ]
        },
        gms: {
        role: "SOC Intern", company: "GMS Information Security",
        period: "April 2025",
        bullets: [
            "Created an automation system that generates security-breach reports and sends them automatically.",
            "Analyzed security incidents and immediately notified the responsible system administrator."
        ]
        },
        clear: {
        role: "Software Developer Intern", company: "Clear Minds Consultores",
        period: "June 2023 – September 2023",
        bullets: [
            "Developed mobile applications with React Native and used Firebase backend services for a restaurant app."
        ]
        }
    }
    },
    skills: {
    title: "Skills",
    intro: "Technologies I have worked with, grouped by area.",
    certsTitle: "Certifications",
    groups: {
        backend: "Backend", frontend: "Frontend & mobile", cloud: "Cloud & data",
        security: "Security & tooling", practices: "Methodologies"
    }
    },
    projects: {
    title: "Projects",
    intro: "A selection of personal and academic projects. The code lives in my GitHub repository.",
    repoCta: "View repository on GitHub",
    items: {
        mern: { name: "MERN web app", desc: "Full-stack web application with MongoDB, Express, React and Node.js." },
        life: { name: "Game of Life", desc: "Python implementation with a graphical interface." },
        mobile: { name: "Mobile app", desc: "Mobile application built with React Native." }
    }
    },
    education: {
    title: "Education",
    school: "Escuela Politécnica Nacional",
    degree: "B.Sc. in Computer Science · Quito, Ecuador",
    status: "In progress"
    },
    events: {
    title: "Events",
    items: [
        { name: "PWNORDIE 2025", type: "Cybersecurity talk", place: "Quito, Ecuador", date: "July 2025" },
        { name: "Cybersecurity Bank & Government Ecuador 2025", type: "Cybersecurity talk", place: "Quito, Ecuador", date: "June 2025" },
        { name: "Interact2Hack · USFQ", type: "Hackathon", place: "Quito, Ecuador", date: "March 2025" }
    ]
    },
    references: {
    text: "References (GMS Information Security and Escuela Politécnica Nacional) are available upon request."
    },
    contact: {
    title: "Contact",
    intro: "Have an opportunity or a question? Write to me or give me a call.",
    email: "Email", phone: "Phone", github: "GitHub", linkedin: "LinkedIn",
    write: "Write", call: "Call", visit: "Visit",
    copy: "Copy", copied: "Copied: {{value}}",
    copyFail: "Could not copy automatically. Select and copy: {{value}}",
    mailSubject: "Contact from your portfolio"
    },
    footer: { updated: "Updated: October 2026", top: "Back to top ↑" },
    toast: {
    lang: "Language: English", themeDark: "Dark theme on", themeLight: "Light theme on"
    },
    help: {
    title: "Help",
    close: "Close",
    intro: "You can browse this portfolio with a mouse, keyboard or screen reader. Available shortcuts:",
    kLang: "Switch language (Spanish / English)",
    kTheme: "Toggle light / dark theme",
    kHelp: "Open this help",
    kEsc: "Close help or the mobile menu",
    tips: "Tips: in “Experience” you can filter by area and expand all details. Your language and theme choices are remembered in this browser."
    },
    errors: { i18nFallback: "The translation library could not be loaded; fallback mode is in use." }
};

const I18N = (() => {
    const resources = { es: ES, en: EN };
    const STORAGE_KEY = "portfolio.lang";
    const hasLib = typeof window.i18next !== "undefined";
    let lang = "es";

    const lookup = (obj, key) => key.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
    const interpolate = (str, opts) =>
    typeof str === "string" && opts
        ? str.replace(/\{\{(\w+)\}\}/g, (_, k) => (opts[k] !== undefined ? opts[k] : ""))
        : str;

    function t(key, opts) {
    if (hasLib && i18next.isInitialized) return i18next.t(key, opts);
    const v = lookup(resources[lang], key) ?? lookup(resources.es, key);
    return v === undefined ? key : interpolate(v, opts);
    }

    const read = () => { try { return localStorage.getItem(STORAGE_KEY); } catch { return null; } };
    const save = (v) => { try { localStorage.setItem(STORAGE_KEY, v); } catch { /* sin almacenamiento */ } };

    function detect() {
    const saved = read();
    if (saved && resources[saved]) return saved;
    return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
    }

    function apply() {
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
        el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
        });
    });
    document.querySelectorAll("[data-lang]").forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
    }

    async function init() {
    lang = detect();
    if (hasLib) {
        await i18next.init({
        lng: lang,
        fallbackLng: "es",
        resources: { es: { translation: ES }, en: { translation: EN } },
        interpolation: { escapeValue: false }
        });
    } else {
        console.warn(ES.errors.i18nFallback);
    }
    apply();
    }

    async function setLang(next) {
    if (!resources[next] || next === lang) return;
    lang = next;
    save(next);
    if (hasLib) await i18next.changeLanguage(next);
    apply();
    document.dispatchEvent(new CustomEvent("languagechange", { detail: next }));
    }

    return { init, t, setLang, getLang: () => lang, apply };
})();

(() => {
    "use strict";
    const { t } = I18N;

    /* ---------- Configuración y datos (no traducibles) ---------- */
    const CONFIG = {
    email: "luis.perez05@epn.edu.ec",
    phone: "+593995748422",
    phoneDisplay: "+593 995748422",
    github: "https://github.com/enriqueperez21",
    repo: "https://github.com/enriqueperez21/portfolio",
    linkedin: "" // ← pega aquí tu URL de LinkedIn; si está vacía, la tarjeta no se muestra
    };

    const EXPERIENCE_META = [
    { id: "kamina", tags: ["backend", "cloud"],
        tech: ["PostgreSQL", "Python FastAPI", "AWS", "Alembic", "Java Spring Boot", "Angular", "Scrum"] },
    { id: "gms", tags: ["security"], tech: ["Python", "Docker", "Microsoft Graph"] },
    { id: "clear", tags: ["mobile"], tech: ["JavaScript", "React Native", "Firebase", "APIs"] }
    ];
    const FILTERS = ["all", "backend", "cloud", "security", "mobile"];

    const SKILLS = {
    backend: ["Python", "FastAPI", "Java", "Spring Boot", "Alembic", "Liquibase", "PostgreSQL", "SQL / NoSQL"],
    frontend: ["Angular", "React Native", "JavaScript"],
    cloud: ["AWS Lambda", "S3", "Secrets Manager", "CleverTap", "CronJobs", "Docker"],
    security: ["SOC", "Microsoft Graph", "Git / GitHub"],
    practices: ["Scrum"]
    };
    const CERTS = ["Azure Fundamentals AZ-900", "HarvardX CS109xa · Machine Learning and AI with Python", "Git / GitHub · Coursera (Atlassian University)"];
    const PROJECT_IDS = ["mern", "life", "mobile"];

    /* ---------- Utilidades ---------- */
    const $ = (sel, root = document) => root.querySelector(sel);
    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    const prefs = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignorar */ } }
    };

    /* [H1] Toast de estado */
    let toastTimer;
    function toast(msg, ms = 2400) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), ms);
    }

    /* ---------- Render: perfil ---------- */
    function renderAbout() {
    const cards = t("about.cards", { returnObjects: true });
    $("#aboutCards").innerHTML = cards
        .map((c) => `<article class="card"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></article>`)
        .join("");
    }

    /* ---------- Render: experiencia con filtros [H6][H7] ---------- */
    let currentFilter = "all";
    let allOpen = false;

    function renderFilters() {
    $("#filters").innerHTML = FILTERS.map((f) =>
        `<button type="button" class="filter-btn" data-filter="${f}" aria-pressed="${f === currentFilter}">${esc(t("experience.filters." + f))}</button>`
    ).join("");
    }

    function renderExperience() {
    const list = EXPERIENCE_META.filter((j) => currentFilter === "all" || j.tags.includes(currentFilter));
    const timeline = $("#timeline");

    if (!list.length) {
        timeline.innerHTML = `<li class="empty">${esc(t("experience.empty"))}</li>`;
    } else {
        timeline.innerHTML = list.map((job, i) => {
        const item = t("experience.items." + job.id, { returnObjects: true });
        const open = allOpen || i === 0;
        return `
            <li class="job" data-id="${job.id}">
            <details ${open ? "open" : ""}>
                <summary>
                <span class="role">${esc(item.role)} · ${esc(item.company)}</span>
                <span class="meta">${esc(item.period)}</span>
                <span class="toggle">${esc(open ? t("experience.close") : t("experience.open"))}</span>
                </summary>
                <div class="body">
                <ul>${item.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
                <ul class="tech" aria-label="Tecnologías">${job.tech.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
                </div>
            </details>
            </li>`;
        }).join("");
    }
    $("#expStatus").textContent = t("experience.showing", { count: list.length, total: EXPERIENCE_META.length });
    updateToggleAllLabel();
    }

    function syncToggleLabels() {
    document.querySelectorAll(".job details").forEach((d) => {
        const label = d.querySelector(".toggle");
        if (label) label.textContent = d.open ? t("experience.close") : t("experience.open");
    });
    updateToggleAllLabel();
    }
    function updateToggleAllLabel() {
    const ds = [...document.querySelectorAll(".job details")];
    const everyOpen = ds.length > 0 && ds.every((d) => d.open);
    $("#toggleAll").textContent = t(everyOpen ? "experience.collapseAll" : "experience.expandAll");
    }

    /* ---------- Render: habilidades, proyectos, eventos ---------- */
    function renderSkills() {
    $("#skillsGrid").innerHTML = Object.keys(SKILLS).map((g) => `
        <article class="card skill-group">
        <h3>${esc(t("skills.groups." + g))}</h3>
        <ul class="chips">${SKILLS[g].map((s) => `<li class="chip">${esc(s)}</li>`).join("")}</ul>
        </article>`).join("");
    $("#certList").innerHTML = CERTS.map((c) => `<li class="chip">${esc(c)}</li>`).join("");
    }

    function renderProjects() {
    $("#projectList").innerHTML = PROJECT_IDS.map((id) => {
        const p = t("projects.items." + id, { returnObjects: true });
        return `<li><span class="title">${esc(p.name)}</span><span class="sub">${esc(p.desc)}</span></li>`;
    }).join("");
    const link = $("#repoLink");
    link.href = CONFIG.repo;
    }

    function renderEvents() {
    const items = t("events.items", { returnObjects: true });
    $("#eventList").innerHTML = items.map((e) =>
        `<li><span class="title">${esc(e.name)}</span><span class="sub">${esc(e.type)} · ${esc(e.place)} · ${esc(e.date)}</span></li>`
    ).join("");
    }

    /* ---------- Render: contacto [H5 prevención de errores: sin formulario] ---------- */
    function renderContact() {
    const rows = [
        { label: t("contact.email"), value: CONFIG.email, href: `mailto:${CONFIG.email}?subject=${encodeURIComponent(t("contact.mailSubject"))}`, action: t("contact.write"), copy: CONFIG.email },
        { label: t("contact.phone"), value: CONFIG.phoneDisplay, href: `https://wa.me/${CONFIG.phone}`, action: t("contact.call"), copy: CONFIG.phoneDisplay },
        { label: t("contact.github"), value: "github.com/enriqueperez21", href: CONFIG.github, action: t("contact.visit"), external: true }
    ];
    if (CONFIG.linkedin) rows.push({ label: t("contact.linkedin"), value: "LinkedIn", href: CONFIG.linkedin, action: t("contact.visit"), external: true });

    $("#contactList").innerHTML = rows.map((r) => `
        <div class="contact-row">
        <div><span class="label">${esc(r.label)}</span><span class="value">${esc(r.value)}</span></div>
        <div class="row-actions">
            <a class="btn small primary" href="${esc(r.href)}" ${r.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
            ${esc(r.action)}${r.external ? " ↗" : ""}${r.external ? `<span style="position:absolute;left:-9999px"> ${esc(t("opensNew"))}</span>` : ""}
            </a>
            ${r.copy ? `<button type="button" class="btn small" data-copy="${esc(r.copy)}">${esc(t("contact.copy"))}</button>` : ""}
        </div>
        </div>`).join("");
    }

    function renderAll() {
    renderAbout(); renderFilters(); renderExperience(); renderSkills();
    renderProjects(); renderEvents(); renderContact();
    }

    /* ---------- Eventos de interfaz ---------- */
    // Filtros
    $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    renderFilters();
    renderExperience();
    });
    // Expandir / contraer todo
    $("#toggleAll").addEventListener("click", () => {
    const ds = [...document.querySelectorAll(".job details")];
    const everyOpen = ds.every((d) => d.open);
    allOpen = !everyOpen;
    ds.forEach((d) => (d.open = allOpen));
    syncToggleLabels();
    });
    // Etiqueta "ver / ocultar" en cada puesto
    $("#timeline").addEventListener("toggle", syncToggleLabels, true);

    // Copiar con confirmación [H1] y alternativa si falla [H9]
    $("#contactList").addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const value = btn.dataset.copy;
    try {
        await navigator.clipboard.writeText(value);
        toast(t("contact.copied", { value }));
    } catch {
        toast(t("contact.copyFail", { value }), 5000);
    }
    });

    // Idioma [H3: reversible]
    document.querySelectorAll("[data-lang]").forEach((b) =>
    b.addEventListener("click", () => I18N.setLang(b.dataset.lang))
    );
    document.addEventListener("languagechange", () => {
    renderAll();
    toast(t("toast.lang"));
    });

    // Tema claro/oscuro con persistencia
    function applyTheme(theme, announce) {
    document.documentElement.setAttribute("data-theme", theme);
    prefs.set("portfolio.theme", theme);
    if (announce) toast(t(theme === "dark" ? "toast.themeDark" : "toast.themeLight"));
    }
    function currentTheme() {
    return document.documentElement.getAttribute("data-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
    const toggleTheme = () => applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    $("#themeBtn").addEventListener("click", toggleTheme);
    const savedTheme = prefs.get("portfolio.theme");
    if (savedTheme === "dark" || savedTheme === "light") applyTheme(savedTheme, false);

    // Menú móvil
    const nav = $("#nav"), menuBtn = $("#menuBtn");
    const setMenu = (open) => { nav.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", String(open)); };
    menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

    // Ayuda [H10]
    const dlg = $("#helpDialog");
    const openHelp = () => { if (!dlg.open) dlg.showModal(); };
    $("#helpBtn").addEventListener("click", openHelp);
    $("#helpClose").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); }); // clic fuera = cerrar [H3]

    // Atajos de teclado [H7]
    document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { setMenu(false); return; }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (["input", "textarea", "select"].includes(tag) || e.target.isContentEditable) return;
    const k = e.key.toLowerCase();
    if (k === "l") I18N.setLang(I18N.getLang() === "es" ? "en" : "es");
    else if (k === "t") toggleTheme();
    else if (e.key === "?") openHelp();
    });

    // [H1] Progreso de lectura + sección activa en el menú
    const bar = $("#progressBar");
    let ticking = false;
    function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
        ticking = false;
    });
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    const links = [...document.querySelectorAll("#nav a")];
    const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
    if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
        if (en.isIntersecting) {
            links.forEach((a) => a.removeAttribute("aria-current"));
            const active = links.find((a) => a.getAttribute("href") === "#" + en.target.id);
            if (active) active.setAttribute("aria-current", "true");
        }
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => io.observe(s));
    }

    /* ---------- Arranque ---------- */
    I18N.init().then(renderAll).catch((err) => {
    console.error(err);
    renderAll(); // [H9] la página sigue funcionando aunque falle la librería
    });
})();