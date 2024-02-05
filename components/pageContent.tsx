
import Hero from "@/components/content/hero";
import FormExample from "./content/form";
import TextWithImage from "./content/textWithImage";
import Promotion from "./content/promotion";
import { IContentField } from "@/lib/types";

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
        if (field?._type === "promotion") {
          return <Promotion key={i} {...field} />;
        }
        // Forms
        if (field?._type === "form") {
          return <FormExample key={i} {...field} />;
        }
        console.log(JSON.stringify(field, null, 2));
        return <pre key={i}>{JSON.stringify(field, null, 2)}</pre>;
      })}
    </>
  );
};

export default PageContent;