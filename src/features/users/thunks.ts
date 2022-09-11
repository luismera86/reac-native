/* import { URL_API } from '../../constants/firebase/index'
import { User } from '../../interfaces/user'

export const addUsersDb = (users: User) => {
  console.log('entrando en addUser')
  return async () => {
    try {
      console.log('por hacer el fetch')
      const response = await fetch(`${URL_API}/users.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(users),
      })
      const data = await response.json()

      console.log(data)
      console.log('termino')
    } catch (error) {
      console.log(error)
    }
  }
}
 */