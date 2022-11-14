import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Controller} from 'react-hook-form';

const UserInput = ({control, name,  rules = {},  placeholder,  secureTextEntry, }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#0e0014'},
            ]}>
            <TextInput
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.input, {}]}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
          <Text style={{color: 'red', alignSelf:'stretch'}}>{error.message || 'Error'}</Text>
        )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#0e0014',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});

export default UserInput;
