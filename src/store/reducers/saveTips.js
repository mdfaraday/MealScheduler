import { STORE_RESOURCE, STORE_SECTION } from '../actions/saveTips'
import Section from '../../data/Section'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'

const initialState = {
    resourceList: [{name: 'Four Hour body', sections: [{title: 'sex', description: 'sex is good'}]}, {name: 'Boundless', sections: [{title: 'medicine', description: 'good medicine'}]}],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESOURCE:
            const newResource = {name: action.info.name, sections: []}
            return { ...state, resourceList: state.resourceList.concat(newResource) }
        case STORE_SECTION:
            const newList = state.resourceList
            for (let i = 0; i < newList.length; i++) {
                if (newList[i].name.toString() === action.info.name.toString()) {
                    newList[i].sections.push({ title: action.info.title, description: action.info.description })
                }
            }
            return { ...state, resourceList: newList }
    }
    return state
}