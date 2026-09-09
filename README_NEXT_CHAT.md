# DBR Content Source Export

This static site is an export of the current DBR / House of Technocrats V3 working site.

Use it in another Codex chat as the content source and linked-page reference. The next chat can redesign pages freely, but should preserve:

- bilingual English/Persian content
- page routes and profile IDs
- people profile content and images
- Deep Blue Radar category and pattern relationships
- DBR AIDA content hierarchy

Suggested prompt for the next chat:

```text
Use this folder as the content-source version of the DBR / House of Technocrats site.
Do not treat the current visual design as final. I want to work on page design separately.
Preserve the content, routes, language switching, people profiles, and DBR category/pattern structure unless I explicitly ask to change content.
```

Open locally with:

```bash
cd "/Users/aida/Documents/With Amin/DBR-content-source-export"
python3 -m http.server 8917 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8917/index.html?lang=en
```
