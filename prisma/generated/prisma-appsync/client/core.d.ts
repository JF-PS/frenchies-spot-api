import type { Options, PrismaAppSyncOptionsType, ResolveParams } from './defs';
import { PrismaClient, Prisma } from './defs';
/**
 * ##  Prisma-AppSync Client ʲˢ
 *
 * Type-safe Prisma AppSync client for TypeScript & Node.js
 * @example
 * ```
 * const prismaAppSync = new PrismaAppSync()
 *
 * // lambda handler (AppSync Direct Lambda Resolver)
 * export const resolver = async (event: any, context: any) => {
 *     return await prismaAppSync.resolve({ event })
 * }
 * ```
 *
 *
 * Read more in our [docs](https://prisma-appsync.vercel.app).
 */
export declare class PrismaAppSync {
    options: Options;
    prismaClient: PrismaClient<Prisma.PrismaClientOptions, 'query' | 'info' | 'warn' | 'error'>;
    /**
   * ### Client Constructor
   *
   * Instantiate Prisma-AppSync Client.
   * @example
   * ```
   * const prismaAppSync = new PrismaAppSync()
   * ```
   *
   * @param {PrismaAppSyncOptionsType} options
   * @param {string} options.connectionString? - Prisma connection string (database connection URL).
   * @param {boolean} options.sanitize? - Enable sanitize inputs (parse xss + encode html).
   * @param {'INFO' | 'WARN' | 'ERROR'} options.logLevel? - Server logs level (visible in CloudWatch).
   * @param {number|false} options.defaultPagination? - Default pagination for list Query (items per page).
   * @param {number} options.maxDepth? - Maximum allowed GraphQL query depth.
   * @param {number} options.maxReqPerUserMinute? - Maximum allowed requests per user, per minute.
   *
   * @default
   * ```
   * {
   *   connectionString: process.env.DATABASE_URL,
   *   sanitize: true,
   *   logLevel: 'INFO',
   *   defaultPagination: 50,
   *   maxDepth: 3,
   *   maxReqPerUserMinute: 200
   * }
   * ```
   *
   *
   * Read more in our [docs](https://prisma-appsync.vercel.app).
   */
    constructor(options?: PrismaAppSyncOptionsType);
    /**
   * ###  Resolver
   *
   * Resolve the API request, based on the AppSync `event` received by the Direct Lambda Resolver.
   * @example
   * ```
   * await prismaAppSync.resolve({ event })
   *
   * // custom resolvers
   * await prismaAppSync.resolve<'notify'|'listPosts'>(
   *     event,
   *     resolvers: {
   *         // extend CRUD API with a custom `notify` query
   *         notify: async ({ args }) => { return { message: args.message } },
   *
   *         // disable one of the generated CRUD API query
   *         listPosts: false,
   *     }
   * })
   * ```
   *
   * @param {ResolveParams} resolveParams
   * @param {any} resolveParams.event - AppSync event received by the Direct Lambda Resolver.
   * @param {any} resolveParams.resolvers? - Custom resolvers (to extend the CRUD API).
   * @param {function} resolveParams.shield? - Shield configuration (to protect your API).
   * @param {function} resolveParams.hooks? - Hooks (to trigger functions based on events).
   * @returns Promise<result>
   *
   *
   * Read more in our [docs](https://prisma-appsync.vercel.app).
   */
    resolve<CustomResolvers = void>(resolveParams: ResolveParams<"countItinaries" | "countLogs" | "countProfiles" | "countSpotPictures" | "countSpots" | "countTests" | "countUsers" | "createItinary" | "createLog" | "createManyItinaries" | "createManyLogs" | "createManyProfiles" | "createManySpotPictures" | "createManySpots" | "createManyTests" | "createManyUsers" | "createProfile" | "createSpot" | "createSpotPicture" | "createTest" | "createUser" | "deleteItinary" | "deleteLog" | "deleteManyItinaries" | "deleteManyLogs" | "deleteManyProfiles" | "deleteManySpotPictures" | "deleteManySpots" | "deleteManyTests" | "deleteManyUsers" | "deleteProfile" | "deleteSpot" | "deleteSpotPicture" | "deleteTest" | "deleteUser" | "getItinary" | "getLog" | "getProfile" | "getSpot" | "getSpotPicture" | "getTest" | "getUser" | "listItinaries" | "listLogs" | "listProfiles" | "listSpotPictures" | "listSpots" | "listTests" | "listUsers" | "onCreatedItinary" | "onCreatedLog" | "onCreatedManyItinaries" | "onCreatedManyLogs" | "onCreatedManyProfiles" | "onCreatedManySpotPictures" | "onCreatedManySpots" | "onCreatedManyTests" | "onCreatedManyUsers" | "onCreatedProfile" | "onCreatedSpot" | "onCreatedSpotPicture" | "onCreatedTest" | "onCreatedUser" | "onDeletedItinary" | "onDeletedLog" | "onDeletedManyItinaries" | "onDeletedManyLogs" | "onDeletedManyProfiles" | "onDeletedManySpotPictures" | "onDeletedManySpots" | "onDeletedManyTests" | "onDeletedManyUsers" | "onDeletedProfile" | "onDeletedSpot" | "onDeletedSpotPicture" | "onDeletedTest" | "onDeletedUser" | "onMutatedItinary" | "onMutatedLog" | "onMutatedManyItinaries" | "onMutatedManyLogs" | "onMutatedManyProfiles" | "onMutatedManySpotPictures" | "onMutatedManySpots" | "onMutatedManyTests" | "onMutatedManyUsers" | "onMutatedProfile" | "onMutatedSpot" | "onMutatedSpotPicture" | "onMutatedTest" | "onMutatedUser" | "onUpdatedItinary" | "onUpdatedLog" | "onUpdatedManyItinaries" | "onUpdatedManyLogs" | "onUpdatedManyProfiles" | "onUpdatedManySpotPictures" | "onUpdatedManySpots" | "onUpdatedManyTests" | "onUpdatedManyUsers" | "onUpdatedProfile" | "onUpdatedSpot" | "onUpdatedSpotPicture" | "onUpdatedTest" | "onUpdatedUser" | "onUpsertedItinary" | "onUpsertedLog" | "onUpsertedProfile" | "onUpsertedSpot" | "onUpsertedSpotPicture" | "onUpsertedTest" | "onUpsertedUser" | "updateItinary" | "updateLog" | "updateManyItinaries" | "updateManyLogs" | "updateManyProfiles" | "updateManySpotPictures" | "updateManySpots" | "updateManyTests" | "updateManyUsers" | "updateProfile" | "updateSpot" | "updateSpotPicture" | "updateTest" | "updateUser" | "upsertItinary" | "upsertLog" | "upsertProfile" | "upsertSpot" | "upsertSpotPicture" | "upsertTest" | "upsertUser", Extract<CustomResolvers, string>>): Promise<any>;
}
