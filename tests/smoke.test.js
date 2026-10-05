import { describeExhibitionSmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/exhibition'
import manifest from '@museumwnf/the-hijaz-railway-data'
import partnerNames from '@museumwnf/the-hijaz-railway-data/translations/partners.en.json'
import dynastyNames from '@museumwnf/the-hijaz-railway-data/translations/dynasties.en.json'
import ownTexts from '../locales/en.json'
import config, { noticeProjects, projectColors } from '../src/dataset.config.js'

// The exhibition family's smoke test, run against this exhibition's own
// package (@museumwnf/viewer-layout/dxa/testing).
describeExhibitionSmoke({
  config,
  noticeProjects,
  projectColors,
  sharedTexts,
  ownTexts,
  manifest,
  partnerNames,
  dynastyNames,
  namespace: 'theHijazRailway',
  collection: { tiles: 9, paginations: 2 },
})
