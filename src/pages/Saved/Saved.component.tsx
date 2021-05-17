import { Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { MainLayout } from 'layouts/MainLayout'
import { PicturesList } from 'components/PicturesList'
import { Arrow } from 'components/Icons'

const Saved = (): JSX.Element => (
  <MainLayout>
    <Flex
      position="relative"
      flexDirection="column"
      flexWrap="nowrap"
      px={{ sm: '15px', md: '30px' }}
      py={{ sm: '20px', md: '30px', lg: '50px' }}
      maxWidth={1480}
      width="100%"
      justifyContent={{ sm: '', md: 'space-between' }}
      alignItems="center"
    >
      <PicturesList />
      <Link
        as={RouterLink}
        to="/"
        bgColor="teal.500"
        position="fixed"
        bottom="50px"
        right="50px"
        borderRadius="50%"
        height="60px"
        width="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <Arrow props={{ fill: 'white', height: '30px' }} />
      </Link>
    </Flex>
  </MainLayout>
)

export default Saved
