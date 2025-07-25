import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '../ui/Card'

const CartType = ({name}: {name: string}) => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity>
                <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
            <Card data={{
                title: name,
                timeFrame: '1 hour',
                view: '100',
                creator: 'John Doe',
                language: 'eng',
                thumbel: 'data:image/jpeg;base64,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'
            }} />
            <Card data={{
                title: name,
                timeFrame: '1 hour',
                view: '100',
                creator: 'John Doe',
                language: 'esp',
                thumbel: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROo-k2l48OP9KevYsCIUAOIl8b8gl0Pf-Czvf2FVefzZ2J7qHB1gxYlY3bpE2Pac_xFfM&usqp=CAU'
            }} />
            <Card data={{
                title: name,
                timeFrame: '1 hour',
                view: '100',
                creator: 'John Doe',
                language: 'fra',
                thumbel: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmL877bGfIIcbOHDqLP4-0qNNhuXGp8OWIFVjAZJsfoytPh1-D_7lSG86w0wbVAHsToI&usqp=CAU'
            }} />
            <Card data={{
                title: name,
                timeFrame: '1 hour',
                view: '100',
                creator: 'John Doe',
                language: 'ger',
                thumbel: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXo_7F6WafBzIPR5ddNiV_0Xf3WkwbJmhYvQ&s'
            }} />
        </View>
    </ScrollView>
  )
}

export default CartType

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "auto"
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: "4%",
        height: "auto"
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    seeMore:{
        fontSize: 20,
        fontFamily: 'Lora-Bold',
        // margin: 10,
        color: '#fff',
        textDecorationLine: 'underline',
    },
    title:{
        fontSize: 24,
        fontFamily: 'Lora-Bold',

        color: '#fff',
    }
})