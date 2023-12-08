import React, {useState} from 'react';
import {Text} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [date, setDate] = useState(new Date());

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
