import React from "react";
import Template from "./Template.jsx";

const SLOGAN = "Bouger · Jouer · Socialiser";

const SECTIONS = [
  { id: "accueil", label: "Accueil", blurb: "Bienvenue, nouveautés, activités à ne pas manquer et comment nous rejoindre.", items: [
    ["bienvenue", "Bienvenue au Club"], ["ca-bouge", "Ça bouge au Club !!!"], ["activites", "Activités à ne pas manquer"],
    ["articles-promo", "Articles promotionnels"], ["calendrier", "Calendrier des activités"], ["rejoindre", "Nous rejoindre"]
  ]},
  { id: "jouer", label: "Jouer au Club", blurb: "Inscriptions, open play, remplaçants, absences, terrains, échauffement et sécurité.", items: [
    ["inscription-automne", "Inscription — Automne"], ["inscription-hiver", "Inscription — Hiver"], ["open-play", "Open Play"],
    ["remplacant", "Remplaçant — Ligue régulière"], ["remboursement", "Remboursement de ligue"], ["absences", "Signaler une absence"],
    ["terrains", "Localisation des terrains"], ["echauffement", "Routine d'échauffement"], ["sante", "Santé et sécurité"],
    ["circulation", "Circulation sur la piste"]
  ]},
  { id: "membres", label: "Membres", blurb: "Adhésion, tarifs, matériel, règlements, niveaux de jeu et liste d'attente.", items: [
    ["devenir-membre", "Devenir membre"], ["tarifs", "Tarifs Club & Fédération"], ["materiel", "Matériels nécessaires"],
    ["raquette", "Choisir la bonne raquette"], ["activites-club", "Activités du Club"], ["reglements", "Règlements du Club"],
    ["niveaux", "Niveau de jeu (Côtes)"], ["liste-attente", "Liste d'attente"]
  ]},
  { id: "apprendre", label: "Apprendre", blurb: "Règlement de jeu, perfectionnement, formations privées et en groupe, évaluation.", items: [
    ["regles-jeu", "Règlement de jeu"], ["ameliorer", "Comment s'améliorer"], ["formations-privees", "Formations privées"],
    ["formations-groupe", "Formations en groupe"], ["evaluation", "Évaluation des membres"]
  ]},
  { id: "tournoi", label: "Tournoi", blurb: "Dates, règlements, arbitrage, album photos et résultats des tournois.", items: [
    ["dates-tournois", "Dates des tournois"], ["regles-tournois", "Règlements des tournois"], ["arbitrage", "Arbitrage"],
    ["album-tournoi", "Album photos"], ["resultats-tournois", "Résultats des tournois"]
  ]},
  { id: "club", label: "Le club", blurb: "Qui sommes-nous, mission, conseil d'administration, comités, dons, hommages et photos.", items: [
    ["qui-sommes", "Qui sommes-nous ?"], ["historique", "Historique"], ["mission", "Notre mission"],
    ["ca", "Conseil d'administration"], ["comites", "Nos comités"], ["dons", "Nos dons"],
    ["hommages", "Hommages"], ["suggestions", "Suggestions des membres"], ["galerie", "Photos du Club"]
  ]}
];

const DONE = ["accueil", "bienvenue", "inscription-automne", "absences", "sante", "devenir-membre", "tarifs", "reglements", "galerie", "dates-tournois", "acces", "ethique", "initiation"];

const EXTRA_TITLES = {
  accueil: "Accueil", acces: "Accès et inscription", ethique: "Code d'éthique",
  initiation: "Initiation", contact: "Communiquez avec nous", plan: "Plan du site"
};

const PHOTOS = [
  { src: "/assets/photo-parc-ste-anne.jpg", tag: "Parc Ste-Anne", caption: "Les terrains du Parc de l'Île Ste-Anne vus du ciel", cols: 2, rows: 2 },
  { src: "/assets/photo-double-hommes.jpg", tag: "Tournois", caption: "Volée au filet, Classique estivale", cols: 1, rows: 2 },
  { src: "/assets/photo-ligue-cmt.jpg", tag: "Ligues", caption: "Soirée de ligue au Centre Mario-Tremblay", cols: 1, rows: 1 },
  { src: "/assets/photo-double-femmes.jpg", tag: "Tournois", caption: "Double féminin, Classique estivale", cols: 2, rows: 1 },
  { src: "/assets/photo-formation-cmt.jpg", tag: "Formations", caption: "Atelier de stratégie en double, CMT", cols: 2, rows: 1 },
  { src: "/assets/photo-action.jpg", tag: "Tournois", caption: "Échange au filet, Classique estivale", cols: 1, rows: 1 },
  { src: "/assets/photo-joueuses.jpg", tag: "Parc Ste-Anne", caption: "Jeu libre en saison estivale", cols: 1, rows: 1 },
  { src: "/assets/photo-groupe-cmt.png", tag: "Ligues", caption: "Nos membres au Centre Mario-Tremblay", cols: 2, rows: 1 }
];
const HERO = [
  { src: "/assets/photo-parc-ste-anne.jpg", pos: "55% 45%", caption: "Parc de l'Île Ste-Anne · Alma" },
  { src: "/assets/photo-double-hommes.jpg", pos: "60% 40%", caption: "La Classique estivale" },
  { src: "/assets/photo-formation-cmt.jpg", pos: "50% 40%", caption: "Formation · Centre Mario-Tremblay" }
];
const FILTERS = ["Tout", "Ligues", "Tournois", "Formations", "Parc Ste-Anne"];

const PORTALS = [
  { id: "membres", tag: "Membres", title: "Espace membre", cta: "Accès membre",
    desc: "Vos ligues, votre cote de jeu, vos inscriptions et vos reçus. Renouvellement d'adhésion en ligne." },
  { id: "ca", tag: "Conseil d'administration", title: "Espace C.A.", cta: "Accès C.A.",
    desc: "Procès-verbaux, ordres du jour, documents financiers et boîte à suggestions des membres." },
  { id: "formateurs", tag: "Formateurs", title: "Zone des formateurs", cta: "Accès formateur",
    desc: "Plans de formation, groupes assignés, listes d'initiation et matériel pédagogique du club." },
  { id: "arbitres", tag: "Arbitres", title: "Zone des arbitres", cta: "Accès arbitre",
    desc: "Assignations de matchs, règles de tournoi, formulaires et disponibilités à confirmer." }
];

export default class App extends React.Component {
  state = { page: "accueil", query: "", portal: null, menu: null, searchOpen: false, searchFocus: false, lightbox: null, filter: "Tout", slide: 0, intro: true };

  componentDidMount() {
    this.sync = () => {
      const h = (location.hash || "").replace(/^#/, "");
      if (h) this.setState({ page: h });
    };
    this.sync();
    window.addEventListener("hashchange", this.sync);
    this.onKey = e => { if (e.key === "Escape") this.setState({ menu: null, searchOpen: false, lightbox: null }); };
    this.searchRef = React.createRef();
    this.startSlides();
    this.introTimer = setTimeout(() => this.setState({ intro: false }), 3500);
    window.addEventListener("keydown", this.onKey);
  }
  startSlides() {
    clearInterval(this.slideTimer);
    this.slideTimer = setInterval(() => { if (this.state.page === "accueil") this.setState(s => ({ slide: (s.slide + 1) % HERO.length })); }, 6000);
  }
  componentDidUpdate(_, prev) {
    if (this.state.searchOpen && !prev.searchOpen && this.searchRef && this.searchRef.current) this.searchRef.current.focus();
  }
  componentWillUnmount() { clearInterval(this.slideTimer); clearTimeout(this.introTimer); window.removeEventListener("hashchange", this.sync); window.removeEventListener("keydown", this.onKey); }

  go(slug) {
    this.setState({ page: slug, query: "", portal: null, menu: null, searchOpen: false });
    if (location.hash !== "#" + slug) location.hash = slug;
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  sectionOf(slug) {
    for (const s of SECTIONS) if (s.items.some(i => i[0] === slug)) return s.label;
    return "Accueil";
  }
  titleOf(slug) {
    if (EXTRA_TITLES[slug]) return EXTRA_TITLES[slug];
    for (const s of SECTIONS) { const f = s.items.find(i => i[0] === slug); if (f) return f[1]; }
    return "Accueil";
  }
  activeSection() {
    for (const s of SECTIONS) if (s.items.some(i => i[0] === this.state.page)) return s.id;
    return null;
  }

  render() { return Template(this.renderVals()); }
  renderVals() {
    const page = this.state.page;
    const act = this.activeSection();
    const menuSec = SECTIONS.find(s => s.id === this.state.menu) || null;
    const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const q = norm(this.state.query.trim());
    const results = q.length < 2 ? [] : SECTIONS.flatMap(s =>
      s.items.filter(i => norm(i[1]).includes(q)).map(i => ({
        title: i[1], section: s.label, open: () => this.go(i[0])
      }))
    );

    return {
      page,
      slogan: SLOGAN,
      showBanner: this.props.showBanner ?? true,
      showIntro: (this.props.showIntro ?? true) && this.state.intro,
      bannerText: this.props.bannerText ?? "Les inscriptions aux ligues d'automne 2026 pour les membres sont commencées!",
      query: this.state.query,
      onQuery: e => this.setState({ query: e.target.value }),
      results, hasResults: results.length > 0, resultCount: results.length,

      sections: SECTIONS.map(s => {
        const open = this.state.menu === s.id;
        return {
          label: s.label,
          bg: open ? "#0f2f4c" : (act === s.id ? "#e3edf5" : "transparent"),
          fg: open ? "#f2f6f9" : "#0f2f4c",
          chev: open ? "rotate(-135deg) translate(-2px, -2px)" : "rotate(45deg)",
          toggle: () => this.setState({ menu: open ? null : s.id, query: "", searchOpen: false })
        };
      }),

      menuOpen: !!menuSec,
      menuLabel: menuSec ? menuSec.label : "",
      menuBlurb: menuSec ? menuSec.blurb : "",
      menuItems: menuSec ? menuSec.items.map(i => ({
        title: i[1],
        fg: page === i[0] ? "#0f2f4c" : "#2c3f50",
        weight: page === i[0] ? 700 : 500,
        mark: page === i[0] ? "#0f86c6" : "transparent",
        open: () => this.go(i[0])
      })) : [],

      hasCrumb: page !== "accueil",
      crumbSection: this.sectionOf(page),
      crumbTitle: EXTRA_TITLES[page] || this.titleOf(page),
      crumbOpen: () => { const s = SECTIONS.find(x => x.items.some(i => i[0] === page)); this.setState({ menu: s ? s.id : null }); window.scrollTo({ top: 0, behavior: "smooth" }); },
      goHomeBtn: () => this.go("accueil"),

      goHome: e => { e.preventDefault(); this.go("accueil"); },
      goAcces: () => this.go("acces"),
      heroSlides: React.createElement(React.Fragment, null, HERO.map((h, i) => React.createElement("img", {
        key: h.src, src: h.src, alt: h.caption,
        style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: h.pos, display: "block",
          opacity: i === this.state.slide ? 1 : 0, transition: "opacity 1.4s ease", willChange: "transform, opacity", backfaceVisibility: "hidden",
          animation: (i % 2 ? "kenBurnsB" : "kenBurns") + " 18s ease-in-out infinite alternate" }
      }))),
      heroCaption: HERO[this.state.slide].caption,
      heroDots: HERO.map((h, i) => ({ n: i + 1, w: i === this.state.slide ? "28px" : "8px", bg: i === this.state.slide ? "#2ba3e0" : "rgba(242,246,249,0.55)", pick: () => { this.setState({ slide: i }); this.startSlides(); } })),
      goInscriptionAutomne: () => this.go("inscription-automne"),
      goPlan: () => this.go("plan"),
      goContact: () => this.go("contact"),
      footerSections: SECTIONS.map(s => ({ label: s.label, items: s.items.slice(0, 4).map(i => ({ title: i[1], open: () => this.go(i[0]) })) })),
      goGalerie: () => this.go("galerie"),
      isGalerie: page === "galerie",
      galleryFilters: FILTERS.map(l => ({ label: l, bg: this.state.filter === l ? "#0f2f4c" : "#ffffff", fg: this.state.filter === l ? "#f2f6f9" : "#0f2f4c", border: this.state.filter === l ? "#0f2f4c" : "#d8e2ea", pick: () => this.setState({ filter: l }) })),
      galleryItems: PHOTOS.filter(p => this.state.filter === "Tout" || p.tag === this.state.filter).map(p => ({ ...p, open: () => this.setState({ lightbox: p }), img: React.createElement("img", { src: p.src, alt: p.caption, style: { width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.9s cubic-bezier(0.2,0.7,0.2,1)" } }) })),
      lightboxOpen: !!this.state.lightbox,
      lightboxImg: this.state.lightbox ? React.createElement("img", { src: this.state.lightbox.src, alt: this.state.lightbox.caption, style: { width: "100%", maxHeight: "78vh", objectFit: "contain", display: "block", borderRadius: 6, boxShadow: "0 40px 80px rgba(0,0,0,0.5)" } }) : null,
      lightboxCaption: this.state.lightbox ? this.state.lightbox.caption : "",
      lightboxTag: this.state.lightbox ? this.state.lightbox.tag : "",
      closeLightbox: () => this.setState({ lightbox: null }),
      searchOpenAttr: this.state.searchOpen ? "1" : "0",
      searchRef: this.searchRef,
      searchBorder: this.state.searchFocus ? "#0f86c6" : "#d8e2ea",
      searchShadow: this.state.searchFocus ? "0 0 0 5px rgba(15,134,198,0.16), 0 8px 24px rgba(15,47,76,0.12)" : "0 1px 2px rgba(15,47,76,0.06)",
      focusSearch: () => this.setState({ searchFocus: true }),
      closeSearch: () => { this.setState({ searchFocus: false }); if (!this.state.query.trim()) this.setState({ searchOpen: false }); },
      openSearch: () => { if (!this.state.searchOpen) this.setState({ searchOpen: true, menu: null }); },
      isAcces: page === "acces",
      portals: PORTALS.map(p => ({ ...p, open: () => this.setState({ portal: p }) })),
      portalOpen: !!this.state.portal,
      portalLabel: this.state.portal ? this.state.portal.title : "",
      closePortal: () => this.setState({ portal: null }),
      goReglements: () => this.go("reglements"),
      goReglesJeu: () => this.go("regles-jeu"),
      goFormationsPrivees: () => this.go("formations-privees"),
      goDevenirMembre: () => this.go("devenir-membre"),
      goInscriptionAutomne2: () => this.go("inscription-automne"),
      goTarifs: () => this.go("tarifs"),
      goActivites: () => this.go("activites"),
      goCaBouge: () => this.go("ca-bouge"),
      goRejoindre: () => this.go("rejoindre"),

      mobileNav: SECTIONS.map(s => ({ label: s.label, items: s.items.map(i => ({ slug: i[0], title: i[1] })) })),
      mobileNavValue: page,
      onMobileNav: e => { e.preventDefault(); this.go(e.target.value); },

      isAccueil: page === "accueil",
      isBienvenue: page === "bienvenue",
      isInscriptionAutomne: page === "inscription-automne",
      isDevenirMembre: page === "devenir-membre",
      isInitiation: page === "initiation",
      isReglements: page === "reglements",
      isAbsences: page === "absences",
      isTarifs: page === "tarifs",
      isSante: page === "sante",
      isEthique: page === "ethique",
      isDatesTournois: page === "dates-tournois",
      isPending: !DONE.includes(page),
      pendingTitle: this.titleOf(page),
      pendingSection: this.sectionOf(page)
    };
  }
}
