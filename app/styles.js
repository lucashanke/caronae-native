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
});

export default appStyles;