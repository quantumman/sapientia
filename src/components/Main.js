import 'normalize.css';
import 'styles/App.css';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <div className='left-container'>
        </div>
        <div className='middle-container'>
        </div>
        <div className='right-container'>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
