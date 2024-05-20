'use client'
import styles from "./imageGallery.module.css";
import { IImageGallery } from "@/lib/types";
import { urlForImage } from "@/lib/query";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'


const ImageGallery = ({ images }: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: 'rtl' })

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className={`${styles.panel}`}>
      <div className={styles.embla}  dir="rtl">
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {images.map((image: any, index: number) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__number}>
                  <Image width={500} height={500} src={urlForImage(image?.asset?._ref).url()} alt={image.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {images?.length >= 1 ?
          <div className={styles.embla__controls}>
            <div className={styles.embla__buttons}>
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

            <div className={styles.embla__dots}>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`${styles.embla__dot.concat(
                    index === selectedIndex ?  ' ' + styles.embla__dotSelected : ''
                  )}`}
                />
              ))}
            </div>
          </div>
        : null}
      </div>
    </div>
  );
};

export default ImageGallery;