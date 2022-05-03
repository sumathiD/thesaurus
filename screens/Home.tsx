import { StyleSheet, Text, Image, View, TextInput, Alert, Modal, Button, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import Definition from './Definition';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(props: any) {

  const [modalVisible, setModalVisible] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [keyword, setKeyword] = useState('');
  const [audiourl, setAudiourl]= useState('');

  const [keywordR, setKeywordR] = useState('');

  let enteredText: any;
  const searchText = (enteredText: any) => {
    setSearchWord(enteredText);
  }

  const getInformation = () => {

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    return fetch(apiUrl)
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      let word = response[0].word;
      setKeyword(word);

      let audioFile = response[0].phonetics[0].audio;
      setAudiourl(audioFile);
    })


    
    // return fetch(`https://random-word-api.herokuapp.com/word`)
    
    // .then((data) => {
    //   return data.json();
    // })
    // .then((response) => {
    //   let word = response[0];
    //   console.log('R word is',word);
    // })

  } 

  const getRandom = () => {

    let apiUrlR = `https://random-word-api.herokuapp.com/word`;
    return fetch(apiUrlR)
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      // let word = response[0];
      // console.log('R word is',word);
      let wordR = response[0];
      setKeywordR(wordR);
      console.log('R word is', wordR);
    })
  } 

  return (


    <LinearGradient colors={['#fff', '#ccc']} style={styles.linearGradient} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}>
      <Image
        style={styles.homeImg}
        source=
        // {{ width: 100, height: 50, uri: 'https://reactnative.dev/img/tiny_logo.png', }}
        // {require("./assets/homeImg01.jpg")}
        {require("../assets/homeSearch01.jpg")}
      />
      <Text style={styles.homeTitle}>Thesaurus ssds</Text>
      <Text style={styles.homeSubTitle}>Find synonyms, antonyms, and related words</Text>
      <form>
        <View style={styles.searchSection}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            style={styles.input}
            // onSubmitEditing={() => props.navigation.navigate('Definition')}
            onSubmitEditing={getInformation}
            
            // onSubmitEditing={getRandom}
            placeholder="Search Word"
            clearButtonMode="always"
            onChangeText={searchText}
            value={enteredText}
          // onChangeText={onChangeText}
          // value={text}
          />
        </View>
      </form>
      <View>
      {/* <Text> RandomWordHere : {keywordR}</Text> */}
        <Text>Word : {keyword}</Text>
        <Text>AudioFile : {audiourl}</Text>
      </View>
      <Text style={styles.showHistory}>
        Show History
        <AntDesign name="down" style={styles.showHistoryIcon} color="black" />
      </Text>


      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={[styles.centeredView, styles.centeredViewIn]}>
            <View style={styles.modalView}>
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
              <View style={styles.modalText}>
                <Text style={styles.homeTitle}>Word of the day</Text>
                <Text style={styles.homeSubTitle}>Build your vocabulary with new words and definitions every day of the week</Text>
              </View>
              <LinearGradient colors={['#04619f', '#2a2a72']} style={styles.linearGradient01}>
                <View style={styles.definitionMain}>
                  <View style={styles.definitionMainLeft}>
                  <View>
                   
        <Text>Word : {keyword}</Text>
        <Text>AudioFile : {audiourl}</Text>
      </View>
                    <Text style={[styles.textWhite, styles.title01]}>
                      WordHere : "{keywordR}"
                    </Text>
                    <Text style={styles.textGray}>
                      <Text style={styles.textRed}>Show IPA</Text> -  test to check [od-hee-r]
                    </Text>
                  </View>

                  <View>
                    <AntDesign style={[styles.speakerBg, styles.textRightAlign]} name="sound" size={24} color="white" />
                  </View>
                </View>
                <View>
                  <Text style={styles.textGray}>
                    Search text definition or meaning will appear here
                  </Text>
                  <Text style={[styles.showHistory, styles.textRed]}>
                    Show More
                    <AntDesign name="down" style={styles.showHistoryIcon} color="red" />
                  </Text>
                </View>
              </LinearGradient>

              <View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                ><Text>
                    <AntDesign name="closesquare" size={24} color="white" />
                  </Text>
                </Pressable>
              </View>


            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
          onPressOut={getRandom}
        >
          <Text style={styles.textStyle}>
            <Ionicons name="today" size={24} color="black" />
          </Text>
        </Pressable>
      </View>
      <View>
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({

  // Home Starts
  container: {
    flex: 1,
    // backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  linearGradient: {

    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    // backgroundColor: '#f1f1f1'
  },
  linearGradient01: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    // backgroundColor: '#f1f1f1'
  },
  homeImg: {
    borderRadius: 15,
    width: '200px',
    height: '200px',
  },
  homeTitle: {
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
    padding: '10px'
  },
  homeSubTitle: {
    fontSize: 17,
    color: '#808080',
  },
  input: {
    width: 250,
    margin: 12,
    padding: 5,
    borderRadius: 10,
    borderWidth: 0,
  },
  showHistory: {
    fontSize: 14,
    padding: '10px 0',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  showHistoryIcon: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 12,
  },
  textRightAlign: {
    textAlign: 'right',
  },
  // Home Ends


  // Modal Styles
  centeredView: {
    justifyContent: "center",
    flexDirection: 'column',
    // marginTop: 22,
    backgroundColor: "white",
    opacity: 0.95,
  },
  centeredViewIn: {
    marginTop: 'auto',
    bottom: 0,
  },
  modalView: {
    // margin: 20,
    height: '100vh',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buttonClose: {
    backgroundColor: 'red',
    borderRadius: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    margin: '30px 0',
    textAlign: "center",
    marginTop: '20%',
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
    paddingRight: 5,
    paddingLeft: 5,
  },
  title01: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textWhite: {
    color: '#fff',
    textAlign: 'left',
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
  // Modal Ends

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    backgroundColor: '#f2f2f2',
  },
});


