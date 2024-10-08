
import { Arg, Field, InputType, Mutation, ObjectType, Query, Resolver, buildSchema } from 'type-graphql'


@ObjectType()
class Book {
  @Field()
  id: string
  @Field()
  title: string
  @Field()
  author: string
}

const books: Book[] = [
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

@InputType()
class BookInput {
  @Field()
  title: string;

  @Field()
  author: string;
}

@Resolver(Book)
class BookResolver {
  @Query(() => [Book])
  books() {
    return books;
  }

  @Query(() => Book)
  getBookById(@Arg("id") id: string) {
    return books.find((book) => book.id == id);
  }

  @Mutation(() => Book)
  addBook(@Arg("data") { title, author }: BookInput) {
    const lastId = parseInt(books.at(-1).id, 10);
    const id = (lastId + 1).toString();
    books.push({ title, author, id });
    return books.at(-1);
  }
}
// const resolvers = {
//   Query: {
//     books: () => books,
//     getBookById: (_, args) => books.find((book) => book.id == args.bookId),
//   },
//   Mutation: {
//       addBook: (_, args) => {
//         const lastId = parseInt(books.at(-1).id, 10);
//         const newId = (lastId + 1).toString();
//         books.push({
//           id: newId,
//           title: args.title,
//           author: args.author,
//         });
//         return books.at(-1);
//       },
//     },
// };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });