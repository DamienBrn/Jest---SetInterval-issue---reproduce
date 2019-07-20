import React from 'react'
import {Text, View, TouchableOpacity, TextInput, Button} from 'react-native'



export default class Timer extends React.Component{

    render(){
        return(
            <View>
                Repo test
            </View>
        )
    }

    
    constructor(props){
        super(props)
        this.state = {
            timer : {
                focus : {
                    minutes : 5,
                    seconds : 0
                },
                break : {
                    minutes : 1,
                    seconds : 0
                }
            },
            timerState : 'focus',
        }
    }

    decrementTimer(){
        let state = this.state.timerState
        setInterval(()=>{
            this.setState((previousState)=>{
                return {
                    timer : {
                        ...this.state.timer,
                        [state] : {
                            minutes : this.isDecrementMinutesOutOfRange(previousState.timer[state].minutes, previousState.timer[state].seconds - 1),
                            seconds : this.isDecrementSecondsOutOfRange(previousState.timer[state].seconds - 1),
                        }
                    }
                }
             })
        },1000)
    }

    isDecrementSecondsOutOfRange(seconds){
        return seconds === -1 ? 59 : seconds
    }
    
    isDecrementMinutesOutOfRange(minutes, seconds){
        return seconds === -1 ? (minutes - 1) : minutes
    }

}

