import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, FlatList, StyleSheet, Button, Modal, SafeAreaView, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import DailyMenuItem from '../components/DailyMenuItem'
import DAY_INFO from '../data/dailyScheduleData'
import ModalInput from '../components/ModalInput'
import * as mealActions from '../store/actions/saveMeal'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

const MainScreen = ({ navigation }) => {
    //import initial daily meal info array and store as variable. 
    const [foodData, setFoodData] = useState()
    //configure modal.
    const [modalIsVisible, setModalIsVisible] = useState(false)
    //saving specific meal data for whichever meal you clicked to edit.
    const [updatedState, setUpdatedState] = useState()
    const [mealTime, setMealTime] = useState('')
    const [mealText, setMealText] = useState('')
    const [mealDay, setMealDay] = useState('')
    const [whichMeal, setWhichMeal] = useState(0)
    const [error, setError] = useState()
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    // let monday
    // let tuesday
    // let wednesday
    // let thursday
    // let friday
    // let saturday
    // let sunday
    
    // const monday = useSelector(state => state.meals.Monday)
    // const Tuesday = useSelector(state => state.meals.Tuesday)
    // const monday = useSelector(state => state.meals.Monday)
    // const monday = useSelector(state => state.meals.Monday)
    // const monday = useSelector(state => state.meals.Monday)
    // const monday = useSelector(state => state.meals.Monday)
    // const monday = useSelector(state => state.meals.Monday)
    // const [updatedWeek, setUpdatedWeek] = useState()
    // console.log(updatedWeek)

    // const updateWeek = () => {
    //     monday = useSelector(state => state.meals.Monday)
    //     tuesday = useSelector(state => state.meals.Tuesday)
    //     wednesday = useSelector(state => state.meals.Wednesday)
    //     thursday = useSelector(state => state.meals.Thursday)
    //     friday = useSelector(state => state.meals.Friday)
    //     saturday = useSelector(state => state.meals.Saturday)
    //     sunday = useSelector(state => state.meals.Sunday)
    //     setFoodData(updatedWeek)
    // }

    //saves each day into a var that is used in saveModal to update the state in the phone's memory with asyncstorage. 
    // useEffect(() => {
    //     updateWeek()
    //     console.log('useEffect')
    // }, [])
    
    // useEffect(() => {
    //     setFoodData(updatedWeek)
    // }, [updatedWeek])

    //along w useEffect below, sets up data on initial load of app. 
    const setupData = async () => {
        try {
            setIsLoading(true)
            const temp = await AsyncStorage.getItem('dayInfo') //returns a JSON object that needs to be parsed with JSON.parse(). 
            if (temp) {
                dispatch(mealActions.loadStateOnStartup(temp))
                const data = JSON.parse(temp) //the data is an array of arrays each having a single object. 
                setFoodData([data[0][0], data[1][0], data[2][0], data[3][0], data[4][0], data[5][0], data[6][0]]) 
                setIsLoading(false)
          } else {
            try {
                //these should only run on the first time running the app. 
                await AsyncStorage.setItem('dayInfo', JSON.stringify(DAY_INFO))
                dispatch(mealActions.loadStateOnStartup(DAY_INFO))
                setFoodData(DAY_INFO)
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
          }

        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
        
    }
      
    useEffect(() => {
    setupData()
    }, [])

    const editMeal = (time, text, day, meal) => {
        setModalIsVisible(!modalIsVisible)
        setMealTime(time)
        setMealText(text)
        setMealDay(day)
        setWhichMeal(meal)
    }

    const saveModal = async (time, text, day, meal) => {
        setModalIsVisible(!modalIsVisible)
        //setUpdatedWeek([monday, tuesday, wednesday, thursday, friday, saturday, sunday])
        dispatch(mealActions.storeMeal(time, text, day, meal))
        //dispatch(mealActions.saveToPhone())
        // try {
        //     console.log(updatedWeek)
        //     await AsyncStorage.setItem('dayInfo', JSON.stringify(updatedWeek))
        // } catch (e) {console.log(e)}
        setMealTime('')
        setMealText('')
        setMealDay('')
        setWhichMeal('')
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={38} color="black" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.title1}>Meal Scheduler</Text>
                    <Text style={styles.title2}>Weekly Schedule</Text>
                </View>
            </View>

            <View style={styles.listContainer}>
                {
                isLoading ?
                <View style={styles.loadingIndicator}>
                    <ActivityIndicator />
                </View>
                :  <FlatList data={foodData} renderItem={({ item }) => {
                        return (
                            <DailyMenuItem 
                                name={item.name} 
                                onEdit={editMeal}
                                
                                firstMealTime={item.firstMealTime}
                                firstFood={item.firstFood}
                                secondMealTime={item.secondMealTime}
                                secondFood={item.secondFood}
                                thirdMealTime={item.thirdMealTime}
                                thirdFood={item.thirdFood}
                                fourthMealTime={item.fourthMealTime}
                                fourthFood={item.fourthFood}
                                fifthMealTime={item.fifthMealTime}
                                fifthFood={item.fifthFood}
                            />
                        )
                    }} />
                }
            </View>

            <Modal
                transparent={true}
                animationType='fade'
                visible={modalIsVisible}
                //nRequestClose={() => closeModal}
            >
                <ModalInput closeModal={saveModal} time={mealTime} text={mealText} day={mealDay} meal={whichMeal} />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
    }, 
    headerContainer: {
        height: '20%',
        //backgroundColor: 'white',
        // shadowOffset: { width: 0, height: 1},
        // shadowOpacity: 0.5,
        // shadowRadius: 4,
    },
    listContainer: {
        height: '80%'
    },
    title1: {
        textAlign: 'left',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10,
        fontFamily: 'poppins-medium'
    },
    title2: {
        fontFamily: 'poppins-semi-bold',
        textAlign: 'left',
        fontSize: 30,
        marginLeft: 20,
        marginBottom: 20,
    },
    menuButton: {
        paddingLeft: 5,
        width: '20%'
    },
    loadingIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MainScreen;