import {Text, View, TextInput, FlatList } from "react-native";
import ProfileCard from "./ProfileCards";

const EMPLEADOS = [
    {
        id: "1",
        nombre:"Ana Leona",
        cargo: "Diseñadora UX",
        fotoUrl:'https://scratchgarden.com/wp-content/uploads/2022/01/CCC-WhatisCoding-01-1.png'
    },
     {
        id: "2",
        nombre:"Maria Leona",
        cargo: "Diseñadora UI",
        fotoUrl:'https://scratchgarden.com/wp-content/uploads/2022/01/CCC-WhatisCoding-01-1.png'
    },
     {
        id: "3",
        nombre:"Andres Castillo",
        cargo: "QA",
        fotoUrl:'https://scratchgarden.com/wp-content/uploads/2022/01/CCC-WhatisCoding-01-1.png'
    },
     {
        id: "4",
        nombre:"Paola Siaminpur",
        cargo: "Desarrolladora",
        fotoUrl:'https://scratchgarden.com/wp-content/uploads/2022/01/CCC-WhatisCoding-01-1.png'
    },
];

export default function EmployeeList(){
    return(
        <View style={{ flex: 1 }}>
            <Text>Directorio de Empleados</Text>
            <TextInput
                placeholder="Buscar empleado..."
                placeholderTextColor='#999'
            />
            <FlatList
                data={EMPLEADOS}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <View>
                        <ProfileCard
                            nombre={item.nombre}
                            cargo={item.cargo}
                            imagen={{uri: item.fotoUrl}}
                        
                        />
                    </View>
                    

                )}
                
            />    
        </View>
    )
}