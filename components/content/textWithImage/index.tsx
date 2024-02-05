import { cleanImageURL } from "lib/helpers";
import styles from "./textWithImage.module.css";
import { ITextWithImage } from "@/lib/types";
import { urlFor } from "@/lib/api";

const TextWithImage = ({ heading, excerpt, image, reverse_row }: ITextWithImage) => {
  return (
    <div className={`${styles.panel}`}>
        <div className={`${styles.content} ${reverse_row ? styles.panel_reverse : ""}`}>
            <div className={styles.block}>
            {heading ? <h3>{heading}</h3> : null}
            <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: excerpt }}
            ></div>
            </div>
            <div className={styles.image}>
                <img src={urlFor(image.asset._ref).url()} alt={image.alt} />
            </div>
        </div>
    </div>
  );
};

export default TextWithImage;