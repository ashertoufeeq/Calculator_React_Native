import React, {component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,} from 'react-native';

export default class App extends React.Component {
constructor(props){
  super(props)
this.state={
 textInputs:"",
 operatorsSym:["/","*","-","+"],
}
}
calculatePer(){
  const text = this.state.textInputs;
}

onPress=(text)=>{
 {  if(text === "AC"){
  this.setState({textInputs:""
  })
 
   }
   else if (text === "C"){let text = this.state.textInputs.split('');
   text.pop()
     this.setState({
      textInputs:text.join('')})
    }
   else if(text ==="%"){
    return calculatePer(this.state.textInputs)
   } 
  else 
  
 this.setState({
    
textInputs:this.state.textInputs+text})


}}
operation(operatorsSym){
switch(operatorsSym){
  case '/':
  case '*':
  case '-':
  case '+':
  const lastChar = this.state.textInputs.split('').pop();
  if(this.state.operatorsSym.indexOf(lastChar)>0){return}
  if(this.state.textInputs==""){return}
else {  this.setState({
  textInputs:this.state.textInputs + operatorsSym})
}}}

equal(){

}

  render() {
    let buttons=[["AC","C","%"],["7","8","9"],["4","5","6"],["1","2","3"],["","0","."]];
    let rows=[];
        for(let i=0;i<5;i++)
    {   let row=[];
        for(let j=0;j<3;j++){
      
      row.push(
        <TouchableOpacity  style={styles.button} onPress={this.onPress.bind(this,buttons[i][j])}>
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

    
    let operatorKeys=[];
    for(let i = 0 ; i<4;i++){
operatorKeys.push(
  <TouchableOpacity style={styles.button } onPress = {this.operation.bind(this,this.state.operatorsSym[i])}>
  <Text style={styles.buttonText}>{this.state.operatorsSym[i]}</Text>
  </TouchableOpacity>
)
    }
    
     return (
      <View style={styles.container}>
        <View style={styles.inputs} ></View>
        <View style={styles.results}>
        <Text style={styles.inputText}>{this.state.textInputs}</Text></View>
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
button:{
  padding:20,
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
   textAlign:"center"
},
buttonText:{
  color:"#444",
  fontSize:25,

  
  
}

});
