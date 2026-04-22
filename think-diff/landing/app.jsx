// Landing page — single scrolling page, EN default with ES toggle
const { useState, useEffect } = React;

// Shared tokens
const WINE = "var(--rv-wine)", WDEEP = "var(--rv-wine-deep)", TERRA = "var(--rv-terracotta)",
      TDEEP = "var(--rv-terracotta-deep)", MOSS = "var(--rv-moss)", SAGE = "var(--rv-sage)",
      SUN = "var(--rv-sun)", SAND = "var(--rv-sand)", CREAM = "var(--rv-cream)",
      PAPER = "var(--rv-paper)", WARM = "var(--rv-paper-warm)", INK = "var(--rv-ink)",
      ROSE = "var(--rv-rose)";

const FD = "var(--font-display)", FS = "var(--font-serif)", FSC = "var(--font-script)";

const Blob = ({ style }) => <div aria-hidden style={{ position: "absolute", pointerEvents: "none", borderRadius: "50%", ...style }} />;

/* ==================== NAV ==================== */
const Nav = ({ lang, setLang, t }) => {
  const s = {
    nav: { position: "sticky", top: 0, zIndex: 50, background: "rgba(255,243,222,0.88)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(110,28,31,0.12)" },
    inner: { maxWidth: 1280, margin: "0 auto", padding: "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 },
    brand: { display: "flex", alignItems: "center", gap: 12 },
    bName: { fontFamily: FD, fontStyle: "italic", fontSize: 22, color: WDEEP, fontWeight: 600 },
    bSub: { fontFamily: FS, fontSize: 11, color: WDEEP, opacity: 0.6, marginTop: 2, letterSpacing: 0.5 },
    links: { display: "flex", gap: 6, alignItems: "center" },
    link: { fontFamily: FS, fontSize: 14, fontWeight: 500, color: WDEEP, textDecoration: "none", padding: "8px 14px", borderRadius: 100 },
    langBtn: { fontFamily: FS, fontSize: 12, fontWeight: 700, color: WDEEP, background: "transparent", border: `1.5px solid ${WDEEP}`,
      padding: "8px 14px", borderRadius: 100, cursor: "pointer", letterSpacing: 1, marginLeft: 8 },
    cta: { background: TERRA, color: WARM, padding: "10px 20px", borderRadius: 100, fontFamily: FS,
      fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: 0.3,
      boxShadow: "0 6px 16px rgba(217,114,78,0.35)" },
  };
  return (
    <nav style={s.nav}>
      <div className="rv-nav-inner" style={s.inner}>
        <a href="#top" style={{ ...s.brand, textDecoration: "none" }}>
          <img className="rv-brand-logo" src="assets/raices-logo.png" alt="" style={{ width: 44, height: 44, objectFit: "contain" }}/>
          <div>
            <div className="rv-nav-bname" style={s.bName}>Raíces de Vida</div>
            <div className="rv-nav-bsub" style={s.bSub}>Waldorf School · Oaxaca</div>
          </div>
        </a>
        <div className="rv-nav-links" style={s.links}>
          <a className="rv-nav-link" href="#talks" style={s.link}>{t.nav_talks}</a>
          <a className="rv-nav-link" href="#program" style={s.link}>{t.nav_program}</a>
          <a className="rv-nav-link" href="#tickets" style={s.link}>{t.nav_tickets}</a>
          <a className="rv-nav-cta" href="#reserve" style={s.cta}>{t.nav_cta}</a>
          <button className="rv-nav-lang" style={s.langBtn} onClick={() => setLang(lang === "en" ? "es" : "en")}>{t.lang_switch}</button>
        </div>
      </div>
    </nav>
  );
};

/* ==================== HERO ==================== */
const Hero = ({ t }) => {
  const s = {
    wrap: { position: "relative", overflow: "hidden",
      background: "linear-gradient(180deg, #FFF3DE 0%, #FBE6C4 70%, #F5D9B0 100%)", paddingBottom: 40 },
    inner: { maxWidth: 1280, margin: "0 auto", padding: "64px 40px 48px", position: "relative", zIndex: 2,
      display: "grid", gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1fr)", gap: 56, alignItems: "center" },
    eyebrowWrap: { display: "flex", alignItems: "center", gap: 14 },
    dot: { width: 14, height: 14, borderRadius: "50%", background: TERRA },
    eyebrow: { fontFamily: FSC, fontSize: 36, color: TERRA, margin: 0, fontWeight: 600, lineHeight: 1 },
    title: { fontFamily: FD, fontWeight: 700, fontSize: "clamp(56px, 7.2vw, 104px)", lineHeight: 0.92, color: WDEEP, margin: "14px 0 0", letterSpacing: -2.5 },
    italic: { fontStyle: "italic", fontWeight: 500, color: TERRA },
    and: { fontStyle: "italic", fontWeight: 400, color: WDEEP, opacity: 0.7 },
    kicker: { fontSize: 20, lineHeight: 1.55, color: INK, maxWidth: 540, marginTop: 26 },
    meta: { display: "flex", gap: 28, marginTop: 32, flexWrap: "wrap" },
    metaItem: { display: "flex", flexDirection: "column", gap: 2 },
    metaLabel: { fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: TDEEP, fontWeight: 700 },
    metaVal: { fontFamily: FD, fontSize: 22, fontWeight: 600, color: WDEEP, fontStyle: "italic" },
    metaSub: { fontSize: 12, color: INK, opacity: 0.6, fontStyle: "italic", marginTop: 1 },
    btns: { display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" },
    cta: { background: TERRA, color: WARM, padding: "18px 30px", borderRadius: 100, fontFamily: FS,
      fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 10px 24px rgba(217,114,78,0.4)" },
    cta2: { background: "transparent", color: WDEEP, padding: "17px 28px", borderRadius: 100, fontFamily: FS,
      fontSize: 16, fontWeight: 600, textDecoration: "none", border: `1.5px solid ${WDEEP}` },

    photoWrap: { position: "relative", aspectRatio: "4/5", borderRadius: 20, overflow: "hidden",
      boxShadow: "0 30px 60px rgba(78,18,20,0.3)", border: `6px solid ${WARM}` },
    photo: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" },
    photoTag: { position: "absolute", top: 22, left: 22, background: TERRA, color: WARM,
      padding: "10px 16px", borderRadius: 100, fontFamily: FS, fontWeight: 700, fontSize: 13, letterSpacing: 1,
      boxShadow: "0 6px 14px rgba(0,0,0,0.3)" },
    photoCaption: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 24px 22px",
      background: "linear-gradient(180deg, rgba(78,18,20,0) 0%, rgba(78,18,20,0.85) 100%)",
      color: WARM },
    photoName: { fontFamily: FD, fontSize: 32, fontWeight: 600, fontStyle: "italic", letterSpacing: -0.5, lineHeight: 1, margin: 0 },
    photoMeta: { fontFamily: FS, fontSize: 13, opacity: 0.85, marginTop: 6, fontWeight: 500 },
  };
  return (
    <section id="top" style={s.wrap}>
      <Blob style={{ top: -280, right: -240, width: 780, height: 780, background: `radial-gradient(circle, ${SUN} 0%, rgba(245,185,71,0) 65%)` }}/>
      <Blob style={{ bottom: -200, left: -160, width: 560, height: 560, background: "radial-gradient(circle, rgba(138,159,126,0.55) 0%, rgba(138,159,126,0) 65%)" }}/>
      <Blob style={{ top: 380, left: -60, width: 240, height: 240, background: "radial-gradient(circle, rgba(217,114,78,0.4) 0%, rgba(217,114,78,0) 65%)" }}/>

      <div className="rv-hero-inner" style={s.inner}>
        <div>
          <div style={s.eyebrowWrap}>
            <span style={s.dot}/>
            <p className="rv-hero-eyebrow" style={s.eyebrow}>{t.hero_eyebrow}</p>
          </div>
          <h1 className="rv-hero-title" style={s.title}>
            {t.hero_title_1}<br/>
            <span style={s.italic}>{t.hero_title_2}</span> <span style={s.and}>{t.hero_title_and}</span><br/>
            <span style={s.italic}>{t.hero_title_3}</span>.
          </h1>
          <p className="rv-hero-kicker" style={s.kicker}>{t.hero_kicker}</p>

          <div className="rv-hero-meta" style={s.meta}>
            <div style={s.metaItem}>
              <span style={s.metaLabel}>When</span>
              <span className="rv-hero-meta-val" style={s.metaVal}>{t.hero_date}</span>
              <span style={s.metaSub}>{t.hero_time}</span>
            </div>
            <div style={s.metaItem}>
              <span style={s.metaLabel}>Where</span>
              <span className="rv-hero-meta-val" style={s.metaVal}>{t.hero_venue}</span>
              <span style={s.metaSub}>{t.hero_venueNote}</span>
            </div>
          </div>

          <div className="rv-hero-btns" style={s.btns}>
            <a className="rv-hero-btn" href="#reserve" style={s.cta}>{t.hero_cta}</a>
            <a className="rv-hero-btn" href="#program" style={s.cta2}>{t.hero_cta2} ↓</a>
          </div>
        </div>

        <div className="rv-hero-photo" style={s.photoWrap}>
          <img src="assets/nicolas.png" alt="Nicolas Coutelot" style={s.photo} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(78,18,20,0.05) 0%, rgba(78,18,20,0.15) 45%, rgba(78,18,20,0.92) 100%)" }}/>
          <div className="rv-hero-phototag" style={s.photoTag}>★ {t.badge_charla1}</div>
          <div className="rv-hero-atp" style={{ position: "absolute", top: 22, right: 22, background: SUN, color: WDEEP,
            padding: "8px 14px", borderRadius: 100, fontFamily: FS, fontWeight: 800, fontSize: 12,
            letterSpacing: 1.4, boxShadow: "0 6px 14px rgba(0,0,0,0.3)" }}>ATP · TOP 80</div>
          <div className="rv-hero-photocaption" style={s.photoCaption}>
            <h3 className="rv-hero-photoname" style={s.photoName}>{t.charla1_name}</h3>
            <div className="rv-hero-photometa" style={s.photoMeta}>{t.charla1_meta}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================== TALKS SECTION ==================== */
const Talks = ({ t }) => {
  const s = {
    wrap: { background: WARM, position: "relative", overflow: "hidden" },
    inner: { maxWidth: 1280, margin: "0 auto", padding: "100px 40px", position: "relative", zIndex: 2 },
    head: { textAlign: "center", marginBottom: 64 },
    headLabel: { fontFamily: FSC, fontSize: 38, color: TERRA, fontWeight: 600, margin: 0 },
    headTitle: { fontFamily: FD, fontSize: 72, fontWeight: 700, color: WDEEP, margin: "8px 0 0", letterSpacing: -1.5, lineHeight: 1 },
    headItalic: { fontStyle: "italic", color: TERRA, fontWeight: 500 },
  };
  return (
    <section id="talks" style={s.wrap}>
      <Blob style={{ top: 100, right: -200, width: 500, height: 500, background: `radial-gradient(circle, rgba(245,185,71,0.4) 0%, rgba(245,185,71,0) 65%)` }}/>
      <Blob style={{ bottom: 400, left: -180, width: 500, height: 500, background: "radial-gradient(circle, rgba(185,99,106,0.3) 0%, rgba(185,99,106,0) 65%)" }}/>
      <div className="rv-section-pad" style={s.inner}>
        <div style={s.head}>
          <p className="rv-head-label" style={s.headLabel}>— two talks, one morning</p>
          <h2 className="rv-head-title" style={s.headTitle}>The <span style={s.headItalic}>conversations.</span></h2>
        </div>

        <TalkNicolas t={t}/>
        <div style={{ height: 48 }}/>
        <TalkAI t={t}/>
      </div>
    </section>
  );
};

const TalkNicolas = ({ t }) => {
  const s = {
    card: { background: PAPER, borderRadius: 24, overflow: "hidden", position: "relative",
      boxShadow: "0 24px 60px rgba(78,18,20,0.15)", border: `1px solid rgba(110,28,31,0.12)` },
    topBar: { background: `linear-gradient(90deg, ${TDEEP}, ${TERRA} 50%, ${SUN})`, height: 8 },
    grid: { display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 0 },
    content: { padding: "56px 56px 48px" },
    badge: { display: "inline-flex", alignItems: "center", gap: 8, background: WDEEP, color: SUN,
      padding: "10px 16px", borderRadius: 100, fontFamily: FS, fontSize: 13, fontWeight: 700, letterSpacing: 1 },
    // BIG TITLE FIRST at the top
    title: { fontFamily: FD, fontWeight: 700, fontSize: "clamp(40px, 4.6vw, 64px)", lineHeight: 0.95, color: WDEEP, margin: "24px 0 0", letterSpacing: -1.5 },
    titleIt: { fontStyle: "italic", fontWeight: 500, color: TERRA },
    titleEnd: { display: "block", marginTop: 14, fontFamily: FS, fontSize: 22, fontStyle: "italic", color: WDEEP, opacity: 0.75, fontWeight: 500, letterSpacing: 0 },
    rule: { width: 80, height: 2, background: TERRA, margin: "32px 0", opacity: 0.7 },

    // CONTENT BELOW
    body: { fontSize: 17, lineHeight: 1.65, color: INK, marginTop: 0, maxWidth: 560 },
    tags: { display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" },
    tag: { fontFamily: FS, fontSize: 12, fontWeight: 700, letterSpacing: 0.5, padding: "6px 12px",
      borderRadius: 100, background: CREAM, color: WDEEP },

    speaker: { marginTop: 32, display: "flex", alignItems: "center", gap: 16, paddingTop: 24,
      borderTop: "1px dashed rgba(110,28,31,0.25)" },
    speakerAvatar: { width: 64, height: 64, borderRadius: "50%", overflow: "hidden", flexShrink: 0,
      border: `3px solid ${SUN}` },
    speakerName: { fontFamily: FD, fontSize: 26, fontWeight: 600, color: WDEEP, letterSpacing: -0.3, lineHeight: 1, margin: 0 },
    speakerMeta: { fontSize: 13, color: TDEEP, fontWeight: 600, marginTop: 4 },

    photoCol: { position: "relative", minHeight: 560, overflow: "hidden" },
    photo: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%", position: "absolute", inset: 0 },
    photoOverlay: { position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(110,28,31,0) 40%, rgba(110,28,31,0.5) 100%)` },
    timeTag: { position: "absolute", top: 24, right: 24, background: SUN, color: WDEEP,
      padding: "10px 18px", borderRadius: 100, fontFamily: FS, fontWeight: 700, fontSize: 16,
      boxShadow: "0 6px 14px rgba(0,0,0,0.25)" },
  };
  return (
    <article style={s.card}>
      <div style={s.topBar}/>
      <div className="rv-talk1-grid" style={s.grid}>
        <div className="rv-talk1-content" style={s.content}>
          <div style={s.badge}>★ {t.badge_charla1}</div>
          <h3 className="rv-talk1-title" style={s.title}>
            {t.charla1_title}<br/>
            <span style={s.titleIt}>{t.charla1_title_it}</span>
            <span className="rv-talk1-title-end" style={s.titleEnd}>— {t.charla1_title_end}</span>
          </h3>
          <div style={s.rule}/>
          <p className="rv-talk1-body" style={s.body}>{t.charla1_body}</p>
          <div style={s.tags}>
            <span style={s.tag}>#{t.charla1_tag1}</span>
            <span style={s.tag}>#{t.charla1_tag2}</span>
            <span style={s.tag}>#{t.charla1_tag3}</span>
          </div>
          <div style={s.speaker}>
            <div style={s.speakerAvatar}>
              <img src="assets/nicolas.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}/>
            </div>
            <div>
              <h4 className="rv-talk1-speaker-name" style={s.speakerName}>{t.charla1_name}</h4>
              <div style={s.speakerMeta}>{t.charla1_meta}</div>
            </div>
          </div>
        </div>
        <div className="rv-talk1-photo-col" style={s.photoCol}>
          <img src="assets/nicolas.png" alt="" style={s.photo}/>
          <div style={s.photoOverlay}/>
          <div style={s.timeTag}>11:00 h</div>
        </div>
      </div>
    </article>
  );
};

const TalkAI = ({ t }) => {
  const s = {
    card: { background: `linear-gradient(135deg, ${WDEEP} 0%, ${WINE} 60%, ${TDEEP} 100%)`,
      borderRadius: 24, position: "relative", overflow: "hidden",
      boxShadow: "0 24px 60px rgba(78,18,20,0.3)", color: WARM, padding: "72px 72px 64px" },
    badge: { display: "inline-flex", alignItems: "center", gap: 8, background: SUN, color: WDEEP,
      padding: "10px 16px", borderRadius: 100, fontFamily: FS, fontSize: 13, fontWeight: 700, letterSpacing: 1, position: "relative", zIndex: 2 },
    // BIG PUNCHY TITLE FIRST
    title: { fontFamily: FD, fontWeight: 700, fontSize: "clamp(46px, 6vw, 84px)", lineHeight: 0.95, color: WARM, margin: "28px 0 0",
      letterSpacing: -2, position: "relative", zIndex: 2, maxWidth: 1100 },
    hl: { color: SUN, fontStyle: "italic", fontWeight: 500 },
    strike: { textDecoration: "line-through", opacity: 0.55, textDecorationColor: SUN, textDecorationThickness: 3 },
    // CONTENT BELOW
    grid: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, marginTop: 48, position: "relative", zIndex: 2, alignItems: "start" },
    body: { fontSize: 19, lineHeight: 1.65, color: WARM, opacity: 0.92, margin: 0 },
    tags: { display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" },
    tag: { fontFamily: FS, fontSize: 12, fontWeight: 700, letterSpacing: 0.5, padding: "6px 12px",
      borderRadius: 100, background: "rgba(255,243,222,0.15)", color: WARM, border: `1px solid rgba(255,243,222,0.3)` },
    timeCol: { display: "flex", flexDirection: "column", gap: 18 },
    timeCard: { background: "rgba(255,243,222,0.08)", border: `1px solid rgba(255,243,222,0.2)`,
      borderRadius: 14, padding: 22 },
    timeLabel: { fontFamily: FS, fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", color: SUN, fontWeight: 700 },
    timeVal: { fontFamily: FD, fontSize: 44, fontWeight: 700, fontStyle: "italic", letterSpacing: -1, marginTop: 4 },
    timeSub: { fontSize: 13, opacity: 0.7, marginTop: 4 },
  };
  return (
    <article className="rv-talk2-card" style={s.card}>
      <Blob style={{ top: -200, right: -200, width: 600, height: 600, background: `radial-gradient(circle, ${SUN} 0%, rgba(245,185,71,0) 55%)`, opacity: 0.35 }}/>
      <Blob style={{ bottom: -220, left: -180, width: 540, height: 540, background: "radial-gradient(circle, rgba(138,159,126,0.6) 0%, rgba(138,159,126,0) 60%)", opacity: 0.5 }}/>

      <div style={s.badge}>✦ {t.badge_charla2}</div>
      <h3 className="rv-talk2-title" style={s.title}>
        <span style={s.hl}>{t.charla2_title_1}</span><br/>
        {t.charla2_title_2}<br/>
        {t.charla2_title_3}<br/>
        <span style={{ opacity: 0.75 }}>{t.charla2_title_4}</span><br/>
        <span style={s.hl}>{t.charla2_title_5}</span>
      </h3>

      <div className="rv-talk2-grid" style={s.grid}>
        <div>
          <p className="rv-talk2-body" style={s.body}>{t.charla2_body}</p>
          <div style={s.tags}>
            <span style={s.tag}>#{t.charla2_tag1}</span>
            <span style={s.tag}>#{t.charla2_tag2}</span>
            <span style={s.tag}>#{t.charla2_tag3}</span>
          </div>
        </div>
        <div style={s.timeCol}>
          <div style={s.timeCard}>
            <div style={s.timeLabel}>Starts</div>
            <div className="rv-talk2-time-val" style={s.timeVal}>12:45 h</div>
            <div style={s.timeSub}>Right after the short break.</div>
          </div>
          <div style={s.timeCard}>
            <div style={s.timeLabel}>Format</div>
            <div className="rv-talk2-time-val" style={s.timeVal}>Talk + Q&A</div>
            <div style={s.timeSub}>No jargon. Bring your questions.</div>
          </div>
        </div>
      </div>
    </article>
  );
};

/* ==================== PROGRAM ==================== */
const Program = ({ t, lang }) => {
  const s = {
    wrap: { background: CREAM, position: "relative", overflow: "hidden", padding: "100px 40px" },
    inner: { maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 },
    head: { textAlign: "center", marginBottom: 56 },
    headLabel: { fontFamily: FSC, fontSize: 36, color: TERRA, fontWeight: 600, margin: 0 },
    headTitle: { fontFamily: FD, fontSize: 72, fontWeight: 700, color: WDEEP, margin: "8px 0 12px", letterSpacing: -1.5, lineHeight: 1, fontStyle: "italic" },
    headSub: { fontFamily: FS, fontSize: 16, color: INK, opacity: 0.7, fontStyle: "italic" },

    list: { display: "flex", flexDirection: "column", gap: 14 },
    row: { display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 32, alignItems: "start",
      padding: "24px 28px", background: PAPER, borderRadius: 16, border: `1px solid rgba(110,28,31,0.1)`,
      boxShadow: "0 2px 0 rgba(110,28,31,0.03)" },
    rowHi: { background: `linear-gradient(90deg, ${WDEEP}, ${WINE})`, color: WARM, border: "none",
      boxShadow: "0 14px 32px rgba(78,18,20,0.25)" },
    time: { fontFamily: FD, fontSize: 36, fontWeight: 700, color: TERRA, fontStyle: "italic", letterSpacing: -1, lineHeight: 1 },
    timeHi: { color: SUN },
    body: { },
    h: { fontFamily: FD, fontSize: 28, fontWeight: 600, color: WDEEP, margin: 0, lineHeight: 1.1, letterSpacing: -0.5 },
    hHi: { color: WARM },
    d: { fontSize: 15, lineHeight: 1.5, color: INK, opacity: 0.82, marginTop: 6 },
    dHi: { color: "rgba(255,243,222,0.9)", opacity: 1 },
    m: { fontFamily: FS, fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: TDEEP, fontWeight: 700, marginTop: 10 },
    mHi: { color: SUN },
    star: { fontSize: 20, color: SUN, alignSelf: "center" },
  };
  return (
    <section id="program" style={s.wrap}>
      <Blob style={{ top: -140, right: -100, width: 360, height: 360, background: `radial-gradient(circle, rgba(245,185,71,0.35) 0%, rgba(245,185,71,0) 65%)` }}/>
      <div className="rv-section-pad" style={s.inner}>
        <div style={s.head}>
          <p className="rv-head-label" style={s.headLabel}>— {t.prog_sub.split("·")[0].trim()}</p>
          <h2 className="rv-head-title" style={s.headTitle}>{t.prog_title}.</h2>
          <p style={s.headSub}>{t.prog_sub}</p>
        </div>
        <div style={s.list}>
          {PROGRAMA_BI.map((p, i) => {
            const c = p[lang];
            const hi = p.hi;
            return (
              <div key={i} className="rv-prog-row" style={{ ...s.row, ...(hi ? s.rowHi : {}) }}>
                <div className="rv-prog-time" style={{ ...s.time, ...(hi ? s.timeHi : {}) }}>{p.t}</div>
                <div style={s.body}>
                  <h3 className="rv-prog-h" style={{ ...s.h, ...(hi ? s.hHi : {}) }}>{c.h}</h3>
                  <p className="rv-prog-d" style={{ ...s.d, ...(hi ? s.dHi : {}) }}>{c.d}</p>
                  {c.m && <div style={{ ...s.m, ...(hi ? s.mHi : {}) }}>★ {c.m}</div>}
                </div>
                {hi && <div className="rv-prog-star" style={s.star}>✦</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==================== TICKETS ==================== */
const Tickets = ({ t }) => {
  const s = {
    wrap: { background: WARM, position: "relative", overflow: "hidden", padding: "100px 40px" },
    inner: { maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" },
    eyebrow: { fontFamily: FSC, fontSize: 36, color: TERRA, fontWeight: 600, margin: 0 },
    title: { fontFamily: FD, fontWeight: 700, fontSize: 96, lineHeight: 0.88, color: WDEEP, margin: "10px 0 40px", letterSpacing: -2.5 },
    italic: { fontStyle: "italic", fontWeight: 500, color: TERRA },

    grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 860, margin: "0 auto" },
    card: { borderRadius: 22, padding: "44px 40px 40px", position: "relative", overflow: "hidden",
      background: TERRA, color: WARM, boxShadow: "0 18px 40px rgba(217,114,78,0.4)" },
    cardAlt: { background: MOSS, boxShadow: "0 18px 40px rgba(94,114,83,0.4)" },
    cLabel: { fontFamily: FD, fontStyle: "italic", fontSize: 30, fontWeight: 600, marginBottom: 4 },
    cAmount: { fontFamily: FD, fontWeight: 700, fontSize: 110, lineHeight: 1, letterSpacing: -3 },
    cCur: { fontSize: 22, letterSpacing: 2, opacity: 0.85, marginLeft: 8, fontWeight: 600 },
    cNote: { fontSize: 15, fontStyle: "italic", fontFamily: FD, fontWeight: 500, marginTop: 10, opacity: 0.9 },

    cause: { marginTop: 40, fontFamily: FD, fontStyle: "italic", fontSize: 24, color: WDEEP, fontWeight: 600, maxWidth: 700, marginLeft: "auto", marginRight: "auto" },
    heart: { color: TERRA },
  };
  return (
    <section id="tickets" style={s.wrap}>
      <Blob style={{ top: -140, left: -140, width: 420, height: 420, background: `radial-gradient(circle, ${SUN} 0%, rgba(245,185,71,0) 65%)`, opacity: 0.5 }}/>
      <Blob style={{ bottom: -160, right: -140, width: 460, height: 460, background: "radial-gradient(circle, rgba(217,114,78,0.35) 0%, rgba(217,114,78,0) 65%)" }}/>

      <div className="rv-section-pad" style={s.inner}>
        <p style={s.eyebrow}>— {t.tickets_eye}</p>
        <h2 className="rv-tix-title" style={s.title}>{t.tickets_title_1} <span style={s.italic}>{t.tickets_title_2}</span></h2>

        <div className="rv-tix-grid" style={s.grid}>
          <div className="rv-tix-card" style={s.card}>
            <div className="rv-tix-label" style={s.cLabel}>{t.tickets_p1}</div>
            <div className="rv-tix-amount" style={s.cAmount}>$750<span style={s.cCur}>MXN</span></div>
            <div style={s.cNote}>— {t.tickets_p1_note}</div>
          </div>
          <div className="rv-tix-card" style={{ ...s.card, ...s.cardAlt }}>
            <div className="rv-tix-label" style={s.cLabel}>{t.tickets_p2}</div>
            <div className="rv-tix-amount" style={s.cAmount}>$1,000<span style={s.cCur}>MXN</span></div>
            <div style={s.cNote}>— {t.tickets_p2_note}</div>
          </div>
        </div>

        <p className="rv-tix-cause" style={s.cause}><span style={s.heart}>♥</span> {t.tickets_cause}</p>
      </div>
    </section>
  );
};

/* ==================== CTA ==================== */
const CTA = ({ t }) => {
  const s = {
    wrap: { background: `linear-gradient(180deg, ${WARM} 0%, ${CREAM} 100%)`, padding: "60px 40px 120px" },
    inner: { maxWidth: 1100, margin: "0 auto" },
    box: { background: `linear-gradient(135deg, ${WDEEP} 0%, ${WINE} 100%)`, borderRadius: 28,
      padding: "80px 72px", color: WARM, position: "relative", overflow: "hidden",
      boxShadow: "0 30px 70px rgba(78,18,20,0.4)" },
    grid: { display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center", position: "relative", zIndex: 2 },
    title: { fontFamily: FD, fontWeight: 700, fontSize: 72, lineHeight: 0.92, margin: 0, letterSpacing: -1.5 },
    titleHi: { fontStyle: "italic", color: SUN, fontWeight: 500 },
    body: { fontSize: 19, lineHeight: 1.55, opacity: 0.88, marginTop: 24, maxWidth: 500 },
    btns: { display: "flex", flexDirection: "column", gap: 16 },
    btn: { background: SUN, color: WDEEP, padding: "24px 32px", borderRadius: 100, fontFamily: FS,
      fontSize: 18, fontWeight: 700, textDecoration: "none", textAlign: "center",
      boxShadow: "0 12px 28px rgba(245,185,71,0.5)" },
    or: { textAlign: "center", fontFamily: FSC, fontSize: 28, color: SUN, opacity: 0.8 },
    web: { background: "transparent", color: WARM, padding: "22px 30px", borderRadius: 100, fontFamily: FS,
      fontSize: 16, fontWeight: 600, textDecoration: "none", textAlign: "center",
      border: `1.5px solid rgba(255,243,222,0.4)` },
    wa: { fontFamily: FD, fontStyle: "italic", fontSize: 20, marginTop: 18, opacity: 0.8 },
  };
  return (
    <section id="reserve" className="rv-cta-wrap" style={s.wrap}>
      <div style={s.inner}>
        <div className="rv-cta-box" style={s.box}>
          <Blob style={{ top: -180, right: -180, width: 540, height: 540, background: `radial-gradient(circle, ${SUN} 0%, rgba(245,185,71,0) 65%)`, opacity: 0.35 }}/>
          <Blob style={{ bottom: -200, left: -200, width: 500, height: 500, background: "radial-gradient(circle, rgba(217,114,78,0.5) 0%, rgba(217,114,78,0) 65%)" }}/>

          <div className="rv-cta-grid" style={s.grid}>
            <div>
              <h2 className="rv-cta-title" style={s.title}>
                {t.cta_title_1}<br/>
                <span style={s.titleHi}>{t.cta_title_2}</span>
              </h2>
              <p className="rv-cta-body" style={s.body}>{t.cta_body}</p>
              <div style={s.wa}>WhatsApp · +52 564 582 6776</div>
            </div>
            <div style={s.btns}>
              <a className="rv-cta-btn" href="https://wa.me/525645826776" style={s.btn} target="_blank" rel="noopener">{t.cta_btn}</a>
              <div style={s.or}>— {t.cta_or} —</div>
              <a href="https://www.raicesdevida.com" style={s.web} target="_blank" rel="noopener">{t.cta_web} →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================== FOOTER ==================== */
const Footer = ({ t }) => {
  const s = {
    wrap: { background: CREAM, padding: "40px 40px", borderTop: "1px solid rgba(110,28,31,0.15)" },
    inner: { maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 },
    brand: { display: "flex", alignItems: "center", gap: 12 },
    motto: { fontFamily: FD, fontStyle: "italic", fontSize: 20, color: WDEEP, fontWeight: 500 },
    addr: { fontFamily: FS, fontSize: 13, color: WDEEP, opacity: 0.7, fontWeight: 500 },
    heart: { color: TERRA },
  };
  return (
    <footer style={s.wrap}>
      <div className="rv-footer-inner" style={s.inner}>
        <div style={s.brand}>
          <img src="assets/raices-logo.png" alt="" style={{ width: 44, height: 44, objectFit: "contain" }}/>
          <div>
            <div style={s.motto}>{t.foot_motto}</div>
            <div style={s.addr}>{t.foot_address}</div>
          </div>
        </div>
        <div style={s.addr}>♥ Huatulco · 2026</div>
      </div>
    </footer>
  );
};

/* ==================== APP ==================== */
const App = () => {
  const [lang, setLang] = useState(() => localStorage.getItem("rv_lang") || "en");
  useEffect(() => { localStorage.setItem("rv_lang", lang); document.documentElement.lang = lang; }, [lang]);
  const t = COPY[lang];
  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t}/>
      <Hero t={t}/>
      <Talks t={t}/>
      <Program t={t} lang={lang}/>
      <Tickets t={t}/>
      <CTA t={t}/>
      <Footer t={t}/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
