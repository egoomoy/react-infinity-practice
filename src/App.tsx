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
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import MyPage from './practice/MyPage';
import SmartHome from './practice/SmartHome';
import UseAsyncTest from './practice/UseAsyncTest';
import Todo from './components/Todo'

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router-dom';

import storage from './utils/storage';

const App: React.FC<RouteComponentProps> = props => {
  const httpLink = createHttpLink({ uri: 'http://localhost:4001/graphql', credentials: 'include' });

  const setAuthorizationLink = setContext((request, previousContext) => ({
    headers: { user_id: storage.getItem('CURRENT_USER') || null },
  }));

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, extensions }) => {
        if (extensions) {
          switch (extensions.code) {
            case 'data-exception':
            case 'validation-failed':
              props.history.push('/error'); // redirect to something-went-wrong page
              break;
            default:
              // default case
              props.history.push('/error'); // redirect to something-went-wrong page

              console.log(extensions.code);
          }
        }
      });
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      props.history.push('/error');
    }
  });

  // use with apollo-client
  const link = ApolloLink.from([setAuthorizationLink, errorLink, httpLink]);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return (
    <Fragment>
      <ApolloProvider client={client}>
        <div className="Content">
          <Switch>
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
            <Route exact path="/MyPage" component={MyPage}></Route>        
            <Route exact path="/SmartHome" component={SmartHome}></Route>
            <Route exact path="/UseAsyncTest" component={UseAsyncTest}></Route>
            <Route exact path="/Todo" component={Todo}></Route>
            <Route path="*" component={HooksUseMemo} />
            <Route path="/error" component={HooksUseMemo} />

            
          </Switch>
        </div>
        <div className="Mmenu">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/MyPage">MyPage</Link>
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
            <li>
              <Link to="/SmartHome">SmartHome</Link>
            </li>
            <li>
              <Link to="/UseAsyncTest">UseAsyncTest</Link>
            </li>
            <li>
              <Link to="/Todo">Todo</Link>
            </li>
          </ul>
        </div>
      </ApolloProvider>
    </Fragment>
  );
};

export default withRouter(App);
