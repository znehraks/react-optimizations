import { css } from '@emotion/react'
import Flex from '../shared/Flex'
import Text from '../shared/Text'
import { colors } from '@/styles/colorPalette'

function AdBanners() {
  return (
    <Flex direction="column" css={bannerContainerStyles}>
      <Text>배너 타이틀 입니다</Text>
      <Text>배너 내용입니다.</Text>
    </Flex>
  )
}

const bannerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.grey};
  border-radius: 4px;
`

export default AdBanners
