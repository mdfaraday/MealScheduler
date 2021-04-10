//popup screen to add resources or schedules depending on button pressed. 
import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Keyboard, TouchableWithoutFeedback, TextInput, FlatList, ScrollView } from 'react-native'
import { Input, ListItem } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'

const DEVICE_WIDTH = Dimensions.get('window').width

const ResourceModal = ({ closeModal, type, list, currentResource, setCurrent }) => {
    const [resourceName, setResourceName] = useState('')
    const [sectionTitle, setSectionTitle] = useState('')
    const [text, setText] = useState()
    const [chosenResource, setChosenResource] = useState(currentResource)
    //const [index, setIndex] = useState(0)

    //this resets the index that determines which resource name and sections to show. 
    //also sends off info to helper functions in NutritionTipsScreen. 
    const saveSelection = () => {
        if (type === 'Select a Resource') {
            for (let i=0;i<list.length;i++) {
                if (list[i].name === chosenResource.toString()) {
                    setCurrent(chosenResource, i) //i is to set the index of which resource to load the sections of in NutritionInfo screen. 
                }
            }
        } else if (type === 'Resource') {
            closeModal(resourceName, sectionTitle, text, type) //need to fix this. 
        } else {
            closeModal(chosenResource, sectionTitle, text, type)
        }
    }

    const displaySelectResource = () => {
        return (
            <ScrollView style={styles.nameListContainer}>
                {list.map((item, i) => (
                    <TouchableWithoutFeedback key={i} onPress={() => {setChosenResource(item.name)}}>
                        <View style={styles.resourceName}>
                        
                            <View style={styles.leftSide}>
                                <Text style={styles.nameText}>{item.name}</Text>
                            </View>
                            {
                                chosenResource === item.name 
                                ? <View style={styles.rightSide}>
                                    <AntDesign name="check" size={24} color="black" />
                                </View>
                                : null
                            }
    
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        )
    }

    const displayAddResource = () => {
        return (
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <Input value={resourceName} placeholder='Enter name...' onChangeText={newText => setResourceName(newText)}/>
                </View>
            </View>
        )
    }

    const displayAddSection = () => {
        return (
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <Input value={sectionTitle} placeholder='Enter name...' onChangeText={newText => setSectionTitle(newText)}/>
                </View>
                <View style={styles.secondInput}>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={setText}
                        value={text}
                        placeholder="Enter description..."
                    />
                </View>
            </View>
        )
    }

    return (

        <TouchableOpacity 
            style={styles.container}
            disabled={true}
        >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.modal}>
                <View style={styles.header}>
                    <Text style={styles.title}>{type === 'Select a Resource' ? `${type}` : `Add ${type}`}</Text>
                </View>
                {type === 'Select a Resource' 
                    ? displaySelectResource()
                    : type === 'Resource' ? displayAddResource() : displayAddSection()
                }
                <TouchableOpacity style={styles.saveButtonContainer} onPress={saveSelection}>
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
        height: 500,
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
        height: '75%',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    saveButtonContainer: {
        height: '10%',
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
    input: {
        width: '70%',
        height: '20%',
    },
    secondInput: {
        width: '80%',
        height: '80%',
        borderWidth: 1,
        marginBottom: 45
    },
    textInput: {
        fontSize: 18,
        padding: 5
    },
    itemStyle: {

    },
    resourceName: {
        borderBottomWidth: 1,
        padding: 20,
        borderColor: 'gray',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameText: {
        fontSize: 20,
        fontFamily: 'poppins-regular'
    },
    nameListContainer: {
        height: '75%',
    },
    leftSide: {

    },
    rightSide: {

    }
})

export default ResourceModal