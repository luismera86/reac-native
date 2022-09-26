import { Card, Header, SectionButton } from '../../components'

import { RootStackParamList } from '../../navigator/SectionsNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { View } from 'react-native'
import { style } from './styles'
import { useAppSelector } from '../../app/hooks'

interface Props extends StackScreenProps<RootStackParamList> {}

const SectionsScreen = ({ navigation }: Props) => {
  const user = useAppSelector(state => state.userActive)
  const handleNavigateImages = () => navigation.navigate('ImagesList')
  const handleNavigateAppList = () => navigation.navigate('AppList')
  const handleNavigateMessagesBoard = () => navigation.navigate('MessagesBoard')

  return (
    <View style={style.container}>
      <Header userName={user.firstname} />
      <Card width={350}>
        <SectionButton title='Album de Fotos' onPress={handleNavigateImages} />
        <SectionButton title='TODO List' onPress={handleNavigateAppList} />
        <SectionButton title='Tablero de Mensajes' onPress={handleNavigateMessagesBoard} />
      </Card>
    </View>
  )
}
export default SectionsScreen
