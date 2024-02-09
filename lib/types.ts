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
      textFirst: string,
      textSecond: string,
      bottomText:string,
      logo: IImage,
    },
  }
  
  export interface IImage {
    alt?: string,
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
  | IPromotion
  | ITextBlock
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
    excerpt: string,
    _type: 'textWithIllustration',
    image: IImage,
    reverse_row?: boolean,
  }

  export interface IPromotion {
    title: string,
    link: string,
    _type: 'promotion',
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
    content: string;
    button: {
      text: string;
      url: string;
    };
    center: boolean;
  }
  