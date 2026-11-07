# Reference inspection and design specification

## Reference access

Inspected on 7 November 2026:

- https://www.gsu.edu.ng/ — downloaded the actual homepage HTML, identified navigation and image assets, inspected font declarations, inline colours and the responsive stylesheet. Its certificate was expired; certificate verification was bypassed only for this read-only inspection. The generated theme stylesheet returned HTTP 500.
- https://neu.edu.ng/ — downloaded homepage HTML and the combined header stylesheet. Identified navigation structure, hero copy, programme and academic sections, news, campus life, resources and footer.

No rendered browser or screenshot inspection was available. Mobile behaviour was inferred from markup and stylesheet media queries, not verified on devices. No claim of pixel-level visual matching is made.

## Main direction: Gombe State University

GSU offers the clearest institutional structure for this stage: logo/identity at the left of a white header, utility links and search to the right, a separate horizontal navigation tier, a broad campus image carousel, latest-news notices, a welcome section, institutional information and programmes, news and footer link columns. Its homepage references Oxygen and Source Sans Pro and uses the blue #344ea3 in inline styling. Its slideshow image assets commonly use a 1060:460 ratio. Its responsive stylesheet includes navigation and layout adjustments at desktop, tablet and narrow phone breakpoints.

The implementation follows those structural choices with a compact light utility bar, white identity row, blue navigation, left-captioned photographic carousel, announcement bar, welcome, values, learning pathways, news, campus life and a multi-column dark footer. Source Sans 3 and Oxygen provide a related typographic treatment. Blue is the principal accent, with restrained gold details. Cards remain rectangular and motion is limited to hover feedback. On small screens navigation becomes a button-controlled vertical menu and columns stack rather than shrink.

NEU supplements this direction with clearly labelled academic pathways, admissions calls to action, campus-life imagery and a simpler public route hierarchy. The implemented navigation prioritises About, Administration, Academics, Programmes, Admissions, School Life, News, Events, Gallery and Contact. There are no non-working portal links.

## Identity and content

No official school identity was supplied. Savannah School is explicitly a demonstration identity. The book monogram is an illustrative mark, not an official institutional crest. Academic pathways and stories are sample content. Official dates, statistics, accreditation, contact details and appointments are deliberately absent. Contact and admissions pages explain their information-only status.

## Photographs

Official reference assets were identified (GSU entrance gate, drive, laboratories, faculty buildings, logo; NEU news photographs, campus aerial photograph, student life images and logo), but no reusable licence was established. They were not copied.

Local replacement photographs were downloaded successfully from Unsplash's image service, under the Unsplash licence: https://unsplash.com/license. These are illustrative educational stock photographs and are not represented as the sample school’s own campus. No affiliation or endorsement is implied.

| Local file | Original photograph |
| --- | --- |
| campus.jpg | https://images.unsplash.com/photo-1562774053-701939374585 |
| students.jpg | https://images.unsplash.com/photo-1523240795612-9a054b0db644 |
| library.jpg | https://images.unsplash.com/photo-1507842217343-583bb7270b66 |
| science.jpg | https://images.unsplash.com/photo-1532094349884-543bc11b234d |
| classroom.jpg | https://images.unsplash.com/photo-1509062522246-3755977927d7 |

All five final sources returned HTTP 200 image/jpeg when downloaded. One originally selected classroom URL returned 404 and was replaced before implementation. Local originals remove runtime dependence on Unsplash. Images use responsive Netlify Image CDN sizes and WebP, with local original fallbacks. All layouts crop without stretching; below-fold images load lazily.

## Validation and differences

Source files, route declarations, navigation targets and local image paths were reviewed. No build, type-check command, browser session or preview deployment was run because this environment delegates validation and deployment to the hosting pipeline. A successful production build or working deployed preview cannot be claimed at this stage.

Remaining differences include the sample identity and copy, licensed replacement campus imagery, simplified institutional navigation, reduced homepage content density, the illustrative book mark, and no video or newsletter form. Official deep reference pages were not inspected. Mobile, keyboard and gallery interactions require browser verification after deployment. Share metadata is set; no custom social image is supplied.
