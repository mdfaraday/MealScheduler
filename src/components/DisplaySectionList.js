import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

import ResourceItem from './ResourceItem'

const DisplaySectionList = ({ list }) => {

    return (
            <FlatList 
                data={list}
                keyExtractor={(l, i) => i.toString()}
                renderItem={({ item }) => {
                    return (
                        <ResourceItem 
                            title={item.title}
                            description={item.description}
                        />
                    )
                }}
            />
    )
}

{/* <View>
                {resources[index].sections.map(item => <Text>{item.title}</Text>)}
            </View> */}

const styles = StyleSheet.create({
    
})

export default DisplaySectionList