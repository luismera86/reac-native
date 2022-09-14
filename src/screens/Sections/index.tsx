import { Card, Header, SectionButton } from '../../components'

import { RootStackParamList } from '../../navigator/SectionsNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { View } from 'react-native'
import { style } from './styles'

interface Props extends StackScreenProps<RootStackParamList> {}

const Sections = ({ navigation }: Props) => {
  const handleNavigateUserList = () => navigation.navigate('UserList')
  const handleNavigateImages = () => navigation.navigate('Images')

  return (
    <View style={style.container}>
      <Header userName='' />
      <Card width={350}>
        <SectionButton title='Lista de Usuarios' onPress={handleNavigateUserList} />
        <SectionButton title='Imágenes' onPress={handleNavigateImages} />
      </Card>
    </View>
  )
}
export default Sections
