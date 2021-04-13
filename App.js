import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {TextInput,Appbar,Button} from 'react-native-paper';
import Display from './components/display'

export default function App() {
  const [people,setPeople]=useState({names:""})
    const [people2,setPeople2]=useState({name:""})
    const [result,setResult]=useState("Click the button to see result")
 function Api(){ 
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${people.name}&sname=${people2.name}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "a31c7d80d3msh9f3d28b0ea4a70bp1c9afejsn4fdcb533b79a",
      "x-rapidapi-host": "love-calculator.p.rapidapi.com"
    }
  })
  .then(api=>api.json())
  .then((val)=>{
  setResult(val)
}
  )
 }
 function Show(){
   return(
    <Text style={styles.result}>Your Result</Text>
   
   )
 }
  return (
    <View style={styles.container}>
    <Appbar.Header>
      <Appbar.BackAction />
      <Appbar.Content title="Love Calculator" 
          subtitle="How Much You like other" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
        <TextInput
    style={{ margin: 15 }}
    label='First Name'
    mode='outlined'
    onChangeText={(text)=>
      setPeople({name:text})
    }
  />
  <TextInput
    style={{ margin: 15 }}
    label='Second Name'
    mode='outlined'
    onChangeText={(text)=>
      setPeople2({name:text})
    }
  />
  <Button icon="upload" mode="contained" style={{margin:15,padding:5}} onPress={() => Api()}>
    Calculate
  </Button>
  <Show />
  <Display data={result} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  result:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:28
  }
});
