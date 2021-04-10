import React, { useState, useEffect } from 'react';
import Navigation from './src/config/navigation'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

import mealReducer from './src/store/reducers/saveMeal'
import tipsReducer from './src/store/reducers/saveTips'

//main reducer
const rootReducer = combineReducers({
  meals: mealReducer,
  tips: tipsReducer
})
//test

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-black': require('./assets/fonts/Poppins-Black.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-extra-bold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'poppins-extra-light': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'poppins-italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semi-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'poppins-thin-italic': require('./assets/fonts/Poppins-ThinItalic.ttf'),
  })
}



export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
      return <AppLoading startAsync={fetchFonts} onFinish={() => {setFontLoaded(true)}} onError={console.warn}/>
    }

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
}