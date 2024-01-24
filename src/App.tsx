import React, { useEffect, useState } from 'react'

import classNames from 'classnames/bind'
import styles from './App.module.scss'
import FullScreenMessage from '@shared/FullScreenMessage'
import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'
import { Wedding } from './models/wedding'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/sections/Share'
import Modal from './components/shared/Modal'

const cx = classNames.bind(styles)
function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (!res.ok) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log(e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <FullScreenMessage type="loading" />
  }
  if (error) {
    return <FullScreenMessage type="error" />
  }
  if (!wedding) {
    return null
  }
  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding
  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
      <Modal
        open={true}
        title={'현재 참석자'}
        body={
          <div>
            <input />
          </div>
        }
        onRightButtonClick={() => {
          console.log('오른쪽 클릭')
        }}
        onLeftButtonClick={() => {
          console.log('왼쪽 클릭')
        }}
      />
    </div>
  )
}

export default App
