
import Hero from "@/components/content/hero";
import TextWithImage from "./content/textWithImage";
import Promotion from "./content/promotion";
import { IContentField } from "@/lib/types";
import TextBlock from "./content/textBlock";
import TextWithLocation from "./content/location";
import ImageGallery from "./content/imageGallery";

interface IPageContent {
    content: IContentField[]
}

const PageContent = ({ content }: IPageContent) => {
  if (!content) return null;
  return (
    <>
      {content?.map((field: IContentField, i: number) => {
        if (field?._type === "hero") {
          return <Hero key={i} {...field} />;
        }
        if (field?._type === "textWithIllustration") {
          return <TextWithImage key={i} {...field} />;
        }
        if (field?._type === "textBlock") {
          return <TextBlock key={i} {...field} />;
        }
        if (field?._type === "promotion") {
          return <Promotion key={i} {...field} />;
        }
        if (field?._type === "textWithLocation") {
          return <TextWithLocation key={i} {...field} />;
        }
        if (field?._type === "gallery") {
          return <ImageGallery key={i} {...field} />;
        }
        console.log(JSON.stringify(field, null, 2));
        return <pre key={i}>{JSON.stringify(field, null, 2)}</pre>;
      })}
    </>
  );
};

export default PageContent;