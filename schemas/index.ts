import blockContent from './blockContent'
import nav from './nav'
import footer from './footer'
import homepage from './homepage'
import {formType} from './components/form'
import {heroType} from './components/hero'
import {imageGalleryType} from './components/imageGallery'
import {pageType} from './page'
import {textWithIllustrationType} from './components/textWithIllustration'
import {videoType} from './components/textWithVideo'
import {textBlockType} from './components/textBlock'
import { textWithLocationType } from './components/textWithLocation'


import {settingsType} from './settings'
export const schemaTypes = [
    nav,
    footer,
    blockContent,
    pageType,
    heroType,
    textWithIllustrationType,
    imageGalleryType,
    formType,
    videoType,
    textBlockType,
    textWithLocationType,
    // ---------
    homepage,
    settingsType,
]
