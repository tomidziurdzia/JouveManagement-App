import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';

export const loginStyles = StyleSheet.create({
  formScreen: {
    flex: 1,
    gap: 50,
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    // height: 600,
    // marginTop: 150,
  },
  formImageContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  formContainer: {
    backgroundColor: COLORS.primary,
    flex: 1,
    marginHorizontal: 15,
    // borderRadius: 5,
    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 4,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    margin: 'auto',
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginVertical: 10,
    backgroundColor: 'white',
    width: 300,
    height: 50,
    borderRadius: 10,
  },

  input: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.primary,
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  buttonReturn: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
});
