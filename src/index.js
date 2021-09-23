import React from 'react'
import ReactDom from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache,HttpLink } from "@apollo/client";


import { App } from './App'

const cache = new InMemoryCache()

const link = new HttpLink({
    uri: 'https://petgram-server-clgg.vercel.app/graphql'
})

const client = new ApolloClient({
    cache,
    link
})

// ReactDom.render(<App/>, document.getElementById('app'))

ReactDom.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>, 
document.getElementById('app'))