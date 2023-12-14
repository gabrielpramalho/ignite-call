import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from '@phosphor-icons/react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput
        crossOrigin=""
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}