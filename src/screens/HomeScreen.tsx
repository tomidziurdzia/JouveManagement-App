import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '../store/store';
import {useTravel} from '../hooks/useTravel';

const HomeScreen = () => {
  const [date, setDate] = useState(new Date());
  const {travels} = useAppSelector(state => state.travel);
  const {startLoadingTravels} = useTravel();

  useEffect(() => {
    startLoadingTravels(1, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(travels);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <SafeAreaView>
      <DateTimePicker
        style={{
          marginRight: 20,
          marginTop: 10,
        }}
        value={date}
        mode="date"
        is24Hour={true}
        onChange={handleChange}
      />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export {HomeScreen};
