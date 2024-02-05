import Link from "next/link";
import styles from "./promotion.module.css";

const Promotion = ({ cta, content, title, }: any) => {
  return (
    <div className={styles.panel}>
        <div className={`${styles.content}`}>
          {title ? <h3>{title}</h3> : null}
            <div className={styles.text}>
            <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            </div>
          {cta?.url ?
          <>
            {cta.target ?
              <a className={`btn primary`} href={cta.url} target={cta.target}>
                {cta.title}
              </a>
            :
              <Link href={''}>
                <a className={`btn primary`}>
                  {cta.title}
                </a>
              </Link>
            }
          </> 
          : null}
        </div>
    </div>
  );
};

export default Promotion;