import React from 'react';

class Form extends React.PureComponent {
  state = {};
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="city..." />
        <input type="text" name="country" placeholder="country..." />
        <button>Get weather</button>
      </form>
    );
  }
}

export default Form;
