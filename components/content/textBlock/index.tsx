import { ITextBlock } from "@/lib/types";
import Link from "next/link";
import styles from "./textBlock.module.css";

const TextBlock = ({ heading, content, button, center }: ITextBlock) => {
  return (
    <div className={styles.panel}>
        <div className={`${styles.content} ${center ? styles.contentCenter : null}`}>
            {heading ? <h3>{heading}</h3> : null}
            <div
                className={styles.content_block}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            {button?.url ?
              <>
                  <Link href={button.url} as={button.url} className={`btn primary ${styles.cta}`}>
                      {button.text}
                  </Link>
              </>
            : null}
        </div>
    </div>
  );
};

export default TextBlock;