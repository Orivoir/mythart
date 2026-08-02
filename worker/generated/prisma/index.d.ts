
/**
 * Client
**/

import * as runtime from "./runtime/client.js"
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model ChapterAssetReference
 * 
 */
export type ChapterAssetReference = $Result.DefaultSelection<Prisma.$ChapterAssetReferencePayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model EbookCollaborator
 * 
 */
export type EbookCollaborator = $Result.DefaultSelection<Prisma.$EbookCollaboratorPayload>
/**
 * Model EbookCollaboratorChapterAccess
 * 
 */
export type EbookCollaboratorChapterAccess = $Result.DefaultSelection<Prisma.$EbookCollaboratorChapterAccessPayload>
/**
 * Model EbookCustomRole
 * 
 */
export type EbookCustomRole = $Result.DefaultSelection<Prisma.$EbookCustomRolePayload>
/**
 * Model Ebook
 * 
 */
export type Ebook = $Result.DefaultSelection<Prisma.$EbookPayload>
/**
 * Model Snapshot
 * 
 */
export type Snapshot = $Result.DefaultSelection<Prisma.$SnapshotPayload>
/**
 * Model SnapshotFile
 * 
 */
export type SnapshotFile = $Result.DefaultSelection<Prisma.$SnapshotFilePayload>
/**
 * Model UploadHandshake
 * 
 */
export type UploadHandshake = $Result.DefaultSelection<Prisma.$UploadHandshakePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionStatus: {
  none: "none",
  trialing: "trialing",
  active: "active",
  past_due: "past_due",
  canceled: "canceled",
  unpaid: "unpaid"
}

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PlanType: {
  free: "free",
  premium: "premium",
  pro: "pro"
}

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const AssetReferenceType: {
  COVER: "COVER",
  CONTENT_IMAGE: "CONTENT_IMAGE",
  SNAPSHOT: "SNAPSHOT",
  EXPORT: "EXPORT"
}

export type AssetReferenceType = (typeof AssetReferenceType)[keyof typeof AssetReferenceType]


export const CollaborationRole: {
  OWNER: "OWNER",
  AUTHOR: "AUTHOR",
  TRANSLATOR: "TRANSLATOR",
  PROOFREADER: "PROOFREADER",
  EDITOR: "EDITOR"
}

export type CollaborationRole = (typeof CollaborationRole)[keyof typeof CollaborationRole]


export const CollaborationPermission: {
  EBOOK_READ: "EBOOK_READ",
  EBOOK_UPDATE_METADATA: "EBOOK_UPDATE_METADATA",
  EBOOK_DELETE: "EBOOK_DELETE",
  CHAPTER_READ: "CHAPTER_READ",
  CHAPTER_CREATE: "CHAPTER_CREATE",
  CHAPTER_UPDATE: "CHAPTER_UPDATE",
  CHAPTER_DELETE: "CHAPTER_DELETE",
  SNAPSHOT_READ: "SNAPSHOT_READ",
  SNAPSHOT_CREATE: "SNAPSHOT_CREATE",
  SNAPSHOT_RESTORE: "SNAPSHOT_RESTORE",
  ASSET_UPLOAD: "ASSET_UPLOAD",
  ASSET_DELETE: "ASSET_DELETE",
  COVER_UPDATE: "COVER_UPDATE",
  COLLABORATOR_INVITE: "COLLABORATOR_INVITE",
  COLLABORATOR_REMOVE: "COLLABORATOR_REMOVE",
  ROLE_ASSIGN: "ROLE_ASSIGN"
}

export type CollaborationPermission = (typeof CollaborationPermission)[keyof typeof CollaborationPermission]


export const SnapshotStatus: {
  PENDING: "PENDING",
  READY: "READY",
  FAILED: "FAILED"
}

export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus]


export const UploadHandshakeStatus: {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  EXPIRED: "EXPIRED"
}

export type UploadHandshakeStatus = (typeof UploadHandshakeStatus)[keyof typeof UploadHandshakeStatus]

}

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type AssetReferenceType = $Enums.AssetReferenceType

export const AssetReferenceType: typeof $Enums.AssetReferenceType

export type CollaborationRole = $Enums.CollaborationRole

export const CollaborationRole: typeof $Enums.CollaborationRole

export type CollaborationPermission = $Enums.CollaborationPermission

export const CollaborationPermission: typeof $Enums.CollaborationPermission

export type SnapshotStatus = $Enums.SnapshotStatus

export const SnapshotStatus: typeof $Enums.SnapshotStatus

export type UploadHandshakeStatus = $Enums.UploadHandshakeStatus

export const UploadHandshakeStatus: typeof $Enums.UploadHandshakeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Assets
 * const assets = await prisma.asset.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions["log"]> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Assets
   * const assets = await prisma.asset.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapterAssetReference`: Exposes CRUD operations for the **ChapterAssetReference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChapterAssetReferences
    * const chapterAssetReferences = await prisma.chapterAssetReference.findMany()
    * ```
    */
  get chapterAssetReference(): Prisma.ChapterAssetReferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ebookCollaborator`: Exposes CRUD operations for the **EbookCollaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EbookCollaborators
    * const ebookCollaborators = await prisma.ebookCollaborator.findMany()
    * ```
    */
  get ebookCollaborator(): Prisma.EbookCollaboratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ebookCollaboratorChapterAccess`: Exposes CRUD operations for the **EbookCollaboratorChapterAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EbookCollaboratorChapterAccesses
    * const ebookCollaboratorChapterAccesses = await prisma.ebookCollaboratorChapterAccess.findMany()
    * ```
    */
  get ebookCollaboratorChapterAccess(): Prisma.EbookCollaboratorChapterAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ebookCustomRole`: Exposes CRUD operations for the **EbookCustomRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EbookCustomRoles
    * const ebookCustomRoles = await prisma.ebookCustomRole.findMany()
    * ```
    */
  get ebookCustomRole(): Prisma.EbookCustomRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ebook`: Exposes CRUD operations for the **Ebook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ebooks
    * const ebooks = await prisma.ebook.findMany()
    * ```
    */
  get ebook(): Prisma.EbookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snapshot`: Exposes CRUD operations for the **Snapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Snapshots
    * const snapshots = await prisma.snapshot.findMany()
    * ```
    */
  get snapshot(): Prisma.SnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snapshotFile`: Exposes CRUD operations for the **SnapshotFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SnapshotFiles
    * const snapshotFiles = await prisma.snapshotFile.findMany()
    * ```
    */
  get snapshotFile(): Prisma.SnapshotFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadHandshake`: Exposes CRUD operations for the **UploadHandshake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadHandshakes
    * const uploadHandshakes = await prisma.uploadHandshake.findMany()
    * ```
    */
  get uploadHandshake(): Prisma.UploadHandshakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? "Please either choose `select` or `include`."
      : T extends SelectAndOmit
        ? "Please either choose `select` or `omit`."
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends bigint
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Asset: "Asset",
    ChapterAssetReference: "ChapterAssetReference",
    Chapter: "Chapter",
    EbookCollaborator: "EbookCollaborator",
    EbookCollaboratorChapterAccess: "EbookCollaboratorChapterAccess",
    EbookCustomRole: "EbookCustomRole",
    Ebook: "Ebook",
    Snapshot: "Snapshot",
    SnapshotFile: "SnapshotFile",
    UploadHandshake: "UploadHandshake",
    User: "User",
    Account: "Account",
    VerificationToken: "VerificationToken"
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this["params"]["extArgs"], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "asset" | "chapterAssetReference" | "chapter" | "ebookCollaborator" | "ebookCollaboratorChapterAccess" | "ebookCustomRole" | "ebook" | "snapshot" | "snapshotFile" | "uploadHandshake" | "user" | "account" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      ChapterAssetReference: {
        payload: Prisma.$ChapterAssetReferencePayload<ExtArgs>
        fields: Prisma.ChapterAssetReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterAssetReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterAssetReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload>
          }
          findFirst: {
            args: Prisma.ChapterAssetReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterAssetReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload>
          }
          findMany: {
            args: Prisma.ChapterAssetReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload>[]
          }
          create: {
            args: Prisma.ChapterAssetReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload>
          }
          createMany: {
            args: Prisma.ChapterAssetReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterAssetReferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload>[]
          }
          delete: {
            args: Prisma.ChapterAssetReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload>
          }
          update: {
            args: Prisma.ChapterAssetReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload>
          }
          deleteMany: {
            args: Prisma.ChapterAssetReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterAssetReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterAssetReferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload>[]
          }
          upsert: {
            args: Prisma.ChapterAssetReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterAssetReferencePayload>
          }
          aggregate: {
            args: Prisma.ChapterAssetReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapterAssetReference>
          }
          groupBy: {
            args: Prisma.ChapterAssetReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterAssetReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterAssetReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterAssetReferenceCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      EbookCollaborator: {
        payload: Prisma.$EbookCollaboratorPayload<ExtArgs>
        fields: Prisma.EbookCollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EbookCollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EbookCollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload>
          }
          findFirst: {
            args: Prisma.EbookCollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EbookCollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload>
          }
          findMany: {
            args: Prisma.EbookCollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload>[]
          }
          create: {
            args: Prisma.EbookCollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload>
          }
          createMany: {
            args: Prisma.EbookCollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EbookCollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload>[]
          }
          delete: {
            args: Prisma.EbookCollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload>
          }
          update: {
            args: Prisma.EbookCollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.EbookCollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EbookCollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EbookCollaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload>[]
          }
          upsert: {
            args: Prisma.EbookCollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorPayload>
          }
          aggregate: {
            args: Prisma.EbookCollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEbookCollaborator>
          }
          groupBy: {
            args: Prisma.EbookCollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<EbookCollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.EbookCollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<EbookCollaboratorCountAggregateOutputType> | number
          }
        }
      }
      EbookCollaboratorChapterAccess: {
        payload: Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>
        fields: Prisma.EbookCollaboratorChapterAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EbookCollaboratorChapterAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EbookCollaboratorChapterAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload>
          }
          findFirst: {
            args: Prisma.EbookCollaboratorChapterAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EbookCollaboratorChapterAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload>
          }
          findMany: {
            args: Prisma.EbookCollaboratorChapterAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload>[]
          }
          create: {
            args: Prisma.EbookCollaboratorChapterAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload>
          }
          createMany: {
            args: Prisma.EbookCollaboratorChapterAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EbookCollaboratorChapterAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload>[]
          }
          delete: {
            args: Prisma.EbookCollaboratorChapterAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload>
          }
          update: {
            args: Prisma.EbookCollaboratorChapterAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload>
          }
          deleteMany: {
            args: Prisma.EbookCollaboratorChapterAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EbookCollaboratorChapterAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EbookCollaboratorChapterAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload>[]
          }
          upsert: {
            args: Prisma.EbookCollaboratorChapterAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCollaboratorChapterAccessPayload>
          }
          aggregate: {
            args: Prisma.EbookCollaboratorChapterAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEbookCollaboratorChapterAccess>
          }
          groupBy: {
            args: Prisma.EbookCollaboratorChapterAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<EbookCollaboratorChapterAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.EbookCollaboratorChapterAccessCountArgs<ExtArgs>
            result: $Utils.Optional<EbookCollaboratorChapterAccessCountAggregateOutputType> | number
          }
        }
      }
      EbookCustomRole: {
        payload: Prisma.$EbookCustomRolePayload<ExtArgs>
        fields: Prisma.EbookCustomRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EbookCustomRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EbookCustomRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload>
          }
          findFirst: {
            args: Prisma.EbookCustomRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EbookCustomRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload>
          }
          findMany: {
            args: Prisma.EbookCustomRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload>[]
          }
          create: {
            args: Prisma.EbookCustomRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload>
          }
          createMany: {
            args: Prisma.EbookCustomRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EbookCustomRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload>[]
          }
          delete: {
            args: Prisma.EbookCustomRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload>
          }
          update: {
            args: Prisma.EbookCustomRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload>
          }
          deleteMany: {
            args: Prisma.EbookCustomRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EbookCustomRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EbookCustomRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload>[]
          }
          upsert: {
            args: Prisma.EbookCustomRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookCustomRolePayload>
          }
          aggregate: {
            args: Prisma.EbookCustomRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEbookCustomRole>
          }
          groupBy: {
            args: Prisma.EbookCustomRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<EbookCustomRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.EbookCustomRoleCountArgs<ExtArgs>
            result: $Utils.Optional<EbookCustomRoleCountAggregateOutputType> | number
          }
        }
      }
      Ebook: {
        payload: Prisma.$EbookPayload<ExtArgs>
        fields: Prisma.EbookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EbookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EbookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          findFirst: {
            args: Prisma.EbookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EbookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          findMany: {
            args: Prisma.EbookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>[]
          }
          create: {
            args: Prisma.EbookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          createMany: {
            args: Prisma.EbookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EbookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>[]
          }
          delete: {
            args: Prisma.EbookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          update: {
            args: Prisma.EbookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          deleteMany: {
            args: Prisma.EbookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EbookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EbookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>[]
          }
          upsert: {
            args: Prisma.EbookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          aggregate: {
            args: Prisma.EbookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEbook>
          }
          groupBy: {
            args: Prisma.EbookGroupByArgs<ExtArgs>
            result: $Utils.Optional<EbookGroupByOutputType>[]
          }
          count: {
            args: Prisma.EbookCountArgs<ExtArgs>
            result: $Utils.Optional<EbookCountAggregateOutputType> | number
          }
        }
      }
      Snapshot: {
        payload: Prisma.$SnapshotPayload<ExtArgs>
        fields: Prisma.SnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          findFirst: {
            args: Prisma.SnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          findMany: {
            args: Prisma.SnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>[]
          }
          create: {
            args: Prisma.SnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          createMany: {
            args: Prisma.SnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>[]
          }
          delete: {
            args: Prisma.SnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          update: {
            args: Prisma.SnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          deleteMany: {
            args: Prisma.SnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>[]
          }
          upsert: {
            args: Prisma.SnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          aggregate: {
            args: Prisma.SnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnapshot>
          }
          groupBy: {
            args: Prisma.SnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<SnapshotCountAggregateOutputType> | number
          }
        }
      }
      SnapshotFile: {
        payload: Prisma.$SnapshotFilePayload<ExtArgs>
        fields: Prisma.SnapshotFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnapshotFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnapshotFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload>
          }
          findFirst: {
            args: Prisma.SnapshotFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnapshotFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload>
          }
          findMany: {
            args: Prisma.SnapshotFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload>[]
          }
          create: {
            args: Prisma.SnapshotFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload>
          }
          createMany: {
            args: Prisma.SnapshotFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnapshotFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload>[]
          }
          delete: {
            args: Prisma.SnapshotFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload>
          }
          update: {
            args: Prisma.SnapshotFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload>
          }
          deleteMany: {
            args: Prisma.SnapshotFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnapshotFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SnapshotFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload>[]
          }
          upsert: {
            args: Prisma.SnapshotFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotFilePayload>
          }
          aggregate: {
            args: Prisma.SnapshotFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnapshotFile>
          }
          groupBy: {
            args: Prisma.SnapshotFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnapshotFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnapshotFileCountArgs<ExtArgs>
            result: $Utils.Optional<SnapshotFileCountAggregateOutputType> | number
          }
        }
      }
      UploadHandshake: {
        payload: Prisma.$UploadHandshakePayload<ExtArgs>
        fields: Prisma.UploadHandshakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadHandshakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadHandshakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload>
          }
          findFirst: {
            args: Prisma.UploadHandshakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadHandshakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload>
          }
          findMany: {
            args: Prisma.UploadHandshakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload>[]
          }
          create: {
            args: Prisma.UploadHandshakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload>
          }
          createMany: {
            args: Prisma.UploadHandshakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadHandshakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload>[]
          }
          delete: {
            args: Prisma.UploadHandshakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload>
          }
          update: {
            args: Prisma.UploadHandshakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload>
          }
          deleteMany: {
            args: Prisma.UploadHandshakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadHandshakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadHandshakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload>[]
          }
          upsert: {
            args: Prisma.UploadHandshakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHandshakePayload>
          }
          aggregate: {
            args: Prisma.UploadHandshakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadHandshake>
          }
          groupBy: {
            args: Prisma.UploadHandshakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadHandshakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadHandshakeCountArgs<ExtArgs>
            result: $Utils.Optional<UploadHandshakeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = "pretty" | "colorless" | "minimal"
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    asset?: AssetOmit
    chapterAssetReference?: ChapterAssetReferenceOmit
    chapter?: ChapterOmit
    ebookCollaborator?: EbookCollaboratorOmit
    ebookCollaboratorChapterAccess?: EbookCollaboratorChapterAccessOmit
    ebookCustomRole?: EbookCustomRoleOmit
    ebook?: EbookOmit
    snapshot?: SnapshotOmit
    snapshotFile?: SnapshotFileOmit
    uploadHandshake?: UploadHandshakeOmit
    user?: UserOmit
    account?: AccountOmit
    verificationToken?: VerificationTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error"
  export type LogDefinition = {
    level: LogLevel
    emit: "stdout" | "event"
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy"

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    chapterReferences: number
    ebookCoverImages: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapterReferences?: boolean | AssetCountOutputTypeCountChapterReferencesArgs
    ebookCoverImages?: boolean | AssetCountOutputTypeCountEbookCoverImagesArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountChapterReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterAssetReferenceWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountEbookCoverImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    assetReferences: number
    collaboratorAccess: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assetReferences?: boolean | ChapterCountOutputTypeCountAssetReferencesArgs
    collaboratorAccess?: boolean | ChapterCountOutputTypeCountCollaboratorAccessArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountAssetReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterAssetReferenceWhereInput
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountCollaboratorAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCollaboratorChapterAccessWhereInput
  }


  /**
   * Count Type EbookCollaboratorCountOutputType
   */

  export type EbookCollaboratorCountOutputType = {
    chapterAccess: number
  }

  export type EbookCollaboratorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapterAccess?: boolean | EbookCollaboratorCountOutputTypeCountChapterAccessArgs
  }

  // Custom InputTypes
  /**
   * EbookCollaboratorCountOutputType without action
   */
  export type EbookCollaboratorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorCountOutputType
     */
    select?: EbookCollaboratorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EbookCollaboratorCountOutputType without action
   */
  export type EbookCollaboratorCountOutputTypeCountChapterAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCollaboratorChapterAccessWhereInput
  }


  /**
   * Count Type EbookCustomRoleCountOutputType
   */

  export type EbookCustomRoleCountOutputType = {
    collaborators: number
  }

  export type EbookCustomRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborators?: boolean | EbookCustomRoleCountOutputTypeCountCollaboratorsArgs
  }

  // Custom InputTypes
  /**
   * EbookCustomRoleCountOutputType without action
   */
  export type EbookCustomRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRoleCountOutputType
     */
    select?: EbookCustomRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EbookCustomRoleCountOutputType without action
   */
  export type EbookCustomRoleCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCollaboratorWhereInput
  }


  /**
   * Count Type EbookCountOutputType
   */

  export type EbookCountOutputType = {
    snapshots: number
    chapters: number
    collaborators: number
    customRoles: number
  }

  export type EbookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshots?: boolean | EbookCountOutputTypeCountSnapshotsArgs
    chapters?: boolean | EbookCountOutputTypeCountChaptersArgs
    collaborators?: boolean | EbookCountOutputTypeCountCollaboratorsArgs
    customRoles?: boolean | EbookCountOutputTypeCountCustomRolesArgs
  }

  // Custom InputTypes
  /**
   * EbookCountOutputType without action
   */
  export type EbookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCountOutputType
     */
    select?: EbookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EbookCountOutputType without action
   */
  export type EbookCountOutputTypeCountSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapshotWhereInput
  }

  /**
   * EbookCountOutputType without action
   */
  export type EbookCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }

  /**
   * EbookCountOutputType without action
   */
  export type EbookCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCollaboratorWhereInput
  }

  /**
   * EbookCountOutputType without action
   */
  export type EbookCountOutputTypeCountCustomRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCustomRoleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    ebooks: number
    assets: number
    uploadHandshakes: number
    ebookCollaborations: number
    createdCustomRoles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    ebooks?: boolean | UserCountOutputTypeCountEbooksArgs
    assets?: boolean | UserCountOutputTypeCountAssetsArgs
    uploadHandshakes?: boolean | UserCountOutputTypeCountUploadHandshakesArgs
    ebookCollaborations?: boolean | UserCountOutputTypeCountEbookCollaborationsArgs
    createdCustomRoles?: boolean | UserCountOutputTypeCountCreatedCustomRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEbooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadHandshakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadHandshakeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEbookCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCollaboratorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCustomRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCustomRoleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type AssetSumAggregateOutputType = {
    sizeBytes: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    key: string | null
    bucket: string | null
    fileName: string | null
    mimeType: string | null
    sizeBytes: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    key: string | null
    bucket: string | null
    fileName: string | null
    mimeType: string | null
    sizeBytes: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    key: number
    bucket: number
    fileName: number
    mimeType: number
    sizeBytes: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type AssetSumAggregateInputType = {
    sizeBytes?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    key?: true
    bucket?: true
    fileName?: true
    mimeType?: true
    sizeBytes?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    key?: true
    bucket?: true
    fileName?: true
    mimeType?: true
    sizeBytes?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    key?: true
    bucket?: true
    fileName?: true
    mimeType?: true
    sizeBytes?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt: Date
    updatedAt: Date
    ownerId: string
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    bucket?: boolean
    fileName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    chapterReferences?: boolean | Asset$chapterReferencesArgs<ExtArgs>
    ebookCoverImages?: boolean | Asset$ebookCoverImagesArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    bucket?: boolean
    fileName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    bucket?: boolean
    fileName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    key?: boolean
    bucket?: boolean
    fileName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "bucket" | "fileName" | "mimeType" | "sizeBytes" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    chapterReferences?: boolean | Asset$chapterReferencesArgs<ExtArgs>
    ebookCoverImages?: boolean | Asset$ebookCoverImagesArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      chapterReferences: Prisma.$ChapterAssetReferencePayload<ExtArgs>[]
      ebookCoverImages: Prisma.$EbookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      bucket: string
      fileName: string
      mimeType: string
      sizeBytes: number
      createdAt: Date
      updatedAt: Date
      ownerId: string
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["Asset"], meta: { name: "Asset" } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs["orderBy"] }
        : { orderBy?: AssetGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapterReferences<T extends Asset$chapterReferencesArgs<ExtArgs> = {}>(args?: Subset<T, Asset$chapterReferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ebookCoverImages<T extends Asset$ebookCoverImagesArgs<ExtArgs> = {}>(args?: Subset<T, Asset$ebookCoverImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", "String">
    readonly key: FieldRef<"Asset", "String">
    readonly bucket: FieldRef<"Asset", "String">
    readonly fileName: FieldRef<"Asset", "String">
    readonly mimeType: FieldRef<"Asset", "String">
    readonly sizeBytes: FieldRef<"Asset", "Int">
    readonly createdAt: FieldRef<"Asset", "DateTime">
    readonly updatedAt: FieldRef<"Asset", "DateTime">
    readonly ownerId: FieldRef<"Asset", "String">
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.chapterReferences
   */
  export type Asset$chapterReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    where?: ChapterAssetReferenceWhereInput
    orderBy?: ChapterAssetReferenceOrderByWithRelationInput | ChapterAssetReferenceOrderByWithRelationInput[]
    cursor?: ChapterAssetReferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterAssetReferenceScalarFieldEnum | ChapterAssetReferenceScalarFieldEnum[]
  }

  /**
   * Asset.ebookCoverImages
   */
  export type Asset$ebookCoverImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    where?: EbookWhereInput
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    cursor?: EbookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookScalarFieldEnum | EbookScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model ChapterAssetReference
   */

  export type AggregateChapterAssetReference = {
    _count: ChapterAssetReferenceCountAggregateOutputType | null
    _min: ChapterAssetReferenceMinAggregateOutputType | null
    _max: ChapterAssetReferenceMaxAggregateOutputType | null
  }

  export type ChapterAssetReferenceMinAggregateOutputType = {
    id: string | null
    assetId: string | null
    chapterId: string | null
    type: $Enums.AssetReferenceType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterAssetReferenceMaxAggregateOutputType = {
    id: string | null
    assetId: string | null
    chapterId: string | null
    type: $Enums.AssetReferenceType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterAssetReferenceCountAggregateOutputType = {
    id: number
    assetId: number
    chapterId: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChapterAssetReferenceMinAggregateInputType = {
    id?: true
    assetId?: true
    chapterId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterAssetReferenceMaxAggregateInputType = {
    id?: true
    assetId?: true
    chapterId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterAssetReferenceCountAggregateInputType = {
    id?: true
    assetId?: true
    chapterId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChapterAssetReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChapterAssetReference to aggregate.
     */
    where?: ChapterAssetReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterAssetReferences to fetch.
     */
    orderBy?: ChapterAssetReferenceOrderByWithRelationInput | ChapterAssetReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterAssetReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterAssetReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterAssetReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChapterAssetReferences
    **/
    _count?: true | ChapterAssetReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterAssetReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterAssetReferenceMaxAggregateInputType
  }

  export type GetChapterAssetReferenceAggregateType<T extends ChapterAssetReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateChapterAssetReference]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapterAssetReference[P]>
      : GetScalarType<T[P], AggregateChapterAssetReference[P]>
  }




  export type ChapterAssetReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterAssetReferenceWhereInput
    orderBy?: ChapterAssetReferenceOrderByWithAggregationInput | ChapterAssetReferenceOrderByWithAggregationInput[]
    by: ChapterAssetReferenceScalarFieldEnum[] | ChapterAssetReferenceScalarFieldEnum
    having?: ChapterAssetReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterAssetReferenceCountAggregateInputType | true
    _min?: ChapterAssetReferenceMinAggregateInputType
    _max?: ChapterAssetReferenceMaxAggregateInputType
  }

  export type ChapterAssetReferenceGroupByOutputType = {
    id: string
    assetId: string
    chapterId: string
    type: $Enums.AssetReferenceType
    createdAt: Date
    updatedAt: Date
    _count: ChapterAssetReferenceCountAggregateOutputType | null
    _min: ChapterAssetReferenceMinAggregateOutputType | null
    _max: ChapterAssetReferenceMaxAggregateOutputType | null
  }

  type GetChapterAssetReferenceGroupByPayload<T extends ChapterAssetReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterAssetReferenceGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof ChapterAssetReferenceGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterAssetReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterAssetReferenceGroupByOutputType[P]>
        }
      >
    >


  export type ChapterAssetReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    chapterId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapterAssetReference"]>

  export type ChapterAssetReferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    chapterId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapterAssetReference"]>

  export type ChapterAssetReferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    chapterId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapterAssetReference"]>

  export type ChapterAssetReferenceSelectScalar = {
    id?: boolean
    assetId?: boolean
    chapterId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChapterAssetReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetId" | "chapterId" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["chapterAssetReference"]>
  export type ChapterAssetReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }
  export type ChapterAssetReferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }
  export type ChapterAssetReferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $ChapterAssetReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChapterAssetReference"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
      chapter: Prisma.$ChapterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assetId: string
      chapterId: string
      type: $Enums.AssetReferenceType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chapterAssetReference"]>
    composites: {}
  }

  type ChapterAssetReferenceGetPayload<S extends boolean | null | undefined | ChapterAssetReferenceDefaultArgs> = $Result.GetResult<Prisma.$ChapterAssetReferencePayload, S>

  type ChapterAssetReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterAssetReferenceFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: ChapterAssetReferenceCountAggregateInputType | true
    }

  export interface ChapterAssetReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["ChapterAssetReference"], meta: { name: "ChapterAssetReference" } }
    /**
     * Find zero or one ChapterAssetReference that matches the filter.
     * @param {ChapterAssetReferenceFindUniqueArgs} args - Arguments to find a ChapterAssetReference
     * @example
     * // Get one ChapterAssetReference
     * const chapterAssetReference = await prisma.chapterAssetReference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterAssetReferenceFindUniqueArgs>(args: SelectSubset<T, ChapterAssetReferenceFindUniqueArgs<ExtArgs>>): Prisma__ChapterAssetReferenceClient<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChapterAssetReference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterAssetReferenceFindUniqueOrThrowArgs} args - Arguments to find a ChapterAssetReference
     * @example
     * // Get one ChapterAssetReference
     * const chapterAssetReference = await prisma.chapterAssetReference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterAssetReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterAssetReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterAssetReferenceClient<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChapterAssetReference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAssetReferenceFindFirstArgs} args - Arguments to find a ChapterAssetReference
     * @example
     * // Get one ChapterAssetReference
     * const chapterAssetReference = await prisma.chapterAssetReference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterAssetReferenceFindFirstArgs>(args?: SelectSubset<T, ChapterAssetReferenceFindFirstArgs<ExtArgs>>): Prisma__ChapterAssetReferenceClient<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChapterAssetReference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAssetReferenceFindFirstOrThrowArgs} args - Arguments to find a ChapterAssetReference
     * @example
     * // Get one ChapterAssetReference
     * const chapterAssetReference = await prisma.chapterAssetReference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterAssetReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterAssetReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterAssetReferenceClient<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChapterAssetReferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAssetReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChapterAssetReferences
     * const chapterAssetReferences = await prisma.chapterAssetReference.findMany()
     * 
     * // Get first 10 ChapterAssetReferences
     * const chapterAssetReferences = await prisma.chapterAssetReference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterAssetReferenceWithIdOnly = await prisma.chapterAssetReference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterAssetReferenceFindManyArgs>(args?: SelectSubset<T, ChapterAssetReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChapterAssetReference.
     * @param {ChapterAssetReferenceCreateArgs} args - Arguments to create a ChapterAssetReference.
     * @example
     * // Create one ChapterAssetReference
     * const ChapterAssetReference = await prisma.chapterAssetReference.create({
     *   data: {
     *     // ... data to create a ChapterAssetReference
     *   }
     * })
     * 
     */
    create<T extends ChapterAssetReferenceCreateArgs>(args: SelectSubset<T, ChapterAssetReferenceCreateArgs<ExtArgs>>): Prisma__ChapterAssetReferenceClient<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChapterAssetReferences.
     * @param {ChapterAssetReferenceCreateManyArgs} args - Arguments to create many ChapterAssetReferences.
     * @example
     * // Create many ChapterAssetReferences
     * const chapterAssetReference = await prisma.chapterAssetReference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterAssetReferenceCreateManyArgs>(args?: SelectSubset<T, ChapterAssetReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChapterAssetReferences and returns the data saved in the database.
     * @param {ChapterAssetReferenceCreateManyAndReturnArgs} args - Arguments to create many ChapterAssetReferences.
     * @example
     * // Create many ChapterAssetReferences
     * const chapterAssetReference = await prisma.chapterAssetReference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChapterAssetReferences and only return the `id`
     * const chapterAssetReferenceWithIdOnly = await prisma.chapterAssetReference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterAssetReferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterAssetReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChapterAssetReference.
     * @param {ChapterAssetReferenceDeleteArgs} args - Arguments to delete one ChapterAssetReference.
     * @example
     * // Delete one ChapterAssetReference
     * const ChapterAssetReference = await prisma.chapterAssetReference.delete({
     *   where: {
     *     // ... filter to delete one ChapterAssetReference
     *   }
     * })
     * 
     */
    delete<T extends ChapterAssetReferenceDeleteArgs>(args: SelectSubset<T, ChapterAssetReferenceDeleteArgs<ExtArgs>>): Prisma__ChapterAssetReferenceClient<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChapterAssetReference.
     * @param {ChapterAssetReferenceUpdateArgs} args - Arguments to update one ChapterAssetReference.
     * @example
     * // Update one ChapterAssetReference
     * const chapterAssetReference = await prisma.chapterAssetReference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterAssetReferenceUpdateArgs>(args: SelectSubset<T, ChapterAssetReferenceUpdateArgs<ExtArgs>>): Prisma__ChapterAssetReferenceClient<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChapterAssetReferences.
     * @param {ChapterAssetReferenceDeleteManyArgs} args - Arguments to filter ChapterAssetReferences to delete.
     * @example
     * // Delete a few ChapterAssetReferences
     * const { count } = await prisma.chapterAssetReference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterAssetReferenceDeleteManyArgs>(args?: SelectSubset<T, ChapterAssetReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChapterAssetReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAssetReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChapterAssetReferences
     * const chapterAssetReference = await prisma.chapterAssetReference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterAssetReferenceUpdateManyArgs>(args: SelectSubset<T, ChapterAssetReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChapterAssetReferences and returns the data updated in the database.
     * @param {ChapterAssetReferenceUpdateManyAndReturnArgs} args - Arguments to update many ChapterAssetReferences.
     * @example
     * // Update many ChapterAssetReferences
     * const chapterAssetReference = await prisma.chapterAssetReference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChapterAssetReferences and only return the `id`
     * const chapterAssetReferenceWithIdOnly = await prisma.chapterAssetReference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChapterAssetReferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterAssetReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChapterAssetReference.
     * @param {ChapterAssetReferenceUpsertArgs} args - Arguments to update or create a ChapterAssetReference.
     * @example
     * // Update or create a ChapterAssetReference
     * const chapterAssetReference = await prisma.chapterAssetReference.upsert({
     *   create: {
     *     // ... data to create a ChapterAssetReference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChapterAssetReference we want to update
     *   }
     * })
     */
    upsert<T extends ChapterAssetReferenceUpsertArgs>(args: SelectSubset<T, ChapterAssetReferenceUpsertArgs<ExtArgs>>): Prisma__ChapterAssetReferenceClient<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChapterAssetReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAssetReferenceCountArgs} args - Arguments to filter ChapterAssetReferences to count.
     * @example
     * // Count the number of ChapterAssetReferences
     * const count = await prisma.chapterAssetReference.count({
     *   where: {
     *     // ... the filter for the ChapterAssetReferences we want to count
     *   }
     * })
    **/
    count<T extends ChapterAssetReferenceCountArgs>(
      args?: Subset<T, ChapterAssetReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ChapterAssetReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChapterAssetReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAssetReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapterAssetReferenceAggregateArgs>(args: Subset<T, ChapterAssetReferenceAggregateArgs>): Prisma.PrismaPromise<GetChapterAssetReferenceAggregateType<T>>

    /**
     * Group by ChapterAssetReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAssetReferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChapterAssetReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterAssetReferenceGroupByArgs["orderBy"] }
        : { orderBy?: ChapterAssetReferenceGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChapterAssetReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterAssetReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChapterAssetReference model
   */
  readonly fields: ChapterAssetReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChapterAssetReference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterAssetReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChapterAssetReference model
   */
  interface ChapterAssetReferenceFieldRefs {
    readonly id: FieldRef<"ChapterAssetReference", "String">
    readonly assetId: FieldRef<"ChapterAssetReference", "String">
    readonly chapterId: FieldRef<"ChapterAssetReference", "String">
    readonly type: FieldRef<"ChapterAssetReference", "AssetReferenceType">
    readonly createdAt: FieldRef<"ChapterAssetReference", "DateTime">
    readonly updatedAt: FieldRef<"ChapterAssetReference", "DateTime">
  }
    

  // Custom InputTypes
  /**
   * ChapterAssetReference findUnique
   */
  export type ChapterAssetReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    /**
     * Filter, which ChapterAssetReference to fetch.
     */
    where: ChapterAssetReferenceWhereUniqueInput
  }

  /**
   * ChapterAssetReference findUniqueOrThrow
   */
  export type ChapterAssetReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    /**
     * Filter, which ChapterAssetReference to fetch.
     */
    where: ChapterAssetReferenceWhereUniqueInput
  }

  /**
   * ChapterAssetReference findFirst
   */
  export type ChapterAssetReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    /**
     * Filter, which ChapterAssetReference to fetch.
     */
    where?: ChapterAssetReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterAssetReferences to fetch.
     */
    orderBy?: ChapterAssetReferenceOrderByWithRelationInput | ChapterAssetReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChapterAssetReferences.
     */
    cursor?: ChapterAssetReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterAssetReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterAssetReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChapterAssetReferences.
     */
    distinct?: ChapterAssetReferenceScalarFieldEnum | ChapterAssetReferenceScalarFieldEnum[]
  }

  /**
   * ChapterAssetReference findFirstOrThrow
   */
  export type ChapterAssetReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    /**
     * Filter, which ChapterAssetReference to fetch.
     */
    where?: ChapterAssetReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterAssetReferences to fetch.
     */
    orderBy?: ChapterAssetReferenceOrderByWithRelationInput | ChapterAssetReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChapterAssetReferences.
     */
    cursor?: ChapterAssetReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterAssetReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterAssetReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChapterAssetReferences.
     */
    distinct?: ChapterAssetReferenceScalarFieldEnum | ChapterAssetReferenceScalarFieldEnum[]
  }

  /**
   * ChapterAssetReference findMany
   */
  export type ChapterAssetReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    /**
     * Filter, which ChapterAssetReferences to fetch.
     */
    where?: ChapterAssetReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterAssetReferences to fetch.
     */
    orderBy?: ChapterAssetReferenceOrderByWithRelationInput | ChapterAssetReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChapterAssetReferences.
     */
    cursor?: ChapterAssetReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterAssetReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterAssetReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChapterAssetReferences.
     */
    distinct?: ChapterAssetReferenceScalarFieldEnum | ChapterAssetReferenceScalarFieldEnum[]
  }

  /**
   * ChapterAssetReference create
   */
  export type ChapterAssetReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a ChapterAssetReference.
     */
    data: XOR<ChapterAssetReferenceCreateInput, ChapterAssetReferenceUncheckedCreateInput>
  }

  /**
   * ChapterAssetReference createMany
   */
  export type ChapterAssetReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChapterAssetReferences.
     */
    data: ChapterAssetReferenceCreateManyInput | ChapterAssetReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChapterAssetReference createManyAndReturn
   */
  export type ChapterAssetReferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * The data used to create many ChapterAssetReferences.
     */
    data: ChapterAssetReferenceCreateManyInput | ChapterAssetReferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChapterAssetReference update
   */
  export type ChapterAssetReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a ChapterAssetReference.
     */
    data: XOR<ChapterAssetReferenceUpdateInput, ChapterAssetReferenceUncheckedUpdateInput>
    /**
     * Choose, which ChapterAssetReference to update.
     */
    where: ChapterAssetReferenceWhereUniqueInput
  }

  /**
   * ChapterAssetReference updateMany
   */
  export type ChapterAssetReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChapterAssetReferences.
     */
    data: XOR<ChapterAssetReferenceUpdateManyMutationInput, ChapterAssetReferenceUncheckedUpdateManyInput>
    /**
     * Filter which ChapterAssetReferences to update
     */
    where?: ChapterAssetReferenceWhereInput
    /**
     * Limit how many ChapterAssetReferences to update.
     */
    limit?: number
  }

  /**
   * ChapterAssetReference updateManyAndReturn
   */
  export type ChapterAssetReferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * The data used to update ChapterAssetReferences.
     */
    data: XOR<ChapterAssetReferenceUpdateManyMutationInput, ChapterAssetReferenceUncheckedUpdateManyInput>
    /**
     * Filter which ChapterAssetReferences to update
     */
    where?: ChapterAssetReferenceWhereInput
    /**
     * Limit how many ChapterAssetReferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChapterAssetReference upsert
   */
  export type ChapterAssetReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the ChapterAssetReference to update in case it exists.
     */
    where: ChapterAssetReferenceWhereUniqueInput
    /**
     * In case the ChapterAssetReference found by the `where` argument doesn't exist, create a new ChapterAssetReference with this data.
     */
    create: XOR<ChapterAssetReferenceCreateInput, ChapterAssetReferenceUncheckedCreateInput>
    /**
     * In case the ChapterAssetReference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterAssetReferenceUpdateInput, ChapterAssetReferenceUncheckedUpdateInput>
  }

  /**
   * ChapterAssetReference delete
   */
  export type ChapterAssetReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    /**
     * Filter which ChapterAssetReference to delete.
     */
    where: ChapterAssetReferenceWhereUniqueInput
  }

  /**
   * ChapterAssetReference deleteMany
   */
  export type ChapterAssetReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChapterAssetReferences to delete
     */
    where?: ChapterAssetReferenceWhereInput
    /**
     * Limit how many ChapterAssetReferences to delete.
     */
    limit?: number
  }

  /**
   * ChapterAssetReference without action
   */
  export type ChapterAssetReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    position: number | null
  }

  export type ChapterSumAggregateOutputType = {
    position: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    title: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ebookId: string | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    title: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ebookId: string | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    content: number
    title: number
    position: number
    createdAt: number
    updatedAt: number
    ebookId: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    position?: true
  }

  export type ChapterSumAggregateInputType = {
    position?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    title?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    ebookId?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    title?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    ebookId?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    content?: true
    title?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    ebookId?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    content: JsonValue
    title: string
    position: number
    createdAt: Date
    updatedAt: Date
    ebookId: string
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    title?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebookId?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    assetReferences?: boolean | Chapter$assetReferencesArgs<ExtArgs>
    collaboratorAccess?: boolean | Chapter$collaboratorAccessArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    title?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebookId?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    title?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebookId?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    content?: boolean
    title?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebookId?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "title" | "position" | "createdAt" | "updatedAt" | "ebookId", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    assetReferences?: boolean | Chapter$assetReferencesArgs<ExtArgs>
    collaboratorAccess?: boolean | Chapter$collaboratorAccessArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      ebook: Prisma.$EbookPayload<ExtArgs>
      assetReferences: Prisma.$ChapterAssetReferencePayload<ExtArgs>[]
      collaboratorAccess: Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: Prisma.JsonValue
      title: string
      position: number
      createdAt: Date
      updatedAt: Date
      ebookId: string
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["Chapter"], meta: { name: "Chapter" } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs["orderBy"] }
        : { orderBy?: ChapterGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ebook<T extends EbookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EbookDefaultArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assetReferences<T extends Chapter$assetReferencesArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$assetReferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterAssetReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaboratorAccess<T extends Chapter$collaboratorAccessArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$collaboratorAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", "String">
    readonly content: FieldRef<"Chapter", "Json">
    readonly title: FieldRef<"Chapter", "String">
    readonly position: FieldRef<"Chapter", "Int">
    readonly createdAt: FieldRef<"Chapter", "DateTime">
    readonly updatedAt: FieldRef<"Chapter", "DateTime">
    readonly ebookId: FieldRef<"Chapter", "String">
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter createManyAndReturn
   */
  export type ChapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter updateManyAndReturn
   */
  export type ChapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.assetReferences
   */
  export type Chapter$assetReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterAssetReference
     */
    select?: ChapterAssetReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterAssetReference
     */
    omit?: ChapterAssetReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterAssetReferenceInclude<ExtArgs> | null
    where?: ChapterAssetReferenceWhereInput
    orderBy?: ChapterAssetReferenceOrderByWithRelationInput | ChapterAssetReferenceOrderByWithRelationInput[]
    cursor?: ChapterAssetReferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterAssetReferenceScalarFieldEnum | ChapterAssetReferenceScalarFieldEnum[]
  }

  /**
   * Chapter.collaboratorAccess
   */
  export type Chapter$collaboratorAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    where?: EbookCollaboratorChapterAccessWhereInput
    orderBy?: EbookCollaboratorChapterAccessOrderByWithRelationInput | EbookCollaboratorChapterAccessOrderByWithRelationInput[]
    cursor?: EbookCollaboratorChapterAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookCollaboratorChapterAccessScalarFieldEnum | EbookCollaboratorChapterAccessScalarFieldEnum[]
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model EbookCollaborator
   */

  export type AggregateEbookCollaborator = {
    _count: EbookCollaboratorCountAggregateOutputType | null
    _min: EbookCollaboratorMinAggregateOutputType | null
    _max: EbookCollaboratorMaxAggregateOutputType | null
  }

  export type EbookCollaboratorMinAggregateOutputType = {
    id: string | null
    ebookId: string | null
    userId: string | null
    role: $Enums.CollaborationRole | null
    allChaptersAccess: boolean | null
    customRoleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EbookCollaboratorMaxAggregateOutputType = {
    id: string | null
    ebookId: string | null
    userId: string | null
    role: $Enums.CollaborationRole | null
    allChaptersAccess: boolean | null
    customRoleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EbookCollaboratorCountAggregateOutputType = {
    id: number
    ebookId: number
    userId: number
    role: number
    allChaptersAccess: number
    customRoleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EbookCollaboratorMinAggregateInputType = {
    id?: true
    ebookId?: true
    userId?: true
    role?: true
    allChaptersAccess?: true
    customRoleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EbookCollaboratorMaxAggregateInputType = {
    id?: true
    ebookId?: true
    userId?: true
    role?: true
    allChaptersAccess?: true
    customRoleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EbookCollaboratorCountAggregateInputType = {
    id?: true
    ebookId?: true
    userId?: true
    role?: true
    allChaptersAccess?: true
    customRoleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EbookCollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EbookCollaborator to aggregate.
     */
    where?: EbookCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCollaborators to fetch.
     */
    orderBy?: EbookCollaboratorOrderByWithRelationInput | EbookCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EbookCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EbookCollaborators
    **/
    _count?: true | EbookCollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EbookCollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EbookCollaboratorMaxAggregateInputType
  }

  export type GetEbookCollaboratorAggregateType<T extends EbookCollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateEbookCollaborator]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEbookCollaborator[P]>
      : GetScalarType<T[P], AggregateEbookCollaborator[P]>
  }




  export type EbookCollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCollaboratorWhereInput
    orderBy?: EbookCollaboratorOrderByWithAggregationInput | EbookCollaboratorOrderByWithAggregationInput[]
    by: EbookCollaboratorScalarFieldEnum[] | EbookCollaboratorScalarFieldEnum
    having?: EbookCollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EbookCollaboratorCountAggregateInputType | true
    _min?: EbookCollaboratorMinAggregateInputType
    _max?: EbookCollaboratorMaxAggregateInputType
  }

  export type EbookCollaboratorGroupByOutputType = {
    id: string
    ebookId: string
    userId: string
    role: $Enums.CollaborationRole | null
    allChaptersAccess: boolean
    customRoleId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EbookCollaboratorCountAggregateOutputType | null
    _min: EbookCollaboratorMinAggregateOutputType | null
    _max: EbookCollaboratorMaxAggregateOutputType | null
  }

  type GetEbookCollaboratorGroupByPayload<T extends EbookCollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EbookCollaboratorGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof EbookCollaboratorGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EbookCollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], EbookCollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type EbookCollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    userId?: boolean
    role?: boolean
    allChaptersAccess?: boolean
    customRoleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    customRole?: boolean | EbookCollaborator$customRoleArgs<ExtArgs>
    chapterAccess?: boolean | EbookCollaborator$chapterAccessArgs<ExtArgs>
    _count?: boolean | EbookCollaboratorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebookCollaborator"]>

  export type EbookCollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    userId?: boolean
    role?: boolean
    allChaptersAccess?: boolean
    customRoleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    customRole?: boolean | EbookCollaborator$customRoleArgs<ExtArgs>
  }, ExtArgs["result"]["ebookCollaborator"]>

  export type EbookCollaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    userId?: boolean
    role?: boolean
    allChaptersAccess?: boolean
    customRoleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    customRole?: boolean | EbookCollaborator$customRoleArgs<ExtArgs>
  }, ExtArgs["result"]["ebookCollaborator"]>

  export type EbookCollaboratorSelectScalar = {
    id?: boolean
    ebookId?: boolean
    userId?: boolean
    role?: boolean
    allChaptersAccess?: boolean
    customRoleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EbookCollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ebookId" | "userId" | "role" | "allChaptersAccess" | "customRoleId" | "createdAt" | "updatedAt", ExtArgs["result"]["ebookCollaborator"]>
  export type EbookCollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    customRole?: boolean | EbookCollaborator$customRoleArgs<ExtArgs>
    chapterAccess?: boolean | EbookCollaborator$chapterAccessArgs<ExtArgs>
    _count?: boolean | EbookCollaboratorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EbookCollaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    customRole?: boolean | EbookCollaborator$customRoleArgs<ExtArgs>
  }
  export type EbookCollaboratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    customRole?: boolean | EbookCollaborator$customRoleArgs<ExtArgs>
  }

  export type $EbookCollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EbookCollaborator"
    objects: {
      ebook: Prisma.$EbookPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      customRole: Prisma.$EbookCustomRolePayload<ExtArgs> | null
      chapterAccess: Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ebookId: string
      userId: string
      role: $Enums.CollaborationRole | null
      allChaptersAccess: boolean
      customRoleId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ebookCollaborator"]>
    composites: {}
  }

  type EbookCollaboratorGetPayload<S extends boolean | null | undefined | EbookCollaboratorDefaultArgs> = $Result.GetResult<Prisma.$EbookCollaboratorPayload, S>

  type EbookCollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EbookCollaboratorFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: EbookCollaboratorCountAggregateInputType | true
    }

  export interface EbookCollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["EbookCollaborator"], meta: { name: "EbookCollaborator" } }
    /**
     * Find zero or one EbookCollaborator that matches the filter.
     * @param {EbookCollaboratorFindUniqueArgs} args - Arguments to find a EbookCollaborator
     * @example
     * // Get one EbookCollaborator
     * const ebookCollaborator = await prisma.ebookCollaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EbookCollaboratorFindUniqueArgs>(args: SelectSubset<T, EbookCollaboratorFindUniqueArgs<ExtArgs>>): Prisma__EbookCollaboratorClient<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EbookCollaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EbookCollaboratorFindUniqueOrThrowArgs} args - Arguments to find a EbookCollaborator
     * @example
     * // Get one EbookCollaborator
     * const ebookCollaborator = await prisma.ebookCollaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EbookCollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, EbookCollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EbookCollaboratorClient<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EbookCollaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorFindFirstArgs} args - Arguments to find a EbookCollaborator
     * @example
     * // Get one EbookCollaborator
     * const ebookCollaborator = await prisma.ebookCollaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EbookCollaboratorFindFirstArgs>(args?: SelectSubset<T, EbookCollaboratorFindFirstArgs<ExtArgs>>): Prisma__EbookCollaboratorClient<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EbookCollaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorFindFirstOrThrowArgs} args - Arguments to find a EbookCollaborator
     * @example
     * // Get one EbookCollaborator
     * const ebookCollaborator = await prisma.ebookCollaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EbookCollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, EbookCollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__EbookCollaboratorClient<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EbookCollaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EbookCollaborators
     * const ebookCollaborators = await prisma.ebookCollaborator.findMany()
     * 
     * // Get first 10 EbookCollaborators
     * const ebookCollaborators = await prisma.ebookCollaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ebookCollaboratorWithIdOnly = await prisma.ebookCollaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EbookCollaboratorFindManyArgs>(args?: SelectSubset<T, EbookCollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EbookCollaborator.
     * @param {EbookCollaboratorCreateArgs} args - Arguments to create a EbookCollaborator.
     * @example
     * // Create one EbookCollaborator
     * const EbookCollaborator = await prisma.ebookCollaborator.create({
     *   data: {
     *     // ... data to create a EbookCollaborator
     *   }
     * })
     * 
     */
    create<T extends EbookCollaboratorCreateArgs>(args: SelectSubset<T, EbookCollaboratorCreateArgs<ExtArgs>>): Prisma__EbookCollaboratorClient<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EbookCollaborators.
     * @param {EbookCollaboratorCreateManyArgs} args - Arguments to create many EbookCollaborators.
     * @example
     * // Create many EbookCollaborators
     * const ebookCollaborator = await prisma.ebookCollaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EbookCollaboratorCreateManyArgs>(args?: SelectSubset<T, EbookCollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EbookCollaborators and returns the data saved in the database.
     * @param {EbookCollaboratorCreateManyAndReturnArgs} args - Arguments to create many EbookCollaborators.
     * @example
     * // Create many EbookCollaborators
     * const ebookCollaborator = await prisma.ebookCollaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EbookCollaborators and only return the `id`
     * const ebookCollaboratorWithIdOnly = await prisma.ebookCollaborator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EbookCollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, EbookCollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EbookCollaborator.
     * @param {EbookCollaboratorDeleteArgs} args - Arguments to delete one EbookCollaborator.
     * @example
     * // Delete one EbookCollaborator
     * const EbookCollaborator = await prisma.ebookCollaborator.delete({
     *   where: {
     *     // ... filter to delete one EbookCollaborator
     *   }
     * })
     * 
     */
    delete<T extends EbookCollaboratorDeleteArgs>(args: SelectSubset<T, EbookCollaboratorDeleteArgs<ExtArgs>>): Prisma__EbookCollaboratorClient<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EbookCollaborator.
     * @param {EbookCollaboratorUpdateArgs} args - Arguments to update one EbookCollaborator.
     * @example
     * // Update one EbookCollaborator
     * const ebookCollaborator = await prisma.ebookCollaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EbookCollaboratorUpdateArgs>(args: SelectSubset<T, EbookCollaboratorUpdateArgs<ExtArgs>>): Prisma__EbookCollaboratorClient<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EbookCollaborators.
     * @param {EbookCollaboratorDeleteManyArgs} args - Arguments to filter EbookCollaborators to delete.
     * @example
     * // Delete a few EbookCollaborators
     * const { count } = await prisma.ebookCollaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EbookCollaboratorDeleteManyArgs>(args?: SelectSubset<T, EbookCollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EbookCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EbookCollaborators
     * const ebookCollaborator = await prisma.ebookCollaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EbookCollaboratorUpdateManyArgs>(args: SelectSubset<T, EbookCollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EbookCollaborators and returns the data updated in the database.
     * @param {EbookCollaboratorUpdateManyAndReturnArgs} args - Arguments to update many EbookCollaborators.
     * @example
     * // Update many EbookCollaborators
     * const ebookCollaborator = await prisma.ebookCollaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EbookCollaborators and only return the `id`
     * const ebookCollaboratorWithIdOnly = await prisma.ebookCollaborator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EbookCollaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, EbookCollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EbookCollaborator.
     * @param {EbookCollaboratorUpsertArgs} args - Arguments to update or create a EbookCollaborator.
     * @example
     * // Update or create a EbookCollaborator
     * const ebookCollaborator = await prisma.ebookCollaborator.upsert({
     *   create: {
     *     // ... data to create a EbookCollaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EbookCollaborator we want to update
     *   }
     * })
     */
    upsert<T extends EbookCollaboratorUpsertArgs>(args: SelectSubset<T, EbookCollaboratorUpsertArgs<ExtArgs>>): Prisma__EbookCollaboratorClient<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EbookCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorCountArgs} args - Arguments to filter EbookCollaborators to count.
     * @example
     * // Count the number of EbookCollaborators
     * const count = await prisma.ebookCollaborator.count({
     *   where: {
     *     // ... the filter for the EbookCollaborators we want to count
     *   }
     * })
    **/
    count<T extends EbookCollaboratorCountArgs>(
      args?: Subset<T, EbookCollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EbookCollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EbookCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EbookCollaboratorAggregateArgs>(args: Subset<T, EbookCollaboratorAggregateArgs>): Prisma.PrismaPromise<GetEbookCollaboratorAggregateType<T>>

    /**
     * Group by EbookCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EbookCollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EbookCollaboratorGroupByArgs["orderBy"] }
        : { orderBy?: EbookCollaboratorGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EbookCollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEbookCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EbookCollaborator model
   */
  readonly fields: EbookCollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EbookCollaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EbookCollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ebook<T extends EbookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EbookDefaultArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customRole<T extends EbookCollaborator$customRoleArgs<ExtArgs> = {}>(args?: Subset<T, EbookCollaborator$customRoleArgs<ExtArgs>>): Prisma__EbookCustomRoleClient<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chapterAccess<T extends EbookCollaborator$chapterAccessArgs<ExtArgs> = {}>(args?: Subset<T, EbookCollaborator$chapterAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EbookCollaborator model
   */
  interface EbookCollaboratorFieldRefs {
    readonly id: FieldRef<"EbookCollaborator", "String">
    readonly ebookId: FieldRef<"EbookCollaborator", "String">
    readonly userId: FieldRef<"EbookCollaborator", "String">
    readonly role: FieldRef<"EbookCollaborator", "CollaborationRole">
    readonly allChaptersAccess: FieldRef<"EbookCollaborator", "Boolean">
    readonly customRoleId: FieldRef<"EbookCollaborator", "String">
    readonly createdAt: FieldRef<"EbookCollaborator", "DateTime">
    readonly updatedAt: FieldRef<"EbookCollaborator", "DateTime">
  }
    

  // Custom InputTypes
  /**
   * EbookCollaborator findUnique
   */
  export type EbookCollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaborator to fetch.
     */
    where: EbookCollaboratorWhereUniqueInput
  }

  /**
   * EbookCollaborator findUniqueOrThrow
   */
  export type EbookCollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaborator to fetch.
     */
    where: EbookCollaboratorWhereUniqueInput
  }

  /**
   * EbookCollaborator findFirst
   */
  export type EbookCollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaborator to fetch.
     */
    where?: EbookCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCollaborators to fetch.
     */
    orderBy?: EbookCollaboratorOrderByWithRelationInput | EbookCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EbookCollaborators.
     */
    cursor?: EbookCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbookCollaborators.
     */
    distinct?: EbookCollaboratorScalarFieldEnum | EbookCollaboratorScalarFieldEnum[]
  }

  /**
   * EbookCollaborator findFirstOrThrow
   */
  export type EbookCollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaborator to fetch.
     */
    where?: EbookCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCollaborators to fetch.
     */
    orderBy?: EbookCollaboratorOrderByWithRelationInput | EbookCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EbookCollaborators.
     */
    cursor?: EbookCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbookCollaborators.
     */
    distinct?: EbookCollaboratorScalarFieldEnum | EbookCollaboratorScalarFieldEnum[]
  }

  /**
   * EbookCollaborator findMany
   */
  export type EbookCollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaborators to fetch.
     */
    where?: EbookCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCollaborators to fetch.
     */
    orderBy?: EbookCollaboratorOrderByWithRelationInput | EbookCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EbookCollaborators.
     */
    cursor?: EbookCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbookCollaborators.
     */
    distinct?: EbookCollaboratorScalarFieldEnum | EbookCollaboratorScalarFieldEnum[]
  }

  /**
   * EbookCollaborator create
   */
  export type EbookCollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a EbookCollaborator.
     */
    data: XOR<EbookCollaboratorCreateInput, EbookCollaboratorUncheckedCreateInput>
  }

  /**
   * EbookCollaborator createMany
   */
  export type EbookCollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EbookCollaborators.
     */
    data: EbookCollaboratorCreateManyInput | EbookCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EbookCollaborator createManyAndReturn
   */
  export type EbookCollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many EbookCollaborators.
     */
    data: EbookCollaboratorCreateManyInput | EbookCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EbookCollaborator update
   */
  export type EbookCollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a EbookCollaborator.
     */
    data: XOR<EbookCollaboratorUpdateInput, EbookCollaboratorUncheckedUpdateInput>
    /**
     * Choose, which EbookCollaborator to update.
     */
    where: EbookCollaboratorWhereUniqueInput
  }

  /**
   * EbookCollaborator updateMany
   */
  export type EbookCollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EbookCollaborators.
     */
    data: XOR<EbookCollaboratorUpdateManyMutationInput, EbookCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which EbookCollaborators to update
     */
    where?: EbookCollaboratorWhereInput
    /**
     * Limit how many EbookCollaborators to update.
     */
    limit?: number
  }

  /**
   * EbookCollaborator updateManyAndReturn
   */
  export type EbookCollaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to update EbookCollaborators.
     */
    data: XOR<EbookCollaboratorUpdateManyMutationInput, EbookCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which EbookCollaborators to update
     */
    where?: EbookCollaboratorWhereInput
    /**
     * Limit how many EbookCollaborators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EbookCollaborator upsert
   */
  export type EbookCollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the EbookCollaborator to update in case it exists.
     */
    where: EbookCollaboratorWhereUniqueInput
    /**
     * In case the EbookCollaborator found by the `where` argument doesn't exist, create a new EbookCollaborator with this data.
     */
    create: XOR<EbookCollaboratorCreateInput, EbookCollaboratorUncheckedCreateInput>
    /**
     * In case the EbookCollaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EbookCollaboratorUpdateInput, EbookCollaboratorUncheckedUpdateInput>
  }

  /**
   * EbookCollaborator delete
   */
  export type EbookCollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    /**
     * Filter which EbookCollaborator to delete.
     */
    where: EbookCollaboratorWhereUniqueInput
  }

  /**
   * EbookCollaborator deleteMany
   */
  export type EbookCollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EbookCollaborators to delete
     */
    where?: EbookCollaboratorWhereInput
    /**
     * Limit how many EbookCollaborators to delete.
     */
    limit?: number
  }

  /**
   * EbookCollaborator.customRole
   */
  export type EbookCollaborator$customRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    where?: EbookCustomRoleWhereInput
  }

  /**
   * EbookCollaborator.chapterAccess
   */
  export type EbookCollaborator$chapterAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    where?: EbookCollaboratorChapterAccessWhereInput
    orderBy?: EbookCollaboratorChapterAccessOrderByWithRelationInput | EbookCollaboratorChapterAccessOrderByWithRelationInput[]
    cursor?: EbookCollaboratorChapterAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookCollaboratorChapterAccessScalarFieldEnum | EbookCollaboratorChapterAccessScalarFieldEnum[]
  }

  /**
   * EbookCollaborator without action
   */
  export type EbookCollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
  }


  /**
   * Model EbookCollaboratorChapterAccess
   */

  export type AggregateEbookCollaboratorChapterAccess = {
    _count: EbookCollaboratorChapterAccessCountAggregateOutputType | null
    _min: EbookCollaboratorChapterAccessMinAggregateOutputType | null
    _max: EbookCollaboratorChapterAccessMaxAggregateOutputType | null
  }

  export type EbookCollaboratorChapterAccessMinAggregateOutputType = {
    id: string | null
    collaboratorId: string | null
    chapterId: string | null
    createdAt: Date | null
  }

  export type EbookCollaboratorChapterAccessMaxAggregateOutputType = {
    id: string | null
    collaboratorId: string | null
    chapterId: string | null
    createdAt: Date | null
  }

  export type EbookCollaboratorChapterAccessCountAggregateOutputType = {
    id: number
    collaboratorId: number
    chapterId: number
    createdAt: number
    _all: number
  }


  export type EbookCollaboratorChapterAccessMinAggregateInputType = {
    id?: true
    collaboratorId?: true
    chapterId?: true
    createdAt?: true
  }

  export type EbookCollaboratorChapterAccessMaxAggregateInputType = {
    id?: true
    collaboratorId?: true
    chapterId?: true
    createdAt?: true
  }

  export type EbookCollaboratorChapterAccessCountAggregateInputType = {
    id?: true
    collaboratorId?: true
    chapterId?: true
    createdAt?: true
    _all?: true
  }

  export type EbookCollaboratorChapterAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EbookCollaboratorChapterAccess to aggregate.
     */
    where?: EbookCollaboratorChapterAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCollaboratorChapterAccesses to fetch.
     */
    orderBy?: EbookCollaboratorChapterAccessOrderByWithRelationInput | EbookCollaboratorChapterAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EbookCollaboratorChapterAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCollaboratorChapterAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCollaboratorChapterAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EbookCollaboratorChapterAccesses
    **/
    _count?: true | EbookCollaboratorChapterAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EbookCollaboratorChapterAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EbookCollaboratorChapterAccessMaxAggregateInputType
  }

  export type GetEbookCollaboratorChapterAccessAggregateType<T extends EbookCollaboratorChapterAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateEbookCollaboratorChapterAccess]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEbookCollaboratorChapterAccess[P]>
      : GetScalarType<T[P], AggregateEbookCollaboratorChapterAccess[P]>
  }




  export type EbookCollaboratorChapterAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCollaboratorChapterAccessWhereInput
    orderBy?: EbookCollaboratorChapterAccessOrderByWithAggregationInput | EbookCollaboratorChapterAccessOrderByWithAggregationInput[]
    by: EbookCollaboratorChapterAccessScalarFieldEnum[] | EbookCollaboratorChapterAccessScalarFieldEnum
    having?: EbookCollaboratorChapterAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EbookCollaboratorChapterAccessCountAggregateInputType | true
    _min?: EbookCollaboratorChapterAccessMinAggregateInputType
    _max?: EbookCollaboratorChapterAccessMaxAggregateInputType
  }

  export type EbookCollaboratorChapterAccessGroupByOutputType = {
    id: string
    collaboratorId: string
    chapterId: string
    createdAt: Date
    _count: EbookCollaboratorChapterAccessCountAggregateOutputType | null
    _min: EbookCollaboratorChapterAccessMinAggregateOutputType | null
    _max: EbookCollaboratorChapterAccessMaxAggregateOutputType | null
  }

  type GetEbookCollaboratorChapterAccessGroupByPayload<T extends EbookCollaboratorChapterAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EbookCollaboratorChapterAccessGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof EbookCollaboratorChapterAccessGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EbookCollaboratorChapterAccessGroupByOutputType[P]>
            : GetScalarType<T[P], EbookCollaboratorChapterAccessGroupByOutputType[P]>
        }
      >
    >


  export type EbookCollaboratorChapterAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collaboratorId?: boolean
    chapterId?: boolean
    createdAt?: boolean
    collaborator?: boolean | EbookCollaboratorDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebookCollaboratorChapterAccess"]>

  export type EbookCollaboratorChapterAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collaboratorId?: boolean
    chapterId?: boolean
    createdAt?: boolean
    collaborator?: boolean | EbookCollaboratorDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebookCollaboratorChapterAccess"]>

  export type EbookCollaboratorChapterAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collaboratorId?: boolean
    chapterId?: boolean
    createdAt?: boolean
    collaborator?: boolean | EbookCollaboratorDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebookCollaboratorChapterAccess"]>

  export type EbookCollaboratorChapterAccessSelectScalar = {
    id?: boolean
    collaboratorId?: boolean
    chapterId?: boolean
    createdAt?: boolean
  }

  export type EbookCollaboratorChapterAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collaboratorId" | "chapterId" | "createdAt", ExtArgs["result"]["ebookCollaboratorChapterAccess"]>
  export type EbookCollaboratorChapterAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborator?: boolean | EbookCollaboratorDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }
  export type EbookCollaboratorChapterAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborator?: boolean | EbookCollaboratorDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }
  export type EbookCollaboratorChapterAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborator?: boolean | EbookCollaboratorDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $EbookCollaboratorChapterAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EbookCollaboratorChapterAccess"
    objects: {
      collaborator: Prisma.$EbookCollaboratorPayload<ExtArgs>
      chapter: Prisma.$ChapterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      collaboratorId: string
      chapterId: string
      createdAt: Date
    }, ExtArgs["result"]["ebookCollaboratorChapterAccess"]>
    composites: {}
  }

  type EbookCollaboratorChapterAccessGetPayload<S extends boolean | null | undefined | EbookCollaboratorChapterAccessDefaultArgs> = $Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload, S>

  type EbookCollaboratorChapterAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EbookCollaboratorChapterAccessFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: EbookCollaboratorChapterAccessCountAggregateInputType | true
    }

  export interface EbookCollaboratorChapterAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["EbookCollaboratorChapterAccess"], meta: { name: "EbookCollaboratorChapterAccess" } }
    /**
     * Find zero or one EbookCollaboratorChapterAccess that matches the filter.
     * @param {EbookCollaboratorChapterAccessFindUniqueArgs} args - Arguments to find a EbookCollaboratorChapterAccess
     * @example
     * // Get one EbookCollaboratorChapterAccess
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EbookCollaboratorChapterAccessFindUniqueArgs>(args: SelectSubset<T, EbookCollaboratorChapterAccessFindUniqueArgs<ExtArgs>>): Prisma__EbookCollaboratorChapterAccessClient<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EbookCollaboratorChapterAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EbookCollaboratorChapterAccessFindUniqueOrThrowArgs} args - Arguments to find a EbookCollaboratorChapterAccess
     * @example
     * // Get one EbookCollaboratorChapterAccess
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EbookCollaboratorChapterAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, EbookCollaboratorChapterAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EbookCollaboratorChapterAccessClient<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EbookCollaboratorChapterAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorChapterAccessFindFirstArgs} args - Arguments to find a EbookCollaboratorChapterAccess
     * @example
     * // Get one EbookCollaboratorChapterAccess
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EbookCollaboratorChapterAccessFindFirstArgs>(args?: SelectSubset<T, EbookCollaboratorChapterAccessFindFirstArgs<ExtArgs>>): Prisma__EbookCollaboratorChapterAccessClient<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EbookCollaboratorChapterAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorChapterAccessFindFirstOrThrowArgs} args - Arguments to find a EbookCollaboratorChapterAccess
     * @example
     * // Get one EbookCollaboratorChapterAccess
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EbookCollaboratorChapterAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, EbookCollaboratorChapterAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__EbookCollaboratorChapterAccessClient<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EbookCollaboratorChapterAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorChapterAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EbookCollaboratorChapterAccesses
     * const ebookCollaboratorChapterAccesses = await prisma.ebookCollaboratorChapterAccess.findMany()
     * 
     * // Get first 10 EbookCollaboratorChapterAccesses
     * const ebookCollaboratorChapterAccesses = await prisma.ebookCollaboratorChapterAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ebookCollaboratorChapterAccessWithIdOnly = await prisma.ebookCollaboratorChapterAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EbookCollaboratorChapterAccessFindManyArgs>(args?: SelectSubset<T, EbookCollaboratorChapterAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EbookCollaboratorChapterAccess.
     * @param {EbookCollaboratorChapterAccessCreateArgs} args - Arguments to create a EbookCollaboratorChapterAccess.
     * @example
     * // Create one EbookCollaboratorChapterAccess
     * const EbookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.create({
     *   data: {
     *     // ... data to create a EbookCollaboratorChapterAccess
     *   }
     * })
     * 
     */
    create<T extends EbookCollaboratorChapterAccessCreateArgs>(args: SelectSubset<T, EbookCollaboratorChapterAccessCreateArgs<ExtArgs>>): Prisma__EbookCollaboratorChapterAccessClient<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EbookCollaboratorChapterAccesses.
     * @param {EbookCollaboratorChapterAccessCreateManyArgs} args - Arguments to create many EbookCollaboratorChapterAccesses.
     * @example
     * // Create many EbookCollaboratorChapterAccesses
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EbookCollaboratorChapterAccessCreateManyArgs>(args?: SelectSubset<T, EbookCollaboratorChapterAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EbookCollaboratorChapterAccesses and returns the data saved in the database.
     * @param {EbookCollaboratorChapterAccessCreateManyAndReturnArgs} args - Arguments to create many EbookCollaboratorChapterAccesses.
     * @example
     * // Create many EbookCollaboratorChapterAccesses
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EbookCollaboratorChapterAccesses and only return the `id`
     * const ebookCollaboratorChapterAccessWithIdOnly = await prisma.ebookCollaboratorChapterAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EbookCollaboratorChapterAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, EbookCollaboratorChapterAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EbookCollaboratorChapterAccess.
     * @param {EbookCollaboratorChapterAccessDeleteArgs} args - Arguments to delete one EbookCollaboratorChapterAccess.
     * @example
     * // Delete one EbookCollaboratorChapterAccess
     * const EbookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.delete({
     *   where: {
     *     // ... filter to delete one EbookCollaboratorChapterAccess
     *   }
     * })
     * 
     */
    delete<T extends EbookCollaboratorChapterAccessDeleteArgs>(args: SelectSubset<T, EbookCollaboratorChapterAccessDeleteArgs<ExtArgs>>): Prisma__EbookCollaboratorChapterAccessClient<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EbookCollaboratorChapterAccess.
     * @param {EbookCollaboratorChapterAccessUpdateArgs} args - Arguments to update one EbookCollaboratorChapterAccess.
     * @example
     * // Update one EbookCollaboratorChapterAccess
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EbookCollaboratorChapterAccessUpdateArgs>(args: SelectSubset<T, EbookCollaboratorChapterAccessUpdateArgs<ExtArgs>>): Prisma__EbookCollaboratorChapterAccessClient<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EbookCollaboratorChapterAccesses.
     * @param {EbookCollaboratorChapterAccessDeleteManyArgs} args - Arguments to filter EbookCollaboratorChapterAccesses to delete.
     * @example
     * // Delete a few EbookCollaboratorChapterAccesses
     * const { count } = await prisma.ebookCollaboratorChapterAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EbookCollaboratorChapterAccessDeleteManyArgs>(args?: SelectSubset<T, EbookCollaboratorChapterAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EbookCollaboratorChapterAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorChapterAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EbookCollaboratorChapterAccesses
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EbookCollaboratorChapterAccessUpdateManyArgs>(args: SelectSubset<T, EbookCollaboratorChapterAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EbookCollaboratorChapterAccesses and returns the data updated in the database.
     * @param {EbookCollaboratorChapterAccessUpdateManyAndReturnArgs} args - Arguments to update many EbookCollaboratorChapterAccesses.
     * @example
     * // Update many EbookCollaboratorChapterAccesses
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EbookCollaboratorChapterAccesses and only return the `id`
     * const ebookCollaboratorChapterAccessWithIdOnly = await prisma.ebookCollaboratorChapterAccess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EbookCollaboratorChapterAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, EbookCollaboratorChapterAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EbookCollaboratorChapterAccess.
     * @param {EbookCollaboratorChapterAccessUpsertArgs} args - Arguments to update or create a EbookCollaboratorChapterAccess.
     * @example
     * // Update or create a EbookCollaboratorChapterAccess
     * const ebookCollaboratorChapterAccess = await prisma.ebookCollaboratorChapterAccess.upsert({
     *   create: {
     *     // ... data to create a EbookCollaboratorChapterAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EbookCollaboratorChapterAccess we want to update
     *   }
     * })
     */
    upsert<T extends EbookCollaboratorChapterAccessUpsertArgs>(args: SelectSubset<T, EbookCollaboratorChapterAccessUpsertArgs<ExtArgs>>): Prisma__EbookCollaboratorChapterAccessClient<$Result.GetResult<Prisma.$EbookCollaboratorChapterAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EbookCollaboratorChapterAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorChapterAccessCountArgs} args - Arguments to filter EbookCollaboratorChapterAccesses to count.
     * @example
     * // Count the number of EbookCollaboratorChapterAccesses
     * const count = await prisma.ebookCollaboratorChapterAccess.count({
     *   where: {
     *     // ... the filter for the EbookCollaboratorChapterAccesses we want to count
     *   }
     * })
    **/
    count<T extends EbookCollaboratorChapterAccessCountArgs>(
      args?: Subset<T, EbookCollaboratorChapterAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EbookCollaboratorChapterAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EbookCollaboratorChapterAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorChapterAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EbookCollaboratorChapterAccessAggregateArgs>(args: Subset<T, EbookCollaboratorChapterAccessAggregateArgs>): Prisma.PrismaPromise<GetEbookCollaboratorChapterAccessAggregateType<T>>

    /**
     * Group by EbookCollaboratorChapterAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCollaboratorChapterAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EbookCollaboratorChapterAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EbookCollaboratorChapterAccessGroupByArgs["orderBy"] }
        : { orderBy?: EbookCollaboratorChapterAccessGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EbookCollaboratorChapterAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEbookCollaboratorChapterAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EbookCollaboratorChapterAccess model
   */
  readonly fields: EbookCollaboratorChapterAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EbookCollaboratorChapterAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EbookCollaboratorChapterAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collaborator<T extends EbookCollaboratorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EbookCollaboratorDefaultArgs<ExtArgs>>): Prisma__EbookCollaboratorClient<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EbookCollaboratorChapterAccess model
   */
  interface EbookCollaboratorChapterAccessFieldRefs {
    readonly id: FieldRef<"EbookCollaboratorChapterAccess", "String">
    readonly collaboratorId: FieldRef<"EbookCollaboratorChapterAccess", "String">
    readonly chapterId: FieldRef<"EbookCollaboratorChapterAccess", "String">
    readonly createdAt: FieldRef<"EbookCollaboratorChapterAccess", "DateTime">
  }
    

  // Custom InputTypes
  /**
   * EbookCollaboratorChapterAccess findUnique
   */
  export type EbookCollaboratorChapterAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaboratorChapterAccess to fetch.
     */
    where: EbookCollaboratorChapterAccessWhereUniqueInput
  }

  /**
   * EbookCollaboratorChapterAccess findUniqueOrThrow
   */
  export type EbookCollaboratorChapterAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaboratorChapterAccess to fetch.
     */
    where: EbookCollaboratorChapterAccessWhereUniqueInput
  }

  /**
   * EbookCollaboratorChapterAccess findFirst
   */
  export type EbookCollaboratorChapterAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaboratorChapterAccess to fetch.
     */
    where?: EbookCollaboratorChapterAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCollaboratorChapterAccesses to fetch.
     */
    orderBy?: EbookCollaboratorChapterAccessOrderByWithRelationInput | EbookCollaboratorChapterAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EbookCollaboratorChapterAccesses.
     */
    cursor?: EbookCollaboratorChapterAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCollaboratorChapterAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCollaboratorChapterAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbookCollaboratorChapterAccesses.
     */
    distinct?: EbookCollaboratorChapterAccessScalarFieldEnum | EbookCollaboratorChapterAccessScalarFieldEnum[]
  }

  /**
   * EbookCollaboratorChapterAccess findFirstOrThrow
   */
  export type EbookCollaboratorChapterAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaboratorChapterAccess to fetch.
     */
    where?: EbookCollaboratorChapterAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCollaboratorChapterAccesses to fetch.
     */
    orderBy?: EbookCollaboratorChapterAccessOrderByWithRelationInput | EbookCollaboratorChapterAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EbookCollaboratorChapterAccesses.
     */
    cursor?: EbookCollaboratorChapterAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCollaboratorChapterAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCollaboratorChapterAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbookCollaboratorChapterAccesses.
     */
    distinct?: EbookCollaboratorChapterAccessScalarFieldEnum | EbookCollaboratorChapterAccessScalarFieldEnum[]
  }

  /**
   * EbookCollaboratorChapterAccess findMany
   */
  export type EbookCollaboratorChapterAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    /**
     * Filter, which EbookCollaboratorChapterAccesses to fetch.
     */
    where?: EbookCollaboratorChapterAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCollaboratorChapterAccesses to fetch.
     */
    orderBy?: EbookCollaboratorChapterAccessOrderByWithRelationInput | EbookCollaboratorChapterAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EbookCollaboratorChapterAccesses.
     */
    cursor?: EbookCollaboratorChapterAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCollaboratorChapterAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCollaboratorChapterAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbookCollaboratorChapterAccesses.
     */
    distinct?: EbookCollaboratorChapterAccessScalarFieldEnum | EbookCollaboratorChapterAccessScalarFieldEnum[]
  }

  /**
   * EbookCollaboratorChapterAccess create
   */
  export type EbookCollaboratorChapterAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a EbookCollaboratorChapterAccess.
     */
    data: XOR<EbookCollaboratorChapterAccessCreateInput, EbookCollaboratorChapterAccessUncheckedCreateInput>
  }

  /**
   * EbookCollaboratorChapterAccess createMany
   */
  export type EbookCollaboratorChapterAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EbookCollaboratorChapterAccesses.
     */
    data: EbookCollaboratorChapterAccessCreateManyInput | EbookCollaboratorChapterAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EbookCollaboratorChapterAccess createManyAndReturn
   */
  export type EbookCollaboratorChapterAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * The data used to create many EbookCollaboratorChapterAccesses.
     */
    data: EbookCollaboratorChapterAccessCreateManyInput | EbookCollaboratorChapterAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EbookCollaboratorChapterAccess update
   */
  export type EbookCollaboratorChapterAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a EbookCollaboratorChapterAccess.
     */
    data: XOR<EbookCollaboratorChapterAccessUpdateInput, EbookCollaboratorChapterAccessUncheckedUpdateInput>
    /**
     * Choose, which EbookCollaboratorChapterAccess to update.
     */
    where: EbookCollaboratorChapterAccessWhereUniqueInput
  }

  /**
   * EbookCollaboratorChapterAccess updateMany
   */
  export type EbookCollaboratorChapterAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EbookCollaboratorChapterAccesses.
     */
    data: XOR<EbookCollaboratorChapterAccessUpdateManyMutationInput, EbookCollaboratorChapterAccessUncheckedUpdateManyInput>
    /**
     * Filter which EbookCollaboratorChapterAccesses to update
     */
    where?: EbookCollaboratorChapterAccessWhereInput
    /**
     * Limit how many EbookCollaboratorChapterAccesses to update.
     */
    limit?: number
  }

  /**
   * EbookCollaboratorChapterAccess updateManyAndReturn
   */
  export type EbookCollaboratorChapterAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * The data used to update EbookCollaboratorChapterAccesses.
     */
    data: XOR<EbookCollaboratorChapterAccessUpdateManyMutationInput, EbookCollaboratorChapterAccessUncheckedUpdateManyInput>
    /**
     * Filter which EbookCollaboratorChapterAccesses to update
     */
    where?: EbookCollaboratorChapterAccessWhereInput
    /**
     * Limit how many EbookCollaboratorChapterAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EbookCollaboratorChapterAccess upsert
   */
  export type EbookCollaboratorChapterAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the EbookCollaboratorChapterAccess to update in case it exists.
     */
    where: EbookCollaboratorChapterAccessWhereUniqueInput
    /**
     * In case the EbookCollaboratorChapterAccess found by the `where` argument doesn't exist, create a new EbookCollaboratorChapterAccess with this data.
     */
    create: XOR<EbookCollaboratorChapterAccessCreateInput, EbookCollaboratorChapterAccessUncheckedCreateInput>
    /**
     * In case the EbookCollaboratorChapterAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EbookCollaboratorChapterAccessUpdateInput, EbookCollaboratorChapterAccessUncheckedUpdateInput>
  }

  /**
   * EbookCollaboratorChapterAccess delete
   */
  export type EbookCollaboratorChapterAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
    /**
     * Filter which EbookCollaboratorChapterAccess to delete.
     */
    where: EbookCollaboratorChapterAccessWhereUniqueInput
  }

  /**
   * EbookCollaboratorChapterAccess deleteMany
   */
  export type EbookCollaboratorChapterAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EbookCollaboratorChapterAccesses to delete
     */
    where?: EbookCollaboratorChapterAccessWhereInput
    /**
     * Limit how many EbookCollaboratorChapterAccesses to delete.
     */
    limit?: number
  }

  /**
   * EbookCollaboratorChapterAccess without action
   */
  export type EbookCollaboratorChapterAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaboratorChapterAccess
     */
    select?: EbookCollaboratorChapterAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaboratorChapterAccess
     */
    omit?: EbookCollaboratorChapterAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorChapterAccessInclude<ExtArgs> | null
  }


  /**
   * Model EbookCustomRole
   */

  export type AggregateEbookCustomRole = {
    _count: EbookCustomRoleCountAggregateOutputType | null
    _min: EbookCustomRoleMinAggregateOutputType | null
    _max: EbookCustomRoleMaxAggregateOutputType | null
  }

  export type EbookCustomRoleMinAggregateOutputType = {
    id: string | null
    ebookId: string | null
    name: string | null
    createdByUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EbookCustomRoleMaxAggregateOutputType = {
    id: string | null
    ebookId: string | null
    name: string | null
    createdByUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EbookCustomRoleCountAggregateOutputType = {
    id: number
    ebookId: number
    name: number
    permissions: number
    createdByUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EbookCustomRoleMinAggregateInputType = {
    id?: true
    ebookId?: true
    name?: true
    createdByUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EbookCustomRoleMaxAggregateInputType = {
    id?: true
    ebookId?: true
    name?: true
    createdByUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EbookCustomRoleCountAggregateInputType = {
    id?: true
    ebookId?: true
    name?: true
    permissions?: true
    createdByUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EbookCustomRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EbookCustomRole to aggregate.
     */
    where?: EbookCustomRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCustomRoles to fetch.
     */
    orderBy?: EbookCustomRoleOrderByWithRelationInput | EbookCustomRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EbookCustomRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCustomRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCustomRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EbookCustomRoles
    **/
    _count?: true | EbookCustomRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EbookCustomRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EbookCustomRoleMaxAggregateInputType
  }

  export type GetEbookCustomRoleAggregateType<T extends EbookCustomRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateEbookCustomRole]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEbookCustomRole[P]>
      : GetScalarType<T[P], AggregateEbookCustomRole[P]>
  }




  export type EbookCustomRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookCustomRoleWhereInput
    orderBy?: EbookCustomRoleOrderByWithAggregationInput | EbookCustomRoleOrderByWithAggregationInput[]
    by: EbookCustomRoleScalarFieldEnum[] | EbookCustomRoleScalarFieldEnum
    having?: EbookCustomRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EbookCustomRoleCountAggregateInputType | true
    _min?: EbookCustomRoleMinAggregateInputType
    _max?: EbookCustomRoleMaxAggregateInputType
  }

  export type EbookCustomRoleGroupByOutputType = {
    id: string
    ebookId: string
    name: string
    permissions: $Enums.CollaborationPermission[]
    createdByUserId: string
    createdAt: Date
    updatedAt: Date
    _count: EbookCustomRoleCountAggregateOutputType | null
    _min: EbookCustomRoleMinAggregateOutputType | null
    _max: EbookCustomRoleMaxAggregateOutputType | null
  }

  type GetEbookCustomRoleGroupByPayload<T extends EbookCustomRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EbookCustomRoleGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof EbookCustomRoleGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EbookCustomRoleGroupByOutputType[P]>
            : GetScalarType<T[P], EbookCustomRoleGroupByOutputType[P]>
        }
      >
    >


  export type EbookCustomRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    name?: boolean
    permissions?: boolean
    createdByUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    collaborators?: boolean | EbookCustomRole$collaboratorsArgs<ExtArgs>
    _count?: boolean | EbookCustomRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebookCustomRole"]>

  export type EbookCustomRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    name?: boolean
    permissions?: boolean
    createdByUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebookCustomRole"]>

  export type EbookCustomRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    name?: boolean
    permissions?: boolean
    createdByUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebookCustomRole"]>

  export type EbookCustomRoleSelectScalar = {
    id?: boolean
    ebookId?: boolean
    name?: boolean
    permissions?: boolean
    createdByUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EbookCustomRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ebookId" | "name" | "permissions" | "createdByUserId" | "createdAt" | "updatedAt", ExtArgs["result"]["ebookCustomRole"]>
  export type EbookCustomRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    collaborators?: boolean | EbookCustomRole$collaboratorsArgs<ExtArgs>
    _count?: boolean | EbookCustomRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EbookCustomRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EbookCustomRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EbookCustomRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EbookCustomRole"
    objects: {
      ebook: Prisma.$EbookPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      collaborators: Prisma.$EbookCollaboratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ebookId: string
      name: string
      permissions: $Enums.CollaborationPermission[]
      createdByUserId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ebookCustomRole"]>
    composites: {}
  }

  type EbookCustomRoleGetPayload<S extends boolean | null | undefined | EbookCustomRoleDefaultArgs> = $Result.GetResult<Prisma.$EbookCustomRolePayload, S>

  type EbookCustomRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EbookCustomRoleFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: EbookCustomRoleCountAggregateInputType | true
    }

  export interface EbookCustomRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["EbookCustomRole"], meta: { name: "EbookCustomRole" } }
    /**
     * Find zero or one EbookCustomRole that matches the filter.
     * @param {EbookCustomRoleFindUniqueArgs} args - Arguments to find a EbookCustomRole
     * @example
     * // Get one EbookCustomRole
     * const ebookCustomRole = await prisma.ebookCustomRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EbookCustomRoleFindUniqueArgs>(args: SelectSubset<T, EbookCustomRoleFindUniqueArgs<ExtArgs>>): Prisma__EbookCustomRoleClient<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EbookCustomRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EbookCustomRoleFindUniqueOrThrowArgs} args - Arguments to find a EbookCustomRole
     * @example
     * // Get one EbookCustomRole
     * const ebookCustomRole = await prisma.ebookCustomRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EbookCustomRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, EbookCustomRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EbookCustomRoleClient<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EbookCustomRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCustomRoleFindFirstArgs} args - Arguments to find a EbookCustomRole
     * @example
     * // Get one EbookCustomRole
     * const ebookCustomRole = await prisma.ebookCustomRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EbookCustomRoleFindFirstArgs>(args?: SelectSubset<T, EbookCustomRoleFindFirstArgs<ExtArgs>>): Prisma__EbookCustomRoleClient<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EbookCustomRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCustomRoleFindFirstOrThrowArgs} args - Arguments to find a EbookCustomRole
     * @example
     * // Get one EbookCustomRole
     * const ebookCustomRole = await prisma.ebookCustomRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EbookCustomRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, EbookCustomRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__EbookCustomRoleClient<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EbookCustomRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCustomRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EbookCustomRoles
     * const ebookCustomRoles = await prisma.ebookCustomRole.findMany()
     * 
     * // Get first 10 EbookCustomRoles
     * const ebookCustomRoles = await prisma.ebookCustomRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ebookCustomRoleWithIdOnly = await prisma.ebookCustomRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EbookCustomRoleFindManyArgs>(args?: SelectSubset<T, EbookCustomRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EbookCustomRole.
     * @param {EbookCustomRoleCreateArgs} args - Arguments to create a EbookCustomRole.
     * @example
     * // Create one EbookCustomRole
     * const EbookCustomRole = await prisma.ebookCustomRole.create({
     *   data: {
     *     // ... data to create a EbookCustomRole
     *   }
     * })
     * 
     */
    create<T extends EbookCustomRoleCreateArgs>(args: SelectSubset<T, EbookCustomRoleCreateArgs<ExtArgs>>): Prisma__EbookCustomRoleClient<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EbookCustomRoles.
     * @param {EbookCustomRoleCreateManyArgs} args - Arguments to create many EbookCustomRoles.
     * @example
     * // Create many EbookCustomRoles
     * const ebookCustomRole = await prisma.ebookCustomRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EbookCustomRoleCreateManyArgs>(args?: SelectSubset<T, EbookCustomRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EbookCustomRoles and returns the data saved in the database.
     * @param {EbookCustomRoleCreateManyAndReturnArgs} args - Arguments to create many EbookCustomRoles.
     * @example
     * // Create many EbookCustomRoles
     * const ebookCustomRole = await prisma.ebookCustomRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EbookCustomRoles and only return the `id`
     * const ebookCustomRoleWithIdOnly = await prisma.ebookCustomRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EbookCustomRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, EbookCustomRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EbookCustomRole.
     * @param {EbookCustomRoleDeleteArgs} args - Arguments to delete one EbookCustomRole.
     * @example
     * // Delete one EbookCustomRole
     * const EbookCustomRole = await prisma.ebookCustomRole.delete({
     *   where: {
     *     // ... filter to delete one EbookCustomRole
     *   }
     * })
     * 
     */
    delete<T extends EbookCustomRoleDeleteArgs>(args: SelectSubset<T, EbookCustomRoleDeleteArgs<ExtArgs>>): Prisma__EbookCustomRoleClient<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EbookCustomRole.
     * @param {EbookCustomRoleUpdateArgs} args - Arguments to update one EbookCustomRole.
     * @example
     * // Update one EbookCustomRole
     * const ebookCustomRole = await prisma.ebookCustomRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EbookCustomRoleUpdateArgs>(args: SelectSubset<T, EbookCustomRoleUpdateArgs<ExtArgs>>): Prisma__EbookCustomRoleClient<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EbookCustomRoles.
     * @param {EbookCustomRoleDeleteManyArgs} args - Arguments to filter EbookCustomRoles to delete.
     * @example
     * // Delete a few EbookCustomRoles
     * const { count } = await prisma.ebookCustomRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EbookCustomRoleDeleteManyArgs>(args?: SelectSubset<T, EbookCustomRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EbookCustomRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCustomRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EbookCustomRoles
     * const ebookCustomRole = await prisma.ebookCustomRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EbookCustomRoleUpdateManyArgs>(args: SelectSubset<T, EbookCustomRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EbookCustomRoles and returns the data updated in the database.
     * @param {EbookCustomRoleUpdateManyAndReturnArgs} args - Arguments to update many EbookCustomRoles.
     * @example
     * // Update many EbookCustomRoles
     * const ebookCustomRole = await prisma.ebookCustomRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EbookCustomRoles and only return the `id`
     * const ebookCustomRoleWithIdOnly = await prisma.ebookCustomRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EbookCustomRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, EbookCustomRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EbookCustomRole.
     * @param {EbookCustomRoleUpsertArgs} args - Arguments to update or create a EbookCustomRole.
     * @example
     * // Update or create a EbookCustomRole
     * const ebookCustomRole = await prisma.ebookCustomRole.upsert({
     *   create: {
     *     // ... data to create a EbookCustomRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EbookCustomRole we want to update
     *   }
     * })
     */
    upsert<T extends EbookCustomRoleUpsertArgs>(args: SelectSubset<T, EbookCustomRoleUpsertArgs<ExtArgs>>): Prisma__EbookCustomRoleClient<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EbookCustomRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCustomRoleCountArgs} args - Arguments to filter EbookCustomRoles to count.
     * @example
     * // Count the number of EbookCustomRoles
     * const count = await prisma.ebookCustomRole.count({
     *   where: {
     *     // ... the filter for the EbookCustomRoles we want to count
     *   }
     * })
    **/
    count<T extends EbookCustomRoleCountArgs>(
      args?: Subset<T, EbookCustomRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EbookCustomRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EbookCustomRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCustomRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EbookCustomRoleAggregateArgs>(args: Subset<T, EbookCustomRoleAggregateArgs>): Prisma.PrismaPromise<GetEbookCustomRoleAggregateType<T>>

    /**
     * Group by EbookCustomRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCustomRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EbookCustomRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EbookCustomRoleGroupByArgs["orderBy"] }
        : { orderBy?: EbookCustomRoleGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EbookCustomRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEbookCustomRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EbookCustomRole model
   */
  readonly fields: EbookCustomRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EbookCustomRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EbookCustomRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ebook<T extends EbookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EbookDefaultArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    collaborators<T extends EbookCustomRole$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, EbookCustomRole$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EbookCustomRole model
   */
  interface EbookCustomRoleFieldRefs {
    readonly id: FieldRef<"EbookCustomRole", "String">
    readonly ebookId: FieldRef<"EbookCustomRole", "String">
    readonly name: FieldRef<"EbookCustomRole", "String">
    readonly permissions: FieldRef<"EbookCustomRole", "CollaborationPermission[]">
    readonly createdByUserId: FieldRef<"EbookCustomRole", "String">
    readonly createdAt: FieldRef<"EbookCustomRole", "DateTime">
    readonly updatedAt: FieldRef<"EbookCustomRole", "DateTime">
  }
    

  // Custom InputTypes
  /**
   * EbookCustomRole findUnique
   */
  export type EbookCustomRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which EbookCustomRole to fetch.
     */
    where: EbookCustomRoleWhereUniqueInput
  }

  /**
   * EbookCustomRole findUniqueOrThrow
   */
  export type EbookCustomRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which EbookCustomRole to fetch.
     */
    where: EbookCustomRoleWhereUniqueInput
  }

  /**
   * EbookCustomRole findFirst
   */
  export type EbookCustomRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which EbookCustomRole to fetch.
     */
    where?: EbookCustomRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCustomRoles to fetch.
     */
    orderBy?: EbookCustomRoleOrderByWithRelationInput | EbookCustomRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EbookCustomRoles.
     */
    cursor?: EbookCustomRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCustomRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCustomRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbookCustomRoles.
     */
    distinct?: EbookCustomRoleScalarFieldEnum | EbookCustomRoleScalarFieldEnum[]
  }

  /**
   * EbookCustomRole findFirstOrThrow
   */
  export type EbookCustomRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which EbookCustomRole to fetch.
     */
    where?: EbookCustomRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCustomRoles to fetch.
     */
    orderBy?: EbookCustomRoleOrderByWithRelationInput | EbookCustomRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EbookCustomRoles.
     */
    cursor?: EbookCustomRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCustomRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCustomRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbookCustomRoles.
     */
    distinct?: EbookCustomRoleScalarFieldEnum | EbookCustomRoleScalarFieldEnum[]
  }

  /**
   * EbookCustomRole findMany
   */
  export type EbookCustomRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which EbookCustomRoles to fetch.
     */
    where?: EbookCustomRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbookCustomRoles to fetch.
     */
    orderBy?: EbookCustomRoleOrderByWithRelationInput | EbookCustomRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EbookCustomRoles.
     */
    cursor?: EbookCustomRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbookCustomRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbookCustomRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbookCustomRoles.
     */
    distinct?: EbookCustomRoleScalarFieldEnum | EbookCustomRoleScalarFieldEnum[]
  }

  /**
   * EbookCustomRole create
   */
  export type EbookCustomRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a EbookCustomRole.
     */
    data: XOR<EbookCustomRoleCreateInput, EbookCustomRoleUncheckedCreateInput>
  }

  /**
   * EbookCustomRole createMany
   */
  export type EbookCustomRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EbookCustomRoles.
     */
    data: EbookCustomRoleCreateManyInput | EbookCustomRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EbookCustomRole createManyAndReturn
   */
  export type EbookCustomRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * The data used to create many EbookCustomRoles.
     */
    data: EbookCustomRoleCreateManyInput | EbookCustomRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EbookCustomRole update
   */
  export type EbookCustomRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a EbookCustomRole.
     */
    data: XOR<EbookCustomRoleUpdateInput, EbookCustomRoleUncheckedUpdateInput>
    /**
     * Choose, which EbookCustomRole to update.
     */
    where: EbookCustomRoleWhereUniqueInput
  }

  /**
   * EbookCustomRole updateMany
   */
  export type EbookCustomRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EbookCustomRoles.
     */
    data: XOR<EbookCustomRoleUpdateManyMutationInput, EbookCustomRoleUncheckedUpdateManyInput>
    /**
     * Filter which EbookCustomRoles to update
     */
    where?: EbookCustomRoleWhereInput
    /**
     * Limit how many EbookCustomRoles to update.
     */
    limit?: number
  }

  /**
   * EbookCustomRole updateManyAndReturn
   */
  export type EbookCustomRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * The data used to update EbookCustomRoles.
     */
    data: XOR<EbookCustomRoleUpdateManyMutationInput, EbookCustomRoleUncheckedUpdateManyInput>
    /**
     * Filter which EbookCustomRoles to update
     */
    where?: EbookCustomRoleWhereInput
    /**
     * Limit how many EbookCustomRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EbookCustomRole upsert
   */
  export type EbookCustomRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the EbookCustomRole to update in case it exists.
     */
    where: EbookCustomRoleWhereUniqueInput
    /**
     * In case the EbookCustomRole found by the `where` argument doesn't exist, create a new EbookCustomRole with this data.
     */
    create: XOR<EbookCustomRoleCreateInput, EbookCustomRoleUncheckedCreateInput>
    /**
     * In case the EbookCustomRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EbookCustomRoleUpdateInput, EbookCustomRoleUncheckedUpdateInput>
  }

  /**
   * EbookCustomRole delete
   */
  export type EbookCustomRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    /**
     * Filter which EbookCustomRole to delete.
     */
    where: EbookCustomRoleWhereUniqueInput
  }

  /**
   * EbookCustomRole deleteMany
   */
  export type EbookCustomRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EbookCustomRoles to delete
     */
    where?: EbookCustomRoleWhereInput
    /**
     * Limit how many EbookCustomRoles to delete.
     */
    limit?: number
  }

  /**
   * EbookCustomRole.collaborators
   */
  export type EbookCustomRole$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    where?: EbookCollaboratorWhereInput
    orderBy?: EbookCollaboratorOrderByWithRelationInput | EbookCollaboratorOrderByWithRelationInput[]
    cursor?: EbookCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookCollaboratorScalarFieldEnum | EbookCollaboratorScalarFieldEnum[]
  }

  /**
   * EbookCustomRole without action
   */
  export type EbookCustomRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
  }


  /**
   * Model Ebook
   */

  export type AggregateEbook = {
    _count: EbookCountAggregateOutputType | null
    _min: EbookMinAggregateOutputType | null
    _max: EbookMaxAggregateOutputType | null
  }

  export type EbookMinAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    shortDescription: string | null
    ownerId: string | null
    currentSnapshotId: string | null
    coverAssetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EbookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    shortDescription: string | null
    ownerId: string | null
    currentSnapshotId: string | null
    coverAssetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EbookCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    shortDescription: number
    ownerId: number
    currentSnapshotId: number
    coverAssetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EbookMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    shortDescription?: true
    ownerId?: true
    currentSnapshotId?: true
    coverAssetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EbookMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    shortDescription?: true
    ownerId?: true
    currentSnapshotId?: true
    coverAssetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EbookCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    shortDescription?: true
    ownerId?: true
    currentSnapshotId?: true
    coverAssetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EbookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ebook to aggregate.
     */
    where?: EbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ebooks to fetch.
     */
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ebooks
    **/
    _count?: true | EbookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EbookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EbookMaxAggregateInputType
  }

  export type GetEbookAggregateType<T extends EbookAggregateArgs> = {
        [P in keyof T & keyof AggregateEbook]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEbook[P]>
      : GetScalarType<T[P], AggregateEbook[P]>
  }




  export type EbookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookWhereInput
    orderBy?: EbookOrderByWithAggregationInput | EbookOrderByWithAggregationInput[]
    by: EbookScalarFieldEnum[] | EbookScalarFieldEnum
    having?: EbookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EbookCountAggregateInputType | true
    _min?: EbookMinAggregateInputType
    _max?: EbookMaxAggregateInputType
  }

  export type EbookGroupByOutputType = {
    id: string
    title: string
    subtitle: string | null
    shortDescription: string | null
    ownerId: string
    currentSnapshotId: string | null
    coverAssetId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EbookCountAggregateOutputType | null
    _min: EbookMinAggregateOutputType | null
    _max: EbookMaxAggregateOutputType | null
  }

  type GetEbookGroupByPayload<T extends EbookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EbookGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof EbookGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EbookGroupByOutputType[P]>
            : GetScalarType<T[P], EbookGroupByOutputType[P]>
        }
      >
    >


  export type EbookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    shortDescription?: boolean
    ownerId?: boolean
    currentSnapshotId?: boolean
    coverAssetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
    coverAsset?: boolean | Ebook$coverAssetArgs<ExtArgs>
    snapshots?: boolean | Ebook$snapshotsArgs<ExtArgs>
    chapters?: boolean | Ebook$chaptersArgs<ExtArgs>
    collaborators?: boolean | Ebook$collaboratorsArgs<ExtArgs>
    customRoles?: boolean | Ebook$customRolesArgs<ExtArgs>
    _count?: boolean | EbookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebook"]>

  export type EbookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    shortDescription?: boolean
    ownerId?: boolean
    currentSnapshotId?: boolean
    coverAssetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
    coverAsset?: boolean | Ebook$coverAssetArgs<ExtArgs>
  }, ExtArgs["result"]["ebook"]>

  export type EbookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    shortDescription?: boolean
    ownerId?: boolean
    currentSnapshotId?: boolean
    coverAssetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
    coverAsset?: boolean | Ebook$coverAssetArgs<ExtArgs>
  }, ExtArgs["result"]["ebook"]>

  export type EbookSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    shortDescription?: boolean
    ownerId?: boolean
    currentSnapshotId?: boolean
    coverAssetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EbookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "subtitle" | "shortDescription" | "ownerId" | "currentSnapshotId" | "coverAssetId" | "createdAt" | "updatedAt", ExtArgs["result"]["ebook"]>
  export type EbookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
    coverAsset?: boolean | Ebook$coverAssetArgs<ExtArgs>
    snapshots?: boolean | Ebook$snapshotsArgs<ExtArgs>
    chapters?: boolean | Ebook$chaptersArgs<ExtArgs>
    collaborators?: boolean | Ebook$collaboratorsArgs<ExtArgs>
    customRoles?: boolean | Ebook$customRolesArgs<ExtArgs>
    _count?: boolean | EbookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EbookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
    coverAsset?: boolean | Ebook$coverAssetArgs<ExtArgs>
  }
  export type EbookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
    coverAsset?: boolean | Ebook$coverAssetArgs<ExtArgs>
  }

  export type $EbookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ebook"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      currentSnapshot: Prisma.$SnapshotPayload<ExtArgs> | null
      coverAsset: Prisma.$AssetPayload<ExtArgs> | null
      snapshots: Prisma.$SnapshotPayload<ExtArgs>[]
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
      collaborators: Prisma.$EbookCollaboratorPayload<ExtArgs>[]
      customRoles: Prisma.$EbookCustomRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subtitle: string | null
      shortDescription: string | null
      ownerId: string
      currentSnapshotId: string | null
      coverAssetId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ebook"]>
    composites: {}
  }

  type EbookGetPayload<S extends boolean | null | undefined | EbookDefaultArgs> = $Result.GetResult<Prisma.$EbookPayload, S>

  type EbookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EbookFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: EbookCountAggregateInputType | true
    }

  export interface EbookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["Ebook"], meta: { name: "Ebook" } }
    /**
     * Find zero or one Ebook that matches the filter.
     * @param {EbookFindUniqueArgs} args - Arguments to find a Ebook
     * @example
     * // Get one Ebook
     * const ebook = await prisma.ebook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EbookFindUniqueArgs>(args: SelectSubset<T, EbookFindUniqueArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ebook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EbookFindUniqueOrThrowArgs} args - Arguments to find a Ebook
     * @example
     * // Get one Ebook
     * const ebook = await prisma.ebook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EbookFindUniqueOrThrowArgs>(args: SelectSubset<T, EbookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ebook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookFindFirstArgs} args - Arguments to find a Ebook
     * @example
     * // Get one Ebook
     * const ebook = await prisma.ebook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EbookFindFirstArgs>(args?: SelectSubset<T, EbookFindFirstArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ebook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookFindFirstOrThrowArgs} args - Arguments to find a Ebook
     * @example
     * // Get one Ebook
     * const ebook = await prisma.ebook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EbookFindFirstOrThrowArgs>(args?: SelectSubset<T, EbookFindFirstOrThrowArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ebooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ebooks
     * const ebooks = await prisma.ebook.findMany()
     * 
     * // Get first 10 Ebooks
     * const ebooks = await prisma.ebook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ebookWithIdOnly = await prisma.ebook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EbookFindManyArgs>(args?: SelectSubset<T, EbookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ebook.
     * @param {EbookCreateArgs} args - Arguments to create a Ebook.
     * @example
     * // Create one Ebook
     * const Ebook = await prisma.ebook.create({
     *   data: {
     *     // ... data to create a Ebook
     *   }
     * })
     * 
     */
    create<T extends EbookCreateArgs>(args: SelectSubset<T, EbookCreateArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ebooks.
     * @param {EbookCreateManyArgs} args - Arguments to create many Ebooks.
     * @example
     * // Create many Ebooks
     * const ebook = await prisma.ebook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EbookCreateManyArgs>(args?: SelectSubset<T, EbookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ebooks and returns the data saved in the database.
     * @param {EbookCreateManyAndReturnArgs} args - Arguments to create many Ebooks.
     * @example
     * // Create many Ebooks
     * const ebook = await prisma.ebook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ebooks and only return the `id`
     * const ebookWithIdOnly = await prisma.ebook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EbookCreateManyAndReturnArgs>(args?: SelectSubset<T, EbookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ebook.
     * @param {EbookDeleteArgs} args - Arguments to delete one Ebook.
     * @example
     * // Delete one Ebook
     * const Ebook = await prisma.ebook.delete({
     *   where: {
     *     // ... filter to delete one Ebook
     *   }
     * })
     * 
     */
    delete<T extends EbookDeleteArgs>(args: SelectSubset<T, EbookDeleteArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ebook.
     * @param {EbookUpdateArgs} args - Arguments to update one Ebook.
     * @example
     * // Update one Ebook
     * const ebook = await prisma.ebook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EbookUpdateArgs>(args: SelectSubset<T, EbookUpdateArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ebooks.
     * @param {EbookDeleteManyArgs} args - Arguments to filter Ebooks to delete.
     * @example
     * // Delete a few Ebooks
     * const { count } = await prisma.ebook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EbookDeleteManyArgs>(args?: SelectSubset<T, EbookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ebooks
     * const ebook = await prisma.ebook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EbookUpdateManyArgs>(args: SelectSubset<T, EbookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ebooks and returns the data updated in the database.
     * @param {EbookUpdateManyAndReturnArgs} args - Arguments to update many Ebooks.
     * @example
     * // Update many Ebooks
     * const ebook = await prisma.ebook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ebooks and only return the `id`
     * const ebookWithIdOnly = await prisma.ebook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EbookUpdateManyAndReturnArgs>(args: SelectSubset<T, EbookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ebook.
     * @param {EbookUpsertArgs} args - Arguments to update or create a Ebook.
     * @example
     * // Update or create a Ebook
     * const ebook = await prisma.ebook.upsert({
     *   create: {
     *     // ... data to create a Ebook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ebook we want to update
     *   }
     * })
     */
    upsert<T extends EbookUpsertArgs>(args: SelectSubset<T, EbookUpsertArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCountArgs} args - Arguments to filter Ebooks to count.
     * @example
     * // Count the number of Ebooks
     * const count = await prisma.ebook.count({
     *   where: {
     *     // ... the filter for the Ebooks we want to count
     *   }
     * })
    **/
    count<T extends EbookCountArgs>(
      args?: Subset<T, EbookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EbookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EbookAggregateArgs>(args: Subset<T, EbookAggregateArgs>): Prisma.PrismaPromise<GetEbookAggregateType<T>>

    /**
     * Group by Ebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EbookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EbookGroupByArgs["orderBy"] }
        : { orderBy?: EbookGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EbookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEbookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ebook model
   */
  readonly fields: EbookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ebook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EbookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currentSnapshot<T extends Ebook$currentSnapshotArgs<ExtArgs> = {}>(args?: Subset<T, Ebook$currentSnapshotArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coverAsset<T extends Ebook$coverAssetArgs<ExtArgs> = {}>(args?: Subset<T, Ebook$coverAssetArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    snapshots<T extends Ebook$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Ebook$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chapters<T extends Ebook$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Ebook$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborators<T extends Ebook$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Ebook$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customRoles<T extends Ebook$customRolesArgs<ExtArgs> = {}>(args?: Subset<T, Ebook$customRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ebook model
   */
  interface EbookFieldRefs {
    readonly id: FieldRef<"Ebook", "String">
    readonly title: FieldRef<"Ebook", "String">
    readonly subtitle: FieldRef<"Ebook", "String">
    readonly shortDescription: FieldRef<"Ebook", "String">
    readonly ownerId: FieldRef<"Ebook", "String">
    readonly currentSnapshotId: FieldRef<"Ebook", "String">
    readonly coverAssetId: FieldRef<"Ebook", "String">
    readonly createdAt: FieldRef<"Ebook", "DateTime">
    readonly updatedAt: FieldRef<"Ebook", "DateTime">
  }
    

  // Custom InputTypes
  /**
   * Ebook findUnique
   */
  export type EbookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebook to fetch.
     */
    where: EbookWhereUniqueInput
  }

  /**
   * Ebook findUniqueOrThrow
   */
  export type EbookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebook to fetch.
     */
    where: EbookWhereUniqueInput
  }

  /**
   * Ebook findFirst
   */
  export type EbookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebook to fetch.
     */
    where?: EbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ebooks to fetch.
     */
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ebooks.
     */
    cursor?: EbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ebooks.
     */
    distinct?: EbookScalarFieldEnum | EbookScalarFieldEnum[]
  }

  /**
   * Ebook findFirstOrThrow
   */
  export type EbookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebook to fetch.
     */
    where?: EbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ebooks to fetch.
     */
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ebooks.
     */
    cursor?: EbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ebooks.
     */
    distinct?: EbookScalarFieldEnum | EbookScalarFieldEnum[]
  }

  /**
   * Ebook findMany
   */
  export type EbookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebooks to fetch.
     */
    where?: EbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ebooks to fetch.
     */
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ebooks.
     */
    cursor?: EbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ebooks.
     */
    distinct?: EbookScalarFieldEnum | EbookScalarFieldEnum[]
  }

  /**
   * Ebook create
   */
  export type EbookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * The data needed to create a Ebook.
     */
    data: XOR<EbookCreateInput, EbookUncheckedCreateInput>
  }

  /**
   * Ebook createMany
   */
  export type EbookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ebooks.
     */
    data: EbookCreateManyInput | EbookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ebook createManyAndReturn
   */
  export type EbookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * The data used to create many Ebooks.
     */
    data: EbookCreateManyInput | EbookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ebook update
   */
  export type EbookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * The data needed to update a Ebook.
     */
    data: XOR<EbookUpdateInput, EbookUncheckedUpdateInput>
    /**
     * Choose, which Ebook to update.
     */
    where: EbookWhereUniqueInput
  }

  /**
   * Ebook updateMany
   */
  export type EbookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ebooks.
     */
    data: XOR<EbookUpdateManyMutationInput, EbookUncheckedUpdateManyInput>
    /**
     * Filter which Ebooks to update
     */
    where?: EbookWhereInput
    /**
     * Limit how many Ebooks to update.
     */
    limit?: number
  }

  /**
   * Ebook updateManyAndReturn
   */
  export type EbookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * The data used to update Ebooks.
     */
    data: XOR<EbookUpdateManyMutationInput, EbookUncheckedUpdateManyInput>
    /**
     * Filter which Ebooks to update
     */
    where?: EbookWhereInput
    /**
     * Limit how many Ebooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ebook upsert
   */
  export type EbookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * The filter to search for the Ebook to update in case it exists.
     */
    where: EbookWhereUniqueInput
    /**
     * In case the Ebook found by the `where` argument doesn't exist, create a new Ebook with this data.
     */
    create: XOR<EbookCreateInput, EbookUncheckedCreateInput>
    /**
     * In case the Ebook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EbookUpdateInput, EbookUncheckedUpdateInput>
  }

  /**
   * Ebook delete
   */
  export type EbookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter which Ebook to delete.
     */
    where: EbookWhereUniqueInput
  }

  /**
   * Ebook deleteMany
   */
  export type EbookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ebooks to delete
     */
    where?: EbookWhereInput
    /**
     * Limit how many Ebooks to delete.
     */
    limit?: number
  }

  /**
   * Ebook.currentSnapshot
   */
  export type Ebook$currentSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    where?: SnapshotWhereInput
  }

  /**
   * Ebook.coverAsset
   */
  export type Ebook$coverAssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
  }

  /**
   * Ebook.snapshots
   */
  export type Ebook$snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    where?: SnapshotWhereInput
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    cursor?: SnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Ebook.chapters
   */
  export type Ebook$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Ebook.collaborators
   */
  export type Ebook$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    where?: EbookCollaboratorWhereInput
    orderBy?: EbookCollaboratorOrderByWithRelationInput | EbookCollaboratorOrderByWithRelationInput[]
    cursor?: EbookCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookCollaboratorScalarFieldEnum | EbookCollaboratorScalarFieldEnum[]
  }

  /**
   * Ebook.customRoles
   */
  export type Ebook$customRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    where?: EbookCustomRoleWhereInput
    orderBy?: EbookCustomRoleOrderByWithRelationInput | EbookCustomRoleOrderByWithRelationInput[]
    cursor?: EbookCustomRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookCustomRoleScalarFieldEnum | EbookCustomRoleScalarFieldEnum[]
  }

  /**
   * Ebook without action
   */
  export type EbookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
  }


  /**
   * Model Snapshot
   */

  export type AggregateSnapshot = {
    _count: SnapshotCountAggregateOutputType | null
    _avg: SnapshotAvgAggregateOutputType | null
    _sum: SnapshotSumAggregateOutputType | null
    _min: SnapshotMinAggregateOutputType | null
    _max: SnapshotMaxAggregateOutputType | null
  }

  export type SnapshotAvgAggregateOutputType = {
    version: number | null
  }

  export type SnapshotSumAggregateOutputType = {
    version: number | null
  }

  export type SnapshotMinAggregateOutputType = {
    id: string | null
    ebookId: string | null
    version: number | null
    createdAt: Date | null
    status: $Enums.SnapshotStatus | null
  }

  export type SnapshotMaxAggregateOutputType = {
    id: string | null
    ebookId: string | null
    version: number | null
    createdAt: Date | null
    status: $Enums.SnapshotStatus | null
  }

  export type SnapshotCountAggregateOutputType = {
    id: number
    ebookId: number
    version: number
    createdAt: number
    status: number
    _all: number
  }


  export type SnapshotAvgAggregateInputType = {
    version?: true
  }

  export type SnapshotSumAggregateInputType = {
    version?: true
  }

  export type SnapshotMinAggregateInputType = {
    id?: true
    ebookId?: true
    version?: true
    createdAt?: true
    status?: true
  }

  export type SnapshotMaxAggregateInputType = {
    id?: true
    ebookId?: true
    version?: true
    createdAt?: true
    status?: true
  }

  export type SnapshotCountAggregateInputType = {
    id?: true
    ebookId?: true
    version?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type SnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snapshot to aggregate.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Snapshots
    **/
    _count?: true | SnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnapshotMaxAggregateInputType
  }

  export type GetSnapshotAggregateType<T extends SnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateSnapshot]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnapshot[P]>
      : GetScalarType<T[P], AggregateSnapshot[P]>
  }




  export type SnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapshotWhereInput
    orderBy?: SnapshotOrderByWithAggregationInput | SnapshotOrderByWithAggregationInput[]
    by: SnapshotScalarFieldEnum[] | SnapshotScalarFieldEnum
    having?: SnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnapshotCountAggregateInputType | true
    _avg?: SnapshotAvgAggregateInputType
    _sum?: SnapshotSumAggregateInputType
    _min?: SnapshotMinAggregateInputType
    _max?: SnapshotMaxAggregateInputType
  }

  export type SnapshotGroupByOutputType = {
    id: string
    ebookId: string
    version: number
    createdAt: Date
    status: $Enums.SnapshotStatus
    _count: SnapshotCountAggregateOutputType | null
    _avg: SnapshotAvgAggregateOutputType | null
    _sum: SnapshotSumAggregateOutputType | null
    _min: SnapshotMinAggregateOutputType | null
    _max: SnapshotMaxAggregateOutputType | null
  }

  type GetSnapshotGroupByPayload<T extends SnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnapshotGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof SnapshotGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], SnapshotGroupByOutputType[P]>
        }
      >
    >


  export type SnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    version?: boolean
    createdAt?: boolean
    status?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    file?: boolean | Snapshot$fileArgs<ExtArgs>
    currentForEbook?: boolean | Snapshot$currentForEbookArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    version?: boolean
    createdAt?: boolean
    status?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    version?: boolean
    createdAt?: boolean
    status?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectScalar = {
    id?: boolean
    ebookId?: boolean
    version?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type SnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ebookId" | "version" | "createdAt" | "status", ExtArgs["result"]["snapshot"]>
  export type SnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    file?: boolean | Snapshot$fileArgs<ExtArgs>
    currentForEbook?: boolean | Snapshot$currentForEbookArgs<ExtArgs>
  }
  export type SnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }
  export type SnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }

  export type $SnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Snapshot"
    objects: {
      ebook: Prisma.$EbookPayload<ExtArgs>
      file: Prisma.$SnapshotFilePayload<ExtArgs> | null
      currentForEbook: Prisma.$EbookPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ebookId: string
      version: number
      createdAt: Date
      status: $Enums.SnapshotStatus
    }, ExtArgs["result"]["snapshot"]>
    composites: {}
  }

  type SnapshotGetPayload<S extends boolean | null | undefined | SnapshotDefaultArgs> = $Result.GetResult<Prisma.$SnapshotPayload, S>

  type SnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnapshotFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: SnapshotCountAggregateInputType | true
    }

  export interface SnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["Snapshot"], meta: { name: "Snapshot" } }
    /**
     * Find zero or one Snapshot that matches the filter.
     * @param {SnapshotFindUniqueArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnapshotFindUniqueArgs>(args: SelectSubset<T, SnapshotFindUniqueArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Snapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SnapshotFindUniqueOrThrowArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, SnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindFirstArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnapshotFindFirstArgs>(args?: SelectSubset<T, SnapshotFindFirstArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindFirstOrThrowArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, SnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Snapshots
     * const snapshots = await prisma.snapshot.findMany()
     * 
     * // Get first 10 Snapshots
     * const snapshots = await prisma.snapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnapshotFindManyArgs>(args?: SelectSubset<T, SnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Snapshot.
     * @param {SnapshotCreateArgs} args - Arguments to create a Snapshot.
     * @example
     * // Create one Snapshot
     * const Snapshot = await prisma.snapshot.create({
     *   data: {
     *     // ... data to create a Snapshot
     *   }
     * })
     * 
     */
    create<T extends SnapshotCreateArgs>(args: SelectSubset<T, SnapshotCreateArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Snapshots.
     * @param {SnapshotCreateManyArgs} args - Arguments to create many Snapshots.
     * @example
     * // Create many Snapshots
     * const snapshot = await prisma.snapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnapshotCreateManyArgs>(args?: SelectSubset<T, SnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Snapshots and returns the data saved in the database.
     * @param {SnapshotCreateManyAndReturnArgs} args - Arguments to create many Snapshots.
     * @example
     * // Create many Snapshots
     * const snapshot = await prisma.snapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Snapshots and only return the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, SnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Snapshot.
     * @param {SnapshotDeleteArgs} args - Arguments to delete one Snapshot.
     * @example
     * // Delete one Snapshot
     * const Snapshot = await prisma.snapshot.delete({
     *   where: {
     *     // ... filter to delete one Snapshot
     *   }
     * })
     * 
     */
    delete<T extends SnapshotDeleteArgs>(args: SelectSubset<T, SnapshotDeleteArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Snapshot.
     * @param {SnapshotUpdateArgs} args - Arguments to update one Snapshot.
     * @example
     * // Update one Snapshot
     * const snapshot = await prisma.snapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnapshotUpdateArgs>(args: SelectSubset<T, SnapshotUpdateArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Snapshots.
     * @param {SnapshotDeleteManyArgs} args - Arguments to filter Snapshots to delete.
     * @example
     * // Delete a few Snapshots
     * const { count } = await prisma.snapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnapshotDeleteManyArgs>(args?: SelectSubset<T, SnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Snapshots
     * const snapshot = await prisma.snapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnapshotUpdateManyArgs>(args: SelectSubset<T, SnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snapshots and returns the data updated in the database.
     * @param {SnapshotUpdateManyAndReturnArgs} args - Arguments to update many Snapshots.
     * @example
     * // Update many Snapshots
     * const snapshot = await prisma.snapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Snapshots and only return the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, SnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Snapshot.
     * @param {SnapshotUpsertArgs} args - Arguments to update or create a Snapshot.
     * @example
     * // Update or create a Snapshot
     * const snapshot = await prisma.snapshot.upsert({
     *   create: {
     *     // ... data to create a Snapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Snapshot we want to update
     *   }
     * })
     */
    upsert<T extends SnapshotUpsertArgs>(args: SelectSubset<T, SnapshotUpsertArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotCountArgs} args - Arguments to filter Snapshots to count.
     * @example
     * // Count the number of Snapshots
     * const count = await prisma.snapshot.count({
     *   where: {
     *     // ... the filter for the Snapshots we want to count
     *   }
     * })
    **/
    count<T extends SnapshotCountArgs>(
      args?: Subset<T, SnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Snapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SnapshotAggregateArgs>(args: Subset<T, SnapshotAggregateArgs>): Prisma.PrismaPromise<GetSnapshotAggregateType<T>>

    /**
     * Group by Snapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnapshotGroupByArgs["orderBy"] }
        : { orderBy?: SnapshotGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Snapshot model
   */
  readonly fields: SnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Snapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ebook<T extends EbookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EbookDefaultArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    file<T extends Snapshot$fileArgs<ExtArgs> = {}>(args?: Subset<T, Snapshot$fileArgs<ExtArgs>>): Prisma__SnapshotFileClient<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    currentForEbook<T extends Snapshot$currentForEbookArgs<ExtArgs> = {}>(args?: Subset<T, Snapshot$currentForEbookArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Snapshot model
   */
  interface SnapshotFieldRefs {
    readonly id: FieldRef<"Snapshot", "String">
    readonly ebookId: FieldRef<"Snapshot", "String">
    readonly version: FieldRef<"Snapshot", "Int">
    readonly createdAt: FieldRef<"Snapshot", "DateTime">
    readonly status: FieldRef<"Snapshot", "SnapshotStatus">
  }
    

  // Custom InputTypes
  /**
   * Snapshot findUnique
   */
  export type SnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot findUniqueOrThrow
   */
  export type SnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot findFirst
   */
  export type SnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Snapshot findFirstOrThrow
   */
  export type SnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Snapshot findMany
   */
  export type SnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshots to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Snapshot create
   */
  export type SnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a Snapshot.
     */
    data: XOR<SnapshotCreateInput, SnapshotUncheckedCreateInput>
  }

  /**
   * Snapshot createMany
   */
  export type SnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Snapshots.
     */
    data: SnapshotCreateManyInput | SnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Snapshot createManyAndReturn
   */
  export type SnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many Snapshots.
     */
    data: SnapshotCreateManyInput | SnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Snapshot update
   */
  export type SnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a Snapshot.
     */
    data: XOR<SnapshotUpdateInput, SnapshotUncheckedUpdateInput>
    /**
     * Choose, which Snapshot to update.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot updateMany
   */
  export type SnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Snapshots.
     */
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyInput>
    /**
     * Filter which Snapshots to update
     */
    where?: SnapshotWhereInput
    /**
     * Limit how many Snapshots to update.
     */
    limit?: number
  }

  /**
   * Snapshot updateManyAndReturn
   */
  export type SnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * The data used to update Snapshots.
     */
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyInput>
    /**
     * Filter which Snapshots to update
     */
    where?: SnapshotWhereInput
    /**
     * Limit how many Snapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Snapshot upsert
   */
  export type SnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the Snapshot to update in case it exists.
     */
    where: SnapshotWhereUniqueInput
    /**
     * In case the Snapshot found by the `where` argument doesn't exist, create a new Snapshot with this data.
     */
    create: XOR<SnapshotCreateInput, SnapshotUncheckedCreateInput>
    /**
     * In case the Snapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnapshotUpdateInput, SnapshotUncheckedUpdateInput>
  }

  /**
   * Snapshot delete
   */
  export type SnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter which Snapshot to delete.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot deleteMany
   */
  export type SnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snapshots to delete
     */
    where?: SnapshotWhereInput
    /**
     * Limit how many Snapshots to delete.
     */
    limit?: number
  }

  /**
   * Snapshot.file
   */
  export type Snapshot$fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    where?: SnapshotFileWhereInput
  }

  /**
   * Snapshot.currentForEbook
   */
  export type Snapshot$currentForEbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    where?: EbookWhereInput
  }

  /**
   * Snapshot without action
   */
  export type SnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
  }


  /**
   * Model SnapshotFile
   */

  export type AggregateSnapshotFile = {
    _count: SnapshotFileCountAggregateOutputType | null
    _avg: SnapshotFileAvgAggregateOutputType | null
    _sum: SnapshotFileSumAggregateOutputType | null
    _min: SnapshotFileMinAggregateOutputType | null
    _max: SnapshotFileMaxAggregateOutputType | null
  }

  export type SnapshotFileAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type SnapshotFileSumAggregateOutputType = {
    sizeBytes: number | null
  }

  export type SnapshotFileMinAggregateOutputType = {
    id: string | null
    snapshotId: string | null
    key: string | null
    bucket: string | null
    sizeBytes: number | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type SnapshotFileMaxAggregateOutputType = {
    id: string | null
    snapshotId: string | null
    key: string | null
    bucket: string | null
    sizeBytes: number | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type SnapshotFileCountAggregateOutputType = {
    id: number
    snapshotId: number
    key: number
    bucket: number
    sizeBytes: number
    mimeType: number
    createdAt: number
    _all: number
  }


  export type SnapshotFileAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type SnapshotFileSumAggregateInputType = {
    sizeBytes?: true
  }

  export type SnapshotFileMinAggregateInputType = {
    id?: true
    snapshotId?: true
    key?: true
    bucket?: true
    sizeBytes?: true
    mimeType?: true
    createdAt?: true
  }

  export type SnapshotFileMaxAggregateInputType = {
    id?: true
    snapshotId?: true
    key?: true
    bucket?: true
    sizeBytes?: true
    mimeType?: true
    createdAt?: true
  }

  export type SnapshotFileCountAggregateInputType = {
    id?: true
    snapshotId?: true
    key?: true
    bucket?: true
    sizeBytes?: true
    mimeType?: true
    createdAt?: true
    _all?: true
  }

  export type SnapshotFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnapshotFile to aggregate.
     */
    where?: SnapshotFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnapshotFiles to fetch.
     */
    orderBy?: SnapshotFileOrderByWithRelationInput | SnapshotFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnapshotFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnapshotFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnapshotFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SnapshotFiles
    **/
    _count?: true | SnapshotFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnapshotFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnapshotFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnapshotFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnapshotFileMaxAggregateInputType
  }

  export type GetSnapshotFileAggregateType<T extends SnapshotFileAggregateArgs> = {
        [P in keyof T & keyof AggregateSnapshotFile]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnapshotFile[P]>
      : GetScalarType<T[P], AggregateSnapshotFile[P]>
  }




  export type SnapshotFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapshotFileWhereInput
    orderBy?: SnapshotFileOrderByWithAggregationInput | SnapshotFileOrderByWithAggregationInput[]
    by: SnapshotFileScalarFieldEnum[] | SnapshotFileScalarFieldEnum
    having?: SnapshotFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnapshotFileCountAggregateInputType | true
    _avg?: SnapshotFileAvgAggregateInputType
    _sum?: SnapshotFileSumAggregateInputType
    _min?: SnapshotFileMinAggregateInputType
    _max?: SnapshotFileMaxAggregateInputType
  }

  export type SnapshotFileGroupByOutputType = {
    id: string
    snapshotId: string
    key: string
    bucket: string
    sizeBytes: number
    mimeType: string
    createdAt: Date
    _count: SnapshotFileCountAggregateOutputType | null
    _avg: SnapshotFileAvgAggregateOutputType | null
    _sum: SnapshotFileSumAggregateOutputType | null
    _min: SnapshotFileMinAggregateOutputType | null
    _max: SnapshotFileMaxAggregateOutputType | null
  }

  type GetSnapshotFileGroupByPayload<T extends SnapshotFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnapshotFileGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof SnapshotFileGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnapshotFileGroupByOutputType[P]>
            : GetScalarType<T[P], SnapshotFileGroupByOutputType[P]>
        }
      >
    >


  export type SnapshotFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotId?: boolean
    key?: boolean
    bucket?: boolean
    sizeBytes?: boolean
    mimeType?: boolean
    createdAt?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshotFile"]>

  export type SnapshotFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotId?: boolean
    key?: boolean
    bucket?: boolean
    sizeBytes?: boolean
    mimeType?: boolean
    createdAt?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshotFile"]>

  export type SnapshotFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotId?: boolean
    key?: boolean
    bucket?: boolean
    sizeBytes?: boolean
    mimeType?: boolean
    createdAt?: boolean
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshotFile"]>

  export type SnapshotFileSelectScalar = {
    id?: boolean
    snapshotId?: boolean
    key?: boolean
    bucket?: boolean
    sizeBytes?: boolean
    mimeType?: boolean
    createdAt?: boolean
  }

  export type SnapshotFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "snapshotId" | "key" | "bucket" | "sizeBytes" | "mimeType" | "createdAt", ExtArgs["result"]["snapshotFile"]>
  export type SnapshotFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }
  export type SnapshotFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }
  export type SnapshotFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }

  export type $SnapshotFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SnapshotFile"
    objects: {
      snapshot: Prisma.$SnapshotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      snapshotId: string
      key: string
      bucket: string
      sizeBytes: number
      mimeType: string
      createdAt: Date
    }, ExtArgs["result"]["snapshotFile"]>
    composites: {}
  }

  type SnapshotFileGetPayload<S extends boolean | null | undefined | SnapshotFileDefaultArgs> = $Result.GetResult<Prisma.$SnapshotFilePayload, S>

  type SnapshotFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnapshotFileFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: SnapshotFileCountAggregateInputType | true
    }

  export interface SnapshotFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["SnapshotFile"], meta: { name: "SnapshotFile" } }
    /**
     * Find zero or one SnapshotFile that matches the filter.
     * @param {SnapshotFileFindUniqueArgs} args - Arguments to find a SnapshotFile
     * @example
     * // Get one SnapshotFile
     * const snapshotFile = await prisma.snapshotFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnapshotFileFindUniqueArgs>(args: SelectSubset<T, SnapshotFileFindUniqueArgs<ExtArgs>>): Prisma__SnapshotFileClient<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SnapshotFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SnapshotFileFindUniqueOrThrowArgs} args - Arguments to find a SnapshotFile
     * @example
     * // Get one SnapshotFile
     * const snapshotFile = await prisma.snapshotFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnapshotFileFindUniqueOrThrowArgs>(args: SelectSubset<T, SnapshotFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnapshotFileClient<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SnapshotFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFileFindFirstArgs} args - Arguments to find a SnapshotFile
     * @example
     * // Get one SnapshotFile
     * const snapshotFile = await prisma.snapshotFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnapshotFileFindFirstArgs>(args?: SelectSubset<T, SnapshotFileFindFirstArgs<ExtArgs>>): Prisma__SnapshotFileClient<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SnapshotFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFileFindFirstOrThrowArgs} args - Arguments to find a SnapshotFile
     * @example
     * // Get one SnapshotFile
     * const snapshotFile = await prisma.snapshotFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnapshotFileFindFirstOrThrowArgs>(args?: SelectSubset<T, SnapshotFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnapshotFileClient<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SnapshotFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SnapshotFiles
     * const snapshotFiles = await prisma.snapshotFile.findMany()
     * 
     * // Get first 10 SnapshotFiles
     * const snapshotFiles = await prisma.snapshotFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snapshotFileWithIdOnly = await prisma.snapshotFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnapshotFileFindManyArgs>(args?: SelectSubset<T, SnapshotFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SnapshotFile.
     * @param {SnapshotFileCreateArgs} args - Arguments to create a SnapshotFile.
     * @example
     * // Create one SnapshotFile
     * const SnapshotFile = await prisma.snapshotFile.create({
     *   data: {
     *     // ... data to create a SnapshotFile
     *   }
     * })
     * 
     */
    create<T extends SnapshotFileCreateArgs>(args: SelectSubset<T, SnapshotFileCreateArgs<ExtArgs>>): Prisma__SnapshotFileClient<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SnapshotFiles.
     * @param {SnapshotFileCreateManyArgs} args - Arguments to create many SnapshotFiles.
     * @example
     * // Create many SnapshotFiles
     * const snapshotFile = await prisma.snapshotFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnapshotFileCreateManyArgs>(args?: SelectSubset<T, SnapshotFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SnapshotFiles and returns the data saved in the database.
     * @param {SnapshotFileCreateManyAndReturnArgs} args - Arguments to create many SnapshotFiles.
     * @example
     * // Create many SnapshotFiles
     * const snapshotFile = await prisma.snapshotFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SnapshotFiles and only return the `id`
     * const snapshotFileWithIdOnly = await prisma.snapshotFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnapshotFileCreateManyAndReturnArgs>(args?: SelectSubset<T, SnapshotFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SnapshotFile.
     * @param {SnapshotFileDeleteArgs} args - Arguments to delete one SnapshotFile.
     * @example
     * // Delete one SnapshotFile
     * const SnapshotFile = await prisma.snapshotFile.delete({
     *   where: {
     *     // ... filter to delete one SnapshotFile
     *   }
     * })
     * 
     */
    delete<T extends SnapshotFileDeleteArgs>(args: SelectSubset<T, SnapshotFileDeleteArgs<ExtArgs>>): Prisma__SnapshotFileClient<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SnapshotFile.
     * @param {SnapshotFileUpdateArgs} args - Arguments to update one SnapshotFile.
     * @example
     * // Update one SnapshotFile
     * const snapshotFile = await prisma.snapshotFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnapshotFileUpdateArgs>(args: SelectSubset<T, SnapshotFileUpdateArgs<ExtArgs>>): Prisma__SnapshotFileClient<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SnapshotFiles.
     * @param {SnapshotFileDeleteManyArgs} args - Arguments to filter SnapshotFiles to delete.
     * @example
     * // Delete a few SnapshotFiles
     * const { count } = await prisma.snapshotFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnapshotFileDeleteManyArgs>(args?: SelectSubset<T, SnapshotFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnapshotFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SnapshotFiles
     * const snapshotFile = await prisma.snapshotFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnapshotFileUpdateManyArgs>(args: SelectSubset<T, SnapshotFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnapshotFiles and returns the data updated in the database.
     * @param {SnapshotFileUpdateManyAndReturnArgs} args - Arguments to update many SnapshotFiles.
     * @example
     * // Update many SnapshotFiles
     * const snapshotFile = await prisma.snapshotFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SnapshotFiles and only return the `id`
     * const snapshotFileWithIdOnly = await prisma.snapshotFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SnapshotFileUpdateManyAndReturnArgs>(args: SelectSubset<T, SnapshotFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SnapshotFile.
     * @param {SnapshotFileUpsertArgs} args - Arguments to update or create a SnapshotFile.
     * @example
     * // Update or create a SnapshotFile
     * const snapshotFile = await prisma.snapshotFile.upsert({
     *   create: {
     *     // ... data to create a SnapshotFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SnapshotFile we want to update
     *   }
     * })
     */
    upsert<T extends SnapshotFileUpsertArgs>(args: SelectSubset<T, SnapshotFileUpsertArgs<ExtArgs>>): Prisma__SnapshotFileClient<$Result.GetResult<Prisma.$SnapshotFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SnapshotFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFileCountArgs} args - Arguments to filter SnapshotFiles to count.
     * @example
     * // Count the number of SnapshotFiles
     * const count = await prisma.snapshotFile.count({
     *   where: {
     *     // ... the filter for the SnapshotFiles we want to count
     *   }
     * })
    **/
    count<T extends SnapshotFileCountArgs>(
      args?: Subset<T, SnapshotFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SnapshotFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SnapshotFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SnapshotFileAggregateArgs>(args: Subset<T, SnapshotFileAggregateArgs>): Prisma.PrismaPromise<GetSnapshotFileAggregateType<T>>

    /**
     * Group by SnapshotFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SnapshotFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnapshotFileGroupByArgs["orderBy"] }
        : { orderBy?: SnapshotFileGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SnapshotFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnapshotFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SnapshotFile model
   */
  readonly fields: SnapshotFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SnapshotFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnapshotFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    snapshot<T extends SnapshotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SnapshotDefaultArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SnapshotFile model
   */
  interface SnapshotFileFieldRefs {
    readonly id: FieldRef<"SnapshotFile", "String">
    readonly snapshotId: FieldRef<"SnapshotFile", "String">
    readonly key: FieldRef<"SnapshotFile", "String">
    readonly bucket: FieldRef<"SnapshotFile", "String">
    readonly sizeBytes: FieldRef<"SnapshotFile", "Int">
    readonly mimeType: FieldRef<"SnapshotFile", "String">
    readonly createdAt: FieldRef<"SnapshotFile", "DateTime">
  }
    

  // Custom InputTypes
  /**
   * SnapshotFile findUnique
   */
  export type SnapshotFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    /**
     * Filter, which SnapshotFile to fetch.
     */
    where: SnapshotFileWhereUniqueInput
  }

  /**
   * SnapshotFile findUniqueOrThrow
   */
  export type SnapshotFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    /**
     * Filter, which SnapshotFile to fetch.
     */
    where: SnapshotFileWhereUniqueInput
  }

  /**
   * SnapshotFile findFirst
   */
  export type SnapshotFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    /**
     * Filter, which SnapshotFile to fetch.
     */
    where?: SnapshotFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnapshotFiles to fetch.
     */
    orderBy?: SnapshotFileOrderByWithRelationInput | SnapshotFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnapshotFiles.
     */
    cursor?: SnapshotFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnapshotFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnapshotFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnapshotFiles.
     */
    distinct?: SnapshotFileScalarFieldEnum | SnapshotFileScalarFieldEnum[]
  }

  /**
   * SnapshotFile findFirstOrThrow
   */
  export type SnapshotFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    /**
     * Filter, which SnapshotFile to fetch.
     */
    where?: SnapshotFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnapshotFiles to fetch.
     */
    orderBy?: SnapshotFileOrderByWithRelationInput | SnapshotFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnapshotFiles.
     */
    cursor?: SnapshotFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnapshotFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnapshotFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnapshotFiles.
     */
    distinct?: SnapshotFileScalarFieldEnum | SnapshotFileScalarFieldEnum[]
  }

  /**
   * SnapshotFile findMany
   */
  export type SnapshotFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    /**
     * Filter, which SnapshotFiles to fetch.
     */
    where?: SnapshotFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnapshotFiles to fetch.
     */
    orderBy?: SnapshotFileOrderByWithRelationInput | SnapshotFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SnapshotFiles.
     */
    cursor?: SnapshotFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnapshotFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnapshotFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnapshotFiles.
     */
    distinct?: SnapshotFileScalarFieldEnum | SnapshotFileScalarFieldEnum[]
  }

  /**
   * SnapshotFile create
   */
  export type SnapshotFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    /**
     * The data needed to create a SnapshotFile.
     */
    data: XOR<SnapshotFileCreateInput, SnapshotFileUncheckedCreateInput>
  }

  /**
   * SnapshotFile createMany
   */
  export type SnapshotFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SnapshotFiles.
     */
    data: SnapshotFileCreateManyInput | SnapshotFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SnapshotFile createManyAndReturn
   */
  export type SnapshotFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * The data used to create many SnapshotFiles.
     */
    data: SnapshotFileCreateManyInput | SnapshotFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SnapshotFile update
   */
  export type SnapshotFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    /**
     * The data needed to update a SnapshotFile.
     */
    data: XOR<SnapshotFileUpdateInput, SnapshotFileUncheckedUpdateInput>
    /**
     * Choose, which SnapshotFile to update.
     */
    where: SnapshotFileWhereUniqueInput
  }

  /**
   * SnapshotFile updateMany
   */
  export type SnapshotFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SnapshotFiles.
     */
    data: XOR<SnapshotFileUpdateManyMutationInput, SnapshotFileUncheckedUpdateManyInput>
    /**
     * Filter which SnapshotFiles to update
     */
    where?: SnapshotFileWhereInput
    /**
     * Limit how many SnapshotFiles to update.
     */
    limit?: number
  }

  /**
   * SnapshotFile updateManyAndReturn
   */
  export type SnapshotFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * The data used to update SnapshotFiles.
     */
    data: XOR<SnapshotFileUpdateManyMutationInput, SnapshotFileUncheckedUpdateManyInput>
    /**
     * Filter which SnapshotFiles to update
     */
    where?: SnapshotFileWhereInput
    /**
     * Limit how many SnapshotFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SnapshotFile upsert
   */
  export type SnapshotFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    /**
     * The filter to search for the SnapshotFile to update in case it exists.
     */
    where: SnapshotFileWhereUniqueInput
    /**
     * In case the SnapshotFile found by the `where` argument doesn't exist, create a new SnapshotFile with this data.
     */
    create: XOR<SnapshotFileCreateInput, SnapshotFileUncheckedCreateInput>
    /**
     * In case the SnapshotFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnapshotFileUpdateInput, SnapshotFileUncheckedUpdateInput>
  }

  /**
   * SnapshotFile delete
   */
  export type SnapshotFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
    /**
     * Filter which SnapshotFile to delete.
     */
    where: SnapshotFileWhereUniqueInput
  }

  /**
   * SnapshotFile deleteMany
   */
  export type SnapshotFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnapshotFiles to delete
     */
    where?: SnapshotFileWhereInput
    /**
     * Limit how many SnapshotFiles to delete.
     */
    limit?: number
  }

  /**
   * SnapshotFile without action
   */
  export type SnapshotFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotFile
     */
    select?: SnapshotFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnapshotFile
     */
    omit?: SnapshotFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotFileInclude<ExtArgs> | null
  }


  /**
   * Model UploadHandshake
   */

  export type AggregateUploadHandshake = {
    _count: UploadHandshakeCountAggregateOutputType | null
    _avg: UploadHandshakeAvgAggregateOutputType | null
    _sum: UploadHandshakeSumAggregateOutputType | null
    _min: UploadHandshakeMinAggregateOutputType | null
    _max: UploadHandshakeMaxAggregateOutputType | null
  }

  export type UploadHandshakeAvgAggregateOutputType = {
    expectedSizeBytes: number | null
  }

  export type UploadHandshakeSumAggregateOutputType = {
    expectedSizeBytes: number | null
  }

  export type UploadHandshakeMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    context: $Enums.AssetReferenceType | null
    key: string | null
    fileName: string | null
    expectedMimeType: string | null
    expectedSizeBytes: number | null
    status: $Enums.UploadHandshakeStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadHandshakeMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    context: $Enums.AssetReferenceType | null
    key: string | null
    fileName: string | null
    expectedMimeType: string | null
    expectedSizeBytes: number | null
    status: $Enums.UploadHandshakeStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadHandshakeCountAggregateOutputType = {
    id: number
    ownerId: number
    context: number
    key: number
    fileName: number
    expectedMimeType: number
    expectedSizeBytes: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UploadHandshakeAvgAggregateInputType = {
    expectedSizeBytes?: true
  }

  export type UploadHandshakeSumAggregateInputType = {
    expectedSizeBytes?: true
  }

  export type UploadHandshakeMinAggregateInputType = {
    id?: true
    ownerId?: true
    context?: true
    key?: true
    fileName?: true
    expectedMimeType?: true
    expectedSizeBytes?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadHandshakeMaxAggregateInputType = {
    id?: true
    ownerId?: true
    context?: true
    key?: true
    fileName?: true
    expectedMimeType?: true
    expectedSizeBytes?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadHandshakeCountAggregateInputType = {
    id?: true
    ownerId?: true
    context?: true
    key?: true
    fileName?: true
    expectedMimeType?: true
    expectedSizeBytes?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UploadHandshakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadHandshake to aggregate.
     */
    where?: UploadHandshakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadHandshakes to fetch.
     */
    orderBy?: UploadHandshakeOrderByWithRelationInput | UploadHandshakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadHandshakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadHandshakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadHandshakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadHandshakes
    **/
    _count?: true | UploadHandshakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadHandshakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadHandshakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadHandshakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadHandshakeMaxAggregateInputType
  }

  export type GetUploadHandshakeAggregateType<T extends UploadHandshakeAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadHandshake]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadHandshake[P]>
      : GetScalarType<T[P], AggregateUploadHandshake[P]>
  }




  export type UploadHandshakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadHandshakeWhereInput
    orderBy?: UploadHandshakeOrderByWithAggregationInput | UploadHandshakeOrderByWithAggregationInput[]
    by: UploadHandshakeScalarFieldEnum[] | UploadHandshakeScalarFieldEnum
    having?: UploadHandshakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadHandshakeCountAggregateInputType | true
    _avg?: UploadHandshakeAvgAggregateInputType
    _sum?: UploadHandshakeSumAggregateInputType
    _min?: UploadHandshakeMinAggregateInputType
    _max?: UploadHandshakeMaxAggregateInputType
  }

  export type UploadHandshakeGroupByOutputType = {
    id: string
    ownerId: string
    context: $Enums.AssetReferenceType
    key: string
    fileName: string
    expectedMimeType: string
    expectedSizeBytes: number
    status: $Enums.UploadHandshakeStatus
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: UploadHandshakeCountAggregateOutputType | null
    _avg: UploadHandshakeAvgAggregateOutputType | null
    _sum: UploadHandshakeSumAggregateOutputType | null
    _min: UploadHandshakeMinAggregateOutputType | null
    _max: UploadHandshakeMaxAggregateOutputType | null
  }

  type GetUploadHandshakeGroupByPayload<T extends UploadHandshakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadHandshakeGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof UploadHandshakeGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadHandshakeGroupByOutputType[P]>
            : GetScalarType<T[P], UploadHandshakeGroupByOutputType[P]>
        }
      >
    >


  export type UploadHandshakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    context?: boolean
    key?: boolean
    fileName?: boolean
    expectedMimeType?: boolean
    expectedSizeBytes?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadHandshake"]>

  export type UploadHandshakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    context?: boolean
    key?: boolean
    fileName?: boolean
    expectedMimeType?: boolean
    expectedSizeBytes?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadHandshake"]>

  export type UploadHandshakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    context?: boolean
    key?: boolean
    fileName?: boolean
    expectedMimeType?: boolean
    expectedSizeBytes?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadHandshake"]>

  export type UploadHandshakeSelectScalar = {
    id?: boolean
    ownerId?: boolean
    context?: boolean
    key?: boolean
    fileName?: boolean
    expectedMimeType?: boolean
    expectedSizeBytes?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UploadHandshakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "context" | "key" | "fileName" | "expectedMimeType" | "expectedSizeBytes" | "status" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["uploadHandshake"]>
  export type UploadHandshakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UploadHandshakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UploadHandshakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UploadHandshakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadHandshake"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      context: $Enums.AssetReferenceType
      key: string
      fileName: string
      expectedMimeType: string
      expectedSizeBytes: number
      status: $Enums.UploadHandshakeStatus
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["uploadHandshake"]>
    composites: {}
  }

  type UploadHandshakeGetPayload<S extends boolean | null | undefined | UploadHandshakeDefaultArgs> = $Result.GetResult<Prisma.$UploadHandshakePayload, S>

  type UploadHandshakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadHandshakeFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: UploadHandshakeCountAggregateInputType | true
    }

  export interface UploadHandshakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["UploadHandshake"], meta: { name: "UploadHandshake" } }
    /**
     * Find zero or one UploadHandshake that matches the filter.
     * @param {UploadHandshakeFindUniqueArgs} args - Arguments to find a UploadHandshake
     * @example
     * // Get one UploadHandshake
     * const uploadHandshake = await prisma.uploadHandshake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadHandshakeFindUniqueArgs>(args: SelectSubset<T, UploadHandshakeFindUniqueArgs<ExtArgs>>): Prisma__UploadHandshakeClient<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadHandshake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadHandshakeFindUniqueOrThrowArgs} args - Arguments to find a UploadHandshake
     * @example
     * // Get one UploadHandshake
     * const uploadHandshake = await prisma.uploadHandshake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadHandshakeFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadHandshakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadHandshakeClient<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadHandshake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHandshakeFindFirstArgs} args - Arguments to find a UploadHandshake
     * @example
     * // Get one UploadHandshake
     * const uploadHandshake = await prisma.uploadHandshake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadHandshakeFindFirstArgs>(args?: SelectSubset<T, UploadHandshakeFindFirstArgs<ExtArgs>>): Prisma__UploadHandshakeClient<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadHandshake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHandshakeFindFirstOrThrowArgs} args - Arguments to find a UploadHandshake
     * @example
     * // Get one UploadHandshake
     * const uploadHandshake = await prisma.uploadHandshake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadHandshakeFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadHandshakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadHandshakeClient<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadHandshakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHandshakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadHandshakes
     * const uploadHandshakes = await prisma.uploadHandshake.findMany()
     * 
     * // Get first 10 UploadHandshakes
     * const uploadHandshakes = await prisma.uploadHandshake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadHandshakeWithIdOnly = await prisma.uploadHandshake.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadHandshakeFindManyArgs>(args?: SelectSubset<T, UploadHandshakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadHandshake.
     * @param {UploadHandshakeCreateArgs} args - Arguments to create a UploadHandshake.
     * @example
     * // Create one UploadHandshake
     * const UploadHandshake = await prisma.uploadHandshake.create({
     *   data: {
     *     // ... data to create a UploadHandshake
     *   }
     * })
     * 
     */
    create<T extends UploadHandshakeCreateArgs>(args: SelectSubset<T, UploadHandshakeCreateArgs<ExtArgs>>): Prisma__UploadHandshakeClient<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadHandshakes.
     * @param {UploadHandshakeCreateManyArgs} args - Arguments to create many UploadHandshakes.
     * @example
     * // Create many UploadHandshakes
     * const uploadHandshake = await prisma.uploadHandshake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadHandshakeCreateManyArgs>(args?: SelectSubset<T, UploadHandshakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadHandshakes and returns the data saved in the database.
     * @param {UploadHandshakeCreateManyAndReturnArgs} args - Arguments to create many UploadHandshakes.
     * @example
     * // Create many UploadHandshakes
     * const uploadHandshake = await prisma.uploadHandshake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadHandshakes and only return the `id`
     * const uploadHandshakeWithIdOnly = await prisma.uploadHandshake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadHandshakeCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadHandshakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadHandshake.
     * @param {UploadHandshakeDeleteArgs} args - Arguments to delete one UploadHandshake.
     * @example
     * // Delete one UploadHandshake
     * const UploadHandshake = await prisma.uploadHandshake.delete({
     *   where: {
     *     // ... filter to delete one UploadHandshake
     *   }
     * })
     * 
     */
    delete<T extends UploadHandshakeDeleteArgs>(args: SelectSubset<T, UploadHandshakeDeleteArgs<ExtArgs>>): Prisma__UploadHandshakeClient<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadHandshake.
     * @param {UploadHandshakeUpdateArgs} args - Arguments to update one UploadHandshake.
     * @example
     * // Update one UploadHandshake
     * const uploadHandshake = await prisma.uploadHandshake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadHandshakeUpdateArgs>(args: SelectSubset<T, UploadHandshakeUpdateArgs<ExtArgs>>): Prisma__UploadHandshakeClient<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadHandshakes.
     * @param {UploadHandshakeDeleteManyArgs} args - Arguments to filter UploadHandshakes to delete.
     * @example
     * // Delete a few UploadHandshakes
     * const { count } = await prisma.uploadHandshake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadHandshakeDeleteManyArgs>(args?: SelectSubset<T, UploadHandshakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadHandshakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHandshakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadHandshakes
     * const uploadHandshake = await prisma.uploadHandshake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadHandshakeUpdateManyArgs>(args: SelectSubset<T, UploadHandshakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadHandshakes and returns the data updated in the database.
     * @param {UploadHandshakeUpdateManyAndReturnArgs} args - Arguments to update many UploadHandshakes.
     * @example
     * // Update many UploadHandshakes
     * const uploadHandshake = await prisma.uploadHandshake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadHandshakes and only return the `id`
     * const uploadHandshakeWithIdOnly = await prisma.uploadHandshake.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadHandshakeUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadHandshakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadHandshake.
     * @param {UploadHandshakeUpsertArgs} args - Arguments to update or create a UploadHandshake.
     * @example
     * // Update or create a UploadHandshake
     * const uploadHandshake = await prisma.uploadHandshake.upsert({
     *   create: {
     *     // ... data to create a UploadHandshake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadHandshake we want to update
     *   }
     * })
     */
    upsert<T extends UploadHandshakeUpsertArgs>(args: SelectSubset<T, UploadHandshakeUpsertArgs<ExtArgs>>): Prisma__UploadHandshakeClient<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadHandshakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHandshakeCountArgs} args - Arguments to filter UploadHandshakes to count.
     * @example
     * // Count the number of UploadHandshakes
     * const count = await prisma.uploadHandshake.count({
     *   where: {
     *     // ... the filter for the UploadHandshakes we want to count
     *   }
     * })
    **/
    count<T extends UploadHandshakeCountArgs>(
      args?: Subset<T, UploadHandshakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UploadHandshakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadHandshake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHandshakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadHandshakeAggregateArgs>(args: Subset<T, UploadHandshakeAggregateArgs>): Prisma.PrismaPromise<GetUploadHandshakeAggregateType<T>>

    /**
     * Group by UploadHandshake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHandshakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadHandshakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadHandshakeGroupByArgs["orderBy"] }
        : { orderBy?: UploadHandshakeGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadHandshakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadHandshakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadHandshake model
   */
  readonly fields: UploadHandshakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadHandshake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadHandshakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadHandshake model
   */
  interface UploadHandshakeFieldRefs {
    readonly id: FieldRef<"UploadHandshake", "String">
    readonly ownerId: FieldRef<"UploadHandshake", "String">
    readonly context: FieldRef<"UploadHandshake", "AssetReferenceType">
    readonly key: FieldRef<"UploadHandshake", "String">
    readonly fileName: FieldRef<"UploadHandshake", "String">
    readonly expectedMimeType: FieldRef<"UploadHandshake", "String">
    readonly expectedSizeBytes: FieldRef<"UploadHandshake", "Int">
    readonly status: FieldRef<"UploadHandshake", "UploadHandshakeStatus">
    readonly expiresAt: FieldRef<"UploadHandshake", "DateTime">
    readonly createdAt: FieldRef<"UploadHandshake", "DateTime">
    readonly updatedAt: FieldRef<"UploadHandshake", "DateTime">
  }
    

  // Custom InputTypes
  /**
   * UploadHandshake findUnique
   */
  export type UploadHandshakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    /**
     * Filter, which UploadHandshake to fetch.
     */
    where: UploadHandshakeWhereUniqueInput
  }

  /**
   * UploadHandshake findUniqueOrThrow
   */
  export type UploadHandshakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    /**
     * Filter, which UploadHandshake to fetch.
     */
    where: UploadHandshakeWhereUniqueInput
  }

  /**
   * UploadHandshake findFirst
   */
  export type UploadHandshakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    /**
     * Filter, which UploadHandshake to fetch.
     */
    where?: UploadHandshakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadHandshakes to fetch.
     */
    orderBy?: UploadHandshakeOrderByWithRelationInput | UploadHandshakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadHandshakes.
     */
    cursor?: UploadHandshakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadHandshakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadHandshakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadHandshakes.
     */
    distinct?: UploadHandshakeScalarFieldEnum | UploadHandshakeScalarFieldEnum[]
  }

  /**
   * UploadHandshake findFirstOrThrow
   */
  export type UploadHandshakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    /**
     * Filter, which UploadHandshake to fetch.
     */
    where?: UploadHandshakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadHandshakes to fetch.
     */
    orderBy?: UploadHandshakeOrderByWithRelationInput | UploadHandshakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadHandshakes.
     */
    cursor?: UploadHandshakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadHandshakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadHandshakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadHandshakes.
     */
    distinct?: UploadHandshakeScalarFieldEnum | UploadHandshakeScalarFieldEnum[]
  }

  /**
   * UploadHandshake findMany
   */
  export type UploadHandshakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    /**
     * Filter, which UploadHandshakes to fetch.
     */
    where?: UploadHandshakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadHandshakes to fetch.
     */
    orderBy?: UploadHandshakeOrderByWithRelationInput | UploadHandshakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadHandshakes.
     */
    cursor?: UploadHandshakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadHandshakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadHandshakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadHandshakes.
     */
    distinct?: UploadHandshakeScalarFieldEnum | UploadHandshakeScalarFieldEnum[]
  }

  /**
   * UploadHandshake create
   */
  export type UploadHandshakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadHandshake.
     */
    data: XOR<UploadHandshakeCreateInput, UploadHandshakeUncheckedCreateInput>
  }

  /**
   * UploadHandshake createMany
   */
  export type UploadHandshakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadHandshakes.
     */
    data: UploadHandshakeCreateManyInput | UploadHandshakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadHandshake createManyAndReturn
   */
  export type UploadHandshakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * The data used to create many UploadHandshakes.
     */
    data: UploadHandshakeCreateManyInput | UploadHandshakeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadHandshake update
   */
  export type UploadHandshakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadHandshake.
     */
    data: XOR<UploadHandshakeUpdateInput, UploadHandshakeUncheckedUpdateInput>
    /**
     * Choose, which UploadHandshake to update.
     */
    where: UploadHandshakeWhereUniqueInput
  }

  /**
   * UploadHandshake updateMany
   */
  export type UploadHandshakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadHandshakes.
     */
    data: XOR<UploadHandshakeUpdateManyMutationInput, UploadHandshakeUncheckedUpdateManyInput>
    /**
     * Filter which UploadHandshakes to update
     */
    where?: UploadHandshakeWhereInput
    /**
     * Limit how many UploadHandshakes to update.
     */
    limit?: number
  }

  /**
   * UploadHandshake updateManyAndReturn
   */
  export type UploadHandshakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * The data used to update UploadHandshakes.
     */
    data: XOR<UploadHandshakeUpdateManyMutationInput, UploadHandshakeUncheckedUpdateManyInput>
    /**
     * Filter which UploadHandshakes to update
     */
    where?: UploadHandshakeWhereInput
    /**
     * Limit how many UploadHandshakes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadHandshake upsert
   */
  export type UploadHandshakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadHandshake to update in case it exists.
     */
    where: UploadHandshakeWhereUniqueInput
    /**
     * In case the UploadHandshake found by the `where` argument doesn't exist, create a new UploadHandshake with this data.
     */
    create: XOR<UploadHandshakeCreateInput, UploadHandshakeUncheckedCreateInput>
    /**
     * In case the UploadHandshake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadHandshakeUpdateInput, UploadHandshakeUncheckedUpdateInput>
  }

  /**
   * UploadHandshake delete
   */
  export type UploadHandshakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    /**
     * Filter which UploadHandshake to delete.
     */
    where: UploadHandshakeWhereUniqueInput
  }

  /**
   * UploadHandshake deleteMany
   */
  export type UploadHandshakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadHandshakes to delete
     */
    where?: UploadHandshakeWhereInput
    /**
     * Limit how many UploadHandshakes to delete.
     */
    limit?: number
  }

  /**
   * UploadHandshake without action
   */
  export type UploadHandshakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    name: string | null
    stripeCustomerId: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    plan: $Enums.PlanType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    name: string | null
    stripeCustomerId: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    plan: $Enums.PlanType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    name: number
    stripeCustomerId: number
    subscriptionStatus: number
    plan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    stripeCustomerId?: true
    subscriptionStatus?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    stripeCustomerId?: true
    subscriptionStatus?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    stripeCustomerId?: true
    subscriptionStatus?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    emailVerified: Date | null
    name: string | null
    stripeCustomerId: string | null
    subscriptionStatus: $Enums.SubscriptionStatus
    plan: $Enums.PlanType
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    stripeCustomerId?: boolean
    subscriptionStatus?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    ebooks?: boolean | User$ebooksArgs<ExtArgs>
    assets?: boolean | User$assetsArgs<ExtArgs>
    uploadHandshakes?: boolean | User$uploadHandshakesArgs<ExtArgs>
    ebookCollaborations?: boolean | User$ebookCollaborationsArgs<ExtArgs>
    createdCustomRoles?: boolean | User$createdCustomRolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    stripeCustomerId?: boolean
    subscriptionStatus?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    stripeCustomerId?: boolean
    subscriptionStatus?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    stripeCustomerId?: boolean
    subscriptionStatus?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailVerified" | "name" | "stripeCustomerId" | "subscriptionStatus" | "plan" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    ebooks?: boolean | User$ebooksArgs<ExtArgs>
    assets?: boolean | User$assetsArgs<ExtArgs>
    uploadHandshakes?: boolean | User$uploadHandshakesArgs<ExtArgs>
    ebookCollaborations?: boolean | User$ebookCollaborationsArgs<ExtArgs>
    createdCustomRoles?: boolean | User$createdCustomRolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      ebooks: Prisma.$EbookPayload<ExtArgs>[]
      assets: Prisma.$AssetPayload<ExtArgs>[]
      uploadHandshakes: Prisma.$UploadHandshakePayload<ExtArgs>[]
      ebookCollaborations: Prisma.$EbookCollaboratorPayload<ExtArgs>[]
      createdCustomRoles: Prisma.$EbookCustomRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerified: Date | null
      name: string | null
      stripeCustomerId: string | null
      subscriptionStatus: $Enums.SubscriptionStatus
      plan: $Enums.PlanType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["User"], meta: { name: "User" } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ebooks<T extends User$ebooksArgs<ExtArgs> = {}>(args?: Subset<T, User$ebooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assets<T extends User$assetsArgs<ExtArgs> = {}>(args?: Subset<T, User$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploadHandshakes<T extends User$uploadHandshakesArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadHandshakesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadHandshakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ebookCollaborations<T extends User$ebookCollaborationsArgs<ExtArgs> = {}>(args?: Subset<T, User$ebookCollaborationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdCustomRoles<T extends User$createdCustomRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCustomRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookCustomRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">
    readonly email: FieldRef<"User", "String">
    readonly emailVerified: FieldRef<"User", "DateTime">
    readonly name: FieldRef<"User", "String">
    readonly stripeCustomerId: FieldRef<"User", "String">
    readonly subscriptionStatus: FieldRef<"User", "SubscriptionStatus">
    readonly plan: FieldRef<"User", "PlanType">
    readonly createdAt: FieldRef<"User", "DateTime">
    readonly updatedAt: FieldRef<"User", "DateTime">
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.ebooks
   */
  export type User$ebooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    where?: EbookWhereInput
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    cursor?: EbookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookScalarFieldEnum | EbookScalarFieldEnum[]
  }

  /**
   * User.assets
   */
  export type User$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * User.uploadHandshakes
   */
  export type User$uploadHandshakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHandshake
     */
    select?: UploadHandshakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHandshake
     */
    omit?: UploadHandshakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHandshakeInclude<ExtArgs> | null
    where?: UploadHandshakeWhereInput
    orderBy?: UploadHandshakeOrderByWithRelationInput | UploadHandshakeOrderByWithRelationInput[]
    cursor?: UploadHandshakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadHandshakeScalarFieldEnum | UploadHandshakeScalarFieldEnum[]
  }

  /**
   * User.ebookCollaborations
   */
  export type User$ebookCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCollaborator
     */
    select?: EbookCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCollaborator
     */
    omit?: EbookCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCollaboratorInclude<ExtArgs> | null
    where?: EbookCollaboratorWhereInput
    orderBy?: EbookCollaboratorOrderByWithRelationInput | EbookCollaboratorOrderByWithRelationInput[]
    cursor?: EbookCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookCollaboratorScalarFieldEnum | EbookCollaboratorScalarFieldEnum[]
  }

  /**
   * User.createdCustomRoles
   */
  export type User$createdCustomRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbookCustomRole
     */
    select?: EbookCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbookCustomRole
     */
    omit?: EbookCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookCustomRoleInclude<ExtArgs> | null
    where?: EbookCustomRoleWhereInput
    orderBy?: EbookCustomRoleOrderByWithRelationInput | EbookCustomRoleOrderByWithRelationInput[]
    cursor?: EbookCustomRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookCustomRoleScalarFieldEnum | EbookCustomRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["Account"], meta: { name: "Account" } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs["orderBy"] }
        : { orderBy?: AccountGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", "String">
    readonly userId: FieldRef<"Account", "String">
    readonly type: FieldRef<"Account", "String">
    readonly provider: FieldRef<"Account", "String">
    readonly providerAccountId: FieldRef<"Account", "String">
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T["by"]> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["VerificationToken"], meta: { name: "VerificationToken" } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs["orderBy"] }
        : { orderBy?: VerificationTokenGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? "Error: \"by\" must not be empty."
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                "Field ",
                P,
                " in \"having\" needs to be provided in \"by\"",
              ]
        }[HavingFields]
      : "take" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"take\", you also need to provide \"orderBy\""
      : "skip" extends Keys<T>
      ? "orderBy" extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", "String">
    readonly token: FieldRef<"VerificationToken", "String">
    readonly expires: FieldRef<"VerificationToken", "DateTime">
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted",
    ReadCommitted: "ReadCommitted",
    RepeatableRead: "RepeatableRead",
    Serializable: "Serializable"
  }

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AssetScalarFieldEnum: {
    id: "id",
    key: "key",
    bucket: "bucket",
    fileName: "fileName",
    mimeType: "mimeType",
    sizeBytes: "sizeBytes",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    ownerId: "ownerId"
  }

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const ChapterAssetReferenceScalarFieldEnum: {
    id: "id",
    assetId: "assetId",
    chapterId: "chapterId",
    type: "type",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }

  export type ChapterAssetReferenceScalarFieldEnum = (typeof ChapterAssetReferenceScalarFieldEnum)[keyof typeof ChapterAssetReferenceScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: "id",
    content: "content",
    title: "title",
    position: "position",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    ebookId: "ebookId"
  }

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const EbookCollaboratorScalarFieldEnum: {
    id: "id",
    ebookId: "ebookId",
    userId: "userId",
    role: "role",
    allChaptersAccess: "allChaptersAccess",
    customRoleId: "customRoleId",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }

  export type EbookCollaboratorScalarFieldEnum = (typeof EbookCollaboratorScalarFieldEnum)[keyof typeof EbookCollaboratorScalarFieldEnum]


  export const EbookCollaboratorChapterAccessScalarFieldEnum: {
    id: "id",
    collaboratorId: "collaboratorId",
    chapterId: "chapterId",
    createdAt: "createdAt"
  }

  export type EbookCollaboratorChapterAccessScalarFieldEnum = (typeof EbookCollaboratorChapterAccessScalarFieldEnum)[keyof typeof EbookCollaboratorChapterAccessScalarFieldEnum]


  export const EbookCustomRoleScalarFieldEnum: {
    id: "id",
    ebookId: "ebookId",
    name: "name",
    permissions: "permissions",
    createdByUserId: "createdByUserId",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }

  export type EbookCustomRoleScalarFieldEnum = (typeof EbookCustomRoleScalarFieldEnum)[keyof typeof EbookCustomRoleScalarFieldEnum]


  export const EbookScalarFieldEnum: {
    id: "id",
    title: "title",
    subtitle: "subtitle",
    shortDescription: "shortDescription",
    ownerId: "ownerId",
    currentSnapshotId: "currentSnapshotId",
    coverAssetId: "coverAssetId",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }

  export type EbookScalarFieldEnum = (typeof EbookScalarFieldEnum)[keyof typeof EbookScalarFieldEnum]


  export const SnapshotScalarFieldEnum: {
    id: "id",
    ebookId: "ebookId",
    version: "version",
    createdAt: "createdAt",
    status: "status"
  }

  export type SnapshotScalarFieldEnum = (typeof SnapshotScalarFieldEnum)[keyof typeof SnapshotScalarFieldEnum]


  export const SnapshotFileScalarFieldEnum: {
    id: "id",
    snapshotId: "snapshotId",
    key: "key",
    bucket: "bucket",
    sizeBytes: "sizeBytes",
    mimeType: "mimeType",
    createdAt: "createdAt"
  }

  export type SnapshotFileScalarFieldEnum = (typeof SnapshotFileScalarFieldEnum)[keyof typeof SnapshotFileScalarFieldEnum]


  export const UploadHandshakeScalarFieldEnum: {
    id: "id",
    ownerId: "ownerId",
    context: "context",
    key: "key",
    fileName: "fileName",
    expectedMimeType: "expectedMimeType",
    expectedSizeBytes: "expectedSizeBytes",
    status: "status",
    expiresAt: "expiresAt",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }

  export type UploadHandshakeScalarFieldEnum = (typeof UploadHandshakeScalarFieldEnum)[keyof typeof UploadHandshakeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: "id",
    email: "email",
    emailVerified: "emailVerified",
    name: "name",
    stripeCustomerId: "stripeCustomerId",
    subscriptionStatus: "subscriptionStatus",
    plan: "plan",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: "id",
    userId: "userId",
    type: "type",
    provider: "provider",
    providerAccountId: "providerAccountId"
  }

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: "identifier",
    token: "token",
    expires: "expires"
  }

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: "asc",
    desc: "desc"
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  }

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: "default",
    insensitive: "insensitive"
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  }

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: "first",
    last: "last"
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "String">
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "String[]">
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Int">
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Int[]">
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "DateTime">
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "DateTime[]">
    


  /**
   * Reference to a field of type 'AssetReferenceType'
   */
  export type EnumAssetReferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "AssetReferenceType">
    


  /**
   * Reference to a field of type 'AssetReferenceType[]'
   */
  export type ListEnumAssetReferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "AssetReferenceType[]">
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Json">
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "QueryMode">
    


  /**
   * Reference to a field of type 'CollaborationRole'
   */
  export type EnumCollaborationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "CollaborationRole">
    


  /**
   * Reference to a field of type 'CollaborationRole[]'
   */
  export type ListEnumCollaborationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "CollaborationRole[]">
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Boolean">
    


  /**
   * Reference to a field of type 'CollaborationPermission[]'
   */
  export type ListEnumCollaborationPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "CollaborationPermission[]">
    


  /**
   * Reference to a field of type 'CollaborationPermission'
   */
  export type EnumCollaborationPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "CollaborationPermission">
    


  /**
   * Reference to a field of type 'SnapshotStatus'
   */
  export type EnumSnapshotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "SnapshotStatus">
    


  /**
   * Reference to a field of type 'SnapshotStatus[]'
   */
  export type ListEnumSnapshotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "SnapshotStatus[]">
    


  /**
   * Reference to a field of type 'UploadHandshakeStatus'
   */
  export type EnumUploadHandshakeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "UploadHandshakeStatus">
    


  /**
   * Reference to a field of type 'UploadHandshakeStatus[]'
   */
  export type ListEnumUploadHandshakeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "UploadHandshakeStatus[]">
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "SubscriptionStatus">
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "SubscriptionStatus[]">
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "PlanType">
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "PlanType[]">
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Float">
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Float[]">
    
  /**
   * Deep Input Types
   */


  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    key?: StringFilter<"Asset"> | string
    bucket?: StringFilter<"Asset"> | string
    fileName?: StringFilter<"Asset"> | string
    mimeType?: StringFilter<"Asset"> | string
    sizeBytes?: IntFilter<"Asset"> | number
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    ownerId?: StringFilter<"Asset"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapterReferences?: ChapterAssetReferenceListRelationFilter
    ebookCoverImages?: EbookListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    chapterReferences?: ChapterAssetReferenceOrderByRelationAggregateInput
    ebookCoverImages?: EbookOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    bucket?: StringFilter<"Asset"> | string
    fileName?: StringFilter<"Asset"> | string
    mimeType?: StringFilter<"Asset"> | string
    sizeBytes?: IntFilter<"Asset"> | number
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    ownerId?: StringFilter<"Asset"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapterReferences?: ChapterAssetReferenceListRelationFilter
    ebookCoverImages?: EbookListRelationFilter
  }, "id" | "key">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    key?: StringWithAggregatesFilter<"Asset"> | string
    bucket?: StringWithAggregatesFilter<"Asset"> | string
    fileName?: StringWithAggregatesFilter<"Asset"> | string
    mimeType?: StringWithAggregatesFilter<"Asset"> | string
    sizeBytes?: IntWithAggregatesFilter<"Asset"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Asset"> | string
  }

  export type ChapterAssetReferenceWhereInput = {
    AND?: ChapterAssetReferenceWhereInput | ChapterAssetReferenceWhereInput[]
    OR?: ChapterAssetReferenceWhereInput[]
    NOT?: ChapterAssetReferenceWhereInput | ChapterAssetReferenceWhereInput[]
    id?: StringFilter<"ChapterAssetReference"> | string
    assetId?: StringFilter<"ChapterAssetReference"> | string
    chapterId?: StringFilter<"ChapterAssetReference"> | string
    type?: EnumAssetReferenceTypeFilter<"ChapterAssetReference"> | $Enums.AssetReferenceType
    createdAt?: DateTimeFilter<"ChapterAssetReference"> | Date | string
    updatedAt?: DateTimeFilter<"ChapterAssetReference"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }

  export type ChapterAssetReferenceOrderByWithRelationInput = {
    id?: SortOrder
    assetId?: SortOrder
    chapterId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asset?: AssetOrderByWithRelationInput
    chapter?: ChapterOrderByWithRelationInput
  }

  export type ChapterAssetReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChapterAssetReferenceWhereInput | ChapterAssetReferenceWhereInput[]
    OR?: ChapterAssetReferenceWhereInput[]
    NOT?: ChapterAssetReferenceWhereInput | ChapterAssetReferenceWhereInput[]
    assetId?: StringFilter<"ChapterAssetReference"> | string
    chapterId?: StringFilter<"ChapterAssetReference"> | string
    type?: EnumAssetReferenceTypeFilter<"ChapterAssetReference"> | $Enums.AssetReferenceType
    createdAt?: DateTimeFilter<"ChapterAssetReference"> | Date | string
    updatedAt?: DateTimeFilter<"ChapterAssetReference"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }, "id">

  export type ChapterAssetReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    assetId?: SortOrder
    chapterId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChapterAssetReferenceCountOrderByAggregateInput
    _max?: ChapterAssetReferenceMaxOrderByAggregateInput
    _min?: ChapterAssetReferenceMinOrderByAggregateInput
  }

  export type ChapterAssetReferenceScalarWhereWithAggregatesInput = {
    AND?: ChapterAssetReferenceScalarWhereWithAggregatesInput | ChapterAssetReferenceScalarWhereWithAggregatesInput[]
    OR?: ChapterAssetReferenceScalarWhereWithAggregatesInput[]
    NOT?: ChapterAssetReferenceScalarWhereWithAggregatesInput | ChapterAssetReferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChapterAssetReference"> | string
    assetId?: StringWithAggregatesFilter<"ChapterAssetReference"> | string
    chapterId?: StringWithAggregatesFilter<"ChapterAssetReference"> | string
    type?: EnumAssetReferenceTypeWithAggregatesFilter<"ChapterAssetReference"> | $Enums.AssetReferenceType
    createdAt?: DateTimeWithAggregatesFilter<"ChapterAssetReference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChapterAssetReference"> | Date | string
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: StringFilter<"Chapter"> | string
    content?: JsonFilter<"Chapter">
    title?: StringFilter<"Chapter"> | string
    position?: IntFilter<"Chapter"> | number
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    ebookId?: StringFilter<"Chapter"> | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    assetReferences?: ChapterAssetReferenceListRelationFilter
    collaboratorAccess?: EbookCollaboratorChapterAccessListRelationFilter
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    title?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebookId?: SortOrder
    ebook?: EbookOrderByWithRelationInput
    assetReferences?: ChapterAssetReferenceOrderByRelationAggregateInput
    collaboratorAccess?: EbookCollaboratorChapterAccessOrderByRelationAggregateInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ebookId_position?: ChapterEbookIdPositionCompoundUniqueInput
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    content?: JsonFilter<"Chapter">
    title?: StringFilter<"Chapter"> | string
    position?: IntFilter<"Chapter"> | number
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    ebookId?: StringFilter<"Chapter"> | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    assetReferences?: ChapterAssetReferenceListRelationFilter
    collaboratorAccess?: EbookCollaboratorChapterAccessListRelationFilter
  }, "id" | "ebookId_position">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    title?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebookId?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapter"> | string
    content?: JsonWithAggregatesFilter<"Chapter">
    title?: StringWithAggregatesFilter<"Chapter"> | string
    position?: IntWithAggregatesFilter<"Chapter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
    ebookId?: StringWithAggregatesFilter<"Chapter"> | string
  }

  export type EbookCollaboratorWhereInput = {
    AND?: EbookCollaboratorWhereInput | EbookCollaboratorWhereInput[]
    OR?: EbookCollaboratorWhereInput[]
    NOT?: EbookCollaboratorWhereInput | EbookCollaboratorWhereInput[]
    id?: StringFilter<"EbookCollaborator"> | string
    ebookId?: StringFilter<"EbookCollaborator"> | string
    userId?: StringFilter<"EbookCollaborator"> | string
    role?: EnumCollaborationRoleNullableFilter<"EbookCollaborator"> | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFilter<"EbookCollaborator"> | boolean
    customRoleId?: StringNullableFilter<"EbookCollaborator"> | string | null
    createdAt?: DateTimeFilter<"EbookCollaborator"> | Date | string
    updatedAt?: DateTimeFilter<"EbookCollaborator"> | Date | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    customRole?: XOR<EbookCustomRoleNullableScalarRelationFilter, EbookCustomRoleWhereInput> | null
    chapterAccess?: EbookCollaboratorChapterAccessListRelationFilter
  }

  export type EbookCollaboratorOrderByWithRelationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    userId?: SortOrder
    role?: SortOrderInput | SortOrder
    allChaptersAccess?: SortOrder
    customRoleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebook?: EbookOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    customRole?: EbookCustomRoleOrderByWithRelationInput
    chapterAccess?: EbookCollaboratorChapterAccessOrderByRelationAggregateInput
  }

  export type EbookCollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ebookId_userId?: EbookCollaboratorEbookIdUserIdCompoundUniqueInput
    AND?: EbookCollaboratorWhereInput | EbookCollaboratorWhereInput[]
    OR?: EbookCollaboratorWhereInput[]
    NOT?: EbookCollaboratorWhereInput | EbookCollaboratorWhereInput[]
    ebookId?: StringFilter<"EbookCollaborator"> | string
    userId?: StringFilter<"EbookCollaborator"> | string
    role?: EnumCollaborationRoleNullableFilter<"EbookCollaborator"> | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFilter<"EbookCollaborator"> | boolean
    customRoleId?: StringNullableFilter<"EbookCollaborator"> | string | null
    createdAt?: DateTimeFilter<"EbookCollaborator"> | Date | string
    updatedAt?: DateTimeFilter<"EbookCollaborator"> | Date | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    customRole?: XOR<EbookCustomRoleNullableScalarRelationFilter, EbookCustomRoleWhereInput> | null
    chapterAccess?: EbookCollaboratorChapterAccessListRelationFilter
  }, "id" | "ebookId_userId">

  export type EbookCollaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    userId?: SortOrder
    role?: SortOrderInput | SortOrder
    allChaptersAccess?: SortOrder
    customRoleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EbookCollaboratorCountOrderByAggregateInput
    _max?: EbookCollaboratorMaxOrderByAggregateInput
    _min?: EbookCollaboratorMinOrderByAggregateInput
  }

  export type EbookCollaboratorScalarWhereWithAggregatesInput = {
    AND?: EbookCollaboratorScalarWhereWithAggregatesInput | EbookCollaboratorScalarWhereWithAggregatesInput[]
    OR?: EbookCollaboratorScalarWhereWithAggregatesInput[]
    NOT?: EbookCollaboratorScalarWhereWithAggregatesInput | EbookCollaboratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EbookCollaborator"> | string
    ebookId?: StringWithAggregatesFilter<"EbookCollaborator"> | string
    userId?: StringWithAggregatesFilter<"EbookCollaborator"> | string
    role?: EnumCollaborationRoleNullableWithAggregatesFilter<"EbookCollaborator"> | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolWithAggregatesFilter<"EbookCollaborator"> | boolean
    customRoleId?: StringNullableWithAggregatesFilter<"EbookCollaborator"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EbookCollaborator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EbookCollaborator"> | Date | string
  }

  export type EbookCollaboratorChapterAccessWhereInput = {
    AND?: EbookCollaboratorChapterAccessWhereInput | EbookCollaboratorChapterAccessWhereInput[]
    OR?: EbookCollaboratorChapterAccessWhereInput[]
    NOT?: EbookCollaboratorChapterAccessWhereInput | EbookCollaboratorChapterAccessWhereInput[]
    id?: StringFilter<"EbookCollaboratorChapterAccess"> | string
    collaboratorId?: StringFilter<"EbookCollaboratorChapterAccess"> | string
    chapterId?: StringFilter<"EbookCollaboratorChapterAccess"> | string
    createdAt?: DateTimeFilter<"EbookCollaboratorChapterAccess"> | Date | string
    collaborator?: XOR<EbookCollaboratorScalarRelationFilter, EbookCollaboratorWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }

  export type EbookCollaboratorChapterAccessOrderByWithRelationInput = {
    id?: SortOrder
    collaboratorId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    collaborator?: EbookCollaboratorOrderByWithRelationInput
    chapter?: ChapterOrderByWithRelationInput
  }

  export type EbookCollaboratorChapterAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    collaboratorId_chapterId?: EbookCollaboratorChapterAccessCollaboratorIdChapterIdCompoundUniqueInput
    AND?: EbookCollaboratorChapterAccessWhereInput | EbookCollaboratorChapterAccessWhereInput[]
    OR?: EbookCollaboratorChapterAccessWhereInput[]
    NOT?: EbookCollaboratorChapterAccessWhereInput | EbookCollaboratorChapterAccessWhereInput[]
    collaboratorId?: StringFilter<"EbookCollaboratorChapterAccess"> | string
    chapterId?: StringFilter<"EbookCollaboratorChapterAccess"> | string
    createdAt?: DateTimeFilter<"EbookCollaboratorChapterAccess"> | Date | string
    collaborator?: XOR<EbookCollaboratorScalarRelationFilter, EbookCollaboratorWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }, "id" | "collaboratorId_chapterId">

  export type EbookCollaboratorChapterAccessOrderByWithAggregationInput = {
    id?: SortOrder
    collaboratorId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    _count?: EbookCollaboratorChapterAccessCountOrderByAggregateInput
    _max?: EbookCollaboratorChapterAccessMaxOrderByAggregateInput
    _min?: EbookCollaboratorChapterAccessMinOrderByAggregateInput
  }

  export type EbookCollaboratorChapterAccessScalarWhereWithAggregatesInput = {
    AND?: EbookCollaboratorChapterAccessScalarWhereWithAggregatesInput | EbookCollaboratorChapterAccessScalarWhereWithAggregatesInput[]
    OR?: EbookCollaboratorChapterAccessScalarWhereWithAggregatesInput[]
    NOT?: EbookCollaboratorChapterAccessScalarWhereWithAggregatesInput | EbookCollaboratorChapterAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EbookCollaboratorChapterAccess"> | string
    collaboratorId?: StringWithAggregatesFilter<"EbookCollaboratorChapterAccess"> | string
    chapterId?: StringWithAggregatesFilter<"EbookCollaboratorChapterAccess"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EbookCollaboratorChapterAccess"> | Date | string
  }

  export type EbookCustomRoleWhereInput = {
    AND?: EbookCustomRoleWhereInput | EbookCustomRoleWhereInput[]
    OR?: EbookCustomRoleWhereInput[]
    NOT?: EbookCustomRoleWhereInput | EbookCustomRoleWhereInput[]
    id?: StringFilter<"EbookCustomRole"> | string
    ebookId?: StringFilter<"EbookCustomRole"> | string
    name?: StringFilter<"EbookCustomRole"> | string
    permissions?: EnumCollaborationPermissionNullableListFilter<"EbookCustomRole">
    createdByUserId?: StringFilter<"EbookCustomRole"> | string
    createdAt?: DateTimeFilter<"EbookCustomRole"> | Date | string
    updatedAt?: DateTimeFilter<"EbookCustomRole"> | Date | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    collaborators?: EbookCollaboratorListRelationFilter
  }

  export type EbookCustomRoleOrderByWithRelationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    name?: SortOrder
    permissions?: SortOrder
    createdByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebook?: EbookOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    collaborators?: EbookCollaboratorOrderByRelationAggregateInput
  }

  export type EbookCustomRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_ebookId?: EbookCustomRoleIdEbookIdCompoundUniqueInput
    ebookId_name?: EbookCustomRoleEbookIdNameCompoundUniqueInput
    AND?: EbookCustomRoleWhereInput | EbookCustomRoleWhereInput[]
    OR?: EbookCustomRoleWhereInput[]
    NOT?: EbookCustomRoleWhereInput | EbookCustomRoleWhereInput[]
    ebookId?: StringFilter<"EbookCustomRole"> | string
    name?: StringFilter<"EbookCustomRole"> | string
    permissions?: EnumCollaborationPermissionNullableListFilter<"EbookCustomRole">
    createdByUserId?: StringFilter<"EbookCustomRole"> | string
    createdAt?: DateTimeFilter<"EbookCustomRole"> | Date | string
    updatedAt?: DateTimeFilter<"EbookCustomRole"> | Date | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    collaborators?: EbookCollaboratorListRelationFilter
  }, "id" | "id_ebookId" | "ebookId_name">

  export type EbookCustomRoleOrderByWithAggregationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    name?: SortOrder
    permissions?: SortOrder
    createdByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EbookCustomRoleCountOrderByAggregateInput
    _max?: EbookCustomRoleMaxOrderByAggregateInput
    _min?: EbookCustomRoleMinOrderByAggregateInput
  }

  export type EbookCustomRoleScalarWhereWithAggregatesInput = {
    AND?: EbookCustomRoleScalarWhereWithAggregatesInput | EbookCustomRoleScalarWhereWithAggregatesInput[]
    OR?: EbookCustomRoleScalarWhereWithAggregatesInput[]
    NOT?: EbookCustomRoleScalarWhereWithAggregatesInput | EbookCustomRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EbookCustomRole"> | string
    ebookId?: StringWithAggregatesFilter<"EbookCustomRole"> | string
    name?: StringWithAggregatesFilter<"EbookCustomRole"> | string
    permissions?: EnumCollaborationPermissionNullableListFilter<"EbookCustomRole">
    createdByUserId?: StringWithAggregatesFilter<"EbookCustomRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EbookCustomRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EbookCustomRole"> | Date | string
  }

  export type EbookWhereInput = {
    AND?: EbookWhereInput | EbookWhereInput[]
    OR?: EbookWhereInput[]
    NOT?: EbookWhereInput | EbookWhereInput[]
    id?: StringFilter<"Ebook"> | string
    title?: StringFilter<"Ebook"> | string
    subtitle?: StringNullableFilter<"Ebook"> | string | null
    shortDescription?: StringNullableFilter<"Ebook"> | string | null
    ownerId?: StringFilter<"Ebook"> | string
    currentSnapshotId?: StringNullableFilter<"Ebook"> | string | null
    coverAssetId?: StringNullableFilter<"Ebook"> | string | null
    createdAt?: DateTimeFilter<"Ebook"> | Date | string
    updatedAt?: DateTimeFilter<"Ebook"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    currentSnapshot?: XOR<SnapshotNullableScalarRelationFilter, SnapshotWhereInput> | null
    coverAsset?: XOR<AssetNullableScalarRelationFilter, AssetWhereInput> | null
    snapshots?: SnapshotListRelationFilter
    chapters?: ChapterListRelationFilter
    collaborators?: EbookCollaboratorListRelationFilter
    customRoles?: EbookCustomRoleListRelationFilter
  }

  export type EbookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrderInput | SortOrder
    coverAssetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    currentSnapshot?: SnapshotOrderByWithRelationInput
    coverAsset?: AssetOrderByWithRelationInput
    snapshots?: SnapshotOrderByRelationAggregateInput
    chapters?: ChapterOrderByRelationAggregateInput
    collaborators?: EbookCollaboratorOrderByRelationAggregateInput
    customRoles?: EbookCustomRoleOrderByRelationAggregateInput
  }

  export type EbookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    currentSnapshotId?: string
    AND?: EbookWhereInput | EbookWhereInput[]
    OR?: EbookWhereInput[]
    NOT?: EbookWhereInput | EbookWhereInput[]
    title?: StringFilter<"Ebook"> | string
    subtitle?: StringNullableFilter<"Ebook"> | string | null
    shortDescription?: StringNullableFilter<"Ebook"> | string | null
    ownerId?: StringFilter<"Ebook"> | string
    coverAssetId?: StringNullableFilter<"Ebook"> | string | null
    createdAt?: DateTimeFilter<"Ebook"> | Date | string
    updatedAt?: DateTimeFilter<"Ebook"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    currentSnapshot?: XOR<SnapshotNullableScalarRelationFilter, SnapshotWhereInput> | null
    coverAsset?: XOR<AssetNullableScalarRelationFilter, AssetWhereInput> | null
    snapshots?: SnapshotListRelationFilter
    chapters?: ChapterListRelationFilter
    collaborators?: EbookCollaboratorListRelationFilter
    customRoles?: EbookCustomRoleListRelationFilter
  }, "id" | "currentSnapshotId">

  export type EbookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrderInput | SortOrder
    coverAssetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EbookCountOrderByAggregateInput
    _max?: EbookMaxOrderByAggregateInput
    _min?: EbookMinOrderByAggregateInput
  }

  export type EbookScalarWhereWithAggregatesInput = {
    AND?: EbookScalarWhereWithAggregatesInput | EbookScalarWhereWithAggregatesInput[]
    OR?: EbookScalarWhereWithAggregatesInput[]
    NOT?: EbookScalarWhereWithAggregatesInput | EbookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ebook"> | string
    title?: StringWithAggregatesFilter<"Ebook"> | string
    subtitle?: StringNullableWithAggregatesFilter<"Ebook"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"Ebook"> | string | null
    ownerId?: StringWithAggregatesFilter<"Ebook"> | string
    currentSnapshotId?: StringNullableWithAggregatesFilter<"Ebook"> | string | null
    coverAssetId?: StringNullableWithAggregatesFilter<"Ebook"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ebook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ebook"> | Date | string
  }

  export type SnapshotWhereInput = {
    AND?: SnapshotWhereInput | SnapshotWhereInput[]
    OR?: SnapshotWhereInput[]
    NOT?: SnapshotWhereInput | SnapshotWhereInput[]
    id?: StringFilter<"Snapshot"> | string
    ebookId?: StringFilter<"Snapshot"> | string
    version?: IntFilter<"Snapshot"> | number
    createdAt?: DateTimeFilter<"Snapshot"> | Date | string
    status?: EnumSnapshotStatusFilter<"Snapshot"> | $Enums.SnapshotStatus
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    file?: XOR<SnapshotFileNullableScalarRelationFilter, SnapshotFileWhereInput> | null
    currentForEbook?: XOR<EbookNullableScalarRelationFilter, EbookWhereInput> | null
  }

  export type SnapshotOrderByWithRelationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    ebook?: EbookOrderByWithRelationInput
    file?: SnapshotFileOrderByWithRelationInput
    currentForEbook?: EbookOrderByWithRelationInput
  }

  export type SnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ebookId_version?: SnapshotEbookIdVersionCompoundUniqueInput
    AND?: SnapshotWhereInput | SnapshotWhereInput[]
    OR?: SnapshotWhereInput[]
    NOT?: SnapshotWhereInput | SnapshotWhereInput[]
    ebookId?: StringFilter<"Snapshot"> | string
    version?: IntFilter<"Snapshot"> | number
    createdAt?: DateTimeFilter<"Snapshot"> | Date | string
    status?: EnumSnapshotStatusFilter<"Snapshot"> | $Enums.SnapshotStatus
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    file?: XOR<SnapshotFileNullableScalarRelationFilter, SnapshotFileWhereInput> | null
    currentForEbook?: XOR<EbookNullableScalarRelationFilter, EbookWhereInput> | null
  }, "id" | "ebookId_version">

  export type SnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: SnapshotCountOrderByAggregateInput
    _avg?: SnapshotAvgOrderByAggregateInput
    _max?: SnapshotMaxOrderByAggregateInput
    _min?: SnapshotMinOrderByAggregateInput
    _sum?: SnapshotSumOrderByAggregateInput
  }

  export type SnapshotScalarWhereWithAggregatesInput = {
    AND?: SnapshotScalarWhereWithAggregatesInput | SnapshotScalarWhereWithAggregatesInput[]
    OR?: SnapshotScalarWhereWithAggregatesInput[]
    NOT?: SnapshotScalarWhereWithAggregatesInput | SnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Snapshot"> | string
    ebookId?: StringWithAggregatesFilter<"Snapshot"> | string
    version?: IntWithAggregatesFilter<"Snapshot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Snapshot"> | Date | string
    status?: EnumSnapshotStatusWithAggregatesFilter<"Snapshot"> | $Enums.SnapshotStatus
  }

  export type SnapshotFileWhereInput = {
    AND?: SnapshotFileWhereInput | SnapshotFileWhereInput[]
    OR?: SnapshotFileWhereInput[]
    NOT?: SnapshotFileWhereInput | SnapshotFileWhereInput[]
    id?: StringFilter<"SnapshotFile"> | string
    snapshotId?: StringFilter<"SnapshotFile"> | string
    key?: StringFilter<"SnapshotFile"> | string
    bucket?: StringFilter<"SnapshotFile"> | string
    sizeBytes?: IntFilter<"SnapshotFile"> | number
    mimeType?: StringFilter<"SnapshotFile"> | string
    createdAt?: DateTimeFilter<"SnapshotFile"> | Date | string
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
  }

  export type SnapshotFileOrderByWithRelationInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    sizeBytes?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    snapshot?: SnapshotOrderByWithRelationInput
  }

  export type SnapshotFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    snapshotId?: string
    key?: string
    AND?: SnapshotFileWhereInput | SnapshotFileWhereInput[]
    OR?: SnapshotFileWhereInput[]
    NOT?: SnapshotFileWhereInput | SnapshotFileWhereInput[]
    bucket?: StringFilter<"SnapshotFile"> | string
    sizeBytes?: IntFilter<"SnapshotFile"> | number
    mimeType?: StringFilter<"SnapshotFile"> | string
    createdAt?: DateTimeFilter<"SnapshotFile"> | Date | string
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
  }, "id" | "snapshotId" | "key">

  export type SnapshotFileOrderByWithAggregationInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    sizeBytes?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    _count?: SnapshotFileCountOrderByAggregateInput
    _avg?: SnapshotFileAvgOrderByAggregateInput
    _max?: SnapshotFileMaxOrderByAggregateInput
    _min?: SnapshotFileMinOrderByAggregateInput
    _sum?: SnapshotFileSumOrderByAggregateInput
  }

  export type SnapshotFileScalarWhereWithAggregatesInput = {
    AND?: SnapshotFileScalarWhereWithAggregatesInput | SnapshotFileScalarWhereWithAggregatesInput[]
    OR?: SnapshotFileScalarWhereWithAggregatesInput[]
    NOT?: SnapshotFileScalarWhereWithAggregatesInput | SnapshotFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SnapshotFile"> | string
    snapshotId?: StringWithAggregatesFilter<"SnapshotFile"> | string
    key?: StringWithAggregatesFilter<"SnapshotFile"> | string
    bucket?: StringWithAggregatesFilter<"SnapshotFile"> | string
    sizeBytes?: IntWithAggregatesFilter<"SnapshotFile"> | number
    mimeType?: StringWithAggregatesFilter<"SnapshotFile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SnapshotFile"> | Date | string
  }

  export type UploadHandshakeWhereInput = {
    AND?: UploadHandshakeWhereInput | UploadHandshakeWhereInput[]
    OR?: UploadHandshakeWhereInput[]
    NOT?: UploadHandshakeWhereInput | UploadHandshakeWhereInput[]
    id?: StringFilter<"UploadHandshake"> | string
    ownerId?: StringFilter<"UploadHandshake"> | string
    context?: EnumAssetReferenceTypeFilter<"UploadHandshake"> | $Enums.AssetReferenceType
    key?: StringFilter<"UploadHandshake"> | string
    fileName?: StringFilter<"UploadHandshake"> | string
    expectedMimeType?: StringFilter<"UploadHandshake"> | string
    expectedSizeBytes?: IntFilter<"UploadHandshake"> | number
    status?: EnumUploadHandshakeStatusFilter<"UploadHandshake"> | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFilter<"UploadHandshake"> | Date | string
    createdAt?: DateTimeFilter<"UploadHandshake"> | Date | string
    updatedAt?: DateTimeFilter<"UploadHandshake"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UploadHandshakeOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    context?: SortOrder
    key?: SortOrder
    fileName?: SortOrder
    expectedMimeType?: SortOrder
    expectedSizeBytes?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type UploadHandshakeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: UploadHandshakeWhereInput | UploadHandshakeWhereInput[]
    OR?: UploadHandshakeWhereInput[]
    NOT?: UploadHandshakeWhereInput | UploadHandshakeWhereInput[]
    ownerId?: StringFilter<"UploadHandshake"> | string
    context?: EnumAssetReferenceTypeFilter<"UploadHandshake"> | $Enums.AssetReferenceType
    fileName?: StringFilter<"UploadHandshake"> | string
    expectedMimeType?: StringFilter<"UploadHandshake"> | string
    expectedSizeBytes?: IntFilter<"UploadHandshake"> | number
    status?: EnumUploadHandshakeStatusFilter<"UploadHandshake"> | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFilter<"UploadHandshake"> | Date | string
    createdAt?: DateTimeFilter<"UploadHandshake"> | Date | string
    updatedAt?: DateTimeFilter<"UploadHandshake"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "key">

  export type UploadHandshakeOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    context?: SortOrder
    key?: SortOrder
    fileName?: SortOrder
    expectedMimeType?: SortOrder
    expectedSizeBytes?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UploadHandshakeCountOrderByAggregateInput
    _avg?: UploadHandshakeAvgOrderByAggregateInput
    _max?: UploadHandshakeMaxOrderByAggregateInput
    _min?: UploadHandshakeMinOrderByAggregateInput
    _sum?: UploadHandshakeSumOrderByAggregateInput
  }

  export type UploadHandshakeScalarWhereWithAggregatesInput = {
    AND?: UploadHandshakeScalarWhereWithAggregatesInput | UploadHandshakeScalarWhereWithAggregatesInput[]
    OR?: UploadHandshakeScalarWhereWithAggregatesInput[]
    NOT?: UploadHandshakeScalarWhereWithAggregatesInput | UploadHandshakeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadHandshake"> | string
    ownerId?: StringWithAggregatesFilter<"UploadHandshake"> | string
    context?: EnumAssetReferenceTypeWithAggregatesFilter<"UploadHandshake"> | $Enums.AssetReferenceType
    key?: StringWithAggregatesFilter<"UploadHandshake"> | string
    fileName?: StringWithAggregatesFilter<"UploadHandshake"> | string
    expectedMimeType?: StringWithAggregatesFilter<"UploadHandshake"> | string
    expectedSizeBytes?: IntWithAggregatesFilter<"UploadHandshake"> | number
    status?: EnumUploadHandshakeStatusWithAggregatesFilter<"UploadHandshake"> | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeWithAggregatesFilter<"UploadHandshake"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UploadHandshake"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UploadHandshake"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"User"> | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    ebooks?: EbookListRelationFilter
    assets?: AssetListRelationFilter
    uploadHandshakes?: UploadHandshakeListRelationFilter
    ebookCollaborations?: EbookCollaboratorListRelationFilter
    createdCustomRoles?: EbookCustomRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    ebooks?: EbookOrderByRelationAggregateInput
    assets?: AssetOrderByRelationAggregateInput
    uploadHandshakes?: UploadHandshakeOrderByRelationAggregateInput
    ebookCollaborations?: EbookCollaboratorOrderByRelationAggregateInput
    createdCustomRoles?: EbookCustomRoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    stripeCustomerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"User"> | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    ebooks?: EbookListRelationFilter
    assets?: AssetListRelationFilter
    uploadHandshakes?: UploadHandshakeListRelationFilter
    ebookCollaborations?: EbookCollaboratorListRelationFilter
    createdCustomRoles?: EbookCustomRoleListRelationFilter
  }, "id" | "email" | "stripeCustomerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusWithAggregatesFilter<"User"> | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeWithAggregatesFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AssetCreateInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAssetsInput
    chapterReferences?: ChapterAssetReferenceCreateNestedManyWithoutAssetInput
    ebookCoverImages?: EbookCreateNestedManyWithoutCoverAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    chapterReferences?: ChapterAssetReferenceUncheckedCreateNestedManyWithoutAssetInput
    ebookCoverImages?: EbookUncheckedCreateNestedManyWithoutCoverAssetInput
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAssetsNestedInput
    chapterReferences?: ChapterAssetReferenceUpdateManyWithoutAssetNestedInput
    ebookCoverImages?: EbookUpdateManyWithoutCoverAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chapterReferences?: ChapterAssetReferenceUncheckedUpdateManyWithoutAssetNestedInput
    ebookCoverImages?: EbookUncheckedUpdateManyWithoutCoverAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterAssetReferenceCreateInput = {
    id?: string
    type: $Enums.AssetReferenceType
    createdAt?: Date | string
    updatedAt?: Date | string
    asset: AssetCreateNestedOneWithoutChapterReferencesInput
    chapter: ChapterCreateNestedOneWithoutAssetReferencesInput
  }

  export type ChapterAssetReferenceUncheckedCreateInput = {
    id?: string
    assetId: string
    chapterId: string
    type: $Enums.AssetReferenceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterAssetReferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutChapterReferencesNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutAssetReferencesNestedInput
  }

  export type ChapterAssetReferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterAssetReferenceCreateManyInput = {
    id?: string
    assetId: string
    chapterId: string
    type: $Enums.AssetReferenceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterAssetReferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterAssetReferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutChaptersInput
    assetReferences?: ChapterAssetReferenceCreateNestedManyWithoutChapterInput
    collaboratorAccess?: EbookCollaboratorChapterAccessCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebookId: string
    assetReferences?: ChapterAssetReferenceUncheckedCreateNestedManyWithoutChapterInput
    collaboratorAccess?: EbookCollaboratorChapterAccessUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutChaptersNestedInput
    assetReferences?: ChapterAssetReferenceUpdateManyWithoutChapterNestedInput
    collaboratorAccess?: EbookCollaboratorChapterAccessUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebookId?: StringFieldUpdateOperationsInput | string
    assetReferences?: ChapterAssetReferenceUncheckedUpdateManyWithoutChapterNestedInput
    collaboratorAccess?: EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebookId: string
  }

  export type ChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebookId?: StringFieldUpdateOperationsInput | string
  }

  export type EbookCollaboratorCreateInput = {
    id?: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutCollaboratorsInput
    user: UserCreateNestedOneWithoutEbookCollaborationsInput
    customRole?: EbookCustomRoleCreateNestedOneWithoutCollaboratorsInput
    chapterAccess?: EbookCollaboratorChapterAccessCreateNestedManyWithoutCollaboratorInput
  }

  export type EbookCollaboratorUncheckedCreateInput = {
    id?: string
    ebookId: string
    userId: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    customRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapterAccess?: EbookCollaboratorChapterAccessUncheckedCreateNestedManyWithoutCollaboratorInput
  }

  export type EbookCollaboratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutCollaboratorsNestedInput
    user?: UserUpdateOneRequiredWithoutEbookCollaborationsNestedInput
    customRole?: EbookCustomRoleUpdateOneWithoutCollaboratorsNestedInput
    chapterAccess?: EbookCollaboratorChapterAccessUpdateManyWithoutCollaboratorNestedInput
  }

  export type EbookCollaboratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    customRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterAccess?: EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutCollaboratorNestedInput
  }

  export type EbookCollaboratorCreateManyInput = {
    id?: string
    ebookId: string
    userId: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    customRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCollaboratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    customRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorChapterAccessCreateInput = {
    id?: string
    createdAt?: Date | string
    collaborator: EbookCollaboratorCreateNestedOneWithoutChapterAccessInput
    chapter: ChapterCreateNestedOneWithoutCollaboratorAccessInput
  }

  export type EbookCollaboratorChapterAccessUncheckedCreateInput = {
    id?: string
    collaboratorId: string
    chapterId: string
    createdAt?: Date | string
  }

  export type EbookCollaboratorChapterAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborator?: EbookCollaboratorUpdateOneRequiredWithoutChapterAccessNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutCollaboratorAccessNestedInput
  }

  export type EbookCollaboratorChapterAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collaboratorId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorChapterAccessCreateManyInput = {
    id?: string
    collaboratorId: string
    chapterId: string
    createdAt?: Date | string
  }

  export type EbookCollaboratorChapterAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorChapterAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    collaboratorId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCustomRoleCreateInput = {
    id?: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutCustomRolesInput
    createdBy: UserCreateNestedOneWithoutCreatedCustomRolesInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutCustomRoleInput
  }

  export type EbookCustomRoleUncheckedCreateInput = {
    id?: string
    ebookId: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutCustomRoleInput
  }

  export type EbookCustomRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutCustomRolesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedCustomRolesNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutCustomRoleNestedInput
  }

  export type EbookCustomRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutCustomRoleNestedInput
  }

  export type EbookCustomRoleCreateManyInput = {
    id?: string
    ebookId: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCustomRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCustomRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEbooksInput
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    coverAsset?: AssetCreateNestedOneWithoutEbookCoverImagesInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    coverAssetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    coverAsset?: AssetUpdateOneWithoutEbookCoverImagesNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type EbookCreateManyInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    coverAssetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotCreateInput = {
    id?: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
    ebook: EbookCreateNestedOneWithoutSnapshotsInput
    file?: SnapshotFileCreateNestedOneWithoutSnapshotInput
    currentForEbook?: EbookCreateNestedOneWithoutCurrentSnapshotInput
  }

  export type SnapshotUncheckedCreateInput = {
    id?: string
    ebookId: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
    file?: SnapshotFileUncheckedCreateNestedOneWithoutSnapshotInput
    currentForEbook?: EbookUncheckedCreateNestedOneWithoutCurrentSnapshotInput
  }

  export type SnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    ebook?: EbookUpdateOneRequiredWithoutSnapshotsNestedInput
    file?: SnapshotFileUpdateOneWithoutSnapshotNestedInput
    currentForEbook?: EbookUpdateOneWithoutCurrentSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    file?: SnapshotFileUncheckedUpdateOneWithoutSnapshotNestedInput
    currentForEbook?: EbookUncheckedUpdateOneWithoutCurrentSnapshotNestedInput
  }

  export type SnapshotCreateManyInput = {
    id?: string
    ebookId: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
  }

  export type SnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
  }

  export type SnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
  }

  export type SnapshotFileCreateInput = {
    id?: string
    key: string
    bucket: string
    sizeBytes: number
    mimeType: string
    createdAt?: Date | string
    snapshot: SnapshotCreateNestedOneWithoutFileInput
  }

  export type SnapshotFileUncheckedCreateInput = {
    id?: string
    snapshotId: string
    key: string
    bucket: string
    sizeBytes: number
    mimeType: string
    createdAt?: Date | string
  }

  export type SnapshotFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: SnapshotUpdateOneRequiredWithoutFileNestedInput
  }

  export type SnapshotFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotFileCreateManyInput = {
    id?: string
    snapshotId: string
    key: string
    bucket: string
    sizeBytes: number
    mimeType: string
    createdAt?: Date | string
  }

  export type SnapshotFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHandshakeCreateInput = {
    id?: string
    context: $Enums.AssetReferenceType
    key: string
    fileName: string
    expectedMimeType: string
    expectedSizeBytes: number
    status?: $Enums.UploadHandshakeStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutUploadHandshakesInput
  }

  export type UploadHandshakeUncheckedCreateInput = {
    id?: string
    ownerId: string
    context: $Enums.AssetReferenceType
    key: string
    fileName: string
    expectedMimeType: string
    expectedSizeBytes: number
    status?: $Enums.UploadHandshakeStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadHandshakeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    key?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    expectedMimeType?: StringFieldUpdateOperationsInput | string
    expectedSizeBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumUploadHandshakeStatusFieldUpdateOperationsInput | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutUploadHandshakesNestedInput
  }

  export type UploadHandshakeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    context?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    key?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    expectedMimeType?: StringFieldUpdateOperationsInput | string
    expectedSizeBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumUploadHandshakeStatusFieldUpdateOperationsInput | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHandshakeCreateManyInput = {
    id?: string
    ownerId: string
    context: $Enums.AssetReferenceType
    key: string
    fileName: string
    expectedMimeType: string
    expectedSizeBytes: number
    status?: $Enums.UploadHandshakeStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadHandshakeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    key?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    expectedMimeType?: StringFieldUpdateOperationsInput | string
    expectedSizeBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumUploadHandshakeStatusFieldUpdateOperationsInput | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHandshakeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    context?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    key?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    expectedMimeType?: StringFieldUpdateOperationsInput | string
    expectedSizeBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumUploadHandshakeStatusFieldUpdateOperationsInput | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    ebooks?: EbookCreateNestedManyWithoutOwnerInput
    assets?: AssetCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    ebooks?: EbookUncheckedCreateNestedManyWithoutOwnerInput
    assets?: AssetUncheckedCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeUncheckedCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorUncheckedCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    ebooks?: EbookUpdateManyWithoutOwnerNestedInput
    assets?: AssetUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    ebooks?: EbookUncheckedUpdateManyWithoutOwnerNestedInput
    assets?: AssetUncheckedUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUncheckedUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChapterAssetReferenceListRelationFilter = {
    every?: ChapterAssetReferenceWhereInput
    some?: ChapterAssetReferenceWhereInput
    none?: ChapterAssetReferenceWhereInput
  }

  export type EbookListRelationFilter = {
    every?: EbookWhereInput
    some?: EbookWhereInput
    none?: EbookWhereInput
  }

  export type ChapterAssetReferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EbookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAssetReferenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetReferenceType | EnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetReferenceType[] | ListEnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetReferenceType[] | ListEnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetReferenceTypeFilter<$PrismaModel> | $Enums.AssetReferenceType
  }

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type ChapterScalarRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type ChapterAssetReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    chapterId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterAssetReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    chapterId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterAssetReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    chapterId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAssetReferenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetReferenceType | EnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetReferenceType[] | ListEnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetReferenceType[] | ListEnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetReferenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetReferenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetReferenceTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetReferenceTypeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, "path">>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, "path">>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EbookScalarRelationFilter = {
    is?: EbookWhereInput
    isNot?: EbookWhereInput
  }

  export type EbookCollaboratorChapterAccessListRelationFilter = {
    every?: EbookCollaboratorChapterAccessWhereInput
    some?: EbookCollaboratorChapterAccessWhereInput
    none?: EbookCollaboratorChapterAccessWhereInput
  }

  export type EbookCollaboratorChapterAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterEbookIdPositionCompoundUniqueInput = {
    ebookId: string
    position: number
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    title?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebookId?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebookId?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebookId?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    position?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumCollaborationRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationRole | EnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.CollaborationRole[] | ListEnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CollaborationRole[] | ListEnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCollaborationRoleNullableFilter<$PrismaModel> | $Enums.CollaborationRole | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EbookCustomRoleNullableScalarRelationFilter = {
    is?: EbookCustomRoleWhereInput | null
    isNot?: EbookCustomRoleWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EbookCollaboratorEbookIdUserIdCompoundUniqueInput = {
    ebookId: string
    userId: string
  }

  export type EbookCollaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    allChaptersAccess?: SortOrder
    customRoleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EbookCollaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    allChaptersAccess?: SortOrder
    customRoleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EbookCollaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    allChaptersAccess?: SortOrder
    customRoleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCollaborationRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationRole | EnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.CollaborationRole[] | ListEnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CollaborationRole[] | ListEnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCollaborationRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCollaborationRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumCollaborationRoleNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EbookCollaboratorScalarRelationFilter = {
    is?: EbookCollaboratorWhereInput
    isNot?: EbookCollaboratorWhereInput
  }

  export type EbookCollaboratorChapterAccessCollaboratorIdChapterIdCompoundUniqueInput = {
    collaboratorId: string
    chapterId: string
  }

  export type EbookCollaboratorChapterAccessCountOrderByAggregateInput = {
    id?: SortOrder
    collaboratorId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
  }

  export type EbookCollaboratorChapterAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    collaboratorId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
  }

  export type EbookCollaboratorChapterAccessMinOrderByAggregateInput = {
    id?: SortOrder
    collaboratorId?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCollaborationPermissionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationPermission[] | ListEnumCollaborationPermissionFieldRefInput<$PrismaModel> | null
    has?: $Enums.CollaborationPermission | EnumCollaborationPermissionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.CollaborationPermission[] | ListEnumCollaborationPermissionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.CollaborationPermission[] | ListEnumCollaborationPermissionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EbookCollaboratorListRelationFilter = {
    every?: EbookCollaboratorWhereInput
    some?: EbookCollaboratorWhereInput
    none?: EbookCollaboratorWhereInput
  }

  export type EbookCollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EbookCustomRoleIdEbookIdCompoundUniqueInput = {
    id: string
    ebookId: string
  }

  export type EbookCustomRoleEbookIdNameCompoundUniqueInput = {
    ebookId: string
    name: string
  }

  export type EbookCustomRoleCountOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    name?: SortOrder
    permissions?: SortOrder
    createdByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EbookCustomRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    name?: SortOrder
    createdByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EbookCustomRoleMinOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    name?: SortOrder
    createdByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnapshotNullableScalarRelationFilter = {
    is?: SnapshotWhereInput | null
    isNot?: SnapshotWhereInput | null
  }

  export type AssetNullableScalarRelationFilter = {
    is?: AssetWhereInput | null
    isNot?: AssetWhereInput | null
  }

  export type SnapshotListRelationFilter = {
    every?: SnapshotWhereInput
    some?: SnapshotWhereInput
    none?: SnapshotWhereInput
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type EbookCustomRoleListRelationFilter = {
    every?: EbookCustomRoleWhereInput
    some?: EbookCustomRoleWhereInput
    none?: EbookCustomRoleWhereInput
  }

  export type SnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EbookCustomRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EbookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    shortDescription?: SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrder
    coverAssetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EbookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    shortDescription?: SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrder
    coverAssetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EbookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    shortDescription?: SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrder
    coverAssetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSnapshotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotStatus | EnumSnapshotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotStatusFilter<$PrismaModel> | $Enums.SnapshotStatus
  }

  export type SnapshotFileNullableScalarRelationFilter = {
    is?: SnapshotFileWhereInput | null
    isNot?: SnapshotFileWhereInput | null
  }

  export type EbookNullableScalarRelationFilter = {
    is?: EbookWhereInput | null
    isNot?: EbookWhereInput | null
  }

  export type SnapshotEbookIdVersionCompoundUniqueInput = {
    ebookId: string
    version: number
  }

  export type SnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type SnapshotAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type SnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type SnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type SnapshotSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type EnumSnapshotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotStatus | EnumSnapshotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SnapshotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSnapshotStatusFilter<$PrismaModel>
    _max?: NestedEnumSnapshotStatusFilter<$PrismaModel>
  }

  export type SnapshotScalarRelationFilter = {
    is?: SnapshotWhereInput
    isNot?: SnapshotWhereInput
  }

  export type SnapshotFileCountOrderByAggregateInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    sizeBytes?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type SnapshotFileAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type SnapshotFileMaxOrderByAggregateInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    sizeBytes?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type SnapshotFileMinOrderByAggregateInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    sizeBytes?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type SnapshotFileSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type EnumUploadHandshakeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadHandshakeStatus | EnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadHandshakeStatus[] | ListEnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadHandshakeStatus[] | ListEnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadHandshakeStatusFilter<$PrismaModel> | $Enums.UploadHandshakeStatus
  }

  export type UploadHandshakeCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    context?: SortOrder
    key?: SortOrder
    fileName?: SortOrder
    expectedMimeType?: SortOrder
    expectedSizeBytes?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadHandshakeAvgOrderByAggregateInput = {
    expectedSizeBytes?: SortOrder
  }

  export type UploadHandshakeMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    context?: SortOrder
    key?: SortOrder
    fileName?: SortOrder
    expectedMimeType?: SortOrder
    expectedSizeBytes?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadHandshakeMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    context?: SortOrder
    key?: SortOrder
    fileName?: SortOrder
    expectedMimeType?: SortOrder
    expectedSizeBytes?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadHandshakeSumOrderByAggregateInput = {
    expectedSizeBytes?: SortOrder
  }

  export type EnumUploadHandshakeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadHandshakeStatus | EnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadHandshakeStatus[] | ListEnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadHandshakeStatus[] | ListEnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadHandshakeStatusWithAggregatesFilter<$PrismaModel> | $Enums.UploadHandshakeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUploadHandshakeStatusFilter<$PrismaModel>
    _max?: NestedEnumUploadHandshakeStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type UploadHandshakeListRelationFilter = {
    every?: UploadHandshakeWhereInput
    some?: UploadHandshakeWhereInput
    none?: UploadHandshakeWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UploadHandshakeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    stripeCustomerId?: SortOrder
    subscriptionStatus?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    stripeCustomerId?: SortOrder
    subscriptionStatus?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    stripeCustomerId?: SortOrder
    subscriptionStatus?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type UserCreateNestedOneWithoutAssetsInput = {
    create?: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetsInput
    connect?: UserWhereUniqueInput
  }

  export type ChapterAssetReferenceCreateNestedManyWithoutAssetInput = {
    create?: XOR<ChapterAssetReferenceCreateWithoutAssetInput, ChapterAssetReferenceUncheckedCreateWithoutAssetInput> | ChapterAssetReferenceCreateWithoutAssetInput[] | ChapterAssetReferenceUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: ChapterAssetReferenceCreateOrConnectWithoutAssetInput | ChapterAssetReferenceCreateOrConnectWithoutAssetInput[]
    createMany?: ChapterAssetReferenceCreateManyAssetInputEnvelope
    connect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
  }

  export type EbookCreateNestedManyWithoutCoverAssetInput = {
    create?: XOR<EbookCreateWithoutCoverAssetInput, EbookUncheckedCreateWithoutCoverAssetInput> | EbookCreateWithoutCoverAssetInput[] | EbookUncheckedCreateWithoutCoverAssetInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutCoverAssetInput | EbookCreateOrConnectWithoutCoverAssetInput[]
    createMany?: EbookCreateManyCoverAssetInputEnvelope
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
  }

  export type ChapterAssetReferenceUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<ChapterAssetReferenceCreateWithoutAssetInput, ChapterAssetReferenceUncheckedCreateWithoutAssetInput> | ChapterAssetReferenceCreateWithoutAssetInput[] | ChapterAssetReferenceUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: ChapterAssetReferenceCreateOrConnectWithoutAssetInput | ChapterAssetReferenceCreateOrConnectWithoutAssetInput[]
    createMany?: ChapterAssetReferenceCreateManyAssetInputEnvelope
    connect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
  }

  export type EbookUncheckedCreateNestedManyWithoutCoverAssetInput = {
    create?: XOR<EbookCreateWithoutCoverAssetInput, EbookUncheckedCreateWithoutCoverAssetInput> | EbookCreateWithoutCoverAssetInput[] | EbookUncheckedCreateWithoutCoverAssetInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutCoverAssetInput | EbookCreateOrConnectWithoutCoverAssetInput[]
    createMany?: EbookCreateManyCoverAssetInputEnvelope
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetsInput
    upsert?: UserUpsertWithoutAssetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssetsInput, UserUpdateWithoutAssetsInput>, UserUncheckedUpdateWithoutAssetsInput>
  }

  export type ChapterAssetReferenceUpdateManyWithoutAssetNestedInput = {
    create?: XOR<ChapterAssetReferenceCreateWithoutAssetInput, ChapterAssetReferenceUncheckedCreateWithoutAssetInput> | ChapterAssetReferenceCreateWithoutAssetInput[] | ChapterAssetReferenceUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: ChapterAssetReferenceCreateOrConnectWithoutAssetInput | ChapterAssetReferenceCreateOrConnectWithoutAssetInput[]
    upsert?: ChapterAssetReferenceUpsertWithWhereUniqueWithoutAssetInput | ChapterAssetReferenceUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: ChapterAssetReferenceCreateManyAssetInputEnvelope
    set?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    disconnect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    delete?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    connect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    update?: ChapterAssetReferenceUpdateWithWhereUniqueWithoutAssetInput | ChapterAssetReferenceUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: ChapterAssetReferenceUpdateManyWithWhereWithoutAssetInput | ChapterAssetReferenceUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: ChapterAssetReferenceScalarWhereInput | ChapterAssetReferenceScalarWhereInput[]
  }

  export type EbookUpdateManyWithoutCoverAssetNestedInput = {
    create?: XOR<EbookCreateWithoutCoverAssetInput, EbookUncheckedCreateWithoutCoverAssetInput> | EbookCreateWithoutCoverAssetInput[] | EbookUncheckedCreateWithoutCoverAssetInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutCoverAssetInput | EbookCreateOrConnectWithoutCoverAssetInput[]
    upsert?: EbookUpsertWithWhereUniqueWithoutCoverAssetInput | EbookUpsertWithWhereUniqueWithoutCoverAssetInput[]
    createMany?: EbookCreateManyCoverAssetInputEnvelope
    set?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    disconnect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    delete?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    update?: EbookUpdateWithWhereUniqueWithoutCoverAssetInput | EbookUpdateWithWhereUniqueWithoutCoverAssetInput[]
    updateMany?: EbookUpdateManyWithWhereWithoutCoverAssetInput | EbookUpdateManyWithWhereWithoutCoverAssetInput[]
    deleteMany?: EbookScalarWhereInput | EbookScalarWhereInput[]
  }

  export type ChapterAssetReferenceUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<ChapterAssetReferenceCreateWithoutAssetInput, ChapterAssetReferenceUncheckedCreateWithoutAssetInput> | ChapterAssetReferenceCreateWithoutAssetInput[] | ChapterAssetReferenceUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: ChapterAssetReferenceCreateOrConnectWithoutAssetInput | ChapterAssetReferenceCreateOrConnectWithoutAssetInput[]
    upsert?: ChapterAssetReferenceUpsertWithWhereUniqueWithoutAssetInput | ChapterAssetReferenceUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: ChapterAssetReferenceCreateManyAssetInputEnvelope
    set?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    disconnect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    delete?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    connect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    update?: ChapterAssetReferenceUpdateWithWhereUniqueWithoutAssetInput | ChapterAssetReferenceUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: ChapterAssetReferenceUpdateManyWithWhereWithoutAssetInput | ChapterAssetReferenceUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: ChapterAssetReferenceScalarWhereInput | ChapterAssetReferenceScalarWhereInput[]
  }

  export type EbookUncheckedUpdateManyWithoutCoverAssetNestedInput = {
    create?: XOR<EbookCreateWithoutCoverAssetInput, EbookUncheckedCreateWithoutCoverAssetInput> | EbookCreateWithoutCoverAssetInput[] | EbookUncheckedCreateWithoutCoverAssetInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutCoverAssetInput | EbookCreateOrConnectWithoutCoverAssetInput[]
    upsert?: EbookUpsertWithWhereUniqueWithoutCoverAssetInput | EbookUpsertWithWhereUniqueWithoutCoverAssetInput[]
    createMany?: EbookCreateManyCoverAssetInputEnvelope
    set?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    disconnect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    delete?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    update?: EbookUpdateWithWhereUniqueWithoutCoverAssetInput | EbookUpdateWithWhereUniqueWithoutCoverAssetInput[]
    updateMany?: EbookUpdateManyWithWhereWithoutCoverAssetInput | EbookUpdateManyWithWhereWithoutCoverAssetInput[]
    deleteMany?: EbookScalarWhereInput | EbookScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutChapterReferencesInput = {
    create?: XOR<AssetCreateWithoutChapterReferencesInput, AssetUncheckedCreateWithoutChapterReferencesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutChapterReferencesInput
    connect?: AssetWhereUniqueInput
  }

  export type ChapterCreateNestedOneWithoutAssetReferencesInput = {
    create?: XOR<ChapterCreateWithoutAssetReferencesInput, ChapterUncheckedCreateWithoutAssetReferencesInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutAssetReferencesInput
    connect?: ChapterWhereUniqueInput
  }

  export type EnumAssetReferenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetReferenceType
  }

  export type AssetUpdateOneRequiredWithoutChapterReferencesNestedInput = {
    create?: XOR<AssetCreateWithoutChapterReferencesInput, AssetUncheckedCreateWithoutChapterReferencesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutChapterReferencesInput
    upsert?: AssetUpsertWithoutChapterReferencesInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutChapterReferencesInput, AssetUpdateWithoutChapterReferencesInput>, AssetUncheckedUpdateWithoutChapterReferencesInput>
  }

  export type ChapterUpdateOneRequiredWithoutAssetReferencesNestedInput = {
    create?: XOR<ChapterCreateWithoutAssetReferencesInput, ChapterUncheckedCreateWithoutAssetReferencesInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutAssetReferencesInput
    upsert?: ChapterUpsertWithoutAssetReferencesInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutAssetReferencesInput, ChapterUpdateWithoutAssetReferencesInput>, ChapterUncheckedUpdateWithoutAssetReferencesInput>
  }

  export type EbookCreateNestedOneWithoutChaptersInput = {
    create?: XOR<EbookCreateWithoutChaptersInput, EbookUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: EbookCreateOrConnectWithoutChaptersInput
    connect?: EbookWhereUniqueInput
  }

  export type ChapterAssetReferenceCreateNestedManyWithoutChapterInput = {
    create?: XOR<ChapterAssetReferenceCreateWithoutChapterInput, ChapterAssetReferenceUncheckedCreateWithoutChapterInput> | ChapterAssetReferenceCreateWithoutChapterInput[] | ChapterAssetReferenceUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterAssetReferenceCreateOrConnectWithoutChapterInput | ChapterAssetReferenceCreateOrConnectWithoutChapterInput[]
    createMany?: ChapterAssetReferenceCreateManyChapterInputEnvelope
    connect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
  }

  export type EbookCollaboratorChapterAccessCreateNestedManyWithoutChapterInput = {
    create?: XOR<EbookCollaboratorChapterAccessCreateWithoutChapterInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput> | EbookCollaboratorChapterAccessCreateWithoutChapterInput[] | EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: EbookCollaboratorChapterAccessCreateOrConnectWithoutChapterInput | EbookCollaboratorChapterAccessCreateOrConnectWithoutChapterInput[]
    createMany?: EbookCollaboratorChapterAccessCreateManyChapterInputEnvelope
    connect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
  }

  export type ChapterAssetReferenceUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<ChapterAssetReferenceCreateWithoutChapterInput, ChapterAssetReferenceUncheckedCreateWithoutChapterInput> | ChapterAssetReferenceCreateWithoutChapterInput[] | ChapterAssetReferenceUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterAssetReferenceCreateOrConnectWithoutChapterInput | ChapterAssetReferenceCreateOrConnectWithoutChapterInput[]
    createMany?: ChapterAssetReferenceCreateManyChapterInputEnvelope
    connect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
  }

  export type EbookCollaboratorChapterAccessUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<EbookCollaboratorChapterAccessCreateWithoutChapterInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput> | EbookCollaboratorChapterAccessCreateWithoutChapterInput[] | EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: EbookCollaboratorChapterAccessCreateOrConnectWithoutChapterInput | EbookCollaboratorChapterAccessCreateOrConnectWithoutChapterInput[]
    createMany?: EbookCollaboratorChapterAccessCreateManyChapterInputEnvelope
    connect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
  }

  export type EbookUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<EbookCreateWithoutChaptersInput, EbookUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: EbookCreateOrConnectWithoutChaptersInput
    upsert?: EbookUpsertWithoutChaptersInput
    connect?: EbookWhereUniqueInput
    update?: XOR<XOR<EbookUpdateToOneWithWhereWithoutChaptersInput, EbookUpdateWithoutChaptersInput>, EbookUncheckedUpdateWithoutChaptersInput>
  }

  export type ChapterAssetReferenceUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ChapterAssetReferenceCreateWithoutChapterInput, ChapterAssetReferenceUncheckedCreateWithoutChapterInput> | ChapterAssetReferenceCreateWithoutChapterInput[] | ChapterAssetReferenceUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterAssetReferenceCreateOrConnectWithoutChapterInput | ChapterAssetReferenceCreateOrConnectWithoutChapterInput[]
    upsert?: ChapterAssetReferenceUpsertWithWhereUniqueWithoutChapterInput | ChapterAssetReferenceUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ChapterAssetReferenceCreateManyChapterInputEnvelope
    set?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    disconnect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    delete?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    connect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    update?: ChapterAssetReferenceUpdateWithWhereUniqueWithoutChapterInput | ChapterAssetReferenceUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ChapterAssetReferenceUpdateManyWithWhereWithoutChapterInput | ChapterAssetReferenceUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ChapterAssetReferenceScalarWhereInput | ChapterAssetReferenceScalarWhereInput[]
  }

  export type EbookCollaboratorChapterAccessUpdateManyWithoutChapterNestedInput = {
    create?: XOR<EbookCollaboratorChapterAccessCreateWithoutChapterInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput> | EbookCollaboratorChapterAccessCreateWithoutChapterInput[] | EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: EbookCollaboratorChapterAccessCreateOrConnectWithoutChapterInput | EbookCollaboratorChapterAccessCreateOrConnectWithoutChapterInput[]
    upsert?: EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutChapterInput | EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: EbookCollaboratorChapterAccessCreateManyChapterInputEnvelope
    set?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    disconnect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    delete?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    connect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    update?: EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutChapterInput | EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutChapterInput | EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: EbookCollaboratorChapterAccessScalarWhereInput | EbookCollaboratorChapterAccessScalarWhereInput[]
  }

  export type ChapterAssetReferenceUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ChapterAssetReferenceCreateWithoutChapterInput, ChapterAssetReferenceUncheckedCreateWithoutChapterInput> | ChapterAssetReferenceCreateWithoutChapterInput[] | ChapterAssetReferenceUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterAssetReferenceCreateOrConnectWithoutChapterInput | ChapterAssetReferenceCreateOrConnectWithoutChapterInput[]
    upsert?: ChapterAssetReferenceUpsertWithWhereUniqueWithoutChapterInput | ChapterAssetReferenceUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ChapterAssetReferenceCreateManyChapterInputEnvelope
    set?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    disconnect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    delete?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    connect?: ChapterAssetReferenceWhereUniqueInput | ChapterAssetReferenceWhereUniqueInput[]
    update?: ChapterAssetReferenceUpdateWithWhereUniqueWithoutChapterInput | ChapterAssetReferenceUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ChapterAssetReferenceUpdateManyWithWhereWithoutChapterInput | ChapterAssetReferenceUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ChapterAssetReferenceScalarWhereInput | ChapterAssetReferenceScalarWhereInput[]
  }

  export type EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<EbookCollaboratorChapterAccessCreateWithoutChapterInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput> | EbookCollaboratorChapterAccessCreateWithoutChapterInput[] | EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: EbookCollaboratorChapterAccessCreateOrConnectWithoutChapterInput | EbookCollaboratorChapterAccessCreateOrConnectWithoutChapterInput[]
    upsert?: EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutChapterInput | EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: EbookCollaboratorChapterAccessCreateManyChapterInputEnvelope
    set?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    disconnect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    delete?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    connect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    update?: EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutChapterInput | EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutChapterInput | EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: EbookCollaboratorChapterAccessScalarWhereInput | EbookCollaboratorChapterAccessScalarWhereInput[]
  }

  export type EbookCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<EbookCreateWithoutCollaboratorsInput, EbookUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCollaboratorsInput
    connect?: EbookWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEbookCollaborationsInput = {
    create?: XOR<UserCreateWithoutEbookCollaborationsInput, UserUncheckedCreateWithoutEbookCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEbookCollaborationsInput
    connect?: UserWhereUniqueInput
  }

  export type EbookCustomRoleCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<EbookCustomRoleCreateWithoutCollaboratorsInput, EbookCustomRoleUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutCollaboratorsInput
    connect?: EbookCustomRoleWhereUniqueInput
  }

  export type EbookCollaboratorChapterAccessCreateNestedManyWithoutCollaboratorInput = {
    create?: XOR<EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput> | EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput[] | EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: EbookCollaboratorChapterAccessCreateOrConnectWithoutCollaboratorInput | EbookCollaboratorChapterAccessCreateOrConnectWithoutCollaboratorInput[]
    createMany?: EbookCollaboratorChapterAccessCreateManyCollaboratorInputEnvelope
    connect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
  }

  export type EbookCollaboratorChapterAccessUncheckedCreateNestedManyWithoutCollaboratorInput = {
    create?: XOR<EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput> | EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput[] | EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: EbookCollaboratorChapterAccessCreateOrConnectWithoutCollaboratorInput | EbookCollaboratorChapterAccessCreateOrConnectWithoutCollaboratorInput[]
    createMany?: EbookCollaboratorChapterAccessCreateManyCollaboratorInputEnvelope
    connect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
  }

  export type NullableEnumCollaborationRoleFieldUpdateOperationsInput = {
    set?: $Enums.CollaborationRole | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EbookUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<EbookCreateWithoutCollaboratorsInput, EbookUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCollaboratorsInput
    upsert?: EbookUpsertWithoutCollaboratorsInput
    connect?: EbookWhereUniqueInput
    update?: XOR<XOR<EbookUpdateToOneWithWhereWithoutCollaboratorsInput, EbookUpdateWithoutCollaboratorsInput>, EbookUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type UserUpdateOneRequiredWithoutEbookCollaborationsNestedInput = {
    create?: XOR<UserCreateWithoutEbookCollaborationsInput, UserUncheckedCreateWithoutEbookCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEbookCollaborationsInput
    upsert?: UserUpsertWithoutEbookCollaborationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEbookCollaborationsInput, UserUpdateWithoutEbookCollaborationsInput>, UserUncheckedUpdateWithoutEbookCollaborationsInput>
  }

  export type EbookCustomRoleUpdateOneWithoutCollaboratorsNestedInput = {
    create?: XOR<EbookCustomRoleCreateWithoutCollaboratorsInput, EbookCustomRoleUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutCollaboratorsInput
    upsert?: EbookCustomRoleUpsertWithoutCollaboratorsInput
    disconnect?: EbookCustomRoleWhereInput | boolean
    delete?: EbookCustomRoleWhereInput | boolean
    connect?: EbookCustomRoleWhereUniqueInput
    update?: XOR<XOR<EbookCustomRoleUpdateToOneWithWhereWithoutCollaboratorsInput, EbookCustomRoleUpdateWithoutCollaboratorsInput>, EbookCustomRoleUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type EbookCollaboratorChapterAccessUpdateManyWithoutCollaboratorNestedInput = {
    create?: XOR<EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput> | EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput[] | EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: EbookCollaboratorChapterAccessCreateOrConnectWithoutCollaboratorInput | EbookCollaboratorChapterAccessCreateOrConnectWithoutCollaboratorInput[]
    upsert?: EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutCollaboratorInput | EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutCollaboratorInput[]
    createMany?: EbookCollaboratorChapterAccessCreateManyCollaboratorInputEnvelope
    set?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    disconnect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    delete?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    connect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    update?: EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutCollaboratorInput | EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutCollaboratorInput[]
    updateMany?: EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutCollaboratorInput | EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutCollaboratorInput[]
    deleteMany?: EbookCollaboratorChapterAccessScalarWhereInput | EbookCollaboratorChapterAccessScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutCollaboratorNestedInput = {
    create?: XOR<EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput> | EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput[] | EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: EbookCollaboratorChapterAccessCreateOrConnectWithoutCollaboratorInput | EbookCollaboratorChapterAccessCreateOrConnectWithoutCollaboratorInput[]
    upsert?: EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutCollaboratorInput | EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutCollaboratorInput[]
    createMany?: EbookCollaboratorChapterAccessCreateManyCollaboratorInputEnvelope
    set?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    disconnect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    delete?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    connect?: EbookCollaboratorChapterAccessWhereUniqueInput | EbookCollaboratorChapterAccessWhereUniqueInput[]
    update?: EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutCollaboratorInput | EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutCollaboratorInput[]
    updateMany?: EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutCollaboratorInput | EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutCollaboratorInput[]
    deleteMany?: EbookCollaboratorChapterAccessScalarWhereInput | EbookCollaboratorChapterAccessScalarWhereInput[]
  }

  export type EbookCollaboratorCreateNestedOneWithoutChapterAccessInput = {
    create?: XOR<EbookCollaboratorCreateWithoutChapterAccessInput, EbookCollaboratorUncheckedCreateWithoutChapterAccessInput>
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutChapterAccessInput
    connect?: EbookCollaboratorWhereUniqueInput
  }

  export type ChapterCreateNestedOneWithoutCollaboratorAccessInput = {
    create?: XOR<ChapterCreateWithoutCollaboratorAccessInput, ChapterUncheckedCreateWithoutCollaboratorAccessInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutCollaboratorAccessInput
    connect?: ChapterWhereUniqueInput
  }

  export type EbookCollaboratorUpdateOneRequiredWithoutChapterAccessNestedInput = {
    create?: XOR<EbookCollaboratorCreateWithoutChapterAccessInput, EbookCollaboratorUncheckedCreateWithoutChapterAccessInput>
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutChapterAccessInput
    upsert?: EbookCollaboratorUpsertWithoutChapterAccessInput
    connect?: EbookCollaboratorWhereUniqueInput
    update?: XOR<XOR<EbookCollaboratorUpdateToOneWithWhereWithoutChapterAccessInput, EbookCollaboratorUpdateWithoutChapterAccessInput>, EbookCollaboratorUncheckedUpdateWithoutChapterAccessInput>
  }

  export type ChapterUpdateOneRequiredWithoutCollaboratorAccessNestedInput = {
    create?: XOR<ChapterCreateWithoutCollaboratorAccessInput, ChapterUncheckedCreateWithoutCollaboratorAccessInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutCollaboratorAccessInput
    upsert?: ChapterUpsertWithoutCollaboratorAccessInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutCollaboratorAccessInput, ChapterUpdateWithoutCollaboratorAccessInput>, ChapterUncheckedUpdateWithoutCollaboratorAccessInput>
  }

  export type EbookCustomRoleCreatepermissionsInput = {
    set: $Enums.CollaborationPermission[]
  }

  export type EbookCreateNestedOneWithoutCustomRolesInput = {
    create?: XOR<EbookCreateWithoutCustomRolesInput, EbookUncheckedCreateWithoutCustomRolesInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCustomRolesInput
    connect?: EbookWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedCustomRolesInput = {
    create?: XOR<UserCreateWithoutCreatedCustomRolesInput, UserUncheckedCreateWithoutCreatedCustomRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCustomRolesInput
    connect?: UserWhereUniqueInput
  }

  export type EbookCollaboratorCreateNestedManyWithoutCustomRoleInput = {
    create?: XOR<EbookCollaboratorCreateWithoutCustomRoleInput, EbookCollaboratorUncheckedCreateWithoutCustomRoleInput> | EbookCollaboratorCreateWithoutCustomRoleInput[] | EbookCollaboratorUncheckedCreateWithoutCustomRoleInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutCustomRoleInput | EbookCollaboratorCreateOrConnectWithoutCustomRoleInput[]
    createMany?: EbookCollaboratorCreateManyCustomRoleInputEnvelope
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
  }

  export type EbookCollaboratorUncheckedCreateNestedManyWithoutCustomRoleInput = {
    create?: XOR<EbookCollaboratorCreateWithoutCustomRoleInput, EbookCollaboratorUncheckedCreateWithoutCustomRoleInput> | EbookCollaboratorCreateWithoutCustomRoleInput[] | EbookCollaboratorUncheckedCreateWithoutCustomRoleInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutCustomRoleInput | EbookCollaboratorCreateOrConnectWithoutCustomRoleInput[]
    createMany?: EbookCollaboratorCreateManyCustomRoleInputEnvelope
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
  }

  export type EbookCustomRoleUpdatepermissionsInput = {
    set?: $Enums.CollaborationPermission[]
    push?: $Enums.CollaborationPermission | $Enums.CollaborationPermission[]
  }

  export type EbookUpdateOneRequiredWithoutCustomRolesNestedInput = {
    create?: XOR<EbookCreateWithoutCustomRolesInput, EbookUncheckedCreateWithoutCustomRolesInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCustomRolesInput
    upsert?: EbookUpsertWithoutCustomRolesInput
    connect?: EbookWhereUniqueInput
    update?: XOR<XOR<EbookUpdateToOneWithWhereWithoutCustomRolesInput, EbookUpdateWithoutCustomRolesInput>, EbookUncheckedUpdateWithoutCustomRolesInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedCustomRolesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCustomRolesInput, UserUncheckedCreateWithoutCreatedCustomRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCustomRolesInput
    upsert?: UserUpsertWithoutCreatedCustomRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCustomRolesInput, UserUpdateWithoutCreatedCustomRolesInput>, UserUncheckedUpdateWithoutCreatedCustomRolesInput>
  }

  export type EbookCollaboratorUpdateManyWithoutCustomRoleNestedInput = {
    create?: XOR<EbookCollaboratorCreateWithoutCustomRoleInput, EbookCollaboratorUncheckedCreateWithoutCustomRoleInput> | EbookCollaboratorCreateWithoutCustomRoleInput[] | EbookCollaboratorUncheckedCreateWithoutCustomRoleInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutCustomRoleInput | EbookCollaboratorCreateOrConnectWithoutCustomRoleInput[]
    upsert?: EbookCollaboratorUpsertWithWhereUniqueWithoutCustomRoleInput | EbookCollaboratorUpsertWithWhereUniqueWithoutCustomRoleInput[]
    createMany?: EbookCollaboratorCreateManyCustomRoleInputEnvelope
    set?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    disconnect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    delete?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    update?: EbookCollaboratorUpdateWithWhereUniqueWithoutCustomRoleInput | EbookCollaboratorUpdateWithWhereUniqueWithoutCustomRoleInput[]
    updateMany?: EbookCollaboratorUpdateManyWithWhereWithoutCustomRoleInput | EbookCollaboratorUpdateManyWithWhereWithoutCustomRoleInput[]
    deleteMany?: EbookCollaboratorScalarWhereInput | EbookCollaboratorScalarWhereInput[]
  }

  export type EbookCollaboratorUncheckedUpdateManyWithoutCustomRoleNestedInput = {
    create?: XOR<EbookCollaboratorCreateWithoutCustomRoleInput, EbookCollaboratorUncheckedCreateWithoutCustomRoleInput> | EbookCollaboratorCreateWithoutCustomRoleInput[] | EbookCollaboratorUncheckedCreateWithoutCustomRoleInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutCustomRoleInput | EbookCollaboratorCreateOrConnectWithoutCustomRoleInput[]
    upsert?: EbookCollaboratorUpsertWithWhereUniqueWithoutCustomRoleInput | EbookCollaboratorUpsertWithWhereUniqueWithoutCustomRoleInput[]
    createMany?: EbookCollaboratorCreateManyCustomRoleInputEnvelope
    set?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    disconnect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    delete?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    update?: EbookCollaboratorUpdateWithWhereUniqueWithoutCustomRoleInput | EbookCollaboratorUpdateWithWhereUniqueWithoutCustomRoleInput[]
    updateMany?: EbookCollaboratorUpdateManyWithWhereWithoutCustomRoleInput | EbookCollaboratorUpdateManyWithWhereWithoutCustomRoleInput[]
    deleteMany?: EbookCollaboratorScalarWhereInput | EbookCollaboratorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEbooksInput = {
    create?: XOR<UserCreateWithoutEbooksInput, UserUncheckedCreateWithoutEbooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutEbooksInput
    connect?: UserWhereUniqueInput
  }

  export type SnapshotCreateNestedOneWithoutCurrentForEbookInput = {
    create?: XOR<SnapshotCreateWithoutCurrentForEbookInput, SnapshotUncheckedCreateWithoutCurrentForEbookInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutCurrentForEbookInput
    connect?: SnapshotWhereUniqueInput
  }

  export type AssetCreateNestedOneWithoutEbookCoverImagesInput = {
    create?: XOR<AssetCreateWithoutEbookCoverImagesInput, AssetUncheckedCreateWithoutEbookCoverImagesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutEbookCoverImagesInput
    connect?: AssetWhereUniqueInput
  }

  export type SnapshotCreateNestedManyWithoutEbookInput = {
    create?: XOR<SnapshotCreateWithoutEbookInput, SnapshotUncheckedCreateWithoutEbookInput> | SnapshotCreateWithoutEbookInput[] | SnapshotUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: SnapshotCreateOrConnectWithoutEbookInput | SnapshotCreateOrConnectWithoutEbookInput[]
    createMany?: SnapshotCreateManyEbookInputEnvelope
    connect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
  }

  export type ChapterCreateNestedManyWithoutEbookInput = {
    create?: XOR<ChapterCreateWithoutEbookInput, ChapterUncheckedCreateWithoutEbookInput> | ChapterCreateWithoutEbookInput[] | ChapterUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutEbookInput | ChapterCreateOrConnectWithoutEbookInput[]
    createMany?: ChapterCreateManyEbookInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type EbookCollaboratorCreateNestedManyWithoutEbookInput = {
    create?: XOR<EbookCollaboratorCreateWithoutEbookInput, EbookCollaboratorUncheckedCreateWithoutEbookInput> | EbookCollaboratorCreateWithoutEbookInput[] | EbookCollaboratorUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutEbookInput | EbookCollaboratorCreateOrConnectWithoutEbookInput[]
    createMany?: EbookCollaboratorCreateManyEbookInputEnvelope
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
  }

  export type EbookCustomRoleCreateNestedManyWithoutEbookInput = {
    create?: XOR<EbookCustomRoleCreateWithoutEbookInput, EbookCustomRoleUncheckedCreateWithoutEbookInput> | EbookCustomRoleCreateWithoutEbookInput[] | EbookCustomRoleUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutEbookInput | EbookCustomRoleCreateOrConnectWithoutEbookInput[]
    createMany?: EbookCustomRoleCreateManyEbookInputEnvelope
    connect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
  }

  export type SnapshotUncheckedCreateNestedManyWithoutEbookInput = {
    create?: XOR<SnapshotCreateWithoutEbookInput, SnapshotUncheckedCreateWithoutEbookInput> | SnapshotCreateWithoutEbookInput[] | SnapshotUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: SnapshotCreateOrConnectWithoutEbookInput | SnapshotCreateOrConnectWithoutEbookInput[]
    createMany?: SnapshotCreateManyEbookInputEnvelope
    connect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutEbookInput = {
    create?: XOR<ChapterCreateWithoutEbookInput, ChapterUncheckedCreateWithoutEbookInput> | ChapterCreateWithoutEbookInput[] | ChapterUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutEbookInput | ChapterCreateOrConnectWithoutEbookInput[]
    createMany?: ChapterCreateManyEbookInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type EbookCollaboratorUncheckedCreateNestedManyWithoutEbookInput = {
    create?: XOR<EbookCollaboratorCreateWithoutEbookInput, EbookCollaboratorUncheckedCreateWithoutEbookInput> | EbookCollaboratorCreateWithoutEbookInput[] | EbookCollaboratorUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutEbookInput | EbookCollaboratorCreateOrConnectWithoutEbookInput[]
    createMany?: EbookCollaboratorCreateManyEbookInputEnvelope
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
  }

  export type EbookCustomRoleUncheckedCreateNestedManyWithoutEbookInput = {
    create?: XOR<EbookCustomRoleCreateWithoutEbookInput, EbookCustomRoleUncheckedCreateWithoutEbookInput> | EbookCustomRoleCreateWithoutEbookInput[] | EbookCustomRoleUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutEbookInput | EbookCustomRoleCreateOrConnectWithoutEbookInput[]
    createMany?: EbookCustomRoleCreateManyEbookInputEnvelope
    connect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEbooksNestedInput = {
    create?: XOR<UserCreateWithoutEbooksInput, UserUncheckedCreateWithoutEbooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutEbooksInput
    upsert?: UserUpsertWithoutEbooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEbooksInput, UserUpdateWithoutEbooksInput>, UserUncheckedUpdateWithoutEbooksInput>
  }

  export type SnapshotUpdateOneWithoutCurrentForEbookNestedInput = {
    create?: XOR<SnapshotCreateWithoutCurrentForEbookInput, SnapshotUncheckedCreateWithoutCurrentForEbookInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutCurrentForEbookInput
    upsert?: SnapshotUpsertWithoutCurrentForEbookInput
    disconnect?: SnapshotWhereInput | boolean
    delete?: SnapshotWhereInput | boolean
    connect?: SnapshotWhereUniqueInput
    update?: XOR<XOR<SnapshotUpdateToOneWithWhereWithoutCurrentForEbookInput, SnapshotUpdateWithoutCurrentForEbookInput>, SnapshotUncheckedUpdateWithoutCurrentForEbookInput>
  }

  export type AssetUpdateOneWithoutEbookCoverImagesNestedInput = {
    create?: XOR<AssetCreateWithoutEbookCoverImagesInput, AssetUncheckedCreateWithoutEbookCoverImagesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutEbookCoverImagesInput
    upsert?: AssetUpsertWithoutEbookCoverImagesInput
    disconnect?: AssetWhereInput | boolean
    delete?: AssetWhereInput | boolean
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutEbookCoverImagesInput, AssetUpdateWithoutEbookCoverImagesInput>, AssetUncheckedUpdateWithoutEbookCoverImagesInput>
  }

  export type SnapshotUpdateManyWithoutEbookNestedInput = {
    create?: XOR<SnapshotCreateWithoutEbookInput, SnapshotUncheckedCreateWithoutEbookInput> | SnapshotCreateWithoutEbookInput[] | SnapshotUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: SnapshotCreateOrConnectWithoutEbookInput | SnapshotCreateOrConnectWithoutEbookInput[]
    upsert?: SnapshotUpsertWithWhereUniqueWithoutEbookInput | SnapshotUpsertWithWhereUniqueWithoutEbookInput[]
    createMany?: SnapshotCreateManyEbookInputEnvelope
    set?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    disconnect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    delete?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    connect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    update?: SnapshotUpdateWithWhereUniqueWithoutEbookInput | SnapshotUpdateWithWhereUniqueWithoutEbookInput[]
    updateMany?: SnapshotUpdateManyWithWhereWithoutEbookInput | SnapshotUpdateManyWithWhereWithoutEbookInput[]
    deleteMany?: SnapshotScalarWhereInput | SnapshotScalarWhereInput[]
  }

  export type ChapterUpdateManyWithoutEbookNestedInput = {
    create?: XOR<ChapterCreateWithoutEbookInput, ChapterUncheckedCreateWithoutEbookInput> | ChapterCreateWithoutEbookInput[] | ChapterUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutEbookInput | ChapterCreateOrConnectWithoutEbookInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutEbookInput | ChapterUpsertWithWhereUniqueWithoutEbookInput[]
    createMany?: ChapterCreateManyEbookInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutEbookInput | ChapterUpdateWithWhereUniqueWithoutEbookInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutEbookInput | ChapterUpdateManyWithWhereWithoutEbookInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type EbookCollaboratorUpdateManyWithoutEbookNestedInput = {
    create?: XOR<EbookCollaboratorCreateWithoutEbookInput, EbookCollaboratorUncheckedCreateWithoutEbookInput> | EbookCollaboratorCreateWithoutEbookInput[] | EbookCollaboratorUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutEbookInput | EbookCollaboratorCreateOrConnectWithoutEbookInput[]
    upsert?: EbookCollaboratorUpsertWithWhereUniqueWithoutEbookInput | EbookCollaboratorUpsertWithWhereUniqueWithoutEbookInput[]
    createMany?: EbookCollaboratorCreateManyEbookInputEnvelope
    set?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    disconnect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    delete?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    update?: EbookCollaboratorUpdateWithWhereUniqueWithoutEbookInput | EbookCollaboratorUpdateWithWhereUniqueWithoutEbookInput[]
    updateMany?: EbookCollaboratorUpdateManyWithWhereWithoutEbookInput | EbookCollaboratorUpdateManyWithWhereWithoutEbookInput[]
    deleteMany?: EbookCollaboratorScalarWhereInput | EbookCollaboratorScalarWhereInput[]
  }

  export type EbookCustomRoleUpdateManyWithoutEbookNestedInput = {
    create?: XOR<EbookCustomRoleCreateWithoutEbookInput, EbookCustomRoleUncheckedCreateWithoutEbookInput> | EbookCustomRoleCreateWithoutEbookInput[] | EbookCustomRoleUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutEbookInput | EbookCustomRoleCreateOrConnectWithoutEbookInput[]
    upsert?: EbookCustomRoleUpsertWithWhereUniqueWithoutEbookInput | EbookCustomRoleUpsertWithWhereUniqueWithoutEbookInput[]
    createMany?: EbookCustomRoleCreateManyEbookInputEnvelope
    set?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    disconnect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    delete?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    connect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    update?: EbookCustomRoleUpdateWithWhereUniqueWithoutEbookInput | EbookCustomRoleUpdateWithWhereUniqueWithoutEbookInput[]
    updateMany?: EbookCustomRoleUpdateManyWithWhereWithoutEbookInput | EbookCustomRoleUpdateManyWithWhereWithoutEbookInput[]
    deleteMany?: EbookCustomRoleScalarWhereInput | EbookCustomRoleScalarWhereInput[]
  }

  export type SnapshotUncheckedUpdateManyWithoutEbookNestedInput = {
    create?: XOR<SnapshotCreateWithoutEbookInput, SnapshotUncheckedCreateWithoutEbookInput> | SnapshotCreateWithoutEbookInput[] | SnapshotUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: SnapshotCreateOrConnectWithoutEbookInput | SnapshotCreateOrConnectWithoutEbookInput[]
    upsert?: SnapshotUpsertWithWhereUniqueWithoutEbookInput | SnapshotUpsertWithWhereUniqueWithoutEbookInput[]
    createMany?: SnapshotCreateManyEbookInputEnvelope
    set?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    disconnect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    delete?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    connect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    update?: SnapshotUpdateWithWhereUniqueWithoutEbookInput | SnapshotUpdateWithWhereUniqueWithoutEbookInput[]
    updateMany?: SnapshotUpdateManyWithWhereWithoutEbookInput | SnapshotUpdateManyWithWhereWithoutEbookInput[]
    deleteMany?: SnapshotScalarWhereInput | SnapshotScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutEbookNestedInput = {
    create?: XOR<ChapterCreateWithoutEbookInput, ChapterUncheckedCreateWithoutEbookInput> | ChapterCreateWithoutEbookInput[] | ChapterUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutEbookInput | ChapterCreateOrConnectWithoutEbookInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutEbookInput | ChapterUpsertWithWhereUniqueWithoutEbookInput[]
    createMany?: ChapterCreateManyEbookInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutEbookInput | ChapterUpdateWithWhereUniqueWithoutEbookInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutEbookInput | ChapterUpdateManyWithWhereWithoutEbookInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type EbookCollaboratorUncheckedUpdateManyWithoutEbookNestedInput = {
    create?: XOR<EbookCollaboratorCreateWithoutEbookInput, EbookCollaboratorUncheckedCreateWithoutEbookInput> | EbookCollaboratorCreateWithoutEbookInput[] | EbookCollaboratorUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutEbookInput | EbookCollaboratorCreateOrConnectWithoutEbookInput[]
    upsert?: EbookCollaboratorUpsertWithWhereUniqueWithoutEbookInput | EbookCollaboratorUpsertWithWhereUniqueWithoutEbookInput[]
    createMany?: EbookCollaboratorCreateManyEbookInputEnvelope
    set?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    disconnect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    delete?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    update?: EbookCollaboratorUpdateWithWhereUniqueWithoutEbookInput | EbookCollaboratorUpdateWithWhereUniqueWithoutEbookInput[]
    updateMany?: EbookCollaboratorUpdateManyWithWhereWithoutEbookInput | EbookCollaboratorUpdateManyWithWhereWithoutEbookInput[]
    deleteMany?: EbookCollaboratorScalarWhereInput | EbookCollaboratorScalarWhereInput[]
  }

  export type EbookCustomRoleUncheckedUpdateManyWithoutEbookNestedInput = {
    create?: XOR<EbookCustomRoleCreateWithoutEbookInput, EbookCustomRoleUncheckedCreateWithoutEbookInput> | EbookCustomRoleCreateWithoutEbookInput[] | EbookCustomRoleUncheckedCreateWithoutEbookInput[]
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutEbookInput | EbookCustomRoleCreateOrConnectWithoutEbookInput[]
    upsert?: EbookCustomRoleUpsertWithWhereUniqueWithoutEbookInput | EbookCustomRoleUpsertWithWhereUniqueWithoutEbookInput[]
    createMany?: EbookCustomRoleCreateManyEbookInputEnvelope
    set?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    disconnect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    delete?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    connect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    update?: EbookCustomRoleUpdateWithWhereUniqueWithoutEbookInput | EbookCustomRoleUpdateWithWhereUniqueWithoutEbookInput[]
    updateMany?: EbookCustomRoleUpdateManyWithWhereWithoutEbookInput | EbookCustomRoleUpdateManyWithWhereWithoutEbookInput[]
    deleteMany?: EbookCustomRoleScalarWhereInput | EbookCustomRoleScalarWhereInput[]
  }

  export type EbookCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<EbookCreateWithoutSnapshotsInput, EbookUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: EbookCreateOrConnectWithoutSnapshotsInput
    connect?: EbookWhereUniqueInput
  }

  export type SnapshotFileCreateNestedOneWithoutSnapshotInput = {
    create?: XOR<SnapshotFileCreateWithoutSnapshotInput, SnapshotFileUncheckedCreateWithoutSnapshotInput>
    connectOrCreate?: SnapshotFileCreateOrConnectWithoutSnapshotInput
    connect?: SnapshotFileWhereUniqueInput
  }

  export type EbookCreateNestedOneWithoutCurrentSnapshotInput = {
    create?: XOR<EbookCreateWithoutCurrentSnapshotInput, EbookUncheckedCreateWithoutCurrentSnapshotInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCurrentSnapshotInput
    connect?: EbookWhereUniqueInput
  }

  export type SnapshotFileUncheckedCreateNestedOneWithoutSnapshotInput = {
    create?: XOR<SnapshotFileCreateWithoutSnapshotInput, SnapshotFileUncheckedCreateWithoutSnapshotInput>
    connectOrCreate?: SnapshotFileCreateOrConnectWithoutSnapshotInput
    connect?: SnapshotFileWhereUniqueInput
  }

  export type EbookUncheckedCreateNestedOneWithoutCurrentSnapshotInput = {
    create?: XOR<EbookCreateWithoutCurrentSnapshotInput, EbookUncheckedCreateWithoutCurrentSnapshotInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCurrentSnapshotInput
    connect?: EbookWhereUniqueInput
  }

  export type EnumSnapshotStatusFieldUpdateOperationsInput = {
    set?: $Enums.SnapshotStatus
  }

  export type EbookUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<EbookCreateWithoutSnapshotsInput, EbookUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: EbookCreateOrConnectWithoutSnapshotsInput
    upsert?: EbookUpsertWithoutSnapshotsInput
    connect?: EbookWhereUniqueInput
    update?: XOR<XOR<EbookUpdateToOneWithWhereWithoutSnapshotsInput, EbookUpdateWithoutSnapshotsInput>, EbookUncheckedUpdateWithoutSnapshotsInput>
  }

  export type SnapshotFileUpdateOneWithoutSnapshotNestedInput = {
    create?: XOR<SnapshotFileCreateWithoutSnapshotInput, SnapshotFileUncheckedCreateWithoutSnapshotInput>
    connectOrCreate?: SnapshotFileCreateOrConnectWithoutSnapshotInput
    upsert?: SnapshotFileUpsertWithoutSnapshotInput
    disconnect?: SnapshotFileWhereInput | boolean
    delete?: SnapshotFileWhereInput | boolean
    connect?: SnapshotFileWhereUniqueInput
    update?: XOR<XOR<SnapshotFileUpdateToOneWithWhereWithoutSnapshotInput, SnapshotFileUpdateWithoutSnapshotInput>, SnapshotFileUncheckedUpdateWithoutSnapshotInput>
  }

  export type EbookUpdateOneWithoutCurrentSnapshotNestedInput = {
    create?: XOR<EbookCreateWithoutCurrentSnapshotInput, EbookUncheckedCreateWithoutCurrentSnapshotInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCurrentSnapshotInput
    upsert?: EbookUpsertWithoutCurrentSnapshotInput
    disconnect?: EbookWhereInput | boolean
    delete?: EbookWhereInput | boolean
    connect?: EbookWhereUniqueInput
    update?: XOR<XOR<EbookUpdateToOneWithWhereWithoutCurrentSnapshotInput, EbookUpdateWithoutCurrentSnapshotInput>, EbookUncheckedUpdateWithoutCurrentSnapshotInput>
  }

  export type SnapshotFileUncheckedUpdateOneWithoutSnapshotNestedInput = {
    create?: XOR<SnapshotFileCreateWithoutSnapshotInput, SnapshotFileUncheckedCreateWithoutSnapshotInput>
    connectOrCreate?: SnapshotFileCreateOrConnectWithoutSnapshotInput
    upsert?: SnapshotFileUpsertWithoutSnapshotInput
    disconnect?: SnapshotFileWhereInput | boolean
    delete?: SnapshotFileWhereInput | boolean
    connect?: SnapshotFileWhereUniqueInput
    update?: XOR<XOR<SnapshotFileUpdateToOneWithWhereWithoutSnapshotInput, SnapshotFileUpdateWithoutSnapshotInput>, SnapshotFileUncheckedUpdateWithoutSnapshotInput>
  }

  export type EbookUncheckedUpdateOneWithoutCurrentSnapshotNestedInput = {
    create?: XOR<EbookCreateWithoutCurrentSnapshotInput, EbookUncheckedCreateWithoutCurrentSnapshotInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCurrentSnapshotInput
    upsert?: EbookUpsertWithoutCurrentSnapshotInput
    disconnect?: EbookWhereInput | boolean
    delete?: EbookWhereInput | boolean
    connect?: EbookWhereUniqueInput
    update?: XOR<XOR<EbookUpdateToOneWithWhereWithoutCurrentSnapshotInput, EbookUpdateWithoutCurrentSnapshotInput>, EbookUncheckedUpdateWithoutCurrentSnapshotInput>
  }

  export type SnapshotCreateNestedOneWithoutFileInput = {
    create?: XOR<SnapshotCreateWithoutFileInput, SnapshotUncheckedCreateWithoutFileInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutFileInput
    connect?: SnapshotWhereUniqueInput
  }

  export type SnapshotUpdateOneRequiredWithoutFileNestedInput = {
    create?: XOR<SnapshotCreateWithoutFileInput, SnapshotUncheckedCreateWithoutFileInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutFileInput
    upsert?: SnapshotUpsertWithoutFileInput
    connect?: SnapshotWhereUniqueInput
    update?: XOR<XOR<SnapshotUpdateToOneWithWhereWithoutFileInput, SnapshotUpdateWithoutFileInput>, SnapshotUncheckedUpdateWithoutFileInput>
  }

  export type UserCreateNestedOneWithoutUploadHandshakesInput = {
    create?: XOR<UserCreateWithoutUploadHandshakesInput, UserUncheckedCreateWithoutUploadHandshakesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadHandshakesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumUploadHandshakeStatusFieldUpdateOperationsInput = {
    set?: $Enums.UploadHandshakeStatus
  }

  export type UserUpdateOneRequiredWithoutUploadHandshakesNestedInput = {
    create?: XOR<UserCreateWithoutUploadHandshakesInput, UserUncheckedCreateWithoutUploadHandshakesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadHandshakesInput
    upsert?: UserUpsertWithoutUploadHandshakesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadHandshakesInput, UserUpdateWithoutUploadHandshakesInput>, UserUncheckedUpdateWithoutUploadHandshakesInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type EbookCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EbookCreateWithoutOwnerInput, EbookUncheckedCreateWithoutOwnerInput> | EbookCreateWithoutOwnerInput[] | EbookUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutOwnerInput | EbookCreateOrConnectWithoutOwnerInput[]
    createMany?: EbookCreateManyOwnerInputEnvelope
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
  }

  export type AssetCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput> | AssetCreateWithoutOwnerInput[] | AssetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutOwnerInput | AssetCreateOrConnectWithoutOwnerInput[]
    createMany?: AssetCreateManyOwnerInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type UploadHandshakeCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UploadHandshakeCreateWithoutOwnerInput, UploadHandshakeUncheckedCreateWithoutOwnerInput> | UploadHandshakeCreateWithoutOwnerInput[] | UploadHandshakeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UploadHandshakeCreateOrConnectWithoutOwnerInput | UploadHandshakeCreateOrConnectWithoutOwnerInput[]
    createMany?: UploadHandshakeCreateManyOwnerInputEnvelope
    connect?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
  }

  export type EbookCollaboratorCreateNestedManyWithoutUserInput = {
    create?: XOR<EbookCollaboratorCreateWithoutUserInput, EbookCollaboratorUncheckedCreateWithoutUserInput> | EbookCollaboratorCreateWithoutUserInput[] | EbookCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutUserInput | EbookCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: EbookCollaboratorCreateManyUserInputEnvelope
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
  }

  export type EbookCustomRoleCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EbookCustomRoleCreateWithoutCreatedByInput, EbookCustomRoleUncheckedCreateWithoutCreatedByInput> | EbookCustomRoleCreateWithoutCreatedByInput[] | EbookCustomRoleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutCreatedByInput | EbookCustomRoleCreateOrConnectWithoutCreatedByInput[]
    createMany?: EbookCustomRoleCreateManyCreatedByInputEnvelope
    connect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type EbookUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EbookCreateWithoutOwnerInput, EbookUncheckedCreateWithoutOwnerInput> | EbookCreateWithoutOwnerInput[] | EbookUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutOwnerInput | EbookCreateOrConnectWithoutOwnerInput[]
    createMany?: EbookCreateManyOwnerInputEnvelope
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput> | AssetCreateWithoutOwnerInput[] | AssetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutOwnerInput | AssetCreateOrConnectWithoutOwnerInput[]
    createMany?: AssetCreateManyOwnerInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type UploadHandshakeUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UploadHandshakeCreateWithoutOwnerInput, UploadHandshakeUncheckedCreateWithoutOwnerInput> | UploadHandshakeCreateWithoutOwnerInput[] | UploadHandshakeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UploadHandshakeCreateOrConnectWithoutOwnerInput | UploadHandshakeCreateOrConnectWithoutOwnerInput[]
    createMany?: UploadHandshakeCreateManyOwnerInputEnvelope
    connect?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
  }

  export type EbookCollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EbookCollaboratorCreateWithoutUserInput, EbookCollaboratorUncheckedCreateWithoutUserInput> | EbookCollaboratorCreateWithoutUserInput[] | EbookCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutUserInput | EbookCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: EbookCollaboratorCreateManyUserInputEnvelope
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
  }

  export type EbookCustomRoleUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EbookCustomRoleCreateWithoutCreatedByInput, EbookCustomRoleUncheckedCreateWithoutCreatedByInput> | EbookCustomRoleCreateWithoutCreatedByInput[] | EbookCustomRoleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutCreatedByInput | EbookCustomRoleCreateOrConnectWithoutCreatedByInput[]
    createMany?: EbookCustomRoleCreateManyCreatedByInputEnvelope
    connect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type EbookUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EbookCreateWithoutOwnerInput, EbookUncheckedCreateWithoutOwnerInput> | EbookCreateWithoutOwnerInput[] | EbookUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutOwnerInput | EbookCreateOrConnectWithoutOwnerInput[]
    upsert?: EbookUpsertWithWhereUniqueWithoutOwnerInput | EbookUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EbookCreateManyOwnerInputEnvelope
    set?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    disconnect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    delete?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    update?: EbookUpdateWithWhereUniqueWithoutOwnerInput | EbookUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EbookUpdateManyWithWhereWithoutOwnerInput | EbookUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EbookScalarWhereInput | EbookScalarWhereInput[]
  }

  export type AssetUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput> | AssetCreateWithoutOwnerInput[] | AssetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutOwnerInput | AssetCreateOrConnectWithoutOwnerInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutOwnerInput | AssetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AssetCreateManyOwnerInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutOwnerInput | AssetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutOwnerInput | AssetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type UploadHandshakeUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UploadHandshakeCreateWithoutOwnerInput, UploadHandshakeUncheckedCreateWithoutOwnerInput> | UploadHandshakeCreateWithoutOwnerInput[] | UploadHandshakeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UploadHandshakeCreateOrConnectWithoutOwnerInput | UploadHandshakeCreateOrConnectWithoutOwnerInput[]
    upsert?: UploadHandshakeUpsertWithWhereUniqueWithoutOwnerInput | UploadHandshakeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UploadHandshakeCreateManyOwnerInputEnvelope
    set?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
    disconnect?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
    delete?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
    connect?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
    update?: UploadHandshakeUpdateWithWhereUniqueWithoutOwnerInput | UploadHandshakeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UploadHandshakeUpdateManyWithWhereWithoutOwnerInput | UploadHandshakeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UploadHandshakeScalarWhereInput | UploadHandshakeScalarWhereInput[]
  }

  export type EbookCollaboratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<EbookCollaboratorCreateWithoutUserInput, EbookCollaboratorUncheckedCreateWithoutUserInput> | EbookCollaboratorCreateWithoutUserInput[] | EbookCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutUserInput | EbookCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: EbookCollaboratorUpsertWithWhereUniqueWithoutUserInput | EbookCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EbookCollaboratorCreateManyUserInputEnvelope
    set?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    disconnect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    delete?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    update?: EbookCollaboratorUpdateWithWhereUniqueWithoutUserInput | EbookCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EbookCollaboratorUpdateManyWithWhereWithoutUserInput | EbookCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EbookCollaboratorScalarWhereInput | EbookCollaboratorScalarWhereInput[]
  }

  export type EbookCustomRoleUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EbookCustomRoleCreateWithoutCreatedByInput, EbookCustomRoleUncheckedCreateWithoutCreatedByInput> | EbookCustomRoleCreateWithoutCreatedByInput[] | EbookCustomRoleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutCreatedByInput | EbookCustomRoleCreateOrConnectWithoutCreatedByInput[]
    upsert?: EbookCustomRoleUpsertWithWhereUniqueWithoutCreatedByInput | EbookCustomRoleUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EbookCustomRoleCreateManyCreatedByInputEnvelope
    set?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    disconnect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    delete?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    connect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    update?: EbookCustomRoleUpdateWithWhereUniqueWithoutCreatedByInput | EbookCustomRoleUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EbookCustomRoleUpdateManyWithWhereWithoutCreatedByInput | EbookCustomRoleUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EbookCustomRoleScalarWhereInput | EbookCustomRoleScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type EbookUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EbookCreateWithoutOwnerInput, EbookUncheckedCreateWithoutOwnerInput> | EbookCreateWithoutOwnerInput[] | EbookUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutOwnerInput | EbookCreateOrConnectWithoutOwnerInput[]
    upsert?: EbookUpsertWithWhereUniqueWithoutOwnerInput | EbookUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EbookCreateManyOwnerInputEnvelope
    set?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    disconnect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    delete?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    update?: EbookUpdateWithWhereUniqueWithoutOwnerInput | EbookUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EbookUpdateManyWithWhereWithoutOwnerInput | EbookUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EbookScalarWhereInput | EbookScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput> | AssetCreateWithoutOwnerInput[] | AssetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutOwnerInput | AssetCreateOrConnectWithoutOwnerInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutOwnerInput | AssetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AssetCreateManyOwnerInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutOwnerInput | AssetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutOwnerInput | AssetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type UploadHandshakeUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UploadHandshakeCreateWithoutOwnerInput, UploadHandshakeUncheckedCreateWithoutOwnerInput> | UploadHandshakeCreateWithoutOwnerInput[] | UploadHandshakeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UploadHandshakeCreateOrConnectWithoutOwnerInput | UploadHandshakeCreateOrConnectWithoutOwnerInput[]
    upsert?: UploadHandshakeUpsertWithWhereUniqueWithoutOwnerInput | UploadHandshakeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UploadHandshakeCreateManyOwnerInputEnvelope
    set?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
    disconnect?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
    delete?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
    connect?: UploadHandshakeWhereUniqueInput | UploadHandshakeWhereUniqueInput[]
    update?: UploadHandshakeUpdateWithWhereUniqueWithoutOwnerInput | UploadHandshakeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UploadHandshakeUpdateManyWithWhereWithoutOwnerInput | UploadHandshakeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UploadHandshakeScalarWhereInput | UploadHandshakeScalarWhereInput[]
  }

  export type EbookCollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EbookCollaboratorCreateWithoutUserInput, EbookCollaboratorUncheckedCreateWithoutUserInput> | EbookCollaboratorCreateWithoutUserInput[] | EbookCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EbookCollaboratorCreateOrConnectWithoutUserInput | EbookCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: EbookCollaboratorUpsertWithWhereUniqueWithoutUserInput | EbookCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EbookCollaboratorCreateManyUserInputEnvelope
    set?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    disconnect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    delete?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    connect?: EbookCollaboratorWhereUniqueInput | EbookCollaboratorWhereUniqueInput[]
    update?: EbookCollaboratorUpdateWithWhereUniqueWithoutUserInput | EbookCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EbookCollaboratorUpdateManyWithWhereWithoutUserInput | EbookCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EbookCollaboratorScalarWhereInput | EbookCollaboratorScalarWhereInput[]
  }

  export type EbookCustomRoleUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EbookCustomRoleCreateWithoutCreatedByInput, EbookCustomRoleUncheckedCreateWithoutCreatedByInput> | EbookCustomRoleCreateWithoutCreatedByInput[] | EbookCustomRoleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EbookCustomRoleCreateOrConnectWithoutCreatedByInput | EbookCustomRoleCreateOrConnectWithoutCreatedByInput[]
    upsert?: EbookCustomRoleUpsertWithWhereUniqueWithoutCreatedByInput | EbookCustomRoleUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EbookCustomRoleCreateManyCreatedByInputEnvelope
    set?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    disconnect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    delete?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    connect?: EbookCustomRoleWhereUniqueInput | EbookCustomRoleWhereUniqueInput[]
    update?: EbookCustomRoleUpdateWithWhereUniqueWithoutCreatedByInput | EbookCustomRoleUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EbookCustomRoleUpdateManyWithWhereWithoutCreatedByInput | EbookCustomRoleUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EbookCustomRoleScalarWhereInput | EbookCustomRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAssetReferenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetReferenceType | EnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetReferenceType[] | ListEnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetReferenceType[] | ListEnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetReferenceTypeFilter<$PrismaModel> | $Enums.AssetReferenceType
  }

  export type NestedEnumAssetReferenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetReferenceType | EnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetReferenceType[] | ListEnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetReferenceType[] | ListEnumAssetReferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetReferenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetReferenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetReferenceTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetReferenceTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, "path">>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, "path">>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCollaborationRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationRole | EnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.CollaborationRole[] | ListEnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CollaborationRole[] | ListEnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCollaborationRoleNullableFilter<$PrismaModel> | $Enums.CollaborationRole | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCollaborationRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationRole | EnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.CollaborationRole[] | ListEnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CollaborationRole[] | ListEnumCollaborationRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCollaborationRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCollaborationRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumCollaborationRoleNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSnapshotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotStatus | EnumSnapshotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotStatusFilter<$PrismaModel> | $Enums.SnapshotStatus
  }

  export type NestedEnumSnapshotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SnapshotStatus | EnumSnapshotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SnapshotStatus[] | ListEnumSnapshotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSnapshotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SnapshotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSnapshotStatusFilter<$PrismaModel>
    _max?: NestedEnumSnapshotStatusFilter<$PrismaModel>
  }

  export type NestedEnumUploadHandshakeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadHandshakeStatus | EnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadHandshakeStatus[] | ListEnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadHandshakeStatus[] | ListEnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadHandshakeStatusFilter<$PrismaModel> | $Enums.UploadHandshakeStatus
  }

  export type NestedEnumUploadHandshakeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadHandshakeStatus | EnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadHandshakeStatus[] | ListEnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadHandshakeStatus[] | ListEnumUploadHandshakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadHandshakeStatusWithAggregatesFilter<$PrismaModel> | $Enums.UploadHandshakeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUploadHandshakeStatusFilter<$PrismaModel>
    _max?: NestedEnumUploadHandshakeStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutAssetsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    ebooks?: EbookCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAssetsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    ebooks?: EbookUncheckedCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeUncheckedCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorUncheckedCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAssetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
  }

  export type ChapterAssetReferenceCreateWithoutAssetInput = {
    id?: string
    type: $Enums.AssetReferenceType
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutAssetReferencesInput
  }

  export type ChapterAssetReferenceUncheckedCreateWithoutAssetInput = {
    id?: string
    chapterId: string
    type: $Enums.AssetReferenceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterAssetReferenceCreateOrConnectWithoutAssetInput = {
    where: ChapterAssetReferenceWhereUniqueInput
    create: XOR<ChapterAssetReferenceCreateWithoutAssetInput, ChapterAssetReferenceUncheckedCreateWithoutAssetInput>
  }

  export type ChapterAssetReferenceCreateManyAssetInputEnvelope = {
    data: ChapterAssetReferenceCreateManyAssetInput | ChapterAssetReferenceCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type EbookCreateWithoutCoverAssetInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEbooksInput
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutCoverAssetInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutCoverAssetInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutCoverAssetInput, EbookUncheckedCreateWithoutCoverAssetInput>
  }

  export type EbookCreateManyCoverAssetInputEnvelope = {
    data: EbookCreateManyCoverAssetInput | EbookCreateManyCoverAssetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAssetsInput = {
    update: XOR<UserUpdateWithoutAssetsInput, UserUncheckedUpdateWithoutAssetsInput>
    create: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssetsInput, UserUncheckedUpdateWithoutAssetsInput>
  }

  export type UserUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    ebooks?: EbookUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    ebooks?: EbookUncheckedUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUncheckedUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ChapterAssetReferenceUpsertWithWhereUniqueWithoutAssetInput = {
    where: ChapterAssetReferenceWhereUniqueInput
    update: XOR<ChapterAssetReferenceUpdateWithoutAssetInput, ChapterAssetReferenceUncheckedUpdateWithoutAssetInput>
    create: XOR<ChapterAssetReferenceCreateWithoutAssetInput, ChapterAssetReferenceUncheckedCreateWithoutAssetInput>
  }

  export type ChapterAssetReferenceUpdateWithWhereUniqueWithoutAssetInput = {
    where: ChapterAssetReferenceWhereUniqueInput
    data: XOR<ChapterAssetReferenceUpdateWithoutAssetInput, ChapterAssetReferenceUncheckedUpdateWithoutAssetInput>
  }

  export type ChapterAssetReferenceUpdateManyWithWhereWithoutAssetInput = {
    where: ChapterAssetReferenceScalarWhereInput
    data: XOR<ChapterAssetReferenceUpdateManyMutationInput, ChapterAssetReferenceUncheckedUpdateManyWithoutAssetInput>
  }

  export type ChapterAssetReferenceScalarWhereInput = {
    AND?: ChapterAssetReferenceScalarWhereInput | ChapterAssetReferenceScalarWhereInput[]
    OR?: ChapterAssetReferenceScalarWhereInput[]
    NOT?: ChapterAssetReferenceScalarWhereInput | ChapterAssetReferenceScalarWhereInput[]
    id?: StringFilter<"ChapterAssetReference"> | string
    assetId?: StringFilter<"ChapterAssetReference"> | string
    chapterId?: StringFilter<"ChapterAssetReference"> | string
    type?: EnumAssetReferenceTypeFilter<"ChapterAssetReference"> | $Enums.AssetReferenceType
    createdAt?: DateTimeFilter<"ChapterAssetReference"> | Date | string
    updatedAt?: DateTimeFilter<"ChapterAssetReference"> | Date | string
  }

  export type EbookUpsertWithWhereUniqueWithoutCoverAssetInput = {
    where: EbookWhereUniqueInput
    update: XOR<EbookUpdateWithoutCoverAssetInput, EbookUncheckedUpdateWithoutCoverAssetInput>
    create: XOR<EbookCreateWithoutCoverAssetInput, EbookUncheckedCreateWithoutCoverAssetInput>
  }

  export type EbookUpdateWithWhereUniqueWithoutCoverAssetInput = {
    where: EbookWhereUniqueInput
    data: XOR<EbookUpdateWithoutCoverAssetInput, EbookUncheckedUpdateWithoutCoverAssetInput>
  }

  export type EbookUpdateManyWithWhereWithoutCoverAssetInput = {
    where: EbookScalarWhereInput
    data: XOR<EbookUpdateManyMutationInput, EbookUncheckedUpdateManyWithoutCoverAssetInput>
  }

  export type EbookScalarWhereInput = {
    AND?: EbookScalarWhereInput | EbookScalarWhereInput[]
    OR?: EbookScalarWhereInput[]
    NOT?: EbookScalarWhereInput | EbookScalarWhereInput[]
    id?: StringFilter<"Ebook"> | string
    title?: StringFilter<"Ebook"> | string
    subtitle?: StringNullableFilter<"Ebook"> | string | null
    shortDescription?: StringNullableFilter<"Ebook"> | string | null
    ownerId?: StringFilter<"Ebook"> | string
    currentSnapshotId?: StringNullableFilter<"Ebook"> | string | null
    coverAssetId?: StringNullableFilter<"Ebook"> | string | null
    createdAt?: DateTimeFilter<"Ebook"> | Date | string
    updatedAt?: DateTimeFilter<"Ebook"> | Date | string
  }

  export type AssetCreateWithoutChapterReferencesInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAssetsInput
    ebookCoverImages?: EbookCreateNestedManyWithoutCoverAssetInput
  }

  export type AssetUncheckedCreateWithoutChapterReferencesInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    ebookCoverImages?: EbookUncheckedCreateNestedManyWithoutCoverAssetInput
  }

  export type AssetCreateOrConnectWithoutChapterReferencesInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutChapterReferencesInput, AssetUncheckedCreateWithoutChapterReferencesInput>
  }

  export type ChapterCreateWithoutAssetReferencesInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutChaptersInput
    collaboratorAccess?: EbookCollaboratorChapterAccessCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutAssetReferencesInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebookId: string
    collaboratorAccess?: EbookCollaboratorChapterAccessUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutAssetReferencesInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutAssetReferencesInput, ChapterUncheckedCreateWithoutAssetReferencesInput>
  }

  export type AssetUpsertWithoutChapterReferencesInput = {
    update: XOR<AssetUpdateWithoutChapterReferencesInput, AssetUncheckedUpdateWithoutChapterReferencesInput>
    create: XOR<AssetCreateWithoutChapterReferencesInput, AssetUncheckedCreateWithoutChapterReferencesInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutChapterReferencesInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutChapterReferencesInput, AssetUncheckedUpdateWithoutChapterReferencesInput>
  }

  export type AssetUpdateWithoutChapterReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAssetsNestedInput
    ebookCoverImages?: EbookUpdateManyWithoutCoverAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutChapterReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    ebookCoverImages?: EbookUncheckedUpdateManyWithoutCoverAssetNestedInput
  }

  export type ChapterUpsertWithoutAssetReferencesInput = {
    update: XOR<ChapterUpdateWithoutAssetReferencesInput, ChapterUncheckedUpdateWithoutAssetReferencesInput>
    create: XOR<ChapterCreateWithoutAssetReferencesInput, ChapterUncheckedCreateWithoutAssetReferencesInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutAssetReferencesInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutAssetReferencesInput, ChapterUncheckedUpdateWithoutAssetReferencesInput>
  }

  export type ChapterUpdateWithoutAssetReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutChaptersNestedInput
    collaboratorAccess?: EbookCollaboratorChapterAccessUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutAssetReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebookId?: StringFieldUpdateOperationsInput | string
    collaboratorAccess?: EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type EbookCreateWithoutChaptersInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEbooksInput
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    coverAsset?: AssetCreateNestedOneWithoutEbookCoverImagesInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutChaptersInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    coverAssetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutChaptersInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutChaptersInput, EbookUncheckedCreateWithoutChaptersInput>
  }

  export type ChapterAssetReferenceCreateWithoutChapterInput = {
    id?: string
    type: $Enums.AssetReferenceType
    createdAt?: Date | string
    updatedAt?: Date | string
    asset: AssetCreateNestedOneWithoutChapterReferencesInput
  }

  export type ChapterAssetReferenceUncheckedCreateWithoutChapterInput = {
    id?: string
    assetId: string
    type: $Enums.AssetReferenceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterAssetReferenceCreateOrConnectWithoutChapterInput = {
    where: ChapterAssetReferenceWhereUniqueInput
    create: XOR<ChapterAssetReferenceCreateWithoutChapterInput, ChapterAssetReferenceUncheckedCreateWithoutChapterInput>
  }

  export type ChapterAssetReferenceCreateManyChapterInputEnvelope = {
    data: ChapterAssetReferenceCreateManyChapterInput | ChapterAssetReferenceCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type EbookCollaboratorChapterAccessCreateWithoutChapterInput = {
    id?: string
    createdAt?: Date | string
    collaborator: EbookCollaboratorCreateNestedOneWithoutChapterAccessInput
  }

  export type EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput = {
    id?: string
    collaboratorId: string
    createdAt?: Date | string
  }

  export type EbookCollaboratorChapterAccessCreateOrConnectWithoutChapterInput = {
    where: EbookCollaboratorChapterAccessWhereUniqueInput
    create: XOR<EbookCollaboratorChapterAccessCreateWithoutChapterInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput>
  }

  export type EbookCollaboratorChapterAccessCreateManyChapterInputEnvelope = {
    data: EbookCollaboratorChapterAccessCreateManyChapterInput | EbookCollaboratorChapterAccessCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type EbookUpsertWithoutChaptersInput = {
    update: XOR<EbookUpdateWithoutChaptersInput, EbookUncheckedUpdateWithoutChaptersInput>
    create: XOR<EbookCreateWithoutChaptersInput, EbookUncheckedCreateWithoutChaptersInput>
    where?: EbookWhereInput
  }

  export type EbookUpdateToOneWithWhereWithoutChaptersInput = {
    where?: EbookWhereInput
    data: XOR<EbookUpdateWithoutChaptersInput, EbookUncheckedUpdateWithoutChaptersInput>
  }

  export type EbookUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    coverAsset?: AssetUpdateOneWithoutEbookCoverImagesNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type ChapterAssetReferenceUpsertWithWhereUniqueWithoutChapterInput = {
    where: ChapterAssetReferenceWhereUniqueInput
    update: XOR<ChapterAssetReferenceUpdateWithoutChapterInput, ChapterAssetReferenceUncheckedUpdateWithoutChapterInput>
    create: XOR<ChapterAssetReferenceCreateWithoutChapterInput, ChapterAssetReferenceUncheckedCreateWithoutChapterInput>
  }

  export type ChapterAssetReferenceUpdateWithWhereUniqueWithoutChapterInput = {
    where: ChapterAssetReferenceWhereUniqueInput
    data: XOR<ChapterAssetReferenceUpdateWithoutChapterInput, ChapterAssetReferenceUncheckedUpdateWithoutChapterInput>
  }

  export type ChapterAssetReferenceUpdateManyWithWhereWithoutChapterInput = {
    where: ChapterAssetReferenceScalarWhereInput
    data: XOR<ChapterAssetReferenceUpdateManyMutationInput, ChapterAssetReferenceUncheckedUpdateManyWithoutChapterInput>
  }

  export type EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutChapterInput = {
    where: EbookCollaboratorChapterAccessWhereUniqueInput
    update: XOR<EbookCollaboratorChapterAccessUpdateWithoutChapterInput, EbookCollaboratorChapterAccessUncheckedUpdateWithoutChapterInput>
    create: XOR<EbookCollaboratorChapterAccessCreateWithoutChapterInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutChapterInput>
  }

  export type EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutChapterInput = {
    where: EbookCollaboratorChapterAccessWhereUniqueInput
    data: XOR<EbookCollaboratorChapterAccessUpdateWithoutChapterInput, EbookCollaboratorChapterAccessUncheckedUpdateWithoutChapterInput>
  }

  export type EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutChapterInput = {
    where: EbookCollaboratorChapterAccessScalarWhereInput
    data: XOR<EbookCollaboratorChapterAccessUpdateManyMutationInput, EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutChapterInput>
  }

  export type EbookCollaboratorChapterAccessScalarWhereInput = {
    AND?: EbookCollaboratorChapterAccessScalarWhereInput | EbookCollaboratorChapterAccessScalarWhereInput[]
    OR?: EbookCollaboratorChapterAccessScalarWhereInput[]
    NOT?: EbookCollaboratorChapterAccessScalarWhereInput | EbookCollaboratorChapterAccessScalarWhereInput[]
    id?: StringFilter<"EbookCollaboratorChapterAccess"> | string
    collaboratorId?: StringFilter<"EbookCollaboratorChapterAccess"> | string
    chapterId?: StringFilter<"EbookCollaboratorChapterAccess"> | string
    createdAt?: DateTimeFilter<"EbookCollaboratorChapterAccess"> | Date | string
  }

  export type EbookCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEbooksInput
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    coverAsset?: AssetCreateNestedOneWithoutEbookCoverImagesInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    coverAssetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutCollaboratorsInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutCollaboratorsInput, EbookUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserCreateWithoutEbookCollaborationsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    ebooks?: EbookCreateNestedManyWithoutOwnerInput
    assets?: AssetCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeCreateNestedManyWithoutOwnerInput
    createdCustomRoles?: EbookCustomRoleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutEbookCollaborationsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    ebooks?: EbookUncheckedCreateNestedManyWithoutOwnerInput
    assets?: AssetUncheckedCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeUncheckedCreateNestedManyWithoutOwnerInput
    createdCustomRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutEbookCollaborationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEbookCollaborationsInput, UserUncheckedCreateWithoutEbookCollaborationsInput>
  }

  export type EbookCustomRoleCreateWithoutCollaboratorsInput = {
    id?: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutCustomRolesInput
    createdBy: UserCreateNestedOneWithoutCreatedCustomRolesInput
  }

  export type EbookCustomRoleUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    ebookId: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCustomRoleCreateOrConnectWithoutCollaboratorsInput = {
    where: EbookCustomRoleWhereUniqueInput
    create: XOR<EbookCustomRoleCreateWithoutCollaboratorsInput, EbookCustomRoleUncheckedCreateWithoutCollaboratorsInput>
  }

  export type EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput = {
    id?: string
    createdAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutCollaboratorAccessInput
  }

  export type EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput = {
    id?: string
    chapterId: string
    createdAt?: Date | string
  }

  export type EbookCollaboratorChapterAccessCreateOrConnectWithoutCollaboratorInput = {
    where: EbookCollaboratorChapterAccessWhereUniqueInput
    create: XOR<EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput>
  }

  export type EbookCollaboratorChapterAccessCreateManyCollaboratorInputEnvelope = {
    data: EbookCollaboratorChapterAccessCreateManyCollaboratorInput | EbookCollaboratorChapterAccessCreateManyCollaboratorInput[]
    skipDuplicates?: boolean
  }

  export type EbookUpsertWithoutCollaboratorsInput = {
    update: XOR<EbookUpdateWithoutCollaboratorsInput, EbookUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<EbookCreateWithoutCollaboratorsInput, EbookUncheckedCreateWithoutCollaboratorsInput>
    where?: EbookWhereInput
  }

  export type EbookUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: EbookWhereInput
    data: XOR<EbookUpdateWithoutCollaboratorsInput, EbookUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type EbookUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    coverAsset?: AssetUpdateOneWithoutEbookCoverImagesNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type UserUpsertWithoutEbookCollaborationsInput = {
    update: XOR<UserUpdateWithoutEbookCollaborationsInput, UserUncheckedUpdateWithoutEbookCollaborationsInput>
    create: XOR<UserCreateWithoutEbookCollaborationsInput, UserUncheckedCreateWithoutEbookCollaborationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEbookCollaborationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEbookCollaborationsInput, UserUncheckedUpdateWithoutEbookCollaborationsInput>
  }

  export type UserUpdateWithoutEbookCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    ebooks?: EbookUpdateManyWithoutOwnerNestedInput
    assets?: AssetUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUpdateManyWithoutOwnerNestedInput
    createdCustomRoles?: EbookCustomRoleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEbookCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    ebooks?: EbookUncheckedUpdateManyWithoutOwnerNestedInput
    assets?: AssetUncheckedUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUncheckedUpdateManyWithoutOwnerNestedInput
    createdCustomRoles?: EbookCustomRoleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type EbookCustomRoleUpsertWithoutCollaboratorsInput = {
    update: XOR<EbookCustomRoleUpdateWithoutCollaboratorsInput, EbookCustomRoleUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<EbookCustomRoleCreateWithoutCollaboratorsInput, EbookCustomRoleUncheckedCreateWithoutCollaboratorsInput>
    where?: EbookCustomRoleWhereInput
  }

  export type EbookCustomRoleUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: EbookCustomRoleWhereInput
    data: XOR<EbookCustomRoleUpdateWithoutCollaboratorsInput, EbookCustomRoleUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type EbookCustomRoleUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutCustomRolesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedCustomRolesNestedInput
  }

  export type EbookCustomRoleUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorChapterAccessUpsertWithWhereUniqueWithoutCollaboratorInput = {
    where: EbookCollaboratorChapterAccessWhereUniqueInput
    update: XOR<EbookCollaboratorChapterAccessUpdateWithoutCollaboratorInput, EbookCollaboratorChapterAccessUncheckedUpdateWithoutCollaboratorInput>
    create: XOR<EbookCollaboratorChapterAccessCreateWithoutCollaboratorInput, EbookCollaboratorChapterAccessUncheckedCreateWithoutCollaboratorInput>
  }

  export type EbookCollaboratorChapterAccessUpdateWithWhereUniqueWithoutCollaboratorInput = {
    where: EbookCollaboratorChapterAccessWhereUniqueInput
    data: XOR<EbookCollaboratorChapterAccessUpdateWithoutCollaboratorInput, EbookCollaboratorChapterAccessUncheckedUpdateWithoutCollaboratorInput>
  }

  export type EbookCollaboratorChapterAccessUpdateManyWithWhereWithoutCollaboratorInput = {
    where: EbookCollaboratorChapterAccessScalarWhereInput
    data: XOR<EbookCollaboratorChapterAccessUpdateManyMutationInput, EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutCollaboratorInput>
  }

  export type EbookCollaboratorCreateWithoutChapterAccessInput = {
    id?: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutCollaboratorsInput
    user: UserCreateNestedOneWithoutEbookCollaborationsInput
    customRole?: EbookCustomRoleCreateNestedOneWithoutCollaboratorsInput
  }

  export type EbookCollaboratorUncheckedCreateWithoutChapterAccessInput = {
    id?: string
    ebookId: string
    userId: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    customRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCollaboratorCreateOrConnectWithoutChapterAccessInput = {
    where: EbookCollaboratorWhereUniqueInput
    create: XOR<EbookCollaboratorCreateWithoutChapterAccessInput, EbookCollaboratorUncheckedCreateWithoutChapterAccessInput>
  }

  export type ChapterCreateWithoutCollaboratorAccessInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutChaptersInput
    assetReferences?: ChapterAssetReferenceCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutCollaboratorAccessInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebookId: string
    assetReferences?: ChapterAssetReferenceUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutCollaboratorAccessInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutCollaboratorAccessInput, ChapterUncheckedCreateWithoutCollaboratorAccessInput>
  }

  export type EbookCollaboratorUpsertWithoutChapterAccessInput = {
    update: XOR<EbookCollaboratorUpdateWithoutChapterAccessInput, EbookCollaboratorUncheckedUpdateWithoutChapterAccessInput>
    create: XOR<EbookCollaboratorCreateWithoutChapterAccessInput, EbookCollaboratorUncheckedCreateWithoutChapterAccessInput>
    where?: EbookCollaboratorWhereInput
  }

  export type EbookCollaboratorUpdateToOneWithWhereWithoutChapterAccessInput = {
    where?: EbookCollaboratorWhereInput
    data: XOR<EbookCollaboratorUpdateWithoutChapterAccessInput, EbookCollaboratorUncheckedUpdateWithoutChapterAccessInput>
  }

  export type EbookCollaboratorUpdateWithoutChapterAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutCollaboratorsNestedInput
    user?: UserUpdateOneRequiredWithoutEbookCollaborationsNestedInput
    customRole?: EbookCustomRoleUpdateOneWithoutCollaboratorsNestedInput
  }

  export type EbookCollaboratorUncheckedUpdateWithoutChapterAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    customRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUpsertWithoutCollaboratorAccessInput = {
    update: XOR<ChapterUpdateWithoutCollaboratorAccessInput, ChapterUncheckedUpdateWithoutCollaboratorAccessInput>
    create: XOR<ChapterCreateWithoutCollaboratorAccessInput, ChapterUncheckedCreateWithoutCollaboratorAccessInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutCollaboratorAccessInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutCollaboratorAccessInput, ChapterUncheckedUpdateWithoutCollaboratorAccessInput>
  }

  export type ChapterUpdateWithoutCollaboratorAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutChaptersNestedInput
    assetReferences?: ChapterAssetReferenceUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutCollaboratorAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebookId?: StringFieldUpdateOperationsInput | string
    assetReferences?: ChapterAssetReferenceUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type EbookCreateWithoutCustomRolesInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEbooksInput
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    coverAsset?: AssetCreateNestedOneWithoutEbookCoverImagesInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutCustomRolesInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    coverAssetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutCustomRolesInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutCustomRolesInput, EbookUncheckedCreateWithoutCustomRolesInput>
  }

  export type UserCreateWithoutCreatedCustomRolesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    ebooks?: EbookCreateNestedManyWithoutOwnerInput
    assets?: AssetCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedCustomRolesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    ebooks?: EbookUncheckedCreateNestedManyWithoutOwnerInput
    assets?: AssetUncheckedCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeUncheckedCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedCustomRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCustomRolesInput, UserUncheckedCreateWithoutCreatedCustomRolesInput>
  }

  export type EbookCollaboratorCreateWithoutCustomRoleInput = {
    id?: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutCollaboratorsInput
    user: UserCreateNestedOneWithoutEbookCollaborationsInput
    chapterAccess?: EbookCollaboratorChapterAccessCreateNestedManyWithoutCollaboratorInput
  }

  export type EbookCollaboratorUncheckedCreateWithoutCustomRoleInput = {
    id?: string
    userId: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chapterAccess?: EbookCollaboratorChapterAccessUncheckedCreateNestedManyWithoutCollaboratorInput
  }

  export type EbookCollaboratorCreateOrConnectWithoutCustomRoleInput = {
    where: EbookCollaboratorWhereUniqueInput
    create: XOR<EbookCollaboratorCreateWithoutCustomRoleInput, EbookCollaboratorUncheckedCreateWithoutCustomRoleInput>
  }

  export type EbookCollaboratorCreateManyCustomRoleInputEnvelope = {
    data: EbookCollaboratorCreateManyCustomRoleInput | EbookCollaboratorCreateManyCustomRoleInput[]
    skipDuplicates?: boolean
  }

  export type EbookUpsertWithoutCustomRolesInput = {
    update: XOR<EbookUpdateWithoutCustomRolesInput, EbookUncheckedUpdateWithoutCustomRolesInput>
    create: XOR<EbookCreateWithoutCustomRolesInput, EbookUncheckedCreateWithoutCustomRolesInput>
    where?: EbookWhereInput
  }

  export type EbookUpdateToOneWithWhereWithoutCustomRolesInput = {
    where?: EbookWhereInput
    data: XOR<EbookUpdateWithoutCustomRolesInput, EbookUncheckedUpdateWithoutCustomRolesInput>
  }

  export type EbookUpdateWithoutCustomRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    coverAsset?: AssetUpdateOneWithoutEbookCoverImagesNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutCustomRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type UserUpsertWithoutCreatedCustomRolesInput = {
    update: XOR<UserUpdateWithoutCreatedCustomRolesInput, UserUncheckedUpdateWithoutCreatedCustomRolesInput>
    create: XOR<UserCreateWithoutCreatedCustomRolesInput, UserUncheckedCreateWithoutCreatedCustomRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCustomRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCustomRolesInput, UserUncheckedUpdateWithoutCreatedCustomRolesInput>
  }

  export type UserUpdateWithoutCreatedCustomRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    ebooks?: EbookUpdateManyWithoutOwnerNestedInput
    assets?: AssetUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCustomRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    ebooks?: EbookUncheckedUpdateManyWithoutOwnerNestedInput
    assets?: AssetUncheckedUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUncheckedUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EbookCollaboratorUpsertWithWhereUniqueWithoutCustomRoleInput = {
    where: EbookCollaboratorWhereUniqueInput
    update: XOR<EbookCollaboratorUpdateWithoutCustomRoleInput, EbookCollaboratorUncheckedUpdateWithoutCustomRoleInput>
    create: XOR<EbookCollaboratorCreateWithoutCustomRoleInput, EbookCollaboratorUncheckedCreateWithoutCustomRoleInput>
  }

  export type EbookCollaboratorUpdateWithWhereUniqueWithoutCustomRoleInput = {
    where: EbookCollaboratorWhereUniqueInput
    data: XOR<EbookCollaboratorUpdateWithoutCustomRoleInput, EbookCollaboratorUncheckedUpdateWithoutCustomRoleInput>
  }

  export type EbookCollaboratorUpdateManyWithWhereWithoutCustomRoleInput = {
    where: EbookCollaboratorScalarWhereInput
    data: XOR<EbookCollaboratorUpdateManyMutationInput, EbookCollaboratorUncheckedUpdateManyWithoutCustomRoleInput>
  }

  export type EbookCollaboratorScalarWhereInput = {
    AND?: EbookCollaboratorScalarWhereInput | EbookCollaboratorScalarWhereInput[]
    OR?: EbookCollaboratorScalarWhereInput[]
    NOT?: EbookCollaboratorScalarWhereInput | EbookCollaboratorScalarWhereInput[]
    id?: StringFilter<"EbookCollaborator"> | string
    ebookId?: StringFilter<"EbookCollaborator"> | string
    userId?: StringFilter<"EbookCollaborator"> | string
    role?: EnumCollaborationRoleNullableFilter<"EbookCollaborator"> | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFilter<"EbookCollaborator"> | boolean
    customRoleId?: StringNullableFilter<"EbookCollaborator"> | string | null
    createdAt?: DateTimeFilter<"EbookCollaborator"> | Date | string
    updatedAt?: DateTimeFilter<"EbookCollaborator"> | Date | string
  }

  export type UserCreateWithoutEbooksInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    assets?: AssetCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutEbooksInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    assets?: AssetUncheckedCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeUncheckedCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorUncheckedCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutEbooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEbooksInput, UserUncheckedCreateWithoutEbooksInput>
  }

  export type SnapshotCreateWithoutCurrentForEbookInput = {
    id?: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
    ebook: EbookCreateNestedOneWithoutSnapshotsInput
    file?: SnapshotFileCreateNestedOneWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutCurrentForEbookInput = {
    id?: string
    ebookId: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
    file?: SnapshotFileUncheckedCreateNestedOneWithoutSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutCurrentForEbookInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutCurrentForEbookInput, SnapshotUncheckedCreateWithoutCurrentForEbookInput>
  }

  export type AssetCreateWithoutEbookCoverImagesInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAssetsInput
    chapterReferences?: ChapterAssetReferenceCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutEbookCoverImagesInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    chapterReferences?: ChapterAssetReferenceUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutEbookCoverImagesInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutEbookCoverImagesInput, AssetUncheckedCreateWithoutEbookCoverImagesInput>
  }

  export type SnapshotCreateWithoutEbookInput = {
    id?: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
    file?: SnapshotFileCreateNestedOneWithoutSnapshotInput
    currentForEbook?: EbookCreateNestedOneWithoutCurrentSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutEbookInput = {
    id?: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
    file?: SnapshotFileUncheckedCreateNestedOneWithoutSnapshotInput
    currentForEbook?: EbookUncheckedCreateNestedOneWithoutCurrentSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutEbookInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutEbookInput, SnapshotUncheckedCreateWithoutEbookInput>
  }

  export type SnapshotCreateManyEbookInputEnvelope = {
    data: SnapshotCreateManyEbookInput | SnapshotCreateManyEbookInput[]
    skipDuplicates?: boolean
  }

  export type ChapterCreateWithoutEbookInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assetReferences?: ChapterAssetReferenceCreateNestedManyWithoutChapterInput
    collaboratorAccess?: EbookCollaboratorChapterAccessCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutEbookInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assetReferences?: ChapterAssetReferenceUncheckedCreateNestedManyWithoutChapterInput
    collaboratorAccess?: EbookCollaboratorChapterAccessUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutEbookInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutEbookInput, ChapterUncheckedCreateWithoutEbookInput>
  }

  export type ChapterCreateManyEbookInputEnvelope = {
    data: ChapterCreateManyEbookInput | ChapterCreateManyEbookInput[]
    skipDuplicates?: boolean
  }

  export type EbookCollaboratorCreateWithoutEbookInput = {
    id?: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEbookCollaborationsInput
    customRole?: EbookCustomRoleCreateNestedOneWithoutCollaboratorsInput
    chapterAccess?: EbookCollaboratorChapterAccessCreateNestedManyWithoutCollaboratorInput
  }

  export type EbookCollaboratorUncheckedCreateWithoutEbookInput = {
    id?: string
    userId: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    customRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapterAccess?: EbookCollaboratorChapterAccessUncheckedCreateNestedManyWithoutCollaboratorInput
  }

  export type EbookCollaboratorCreateOrConnectWithoutEbookInput = {
    where: EbookCollaboratorWhereUniqueInput
    create: XOR<EbookCollaboratorCreateWithoutEbookInput, EbookCollaboratorUncheckedCreateWithoutEbookInput>
  }

  export type EbookCollaboratorCreateManyEbookInputEnvelope = {
    data: EbookCollaboratorCreateManyEbookInput | EbookCollaboratorCreateManyEbookInput[]
    skipDuplicates?: boolean
  }

  export type EbookCustomRoleCreateWithoutEbookInput = {
    id?: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedCustomRolesInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutCustomRoleInput
  }

  export type EbookCustomRoleUncheckedCreateWithoutEbookInput = {
    id?: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutCustomRoleInput
  }

  export type EbookCustomRoleCreateOrConnectWithoutEbookInput = {
    where: EbookCustomRoleWhereUniqueInput
    create: XOR<EbookCustomRoleCreateWithoutEbookInput, EbookCustomRoleUncheckedCreateWithoutEbookInput>
  }

  export type EbookCustomRoleCreateManyEbookInputEnvelope = {
    data: EbookCustomRoleCreateManyEbookInput | EbookCustomRoleCreateManyEbookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEbooksInput = {
    update: XOR<UserUpdateWithoutEbooksInput, UserUncheckedUpdateWithoutEbooksInput>
    create: XOR<UserCreateWithoutEbooksInput, UserUncheckedCreateWithoutEbooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEbooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEbooksInput, UserUncheckedUpdateWithoutEbooksInput>
  }

  export type UserUpdateWithoutEbooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    assets?: AssetUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEbooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    assets?: AssetUncheckedUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUncheckedUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type SnapshotUpsertWithoutCurrentForEbookInput = {
    update: XOR<SnapshotUpdateWithoutCurrentForEbookInput, SnapshotUncheckedUpdateWithoutCurrentForEbookInput>
    create: XOR<SnapshotCreateWithoutCurrentForEbookInput, SnapshotUncheckedCreateWithoutCurrentForEbookInput>
    where?: SnapshotWhereInput
  }

  export type SnapshotUpdateToOneWithWhereWithoutCurrentForEbookInput = {
    where?: SnapshotWhereInput
    data: XOR<SnapshotUpdateWithoutCurrentForEbookInput, SnapshotUncheckedUpdateWithoutCurrentForEbookInput>
  }

  export type SnapshotUpdateWithoutCurrentForEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    ebook?: EbookUpdateOneRequiredWithoutSnapshotsNestedInput
    file?: SnapshotFileUpdateOneWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutCurrentForEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    file?: SnapshotFileUncheckedUpdateOneWithoutSnapshotNestedInput
  }

  export type AssetUpsertWithoutEbookCoverImagesInput = {
    update: XOR<AssetUpdateWithoutEbookCoverImagesInput, AssetUncheckedUpdateWithoutEbookCoverImagesInput>
    create: XOR<AssetCreateWithoutEbookCoverImagesInput, AssetUncheckedCreateWithoutEbookCoverImagesInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutEbookCoverImagesInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutEbookCoverImagesInput, AssetUncheckedUpdateWithoutEbookCoverImagesInput>
  }

  export type AssetUpdateWithoutEbookCoverImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAssetsNestedInput
    chapterReferences?: ChapterAssetReferenceUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutEbookCoverImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chapterReferences?: ChapterAssetReferenceUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type SnapshotUpsertWithWhereUniqueWithoutEbookInput = {
    where: SnapshotWhereUniqueInput
    update: XOR<SnapshotUpdateWithoutEbookInput, SnapshotUncheckedUpdateWithoutEbookInput>
    create: XOR<SnapshotCreateWithoutEbookInput, SnapshotUncheckedCreateWithoutEbookInput>
  }

  export type SnapshotUpdateWithWhereUniqueWithoutEbookInput = {
    where: SnapshotWhereUniqueInput
    data: XOR<SnapshotUpdateWithoutEbookInput, SnapshotUncheckedUpdateWithoutEbookInput>
  }

  export type SnapshotUpdateManyWithWhereWithoutEbookInput = {
    where: SnapshotScalarWhereInput
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyWithoutEbookInput>
  }

  export type SnapshotScalarWhereInput = {
    AND?: SnapshotScalarWhereInput | SnapshotScalarWhereInput[]
    OR?: SnapshotScalarWhereInput[]
    NOT?: SnapshotScalarWhereInput | SnapshotScalarWhereInput[]
    id?: StringFilter<"Snapshot"> | string
    ebookId?: StringFilter<"Snapshot"> | string
    version?: IntFilter<"Snapshot"> | number
    createdAt?: DateTimeFilter<"Snapshot"> | Date | string
    status?: EnumSnapshotStatusFilter<"Snapshot"> | $Enums.SnapshotStatus
  }

  export type ChapterUpsertWithWhereUniqueWithoutEbookInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutEbookInput, ChapterUncheckedUpdateWithoutEbookInput>
    create: XOR<ChapterCreateWithoutEbookInput, ChapterUncheckedCreateWithoutEbookInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutEbookInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutEbookInput, ChapterUncheckedUpdateWithoutEbookInput>
  }

  export type ChapterUpdateManyWithWhereWithoutEbookInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutEbookInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: StringFilter<"Chapter"> | string
    content?: JsonFilter<"Chapter">
    title?: StringFilter<"Chapter"> | string
    position?: IntFilter<"Chapter"> | number
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    ebookId?: StringFilter<"Chapter"> | string
  }

  export type EbookCollaboratorUpsertWithWhereUniqueWithoutEbookInput = {
    where: EbookCollaboratorWhereUniqueInput
    update: XOR<EbookCollaboratorUpdateWithoutEbookInput, EbookCollaboratorUncheckedUpdateWithoutEbookInput>
    create: XOR<EbookCollaboratorCreateWithoutEbookInput, EbookCollaboratorUncheckedCreateWithoutEbookInput>
  }

  export type EbookCollaboratorUpdateWithWhereUniqueWithoutEbookInput = {
    where: EbookCollaboratorWhereUniqueInput
    data: XOR<EbookCollaboratorUpdateWithoutEbookInput, EbookCollaboratorUncheckedUpdateWithoutEbookInput>
  }

  export type EbookCollaboratorUpdateManyWithWhereWithoutEbookInput = {
    where: EbookCollaboratorScalarWhereInput
    data: XOR<EbookCollaboratorUpdateManyMutationInput, EbookCollaboratorUncheckedUpdateManyWithoutEbookInput>
  }

  export type EbookCustomRoleUpsertWithWhereUniqueWithoutEbookInput = {
    where: EbookCustomRoleWhereUniqueInput
    update: XOR<EbookCustomRoleUpdateWithoutEbookInput, EbookCustomRoleUncheckedUpdateWithoutEbookInput>
    create: XOR<EbookCustomRoleCreateWithoutEbookInput, EbookCustomRoleUncheckedCreateWithoutEbookInput>
  }

  export type EbookCustomRoleUpdateWithWhereUniqueWithoutEbookInput = {
    where: EbookCustomRoleWhereUniqueInput
    data: XOR<EbookCustomRoleUpdateWithoutEbookInput, EbookCustomRoleUncheckedUpdateWithoutEbookInput>
  }

  export type EbookCustomRoleUpdateManyWithWhereWithoutEbookInput = {
    where: EbookCustomRoleScalarWhereInput
    data: XOR<EbookCustomRoleUpdateManyMutationInput, EbookCustomRoleUncheckedUpdateManyWithoutEbookInput>
  }

  export type EbookCustomRoleScalarWhereInput = {
    AND?: EbookCustomRoleScalarWhereInput | EbookCustomRoleScalarWhereInput[]
    OR?: EbookCustomRoleScalarWhereInput[]
    NOT?: EbookCustomRoleScalarWhereInput | EbookCustomRoleScalarWhereInput[]
    id?: StringFilter<"EbookCustomRole"> | string
    ebookId?: StringFilter<"EbookCustomRole"> | string
    name?: StringFilter<"EbookCustomRole"> | string
    permissions?: EnumCollaborationPermissionNullableListFilter<"EbookCustomRole">
    createdByUserId?: StringFilter<"EbookCustomRole"> | string
    createdAt?: DateTimeFilter<"EbookCustomRole"> | Date | string
    updatedAt?: DateTimeFilter<"EbookCustomRole"> | Date | string
  }

  export type EbookCreateWithoutSnapshotsInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEbooksInput
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    coverAsset?: AssetCreateNestedOneWithoutEbookCoverImagesInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutSnapshotsInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    coverAssetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutSnapshotsInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutSnapshotsInput, EbookUncheckedCreateWithoutSnapshotsInput>
  }

  export type SnapshotFileCreateWithoutSnapshotInput = {
    id?: string
    key: string
    bucket: string
    sizeBytes: number
    mimeType: string
    createdAt?: Date | string
  }

  export type SnapshotFileUncheckedCreateWithoutSnapshotInput = {
    id?: string
    key: string
    bucket: string
    sizeBytes: number
    mimeType: string
    createdAt?: Date | string
  }

  export type SnapshotFileCreateOrConnectWithoutSnapshotInput = {
    where: SnapshotFileWhereUniqueInput
    create: XOR<SnapshotFileCreateWithoutSnapshotInput, SnapshotFileUncheckedCreateWithoutSnapshotInput>
  }

  export type EbookCreateWithoutCurrentSnapshotInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEbooksInput
    coverAsset?: AssetCreateNestedOneWithoutEbookCoverImagesInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutCurrentSnapshotInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    coverAssetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutCurrentSnapshotInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutCurrentSnapshotInput, EbookUncheckedCreateWithoutCurrentSnapshotInput>
  }

  export type EbookUpsertWithoutSnapshotsInput = {
    update: XOR<EbookUpdateWithoutSnapshotsInput, EbookUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<EbookCreateWithoutSnapshotsInput, EbookUncheckedCreateWithoutSnapshotsInput>
    where?: EbookWhereInput
  }

  export type EbookUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: EbookWhereInput
    data: XOR<EbookUpdateWithoutSnapshotsInput, EbookUncheckedUpdateWithoutSnapshotsInput>
  }

  export type EbookUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    coverAsset?: AssetUpdateOneWithoutEbookCoverImagesNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type SnapshotFileUpsertWithoutSnapshotInput = {
    update: XOR<SnapshotFileUpdateWithoutSnapshotInput, SnapshotFileUncheckedUpdateWithoutSnapshotInput>
    create: XOR<SnapshotFileCreateWithoutSnapshotInput, SnapshotFileUncheckedCreateWithoutSnapshotInput>
    where?: SnapshotFileWhereInput
  }

  export type SnapshotFileUpdateToOneWithWhereWithoutSnapshotInput = {
    where?: SnapshotFileWhereInput
    data: XOR<SnapshotFileUpdateWithoutSnapshotInput, SnapshotFileUncheckedUpdateWithoutSnapshotInput>
  }

  export type SnapshotFileUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotFileUncheckedUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookUpsertWithoutCurrentSnapshotInput = {
    update: XOR<EbookUpdateWithoutCurrentSnapshotInput, EbookUncheckedUpdateWithoutCurrentSnapshotInput>
    create: XOR<EbookCreateWithoutCurrentSnapshotInput, EbookUncheckedCreateWithoutCurrentSnapshotInput>
    where?: EbookWhereInput
  }

  export type EbookUpdateToOneWithWhereWithoutCurrentSnapshotInput = {
    where?: EbookWhereInput
    data: XOR<EbookUpdateWithoutCurrentSnapshotInput, EbookUncheckedUpdateWithoutCurrentSnapshotInput>
  }

  export type EbookUpdateWithoutCurrentSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    coverAsset?: AssetUpdateOneWithoutEbookCoverImagesNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutCurrentSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type SnapshotCreateWithoutFileInput = {
    id?: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
    ebook: EbookCreateNestedOneWithoutSnapshotsInput
    currentForEbook?: EbookCreateNestedOneWithoutCurrentSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutFileInput = {
    id?: string
    ebookId: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
    currentForEbook?: EbookUncheckedCreateNestedOneWithoutCurrentSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutFileInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutFileInput, SnapshotUncheckedCreateWithoutFileInput>
  }

  export type SnapshotUpsertWithoutFileInput = {
    update: XOR<SnapshotUpdateWithoutFileInput, SnapshotUncheckedUpdateWithoutFileInput>
    create: XOR<SnapshotCreateWithoutFileInput, SnapshotUncheckedCreateWithoutFileInput>
    where?: SnapshotWhereInput
  }

  export type SnapshotUpdateToOneWithWhereWithoutFileInput = {
    where?: SnapshotWhereInput
    data: XOR<SnapshotUpdateWithoutFileInput, SnapshotUncheckedUpdateWithoutFileInput>
  }

  export type SnapshotUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    ebook?: EbookUpdateOneRequiredWithoutSnapshotsNestedInput
    currentForEbook?: EbookUpdateOneWithoutCurrentSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    currentForEbook?: EbookUncheckedUpdateOneWithoutCurrentSnapshotNestedInput
  }

  export type UserCreateWithoutUploadHandshakesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    ebooks?: EbookCreateNestedManyWithoutOwnerInput
    assets?: AssetCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutUploadHandshakesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    ebooks?: EbookUncheckedCreateNestedManyWithoutOwnerInput
    assets?: AssetUncheckedCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorUncheckedCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutUploadHandshakesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadHandshakesInput, UserUncheckedCreateWithoutUploadHandshakesInput>
  }

  export type UserUpsertWithoutUploadHandshakesInput = {
    update: XOR<UserUpdateWithoutUploadHandshakesInput, UserUncheckedUpdateWithoutUploadHandshakesInput>
    create: XOR<UserCreateWithoutUploadHandshakesInput, UserUncheckedCreateWithoutUploadHandshakesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadHandshakesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadHandshakesInput, UserUncheckedUpdateWithoutUploadHandshakesInput>
  }

  export type UserUpdateWithoutUploadHandshakesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    ebooks?: EbookUpdateManyWithoutOwnerNestedInput
    assets?: AssetUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadHandshakesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    ebooks?: EbookUncheckedUpdateManyWithoutOwnerNestedInput
    assets?: AssetUncheckedUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EbookCreateWithoutOwnerInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    coverAsset?: AssetCreateNestedOneWithoutEbookCoverImagesInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    currentSnapshotId?: string | null
    coverAssetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutEbookInput
    customRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutOwnerInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutOwnerInput, EbookUncheckedCreateWithoutOwnerInput>
  }

  export type EbookCreateManyOwnerInputEnvelope = {
    data: EbookCreateManyOwnerInput | EbookCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type AssetCreateWithoutOwnerInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    chapterReferences?: ChapterAssetReferenceCreateNestedManyWithoutAssetInput
    ebookCoverImages?: EbookCreateNestedManyWithoutCoverAssetInput
  }

  export type AssetUncheckedCreateWithoutOwnerInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    chapterReferences?: ChapterAssetReferenceUncheckedCreateNestedManyWithoutAssetInput
    ebookCoverImages?: EbookUncheckedCreateNestedManyWithoutCoverAssetInput
  }

  export type AssetCreateOrConnectWithoutOwnerInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput>
  }

  export type AssetCreateManyOwnerInputEnvelope = {
    data: AssetCreateManyOwnerInput | AssetCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UploadHandshakeCreateWithoutOwnerInput = {
    id?: string
    context: $Enums.AssetReferenceType
    key: string
    fileName: string
    expectedMimeType: string
    expectedSizeBytes: number
    status?: $Enums.UploadHandshakeStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadHandshakeUncheckedCreateWithoutOwnerInput = {
    id?: string
    context: $Enums.AssetReferenceType
    key: string
    fileName: string
    expectedMimeType: string
    expectedSizeBytes: number
    status?: $Enums.UploadHandshakeStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadHandshakeCreateOrConnectWithoutOwnerInput = {
    where: UploadHandshakeWhereUniqueInput
    create: XOR<UploadHandshakeCreateWithoutOwnerInput, UploadHandshakeUncheckedCreateWithoutOwnerInput>
  }

  export type UploadHandshakeCreateManyOwnerInputEnvelope = {
    data: UploadHandshakeCreateManyOwnerInput | UploadHandshakeCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type EbookCollaboratorCreateWithoutUserInput = {
    id?: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutCollaboratorsInput
    customRole?: EbookCustomRoleCreateNestedOneWithoutCollaboratorsInput
    chapterAccess?: EbookCollaboratorChapterAccessCreateNestedManyWithoutCollaboratorInput
  }

  export type EbookCollaboratorUncheckedCreateWithoutUserInput = {
    id?: string
    ebookId: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    customRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapterAccess?: EbookCollaboratorChapterAccessUncheckedCreateNestedManyWithoutCollaboratorInput
  }

  export type EbookCollaboratorCreateOrConnectWithoutUserInput = {
    where: EbookCollaboratorWhereUniqueInput
    create: XOR<EbookCollaboratorCreateWithoutUserInput, EbookCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type EbookCollaboratorCreateManyUserInputEnvelope = {
    data: EbookCollaboratorCreateManyUserInput | EbookCollaboratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EbookCustomRoleCreateWithoutCreatedByInput = {
    id?: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutCustomRolesInput
    collaborators?: EbookCollaboratorCreateNestedManyWithoutCustomRoleInput
  }

  export type EbookCustomRoleUncheckedCreateWithoutCreatedByInput = {
    id?: string
    ebookId: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: EbookCollaboratorUncheckedCreateNestedManyWithoutCustomRoleInput
  }

  export type EbookCustomRoleCreateOrConnectWithoutCreatedByInput = {
    where: EbookCustomRoleWhereUniqueInput
    create: XOR<EbookCustomRoleCreateWithoutCreatedByInput, EbookCustomRoleUncheckedCreateWithoutCreatedByInput>
  }

  export type EbookCustomRoleCreateManyCreatedByInputEnvelope = {
    data: EbookCustomRoleCreateManyCreatedByInput | EbookCustomRoleCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
  }

  export type EbookUpsertWithWhereUniqueWithoutOwnerInput = {
    where: EbookWhereUniqueInput
    update: XOR<EbookUpdateWithoutOwnerInput, EbookUncheckedUpdateWithoutOwnerInput>
    create: XOR<EbookCreateWithoutOwnerInput, EbookUncheckedCreateWithoutOwnerInput>
  }

  export type EbookUpdateWithWhereUniqueWithoutOwnerInput = {
    where: EbookWhereUniqueInput
    data: XOR<EbookUpdateWithoutOwnerInput, EbookUncheckedUpdateWithoutOwnerInput>
  }

  export type EbookUpdateManyWithWhereWithoutOwnerInput = {
    where: EbookScalarWhereInput
    data: XOR<EbookUpdateManyMutationInput, EbookUncheckedUpdateManyWithoutOwnerInput>
  }

  export type AssetUpsertWithWhereUniqueWithoutOwnerInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutOwnerInput, AssetUncheckedUpdateWithoutOwnerInput>
    create: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutOwnerInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutOwnerInput, AssetUncheckedUpdateWithoutOwnerInput>
  }

  export type AssetUpdateManyWithWhereWithoutOwnerInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutOwnerInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: StringFilter<"Asset"> | string
    key?: StringFilter<"Asset"> | string
    bucket?: StringFilter<"Asset"> | string
    fileName?: StringFilter<"Asset"> | string
    mimeType?: StringFilter<"Asset"> | string
    sizeBytes?: IntFilter<"Asset"> | number
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    ownerId?: StringFilter<"Asset"> | string
  }

  export type UploadHandshakeUpsertWithWhereUniqueWithoutOwnerInput = {
    where: UploadHandshakeWhereUniqueInput
    update: XOR<UploadHandshakeUpdateWithoutOwnerInput, UploadHandshakeUncheckedUpdateWithoutOwnerInput>
    create: XOR<UploadHandshakeCreateWithoutOwnerInput, UploadHandshakeUncheckedCreateWithoutOwnerInput>
  }

  export type UploadHandshakeUpdateWithWhereUniqueWithoutOwnerInput = {
    where: UploadHandshakeWhereUniqueInput
    data: XOR<UploadHandshakeUpdateWithoutOwnerInput, UploadHandshakeUncheckedUpdateWithoutOwnerInput>
  }

  export type UploadHandshakeUpdateManyWithWhereWithoutOwnerInput = {
    where: UploadHandshakeScalarWhereInput
    data: XOR<UploadHandshakeUpdateManyMutationInput, UploadHandshakeUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UploadHandshakeScalarWhereInput = {
    AND?: UploadHandshakeScalarWhereInput | UploadHandshakeScalarWhereInput[]
    OR?: UploadHandshakeScalarWhereInput[]
    NOT?: UploadHandshakeScalarWhereInput | UploadHandshakeScalarWhereInput[]
    id?: StringFilter<"UploadHandshake"> | string
    ownerId?: StringFilter<"UploadHandshake"> | string
    context?: EnumAssetReferenceTypeFilter<"UploadHandshake"> | $Enums.AssetReferenceType
    key?: StringFilter<"UploadHandshake"> | string
    fileName?: StringFilter<"UploadHandshake"> | string
    expectedMimeType?: StringFilter<"UploadHandshake"> | string
    expectedSizeBytes?: IntFilter<"UploadHandshake"> | number
    status?: EnumUploadHandshakeStatusFilter<"UploadHandshake"> | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFilter<"UploadHandshake"> | Date | string
    createdAt?: DateTimeFilter<"UploadHandshake"> | Date | string
    updatedAt?: DateTimeFilter<"UploadHandshake"> | Date | string
  }

  export type EbookCollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: EbookCollaboratorWhereUniqueInput
    update: XOR<EbookCollaboratorUpdateWithoutUserInput, EbookCollaboratorUncheckedUpdateWithoutUserInput>
    create: XOR<EbookCollaboratorCreateWithoutUserInput, EbookCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type EbookCollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: EbookCollaboratorWhereUniqueInput
    data: XOR<EbookCollaboratorUpdateWithoutUserInput, EbookCollaboratorUncheckedUpdateWithoutUserInput>
  }

  export type EbookCollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: EbookCollaboratorScalarWhereInput
    data: XOR<EbookCollaboratorUpdateManyMutationInput, EbookCollaboratorUncheckedUpdateManyWithoutUserInput>
  }

  export type EbookCustomRoleUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EbookCustomRoleWhereUniqueInput
    update: XOR<EbookCustomRoleUpdateWithoutCreatedByInput, EbookCustomRoleUncheckedUpdateWithoutCreatedByInput>
    create: XOR<EbookCustomRoleCreateWithoutCreatedByInput, EbookCustomRoleUncheckedCreateWithoutCreatedByInput>
  }

  export type EbookCustomRoleUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EbookCustomRoleWhereUniqueInput
    data: XOR<EbookCustomRoleUpdateWithoutCreatedByInput, EbookCustomRoleUncheckedUpdateWithoutCreatedByInput>
  }

  export type EbookCustomRoleUpdateManyWithWhereWithoutCreatedByInput = {
    where: EbookCustomRoleScalarWhereInput
    data: XOR<EbookCustomRoleUpdateManyMutationInput, EbookCustomRoleUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    ebooks?: EbookCreateNestedManyWithoutOwnerInput
    assets?: AssetCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    ebooks?: EbookUncheckedCreateNestedManyWithoutOwnerInput
    assets?: AssetUncheckedCreateNestedManyWithoutOwnerInput
    uploadHandshakes?: UploadHandshakeUncheckedCreateNestedManyWithoutOwnerInput
    ebookCollaborations?: EbookCollaboratorUncheckedCreateNestedManyWithoutUserInput
    createdCustomRoles?: EbookCustomRoleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebooks?: EbookUpdateManyWithoutOwnerNestedInput
    assets?: AssetUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebooks?: EbookUncheckedUpdateManyWithoutOwnerNestedInput
    assets?: AssetUncheckedUpdateManyWithoutOwnerNestedInput
    uploadHandshakes?: UploadHandshakeUncheckedUpdateManyWithoutOwnerNestedInput
    ebookCollaborations?: EbookCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    createdCustomRoles?: EbookCustomRoleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ChapterAssetReferenceCreateManyAssetInput = {
    id?: string
    chapterId: string
    type: $Enums.AssetReferenceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCreateManyCoverAssetInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterAssetReferenceUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutAssetReferencesNestedInput
  }

  export type ChapterAssetReferenceUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterAssetReferenceUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookUpdateWithoutCoverAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutCoverAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateManyWithoutCoverAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterAssetReferenceCreateManyChapterInput = {
    id?: string
    assetId: string
    type: $Enums.AssetReferenceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCollaboratorChapterAccessCreateManyChapterInput = {
    id?: string
    collaboratorId: string
    createdAt?: Date | string
  }

  export type ChapterAssetReferenceUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutChapterReferencesNestedInput
  }

  export type ChapterAssetReferenceUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterAssetReferenceUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorChapterAccessUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborator?: EbookCollaboratorUpdateOneRequiredWithoutChapterAccessNestedInput
  }

  export type EbookCollaboratorChapterAccessUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    collaboratorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    collaboratorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorChapterAccessCreateManyCollaboratorInput = {
    id?: string
    chapterId: string
    createdAt?: Date | string
  }

  export type EbookCollaboratorChapterAccessUpdateWithoutCollaboratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutCollaboratorAccessNestedInput
  }

  export type EbookCollaboratorChapterAccessUncheckedUpdateWithoutCollaboratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutCollaboratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorCreateManyCustomRoleInput = {
    id?: string
    userId: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCollaboratorUpdateWithoutCustomRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutCollaboratorsNestedInput
    user?: UserUpdateOneRequiredWithoutEbookCollaborationsNestedInput
    chapterAccess?: EbookCollaboratorChapterAccessUpdateManyWithoutCollaboratorNestedInput
  }

  export type EbookCollaboratorUncheckedUpdateWithoutCustomRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterAccess?: EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutCollaboratorNestedInput
  }

  export type EbookCollaboratorUncheckedUpdateManyWithoutCustomRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotCreateManyEbookInput = {
    id?: string
    version: number
    createdAt?: Date | string
    status?: $Enums.SnapshotStatus
  }

  export type ChapterCreateManyEbookInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    title: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCollaboratorCreateManyEbookInput = {
    id?: string
    userId: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    customRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCustomRoleCreateManyEbookInput = {
    id?: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnapshotUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    file?: SnapshotFileUpdateOneWithoutSnapshotNestedInput
    currentForEbook?: EbookUpdateOneWithoutCurrentSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
    file?: SnapshotFileUncheckedUpdateOneWithoutSnapshotNestedInput
    currentForEbook?: EbookUncheckedUpdateOneWithoutCurrentSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateManyWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSnapshotStatusFieldUpdateOperationsInput | $Enums.SnapshotStatus
  }

  export type ChapterUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetReferences?: ChapterAssetReferenceUpdateManyWithoutChapterNestedInput
    collaboratorAccess?: EbookCollaboratorChapterAccessUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetReferences?: ChapterAssetReferenceUncheckedUpdateManyWithoutChapterNestedInput
    collaboratorAccess?: EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateManyWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEbookCollaborationsNestedInput
    customRole?: EbookCustomRoleUpdateOneWithoutCollaboratorsNestedInput
    chapterAccess?: EbookCollaboratorChapterAccessUpdateManyWithoutCollaboratorNestedInput
  }

  export type EbookCollaboratorUncheckedUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    customRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterAccess?: EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutCollaboratorNestedInput
  }

  export type EbookCollaboratorUncheckedUpdateManyWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    customRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCustomRoleUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedCustomRolesNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutCustomRoleNestedInput
  }

  export type EbookCustomRoleUncheckedUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutCustomRoleNestedInput
  }

  export type EbookCustomRoleUncheckedUpdateManyWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdByUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
  }

  export type EbookCreateManyOwnerInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    currentSnapshotId?: string | null
    coverAssetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetCreateManyOwnerInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadHandshakeCreateManyOwnerInput = {
    id?: string
    context: $Enums.AssetReferenceType
    key: string
    fileName: string
    expectedMimeType: string
    expectedSizeBytes: number
    status?: $Enums.UploadHandshakeStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCollaboratorCreateManyUserInput = {
    id?: string
    ebookId: string
    role?: $Enums.CollaborationRole | null
    allChaptersAccess?: boolean
    customRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookCustomRoleCreateManyCreatedByInput = {
    id?: string
    ebookId: string
    name: string
    permissions?: EbookCustomRoleCreatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type EbookUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    coverAsset?: AssetUpdateOneWithoutEbookCoverImagesNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutEbookNestedInput
    customRoles?: EbookCustomRoleUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    coverAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterReferences?: ChapterAssetReferenceUpdateManyWithoutAssetNestedInput
    ebookCoverImages?: EbookUpdateManyWithoutCoverAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterReferences?: ChapterAssetReferenceUncheckedUpdateManyWithoutAssetNestedInput
    ebookCoverImages?: EbookUncheckedUpdateManyWithoutCoverAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHandshakeUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    key?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    expectedMimeType?: StringFieldUpdateOperationsInput | string
    expectedSizeBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumUploadHandshakeStatusFieldUpdateOperationsInput | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHandshakeUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    key?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    expectedMimeType?: StringFieldUpdateOperationsInput | string
    expectedSizeBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumUploadHandshakeStatusFieldUpdateOperationsInput | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHandshakeUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: EnumAssetReferenceTypeFieldUpdateOperationsInput | $Enums.AssetReferenceType
    key?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    expectedMimeType?: StringFieldUpdateOperationsInput | string
    expectedSizeBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumUploadHandshakeStatusFieldUpdateOperationsInput | $Enums.UploadHandshakeStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCollaboratorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutCollaboratorsNestedInput
    customRole?: EbookCustomRoleUpdateOneWithoutCollaboratorsNestedInput
    chapterAccess?: EbookCollaboratorChapterAccessUpdateManyWithoutCollaboratorNestedInput
  }

  export type EbookCollaboratorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    customRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterAccess?: EbookCollaboratorChapterAccessUncheckedUpdateManyWithoutCollaboratorNestedInput
  }

  export type EbookCollaboratorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumCollaborationRoleFieldUpdateOperationsInput | $Enums.CollaborationRole | null
    allChaptersAccess?: BoolFieldUpdateOperationsInput | boolean
    customRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCustomRoleUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutCustomRolesNestedInput
    collaborators?: EbookCollaboratorUpdateManyWithoutCustomRoleNestedInput
  }

  export type EbookCustomRoleUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: EbookCollaboratorUncheckedUpdateManyWithoutCustomRoleNestedInput
  }

  export type EbookCustomRoleUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    permissions?: EbookCustomRoleUpdatepermissionsInput | $Enums.CollaborationPermission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}