
import { createFileRoute } from '@tanstack/react-router'
import Users from '../Users/Users'
export const Route = createFileRoute('/users')({
  component: UserPage,
})

function UserPage() {
  return <Users/>
}
