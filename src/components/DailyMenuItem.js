import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

//props: name, first-fifthMealTime, first-fifthFood, onEdit.
const DailyMealItem = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.day}>
                <Text style={styles.name}>{props.name}</Text>
            </View>

            <View style={styles.schedule}>
                <View style={styles.mealInfo}>
                    <View style={styles.time}>
                        <Text>{props.firstMealTime}</Text>
                    </View>
                    <View style={styles.text}>
                        <Text>{props.firstFood}</Text>
                    </View>
                    <TouchableOpacity style={styles.edit} onPress={() => props.onEdit(props.firstMealTime, props.firstFood, props.name, 0)}>
                        <FontAwesome name="edit" size={24} color="#468a4b" />
                    </TouchableOpacity>
                </View>
                <View style={styles.mealInfo}>
                    <View style={styles.time}>
                        <Text>{props.secondMealTime}</Text>
                    </View>
                    <View style={styles.text}>
                        <Text>{props.secondFood}</Text>
                    </View>
                    <TouchableOpacity style={styles.edit} onPress={() => props.onEdit(props.secondMealTime, props.secondFood, props.name, 1)}>
                        <FontAwesome name="edit" size={24} color="#468a4b" />
                    </TouchableOpacity>
                </View>
                <View style={styles.mealInfo}>
                    <View style={styles.time}>
                        <Text>{props.thirdMealTime}</Text>
                    </View>
                    <View style={styles.text}>
                        <Text>{props.thirdFood}</Text>
                    </View>
                    <TouchableOpacity style={styles.edit} onPress={() => props.onEdit(props.thirdMealTime, props.thirdFood, props.name, 2)}>
                        <FontAwesome name="edit" size={24} color="#468a4b" />
                    </TouchableOpacity>
                </View>
                <View style={styles.mealInfo}>
                    <View style={styles.time}>
                        <Text>{props.fourthMealTime}</Text>
                    </View>
                    <View style={styles.text}>
                        <Text>{props.fourthFood}</Text>
                    </View>
                    <TouchableOpacity style={styles.edit} onPress={() => props.onEdit(props.fourthMealTime, props.fourthFood, props.name, 3)}>
                        <FontAwesome name="edit" size={24} color="#468a4b" />
                    </TouchableOpacity>
                </View>
                <View style={styles.mealInfo}>
                    <View style={styles.time}>
                        <Text>{props.fifthMealTime}</Text>
                    </View>
                    <View style={styles.text}>
                        <Text>{props.fifthFood}</Text>
                    </View>
                    <TouchableOpacity style={styles.edit} onPress={() => props.onEdit(props.fifthMealTime, props.fifthFood, props.name, 4)}>
                        <FontAwesome name="edit" size={24} color="#468a4b" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#a7fade',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#5df5c2',
        shadowRadius: 2,
        shadowOpacity: 0.3,
    },
    day: {
        //flexDirection: 'row',
        height: '20%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    schedule: {
        height: '80%',
        marginHorizontal: 20,
        justifyContent: 'space-around',
    },
    name: {
        fontSize: 25,
        fontFamily: 'poppins-regular'
    },
    mealInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        width: '25%'
    },
    text: {
        width: '60%'
    },
    edit: {
        width: '15%'
    }
})

export default DailyMealItem