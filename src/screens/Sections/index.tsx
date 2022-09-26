import { Card, Header, SectionButton } from '../../components'

import { RootStackParamList } from '../../navigator/SectionsNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { View } from 'react-native'
import { style } from './styles'

interface Props extends StackScreenProps<RootStackParamList> {}

const Sections = ({ navigation }: Props) => {
  const handleNavigateImages = () => navigation.navigate('ImagesList')
  const handleNavigateAppList = () => navigation.navigate('AppList')

  return (
    <View style={style.container}>
      <Header userName='' />
      <Card width={350}>
        <SectionButton title='Album de Fotos' onPress={handleNavigateImages} />
        <SectionButton title='TODO List' onPress={handleNavigateAppList} />
      </Card>
    </View>
  )
}
export default Sections
