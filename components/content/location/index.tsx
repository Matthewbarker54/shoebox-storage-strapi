'use client'
import styles from "./textWithLocation.module.css";
import { ITextWithLocation } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import { APIProvider, Map, Marker, useMarkerRef } from "@vis.gl/react-google-maps"

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


const TextWithLocation = ({ heading, excerpt, location, reverse_row }: ITextWithLocation) => {
  // const [markerRef, marker] = useMarkerRef();
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
            <div className={styles.map}>
            <APIProvider apiKey={"AIzaSyAmR_t3SbbpdSg9FGXM68Qm_ECDSGUPjwM"}>
              <Map
                defaultZoom={16}
                defaultCenter={{ 
                  lat: location?.mapCenterX ? Number(location.mapCenterX) : 0,
                  lng: location?.mapCenterY ? Number(location.mapCenterY) : 0 
                }}
                disableDefaultUI={true}
                >
                <Marker
                // ref={markerRef}
                  position={{ 
                    lat: location?.mapMarkerX ? Number(location.mapMarkerX) : 0,
                    lng: location?.mapMarkerY ? Number(location.mapMarkerY) : 0 
                  }}
                />
              </Map>
            </APIProvider>
            </div>
        </div>
    </div>
  );
};

export default TextWithLocation;