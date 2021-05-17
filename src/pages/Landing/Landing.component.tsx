import { Flex, Button, ButtonGroup } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { MainLayout } from 'layouts/MainLayout'
import { PictureCard } from 'components/PictureCard'

const picture = {
  copyright: 'T. A. Rector',
  date: '2003-05-12',
  explanation:
    'Strange shapes and textures can be found in neighborhood of the Cone Nebula. The unusual shapes originate from fine interstellar dust reacting in complex ways with the energetic light and hot gas being expelled by the young stars.  The brightest star on the right of the above picture is S Mon, while the region just above it has been nicknamed the Fox Fur Nebula for its color and structure.  The blue glow directly surrounding S Mon results from reflection, where neighboring dust reflects light from the bright star.  The orange glow that encompasses the whole region results not only from dust reflection but also emission from hydrogen gas ionized by starlight. S Mon is part of a young open cluster of stars named NGC 2264, located about 2500 light years away toward the constellation of Monoceros.   The origin of the mysterious geometric Cone Nebula, visible on the far left, remains a mystery.',
  hdurl: 'https://apod.nasa.gov/apod/image/0305/coneregion_noao_big.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: 'In the Vicinity of the Cone Nebula',
  url: 'https://apod.nasa.gov/apod/image/0305/coneregion_noao.jpg',
}

const Landing = (): JSX.Element => {
  const history = useHistory()

  const onGalleryClick = (): void => {
    history.push('/saved')
  }

  return (
    <MainLayout>
      <Flex
        as="section"
        width="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        padding={5}
      >
        <PictureCard picture={picture} />
        <ButtonGroup colorScheme="teal" size="lg" marginTop="30px">
          <Button onClick={onGalleryClick}>Gallery</Button>
          <Button>Save</Button>
          <Button>Next</Button>
        </ButtonGroup>
      </Flex>
    </MainLayout>
  )
}

export default Landing
