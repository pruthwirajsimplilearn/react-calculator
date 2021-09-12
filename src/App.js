// import files
import React from 'react';
import Screen from './component/opScreen';
import Button from './component/button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;

    switch (value) {
      case '=': {
        if (this.state.question !== '') {
          var ans = '';
          try {
            ans = eval(this.state.question);
          }
          catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined){
            this.setState({ answer: "Math Error" });
          }
          else{
            this.setState({ answer: ans, question: '' });
          }
          break;
        }
      }
      case 'Clear': {
        this.setState({ question: '', answer: '' });
        break;
      }

      case 'Delete': {
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      }

      default: {
        this.setState({ question: this.state.question += value })
        break;
      }
    }
  }

  render() {
    return (
      <div className="frame">
        <div className="mainCalc">
          <Screen question={this.state.question} answer={this.state.answer}/>
          <div className="button-row">
            <Button name={'Clear'} handleClick={this.handleClick} />
            <Button name={'Delete'} handleClick={this.handleClick} />
            <Button name={'.'} handleClick={this.handleClick} />
            <Button name={'/'} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button name={'7'} handleClick={this.handleClick} />
            <Button name={'8'} handleClick={this.handleClick} />
            <Button name={'9'} handleClick={this.handleClick} />
            <Button name={'*'} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button name={'4'} handleClick={this.handleClick} />
            <Button name={'5'} handleClick={this.handleClick} />
            <Button name={'6'} handleClick={this.handleClick} />
            <Button name={'-'} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button name={'1'} handleClick={this.handleClick} />
            <Button name={'2'} handleClick={this.handleClick} />
            <Button name={'3'} handleClick={this.handleClick} />
            <Button name={'+'} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button name={'0'} handleClick={this.handleClick} />
            <Button name={'='} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

// Export App Component.
export default App;
