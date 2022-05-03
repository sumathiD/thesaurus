import React from 'react';
import { StyleSheet, FlatList, View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import SoundPlayer from 'react-native-sound-player'

export default function Definition() {

    return (
        <LinearGradient colors={['#fff', '#ccc']} style={styles.linearGradient}>

            <View style={styles.searchSectionMain}>
                <MaterialCommunityIcons name="chevron-left" size={24} color="black" />
                <View style={styles.searchSection}>
                    <AntDesign name="search1" size={24} color="black" />
                    <TextInput
                        style={styles.input}
                    // onChangeText={onChangeText}
                    // value={text}
                    />
                    <AntDesign name="closesquare" size={24} color="gray" />
                </View>
            </View>
            <LinearGradient colors={['#04619f', '#2a2a72']} style={styles.linearGradient}>
                <View style={styles.definitionMain}>
                    <View style={styles.definitionMainLeft}>
                        <Text style={[styles.textWhite, styles.title01]}>
                         flourish
                        </Text>
                        <Text style={styles.textGray}>
                            <Text style={styles.textRed}>Show IPA</Text> -  test to check flow [od-hee-r]
                        </Text>
                    </View>

                    <View>
                        <AntDesign  styles={{ textAlign: 'right' }} style={styles.speakerBg} name="sound" size={24} color="white" />
                    </View>
                </View>
            </LinearGradient>
            <View>
            <Text style={styles.mainDefTitle}>
                    Definition  
                </Text>
            
            <View style={styles.contentBox}>
                <Text style={styles.title01}>Noun</Text>
                <Text style={styles.content}>1. (of a living organism) grow or develop in a healthy or vigorous way, especially as the result of a particularly congenial environment.</Text>
                <Text style={styles.content}>2. develop rapidly and successfully.</Text>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.title01}>Adjectives</Text>
                <Text style={styles.content}>1. (of a living organism) grow or develop in a healthy or vigorous way, especially as the result of a particularly congenial environment.</Text>
                <Text style={styles.content}>2. develop rapidly and successfully.</Text>
            </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'white',
        // backgroundColor: '#f1f1f1'
    },
    input: {
        height: 45,
        width: 250,
        padding: 10,

    },
    showHistoryIcon: {
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 12,
    },
    searchSectionMain: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5,
        margin: 20,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 0,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        backgroundColor: '#fff',
    },
    definitionMain: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'left',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5,
    },
    definitionMainLeft: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    title01: {
        fontSize: 20,
        paddingBottom: 10,
        // fontWeight: 700,
        textAlign: 'left',
    },
    textWhite: {
        color: '#fff',
    },
    textRed: {
        color: 'brown',
    },
    textGray: {
        color: '#ccc',
    },
    speakerBg: {
        backgroundColor: 'brown',
        padding: 5,
        borderRadius: 5,
    },
    mainDefTitle: {
        color: '#333',
        marginTop: 20,
        textAlign: 'left',
        fontSize: 25,
        marginLeft: 20,
    },
    // Noun Starts
    contentBox: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 20,
        borderRadius: 10,
    },
    content: {
        fontSize: 15,
        color: '#000',
        paddingBottom: 10,
    },

})