import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import Parcicipant from "../../components/participant";

 export default function Home() {
  
  const participant = [
    "Fernando Lemos",
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
    if(participant.includes("Fernando Lemos")) {
      return Alert.alert("Participante já registrado!", "Encontram um participante com o mesmo nome na nossa base.")
    }
     console.log("Participante adicionado")
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

        <FlatList
          data={participant}
          keyExtractor={item => item}
          renderItem={({item})=> (
            <Parcicipant
                key={item} 
                name={item}
                onRemove = {() => handleParticipantRemove(item)}/>
          )}
        />

        {/* 1 metodo para se percorrer uma lista de participante usando map e scrollView */}
        {/* // <ScrollView showsVerticalScrollIndicator={false}> */}
        {/* //   {
        //     participant.map(participant => (
        //       <Parcicipant
        //         key={participant} 
        //         name={participant}
        //         onRemove = {() => handleParticipantRemove(participant)}/>
        //     ))<Parcicipant
        //         key={participant} 
        //         name={participant}
        //         onRemove = {() => handleParticipantRemove(participant)}/>
        //   }
        // </ScrollView> */}
    </View>
  )
 }
