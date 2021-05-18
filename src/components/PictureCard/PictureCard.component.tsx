import { Flex, Heading, Text, Image } from '@chakra-ui/react'
import { Apod } from 'models'

interface Props {
  picture: Apod
}

const PictureCard = ({ picture }: Props): JSX.Element => (
  <Flex direction="column" width="100%" maxWidth="400px" padding="20px" boxShadow="2xl">
    <Heading as="h3" color="teal.500">
      {picture.title}
    </Heading>
    <Image width="calc(100% + 40px)" maxWidth="none" margin="20px -20px 0 -20px" src={picture.url} />
    <Text color="teal.500" noOfLines={4} marginTop="20px">
      {picture.explanation}
    </Text>
    <Text color="teal.500" marginTop="20px">
      {picture.date}
    </Text>
  </Flex>
)

export default PictureCard
