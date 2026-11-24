import { StyleSheet, Text, View, Image, ImageSourcePropType } from "react-native";

interface ProfileCardProps{
    nombre: string;
    cargo: string;
    imagen: ImageSourcePropType;
}

export default function ProfileCard(props: ProfileCardProps) {

  const {nombre, cargo, imagen}=props

  return (
    
    <View style={styles.card}>
      <Image
      style = {styles.profileImage}
      source={imagen}/>
      <Text style={styles.title}>{nombre}</Text>
      <Text style={styles.subtitle}>{cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",

    // Android
    elevation: 8,

    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    margin: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#4F46E5",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 5,
  },
})
