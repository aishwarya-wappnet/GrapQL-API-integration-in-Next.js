## Dependences 
```
npm install @apollo/client graphql
```

## GraphQL api used: https://swapi-graphql.netlify.app/.netlify/functions/index

## Query
```
query Query {
  allFilms {
    films {
      title
      director
      releaseDate
      speciesConnection {
        species {
          name
          classification
          homeworld {
            name
          }
        }
      }
    }
  }
}
```
## Flow

### app/Page.tsx

- This is a server component. (By default all components in next.js are server components unless u explicting include the "user client" on the top of the page)
- The GraphQl api is called here using ApolloClient.
- The data returned from the api is an object which is passed as props to the <Data /> component.

### app/Data.tsx

- This is a client component as we have included the "use client" here.
- This component displays the data.

## Resources

https://blog.logrocket.com/why-use-next-js-apollo/
