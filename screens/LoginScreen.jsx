import { View, Text, Button } from "react-native";
import { styles } from "../assets/styles/Styles";

function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text>Configuración</Text>
        <Button
          title="Perfil"
          onPress={() => navigation.navigate('Feed')}
        />
      </View>
    );
  }

  export default SettingsScreen;