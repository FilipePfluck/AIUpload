import { Flex, Grid } from '@/styled-system/jsx'
import { Header } from '@/components/Header'
import { Textarea } from '@/components/Textarea'
import { css } from '@/styled-system/css'
import { Button } from '@/components/Button'
import { MdUpload } from 'react-icons/md'
import { Select } from '@/components/Select'
import { Slider } from '@/components/Slider'

const selectOptions = [
  {
    value: 'title',
    label: 'Título do Youtube',
  },
  {
    value: 'description',
    label: 'Descrição do Youtube',
  },
]

const modelOptions = [
  {
    value: 'gpt3.5',
    label: 'GPT 3.5-turbo 16k',
  },
]

export default function Home() {
  return (
    <Flex direction="column" minH="100vh" minW="100vw">
      <Header />
      <Flex flex="1" p="6" gap="6">
        <Flex direction="column" flex="1" gap="4">
          <Grid gridTemplateRows="2" gap="4" flex="1">
            <Textarea placeholder="Inclua o prompt para a IA..." />
            <Textarea placeholder="Resultado gerado pela IA" readOnly />
          </Grid>
          <p className={css({ textStyle: 'sm', color: 'fg.muted' })}>
            Lembre-se: você pode utilizar a variável{' '}
            <code>{`{transcription}`}</code> no seu prompt para adicionar o
            conteúdo da transcrição do vídeo selecionado.
          </p>
        </Flex>
        <Flex direction="column" gap="6">
          <Textarea placeholder="Inclua o prompt para a transcrição" />
          <Button size="sm">
            Carregar vídeo
            <MdUpload />
          </Button>
          <Select
            label="Tipo de prompt"
            options={selectOptions}
            placeholder="Selecione uma opção"
          />
          <Select
            label="Modelo"
            options={modelOptions}
            placeholder="Selecione o modelo"
          />
          <Slider />
          <Button>Executar</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
