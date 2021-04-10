//popup screen to edit the meal schedule for a day. 
import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native'
import TimePicker from './TimePicker'
import { Input } from 'react-native-elements'

const DEVICE_WIDTH = Dimensions.get('window').width

const ModalInput = ({ closeModal, time, text, day, meal }) => {
    const [mealTime, setMealTime] = useState(time)
    const [mealText, setMealText] = useState(text)
    const [mealDay, setMealDay] = useState(day)
    const [whichMeal, setWhichMeal] = useState(meal)
    //console.log(mealTime + ' ModalInput') 

    const saveTime = (time) => {
        setMealTime(time)
    }

    return (

        <TouchableOpacity 
            style={styles.container}
            disabled={true}
        >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.modal}>
                <View style={styles.header}>
                    <Text style={styles.title}>{`Input ${mealDay}'s Schedule`}</Text>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.picker1}>
                        <TimePicker initialValue={mealTime} saveTime={saveTime}/>
                    </View>
                    
                    <View style={styles.input}>
                        <Input value={mealText} placeholder='Enter meal...' onChangeText={newText => setMealText(newText)}/>
                    </View>
                </View>

                <TouchableOpacity style={styles.saveButtonContainer} onPress={() => closeModal(mealTime, mealText, mealDay, whichMeal)}>
                    <Text style={styles.saveButton}>Save</Text>
                </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    modal: {
        height: 400,
        width: DEVICE_WIDTH - 60,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowRadius: 10,
        shadowOpacity: 0.5,
    },
    header: {
        height: '15%'
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        padding: 10,
        fontFamily: 'poppins-regular'
    },
    inputContainer: {
        height: '70%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    saveButtonContainer: {
        height: '15%',
        backgroundColor: '#3a71f0',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    saveButton: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'poppins-regular'
    },
    picker1: {
        width: '30%',
        marginBottom: 20,
    }, 
    input: {
        width: '70%'
    }

})

export default ModalInput