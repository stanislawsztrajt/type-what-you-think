import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ContentBox from './components/ContentBox';

import Navigation from 'components/Navigation';
import Home from 'pages/Home';
import CreateMessage from 'pages/CreateMessage';
import Message from 'pages/Message';
import ToDoList from 'pages/ToDoList';
import Footer from 'components/Footer';

import API_URL from 'constants/api';

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <ContentBox>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-message" element={<CreateMessage />} />
            <Route path="/messages/:id" element={<Message />} />
            <Route path="/to-do-list" element={<ToDoList />} />
          </Routes>
        </ContentBox>
        <Footer />
      </Router>
    </ApolloProvider>
  );
};

export default App;
