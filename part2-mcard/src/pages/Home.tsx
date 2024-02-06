import AdBanners from '@/components/home/AdBanners'
import CardList from '@/components/home/CardList'
import Top from '@/components/shared/Top'
import { getAdBanners } from '@/remote/adBanner'
import { getCards } from '@/remote/card'
import { useEffect } from 'react'

function HomePage() {
  useEffect(() => {
    getCards().then((res) => console.log(res))
    getAdBanners().then((res) => console.log(res))
  }, [])
  return (
    <div>
      <Top title="혜택 좋은 카드" subTitle="딱 준비했더 크크크" />
      <AdBanners />
      <CardList />
    </div>
  )
}

export default HomePage
