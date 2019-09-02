import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SplashScreen from './src/splash/component/splash.js';
import FraseView from './src/frase/container/data.js';

export default class App extends Component{

  state={
    fra:[],
    fraces: [{
      id: 1,
      frase: "frase 1",
    },
    {
      id:2,
      latitude: "frase 2",
    }]
  } 
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    var numero_aleatorio = Math.random();
    const data = await this.performTimeConsumingTask();
    const ite= Math.floor(numero_aleatorio * 10);
    if (data !== null) {
      this.setState({ isLoading: false });
    }
    this.setState({
      fra:this.state.fraces,
    })
    console.log(this.state.fraces);
  }
  
  render(){
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <View style={styles.container}>
        <FraseView/>
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
  link:{
    color:'#0984e3',
    paddingTop:'10%',
    paddingHorizontal:'5%',
    textAlign:'center'
  }
});
