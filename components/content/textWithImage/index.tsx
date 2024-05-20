import styles from "./textWithImage.module.css";
import { ITextWithImage } from "@/lib/types";
import { urlForImage } from "@/lib/query";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

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
        {heading || excerpt ?
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
        : null}
        <div className={`${styles.image} ${!heading || !excerpt ? styles.panel_full : ''}`}>
          {image?.asset?._ref &&
            <Image width={500} height={500} src={urlForImage(image.asset._ref).url()} alt={image.alt} />
          }
        </div>
      </div>
    </div>
  );
};

export default TextWithImage;