import { StyleSheet, Platform } from 'react-native';

const appStyles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    ...Platform.select({
      ios: {
        borderBottomWidth: 1,
        marginBottom: 5,
        height: 30,
      },
      android: {
        borderBottomWidth: 0,
      },
    }),
  },
  loading: {
    opacity: 0.5,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default appStyles;