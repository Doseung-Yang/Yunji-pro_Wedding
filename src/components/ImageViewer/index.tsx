import { Swiper, SwiperSlide } from 'swiper/react'

import classNames from 'classnames/bind'

import 'swiper/css'

import styles from './ImageViewer.module.scss'

import './swiper.css'

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
  if (open === false) {
    return null
  }

  return (
    <div className={cx('dimmed')}>
      <CloseButton className={cx('icon-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={src} alt="이미지 뷰어" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

function CloseButton({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) {
  return (
    <svg
      className={className}
      id="Icons"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <path
        d="M64,4c33.1,0,60,26.9,60,60s-26.9,60-60,60S4,97.1,4,64S30.9,4,64,4L64,4z M64,0  C28.7,0,0,28.7,0,64c0,35.3,28.7,64,64,64s64-28.7,64-64C128,28.7,99.3,0,64,0L64,0z M47,64L33.4,77.6c-4.7,4.7-4.7,12.3,0,17  c4.7,4.7,12.3,4.7,17,0L64,81l13.6,13.6c4.7,4.7,12.3,4.7,17,0c4.7-4.7,4.7-12.3,0-17L81,64l13.6-13.6c4.7-4.7,4.7-12.3,0-17  c-4.7-4.7-12.3-4.7-17,0L64,47L50.4,33.4c-4.7-4.7-12.3-4.7-17,0c-4.7,4.7-4.7,12.3,0,17L47,64L47,64z M36.2,80.4  c-3.1,3.1-3.1,8.2,0,11.3c3.1,3.1,8.2,3.1,11.3,0L64,75.3l16.4,16.4c3.1,3.1,8.2,3.1,11.3,0c3.1-3.1,3.1-8.2,0-11.3L75.3,64  l16.4-16.4c3.1-3.1,3.1-8.2,0-11.3c-3.1-3.1-8.2-3.1-11.3,0L64,52.7L47.6,36.2c-3.1-3.1-8.2-3.1-11.3,0c-3.1,3.1-3.1,8.2,0,11.3  L52.7,64L36.2,80.4z"
        id="XMLID_8_"
      />
      <path
        d="M36.2,80.4L52.7,64L36.2,47.6c-3.1-3.1-3.1-8.2,0-11.3c3.1-3.1,8.2-3.1,11.3,0L64,52.7l16.4-16.4  c3.1-3.1,8.2-3.1,11.3,0c3.1,3.1,3.1,8.2,0,11.3L75.3,64l16.4,16.4c3.1,3.1,3.1,8.2,0,11.3c-3.1,3.1-8.2,3.1-11.3,0L64,75.3  L47.6,91.8c-3.1,3.1-8.2,3.1-11.3,0C33.1,88.6,33.1,83.6,36.2,80.4z"
        id="XMLID_1_"
      />
    </svg>
  )
}
export default ImageViewer
