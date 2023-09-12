import { Flex } from '@/styled-system/jsx'
import { Button } from './Button'
import { FaGithub } from 'react-icons/fa'
import { css } from '@/styled-system/css'

export const Header = () => {
  return (
    <Flex
      borderBottom="1px token(colors.border.emphasized) solid"
      justify="space-between"
      align="center"
      px="6"
      py="3"
    >
      <h1 className={css({ textStyle: 'lg', fontWeight: 700 })}>upload.ai</h1>

      <Button size="lg" variant="secondary">
        <FaGithub />
        Github
      </Button>
    </Flex>
  )
}
