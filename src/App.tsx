import React, { Fragment } from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import HooksUseEffect from './practice/HooksUseEffect';
import Home from '../src/practice/Home';
import HooksUseMemo from './practice/HooksUseMemo';
import HooksUseMemoTouseCallback from './practice/HooksUseMemoTouseCallback';
import HooksUseReducer from '../src/practice/HooksUseReducer';
import HooksRef from '../src/practice/HooksRef';
import HooksCustom from '../src/practice/HooksCustom';
import ImmutabilitySimple from './practice/ImmutabilitySimple';
import ImmutabilityPractice from './practice/ImmutabilityPractice';
import { Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Fragment>
      <div className="Content">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/CounterContainer" component={CounterContainer}></Route>
        <Route exact path="/HooksUseEffect" component={HooksUseEffect}></Route>
        <Route exact path="/HooksUseMemo" component={HooksUseMemo}></Route>
        <Route exact path="/HooksUseMemoTouseCallback" component={HooksUseMemoTouseCallback}></Route>
        <Route exact path="/HooksUseReducer" component={HooksUseReducer}></Route>
        <Route exact path="/HooksRef" component={HooksRef}></Route>
        <Route exact path="/ImmutabilitySimple" component={ImmutabilitySimple}></Route>
        <Route exact path="/ImmutabilityPractice" component={ImmutabilityPractice}></Route>
        <Route exact path="/HooksCustom" component={HooksCustom}></Route>
      </div>
      <div className="Mmenu">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/CounterContainer">CounterContainer</Link>
          </li>
          <li>
            <Link to="/HooksUseEffect">HooksUseEffect</Link>
          </li>
          <li>
            <Link to="/HooksUseMemo">HooksUseMemo</Link>
          </li>
          <li>
            <Link to="/HooksUseMemoTouseCallback">HooksUseMemoTouseCallback</Link>
          </li>
          <li>
            <Link to="/HooksUseReducer">HooksUseReducer</Link>
          </li>
          <li>
            <Link to="/HooksRef">HooksRef</Link>
          </li>
          <li>
            <Link to="/ImmutabilitySimple">ImmutabilitySimple</Link>
          </li>
          <li>
            <Link to="/ImmutabilityPractice">ImmutabilityPractice</Link>
          </li>
          <li>
            <Link to="/HooksCustom">HooksCustom</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default App;
