# Validation record

October 27, 2026

- Node tests passed: five unique competitors; eight offers; six comparable single-unit products; five representatives; correct joins; source HTTPS URL syntax; min 14.88; max 150; median 40; mean 64.972; Q1 29.99; Q3 89.99; price classification boundaries; search, classification/position filters and descending sort.
- Production build succeeded using bundled Node, with no dependencies to install.
- Browser loaded actual application and JSON successfully. Tested middle-price preset ($40), numeric price ($199), keyboard slider ($198.99), IKEA search, Direct empty state, reset, two selected competitors and comparison details, descending competitor sort, single-product register (six rows), promotional register (one $182 set), and representative distribution (3/1/0/1 across the four bands).
- Desktop (1440px) and mobile (390px) responsive layouts inspected. Mobile document width and scroll width both 390px, with table horizontal scrolling contained in its panel.
- No captured JavaScript console errors in local browser test.
- Source links checked for URL syntax and original data preservation, not fresh retailer availability or current-price verification.
- Dashboard source committed to GitHub through the signed-in browser (initial upload commit ae69d92294be23ccb6866c0a0862d8343bb3ea5e). GitHub Pages configured from main / (root).
- Published site verified accessible: https://ryancappello.github.io/pricing-mission-2/. Live data loaded all KPI values; middle preset produced $40 median comparison, IKEA search returned exactly IKEA, reset restored profiles, and numeric price restored $174. No captured live JavaScript console errors.
- Source verification remains historical; retailer prices were not rechecked.
