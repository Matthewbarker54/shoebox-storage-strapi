import { ITextBlock } from "@/lib/types";
import Link from "next/link";
import styles from "./textBlock.module.css";
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

const TextBlock = ({ heading, content, button, center }: ITextBlock) => {

  return (
    <div className={styles.panel}>
        <div className={`${styles.content} ${center ? styles.contentCenter : null}`}>
            {heading ? <h3>{heading}</h3> : null}
            <div
                className={styles.content_block}
            >
            <PortableText
              value={content}
              components={components}
            />
            </div>
            {button?.internalLink ?
              <Link 
                href={button.internalLink} 
                as={button.internalLink} 
                className={`btn primary ${styles.cta}`}
              >
                  {button.text}
              </Link>
            : button?.link?.href ?
              <Link 
                href={button.link.href} 
                as={button.link.href} 
                className={`btn primary ${styles.cta}`} 
                target={button.link.blank ? '_blank': ''}
                rel="noreferrer"
              >
                {button.text}
              </Link>
            : null}
        </div>
    </div>
  );
};

export default TextBlock;