import { StyleSheet, Text, View, Image } from "react-native";

export default function CompanyHeader(){
    return(
        <View style={styles.container}>
            <Image
               source={require('../assets/img/mente.png')}     
                style={styles.logo}
            />

            <Text style={styles.slogan}>
                Creamos Programadores con estilo,
                piensa como programador...
                Código en todo lado
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },

  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#2196F3",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 4,
        },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },

  slogan: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B5563",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});