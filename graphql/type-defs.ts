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
    ratings: [Rating]
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
    isCanPark: Boolean
    isCanVisit: Boolean
    isTouristic: Boolean
    profile: Profile
    profileId: String
    itinaries: [Itinary]
    spotPicture: [SpotPicture]
    lat: Float
    lng: Float
    region: String
    ratings: [Rating]
  }

  type SpotPicture {
    id: String
    url: String
    spot: Spot
    spotId: String
  }

  type Product {
    id: String
    photoUrl: String
    gamePoints: Int
    price: Int
  }

  type Rating {
    id: String
    rate: Int
    profile: Profile
    profileId: String
    spot: Spot
    spotId: String
  }

  input CoordinateInput {
    lat: Int
    lng: Int
  }

  input SpotInput {
    name: String
    description: String
    lat: Float
    lng: Float
  }

  input PictureInput {
    url: String
  }

  enum OrderByEnum {
    asc
    desc
  }

  type Query {
    users: [User]
    itinaries: [Itinary]

    spots(
      profileId: String
      orderBy: OrderByEnum
      isCanPark: Boolean
      isCanVisit: Boolean
      isTouristic: Boolean
      searchValue: String
      region: String
      skip: Int
      take: Int
    ): [Spot]

    spot(id: String): Spot
    products: [Product]
    authByToken: User
    getBuyProductRequest(amount: Int): String
    ratings: [Rating]
    rating(id: String): Rating
  }

  type Mutation {
    signIn(email: String, password: String): User
    signUp(pseudo: String, email: String, password: String): User
    signOut: Boolean

    createProduct(photoUrl: String, gamePoints: Int, price: Int): Product
    buyProduct(gamePoint: Int, token: String, amount: Int): Profile

    updateUser(
      id: String
      email: String
      password: String
      pseudo: String
      photoUrl: String
    ): User

    deleteUser: Boolean!

    createSpot(
      name: String
      description: String
      lat: Float
      lng: Float
      isCanPark: Boolean
      isCanVisit: Boolean
      isTouristic: Boolean
      region: String
      pictures: [PictureInput]
    ): Spot

    updateSpot(
      id: String
      name: String
      description: String
      lat: Float
      lng: Float
      isCanPark: Boolean
      isCanVisit: Boolean
      isTouristic: Boolean
      region: String
    ): Profile

    deleteSpot(
      id: String
      name: String
      description: String
      lat: Float
      lng: Float
      isCanPark: Boolean
      isCanVisit: Boolean
      isTouristic: Boolean
      region: String
    ): Profile

    # createItinary(
    #   name: String
    #   description: String
    #   spots: [SpotInput]
    # ): Itinary

    createOrUpdateRating(
      ratingId: String
      spotId: String
      rate: Int
    ): Spot

    buysItinary(profileId: String, itinaryId: String): Profile

    createTest(text: String): Test

    addSpotPicture(url: String, spotId: String): SpotPicture
  }
`;

export default typeDefs;
