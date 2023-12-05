import clientAxios from '../config/clientAxios';
import {useAppDispatch} from '../store/store';
import {onChecking, onLogin, onLogout} from '../store/employee/employee.slice';
import {EmployeeInterface} from '../interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthEmployee = () => {
  const dispatch = useAppDispatch();

  const startLogin = async ({cuil, password, cuit}: EmployeeInterface) => {
    dispatch(onChecking());
    try {
      const {data} = await clientAxios.post('/auth-employee/login', {
        cuil,
        password,
        cuit,
      });
      AsyncStorage.setItem('token', data.token);
      dispatch(
        onLogin({name: data.name, latname: data.lastname, cuil: data.cuil}),
      );
    } catch (error: any) {
      console.log(error);
      dispatch(onLogout({msg: error.response.data.msg, error: true}));
    }
  };

  const checkAuthTokenEmployee = async () => {
    const token = AsyncStorage.getItem('token');
    if (!token) {
      return dispatch(onLogout(undefined));
    }

    try {
      const {data} = await clientAxios('/auth-employee');
      AsyncStorage.setItem('token', data.token);
      dispatch(
        onLogin({name: data.name, latname: data.lastname, cuil: data.cuil}),
      );
    } catch (error: any) {
      dispatch(onLogout({msg: error.response.data.msg, error: true}));
    }
  };

  return {
    startLogin,
    checkAuthTokenEmployee,
  };
};
