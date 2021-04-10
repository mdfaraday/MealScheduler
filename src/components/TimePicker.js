import React, {useState} from 'react'
import {Text, StyleSheet, View, TextInput, Button} from 'react-native'
import { Picker } from '@react-native-picker/picker'

const TimePicker = (props) => {
    const [value, setValue] = useState(props.initialValue)
    
    const sendTimeToModalInput = (newValue) => {
      setValue(newValue)
      props.saveTime(newValue)
    }

    return (
      <View style={styles.container}>
        <Picker
          selectedValue={value}
          onValueChange={newValue => sendTimeToModalInput(newValue)}>
          <Picker.Item label="05:00" value="05:00" />
          <Picker.Item label="05:30" value="05:30" />
          <Picker.Item label="06:00" value="06:00" />
          <Picker.Item label="06:30" value="06:30" />
          <Picker.Item label="07:00" value="07:00" />
          <Picker.Item label="07:30" value="07:30" />
          <Picker.Item label="08:00" value="08:00" />
          <Picker.Item label="08:30" value="08:30" />
          <Picker.Item label="09:00" value="09:00" />
          <Picker.Item label="09:30" value="09:30" />
          <Picker.Item label="10:00" value="10:00" />
          <Picker.Item label="10:30" value="10:30" />
          <Picker.Item label="11:00" value="11:00" />
          <Picker.Item label="11:30" value="11:30" />
          <Picker.Item label="12:00" value="12:00" />
          <Picker.Item label="12:30" value="12:30" />
          <Picker.Item label="01:00" value="01:00" />
          <Picker.Item label="01:30" value="01:30" />
          <Picker.Item label="02:00" value="02:00" />
          <Picker.Item label="02:30" value="02:30" />
          <Picker.Item label="03:00" value="03:00" />
          <Picker.Item label="03:30" value="03:30" />
          <Picker.Item label="04:00" value="04:00" />
          <Picker.Item label="04:30" value="04:30" />
          <Picker.Item label="05:00" value="05:00" />
          <Picker.Item label="05:30" value="05:30" />
          <Picker.Item label="06:00" value="06:00" />
          <Picker.Item label="06:30" value="06:30" />
          <Picker.Item label="07:00" value="07:00" />
          <Picker.Item label="07:30" value="07:30" />
          <Picker.Item label="08:00" value="08:00" />
          <Picker.Item label="08:30" value="08:30" />
          <Picker.Item label="09:00" value="09:00" />
          <Picker.Item label="09:30" value="09:30" />
          <Picker.Item label="10:00" value="10:00" />
        </Picker>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    fontFamily: 'poppins-regular'
  }
})

export default TimePicker