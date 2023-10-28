import { Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";

import Parcicipant from "../../components/participant";

 export default function Home() {
  
  const participant = [
    "Fernando lemos",
    "João da silva",
    "Maria das graças",
    "Rafael marques",
    "José de souza",
    "Luiza pereira",
    "Ana paula",
    "Bruno rodrigues",
    "Cleiton alves",
    "Davi ferreira",
    "Eduardo mendes"
  ]

  function handleParticipantAdd() {
    console.log("Participante adicionado")
  }
  function handleParticipantRemove(name : string){
    console.log(`Participante ${name}, removido!`)
  }

  return(
    <View style= {styles.container}>
      <Text style= {styles.eventName}>
        Nome do evento
      </Text>

      <Text style= {styles.eventDate}>
        Domingo, 23 de outubro de 2023
      </Text>
      
      <View style = {styles.form}>
        <TextInput 
        style = {styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#B5B5B6"
        />

        <TouchableOpacity style = {styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
      </Text>
        </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            participant.map(participant => (
              <Parcicipant
                key={participant} 
                name={participant}
                onRemove = {() => handleParticipantRemove(participant)}/>
            ))
          }
        </ScrollView>
    </View>
  )
 }
