import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from 'components/Navigation/index';
import Home from 'pages/Home/Home';
import CreateMessage from 'pages/CreateMessage/CreateMessage';
import Message from 'pages/Message/Message';
import Footer from 'components/Footer/Footer';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ContentBox from './components/ContentBox';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
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
          </Routes>
        </ContentBox>
        <Footer />
      </Router>
    </ApolloProvider>
  );
};

export default App;
