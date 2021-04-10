import React, { useEffect, useCallback, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'

import * as tipsActions from '../store/actions/saveTips'
import ResourceItem from '../components/ResourceItem'
import ResourceModal from '../components/ResourceModal'
import Lists from '../components/Lists'
import DisplaySectionList from '../components/DisplaySectionList'

const NutritionTipsScreen = ({ navigation }) => {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [inputType, setInputType] = useState('')
    const [currentResource, setCurrentResource] = useState('')
    const resources = useSelector(state => state.tips.resourceList)
    const nameList = []
    const [sectionList, setSectionList] = useState([])
    const [index, setIndex] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        loadLists()
        if (resources) {
            setCurrentResource(nameList[index]) //this works
            updateSections() //this DOES NOT work
        }
    }, [loadLists])

    const loadLists = () => {
        for (let i = 0; i < resources.length; i++) {
            nameList.push(resources[i].name)
        }
    }

    const addResourceModal = (type) => {
        setInputType(type)
        setModalIsVisible(true)
    }

    const setCurrent = (current, newIndex) => {
        setIndex(newIndex)
        setCurrentResource(current)
        setModalIsVisible(false)
        //loadLists()
        updateSections()
    }

    const updateSections = () => {
        for (let i = 0; i < resources.length; i++) {
            setSectionList([ ...sectionList, resources[index].sections[i]])
        }
    }

    //called from ResourceModal. Checks for 0 length. 
    const saveResource = (name, title, description, type) => {
        if (type === 'Section' && title && description) {
            dispatch(tipsActions.storeSection(name, title, description))
        } else if (type === 'Resource') {
            dispatch(tipsActions.storeResource(name))
        }
        setModalIsVisible(false)
        loadLists()
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={38} color="black" />
                </TouchableOpacity>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Nutrition Tips</Text>
                </View>
            </View>
            <View style={styles.sectionHeader}>
                <View style={styles.sections}>
                    <Text style={styles.secondTitle}>Resource: </Text>
                    
                        { 
                        resources 
                            ? <TouchableOpacity style={styles.resourcePicker} onPress={() => {addResourceModal('Select a Resource')}}>
                                    <Text style={styles.resourceTitle}>{currentResource}</Text>
                                </TouchableOpacity>
                            : <Text style={styles.empty}>{`<Add a resource>`}</Text>
                        }

                    <TouchableOpacity onPress={() => {addResourceModal('Resource')}}>
                        <Entypo name="circle-with-plus" size={38} color="#3a71f0" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {addResourceModal('Section')}}>
                    <View style={styles.sectionButton}>
                        <Text style={styles.thirdTitle}>Add Section</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                {resources ? <DisplaySectionList list={resources[index].sections} /> : null }
            </View>

            <Modal
                transparent={true}
                animationType='fade'
                visible={modalIsVisible}
                //nRequestClose={() => closeModal}
            >
                <ResourceModal closeModal={saveResource} type={inputType} list={resources} currentResource={currentResource} setCurrent={setCurrent} />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex: 1
        //backgroundColor: 'white'
    },
    topContainer: {
        //backgroundColor: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 25,
        height: '10%',
        justifyContent: 'space-between'
        //flex: 1
    },
    title: {
        fontSize: 35,
        fontFamily: 'poppins-semi-bold'
    },
    titleView: {
        //flex: 3,
    },
    menuButton: {
        //flex: 1,
    },
    sectionHeader: {
        height: '20%',
        // backgroundColor: 'white',
        // borderBottomWidth: 0.5,
        // shadowRadius: 5,
        // shadowOpacity: 1,
        // shadowOffset: { width: 0, height: 2},
    },
    secondTitle: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'poppins-regular'
    },
    resourcePicker: {

    },
    thirdTitle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'poppins-regular',
    },
    sections: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    listContainer: {
        height: '70%',
        width: '100%'
    },
    resourceTitle: {
        fontFamily: 'poppins-regular',
        fontSize: 20,
    },
    empty: {
        fontSize: 24,
        fontFamily: 'poppins-regular'
    },
    sectionButton: {
        alignItems: 'center',
        backgroundColor: '#3a71f0',
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 30,
        marginVertical: 10,
    }
})

export default NutritionTipsScreen



// {sectionList.length > 0 ?
                    
//     <FlatList data={sectionList} extraData={index} keyExtractor={(item, i) => i.toString()} renderItem={({ item }) => <ResourceItem
//                 title={item.title} 
//                 //description={item.description}
//                 // onEdit={editSection}
//                 // onDelete={deleteSection}
//             />
    
// } /> : null
// }