import styles from "./textWithImage.module.css";
import { ITextWithImage } from "@/lib/types";
import { urlFor } from "@/lib/api";
import { PortableText } from "@portabletext/react";

const components = {
  marks: {
    internalLink: ({value, children}: any) => {
      const {slug = {}} = value
      const href = `/${slug.current}`
      return <a href={href}>{children}</a>
    },
    link: ({value, children}: any) => {
      const { blank, href } = value
      return blank ?
        <a href={href} target="_blank" rel="noreferrer">{children}</a>
        : <a href={href}>{children}</a>
    }

  }
}


const TextWithImage = ({ heading, excerpt, image, reverse_row }: ITextWithImage) => {
  return (
    <div className={`${styles.panel}`}>
        <div className={`${styles.content} ${reverse_row && styles.panel_reverse}`}>
            <div className={styles.block}>
            {heading && <h3>{heading}</h3>}
            <div
                className={styles.text}
            >
            <PortableText
              value={excerpt}
              components={components}
            />
            </div>
            </div>
            <div className={styles.image}>
              {image?.asset?._ref &&
                <img src={urlFor(image.asset._ref).url()} alt={image.alt} />
              }
            </div>
        </div>
    </div>
  );
};

export default TextWithImage;