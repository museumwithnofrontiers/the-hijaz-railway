import { exhibitionConfig } from '@museumwnf/viewer-layout/dxa'

// The whole declaration of this website: a DXA exhibition, whose pages,
// shell, menu, sponsor strip and legacy redirects are the family's
// (`exhibitionConfig`, @museumwnf/viewer-layout/dxa). What is this
// exhibition's own is below.

// The source-database chip's colour, per project: one of
// @museumwnf/viewer-layout's `mwnf-chip--<name>` classes for every project id
// the package's `manifest.projects` carries.
// A record with no project at all is an Explore record, whose chip the
// family draws itself.
export const projectColors = {
  '0f031e22-6dc6-5ce6-b94b-9bb88345140c': 'mwnf-chip--AWE', // Sharing History
  '61c122ac-ea86-5462-8bab-6b86138c49b2': 'mwnf-chip--ISLandEPM', // Discover Islamic Art
  '928f5e0d-53e3-5f53-b9c2-5af389c30dd4': 'mwnf-chip--ISLandEPM', // Explore Islamic Art Collections — shares Discover Islamic Art's colour
  'e08d1c71-8cff-5fe9-b480-2ae6c530b732': 'mwnf-chip--EXH', // The Hijaz Railway
}

// The projects whose item sheets still carry legacy's Explore-partner notice.
export const noticeProjects = [
  '928f5e0d-53e3-5f53-b9c2-5af389c30dd4', // Explore Islamic Art Collections
]

export default exhibitionConfig({
  // The dataset package this website renders. Must match the alias in
  // vite.config.js and the dependency in package.json.
  datasetPackage: '@museumwnf/the-hijaz-railway-data',

  // The name for a package that predates `manifest.site`.
  siteName: 'The Hijaz Railway',

  // The address this build is deployed at, base path included, read by the
  // source credit: the GitHub Pages address, the same repository segment
  // vite.config.js's `base` puts in the build's base path, so the two change
  // together, and with the domain.
  origin: 'https://museumwithnofrontiers.github.io/the-hijaz-railway',

  projectColors,
  noticeProjects,

  // The credits page's body.
  creditsBody: 'theHijazRailway.credits.body',
})
