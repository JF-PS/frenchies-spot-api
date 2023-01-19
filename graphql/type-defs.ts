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
    spots: [Spot]
  }

  type Itinary {
    id: String
    name: String
    description: String
    gamePoint: Int
    photoUrl: String
    profiles: [Profile]
    spots: [Spot]
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
    profile: Profile
    profileId: String
    itinaries: [Itinary]
    lat: Int
    lng: Int
  }

  input CoordinateInput {
    lat: Int
    lng: Int
  }

  input SpotInput {
    name: String
    description: String
    lat: Int
    lng: Int
  }

  type Query {
    users: [User]
    itinaries: [Itinary]
    spots(
      orderBy: String, 
      isCanPark: Boolean, 
      isCanVisit: Boolean, 
      isTouristic: Boolean,
      searchValue: String,
      region: String,
    ): [Spot]
    spot(id: String): Spot
  }

  type Mutation {
    signIn(email: String, password: String): User
    signUp(pseudo: String, email: String, password: String): User

    createSpot(
      name: String
      description: String
      lat: Int
      lng: Int
      isCanPark: Boolean
      isCanVisit: Boolean
      isTouristic: Boolean
    ): Profile

    updateSpot(
      id: String
      name: String
      description: String
      lat: Int
      lng: Int
      isCanPark: Boolean
      isCanVisit: Boolean
      isTouristic: Boolean
    ): Profile

    deleteSpot(
      id: String
      name: String
      description: String
      lat: Int
      lng: Int
      isCanPark: Boolean
      isCanVisit: Boolean
      isTouristic: Boolean
    ): Profile

    createItinary(
      name: String
      description: String
      spots: [SpotInput]
    ): Itinary

    buysItinary(profileId: String, itinaryId: String): Profile

    createTest(text: String): Test
  }
`;

export default typeDefs;
