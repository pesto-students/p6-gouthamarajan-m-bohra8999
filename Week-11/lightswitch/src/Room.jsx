import React from 'react';
import { connect } from 'react-redux';

class Room extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { isLightOn, setLight } = this.props;
    console.log(this.props);
    const lightedness = isLightOn ? 'lit' : 'dark';
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={setLight}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLightOn: state.isLightOn,
});

const mapDispatchToProps = {
  setLight: () => ({ type: 'TOGGLE' }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
