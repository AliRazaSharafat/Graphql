const { ApolloServer, gql } = require('apollo-server');

const students = [
    {
        id:1,
        name: 'Ali Raza Sharafat',
        email: 'ali@gmail.com',
        age: 22
    },
    {
        id:2,
        name: 'Umair Sharafat',
        email: 'umair@gmail.com',
        age: 20
    },
    {
        id:3,
        name: 'John Doe',
        email: 'john@gmail.com',
        age: 23
    }
];

const resolvers = {
    Query: {
        students: () => students,
    },
};

const typeDefs = gql`
  type Student {
    name: String
    email: String
    age: Int
    id:Int
  }
  type Query {
    students: [Student]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

