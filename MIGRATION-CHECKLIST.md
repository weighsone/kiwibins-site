# Kiwibins Horowhenua – Migration Checklist

## Pages

| Original URL                              | New Astro page                         | Status    |
|-------------------------------------------|----------------------------------------|-----------|
| `/`                                       | `src/pages/index.astro`                | ✅ Done   |
| `/bins-and-prices/`                       | `src/pages/bins-and-prices.astro`      | ✅ Done   |
| `/when-and-where/`                        | `src/pages/when-and-where.astro`       | ✅ Done   |
| `/faq/`                                   | `src/pages/faq.astro`                  | ✅ Done   |
| `/contact-us/`                            | `src/pages/contact-us.astro`           | ✅ Done   |
| `/about-us/`                              | `src/pages/about-us.astro`             | ✅ Done   |
| `/direct-debit--120l/`                    | `src/pages/order/120l.astro`           | ✅ Done   |
| `/direct-debit--240l/`                    | `src/pages/order/240l.astro`           | ✅ Done   |
| *(new)* `/success/contact/`              | `src/pages/success/contact.astro`      | ✅ Done   |
| *(new)* `/success/order/`               | `src/pages/success/order.astro`        | ✅ Done   |

## Content parity

| Content item                                     | Migrated? | Notes |
|--------------------------------------------------|-----------|-------|
| Main tagline "Levin's local bin company…"        | ✅        | Hero on Home page |
| Service area description (Manawatu–Waitārere)    | ✅        | Home + When&Where |
| Phone 06 368 8586                                | ✅        | Header, Footer, Contact, About |
| Mobile 021 203 3205 (drum requests)              | ✅        | Header, Footer, Contact, About |
| Email info@kiwibinshorowhenua.co.nz              | ✅        | Header, Footer, Contact, About |
| Address 30 Queen St West, Levin 5510             | ✅        | Footer, About, Contact |
| Facebook link @kiwibins                          | ✅        | Header top-bar, Footer, About |
| 44-gallon drum pricing ($23/empty)               | ✅        | Bins & Prices |
| 120L bin pricing (weekly–yearly)                 | ✅        | Bins & Prices + Order page |
| 240L bin pricing (weekly–yearly)                 | ✅        | Bins & Prices + Order page |
| 660L bin pricing (from $45/week)                 | ✅        | Bins & Prices |
| 1100L bin pricing (from $70/week)                | ✅        | Bins & Prices |
| Levin Purple / Tuesday                           | ✅        | When&Where, schedule.json |
| Levin Orange / Wednesday                         | ✅        | When&Where, schedule.json |
| Levin Green / Thursday                           | ✅        | When&Where, schedule.json |
| Ohau / Wednesday                                 | ✅        | When&Where, schedule.json |
| Waitārere Beach / Monday                         | ✅        | When&Where, schedule.json |
| Manakau + Koputaroa / Alt Wed (fortnightly)      | ✅        | When&Where, schedule.json |
| "Bin kerbside by 7am" rule                       | ✅        | Home, When&Where, FAQ |
| All 5 FAQ questions + answers                    | ✅        | FAQ page with accordion |
| Weight limits (120L=15kg, 240L=30kg)             | ✅        | FAQ |
| Prohibited items list                            | ✅        | FAQ |
| Bin TLC care tips                                | ✅        | FAQ |
| Order form fields (120L + 240L)                  | ✅        | Order pages via Web3Forms |
| Contact form (name, email, phone, address, msg)  | ✅        | Contact page via Web3Forms |
| About Us – Adam & Judith Bignell owners          | ✅        | About page |
| About Us – previously Levin Mini Bins (2020)     | ✅        | About page |
| About Us – Eric drum specialist 25yr             | ✅        | About page |
| T&C discount (5%/10%/15%)                        | ✅        | BinCard component |
| "Deliver within 3 days" promise                  | ✅        | FAQ, Order success page |
| Copyright Kiwi Bins Horowhenua Ltd               | ✅        | Footer |

## Assets

| Asset                                      | Source / Location                             | Status    |
|--------------------------------------------|-----------------------------------------------|-----------|
| Wheelie Bin TLC – care sheet PDF           | `public/assets/pdfs/bin-care-sheet.pdf`       | ✅ Downloaded (80KB) |
| Bin Hire Agreement – T&C PDF               | `public/assets/pdfs/bin-hire-agreement.pdf`   | ✅ Downloaded (60KB) |
| Favicon (SVG)                              | `public/favicon.svg`                          | ✅ Created (SVG) |
| OG default image (social share)            | `public/assets/images/og-default.png`         | ⚠️ **NEEDED** – See README.txt |
| Service area GeoJSON                       | `public/data/service-areas.geojson`           | ✅ Created (indicative) |
| Collection schedule data                   | `src/data/schedule.json`                      | ✅ Created |

**Note on images:** The original Rocketspark site did not expose image URLs in its HTML (images appear to be served via Rocketspark's CDN). No photos were available for download. If you have photos (trucks, bins, team), add them to `public/assets/images/` and reference them in the relevant components/pages.

## SEO & Technical

| Item                                | Status    | Notes |
|-------------------------------------|-----------|-------|
| Correct `<title>` per page          | ✅        | Via Layout.astro |
| Meta descriptions per page          | ✅        | Via Layout.astro |
| Open Graph tags                     | ✅        | Via Layout.astro |
| Canonical URLs                      | ✅        | Via Layout.astro |
| Schema.org LocalBusiness JSON-LD    | ✅        | Via Layout.astro |
| Schema.org FAQPage markup           | ✅        | FAQ page |
| XML Sitemap                         | ✅        | @astrojs/sitemap auto-generates |
| robots.txt                          | ✅        | `public/robots.txt` |
| Skip link for accessibility         | ✅        | Layout.astro |
| aria-labels on interactive elements | ✅        | All components |
| Semantic HTML (landmark elements)   | ✅        | main, section, nav, header, footer |
| Mobile-first responsive layout      | ✅        | Tailwind breakpoints |
| Focus-visible states                | ✅        | global.css |
| Colour contrast (WCAG AA)           | ✅        | kiwi-900 on white / white on kiwi-700+ |

## Forms (Web3Forms)

| Form                  | Redirect URL                                                        | Status |
|-----------------------|---------------------------------------------------------------------|--------|
| Contact form          | `https://weighsone.github.io/kiwibins-site/success/contact/`       | ✅     |
| 120L order form       | `https://weighsone.github.io/kiwibins-site/success/order/`         | ✅     |
| 240L order form       | `https://weighsone.github.io/kiwibins-site/success/order/`         | ✅     |

**Before deploying:** Set `PUBLIC_WEB3FORMS_KEY` in GitHub Secrets (Settings → Secrets → Actions).

## Missing / To Confirm

- [ ] **OG image**: Create `public/assets/images/og-default.png` (1200×630px)
- [ ] **Photos**: If you have product/truck/team photos, add them to `public/assets/images/`
- [ ] **Exact Levin zones**: The purple/orange/green zone boundary split for Levin streets is not published on the site. If you have a zone map, update `public/data/service-areas.geojson` with accurate polygons
- [ ] **Web3Forms key**: Add `PUBLIC_WEB3FORMS_KEY` to `.env` locally and to GitHub Secrets for CI
- [ ] **GA Measurement ID**: Optional – add `PUBLIC_GA_MEASUREMENT_ID` if you want analytics (e.g. `G-XXXXXXXXXX`)
- [ ] **`/about-us/` 404**: The original about-us page returned 404. Content was sourced from the homepage and web search. Verify accuracy
- [ ] **Fortnightly schedule dates**: Manakau/Koputaroa are on alternate Wednesdays – confirm the specific alternating week with Adam/Judith so customers can check their next date

---

## How to update collection schedules

Edit `src/data/schedule.json` to change area names, days, frequencies, or notes.
The CollectionMap component reads this file at build time and renders both the
interactive dropdown and the schedule table automatically.

Example – add a new area:
```json
{
  "id": "foxton-beach",
  "name": "Foxton Beach",
  "day": "Friday",
  "frequency": "Weekly",
  "color": "#0891b2",
  "binColor": "Standard",
  "notes": "Have your kiwibin kerbside by 7am.",
  "lat": -40.4667,
  "lng": 175.2167
}
```

Add the corresponding GeoJSON point to `public/data/service-areas.geojson` if you want a map marker for the new area.
