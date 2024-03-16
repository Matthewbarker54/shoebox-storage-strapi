  export interface IMenu {
    nav: INav,
    footer: IFooter,
    navLinks: ILinks[]
    menuLinksFirst: ILinks[]
    menuLinksSecond: ILinks[]
  }

  export interface INav {
    nav: {
      _id: number,
      title: string,
      cta: {
        text: string,
        url: string,
      },
      menuLink: {
        _ref: string,
      }[],
      logo: IImage,
    },
    
  }

  export interface IFooter {
    footer: {
      _id: number,
      facebook: string,
      twitter: string,
      instagram: string,
      linkedin: string,
      textFirst: IContentArray,
      textSecond: IContentArray,
      bottomText:string,
      logo: IImage,
    },
  }
  
  export interface IImage {
    alt: string,
    asset: {
      _ref: string,
    },
  }

  export interface ILinks {
    title: string,
    slug: {
      current: string,
    },
  }

  export type IContentField =
  | IHero
  | IForm
  | ITextWithImage
  | ITextBlock
  | ITextWithLocation
  | IImageGallery
  | ITextWithVideo
  | undefined;

  export interface IPage {
    title: string,
    _id: string,
    _type: string,
    pageBuilder: IContentField[],
  }

  export interface IHero {
    heading: string,
    tagline: string,
    _type: 'hero',
    image: IImage,
  }

  export interface ITextWithImage {
    heading: string,
    excerpt: IContentArray,
    _type: 'textWithIllustration',
    image: IImage,
    reverse_row?: boolean,
  }

  export interface ITextWithVideo {
    heading: string,
    excerpt: IContentArray,
    _type: 'textWithVideo',
    video: any,
    reverse_row?: boolean,
  }

  export interface IForm {
    label: string,
    heading: string,
    form: string,
    _type: 'form',
  }

  export interface ITextBlock {
    _type: 'textBlock',
    heading: string;
    content: IContentArray;
    button: {
      text: string;
      link?: {
        href: string;
        blank: boolean;
      };
      internalLink?: {
        reference: {
          _ref: string;
        }
      }
    };
    center: boolean;
  }

  export interface IContentArray {
    _type: string,
    _key: string;
    children: {
      _key: string,
      _type: string,
      text: string,
      marks: [],
    }[];
    markDefs: [];
    style: string;
  }

  export interface ITextWithLocation {
    heading: string,
    excerpt: IContentArray,
    _type: 'textWithLocation',
    location: {
      mapCenterX: string,
      mapCenterY: string,
      mapMarkerX: string,
      mapMarkerY: string,
    }
    reverse_row?: boolean,
  }
  
  export interface IImageGallery {
    _type: 'gallery',
    images: IImage[],
  }