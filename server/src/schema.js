const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        "A query to get tracks array for the home page grid"
        tracksForHome: [Track!]!
    }

    "A group of modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author of a complete Track"
    type Author {
        "ID of Author"
        id: ID!
        "Name of Author"
        name: String!
        "Author's profile pic url"
        photo: String
    }

`;

module.exports = typeDefs;
