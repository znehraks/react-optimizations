import { css } from '@emotion/react'
import Flex from '../shared/Flex'
import Text from '../shared/Text'
import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAdBanners } from '@/remote/adBanner'

import 'swiper/css'
import { Swiper } from 'swiper/react'

function AdBanners() {
  const { data } = useQuery(['adBanners'], () => getAdBanners())

  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => {
          return (
            <Link key={banner.id} to={banner.link}>
              <Flex direction="column" css={bannerContainerStyles}>
                <Text bold>{banner.title}</Text>
                <Text typography="t7">{banner.description}</Text>
              </Flex>
            </Link>
          )
        })}
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`

const bannerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.grey};
  border-radius: 4px;
`

export default AdBanners
