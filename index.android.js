/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    AsyncStorage,
    Button,
    TouchableHighlight,
} from 'react-native';

var timeLimit = 10;

var timer = null;

export default class game extends Component {

    constructor() {
        super();
        this.state = {
            highScore: 0,
            timeCount: 0,
            score: 0,
            playing: false,
            holes: [false, false, false, false, false, false, false, false, false]
        }
        AsyncStorage.getItem('highScore').then((value) => {
            this.setState({highScore: JSON.parse(value)})
        })
    }

    startGame() {
        this.setState({
            timeCount: timeLimit,
            playing: true,
            score: 0,
        });
        block = setInterval(() => {
            let currentHole = this.state.holes;
            currentHole[Math.floor(Math.random() * 9)] = true;
            if (!Math.floor(Math.random() * 2)) {
                currentHole = [false, false, false, false, false, false, false, false, false]
            }
            this.setState({
                holes: currentHole
            });
            if (!this.state.playing) {
                clearInterval(block);
                this.setState({
                    holes: [false, false, false, false, false, false, false, false, false]
                })
            }
        }, 500);
        timer = setInterval(() => {
            this.setState({
                timeCount: this.state.timeCount - 1
            });
            if (this.state.timeCount == 0) {
                this.stopGame();
            }
        }, 1000);
    }

    stopGame() {
        clearInterval(timer);
        if (this.state.score > this.state.highScore) {
            alert("You get highscore")
        }
        this.setState({
            playing: false,
            highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore
        });
        AsyncStorage.setItem('highScore', JSON.stringify(this.state.highScore))
    }

    handleTouch(holeNum) {
        if (this.state.holes[holeNum]) {
            this.setState({
                score: this.state.score + 1,
            });
            let markers = this.state.holes;
            markers[holeNum] = false;
            this.setState({holes: markers});
        }
    }

/*<TouchableHighlight  underlayColor = {'#cccccc'} onPress={() => this.handleTouch(9)}>
<Text>{this.state.holes[9] ? '🐱' : ''}</Text>
</TouchableHighlight>*/

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex: 3, flexDirection: 'row'}}>
                    <View style={styles.header}>
                        <View style={styles.headerDetail}>
                            <Text style={styles.textHeader}> High Score</Text>
                            <Text style={styles.textHeader}>{this.state.highScore}</Text>
                        </View>
                        <View style={styles.headerDetail}>
                            <Text style={styles.textHeader}>Timer</Text>
                            <Text style={styles.textHeader}>{this.state.timeCount}</Text>
                        </View>
                        <View style={styles.headerDetail}>
                            <Text style={styles.textHeader}>Score</Text>
                            <Text style={styles.textHeader}>{this.state.score}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 20, flexDirection: 'row'}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <TouchableHighlight  underlayColor = {'#1565c0'} style={{flex:1,backgroundColor:'#bbdefb', borderWidth:1,borderColor:'#00897b'}} onPress={() => this.handleTouch(0)}>
                            <Text style={{fontSize:80,justifyContent:'center',alignSelf:'center'}}>{this.state.holes[0] ? '🐧' : ''}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  underlayColor = {'#1565c0'} style={{flex:1,backgroundColor:'#bbdefb', borderWidth:1,borderColor:'#00897b'}} onPress={() => this.handleTouch(3)}>
                            <Text style={{fontSize:80,justifyContent:'center',alignSelf:'center'}}>{this.state.holes[3] ? '🐧' : ''}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  underlayColor = {'#1565c0'} style={{flex:1,backgroundColor:'#bbdefb', borderWidth:1,borderColor:'#00897b'}} onPress={() => this.handleTouch(6)}>
                            <Text style={{fontSize:80,justifyContent:'center',alignSelf:'center'}}>{this.state.holes[6] ? '🐧' : ''}</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <TouchableHighlight  underlayColor = {'#1565c0'} style={{flex:1,backgroundColor:'#bbdefb', borderWidth:1,borderColor:'#00897b'}} onPress={() => this.handleTouch(1)}>
                            <Text style={{fontSize:80,justifyContent:'center',alignSelf:'center'}}>{this.state.holes[1] ? '🐧' : ''}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  underlayColor = {'#1565c0'} style={{flex:1,backgroundColor:'#bbdefb', borderWidth:1,borderColor:'#00897b'}} onPress={() => this.handleTouch(4)}>
                            <Text style={{fontSize:80,justifyContent:'center',alignSelf:'center'}}>{this.state.holes[4] ? '🐧' : ''}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  underlayColor = {'#1565c0'} style={{flex:1,backgroundColor:'#bbdefb', borderWidth:1,borderColor:'#00897b'}} onPress={() => this.handleTouch(7)}>
                            <Text style={{fontSize:80,justifyContent:'center',alignSelf:'center'}}>{this.state.holes[7] ? '🐧' : ''}</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <TouchableHighlight  underlayColor = {'#1565c0'} style={{flex:1,backgroundColor:'#bbdefb', borderWidth:1,borderColor:'#00897b'}} onPress={() => this.handleTouch(2)}>
                            <Text style={{fontSize:80,justifyContent:'center',alignSelf:'center'}}>{this.state.holes[2] ? '🐧' : ''}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  underlayColor = {'#1565c0'} style={{flex:1,backgroundColor:'#bbdefb', borderWidth:1,borderColor:'#00897b'}} onPress={() => this.handleTouch(5)}>
                            <Text style={{fontSize:80,justifyContent:'center',alignSelf:'center'}}>{this.state.holes[5] ? '🐧' : ''}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  underlayColor = {'#1565c0'} style={{flex:1,backgroundColor:'#bbdefb', borderWidth:1,borderColor:'#00897b'}} onPress={() => this.handleTouch(8)}>
                            <Text style={{fontSize:80,justifyContent:'center',alignSelf:'center'}}>{this.state.holes[8] ? '🐧' : ''}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{flex:3}}>
                    <TouchableHighlight style={{flex:1,alignItems: 'center', borderWidth:1,borderColor:'#00897b'}} onPress={this.startGame.bind(this)}>
                        <Text style={{flex:1, paddingTop:20}}>
                            Start
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

styles = require('./Style');

AppRegistry.registerComponent('game', () => game);
