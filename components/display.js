import React from 'react';
import {StyleSheet,View,Text,KeyboardAvoidingView} from 'react-native';

function Display(props){
if(props.data == "Click the button to see result"){
return (<Text style={{textAlign:"center"}} >{props.data}</Text> )
}
else{
    return(
        
<View style={styles.textwrap}>
        <Text style={{}}>Percentage</Text>
        <Text style={styles.text}>{props.data.percentage}%</Text>
        <Text style={{}}>Suggestion</Text>
        <Text style={styles.text}>{props.data.result}</Text>

</View>


    )
}
}
export default Display;

const styles = StyleSheet.create({
    textwrap:{
        justifyContent:"center",
        flex:1,
        alignItems:"center",
    },
    text:{
        fontSize:28,
        textAlign:"center",
        fontFamily:"serif",
        fontWeight:"bold",
    }
   
})