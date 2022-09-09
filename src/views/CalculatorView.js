require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.calc.calculator.js"); 

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CalcButton, CalcDisplay} from './../components';

export default class CalculatorView extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            display: "0", 
        };

        //Initialize the calculator
        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
        
    }
    


    //Functions
    onDigitPress = (digit) => {
        
        this.calc.addDigit(digit);
        this.setState({display: this.calc.getMainDisplay()});
    }
    onBinaryPress = (operator) => {
        this.calc.addBinaryOperator(operator);
        this.setState({display: this.calc.getMainDisplay()});
    }

    onClearPress = () => {
        this.calc.clear();
        this.setState({display: this.calc.getMainDisplay()});
    }

    onNegatePress = () => {
        this.calc.negate();
        this.setState({display: this.calc.getMainDisplay()});
    }

    onEqualPress = () => {
        this.calc.equalsPressed();
        this.setState({display: this.calc.getMainDisplay()});
    }

    onBackSpacePress = () => {
        this.calc.backspace();''
        this.setState({display: this.calc.getMainDisplay()});
    }


    render(){
        return(
            <View style={styles.mainContainer}> 
                <View style={styles.displayContainer}>
                    <CalcDisplay display={this.state.display} />
                </View>

                <View style={styles.buttonContainer}>  
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={this.onClearPress} title="C" color="black" backgroundColor="#1E88E5"/>
                        <CalcButton onPress={this.onNegatePress}  title="+/-" color="black" backgroundColor="#1E88E5"/>
                        <CalcButton onPress={this.onBackSpacePress} title="<-" color="black" backgroundColor="#1E88E5"/>
                        <CalcButton onPress={() => {this.onBinaryPress(this.oc.DivisionOperator)}} title="/" color="black" backgroundColor="#7CB342"/>                
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton  onPress={() => {this.onDigitPress("7")}} title="7" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onDigitPress("8")}} title="8" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onDigitPress("9")}} title="9" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onBinaryPress(this.oc.MultiplicationOperator)}} title="X" color="black" backgroundColor="#7CB342"/>                
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton  onPress={() => {this.onDigitPress("4")}} title="4" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onDigitPress("5")}} title="5" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onDigitPress("6")}} title="6" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onBinaryPress(this.oc.SubtractionOperator)}} title="-" color="black" backgroundColor="#7CB342"/>                
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton  onPress={() => {this.onDigitPress("1")}} title="1" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onDigitPress("2")}} title="2" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onDigitPress("3")}} title="3" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onBinaryPress(this.oc.AdditionOperator)}} title="+" color="black" backgroundColor="#7CB342"/>                
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton  onPress={() => {this.onDigitPress("0")}} title="0" color="white" backgroundColor="#00897B"/>
                        <CalcButton  onPress={() => {this.onDigitPress(".")}} title="." color="white" backgroundColor="#00897B"/> 
                        <CalcButton  onPress={this.onEqualPress} title="=" color="black" backgroundColor="#7CB342" customStyle={{width:187}}/>                
                    </View> 
                </View>
            </View>
        );
    }

  

}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1, 
        backgroundColor: 'black',
    },
    displayContainer: {
        flex: 1, 
        justifyContent:'flex-end'
    },
    buttonContainer: {
        paddingBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row', 
        justifyContent:'space-between'
    },
});
