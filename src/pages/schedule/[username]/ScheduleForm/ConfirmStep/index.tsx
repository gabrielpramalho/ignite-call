import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { CalendarBlank, Clock } from '@phosphor-icons/react'

export function ConfirmStep() {
  return (
    <ConfirmForm as="form">
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de janeiro de 2024
        </Text>

        <Text>
          <Clock />
          15:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome Completo</Text>
        <TextInput crossOrigin="" placeholder="Seu nome" />
      </label>
      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput
          crossOrigin=""
          type="email"
          placeholder="johndoe@example.com"
        />
      </label>
      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
