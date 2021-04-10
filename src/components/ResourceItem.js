import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResourceItem = ({ title, description }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleCard}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.descriptionCard}>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        //borderWidth: 1,
        alignItems: 'center'
    }, 
    title: {
        fontSize: 28,
        fontFamily: 'poppins-medium',
    },
    description: {
        fontSize: 20,
        fontFamily: 'poppins-regular',
    },
    titleCard: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginBottom: 5,
    },
    descriptionCard: {
        width: '90%',
        //height: 200,
        borderRadius: 5,
        minHeight: 100,
        padding: 5,
        marginBottom: 20,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        borderWidth: 0,
        backgroundColor: 'white', //this is necessary to keep the text from having a shadow. 
    },
    body: {
        //width: '100%'
    }
})

export default ResourceItem