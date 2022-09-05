import React from "react";
import {StyleSheet, View, Text} from 'react-native';


export default class CalcDisplay extends React.Component{

    static defaultProps ={
        display: "",
    }

    render(){
        return (
            <View>
                <Text style={styles.displayText}>{this.props.display}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    displayText: {
        fontSize: 70,
        color: 'white',
        textAlign: 'right',
    },
});