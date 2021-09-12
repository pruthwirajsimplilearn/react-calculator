// import files
import React from 'react';
import Screen from './component/opScreen';
import Button from './component/button';

class App extends React.Component {
  render() {
    return (
      <div className="frame">        
        <div class="mainCalc">
          <Screen />
          <div className="button-row">
            <Button name={'Clear'} />
            <Button name={'Delete'} />
            <Button name={'.'} />
            <Button name={'/'} />
          </div>
          <div className="button-row">
            <Button name={'7'} />
            <Button name={'8'} />
            <Button name={'9'} />
            <Button name={'*'} />
          </div>
          <div className="button-row">
            <Button name={'4'} />
            <Button name={'5'} />
            <Button name={'6'} />
            <Button name={'-'} />
          </div>
          <div className="button-row">
            <Button name={'1'} />
            <Button name={'2'} />
            <Button name={'3'} />
            <Button name={'+'} />
          </div>
          <div className="button-row">
            <Button name={'0'} />
            <Button name={'='} />
          </div>
        </div>
      </div>
    );
  }
}

// Export App Component.
export default App;
