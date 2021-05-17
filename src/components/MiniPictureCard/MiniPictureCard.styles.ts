import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

export const CustomBox = styled(Box)`
  transition: transform 0.5s ease-in;
  &:hover {
    transition: transform 0.5s ease-in;
    transform: scale(1.2);
  }
`
