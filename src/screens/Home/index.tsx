import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import Parcicipant from "../../components/participant";
import { useState } from "react";

type props = {
  event : string;
}
 export default function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {

    if(participantName === "") {
      return Alert.alert("Error", "Insira um nome")
    }
    if(participants.includes(participantName)) {
      return Alert.alert("Participante já registrado!", "Encontram um participante com o mesmo nome na nossa base.")
    }

    setParticipants(prevStates => [...prevStates, participantName])
    setParticipantName('')

     console.log(`Participante adicionado ${participantName}`)
  }
  function handleParticipantRemove(name : string){
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Nao',
        style: 'cancel'
      }
    ])
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
        onChangeText={setParticipantName}
        value={participantName}
        />

        <TouchableOpacity style = {styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
      </Text>
        </TouchableOpacity>
        </View>

        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({item})=> (
            <Parcicipant
                key={item} 
                name={item}
                onRemove = {() => handleParticipantRemove(item)}
            />
          )}          
          showsVerticalScrollIndicator={false}
          ListEmptyComponent = {( () => (
            <Text style={styles.listEmptyComponent}>
              Ninguém chegou ao evento ainda? Adicione os participantes a sua lista de presença 
            </Text>
          )
            
            )}
        />
    </View>
  )
 }
