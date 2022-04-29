import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';






export default class App extends React.Component{
  constructor (props){
    super (props);
    this.state = {
    numeros: []
    
    
    }


    
  }
    
    render (){
    let  megaSena = () => {
        let numeros = [];
        
          while (numeros.length < 6) {
              
              let aleatorio = Math.floor(Math.random() * 60);
      
              if (numeros.indexOf(aleatorio) == -1){
                  numeros.push(aleatorio);
                }          
          }
          
          this.setState({
            numeros
          })
          
          
      }
          return (
            <View style={styles.container}>
            {this.state.numeros.map((num)=><View style={{flexDirection: 'row'}}>{num}</View>)}
            <Button
              title="Gerar números"
              onPress={megaSena}
             />
            </View>
          );
      }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
