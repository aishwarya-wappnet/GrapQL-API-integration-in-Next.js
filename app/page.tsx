// "use client"
import Image from 'next/image'
import Link from 'next/link'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Data from './Data';


const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

async function getData() {
  const { data } = await client.query({
    query: gql`
    query {
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
  `,
  });
  console.log(data)
 return data;
}

export default async function Home() {

  const data = await getData();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Data data={data}/>
      <Link href="/about">Go to about page</Link>
    </main>
  )
}
