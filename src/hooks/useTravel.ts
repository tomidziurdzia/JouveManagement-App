import clientAxios from '../config/clientAxios';
import {TravelInterface} from '../interface';
import {useAppDispatch} from '../store/store';
import {
  onErrorMessageTravel,
  onGetTravel,
  onGetTravels,
} from '../store/travel/travel.slice';

export const useTravel = () => {
  const dispatch = useAppDispatch();

  const startGetTravel = async (travel: TravelInterface) => {
    const {id_travel} = travel;
    try {
      const {data} = await clientAxios(`/app/${id_travel}`);
      dispatch(onGetTravel(data));
    } catch (error: any) {
      dispatch(
        onErrorMessageTravel({
          msg: error.response.data.msg,
          error: true,
        }),
      );
    }
  };

  const startLoadingTravels = async (page: number, size: number) => {
    try {
      const {data} = await clientAxios(`/app?page=${page}&size=${size}`);
      dispatch(onGetTravels(data));
    } catch (error: any) {
      console.log(error);
    }
  };

  return {startGetTravel, startLoadingTravels};
};
