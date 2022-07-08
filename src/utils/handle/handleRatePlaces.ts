import { Alert } from "react-native"
import { api } from "../../service/implementationn/api"

async function handleRatePlace(id: number) {
  Alert.alert(
    "Gostaria de Avaliar esse Local?",
    "",
    [
      {
        text: "Canelar",
        onPress: () => { },
        style: "cancel"
      },
      {
        text: "OK", onPress: async function run() {
          try {
            await api.put(`/places/${id}`)
            Alert.alert("Local avaliado com sucesso!")
          } catch (error: any) {
            Alert.alert("Ocorreu um erro ao avaliar o local. Tente novamente mais tarde!")
          }
        }
      }
    ]
  )
};

export { handleRatePlace }