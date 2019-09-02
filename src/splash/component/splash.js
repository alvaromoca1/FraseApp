import React,{Component} from 'react';
import{StyleSheet,View,Text,Image} from 'react-native';

class SplashScreen extends Component {
    render() {
      return (
        <View style={style.viewStyles}>
            <Image style={style.imglogo} source={require('../../img/logito.png')} />
        </View>
      );
    }
  }
  const style = StyleSheet.create({
        viewStyles:{
            backgroundColor:'#ffb301',
            flex:1,
            alignContent:'center',
            justifyContent:'center',
            alignItems:'center',
        },
        imglogo:{
            flex: 1, width: 150, height: 170, resizeMode: 'contain'
        }
  });
  export default SplashScreen;
  