import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
class ViewLema extends Component{
    render() {
       return(
        <View style={styles.cont}>
            <View style={styles.text}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        </View> 
       );
    }
}
const styles = StyleSheet.create({
    cont: {
      flexDirection:'row'
    },
    text:{
        marginVertical:10,
        marginHorizontal:'20%'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    }
  });
export default ViewLema;