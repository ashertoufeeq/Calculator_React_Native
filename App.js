import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputs} ></View>
        <View style={styles.results}>
        <Text style={styles.inputText}>0</Text></View>
        <View style={styles.operations}>
        <View style={styles.viewColumn}>
                        
              <View style={styles.numbers}>
              <Text style={styles.buttonAC}>AC</Text>
              <Text style={styles.button}>Back</Text>
              <Text style={styles.button}>%</Text>
              </View>
              <View style={styles.numbers}>
              <Text style={styles.button}>7</Text>
              <Text style={styles.button}>8</Text>
              <Text style={styles.button}>9</Text>
              </View>
              <View style={styles.numbers}>
              <Text style={styles.button}>4</Text>
              <Text style={styles.button}>5</Text>
              <Text style={styles.button}>6</Text>
              </View>
              <View style={styles.numbers}>
              <Text style={styles.button}>1</Text>
              <Text style={styles.button}>2</Text>
              <Text style={styles.button}>3</Text>
              </View>
              <View style={styles.numbers}>
              <Text style={styles.button}></Text>
              <Text style={styles.button}>0</Text>
              <Text style={styles.button}>.</Text>
              </View>
             
        </View>    
            <View style={styles.operators}>
            <Text style={styles.button}>/</Text>
              <Text style={styles.button}>*</Text>
              <Text style={styles.button}>-</Text>
              <Text style={styles.button}>+</Text>
              <Text style={styles.buttonEqual}>=</Text>
              
            </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d4d8',
    
  },
  inputs:{
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputText:{
    fontSize:50
  },
results:{padding:10,
  
  flex:3,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
},
operations:{flexDirection:"row",
  flex:6,
  backgroundColor:"#fff",
},
numbers:{flexDirection:"row",
  flex:3,
  backgroundColor:"#fff",

},
operators:{
flex :1,
backgroundColor:"#fff"
},
button:{padding:20,
  
  flex:3,
  borderWidth:.3,
  borderColor:"#444",
  color:"#444",
  fontSize:25,
   alignItems:"center",
   justifyContent:"space-between"
},
viewColumn:{
flex:3,
},
buttonEqual:{
  padding:20,
  flex:3,
  borderWidth:.3,
  backgroundColor:"#ff6c16",
  borderColor:"#444",
  color:"#444",
  fontSize:25,
   alignItems:"center",
   justifyContent:"space-between"
},
buttonAC:{
  padding:20,
  flex:3,
  borderWidth:.3,
  backgroundColor:"#fff",
  borderColor:"#444",
  color:"#ff6c16",
  fontSize:25,
   alignItems:"center",
   justifyContent:"space-between"
  
}

});
