import React, {Component} from 'react'
import { Text, View,FlatList } from 'react-native'

import ViewCard from '../component/viewLema.js';

class Listscontent extends Component{
    render() {
        const list=[
            {
                frase:'No pierdas tiempo con lo que no merece la pena, focalízate en lo realmente importante. ',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GKCkUiGHo9jy9y29gYWj8hHp2fawsKUmSTXOgeta1xbl9DwK',
                key:'1'
            },
            {
                frase:'Tener éxito no es aleatorio, es una variable dependiente del esfuerzo. ',
                img:'https://img.pixers.pics/pho_wat(s3:700/FO/31/98/58/43/700_FO31985843_94747c5f124fa973158731cb5b34c0f1.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/vinilos-logo-restaurante-catering.jpg.jpg',
                key:'2'
            },
            {
                frase: 'Es imposible disfrutar de vivencias positivas con una mentalidad negativa. ' ,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJoWWbuxec3lMUioT-lykpV6RjiRz05wOTkcgrEJQ6AauFaKE',
                key:'3'
            }
        ]
        var numero_aleatorio = Math.random();
        const ite= Math.floor(numero_aleatorio * 3);
       return(
        <View>
            {/* <FlatList
            data={list}
            renderItem={({item})=> */}
            <ViewCard 
                title={list[ite].frase}>
            </ViewCard>

            {/* </FlatList> */}
        </View>
        ); 
    }
}
export default Listscontent