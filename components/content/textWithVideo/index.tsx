import styles from "./textWithVideo.module.css";
import { ITextWithVideo } from "@/lib/types";
import { urlForImage } from "@/lib/api";
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


const TextWithVideo = ({ heading, excerpt, video, reverse_row }: ITextWithVideo) => {
  console.log(video, 'sd')
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
              {video?.asset?._ref &&
                <video width={500} height={500} controls preload="none">
                  {/* <source src={urlForImage(video.asset._ref).url()} type="video/mp4" /> */}
                  Your browser does not support the video tag.
                </video>
              }
            </div>
        </div>
    </div>
  );
};

export default TextWithVideo;