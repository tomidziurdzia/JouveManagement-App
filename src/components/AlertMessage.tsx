import React from 'react';
import {View, Text} from 'react-native';
import {ErrorInterface} from '../interface';
import {COLORS} from '../constants/colors';

export const AlertMessage = ({msg, error}: ErrorInterface) => {
  const specificStyles = error
    ? {backgroundColor: '#FF8F8F'}
    : {backgroundColor: COLORS.primary};
  return (
    <View style={{...specificStyles, marginTop: 10, borderRadius: 5}}>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          color: COLORS.white,
        }}>
        {msg}
      </Text>
    </View>
  );
};
