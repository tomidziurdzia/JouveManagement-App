import clientAxios from '../config/clientAxios';
import {useAppDispatch} from '../store/store';
import {onChecking, onLogin, onLogout} from '../store/employee/employee.slice';
import {EmployeeInterface} from '../interface';

export const useAuthEmployee = () => {
  const dispatch = useAppDispatch();

  const startLogin = async ({cuil, password, cuit}: EmployeeInterface) => {
    dispatch(onChecking);
    try {
      const {data} = await clientAxios.post('/auth-employee/login', {
        cuil,
        password,
        cuit,
      });
      dispatch(
        onLogin({name: data.name, latname: data.lastname, cuil: data.cuil}),
      );
      console.log(data);
    } catch (error: any) {
      console.log(error);
      dispatch(onLogout({msg: error.response.data.msg, error: true}));
    }
  };

  return {
    startLogin,
  };
};
