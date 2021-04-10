import AsyncStorage from '@react-native-async-storage/async-storage'

import { STORE_MEAL, LOAD_STATE_ON_STARTUP, SET_MONDAY_INFO, SAVE_TO_PHONE } from '../actions/saveMeal'
//import DAY_INFO from '../../data/dailyScheduleData'

//assigning each day as an object to easily use in return statements in the reducer. 
// const DayInfo = DAY_INFO
// //const Monday = DayInfo[0]
// const Tuesday = DayInfo[1]
// const Wednesday = DayInfo[2]
// const Thursday = DayInfo[3]
// const Friday = DayInfo[4]
// const Saturday = DayInfo[5]
// const Sunday = DayInfo[6]

// const initialState = {
//     Monday: [],
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }

const initialState = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
}



export default (state = initialState, action) => {
    const saveData = async () => {
        try {
            console.log('it works')
            console.log(state.Monday)
            await AsyncStorage.setItem('dayInfo', JSON.stringify([state.Monday, state.Tuesday, state.Wednesday, state.Thursday, state.Friday, state.Saturday, state.Sunday]))
        } catch (e) {console.log(e)}
    }

    switch (action.type) {
        case LOAD_STATE_ON_STARTUP:
            const newWeek = JSON.parse(action.info)
            return {
                Monday: [newWeek[0]],
                Tuesday: [newWeek[1]],
                Wednesday: [newWeek[2]],
                Thursday: [newWeek[3]],
                Friday: [newWeek[4]],
                Saturday: [newWeek[5]],
                Sunday: [newWeek[6]]
            }
        case SAVE_TO_PHONE:
            saveData()
            return state
        case STORE_MEAL:
            switch (action.info.day) {
                case 'Monday':
                    if (action.info.meal === 0) { const newMonday = state.Monday
                        newMonday[0].firstMealTime = action.info.time 
                        newMonday[0].firstFood = action.info.text
                        return {...state, Monday: newMonday}}
                        if (action.info.meal === 1) { const newMonday = state.Monday
                            newMonday.secondMealTime = action.info.time 
                            newMonday.secondFood = action.info.text
                            return {...state, Monday: newMonday}}
                            if (action.info.meal === 2) { const newMonday = state.Monday
                                newMonday.thirdMealTime = action.info.time 
                                newMonday.thirdFood = action.info.text
                                return {...state, Monday: newMonday}}
                                if (action.info.meal === 3) { const newMonday = state.Monday
                                    newMonday.fourthMealTime = action.info.time 
                                    newMonday.fourthFood = action.info.text
                                    return {...state, Monday: newMonday}}
                                    if (action.info.meal === 4) { const newMonday = state.Monday
                                        newMonday.fifthMealTime = action.info.time 
                                        newMonday.fifthFood = action.info.text
                                        return {...state, Monday: newMonday}}
                case 'Tuesday':
                    if (action.info.meal === 0) { const newTuesday = Tuesday
                        newTuesday.firstMealTime = action.info.time 
                        newTuesday.firstFood = action.info.text
                        return {...state, Tuesday: newTuesday}}
                        if (action.info.meal === 1) { const newTuesday = Tuesday
                            newTuesday.secondMealTime = action.info.time 
                            newTuesday.secondFood = action.info.text
                            return {...state, Tuesday: newTuesday}}
                            if (action.info.meal === 2) { const newTuesday = Tuesday
                                newTuesday.thirdMealTime = action.info.time 
                                newTuesday.thirdFood = action.info.text
                                return {...state, Tuesday: newTuesday}}
                                if (action.info.meal === 3) { const newTuesday = Tuesday
                                    newTuesday.fourthMealTime = action.info.time 
                                    newTuesday.fourthFood = action.info.text
                                    return {...state, Tuesday: newTuesday}}
                                    if (action.info.meal === 4) { const newTuesday = Tuesday
                                        newTuesday.fifthMealTime = action.info.time 
                                        newTuesday.fifthFood = action.info.text
                                        return {...state, Tuesday: newTuesday}}
                case 'Wednesday':
                    if (action.info.meal === 0) { const newDay = Wednesday
                        newDay.firstMealTime = action.info.time 
                        newDay.firstFood = action.info.text
                        return {...state, Wednesday: newDay}}
                        if (action.info.meal === 1) { const newDay = Wednesday
                            newDay.secondMealTime = action.info.time 
                            newDay.secondFood = action.info.text
                            return {...state, Wednesday: newDay}}
                            if (action.info.meal === 2) { const newDay = Wednesday
                                newDay.thirdMealTime = action.info.time 
                                newDay.thirdFood = action.info.text
                                return {...state, Wednesday: newDay}}
                                if (action.info.meal === 3) { const newDay = Wednesday
                                    newDay.fourthMealTime = action.info.time 
                                    newDay.fourthFood = action.info.text
                                    return {...state, Wednesday: newDay}}
                                    if (action.info.meal === 4) { const newDay = Wednesday
                                        newDay.fifthMealTime = action.info.time 
                                        newDay.fifthFood = action.info.text
                                        return {...state, Wednesday: newDay}}
                case 'Thursday':
                    if (action.info.meal === 0) { const newDay = Thursday
                        newDay.firstMealTime = action.info.time 
                        newDay.firstFood = action.info.text
                        return {...state, Thursday: newDay}}
                        if (action.info.meal === 1) { const newDay = Thursday
                            newDay.secondMealTime = action.info.time 
                            newDay.secondFood = action.info.text
                            return {...state, Thursday: newDay}}
                            if (action.info.meal === 2) { const newDay = Thursday
                                newDay.thirdMealTime = action.info.time 
                                newDay.thirdFood = action.info.text
                                return {...state, Thursday: newDay}}
                                if (action.info.meal === 3) { const newDay = Thursday
                                    newDay.fourthMealTime = action.info.time 
                                    newDay.fourthFood = action.info.text
                                    return {...state, Thursday: newDay}}
                                    if (action.info.meal === 4) { const newDay = Thursday
                                        newDay.fifthMealTime = action.info.time 
                                        newDay.fifthFood = action.info.text
                                        return {...state, Thursday: newDay}}
                case 'Friday':
                    if (action.info.meal === 0) { const newDay = Friday
                        newDay.firstMealTime = action.info.time 
                        newDay.firstFood = action.info.text
                        return {...state, Friday: newDay}}
                        if (action.info.meal === 1) { const newDay = Friday
                            newDay.secondMealTime = action.info.time 
                            newDay.secondFood = action.info.text
                            return {...state, Friday: newDay}}
                            if (action.info.meal === 2) { const newDay = Friday
                                newDay.thirdMealTime = action.info.time 
                                newDay.thirdFood = action.info.text
                                return {...state, Friday: newDay}}
                                if (action.info.meal === 3) { const newDay = Friday
                                    newDay.fourthMealTime = action.info.time 
                                    newDay.fourthFood = action.info.text
                                    return {...state, Friday: newDay}}
                                    if (action.info.meal === 4) { const newDay = Friday
                                        newDay.fifthMealTime = action.info.time 
                                        newDay.fifthFood = action.info.text
                                        return {...state, Friday: newDay}}
                case 'Saturday':
                    if (action.info.meal === 0) { const newDay = Saturday
                        newDay.firstMealTime = action.info.time 
                        newDay.firstFood = action.info.text
                        return {...state, Saturday: newDay}}
                        if (action.info.meal === 1) { const newDay = Saturday
                            newDay.secondMealTime = action.info.time 
                            newDay.secondFood = action.info.text
                            return {...state, Saturday: newDay}}
                            if (action.info.meal === 2) { const newDay = Saturday
                                newDay.thirdMealTime = action.info.time 
                                newDay.thirdFood = action.info.text
                                return {...state, Saturday: newDay}}
                                if (action.info.meal === 3) { const newDay = Saturday
                                    newDay.fourthMealTime = action.info.time 
                                    newDay.fourthFood = action.info.text
                                    return {...state, Saturday: newDay}}
                                    if (action.info.meal === 4) { const newDay = Saturday
                                        newDay.fifthMealTime = action.info.time 
                                        newDay.fifthFood = action.info.text
                                        return {...state, Saturday: newDay}}
                case 'Sunday':
                    if (action.info.meal === 0) { const newDay = Sunday
                        newDay.firstMealTime = action.info.time 
                        newDay.firstFood = action.info.text
                        return {...state, Sunday: newDay}}
                        if (action.info.meal === 1) { const newDay = Sunday
                            newDay.secondMealTime = action.info.time 
                            newDay.secondFood = action.info.text
                            return {...state, Sunday: newDay}}
                            if (action.info.meal === 2) { const newDay = Sunday
                                newDay.thirdMealTime = action.info.time 
                                newDay.thirdFood = action.info.text
                                return {...state, Sunday: newDay}}
                                if (action.info.meal === 3) { const newDay = Sunday
                                    newDay.fourthMealTime = action.info.time 
                                    newDay.fourthFood = action.info.text
                                    return {...state, Sunday: newDay}}
                                    if (action.info.meal === 4) { const newDay = Sunday
                                        newDay.fifthMealTime = action.info.time 
                                        newDay.fifthFood = action.info.text
                                        return {...state, Sunday: newDay}}
            }
    }
    return state
}