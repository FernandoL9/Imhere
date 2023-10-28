import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Parcicipant from "../../components/participant";

 export default function Home() {
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
      <Parcicipant name="Fernando lemos" onRemove = {() => handleParticipantRemove("Fernando")}/>
      <Parcicipant name="Diego lemos" onRemove = {() => handleParticipantRemove("Diego")}/>
      <Parcicipant name="Wanessa lemos" onRemove = {() => handleParticipantRemove("Wanessa")}/>
      <Parcicipant name="Fábio lemos" onRemove = {() => handleParticipantRemove("Fábio")}/>
    </View>
  )
 }
