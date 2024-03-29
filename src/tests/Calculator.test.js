import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add two numbers', () =>{
    const button1 = container.getByTestId('number1')
    const button4 = container.getByTestId('number4')
    const addition = container.getByTestId('operator-add')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4)
    fireEvent.click(addition)
    fireEvent.click(button1)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('5');

  })

  it('should be able to subtract two numbers', () =>{
    const button7 = container.getByTestId('number7')
    const button4 = container.getByTestId('number4')
    const subtract = container.getByTestId('operator-subtract')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7)
    fireEvent.click(subtract)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to multiply two numbers', () =>{
    const button3 = container.getByTestId('number3')
    const button5 = container.getByTestId('number5')
    const multiply = container.getByTestId('operator-multiply')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3)
    fireEvent.click(multiply)
    fireEvent.click(button5)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should be able to divide two numbers', () =>{
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button7 = container.getByTestId('number7')
    const divide = container.getByTestId('operator-divide')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divide)
    fireEvent.click(button7)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to concatenate two numbers', () =>{
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    expect(runningTotal.textContent).toEqual('21');
  })



  it('should be able to chain multiple operations together', () =>{
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const button4 = container.getByTestId('number4')
    const divide = container.getByTestId('operator-divide')
    const multiply = container.getByTestId('operator-multiply')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divide)
    fireEvent.click(button3)
    fireEvent.click(multiply)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('28');
  })

  it('should be able to clear numbers without affecting the calculation', () =>{
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const button4 = container.getByTestId('number4')
    const button5 = container.getByTestId('number5')
    const divide = container.getByTestId('operator-divide')
    const multiply = container.getByTestId('operator-multiply')
    const addition = container.getByTestId('operator-add')
    const clear = container.getByTestId('clear')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divide)
    fireEvent.click(button3)
    fireEvent.click(addition)
    fireEvent.click(button5)
    fireEvent.click(clear)
    fireEvent.click(button4)
    fireEvent.click(multiply)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('44');
  })
})

