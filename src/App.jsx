import { useState, useEffect, useRef } from "react";

/* ── FADE IN HOOK ── */
function Fade({ children, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(22px)", transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease` }}>
      {children}
    </div>
  );
}

/* ── ONE PAGER DOWNLOAD ── */
function getOnePagerHTML(isFr) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"/>
<title>${isFr ? "FRH Résumé 2026" : "FRH One-Pager 2026"}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:Georgia,serif;background:#fff;color:#1C1C14;padding:44px 52px;max-width:800px;margin:0 auto;}
@media print{body{padding:28px 36px;}@page{margin:0.5in;}.no-print{display:none!important;}}
.top{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #B06800;padding-bottom:18px;margin-bottom:24px;}
h1{font-size:24px;font-weight:700;color:#1C1C14;margin-bottom:5px;}
.sub{font-size:11px;letter-spacing:2px;color:#B06800;text-transform:uppercase;}
.loc{font-size:12px;color:#7A7A6A;margin-top:3px;font-style:italic;}
.contact{text-align:right;font-size:12px;color:#5A5A48;}
.contact strong{display:block;font-size:13px;color:#1C1C14;}
h2{font-size:17px;font-weight:700;color:#B06800;margin:20px 0 8px;}
p{font-size:13px;line-height:1.8;color:#3A3A2A;margin-bottom:6px;}
.stats{display:flex;gap:16px;margin:16px 0;}
.stat{flex:1;background:#1C2A1E;border-radius:8px;padding:14px 10px;text-align:center;}
.stat-n{font-size:32px;font-weight:700;color:#C07800;}
.stat-l{font-size:9px;letter-spacing:1.5px;color:rgba(255,252,240,0.55);text-transform:uppercase;margin-top:3px;}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0;}
.card{border-radius:5px;padding:11px 13px;border-left:3px solid #B06800;background:#FFF8EE;}
.card.b{border-left-color:#1A5A7A;background:#EFF8FF;}
.card.g{border-left-color:#155E38;background:#F0FAF4;}
.cat{font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:#B06800;margin-bottom:2px;}
.cat.b{color:#1A5A7A;}.cat.g{color:#155E38;}
.item{font-size:15px;font-weight:700;color:#1C1C14;}
.num{font-size:24px;font-weight:700;color:#B06800;float:right;line-height:1;}
.num.b{color:#1A5A7A;}.num.g{color:#155E38;}
.note{font-size:11px;color:#7A6A48;font-style:italic;margin-top:3px;clear:both;}
ul{padding-left:15px;margin-top:5px;}
li{font-size:13px;line-height:1.75;color:#3A3A2A;margin-bottom:3px;}
.trust{background:#F5EDD8;border:1px solid rgba(176,104,0,0.2);border-radius:6px;padding:13px 16px;margin-top:14px;}
.trust-h{font-size:9px;letter-spacing:2px;color:#B06800;text-transform:uppercase;margin-bottom:7px;}
.trust ul{list-style:none;padding:0;}
.trust li{padding-left:14px;position:relative;font-size:12px;}
.trust li::before{content:"✓";position:absolute;left:0;color:#B06800;}
.footer{margin-top:22px;padding-top:14px;border-top:1px solid rgba(176,104,0,0.15);display:flex;justify-content:space-between;align-items:center;}
.print-btn{background:#B06800;color:#fff;border:none;border-radius:5px;padding:9px 26px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;display:block;margin:0 auto 22px;}
</style></head><body>
<button class="print-btn no-print" onclick="window.print()">${isFr ? "Enregistrer en PDF / Imprimer" : "Save as PDF / Print"}</button>
<div class="top">
  <div>
    <div class="sub">${isFr ? "Document de Présentation" : "Ministry One-Pager"} · 2026</div>
    <h1>Femmes – Référence – Hommes</h1>
    <div class="loc">${isFr ? "Jésus-Christ Notre Référence · Kinshasa, RDC" : "Jesus Christ Our Reference · Kinshasa, DR Congo"}</div>
  </div>
  <div class="contact">
    <span>${isFr ? "Dirigée par" : "Led by"}</span>
    <strong>Grace YELE MBUILISO</strong>
    <strong>Jean-Luc Mwano MBUILISO</strong>
    <div style="margin-top:6px;color:#B06800;font-size:11px;">femmesreferencehommes@gmail.com</div>
  </div>
</div>
<div class="stats">
  <div class="stat"><div class="stat-n">68</div><div class="stat-l">${isFr ? "Enfants Servis" : "Children Served"}</div></div>
  <div class="stat"><div class="stat-n">3</div><div class="stat-l">${isFr ? "Orphelinats" : "Orphanages"}</div></div>
  <div class="stat"><div class="stat-n">15+</div><div class="stat-l">${isFr ? "Années de Service" : "Years of Service"}</div></div>
</div>
<h2>${isFr ? "Qui Sommes-Nous" : "Who We Are"}</h2>
<p>${isFr ? "Depuis plus de 15 ans, Grace et Jean-Luc ont consacré leur vie au service des orphelins et des personnes vulnérables à Kinshasa. Ce n'est pas un programme — c'est leur vocation. Portés par leur foi en Dieu, ils cherchent des partenaires qui partagent ce même appel." : "For over 15 years, Grace and Jean-Luc have devoted their lives to serving orphans and the vulnerable in Kinshasa. This is not a program — it is their calling. They are seeking partners who share that same calling."}</p>
<h2>${isFr ? "Besoins 2026" : "2026 Needs"}</h2>
<div class="grid">
  <div class="card"><span class="num">25</span><div class="cat">${isFr ? "Alimentation" : "Food"}</div><div class="item">${isFr ? "Sacs de Riz" : "Bags of Rice"}</div><div class="note">${isFr ? "Nourrit les 68 enfants" : "Feeds all 68 children"}</div></div>
  <div class="card"><span class="num">25</span><div class="cat">${isFr ? "Alimentation" : "Food"}</div><div class="item">${isFr ? "Sacs de Haricots" : "Bags of Beans"}</div><div class="note">${isFr ? "Protéines essentielles" : "Essential daily protein"}</div></div>
  <div class="card"><span class="num">10</span><div class="cat">${isFr ? "Alimentation" : "Food"}</div><div class="item">${isFr ? "Gallons d'Huile" : "Gallons of Oil"}</div><div class="note">${isFr ? "Cuisine dans les 3 sites" : "Cooking across all 3 sites"}</div></div>
  <div class="card b"><span class="num b">20</span><div class="cat b">${isFr ? "Logement" : "Shelter"}</div><div class="item">${isFr ? "Matelas" : "Mattresses"}</div><div class="note">${isFr ? "Besoin urgent — ils dorment sur le sol" : "Urgent — children sleep on bare floors"}</div></div>
  <div class="card g"><span class="num g">68</span><div class="cat g">${isFr ? "Hygiène" : "Hygiene"}</div><div class="item">${isFr ? "Kits d'Hygiène" : "Hygiene Kits"}</div><div class="note">${isFr ? "Un par enfant" : "One per child"}</div></div>
  <div class="card g"><span class="num g">68</span><div class="cat g">${isFr ? "Éducation" : "Education"}</div><div class="item">${isFr ? "Kits Scolaires" : "School Kits"}</div><div class="note">${isFr ? "Pour que chaque enfant étudie" : "So every child can attend school"}</div></div>
</div>
<h2>${isFr ? "Options de Partenariat" : "Partnership Options"}</h2>
<ul>
  <li><strong>${isFr ? "Don Unique :" : "One-Time Gift:"}</strong> ${isFr ? "Financez un besoin urgent — nourriture, matelas ou fournitures." : "Fund an immediate need — food, mattresses, or supplies."}</li>
  <li><strong>${isFr ? "Partenaire Mensuel :" : "Monthly Partner:"}</strong> ${isFr ? "Soutien stable avec rapports mensuels détaillés." : "Stable support with detailed monthly reports."}</li>
  <li><strong>${isFr ? "Sponsor de Projet :" : "Project Sponsor:"}</strong> ${isFr ? "Financez un projet défini avec documentation complète." : "Fund a defined project with full documentation."}</li>
</ul>
<div class="trust">
  <div class="trust-h">${isFr ? "Notre Engagement envers la Transparence" : "Our Accountability Commitment"}</div>
  <ul>
    <li>${isFr ? "Documentation photographique et vidéo de chaque visite" : "Photo and video documentation of every visit"}</li>
    <li>${isFr ? "Reçus pour chaque achat effectué" : "Receipts provided for every purchase"}</li>
    <li>${isFr ? "Preuves de livraison pour toutes les fournitures" : "Proof of delivery for all supplies"}</li>
    <li>${isFr ? "Rapports mensuels écrits à chaque partenaire" : "Monthly written reports to every partner"}</li>
  </ul>
</div>
<div class="footer">
  <div style="font-size:18px;font-weight:700;color:#B06800;">FRH</div>
  <div style="text-align:right;font-size:11px;color:#9A9A8A;">
    <div>${isFr ? "Pour nous contacter :" : "Contact us:"}</div>
    <div style="color:#B06800;font-weight:600;">femmesreferencehommes@gmail.com</div>
    <div>Kinshasa, DR Congo · © 2026</div>
  </div>
</div>
</body></html>`;
}

function downloadOnePager(lang) {
  const isFr = lang === "fr";
  const html = getOnePagerHTML(isFr);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = isFr ? "FRH-Resume-2026.html" : "FRH-OnePager-2026.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function emailUs(lang) {
  const isFr = lang === "fr";
  const subject = isFr
    ? "Demande de Partenariat — Femmes–Référence–Hommes"
    : "Partnership Inquiry — Femmes–Référence–Hommes";
  const body = isFr
    ? `Bonjour Grace et Jean-Luc,\n\nJe m'appelle [Votre Nom] et je représente [Nom de l'Organisation].\n\nJ'ai découvert votre ministère et je souhaite en savoir plus sur un éventuel partenariat.\n\nJe suis intéressé(e) par :\n  [ ] Un don unique\n  [ ] Un partenariat mensuel\n  [ ] Le financement d'un projet spécifique\n  [ ] En apprendre davantage d'abord\n\nMes coordonnées :\nNom : [Votre Nom]\nOrganisation : [Nom]\nEmail : [Votre Email]\nTéléphone : [Votre Numéro]\nMeilleur moment : [Jour / Heure]\n\nCordialement,\n[Votre Nom]`
    : `Hello Grace and Jean-Luc,\n\nMy name is [Your Name] and I represent [Organization Name].\n\nI came across your ministry and would love to learn more about partnering with you.\n\nI am interested in:\n  [ ] A one-time gift\n  [ ] Becoming a monthly partner\n  [ ] Sponsoring a specific need\n  [ ] Learning more before deciding\n\nMy contact information:\nName: [Your Name]\nOrganization: [Name]\nEmail: [Your Email]\nPhone: [Your Phone]\nBest time to connect: [Day / Time]\n\nWarm regards,\n[Your Name]`;
  window.location.href = `mailto:femmesreferencehommes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ── CONTENT ── */
const EN = {
  nav: ["About", "What We Do", "The Need", "Partner", "Vision", "Contact"],
  badge: "Kinshasa, DR Congo",
  heroTitle: "Serving Children.\nServing God.",
  heroTag: "Jesus Christ Our Reference",
  heroBody: "We serve 68 orphaned children across three orphanages in Kinshasa, DR Congo.",
  heroCTA: "Partner With Us",
  heroSec: "Our Story",
  aboutTag: "Who We Are",
  aboutTitle: "Three Orphanages. 68 Children. One Team.",
  aboutBody: "For over 15 years, Grace and Jean-Luc have devoted their lives to serving orphans and the vulnerable in Kinshasa. This is not a program — it is their calling. They are compelled by their faith in God to continue, to grow, and to reach more children in need. Their passion has never wavered. Now they are seeking partners who share that same calling.",
  leaders: "Led by Grace YELE MBUILISO & Jean-Luc Mwano MBUILISO",
  stats: [
    { n: "68", l: "Children Served", s: "across all three orphanages" },
    { n: "3",  l: "Orphanages",      s: "visited in Kinshasa" },
    { n: "15+",l: "Years of Service",s: "of faithful ministry" },
  ],
  missionTag: "What We Do",
  missionTitle: "Two Pillars",
  p1: { title: "Spiritual Mission", pts: ["Evangelism and discipleship", "Prayer and spiritual restoration", "Ongoing pastoral care"] },
  p2: { title: "Social Mission",    pts: ["Emergency food for orphaned children", "Mattresses and bedding", "Hygiene supplies", "School fees and educational supplies", "Medicine for hospital patients without means"] },
  needTag: "The Need",
  needTitle: "What We Witness",
  needs: [
    { title: "Insufficient Food",        body: "Children across all three orphanages go to sleep hungry each night. There is not enough food to provide consistent meals." },
    { title: "No Mattresses",            body: "Children are sleeping on bare floors without mattresses or blankets. Without funding this remains beyond our reach." },
    { title: "No Basic Supplies",        body: "Many children have no plates, utensils, or hygiene items — the most basic necessities of daily life." },
    { title: "No Access to School",      body: "A significant number of children cannot attend school because their orphanages cannot cover fees or supplies." },
  ],
  quote: "\"We serve approximately 68 children — but these children are in need of everything. We do what we can. Without financial support, it is very difficult to meet even the most basic needs.\"",
  quoteBy: "— Grace YELE MBUILISO, Co-Founder",
  partnerTag: "Partner With Us",
  partnerTitle: "2026 Ministry Goals",
  partnerSub: "We serve 68 orphaned children across three orphanages in Kinshasa. Below are the specific needs we are working to meet by December 31, 2026.",
  campaign: "Kinshasa Orphan Care Drive — End of 2026",
  goals: [
    { cat: "Food",      item: "Bags of Rice",         n: 25, unit: "bags",       c: "#B06800", bg: "#FFF8EE", note: "Provides staple nutrition for all 68 children across three sites" },
    { cat: "Food",      item: "Bags of Beans",        n: 25, unit: "bags",       c: "#B06800", bg: "#FFF8EE", note: "Essential daily source of protein for every child" },
    { cat: "Food",      item: "Gallons of Cooking Oil",n:10, unit: "gallons",    c: "#B06800", bg: "#FFF8EE", note: "Required for daily meal preparation at all three orphanages" },
    { cat: "Shelter",   item: "Mattresses",           n: 20, unit: "mattresses", c: "#1A5A7A", bg: "#EFF8FF", note: "Children are currently sleeping on bare floors — urgent" },
    { cat: "Hygiene",   item: "Hygiene Kits",         n: 68, unit: "kits",       c: "#155E38", bg: "#F0FAF4", note: "One kit per child — soap, toothbrush, and basic hygiene items" },
    { cat: "Education", item: "School Supply Kits",   n: 68, unit: "kits",       c: "#155E38", bg: "#F0FAF4", note: "Notebooks, pens, and school fee support for every child in 2026" },
  ],
  deadline: "December 31, 2026",
  trustTitle: "Our Commitment to Accountability",
  trustPts: ["Photo and video documentation of every visit", "Receipts provided for every purchase made", "Proof of delivery for all supplies distributed", "Monthly written reports sent to every partner"],
  visionTag: "Vision",
  visionTitle: "Where We Are Going",
  visions: [
    { title: "Community Gardens",    body: "Grow food on-site so that children are never dependent on external donations for basic nutrition." },
    { title: "Sustainable Poultry",  body: "Raising chickens for eggs and meat will provide consistent, affordable nutrition." },
    { title: "A Free School",        body: "Every orphaned child deserves an education — no fees, no barriers." },
    { title: "A Community Clinic",   body: "A clinic where those with means help subsidize care for children who cannot afford it." },
  ],
  ctaTag: "Next Step",
  ctaTitle: "Let's Talk",
  ctaBody: "A 15-minute conversation with your missions or outreach leader is all it takes to begin. We will share the most urgent need, the timeline, and a clear plan for how your support will be used.",
  download: "Download One-Pager",
  copy: "© 2026 Femmes–Référence–Hommes · Kinshasa, DR Congo",
};

const FR = {
  nav: ["À Propos", "Ce Que Nous Faisons", "Le Besoin", "Partenariat", "Vision", "Contact"],
  badge: "Kinshasa, RDC",
  heroTitle: "Servir les Enfants.\nServir Dieu.",
  heroTag: "Jésus-Christ Notre Référence",
  heroBody: "Nous servons 68 enfants orphelins dans trois orphelinats à Kinshasa, République Démocratique du Congo.",
  heroCTA: "Devenir Partenaire",
  heroSec: "Notre Histoire",
  aboutTag: "Qui Sommes-Nous",
  aboutTitle: "Trois Orphelinats. 68 Enfants. Une Équipe.",
  aboutBody: "Depuis plus de 15 ans, Grace et Jean-Luc ont consacré leur vie au service des orphelins et des personnes vulnérables à Kinshasa. Ce n'est pas un programme — c'est leur vocation. Portés par leur foi en Dieu, ils cherchent des partenaires qui partagent ce même appel.",
  leaders: "Dirigée par Grace YELE MBUILISO & Jean-Luc Mwano MBUILISO",
  stats: [
    { n: "68",  l: "Enfants Servis",     s: "dans les trois orphelinats" },
    { n: "3",   l: "Orphelinats",        s: "visités à Kinshasa" },
    { n: "15+", l: "Années de Service",  s: "de ministère fidèle" },
  ],
  missionTag: "Ce Que Nous Faisons",
  missionTitle: "Deux Piliers",
  p1: { title: "Mission Spirituelle", pts: ["Évangélisation et discipulat", "Prière et restauration spirituelle", "Accompagnement pastoral"] },
  p2: { title: "Mission Sociale",     pts: ["Nourriture d'urgence pour les orphelins", "Matelas et literie", "Fournitures d'hygiène", "Frais et fournitures scolaires", "Médicaments pour les patients sans ressources"] },
  needTag: "Le Besoin",
  needTitle: "Ce Que Nous Constatons",
  needs: [
    { title: "Manque de Nourriture",          body: "Dans les trois orphelinats, les enfants se couchent sans avoir suffisamment mangé. Il n'y a pas assez de nourriture pour des repas réguliers." },
    { title: "Absence de Matelas",            body: "Les enfants dorment sur le sol nu, sans matelas ni couvertures. Sans financement, cela reste hors de notre portée." },
    { title: "Pas de Fournitures Essentielles",body: "Beaucoup d'enfants n'ont ni assiettes, ni couverts, ni articles d'hygiène de base." },
    { title: "Accès à l'École Impossible",    body: "De nombreux enfants ne peuvent pas aller à l'école faute de frais ou de fournitures scolaires." },
  ],
  quote: "\"Nous aidons environ 68 enfants — mais ces enfants manquent de tout. Nous faisons ce que nous pouvons. Sans soutien financier, il est très difficile de répondre même aux besoins les plus essentiels.\"",
  quoteBy: "— Grace YELE MBUILISO, Co-Fondatrice",
  partnerTag: "Partenariat",
  partnerTitle: "Objectifs 2026",
  partnerSub: "Nous servons 68 enfants orphelins dans trois orphelinats à Kinshasa. Voici les besoins spécifiques à couvrir d'ici le 31 décembre 2026.",
  campaign: "Aide aux Orphelins de Kinshasa — Fin 2026",
  goals: [
    { cat: "Alimentation", item: "Sacs de Riz",            n: 25, unit: "sacs",     c: "#B06800", bg: "#FFF8EE", note: "Assure la nutrition des 68 enfants dans les trois orphelinats" },
    { cat: "Alimentation", item: "Sacs de Haricots",       n: 25, unit: "sacs",     c: "#B06800", bg: "#FFF8EE", note: "Source essentielle de protéines au quotidien" },
    { cat: "Alimentation", item: "Gallons d'Huile de Cuisson", n:10, unit:"gallons", c: "#B06800", bg: "#FFF8EE", note: "Nécessaire à la préparation des repas dans les trois sites" },
    { cat: "Logement",     item: "Matelas",                n: 20, unit: "matelas",  c: "#1A5A7A", bg: "#EFF8FF", note: "Les enfants dorment actuellement sur le sol — besoin urgent" },
    { cat: "Hygiène",      item: "Kits d'Hygiène",         n: 68, unit: "kits",     c: "#155E38", bg: "#F0FAF4", note: "Un kit par enfant comprenant savon, brosse à dents et essentiels" },
    { cat: "Éducation",    item: "Kits Scolaires",         n: 68, unit: "kits",     c: "#155E38", bg: "#F0FAF4", note: "Cahiers, stylos et frais scolaires pour chaque enfant en 2026" },
  ],
  deadline: "31 Décembre 2026",
  trustTitle: "Notre Engagement envers la Transparence",
  trustPts: ["Documentation photographique et vidéo de chaque visite", "Reçus fournis pour chaque achat effectué", "Preuves de livraison pour toutes les fournitures", "Rapports mensuels écrits à chaque partenaire"],
  visionTag: "Vision",
  visionTitle: "Là Où Nous Allons",
  visions: [
    { title: "Jardins Communautaires",   body: "Cultiver de la nourriture sur place pour que les enfants ne dépendent plus de dons extérieurs." },
    { title: "Élevage Durable",          body: "Élever des poules pour les œufs et la viande offrira une nutrition régulière et abordable." },
    { title: "Une École Gratuite",       body: "Chaque enfant orphelin mérite une éducation — sans frais, sans barrières." },
    { title: "Une Clinique Communautaire",body: "Une clinique où ceux qui peuvent payer contribuent aux soins des enfants qui ne peuvent pas." },
  ],
  ctaTag: "Prochaine Étape",
  ctaTitle: "Parlons-Nous",
  ctaBody: "Un entretien de 15 minutes avec votre responsable de mission suffit pour commencer. Nous partagerons le besoin le plus urgent, le calendrier et un plan clair.",
  download: "Télécharger le Résumé",
  copy: "© 2026 Femmes–Référence–Hommes · Kinshasa, RDC",
};

/* ── EMAIL MODAL ── */
function EmailModal({ lang, onClose, S }) {
  const isFr = lang === "fr";
  const [copied, setCopied] = useState(false);

  const subject = isFr
    ? "Demande de Partenariat — Femmes–Référence–Hommes"
    : "Partnership Inquiry — Femmes–Référence–Hommes";

  const body = isFr
    ? `Bonjour Grace et Jean-Luc,

Je m'appelle [Votre Nom] et je représente [Nom de l'Organisation].

J'ai découvert votre ministère et je souhaite explorer un éventuel partenariat.

Je suis intéressé(e) par :
  [ ] Un don unique
  [ ] Un partenariat mensuel
  [ ] Le financement d'un projet spécifique
  [ ] En apprendre davantage d'abord

Mes coordonnées :
Nom : [Votre Nom]
Organisation : [Nom]
Email : [Votre Email]
Téléphone : [Votre Numéro]
Meilleur moment : [Jour / Heure]

Cordialement,
[Votre Nom]`
    : `Hello Grace and Jean-Luc,

My name is [Your Name] and I represent [Organization Name].

I came across your ministry and would love to explore a potential partnership.

I am interested in:
  [ ] A one-time gift
  [ ] Becoming a monthly partner
  [ ] Sponsoring a specific need
  [ ] Learning more before deciding

My contact information:
Name: [Your Name]
Organization: [Name]
Email: [Your Email]
Phone: [Your Phone]
Best time to connect: [Day / Time]

Warm regards,
[Your Name]`;

  const copy = () => {
    navigator.clipboard.writeText(body).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(28,28,20,0.75)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#FAFAF6", borderRadius: 18, padding: "32px 30px", maxWidth: 560, width: "100%", maxHeight: "90vh", overflowY: "auto", boxShadow: "0 24px 80px rgba(0,0,0,0.3)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <p style={{ fontFamily: S.cinzel, fontSize: 9, letterSpacing: 3, color: "#B06800", textTransform: "uppercase", marginBottom: 6 }}>{isFr ? "Nous Contacter" : "Contact Us"}</p>
            <h3 style={{ fontFamily: S.cormorant, fontSize: 24, fontWeight: 700, color: "#1C1C14" }}>{isFr ? "Envoyer un Email" : "Send Us an Email"}</h3>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, color: "#C8B888", cursor: "pointer", lineHeight: 1 }}>✕</button>
        </div>

        {/* Email address */}
        <div style={{ background: "#FFF8EE", border: "1px solid rgba(176,104,0,0.25)", borderRadius: 10, padding: "12px 16px", marginBottom: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: S.cinzel, fontSize: 8, color: "#B06800", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>{isFr ? "Adresse Email" : "Email Address"}</p>
            <p style={{ fontFamily: S.lora, fontSize: 15, color: "#1C1C14", fontWeight: 600 }}>femmesreferencehommes@gmail.com</p>
          </div>
          <a href="mailto:femmesreferencehommes@gmail.com" style={{ background: "#B06800", color: "#fff", borderRadius: 7, padding: "8px 16px", fontFamily: S.cinzel, fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>
            {isFr ? "Ouvrir" : "Open"}
          </a>
        </div>

        {/* Subject */}
        <div style={{ marginBottom: 14 }}>
          <p style={{ fontFamily: S.cinzel, fontSize: 8, color: "#B06800", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>{isFr ? "Objet suggéré" : "Suggested Subject"}</p>
          <div style={{ background: "#fff", border: "1px solid rgba(176,104,0,0.18)", borderRadius: 8, padding: "10px 14px", fontFamily: S.lora, fontSize: 13, color: "#5A5A48", fontStyle: "italic" }}>{subject}</div>
        </div>

        {/* Template */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <p style={{ fontFamily: S.cinzel, fontSize: 8, color: "#B06800", letterSpacing: 2, textTransform: "uppercase" }}>{isFr ? "Modèle d'Email — Copiez et Collez" : "Email Template — Copy & Paste"}</p>
            <button onClick={copy} style={{ background: copied ? "#155E38" : "rgba(176,104,0,0.12)", color: copied ? "#fff" : "#B06800", border: "none", borderRadius: 6, padding: "5px 14px", cursor: "pointer", fontFamily: S.cinzel, fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, transition: "all 0.2s" }}>
              {copied ? (isFr ? "✓ Copié!" : "✓ Copied!") : (isFr ? "Copier" : "Copy")}
            </button>
          </div>
          <pre style={{ background: "#fff", border: "1px solid rgba(176,104,0,0.15)", borderRadius: 10, padding: "16px", fontFamily: S.lora, fontSize: 13, color: "#3A3A28", lineHeight: 1.85, whiteSpace: "pre-wrap", wordBreak: "break-word", maxHeight: 300, overflowY: "auto" }}>{body}</pre>
        </div>

        <div style={{ background: "#F0FAF4", border: "1px solid rgba(21,94,56,0.2)", borderRadius: 9, padding: "12px 16px" }}>
          <p style={{ fontFamily: S.lora, fontSize: 13, color: "#3A6A3A", lineHeight: 1.75 }}>
            {isFr
              ? "Copiez ce modèle → ouvrez votre application email → collez → remplissez vos informations → envoyez."
              : "Copy this template → open your email app → paste → fill in your details → send."}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── ONE-PAGER MODAL ── */
function OnePagerModal({ lang, onClose, t, S }) {
  const isFr = lang === "fr";

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(28,28,20,0.78)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div style={{ background: "#fff", borderRadius: 18, maxWidth: 720, width: "100%", maxHeight: "92vh", overflowY: "auto", boxShadow: "0 24px 80px rgba(0,0,0,0.35)" }}>

        {/* Modal nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid rgba(176,104,0,0.15)", position: "sticky", top: 0, background: "#fff", zIndex: 10 }}>
          <p style={{ fontFamily: S.cinzel, fontSize: 9, color: "#B06800", letterSpacing: 2, textTransform: "uppercase" }}>{isFr ? "Résumé 2026 — FRH" : "One-Pager 2026 — FRH"}</p>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => window.print()} style={{ background: "#B06800", color: "#fff", border: "none", borderRadius: 7, padding: "7px 18px", cursor: "pointer", fontFamily: S.cinzel, fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}>
              {isFr ? "Imprimer / PDF" : "Print / Save PDF"}
            </button>
            <button onClick={onClose} style={{ background: "none", border: "1px solid rgba(176,104,0,0.3)", borderRadius: 7, padding: "7px 14px", fontSize: 16, color: "#C8B888", cursor: "pointer" }}>✕</button>
          </div>
        </div>

        {/* One-pager content */}
        <div style={{ padding: "36px 40px", fontFamily: "'Georgia', serif" }}>
          {/* Header */}
          <div style={{ borderBottom: "3px solid #B06800", paddingBottom: 18, marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontFamily: S.cinzel, fontSize: 8, letterSpacing: 3, color: "#B06800", textTransform: "uppercase", marginBottom: 6 }}>{isFr ? "Document de Présentation" : "Ministry One-Pager"} · 2026</p>
              <h2 style={{ fontFamily: S.cormorant, fontSize: 26, fontWeight: 700, color: "#1C1C14", marginBottom: 4 }}>Femmes – Référence – Hommes</h2>
              <p style={{ fontSize: 12, color: "#7A7A6A", fontStyle: "italic" }}>{isFr ? "Jésus-Christ Notre Référence · Kinshasa, RDC" : "Jesus Christ Our Reference · Kinshasa, DR Congo"}</p>
            </div>
            <div style={{ textAlign: "right", fontSize: 12, color: "#5A5A48" }}>
              <p style={{ fontFamily: S.cinzel, fontSize: 7.5, color: "#B06800", letterSpacing: 2, textTransform: "uppercase", marginBottom: 5 }}>{isFr ? "Dirigée par" : "Led by"}</p>
              <p style={{ fontWeight: 700, color: "#1C1C14", fontSize: 13 }}>Grace YELE MBUILISO</p>
              <p style={{ fontWeight: 700, color: "#1C1C14", fontSize: 13 }}>Jean-Luc Mwano MBUILISO</p>
              <p style={{ color: "#B06800", marginTop: 5, fontSize: 11 }}>femmesreferencehommes@gmail.com</p>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
            {[["68", isFr?"Enfants Servis":"Children Served"], ["3", isFr?"Orphelinats":"Orphanages"], ["15+", isFr?"Années de Service":"Years of Service"]].map(([n,l],i) => (
              <div key={i} style={{ background: "#1C2A1E", borderRadius: 8, padding: "14px 12px", textAlign: "center" }}>
                <div style={{ fontFamily: S.cormorant, fontSize: 32, fontWeight: 700, color: "#C07800", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: S.cinzel, fontSize: 7, color: "rgba(255,252,240,0.55)", letterSpacing: 1.5, textTransform: "uppercase", marginTop: 5 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Who we are */}
          <h3 style={{ fontFamily: S.cormorant, fontSize: 19, fontWeight: 700, color: "#B06800", marginBottom: 8 }}>{isFr ? "Qui Sommes-Nous" : "Who We Are"}</h3>
          <p style={{ fontSize: 13, lineHeight: 1.85, color: "#3A3A2A", marginBottom: 20 }}>{t.aboutBody}</p>

          {/* Goals */}
          <h3 style={{ fontFamily: S.cormorant, fontSize: 19, fontWeight: 700, color: "#B06800", marginBottom: 12 }}>{isFr ? "Besoins 2026" : "2026 Goals"}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
            {t.goals.map((g, i) => (
              <div key={i} style={{ background: g.bg, borderLeft: `3px solid ${g.c}`, borderRadius: "0 8px 8px 0", padding: "10px 13px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <p style={{ fontFamily: S.cinzel, fontSize: 7, color: g.c, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 2 }}>{g.cat}</p>
                    <p style={{ fontFamily: S.cormorant, fontSize: 16, fontWeight: 700, color: "#1C1C14" }}>{g.item}</p>
                  </div>
                  <p style={{ fontFamily: S.cormorant, fontSize: 26, fontWeight: 700, color: g.c, lineHeight: 1 }}>{g.n}</p>
                </div>
                <p style={{ fontSize: 11, color: "#7A6A48", fontStyle: "italic", marginTop: 3 }}>{g.note}</p>
              </div>
            ))}
          </div>

          {/* Partnership options */}
          <h3 style={{ fontFamily: S.cormorant, fontSize: 19, fontWeight: 700, color: "#B06800", marginBottom: 10 }}>{isFr ? "Options de Partenariat" : "Partnership Options"}</h3>
          <ul style={{ paddingLeft: 18, marginBottom: 20 }}>
            {(isFr
              ? ["Don Unique — Financez un besoin urgent immédiat.", "Partenaire Mensuel — Soutien stable avec rapports mensuels.", "Sponsor de Projet — Financez un projet avec documentation complète."]
              : ["One-Time Gift — Fund an immediate urgent need.", "Monthly Partner — Stable support with detailed monthly reports.", "Project Sponsor — Fund a defined project with full documentation."]
            ).map((item, i) => (
              <li key={i} style={{ fontSize: 13, lineHeight: 1.8, color: "#3A3A2A", marginBottom: 4 }}>{item}</li>
            ))}
          </ul>

          {/* Trust */}
          <div style={{ background: "#F5EDD8", border: "1px solid rgba(176,104,0,0.2)", borderRadius: 8, padding: "14px 18px", marginBottom: 20 }}>
            <p style={{ fontFamily: S.cinzel, fontSize: 8, color: "#B06800", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{t.trustTitle}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {t.trustPts.map((pt, i) => (
                <li key={i} style={{ fontSize: 12, color: "#5A5A48", lineHeight: 1.8, paddingLeft: 14, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#B06800" }}>✓</span>{pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div style={{ borderTop: "1px solid rgba(176,104,0,0.15)", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: S.cormorant, fontSize: 20, fontWeight: 700, color: "#B06800" }}>FRH</p>
            <div style={{ textAlign: "right", fontSize: 11, color: "#9A9A8A" }}>
              <p style={{ color: "#B06800", fontWeight: 600 }}>femmesreferencehommes@gmail.com</p>
              <p>Kinshasa, DR Congo · {t.copy.split("·")[0].trim()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN APP ── */
export default function FRH() {
  const [lang, setLang] = useState("en");
  const [modal, setModal] = useState(null); // "email" | "onepager" | null
  const t = lang === "en" ? EN : FR;
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const S = {
    cinzel: "'Cinzel', serif",
    cormorant: "'Cormorant Garamond', serif",
    lora: "'Lora', serif",
  };

  return (
    <div style={{ fontFamily: S.lora, background: "#FAFAF6", color: "#1C1C14", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #B06800; border-radius: 2px; }
        section { scroll-margin-top: 66px; }
        .nb { background: none; border: none; color: #7A7A6A; font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: color 0.2s; }
        .nb:hover { color: #1C1C14; }
        .btn-g { background: #B06800; color: #fff; border: none; border-radius: 6px; padding: 14px 34px; font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; font-weight: 600; transition: all 0.2s; }
        .btn-g:hover { background: #8A5000; transform: translateY(-1px); }
        .btn-o { background: transparent; color: #1C1C14; border: 1.5px solid rgba(28,28,20,0.4); border-radius: 6px; padding: 13px 30px; font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
        .btn-o:hover { background: #1C1C14; color: #FAFAF6; }
        .btn-o2 { background: transparent; color: #B06800; border: 1.5px solid #B06800; border-radius: 6px; padding: 13px 30px; font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
        .btn-o2:hover { background: #B06800; color: #fff; }
        .lift { transition: transform 0.22s, box-shadow 0.22s; }
        .lift:hover { transform: translateY(-5px); box-shadow: 0 18px 44px rgba(0,0,0,0.1); }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 200, background: "rgba(250,250,246,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(180,140,80,0.15)", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(16px,4vw,56px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: S.cormorant, fontSize: 22, fontWeight: 700, color: "#1C1C14" }}>FRH</span>
          <span style={{ width: 1, height: 22, background: "rgba(176,104,0,0.3)" }} />
          <span style={{ fontFamily: S.lora, fontSize: 11, color: "#9A9A8A", fontStyle: "italic" }}>Kinshasa</span>
        </div>
        <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
          {["about","mission","needs","partner","vision","contact"].map((id, i) => (
            <button key={id} className="nb" onClick={() => go(id)}>{t.nav[i]}</button>
          ))}
          <div style={{ display: "flex", background: "#EFEDE6", borderRadius: 6, padding: 3 }}>
            {["en","fr"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ background: lang===l?"#1C1C14":"transparent", color: lang===l?"#FAFAF6":"#7A7A6A", border: "none", borderRadius: 4, padding: "4px 14px", cursor: "pointer", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", transition: "all 0.2s", fontFamily: S.cinzel }}>{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px clamp(20px,5vw,80px)", background: "linear-gradient(160deg,#FAFAF6 0%,#F5EDD8 55%,#FAFAF6 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "8%", right: "4%", width: 400, height: 400, borderRadius: "55% 45% 60% 40%", background: "rgba(176,104,0,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "8%", left: "3%", width: 300, height: 300, borderRadius: "40% 60% 35% 65%", background: "rgba(26,58,26,0.04)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 780 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(176,104,0,0.09)", border: "1px solid rgba(176,104,0,0.2)", borderRadius: 4, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2A7A4A" }} />
            <span style={{ fontFamily: S.cinzel, fontSize: 9, color: "#7A6A3A", letterSpacing: 3.5, textTransform: "uppercase" }}>{t.badge}</span>
          </div>
          <h1 style={{ fontFamily: S.cormorant, fontSize: "clamp(42px,7vw,80px)", fontWeight: 700, lineHeight: 1.05, color: "#1C1C14", marginBottom: 18, whiteSpace: "pre-line" }}>{t.heroTitle}</h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "0 0 24px" }}>
            <div style={{ width: 44, height: 1, background: "#B06800" }} />
            <span style={{ fontFamily: S.cormorant, fontSize: 16, color: "#B06800", fontStyle: "italic" }}>{t.heroTag}</span>
            <div style={{ width: 44, height: 1, background: "#B06800" }} />
          </div>
          <p style={{ fontFamily: S.lora, color: "#5A5A4A", fontSize: "clamp(15px,2vw,18px)", lineHeight: 1.9, maxWidth: 540, margin: "0 auto 44px" }}>{t.heroBody}</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-g" onClick={() => go("partner")}>{t.heroCTA}</button>
            <button className="btn-o" onClick={() => go("about")}>{t.heroSec}</button>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ background: "#1C2A1E", padding: "96px clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Fade>
            <p style={{ fontFamily: S.cinzel, fontSize: 9, letterSpacing: 4, color: "#B06800", textTransform: "uppercase", marginBottom: 14 }}>{t.aboutTag}</p>
            <h2 style={{ fontFamily: S.cormorant, fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#FAFAF6", lineHeight: 1.15, marginBottom: 24, maxWidth: 640 }}>{t.aboutTitle}</h2>
            <p style={{ fontFamily: S.lora, color: "rgba(255,252,240,0.7)", fontSize: 17, lineHeight: 2.05, maxWidth: 680, marginBottom: 44 }}>{t.aboutBody}</p>
          </Fade>
          <Fade delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
              {t.stats.map((s, i) => (
                <div key={i} style={{ background: "rgba(255,252,240,0.05)", border: "1px solid rgba(176,104,0,0.25)", borderTop: "3px solid #B06800", borderRadius: 14, padding: "22px 20px" }}>
                  <div style={{ fontFamily: S.cormorant, fontSize: 44, fontWeight: 700, color: "#B06800", lineHeight: 1, marginBottom: 7 }}>{s.n}</div>
                  <div style={{ fontFamily: S.cinzel, fontSize: 8, color: "rgba(255,252,240,0.75)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 5 }}>{s.l}</div>
                  <div style={{ fontFamily: S.lora, fontSize: 11, color: "rgba(255,252,240,0.35)", fontStyle: "italic" }}>{s.s}</div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: S.lora, fontSize: 12, color: "rgba(255,252,240,0.3)", fontStyle: "italic" }}>{t.leaders}</p>
          </Fade>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" style={{ padding: "96px clamp(20px,5vw,80px)", background: "#FAFAF6" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Fade>
            <p style={{ fontFamily: S.cinzel, fontSize: 9, letterSpacing: 4, color: "#B06800", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>{t.missionTag}</p>
            <h2 style={{ fontFamily: S.cormorant, fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#1C1C14", textAlign: "center", marginBottom: 44 }}>{t.missionTitle}</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            {[
              { d: t.p1, ac: "#B06800", bg: "#FFF8EE", bd: "rgba(176,104,0,0.22)" },
              { d: t.p2, ac: "#155E38", bg: "#F0FAF4", bd: "rgba(21,94,56,0.22)" },
            ].map(({ d, ac, bg, bd }, i) => (
              <Fade key={i} delay={i * 0.12}>
                <div className="lift" style={{ background: bg, border: `1px solid ${bd}`, borderTop: `3px solid ${ac}`, borderRadius: 16, padding: "32px 28px" }}>
                  <h3 style={{ fontFamily: S.cormorant, fontSize: 24, fontWeight: 700, color: ac, marginBottom: 18 }}>{d.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {d.pts.map((pt, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#3A3A28", fontSize: 14, lineHeight: 1.9, marginBottom: 8 }}>
                        <span style={{ color: ac, fontWeight: 700, fontSize: 11, marginTop: 4, flexShrink: 0 }}>▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* NEED */}
      <section id="needs" style={{ padding: "96px clamp(20px,5vw,80px)", background: "#FDF5F5", borderTop: "1px solid rgba(180,60,60,0.1)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Fade>
            <p style={{ fontFamily: S.cinzel, fontSize: 9, letterSpacing: 4, color: "#A03030", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>{t.needTag}</p>
            <h2 style={{ fontFamily: S.cormorant, fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#1C1C14", textAlign: "center", marginBottom: 44 }}>{t.needTitle}</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 38 }}>
            {t.needs.map((n, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="lift" style={{ background: "#fff", border: "1px solid rgba(180,60,60,0.15)", borderLeft: "4px solid #A03030", borderRadius: "0 12px 12px 0", padding: "24px 22px" }}>
                  <h4 style={{ fontFamily: S.cormorant, fontSize: 20, fontWeight: 700, color: "#A03030", marginBottom: 10 }}>{n.title}</h4>
                  <p style={{ fontFamily: S.lora, color: "#5A3838", fontSize: 14, lineHeight: 1.85 }}>{n.body}</p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade>
            <div style={{ background: "#fff", border: "1px solid rgba(180,60,60,0.15)", borderRadius: 14, padding: "34px 40px", textAlign: "center" }}>
              <p style={{ fontFamily: S.cormorant, fontSize: "clamp(17px,2.5vw,23px)", fontStyle: "italic", color: "#3A1818", lineHeight: 1.75, marginBottom: 14 }}>{t.quote}</p>
              <cite style={{ fontFamily: S.cinzel, fontSize: 9, color: "#A03030", letterSpacing: 2, fontStyle: "normal" }}>{t.quoteBy}</cite>
            </div>
          </Fade>
        </div>
      </section>

      {/* PARTNER */}
      <section id="partner" style={{ padding: "96px clamp(20px,5vw,80px)", background: "#FAFAF6" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Fade>
            <p style={{ fontFamily: S.cinzel, fontSize: 9, letterSpacing: 4, color: "#B06800", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>{t.partnerTag}</p>
            <h2 style={{ fontFamily: S.cormorant, fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#1C1C14", textAlign: "center", marginBottom: 10 }}>{t.partnerTitle}</h2>
            <p style={{ fontFamily: S.lora, color: "#7A7A6A", fontSize: 14, textAlign: "center", marginBottom: 36, fontStyle: "italic" }}>{t.partnerSub}</p>
          </Fade>

          {/* Campaign banner */}
          <Fade>
            <div style={{ background: "#1C2A1E", borderRadius: 14, padding: "18px 26px", marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ background: "rgba(176,104,0,0.2)", border: "1px solid rgba(176,104,0,0.4)", borderRadius: 5, padding: "3px 12px", fontFamily: S.cinzel, fontSize: 8, color: "#B06800", letterSpacing: 2, textTransform: "uppercase" }}>{lang === "en" ? "Current Campaign" : "Campagne en cours"}</span>
                <span style={{ fontFamily: S.cormorant, fontSize: 17, fontWeight: 700, color: "#FAFAF6" }}>{t.campaign}</span>
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                {[["68", lang==="en"?"Children":"Enfants"], ["3", lang==="en"?"Orphanages":"Orphelinats"], [t.deadline, lang==="en"?"Deadline":"Échéance"]].map(([n,l], i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: S.cormorant, fontSize: i<2?24:13, fontWeight: 700, color: "#B06800", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: S.cinzel, fontSize: 7, color: "rgba(255,252,240,0.45)", letterSpacing: 1.5, textTransform: "uppercase", marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* Goals */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 36 }}>
            {t.goals.map((g, i) => (
              <Fade key={i} delay={i * 0.07}>
                <div className="lift" style={{ background: g.bg, border: `1px solid ${g.c}22`, borderLeft: `4px solid ${g.c}`, borderRadius: "0 13px 13px 0", padding: "20px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div>
                      <div style={{ fontFamily: S.cinzel, fontSize: 7.5, color: g.c, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3 }}>{g.cat}</div>
                      <div style={{ fontFamily: S.cormorant, fontSize: 18, fontWeight: 700, color: "#1C1C14" }}>{g.item}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: S.cormorant, fontSize: 30, fontWeight: 700, color: g.c, lineHeight: 1 }}>{g.n}</div>
                      <div style={{ fontFamily: S.cinzel, fontSize: 7, color: "#9A9A8A", letterSpacing: 1, textTransform: "uppercase" }}>{g.unit}</div>
                    </div>
                  </div>
                  <p style={{ fontFamily: S.lora, color: "#7A6A48", fontSize: 12, lineHeight: 1.7, fontStyle: "italic" }}>{g.note}</p>
                </div>
              </Fade>
            ))}
          </div>

          {/* Trust block */}
          <Fade>
            <div style={{ background: "#1C2A1E", borderRadius: 16, padding: "32px 34px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
              <div>
                <h3 style={{ fontFamily: S.cormorant, fontSize: 24, fontWeight: 700, color: "#FAFAF6", marginBottom: 10 }}>{t.trustTitle}</h3>
                <p style={{ fontFamily: S.lora, color: "rgba(255,252,240,0.5)", fontSize: 13, lineHeight: 1.85 }}>{lang === "en" ? "Full transparency to every partner, every month." : "Transparence totale envers chaque partenaire, chaque mois."}</p>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {t.trustPts.map((pt, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,252,240,0.8)", fontSize: 13, fontFamily: S.lora, lineHeight: 1.75, marginBottom: 10 }}>
                    <span style={{ color: "#B06800", flexShrink: 0 }}>✓</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" style={{ padding: "96px clamp(20px,5vw,80px)", background: "#F4F8F4", borderTop: "1px solid rgba(21,94,56,0.1)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Fade>
            <p style={{ fontFamily: S.cinzel, fontSize: 9, letterSpacing: 4, color: "#155E38", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>{t.visionTag}</p>
            <h2 style={{ fontFamily: S.cormorant, fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#1C1C14", textAlign: "center", marginBottom: 44 }}>{t.visionTitle}</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {t.visions.map((v, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="lift" style={{ background: "#fff", border: "1px solid rgba(21,94,56,0.15)", borderRadius: 14, padding: "26px 24px" }}>
                  <div style={{ width: 32, height: 3, background: "#155E38", borderRadius: 2, marginBottom: 14 }} />
                  <h4 style={{ fontFamily: S.cormorant, fontSize: 21, fontWeight: 700, color: "#155E38", marginBottom: 10 }}>{v.title}</h4>
                  <p style={{ fontFamily: S.lora, color: "#4A5A48", fontSize: 14, lineHeight: 1.85 }}>{v.body}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: "100px clamp(20px,5vw,80px)", textAlign: "center", background: "#FAFAF6" }}>
        <Fade>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <p style={{ fontFamily: S.cinzel, fontSize: 9, letterSpacing: 4, color: "#B06800", textTransform: "uppercase", marginBottom: 16 }}>{t.ctaTag}</p>
            <h2 style={{ fontFamily: S.cormorant, fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: "#1C1C14", lineHeight: 1.1, marginBottom: 20 }}>{t.ctaTitle}</h2>
            <p style={{ fontFamily: S.lora, color: "#5A5A4A", fontSize: 16, lineHeight: 1.9, marginBottom: 44 }}>{t.ctaBody}</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-g" onClick={() => setModal("email")}>
                {lang === "en" ? "Email Us" : "Nous Écrire"}
              </button>
              <button className="btn-o2" onClick={() => setModal("onepager")}>
                {t.download}
              </button>
            </div>
            <p style={{ fontFamily: S.lora, fontSize: 12, color: "#C8B888", marginTop: 18, fontStyle: "italic" }}>
              femmesreferencehommes@gmail.com
            </p>
          </div>
        </Fade>
      </section>

      {/* EMAIL MODAL */}
      {modal === "email" && (
        <EmailModal lang={lang} onClose={() => setModal(null)} S={S} />
      )}

      {/* ONE-PAGER MODAL */}
      {modal === "onepager" && (
        <OnePagerModal lang={lang} onClose={() => setModal(null)} t={t} S={S} />
      )}

      {/* FOOTER */}
      <footer style={{ background: "#1C1C14", padding: "36px clamp(20px,5vw,72px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 18 }}>
        <div>
          <div style={{ fontFamily: S.cormorant, fontSize: 22, color: "#B06800", fontWeight: 700, marginBottom: 5 }}>FRH</div>
          <div style={{ fontFamily: S.lora, fontSize: 11, color: "rgba(255,252,240,0.28)", fontStyle: "italic" }}>{lang === "en" ? "Jésus-Christ notre référence." : "Jesus Christ our reference."}</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: S.lora, fontSize: 12, color: "rgba(255,252,240,0.45)", marginBottom: 3 }}>femmesreferencehommes@gmail.com</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: S.cinzel, fontSize: 9, color: "rgba(255,252,240,0.22)", letterSpacing: 1 }}>{t.copy}</div>
          <div style={{ fontFamily: S.lora, fontSize: 10, color: "rgba(255,252,240,0.16)", marginTop: 4 }}>Grace YELE MBUILISO & Jean-Luc Mwano MBUILISO</div>
        </div>
      </footer>
    </div>
  );
}
