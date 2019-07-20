import Timer from './Components/Timer'
import React from 'react'
import {shallow} from 'enzyme'


'use strict'

const wrapper = shallow(<Timer/>)
const componentInstance = wrapper.instance()


it('decrementTimer in "focus state" after 1 second should return 4:59', ()=>{
    jest.useFakeTimers();
    componentInstance.setState({...componentInstance.state,     
        timer : {...componentInstance.state.timer,
            focus : {...componentInstance.state.timer.focus,
                minutes : 5,
                seconds : 0
            }
        },
        timerState  :'focus'
    })
    expect(componentInstance.state.timer.focus.minutes).toEqual(5);
    expect(componentInstance.state.timer.focus.seconds).toEqual(0);
    componentInstance.decrementTimer();
    jest.advanceTimersByTime(1000);
    expect(componentInstance.state.timer.focus.minutes).toEqual(4);
    expect(componentInstance.state.timer.focus.seconds).toEqual(59);
    jest.useRealTimers();
})

it('decrementTimer in "focus state" after 5 seconds should return 4:55', ()=>{
    jest.useFakeTimers();
    componentInstance.setState({...componentInstance.state,     
        timer : {...componentInstance.state.timer,
            focus : {...componentInstance.state.timer.focus,
                minutes : 5,
                seconds : 0
            }
        },
        timerState  :'focus'
    })
    expect(componentInstance.state.timer.focus.minutes).toEqual(5);
    expect(componentInstance.state.timer.focus.seconds).toEqual(0);
    componentInstance.decrementTimer();
    jest.advanceTimersByTime(5000);
    expect(componentInstance.state.timer.focus.minutes).toEqual(4);
    expect(componentInstance.state.timer.focus.seconds).toEqual(55);
    jest.useRealTimers();
})