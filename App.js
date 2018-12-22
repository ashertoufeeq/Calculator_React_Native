import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,} from 'react-native';

export default class App extends React.Component {
constructor(props){
  super(props)

}


  render() {
    let buttons=[["AC","Back","%"],["7","8","9"],["4","5","6"],["1","2","3"],["","0","."]];
    let rows=[];
        for(let i=0;i<5;i++)
    {   let row=[];
        for(let j=0;j<3;j++){
      
      row.push(
        <TouchableOpacity  style={styles.button}>
            <Text style={styles.buttonText}>
    {buttons[i][j]}
            </Text>
        
        </TouchableOpacity>
      );
    }
     rows.push(
       <View style={styles.numbers}>
          {row}
       </View>
      
     )
  
    } 

    let operatorsSym=["/","*","-","+"];
    let operatorKeys=[];
    for(let i = 0 ; i<4;i++){
operatorKeys.push(
  <TouchableOpacity style={styles.button }>
  <Text>{operatorsSym[i]}</Text>
  </TouchableOpacity>
)
    }
    
     return (
      <View style={styles.container}>
        <View style={styles.inputs} ></View>
        <View style={styles.results}>
        <Text style={styles.inputText}>0</Text></View>
        <View style={styles.operations}>
        <View style={styles.viewColumn}>
        {rows}
        </View>    
            <View style={styles.operators}>
            {operatorKeys}
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
buttonText:{
  color:"#444",
  fontSize:25,
   alignItems:"center",
   justifyContent:"space-between"
  
}

});
        /*   
<View style={styles.numbers}>
<Text style={styles.buttonAC}>AC</Text>
<Text style={styles.button}>Back</Text>
<Text style={styles.button}>%</Text>
</View>
<View >
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
<Text>1</Text>
<Text style={styles.button}>2</Text>
<Text style={styles.button}>3</Text>
</View>
<View style={styles.numbers}>
<Text style={styles.button}></Text>
<Text style={styles.button}>0</Text>
<Text style={styles.button}>.</Text>
</View>*/