import { Box, Image } from '@chakra-ui/react'
import { CustomBox } from './MiniPictureCard.styles'

interface Props {
  src: string
}

const MiniPictureCard = ({ src }: Props): JSX.Element => (
  <Box width="100%">
    <CustomBox width="fit-content" border="1px" padding="5px" borderColor="teal.500">
      <Image src={src} width="150px" objectFit="contain" boxShadow="2xl" />
    </CustomBox>
  </Box>
)

export default MiniPictureCard
