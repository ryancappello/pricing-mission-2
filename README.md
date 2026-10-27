# Smart Sort Competitive Pricing Intelligence

Static, dependency-free dashboard for Mission 2. Includes competitor profiles and selection comparison, sortable offer register, representative price bars, single-product ranges, distribution population switch, price explorer with quartile scenarios, opportunities and source trail.

## Run and build
Use Node 22+: `npm test`, then `npm run build`. Preview dist with `python3 -m http.server 8765 --directory dist` and visit http://localhost:8765. Opening HTML directly via file:// cannot fetch JSON. No API keys, paid services, database or runtime backend required.

## Data
`data.json` is an unchanged copy of supplied competitor_data.json, cross-checked against competitor_research.xlsx and competitor_analysis.docx. Research date October 27, 2026. Five indirect competitors, eight offers, six comparable single-unit products, five representatives. Two bundles are excluded from product statistics. Representative min $14.88, max $150, median $40, mean $64.972 (display $64.97). Missing availability stays unknown; regular prices are not established. Source verification comes from the supplied research, not new live checks. Prices are historical snapshots.

Classification uses linear-interpolated representative Q1 $29.99 and Q3 $89.99, with outside-range categories. Comparable-price tolerance ±5% is a declared display convention. Presets are Q1, median and Q3. Preliminary recommendation $149–$199 is distinct from exploratory selection. No demand, revenue, profit or cost modeling.

## GitHub Pages
Target https://github.com/ryancappello/pricing-mission-2.git. All runtime paths are relative, so repository subpaths work. Live site: https://ryancappello.github.io/pricing-mission-2/. GitHub Pages deploys directly from main / (root); root runtime files match the successful dist build. Set repository Settings → Pages → Source → Deploy from a branch → main → /(root). No external frontend packages are necessary.

## Verification
`npm test` checks imported populations, joins, statistics, classification boundaries, filters, sorting and source URL syntax. See TESTING.md for browser validation and publication status.
