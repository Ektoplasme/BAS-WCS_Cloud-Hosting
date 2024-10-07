import { ApolloServer } from '@apollo/server'; // preserve-line
import { startStandaloneServer } from '@apollo/server/standalone'; // preserve-line

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
    getBookById(bookId: ID): Book
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
    {
        id: "0",
        title: "The Awakening",
        author: "Kate Chopin",
      },
      {
        id: "1",
        title: "City of Glass",
        author: "Paul Auster",
      },
  ];

const resolvers = {
    Query: {
      books: () => books,
      getBookById: (_, args) => books.find((book) => book.id == args.bookId),
    },
    Mutation: {
        addBook: (_, args) => {
          const lastId = parseInt(books.at(-1).id, 10);
          const newId = (lastId + 1).toString();
          books.push({
            id: newId,
            title: args.title,
            author: args.author,
          });
          return books.at(-1);
        },
      },
  };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);