import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './ImageViewer.module.scss'
import './swiper.css'
import Dimmed from '../shared/Dimmed'
import generateImageUrl from '@/utils/generateImageUrls'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  if (!open) return null
  return (
    <Dimmed>
      <CloseButton className={cx('icon-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        initialSlide={selectedIdx}
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <picture>
              <source
                srcSet={generateImageUrl({
                  filename: src,
                  format: 'webp',
                })}
                type="image/webp"
              ></source>
              <img
                src={generateImageUrl({
                  filename: src,
                  format: 'jpg',
                })}
                alt="이미지슬라이드"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  )
}

function CloseButton({
  className,
  onClose,
}: {
  className: string
  onClose: () => void
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
    </svg>
  )
}

export default ImageViewer
