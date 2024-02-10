import blockContent from './blockContent'
import nav from './nav'
import footer from './footer'
import {promotionType} from './components/promotion'
import {formType} from './components/form'
import {heroType} from './components/hero'
import {imageGalleryType} from './components/imageGallery'
import {pageType} from './page'
import {textWithIllustrationType} from './components/textWithIllustration'
import {videoType} from './components/video'
import {textBlockType} from './components/textBlock'
import { textWithLocationType } from './components/textWithLocation'

export const schemaTypes = [
    nav,
    footer,
    blockContent,
    pageType,
    heroType,
    promotionType,
    textWithIllustrationType,
    imageGalleryType,
    formType,
    videoType,
    textBlockType,
    textWithLocationType,
]
