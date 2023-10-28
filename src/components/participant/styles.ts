import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16
  },
  button: {
    height: 58,
    width: 58,
    borderRadius: 5,
    backgroundColor: "#E23C24",
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF'
  }
})