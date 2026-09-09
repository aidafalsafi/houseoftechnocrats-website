(function () {
  "use strict";

  var isFa = document.documentElement.lang === "fa";
  var direction = isFa ? "rtl" : "ltr";
  var canvasWidth = 4200;
  var canvasHeight = 2200;
  var nodeWidth = 270;
  var nodeHeight = 140;
  var rootWidth = 330;
  var rootHeight = 132;
  var leafStep = 305;
  var marginX = 170;
  var levelY = [250, 610, 1010, 1400];
  var cursor = 0;
  var positions = {};

  var copy = {
    en: {
      eyebrow: "HOUSE OF TECHNOCRATS / CURRENT SITE / INFORMATION ARCHITECTURE",
      title: "Site Page Tree",
      meta: "21 routable pages · solid lines: parent–child flow · dashed lines: cross-page relationship",
      legend: "PRIMARY PAGE HIERARCHY",
      crossLegend: "CROSS-PAGE LINKS",
      date: "02 AUG 2026",
      types: {
        landing: "LANDING",
        page: "PAGE",
        directory: "DIRECTORY",
        detail: "DETAIL",
        media: "MEDIA",
        profile: "PROFILE",
        form: "FORM",
        private: "PRIVATE ROUTE",
        utility: "GLOBAL UTILITY"
      }
    },
    fa: {
      eyebrow: "خانه تکنوکرات‌ها / سایت فعلی / معماری اطلاعات",
      title: "درخت صفحه‌های سایت",
      meta: "۲۱ صفحهٔ قابل مسیریابی · خط پیوسته: جریان والد–فرزند · خط‌چین: رابطهٔ میان‌صفحه‌ای",
      legend: "سلسله‌مراتب اصلی صفحه‌ها",
      crossLegend: "پیوندهای میان‌صفحه‌ای",
      date: "۱۱ مرداد ۱۴۰۵",
      types: {
        landing: "صفحهٔ ورودی",
        page: "صفحه",
        directory: "فهرست",
        detail: "جزئیات",
        media: "رسانه",
        profile: "نمایه",
        form: "فرم",
        private: "مسیر خصوصی",
        utility: "ابزار سراسری"
      }
    }
  };

  var pages = {
    id: "home",
    type: "landing",
    en: ["Home", "index.html"],
    fa: ["صفحهٔ اصلی", "نقطهٔ ورود اصلی"],
    children: [
      {
        id: "continuity",
        type: "page",
        en: ["Continuity", "continuity.html"],
        fa: ["تداوم", "ستون موضوعی تداوم"]
      },
      {
        id: "radar",
        type: "page",
        en: ["Deep Blue Radar", "radar.html · reports"],
        fa: ["رادار دیپ‌بلو", "نمای کلی و گزارش‌ها"],
        children: [
          {
            id: "radar-view",
            type: "page",
            en: ["Explore the Radar", "radar-view.html"],
            fa: ["کاوش در رادار", "نمای تعاملی"]
          },
          {
            id: "categories",
            type: "directory",
            en: ["Categories", "categories.html"],
            fa: ["دسته‌بندی‌ها", "فهرست حوزه‌های نگرانی"],
            children: [
              {
                id: "category-detail",
                type: "detail",
                en: ["Continuity Architecture", "category detail"],
                fa: ["معماری تداوم", "جزئیات دسته‌بندی"]
              }
            ]
          },
          {
            id: "patterns",
            type: "directory",
            en: ["Patterns", "patterns.html"],
            fa: ["الگوها", "فهرست الگوهای مستند"],
            children: [
              {
                id: "pattern-detail",
                type: "detail",
                en: ["Modular survivability", "pattern detail"],
                fa: ["معماری بقاپذیر", "جزئیات الگو"]
              }
            ]
          }
        ]
      },
      {
        id: "insights",
        type: "directory",
        en: ["Insights", "insights.html"],
        fa: ["بینش‌ها", "کتابخانهٔ دانش"],
        children: [
          {
            id: "article",
            type: "media",
            en: ["Technical vs customer recovery", "article"],
            fa: ["بازیابی فنی و مشتری", "مقالهٔ مدیریتی"]
          },
          {
            id: "video",
            type: "media",
            en: ["Decomposing core banking", "videocast"],
            fa: ["تجزیهٔ بانکداری متمرکز", "ویدیوکست"]
          },
          {
            id: "podcast",
            type: "media",
            en: ["Continuity in the ecosystem", "podcast"],
            fa: ["تداوم در زیست‌بوم", "پادکست"]
          }
        ]
      },
      {
        id: "people",
        type: "directory",
        en: ["People", "people.html"],
        fa: ["افراد", "فهرست مشارکت‌کنندگان"],
        children: [
          {
            id: "person",
            type: "profile",
            en: ["Person profile", "person.html"],
            fa: ["نمایهٔ فرد", "زندگی‌نامه و مشارکت"]
          }
        ]
      },
      {
        id: "house",
        type: "page",
        en: ["The House", "house.html"],
        fa: ["خانه", "نهاد، نقش‌ها و تماس"]
      },
      {
        id: "participate",
        type: "page",
        en: ["Participate", "participate.html"],
        fa: ["مشارکت", "مرکز انتخاب مسیر"],
        children: [
          {
            id: "invitation",
            type: "private",
            en: ["Invitation", "invitation.html"],
            fa: ["دعوت‌نامه", "مسیر خصوصی"],
            children: [
              {
                id: "activation",
                type: "form",
                en: ["Invitation activation", "activation.html"],
                fa: ["فعال‌سازی دعوت‌نامه", "تکمیل ثبت‌نام"]
              }
            ]
          },
          {
            id: "membership",
            type: "form",
            en: ["Membership request", "membership.html"],
            fa: ["درخواست عضویت", "فرم عمومی"]
          },
          {
            id: "referral",
            type: "form",
            en: ["Refer a technocrat", "referral.html"],
            fa: ["معرفی تکنوکرات", "فرم اعضا"]
          }
        ]
      },
      {
        id: "search",
        type: "utility",
        en: ["Search Results", "search.html · all public objects"],
        fa: ["نتایج جست‌وجو", "همهٔ اشیای عمومی"]
      }
    ]
  };

  var crossLinks = [
    ["category-detail", "pattern-detail", "Category → Pattern", "دسته‌بندی ← الگو"],
    ["article", "category-detail", "Related category", "دسته‌بندی مرتبط"],
    ["podcast", "person", "Contributors", "مشارکت‌کنندگان"],
    ["participate", "podcast", "Join a conversation", "پیوستن به گفت‌وگو"],
    ["participate", "video", "Participate in media", "مشارکت در رسانه"],
    ["participate", "insights", "Share insight / evidence", "اشتراک بینش و شواهد"],
    ["participate", "house", "Visit / contact", "بازدید و تماس"]
  ];

  function leafCount(node) {
    if (!node.children || !node.children.length) return 1;
    return node.children.reduce(function (sum, child) {
      return sum + leafCount(child);
    }, 0);
  }

  function layout(node, depth) {
    var x;
    if (!node.children || !node.children.length) {
      x = marginX + cursor * leafStep + leafStep / 2;
      cursor += 1;
    } else {
      var childPositions = node.children.map(function (child) {
        return layout(child, depth + 1);
      });
      x = (childPositions[0].x + childPositions[childPositions.length - 1].x) / 2;
    }
    positions[node.id] = { x: x, y: levelY[depth], depth: depth, node: node };
    return positions[node.id];
  }

  leafCount(pages);
  layout(pages, 0);

  var contentWidth = cursor * leafStep;
  var offset = (canvasWidth - contentWidth) / 2;
  Object.keys(positions).forEach(function (key) {
    positions[key].x += offset - marginX;
    if (isFa) positions[key].x = canvasWidth - positions[key].x;
  });

  var svg = document.getElementById("tree-svg");
  var ns = "http://www.w3.org/2000/svg";
  var xhtml = "http://www.w3.org/1999/xhtml";

  function svgElement(name, attributes) {
    var element = document.createElementNS(ns, name);
    Object.keys(attributes || {}).forEach(function (key) {
      element.setAttribute(key, attributes[key]);
    });
    return element;
  }

  function addText(x, y, value, className, anchor) {
    var text = svgElement("text", {
      x: x,
      y: y,
      class: className,
      direction: direction,
      "text-anchor": anchor || "start"
    });
    text.textContent = value;
    svg.appendChild(text);
  }

  var defs = svgElement("defs");
  var marker = svgElement("marker", {
    id: "arrow",
    viewBox: "0 0 10 10",
    refX: "8",
    refY: "5",
    markerWidth: "7",
    markerHeight: "7",
    orient: "auto-start-reverse"
  });
  marker.appendChild(svgElement("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#778794" }));
  defs.appendChild(marker);
  svg.appendChild(defs);

  addText(isFa ? 4020 : 180, 68, copy[isFa ? "fa" : "en"].eyebrow, "diagram-eyebrow", "start");
  addText(isFa ? 4020 : 180, 126, copy[isFa ? "fa" : "en"].title, "diagram-title", "start");
  addText(isFa ? 180 : 4020, 92, copy[isFa ? "fa" : "en"].meta, "diagram-meta", "end");
  addText(isFa ? 180 : 4020, 126, copy[isFa ? "fa" : "en"].date, "diagram-eyebrow", "end");
  svg.appendChild(svgElement("line", { x1: 180, y1: 154, x2: 4020, y2: 154, stroke: "#1d4667", "stroke-width": 1 }));

  function drawTreeEdges(node) {
    if (!node.children) return;
    var parent = positions[node.id];
    node.children.forEach(function (child) {
      var target = positions[child.id];
      var parentHeight = node.id === "home" ? rootHeight : nodeHeight;
      var startY = parent.y + parentHeight / 2;
      var endY = target.y - nodeHeight / 2;
      var middleY = startY + (endY - startY) * 0.48;
      svg.appendChild(svgElement("path", {
        d: "M " + parent.x + " " + startY + " V " + middleY + " H " + target.x + " V " + endY,
        fill: "none",
        stroke: "#1d4667",
        "stroke-width": 2
      }));
      drawTreeEdges(child);
    });
  }

  drawTreeEdges(pages);

  var crossBase = 1600;
  crossLinks.forEach(function (link, index) {
    var source = positions[link[0]];
    var target = positions[link[1]];
    var lane = crossBase + index * 54;
    var sourceY = source.y + nodeHeight / 2;
    var targetY = target.y + nodeHeight / 2;
    svg.appendChild(svgElement("path", {
      d: "M " + source.x + " " + sourceY + " V " + lane + " H " + target.x + " V " + targetY,
      fill: "none",
      stroke: "#778794",
      "stroke-width": 1.5,
      "stroke-dasharray": "8 8",
      "marker-end": "url(#arrow)"
    }));

    var labelWidth = 190;
    var labelHeight = 34;
    var labelX = (source.x + target.x) / 2 - labelWidth / 2;
    var foreign = svgElement("foreignObject", {
      x: labelX,
      y: lane - labelHeight / 2,
      width: labelWidth,
      height: labelHeight
    });
    var label = document.createElementNS(xhtml, "div");
    label.className = "cross-label";
    label.dir = direction;
    label.textContent = isFa ? link[3] : link[2];
    foreign.appendChild(label);
    svg.appendChild(foreign);
  });

  function drawNodes(node) {
    var position = positions[node.id];
    var width = node.id === "home" ? rootWidth : nodeWidth;
    var height = node.id === "home" ? rootHeight : nodeHeight;
    var foreign = svgElement("foreignObject", {
      x: position.x - width / 2,
      y: position.y - height / 2,
      width: width,
      height: height
    });
    var card = document.createElementNS(xhtml, "div");
    card.className = "tree-node " + node.type + (position.depth === 1 ? " top" : "") + (node.id === "home" ? " root" : "");
    card.dir = direction;

    var kind = document.createElementNS(xhtml, "span");
    kind.className = "kind";
    kind.textContent = copy[isFa ? "fa" : "en"].types[node.type];

    var title = document.createElementNS(xhtml, "strong");
    title.textContent = node[isFa ? "fa" : "en"][0];

    var route = document.createElementNS(xhtml, "small");
    route.textContent = node[isFa ? "fa" : "en"][1];

    card.appendChild(kind);
    card.appendChild(title);
    card.appendChild(route);
    foreign.appendChild(card);
    svg.appendChild(foreign);

    (node.children || []).forEach(drawNodes);
  }

  drawNodes(pages);

  addText(isFa ? 4020 : 180, 2118, copy[isFa ? "fa" : "en"].legend, "diagram-legend", "start");
  addText(isFa ? 180 : 4020, 2118, copy[isFa ? "fa" : "en"].crossLegend, "diagram-legend", "end");
})();
