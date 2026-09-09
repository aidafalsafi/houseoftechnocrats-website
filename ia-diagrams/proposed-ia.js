(function () {
  "use strict";

  var isFa = document.documentElement.lang === "fa";
  var lang = isFa ? "fa" : "en";
  var direction = isFa ? "rtl" : "ltr";
  var width = 5500;
  var height = 3500;
  var svg = document.getElementById("ia-svg");
  var ns = "http://www.w3.org/2000/svg";
  var xhtml = "http://www.w3.org/1999/xhtml";

  var copy = {
    en: {
      eyebrow: "HOUSE OF TECHNOCRATS / PROPOSED INFORMATION ARCHITECTURE / DECISION DRAFT",
      title: "Unified Radar, Clear Task Flows",
      meta: "7 primary areas · 16 categories · 32 patterns · 4 prioritized user flows",
      date: "02 AUG 2026",
      architecture: "PROPOSED PAGE HIERARCHY",
      flowsKicker: "USER GOALS BEFORE CONTENT TYPES",
      flowsTitle: "Priority task flows",
      legend: "Solid: page hierarchy · bright line: primary Radar journey · dashed: contextual relationship",
      types: {
        landing: "LANDING",
        orientation: "ORIENTATION",
        product: "PRIMARY PRODUCT",
        explorer: "EXPLORER",
        view: "IN-PRODUCT VIEW",
        record: "CANONICAL RECORD",
        knowledge: "KNOWLEDGE HUB",
        media: "CONTENT RECORD",
        directory: "DIRECTORY",
        profile: "PROFILE",
        institution: "INSTITUTION",
        section: "IN-PAGE SECTIONS",
        "task-hub": "TASK HUB",
        form: "TASK / FORM",
        state: "PROCESS STATE",
        utility: "GLOBAL UTILITY"
      },
      principles: [
        ["One Radar product", "Categories and patterns live inside the Explorer."],
        ["Progressive disclosure", "Overview → category → pattern → evidence."],
        ["Stable deep links", "Every category, pattern, item and person has a URL."],
        ["Multiple ways to find", "Hierarchy, related links, filters and search coexist."],
        ["Bilingual parity", "English and Persian keep the same structure and state."],
      ],
      flows: [
        ["P1", "Explore the model", "CORE PRODUCT", ["Home", "Radar", "Explorer", "Category", "Pattern", "Evidence"]],
        ["P2", "Research and verify", "KNOWLEDGE", ["Search / Insights", "Content record", "Related pattern", "Contributor / method"]],
        ["P3", "Complete participation", "CONVERSION", ["Participate", "Choose route", "Form / activation", "Confirmation"]],
        ["P4", "Build context and trust", "ORIENTATION", ["Continuity / House", "Method / People", "Reports / Insights", "Participate"]]
      ]
    },
    fa: {
      eyebrow: "خانهٔ تکنوکرات‌ها / معماری اطلاعات پیشنهادی / پیش‌نویس تصمیم",
      title: "رادار یکپارچه، مسیرهای روشن",
      meta: "۷ بخش اصلی · ۱۶ دسته‌بندی · ۳۲ الگو · ۴ جریان اولویت‌دار کاربر",
      date: "۱۱ مرداد ۱۴۰۵",
      architecture: "سلسله‌مراتب پیشنهادی صفحه‌ها",
      flowsKicker: "هدف کاربر مقدم بر نوع محتوا",
      flowsTitle: "جریان‌های اولویت‌دار کاربر",
      legend: "خط پیوسته: سلسله‌مراتب · خط روشن: مسیر اصلی رادار · خط‌چین: رابطهٔ زمینه‌ای",
      types: {
        landing: "صفحهٔ ورودی",
        orientation: "آشنایی و جهت‌یابی",
        product: "محصول اصلی",
        explorer: "کاوشگر",
        view: "نمای درون‌محصول",
        record: "رکورد مستقل",
        knowledge: "مرکز دانش",
        media: "رکورد محتوا",
        directory: "فهرست",
        profile: "نمایه",
        institution: "نهاد",
        section: "بخش‌های درون‌صفحه",
        "task-hub": "مرکز انجام کار",
        form: "کار / فرم",
        state: "وضعیت فرایند",
        utility: "ابزار سراسری"
      },
      principles: [
        ["یک محصول رادار", "دسته‌بندی و الگو درون کاوشگر قرار می‌گیرند."],
        ["نمایش تدریجی", "نمای کلی ← دسته‌بندی ← الگو ← شواهد."],
        ["پیوند پایدار", "هر دسته‌بندی، الگو، محتوا و فرد URL مستقل دارد."],
        ["چند راه برای یافتن", "سلسله‌مراتب، پیوند مرتبط، فیلتر و جست‌وجو کنار هم‌اند."],
        ["برابری دو زبان", "فارسی و انگلیسی ساختار و وضعیت یکسان دارند."],
      ],
      flows: [
        ["P1", "کاوش مدل", "محصول اصلی", ["خانه", "رادار", "کاوشگر", "دسته‌بندی", "الگو", "شواهد"]],
        ["P2", "پژوهش و اعتبارسنجی", "دانش", ["جست‌وجو / بینش‌ها", "رکورد محتوا", "الگوی مرتبط", "مشارکت‌کننده / روش"]],
        ["P3", "تکمیل مشارکت", "تبدیل", ["مشارکت", "انتخاب مسیر", "فرم / فعال‌سازی", "تأیید"]],
        ["P4", "ساخت زمینه و اعتماد", "جهت‌یابی", ["تداوم / خانه", "روش / افراد", "گزارش‌ها / بینش‌ها", "مشارکت"]]
      ]
    }
  };

  var nodes = [
    { id: "home", x: 2750, y: 260, w: 340, h: 130, type: "landing", priority: "P1", en: ["Home", "/"], fa: ["صفحهٔ اصلی", "/"] },
    { id: "continuity", x: 260, y: 600, w: 300, type: "orientation", priority: "P4", en: ["Continuity", "/continuity"], fa: ["تداوم", "/continuity"] },
    { id: "radar", x: 1280, y: 600, w: 320, type: "product", priority: "P1", en: ["Deep Blue Radar", "/radar · canonical hub"], fa: ["رادار دیپ‌بلو", "/radar · ورودی اصلی"] },
    { id: "insights", x: 2700, y: 600, w: 300, type: "knowledge", priority: "P2", en: ["Insights", "/insights"], fa: ["بینش‌ها", "/insights"] },
    { id: "people", x: 3350, y: 600, w: 280, type: "directory", priority: "P2", en: ["People", "/people"], fa: ["افراد", "/people"] },
    { id: "house", x: 3850, y: 600, w: 280, type: "institution", priority: "P4", en: ["The House", "/house"], fa: ["خانه", "/house"] },
    { id: "participate", x: 4650, y: 600, w: 300, type: "task-hub", priority: "P3", en: ["Participate", "/participate · choose a task"], fa: ["مشارکت", "/participate · انتخاب کار"] },
    { id: "search", x: 5250, y: 600, w: 280, type: "utility", priority: "P2", en: ["Global Search", "available from every page"], fa: ["جست‌وجوی سراسری", "در دسترس از همهٔ صفحه‌ها"] },

    { id: "radar-overview", x: 650, y: 940, type: "orientation", en: ["Overview & method", "/radar#method"], fa: ["نمای کلی و روش", "/radar#method"] },
    { id: "explorer", x: 1280, y: 940, w: 300, type: "explorer", priority: "P1", en: ["Interactive Explorer", "/radar/explore · default journey"], fa: ["کاوشگر تعاملی", "/radar/explore · مسیر پیش‌فرض"] },
    { id: "reports", x: 1900, y: 940, type: "record", priority: "P4", en: ["Reports & updates", "/radar/reports"], fa: ["گزارش‌ها و به‌روزرسانی‌ها", "/radar/reports"] },
    { id: "category-map", x: 1280, y: 1240, w: 300, type: "view", priority: "P1", en: ["16-category map", "filterable view inside Explorer"], fa: ["نمای ۱۶ دسته‌بندی", "نمای فیلترشدنی در کاوشگر"] },
    { id: "category-context", x: 1280, y: 1520, w: 300, type: "record", priority: "P1", en: ["Selected category", "/radar/categories/{category}"], fa: ["دسته‌بندی انتخاب‌شده", "/radar/categories/{category}"] },
    { id: "pattern-list", x: 1280, y: 1800, w: 300, type: "view", priority: "P1", en: ["Patterns in category", "contextual list · not a top-level area"], fa: ["الگوهای دسته‌بندی", "فهرست زمینه‌ای · نه بخش اصلی"] },
    { id: "pattern-record", x: 1280, y: 2080, w: 310, type: "record", priority: "P1", en: ["Pattern record", "/patterns/{pattern} · stable URL"], fa: ["رکورد الگو", "/patterns/{pattern} · پیوند پایدار"] },

    { id: "article", x: 2380, y: 940, type: "media", priority: "P2", en: ["Articles", "/insights/articles/{slug}"], fa: ["مقاله‌ها", "/insights/articles/{slug}"] },
    { id: "video", x: 2700, y: 940, type: "media", priority: "P2", en: ["Videos", "/insights/videos/{slug}"], fa: ["ویدئوها", "/insights/videos/{slug}"] },
    { id: "podcast", x: 3020, y: 940, type: "media", priority: "P2", en: ["Podcasts", "/insights/podcasts/{slug}"], fa: ["پادکست‌ها", "/insights/podcasts/{slug}"] },
    { id: "profile", x: 3350, y: 940, type: "profile", priority: "P2", en: ["Person profile", "/people/{person}"], fa: ["نمایهٔ فرد", "/people/{person}"] },
    { id: "house-sections", x: 3650, y: 940, type: "section", priority: "P4", en: ["Discipline · roles · place", "sections on one page"], fa: ["رویکرد · نقش‌ها · مکان", "بخش‌های یک صفحه"] },

    { id: "invitation", x: 3900, y: 940, w: 230, type: "form", priority: "P3", en: ["Invitation", "private entry"], fa: ["دعوت‌نامه", "ورودی خصوصی"] },
    { id: "membership", x: 4165, y: 940, w: 230, type: "form", priority: "P3", en: ["Membership", "public request"], fa: ["عضویت", "درخواست عمومی"] },
    { id: "referral", x: 4430, y: 940, w: 230, type: "form", priority: "P3", en: ["Referral", "member route"], fa: ["معرفی", "مسیر اعضا"] },
    { id: "conversation", x: 4695, y: 940, w: 230, type: "form", priority: "P3", en: ["Join conversation", "media route"], fa: ["پیوستن به گفت‌وگو", "مسیر رسانه"] },
    { id: "contribution", x: 4960, y: 940, w: 230, type: "form", priority: "P3", en: ["Share evidence", "contribution form"], fa: ["اشتراک شواهد", "فرم مشارکت"] },
    { id: "contact", x: 5225, y: 940, w: 230, type: "form", priority: "P3", en: ["Visit / contact", "House route"], fa: ["بازدید / تماس", "مسیر خانه"] },
    { id: "activation", x: 3900, y: 1240, w: 250, type: "state", priority: "P3", en: ["Activation", "validate invitation"], fa: ["فعال‌سازی", "اعتبارسنجی دعوت‌نامه"] },
    { id: "confirmation", x: 4430, y: 1240, w: 270, type: "state", priority: "P3", en: ["Confirmation & next step", "shared success state"], fa: ["تأیید و گام بعدی", "وضعیت موفق مشترک"] },
    { id: "search-results", x: 5250, y: 1240, w: 270, type: "utility", priority: "P2", en: ["Faceted results", "model · content · people"], fa: ["نتایج فیلترشدنی", "مدل · محتوا · افراد"] }
  ];

  var edges = [
    ["home", "continuity"], ["home", "radar", "primary"], ["home", "insights"], ["home", "people"], ["home", "house"], ["home", "participate"], ["home", "search"],
    ["radar", "radar-overview"], ["radar", "explorer", "primary"], ["radar", "reports"],
    ["explorer", "category-map", "primary"], ["category-map", "category-context", "primary"], ["category-context", "pattern-list", "primary"], ["pattern-list", "pattern-record", "primary"],
    ["insights", "article"], ["insights", "video"], ["insights", "podcast"],
    ["people", "profile"], ["house", "house-sections"],
    ["participate", "invitation"], ["participate", "membership"], ["participate", "referral"], ["participate", "conversation"], ["participate", "contribution"], ["participate", "contact"],
    ["invitation", "activation"], ["search", "search-results"]
  ];

  var relations = [
    ["pattern-record", "insights", "Evidence & guidance", "شواهد و راهنما"],
    ["pattern-record", "profile", "Contributors", "مشارکت‌کنندگان"],
    ["reports", "insights", "Published in library", "انتشار در کتابخانه"],
    ["profile", "article", "Authored contributions", "مشارکت‌های منتشرشده"],
    ["conversation", "podcast", "Media destination", "مقصد رسانه‌ای"],
    ["contact", "house", "Institutional route", "مسیر نهادی"],
    ["membership", "confirmation", "Success", "موفقیت"],
    ["referral", "confirmation", "Success", "موفقیت"],
    ["contribution", "confirmation", "Success", "موفقیت"]
  ];

  var nodeMap = {};
  nodes.forEach(function (node) {
    var mirrored = Object.assign({}, node);
    mirrored.x = isFa ? width - node.x : node.x;
    mirrored.h = node.h || 130;
    mirrored.w = node.w || 270;
    nodeMap[node.id] = mirrored;
  });

  function element(name, attributes) {
    var result = document.createElementNS(ns, name);
    Object.keys(attributes || {}).forEach(function (key) {
      result.setAttribute(key, attributes[key]);
    });
    return result;
  }

  function addText(x, y, value, className, anchor) {
    var text = element("text", {
      x: x,
      y: y,
      class: className,
      direction: direction,
      "text-anchor": anchor || "start"
    });
    text.textContent = value;
    svg.appendChild(text);
  }

  function foreignObject(x, y, w, h, className) {
    var foreign = element("foreignObject", { x: x, y: y, width: w, height: h });
    var div = document.createElementNS(xhtml, "div");
    div.className = className;
    div.dir = direction;
    foreign.appendChild(div);
    svg.appendChild(foreign);
    return div;
  }

  addText(isFa ? 5300 : 200, 64, copy[lang].eyebrow, "diagram-eyebrow", "start");
  addText(isFa ? 5300 : 200, 126, copy[lang].title, "diagram-title", "start");
  addText(isFa ? 200 : 5300, 90, copy[lang].meta, "diagram-meta", "end");
  addText(isFa ? 200 : 5300, 126, copy[lang].date, "diagram-eyebrow", "end");
  svg.appendChild(element("line", { x1: 200, y1: 156, x2: 5300, y2: 156, stroke: "#1d4667", "stroke-width": 1 }));
  addText(isFa ? 5300 : 200, 202, copy[lang].architecture, "diagram-eyebrow", "start");

  function drawEdge(edge) {
    var source = nodeMap[edge[0]];
    var target = nodeMap[edge[1]];
    var startY = source.y + source.h / 2;
    var endY = target.y - target.h / 2;
    var midY = startY + (endY - startY) * 0.48;
    svg.appendChild(element("path", {
      d: "M " + source.x + " " + startY + " V " + midY + " H " + target.x + " V " + endY,
      fill: "none",
      stroke: edge[2] === "primary" ? "#8cacc2" : "#1d4667",
      "stroke-width": edge[2] === "primary" ? 4 : 2
    }));
  }

  edges.forEach(drawEdge);

  function relationPath(source, target, index) {
    var sourceX = source.x;
    var targetX = target.x;
    var sourceY = source.y + source.h / 2;
    var targetY = target.y + target.h / 2;
    var lane = 2160 + index * 22;
    return "M " + sourceX + " " + sourceY + " V " + lane + " H " + targetX + " V " + targetY;
  }

  relations.forEach(function (relation, index) {
    var source = nodeMap[relation[0]];
    var target = nodeMap[relation[1]];
    svg.appendChild(element("path", {
      d: relationPath(source, target, index),
      fill: "none",
      stroke: "#778794",
      "stroke-width": 1.4,
      "stroke-dasharray": "7 8"
    }));
  });

  nodes.forEach(function (rawNode) {
    var node = nodeMap[rawNode.id];
    var card = foreignObject(node.x - node.w / 2, node.y - node.h / 2, node.w, node.h, "ia-node " + node.type + (node.y === 600 ? " top" : "") + (node.id === "home" ? " root" : "") + (node.priority === "P1" ? " primary-node" : ""));
    var kind = document.createElementNS(xhtml, "span");
    kind.className = "kind";
    kind.textContent = copy[lang].types[node.type];
    var title = document.createElementNS(xhtml, "strong");
    title.textContent = rawNode[lang][0];
    var route = document.createElementNS(xhtml, "small");
    route.textContent = rawNode[lang][1];
    card.appendChild(kind);
    card.appendChild(title);
    card.appendChild(route);
    if (rawNode.priority) {
      var tag = document.createElementNS(xhtml, "span");
      tag.className = "priority-tag";
      tag.textContent = rawNode.priority;
      card.appendChild(tag);
    }
  });

  relations.forEach(function (relation, index) {
    var source = nodeMap[relation[0]];
    var target = nodeMap[relation[1]];
    var labelWidth = 170;
    var labelX = (source.x + target.x) / 2 - labelWidth / 2;
    var label = foreignObject(labelX, 2145 + index * 22, labelWidth, 30, "relation-label");
    label.textContent = isFa ? relation[3] : relation[2];
  });

  var principles = foreignObject(200, 2370, 5100, 112, "principle-strip");
  copy[lang].principles.forEach(function (item) {
    var principle = document.createElementNS(xhtml, "div");
    principle.className = "principle";
    var title = document.createElementNS(xhtml, "strong");
    title.textContent = item[0];
    var note = document.createElementNS(xhtml, "span");
    note.textContent = item[1];
    principle.appendChild(title);
    principle.appendChild(note);
    principles.appendChild(principle);
  });

  addText(isFa ? 5300 : 200, 2540, copy[lang].flowsKicker, "panel-kicker", "start");
  addText(isFa ? 5300 : 200, 2594, copy[lang].flowsTitle, "panel-title", "start");

  copy[lang].flows.forEach(function (flow, index) {
    var lane = foreignObject(200, 2640 + index * 175, 5100, 140, "flow-lane");
    var head = document.createElementNS(xhtml, "div");
    head.className = "flow-head";
    var number = document.createElementNS(xhtml, "span");
    number.className = "flow-number";
    number.textContent = flow[0];
    var headCopy = document.createElementNS(xhtml, "div");
    var headTitle = document.createElementNS(xhtml, "strong");
    headTitle.textContent = flow[1];
    var headNote = document.createElementNS(xhtml, "small");
    headNote.textContent = flow[2];
    headCopy.appendChild(headTitle);
    headCopy.appendChild(headNote);
    if (isFa) {
      head.appendChild(headCopy);
      head.appendChild(number);
    } else {
      head.appendChild(number);
      head.appendChild(headCopy);
    }

    var steps = document.createElementNS(xhtml, "div");
    steps.className = "flow-steps";
    flow[3].forEach(function (step, stepIndex) {
      var box = document.createElementNS(xhtml, "span");
      box.className = "flow-step";
      box.textContent = step;
      steps.appendChild(box);
      if (stepIndex < flow[3].length - 1) {
        var arrow = document.createElementNS(xhtml, "span");
        arrow.className = "flow-arrow";
        arrow.textContent = isFa ? "←" : "→";
        steps.appendChild(arrow);
      }
    });
    if (isFa) {
      lane.appendChild(steps);
      lane.appendChild(head);
    } else {
      lane.appendChild(head);
      lane.appendChild(steps);
    }
  });

  addText(isFa ? 5300 : 200, 3450, copy[lang].legend, "diagram-legend", "start");
})();
