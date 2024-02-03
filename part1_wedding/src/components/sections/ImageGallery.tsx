import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './ImageGallery.module.scss'
import ImageViewer from '../ImageViewer'
import { useState } from 'react'
import generateImageUrl from '@/utils/generateImageUrls'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState<number>(-1)
  const open = selectedIdx > -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }
  return (
    <>
      <Section className={cx('container')} title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={src}
              className={cx('wrap-image')}
              onClick={() => handleSelectedImage(idx)}
            >
              <picture>
                <source
                  srcSet={generateImageUrl({
                    filename: src,
                    format: 'webp',
                    option: 'w_240,h_240,q_auto,c_fill',
                  })}
                  type="image/webp"
                ></source>
                <img
                  src={generateImageUrl({
                    filename: src,
                    format: 'jpg',
                    option: 'w_240,h_240,q_auto,c_fill',
                  })}
                  alt="이미지"
                />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        open={open}
        images={images}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
