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
      { text: "OK", onPress: async () => await api.put(`/place/${id}`) }
    ]
  )
};

export { handleRatePlace }