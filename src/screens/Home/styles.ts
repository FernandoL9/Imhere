import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#1F1E25",
    padding: 10,
    fontSize: 16,
    color: "#FFF",
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },

  button: {
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: "#F5D6",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  }
 })