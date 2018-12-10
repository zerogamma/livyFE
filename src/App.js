import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getUserByLocation, getData } from './actions'

const mapStateToProps = state =>({
  ...state
})

const mapDispatchToProps = dispatch => {
  dispatch(getData())
  return { getUserByLocation: () => dispatch(getUserByLocation())}
}

function App({
  userReducer,getUserByLocation
}){
  debugger;
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
