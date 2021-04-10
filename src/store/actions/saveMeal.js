import AsyncStorage from '@react-native-async-storage/async-storage'

export const STORE_MEAL = 'STORE_MEAL'
export const SET_MONDAY_INFO = 'SET_MONDAY_INFO'
export const LOAD_STATE_ON_STARTUP = 'LOAD_STATE_ON_STARTUP'
export const SAVE_TO_PHONE = 'SAVE_TO_PHONE'

export const saveToPhone = () => {
    return { type: SAVE_TO_PHONE }
}

export const storeMeal = (time, text, day, meal) => {
    return { type: STORE_MEAL, 
        info: {
            time, 
            text,
            day,
            meal
        }
    }
}

export const loadStateOnStartup = (data) => {
    //console.log(state)
    return { type: LOAD_STATE_ON_STARTUP, info: data}
}

// export const fetchMondayInfo = () => {
//     console.log('hi')
//     return async (dispatch, getState) => {
//         //const userId = getState().auth.userId
//         console.log('there')
//         try {
//             const response = await fetch ('https://meal-scheduler-f5bb7-default-rtdb.firebaseio.com/mondayInfo.json')
            
//             if (!response.ok) {
//                 throw new Error('Something went wrong')
//             }
            

//             const resultData = await response.json()
//             const loadedMondayInfo = []

//                 loadedMondayInfo.concat([{
//                     id: '0',
//                     name: 'Monday',
//                     firstMealTime: resultData.firstMealTime,
//                     firstFood: resultData.firstMealTime,
//                     secondMealTime: resultData.secondMealTime,
//                     secondFood: resultData.secondFood,
//                     thirdMealTime: resultData.thirdMealTime,
//                     thirdFood: resultData.thirdFood,
//                     fourthMealTime: resultData.fourthMealTime,
//                     fourthFood: resultData.fourthFood,
//                     fifthMealTime: resultData.fifthMealTime,
//                     fifthFood: resultData.fifthFood
//                 }])
//                 dispatch({ type: SET_MONDAY_INFO, mondayInfo: loadedMondayInfo })
//         } catch (err) {
//             console.log(err)
//             throw err
//         }
//     }
// }

//may need to add in an 'id' or specify the name of the meal, ie 'firstMealTime' or 'thirdFood'.
//then setup the reducer, and maybe divide it up between which meal time of the specific day. 
// export const updateMondayInfo = (time, meal) => {
//     return async (dispatch) => {
//         await fetch('https://meal-scheduler-f5bb7-default-rtdb.firebaseio.com/mondayInfo',
//         {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 time,
//                 meal
//             })
//         })
//         dispatch({
//             type: UPDATE_MONDAY_INFO,
//             data: {
//                 time,
//                 meal
//             }
//         })
//     }
// }

// export const updateProduct = (id, title, description, imageUrl) => { //the order of props is very important here. broke with incorrect order.
//     return async (dispatch, getState) => { 
//         const token = getState().auth.token //getState() gives access to the full redux store
//         await fetch(
//             `https://rn-shopping-3c1f4-default-rtdb.firebaseio.com/products/${id}.json?auth=${token}`,
//             {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     title,
//                     description,
//                     imageUrl
//                 })
//             }
//         )
//         dispatch({
//             type: UPDATE_PRODUCT, 
//             pid: id, //add 'pid' in order to locate which product is being updated.
//             productData: {
//                 title,
//                 description,
//                 imageUrl,
//             }
//         })
//     }
// }

// export const createProduct = (title, description, imageUrl, price) => {
//     return async (dispatch, getState) => { //will get dispatched to be stored on Firebase Realtime Database. 
//         //any async code can be executed here. 
//         const token = getState().auth.token
//         const userId = getState().auth.userId
//         const response = await fetch(`https://rn-shopping-3c1f4-default-rtdb.firebaseio.com/products.json?auth=${token}`, { //'await' is a substitution for '.then()'.
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ //firebase will generate an id
//                 title,
//                 description,
//                 imageUrl,
//                 price,
//                 ownerId: userId //this will map products to the user. 
//             })
//         }) //firebase requires the '.json' at the end. 

//         const resData = await response.json()


//         dispatch({ type: CREATE_PRODUCT, 
//             productData: {
//                 id: resData.name, //server-side generated id. 
//                 title,
//                 description,
//                 imageUrl,
//                 price,
//                 ownerId: userId
//         }})
//     }
// }