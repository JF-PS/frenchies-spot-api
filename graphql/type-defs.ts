import { gql } from "apollo-server-micro";

const typeDefs = gql`
  enum Role {
    SIMPLE_USER
    USER_ADMIN
  }

  type User {
    id: String
    email: String
    password: String
    token: String
    role: Role
    profile: Profile
  }

  type Profile {
    id: String
    pseudo: String
    photoUrl: String
    gamePoint: Int
    userId: String
    user: User
    itinaries: [Itinary]
  }

  type Itinary {
    id: String
    name: String
    description: String
    gamePoint: Int
    photoUrl: String
    profiles: [Profile]
  }

  type Test {
    id: String
    text: String
  }

  enum Role {
    SIMPLE_USER
    USER_ADMIN
  }

  type Spot {
    id: String
    name: String
    description: String
    rating: Int
    isCanPark: Boolean
    isCanVisit: Boolean
    isTouristic: Boolean
  }

  type Error {
    errorMessage: String
  }

  type Query {
    users: [User]
    itinaries: [Itinary]
    spots: [Spot]
  }

  type Mutation {
    signIn(email: String, password: String): User
    signUp(pseudo: String, email: String, password: String): User

    # createSpot(name: String, description: String): Spot

    createItinary(name: String, description: String): Itinary
    buysItinary(profileId: String, itinaryId: String): Profile

    createTest(text: String): Test
  }
`;

export default typeDefs;
