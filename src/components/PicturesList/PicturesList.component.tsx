import { useEffect } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { MiniPictureCard } from 'components/MiniPictureCard'
import { useDataStore } from 'store/hooks'

const PicturesList = observer((): JSX.Element => {
  const {
    ApodStore: { apods, updateApods },
  } = useDataStore()

  useEffect(() => {
    updateApods()
  }, [updateApods])

  return (
    <SimpleGrid minChildWidth="150px" width="100%" gap="40px" justifyContent="center" alignItems="center">
      {apods.map((apod) => (
        <MiniPictureCard key={apod.title} src={apod.url} />
      ))}
    </SimpleGrid>
  )
})

export default PicturesList
