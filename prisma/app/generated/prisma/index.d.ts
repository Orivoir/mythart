
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model AssetLink
 * 
 */
export type AssetLink = $Result.DefaultSelection<Prisma.$AssetLinkPayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionStatus: {
  none: 'none',
  trialing: 'trialing',
  active: 'active',
  past_due: 'past_due',
  canceled: 'canceled',
  unpaid: 'unpaid'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PlanType: {
  free: 'free',
  premium: 'premium'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const AssetLinkType: {
  content: 'content',
  cover: 'cover',
  illustration: 'illustration'
};

export type AssetLinkType = (typeof AssetLinkType)[keyof typeof AssetLinkType]

}

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type AssetLinkType = $Enums.AssetLinkType

export const AssetLinkType: typeof $Enums.AssetLinkType

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * `prisma.assetLink`: Exposes CRUD operations for the **AssetLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetLinks
    * const assetLinks = await prisma.assetLink.findMany()
    * ```
    */
  get assetLink(): Prisma.AssetLinkDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends BigInt
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

  export const type: unique symbol;



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
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
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
    Asset: 'Asset',
    AssetLink: 'AssetLink',
    Chapter: 'Chapter',
    Ebook: 'Ebook',
    Snapshot: 'Snapshot',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "asset" | "assetLink" | "chapter" | "ebook" | "snapshot" | "user"
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
      AssetLink: {
        payload: Prisma.$AssetLinkPayload<ExtArgs>
        fields: Prisma.AssetLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload>
          }
          findFirst: {
            args: Prisma.AssetLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload>
          }
          findMany: {
            args: Prisma.AssetLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload>[]
          }
          create: {
            args: Prisma.AssetLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload>
          }
          createMany: {
            args: Prisma.AssetLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload>[]
          }
          delete: {
            args: Prisma.AssetLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload>
          }
          update: {
            args: Prisma.AssetLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload>
          }
          deleteMany: {
            args: Prisma.AssetLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload>[]
          }
          upsert: {
            args: Prisma.AssetLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetLinkPayload>
          }
          aggregate: {
            args: Prisma.AssetLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetLink>
          }
          groupBy: {
            args: Prisma.AssetLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetLinkCountArgs<ExtArgs>
            result: $Utils.Optional<AssetLinkCountAggregateOutputType> | number
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
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
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
    assetLink?: AssetLinkOmit
    chapter?: ChapterOmit
    ebook?: EbookOmit
    snapshot?: SnapshotOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
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
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    assetLinks: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assetLinks?: boolean | AssetCountOutputTypeCountAssetLinksArgs
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
  export type AssetCountOutputTypeCountAssetLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetLinkWhereInput
  }


  /**
   * Count Type EbookCountOutputType
   */

  export type EbookCountOutputType = {
    snapshots: number
    chapters: number
  }

  export type EbookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshots?: boolean | EbookCountOutputTypeCountSnapshotsArgs
    chapters?: boolean | EbookCountOutputTypeCountChaptersArgs
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
   * Count Type SnapshotCountOutputType
   */

  export type SnapshotCountOutputType = {
    assetLinks: number
  }

  export type SnapshotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assetLinks?: boolean | SnapshotCountOutputTypeCountAssetLinksArgs
  }

  // Custom InputTypes
  /**
   * SnapshotCountOutputType without action
   */
  export type SnapshotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotCountOutputType
     */
    select?: SnapshotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SnapshotCountOutputType without action
   */
  export type SnapshotCountOutputTypeCountAssetLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetLinkWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ebooks: number
    assets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebooks?: boolean | UserCountOutputTypeCountEbooksArgs
    assets?: boolean | UserCountOutputTypeCountAssetsArgs
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
    etag: string | null
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
    etag: string | null
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
    etag: number
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
    etag?: true
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
    etag?: true
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
    etag?: true
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
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
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
    mimeType: string | null
    sizeBytes: number | null
    etag: string | null
    createdAt: Date
    updatedAt: Date
    ownerId: string | null
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
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
    etag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | Asset$ownerArgs<ExtArgs>
    assetLinks?: boolean | Asset$assetLinksArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    bucket?: boolean
    fileName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    etag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | Asset$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    bucket?: boolean
    fileName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    etag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | Asset$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    key?: boolean
    bucket?: boolean
    fileName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    etag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "bucket" | "fileName" | "mimeType" | "sizeBytes" | "etag" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Asset$ownerArgs<ExtArgs>
    assetLinks?: boolean | Asset$assetLinksArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Asset$ownerArgs<ExtArgs>
  }
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Asset$ownerArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      assetLinks: Prisma.$AssetLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      bucket: string
      fileName: string
      mimeType: string | null
      sizeBytes: number | null
      etag: string | null
      createdAt: Date
      updatedAt: Date
      ownerId: string | null
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
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
    owner<T extends Asset$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Asset$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assetLinks<T extends Asset$assetLinksArgs<ExtArgs> = {}>(args?: Subset<T, Asset$assetLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Asset", 'String'>
    readonly key: FieldRef<"Asset", 'String'>
    readonly bucket: FieldRef<"Asset", 'String'>
    readonly fileName: FieldRef<"Asset", 'String'>
    readonly mimeType: FieldRef<"Asset", 'String'>
    readonly sizeBytes: FieldRef<"Asset", 'Int'>
    readonly etag: FieldRef<"Asset", 'String'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
    readonly ownerId: FieldRef<"Asset", 'String'>
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
   * Asset.owner
   */
  export type Asset$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Asset.assetLinks
   */
  export type Asset$assetLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    where?: AssetLinkWhereInput
    orderBy?: AssetLinkOrderByWithRelationInput | AssetLinkOrderByWithRelationInput[]
    cursor?: AssetLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetLinkScalarFieldEnum | AssetLinkScalarFieldEnum[]
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
   * Model AssetLink
   */

  export type AggregateAssetLink = {
    _count: AssetLinkCountAggregateOutputType | null
    _min: AssetLinkMinAggregateOutputType | null
    _max: AssetLinkMaxAggregateOutputType | null
  }

  export type AssetLinkMinAggregateOutputType = {
    id: string | null
    assetId: string | null
    snapshotId: string | null
    type: $Enums.AssetLinkType | null
  }

  export type AssetLinkMaxAggregateOutputType = {
    id: string | null
    assetId: string | null
    snapshotId: string | null
    type: $Enums.AssetLinkType | null
  }

  export type AssetLinkCountAggregateOutputType = {
    id: number
    assetId: number
    snapshotId: number
    type: number
    _all: number
  }


  export type AssetLinkMinAggregateInputType = {
    id?: true
    assetId?: true
    snapshotId?: true
    type?: true
  }

  export type AssetLinkMaxAggregateInputType = {
    id?: true
    assetId?: true
    snapshotId?: true
    type?: true
  }

  export type AssetLinkCountAggregateInputType = {
    id?: true
    assetId?: true
    snapshotId?: true
    type?: true
    _all?: true
  }

  export type AssetLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetLink to aggregate.
     */
    where?: AssetLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetLinks to fetch.
     */
    orderBy?: AssetLinkOrderByWithRelationInput | AssetLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetLinks
    **/
    _count?: true | AssetLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetLinkMaxAggregateInputType
  }

  export type GetAssetLinkAggregateType<T extends AssetLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetLink[P]>
      : GetScalarType<T[P], AggregateAssetLink[P]>
  }




  export type AssetLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetLinkWhereInput
    orderBy?: AssetLinkOrderByWithAggregationInput | AssetLinkOrderByWithAggregationInput[]
    by: AssetLinkScalarFieldEnum[] | AssetLinkScalarFieldEnum
    having?: AssetLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetLinkCountAggregateInputType | true
    _min?: AssetLinkMinAggregateInputType
    _max?: AssetLinkMaxAggregateInputType
  }

  export type AssetLinkGroupByOutputType = {
    id: string
    assetId: string
    snapshotId: string | null
    type: $Enums.AssetLinkType
    _count: AssetLinkCountAggregateOutputType | null
    _min: AssetLinkMinAggregateOutputType | null
    _max: AssetLinkMaxAggregateOutputType | null
  }

  type GetAssetLinkGroupByPayload<T extends AssetLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetLinkGroupByOutputType[P]>
            : GetScalarType<T[P], AssetLinkGroupByOutputType[P]>
        }
      >
    >


  export type AssetLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    snapshotId?: boolean
    type?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    snapshot?: boolean | AssetLink$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["assetLink"]>

  export type AssetLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    snapshotId?: boolean
    type?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    snapshot?: boolean | AssetLink$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["assetLink"]>

  export type AssetLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    snapshotId?: boolean
    type?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    snapshot?: boolean | AssetLink$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["assetLink"]>

  export type AssetLinkSelectScalar = {
    id?: boolean
    assetId?: boolean
    snapshotId?: boolean
    type?: boolean
  }

  export type AssetLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetId" | "snapshotId" | "type", ExtArgs["result"]["assetLink"]>
  export type AssetLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    snapshot?: boolean | AssetLink$snapshotArgs<ExtArgs>
  }
  export type AssetLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    snapshot?: boolean | AssetLink$snapshotArgs<ExtArgs>
  }
  export type AssetLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    snapshot?: boolean | AssetLink$snapshotArgs<ExtArgs>
  }

  export type $AssetLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetLink"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
      snapshot: Prisma.$SnapshotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assetId: string
      snapshotId: string | null
      type: $Enums.AssetLinkType
    }, ExtArgs["result"]["assetLink"]>
    composites: {}
  }

  type AssetLinkGetPayload<S extends boolean | null | undefined | AssetLinkDefaultArgs> = $Result.GetResult<Prisma.$AssetLinkPayload, S>

  type AssetLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetLinkCountAggregateInputType | true
    }

  export interface AssetLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetLink'], meta: { name: 'AssetLink' } }
    /**
     * Find zero or one AssetLink that matches the filter.
     * @param {AssetLinkFindUniqueArgs} args - Arguments to find a AssetLink
     * @example
     * // Get one AssetLink
     * const assetLink = await prisma.assetLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetLinkFindUniqueArgs>(args: SelectSubset<T, AssetLinkFindUniqueArgs<ExtArgs>>): Prisma__AssetLinkClient<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssetLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetLinkFindUniqueOrThrowArgs} args - Arguments to find a AssetLink
     * @example
     * // Get one AssetLink
     * const assetLink = await prisma.assetLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetLinkClient<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetLinkFindFirstArgs} args - Arguments to find a AssetLink
     * @example
     * // Get one AssetLink
     * const assetLink = await prisma.assetLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetLinkFindFirstArgs>(args?: SelectSubset<T, AssetLinkFindFirstArgs<ExtArgs>>): Prisma__AssetLinkClient<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetLinkFindFirstOrThrowArgs} args - Arguments to find a AssetLink
     * @example
     * // Get one AssetLink
     * const assetLink = await prisma.assetLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetLinkClient<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssetLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetLinks
     * const assetLinks = await prisma.assetLink.findMany()
     * 
     * // Get first 10 AssetLinks
     * const assetLinks = await prisma.assetLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetLinkWithIdOnly = await prisma.assetLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetLinkFindManyArgs>(args?: SelectSubset<T, AssetLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssetLink.
     * @param {AssetLinkCreateArgs} args - Arguments to create a AssetLink.
     * @example
     * // Create one AssetLink
     * const AssetLink = await prisma.assetLink.create({
     *   data: {
     *     // ... data to create a AssetLink
     *   }
     * })
     * 
     */
    create<T extends AssetLinkCreateArgs>(args: SelectSubset<T, AssetLinkCreateArgs<ExtArgs>>): Prisma__AssetLinkClient<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssetLinks.
     * @param {AssetLinkCreateManyArgs} args - Arguments to create many AssetLinks.
     * @example
     * // Create many AssetLinks
     * const assetLink = await prisma.assetLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetLinkCreateManyArgs>(args?: SelectSubset<T, AssetLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssetLinks and returns the data saved in the database.
     * @param {AssetLinkCreateManyAndReturnArgs} args - Arguments to create many AssetLinks.
     * @example
     * // Create many AssetLinks
     * const assetLink = await prisma.assetLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssetLinks and only return the `id`
     * const assetLinkWithIdOnly = await prisma.assetLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssetLink.
     * @param {AssetLinkDeleteArgs} args - Arguments to delete one AssetLink.
     * @example
     * // Delete one AssetLink
     * const AssetLink = await prisma.assetLink.delete({
     *   where: {
     *     // ... filter to delete one AssetLink
     *   }
     * })
     * 
     */
    delete<T extends AssetLinkDeleteArgs>(args: SelectSubset<T, AssetLinkDeleteArgs<ExtArgs>>): Prisma__AssetLinkClient<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssetLink.
     * @param {AssetLinkUpdateArgs} args - Arguments to update one AssetLink.
     * @example
     * // Update one AssetLink
     * const assetLink = await prisma.assetLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetLinkUpdateArgs>(args: SelectSubset<T, AssetLinkUpdateArgs<ExtArgs>>): Prisma__AssetLinkClient<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssetLinks.
     * @param {AssetLinkDeleteManyArgs} args - Arguments to filter AssetLinks to delete.
     * @example
     * // Delete a few AssetLinks
     * const { count } = await prisma.assetLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetLinkDeleteManyArgs>(args?: SelectSubset<T, AssetLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetLinks
     * const assetLink = await prisma.assetLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetLinkUpdateManyArgs>(args: SelectSubset<T, AssetLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetLinks and returns the data updated in the database.
     * @param {AssetLinkUpdateManyAndReturnArgs} args - Arguments to update many AssetLinks.
     * @example
     * // Update many AssetLinks
     * const assetLink = await prisma.assetLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssetLinks and only return the `id`
     * const assetLinkWithIdOnly = await prisma.assetLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssetLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssetLink.
     * @param {AssetLinkUpsertArgs} args - Arguments to update or create a AssetLink.
     * @example
     * // Update or create a AssetLink
     * const assetLink = await prisma.assetLink.upsert({
     *   create: {
     *     // ... data to create a AssetLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetLink we want to update
     *   }
     * })
     */
    upsert<T extends AssetLinkUpsertArgs>(args: SelectSubset<T, AssetLinkUpsertArgs<ExtArgs>>): Prisma__AssetLinkClient<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssetLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetLinkCountArgs} args - Arguments to filter AssetLinks to count.
     * @example
     * // Count the number of AssetLinks
     * const count = await prisma.assetLink.count({
     *   where: {
     *     // ... the filter for the AssetLinks we want to count
     *   }
     * })
    **/
    count<T extends AssetLinkCountArgs>(
      args?: Subset<T, AssetLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetLinkAggregateArgs>(args: Subset<T, AssetLinkAggregateArgs>): Prisma.PrismaPromise<GetAssetLinkAggregateType<T>>

    /**
     * Group by AssetLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetLinkGroupByArgs} args - Group by arguments.
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
      T extends AssetLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetLinkGroupByArgs['orderBy'] }
        : { orderBy?: AssetLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetLink model
   */
  readonly fields: AssetLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    snapshot<T extends AssetLink$snapshotArgs<ExtArgs> = {}>(args?: Subset<T, AssetLink$snapshotArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AssetLink model
   */
  interface AssetLinkFieldRefs {
    readonly id: FieldRef<"AssetLink", 'String'>
    readonly assetId: FieldRef<"AssetLink", 'String'>
    readonly snapshotId: FieldRef<"AssetLink", 'String'>
    readonly type: FieldRef<"AssetLink", 'AssetLinkType'>
  }
    

  // Custom InputTypes
  /**
   * AssetLink findUnique
   */
  export type AssetLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssetLink to fetch.
     */
    where: AssetLinkWhereUniqueInput
  }

  /**
   * AssetLink findUniqueOrThrow
   */
  export type AssetLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssetLink to fetch.
     */
    where: AssetLinkWhereUniqueInput
  }

  /**
   * AssetLink findFirst
   */
  export type AssetLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssetLink to fetch.
     */
    where?: AssetLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetLinks to fetch.
     */
    orderBy?: AssetLinkOrderByWithRelationInput | AssetLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetLinks.
     */
    cursor?: AssetLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetLinks.
     */
    distinct?: AssetLinkScalarFieldEnum | AssetLinkScalarFieldEnum[]
  }

  /**
   * AssetLink findFirstOrThrow
   */
  export type AssetLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssetLink to fetch.
     */
    where?: AssetLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetLinks to fetch.
     */
    orderBy?: AssetLinkOrderByWithRelationInput | AssetLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetLinks.
     */
    cursor?: AssetLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetLinks.
     */
    distinct?: AssetLinkScalarFieldEnum | AssetLinkScalarFieldEnum[]
  }

  /**
   * AssetLink findMany
   */
  export type AssetLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssetLinks to fetch.
     */
    where?: AssetLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetLinks to fetch.
     */
    orderBy?: AssetLinkOrderByWithRelationInput | AssetLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetLinks.
     */
    cursor?: AssetLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetLinks.
     */
    distinct?: AssetLinkScalarFieldEnum | AssetLinkScalarFieldEnum[]
  }

  /**
   * AssetLink create
   */
  export type AssetLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetLink.
     */
    data: XOR<AssetLinkCreateInput, AssetLinkUncheckedCreateInput>
  }

  /**
   * AssetLink createMany
   */
  export type AssetLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetLinks.
     */
    data: AssetLinkCreateManyInput | AssetLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetLink createManyAndReturn
   */
  export type AssetLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * The data used to create many AssetLinks.
     */
    data: AssetLinkCreateManyInput | AssetLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetLink update
   */
  export type AssetLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetLink.
     */
    data: XOR<AssetLinkUpdateInput, AssetLinkUncheckedUpdateInput>
    /**
     * Choose, which AssetLink to update.
     */
    where: AssetLinkWhereUniqueInput
  }

  /**
   * AssetLink updateMany
   */
  export type AssetLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetLinks.
     */
    data: XOR<AssetLinkUpdateManyMutationInput, AssetLinkUncheckedUpdateManyInput>
    /**
     * Filter which AssetLinks to update
     */
    where?: AssetLinkWhereInput
    /**
     * Limit how many AssetLinks to update.
     */
    limit?: number
  }

  /**
   * AssetLink updateManyAndReturn
   */
  export type AssetLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * The data used to update AssetLinks.
     */
    data: XOR<AssetLinkUpdateManyMutationInput, AssetLinkUncheckedUpdateManyInput>
    /**
     * Filter which AssetLinks to update
     */
    where?: AssetLinkWhereInput
    /**
     * Limit how many AssetLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetLink upsert
   */
  export type AssetLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetLink to update in case it exists.
     */
    where: AssetLinkWhereUniqueInput
    /**
     * In case the AssetLink found by the `where` argument doesn't exist, create a new AssetLink with this data.
     */
    create: XOR<AssetLinkCreateInput, AssetLinkUncheckedCreateInput>
    /**
     * In case the AssetLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetLinkUpdateInput, AssetLinkUncheckedUpdateInput>
  }

  /**
   * AssetLink delete
   */
  export type AssetLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    /**
     * Filter which AssetLink to delete.
     */
    where: AssetLinkWhereUniqueInput
  }

  /**
   * AssetLink deleteMany
   */
  export type AssetLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetLinks to delete
     */
    where?: AssetLinkWhereInput
    /**
     * Limit how many AssetLinks to delete.
     */
    limit?: number
  }

  /**
   * AssetLink.snapshot
   */
  export type AssetLink$snapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AssetLink without action
   */
  export type AssetLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    ebookId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    ebookId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    ebookId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChapterMinAggregateInputType = {
    id?: true
    ebookId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    ebookId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    ebookId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
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
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
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
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    ebookId: string
    content: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ChapterCountAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    ebookId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ebookId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
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
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ebookId: string
      content: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
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
    readonly id: FieldRef<"Chapter", 'String'>
    readonly ebookId: FieldRef<"Chapter", 'String'>
    readonly content: FieldRef<"Chapter", 'Json'>
    readonly createdAt: FieldRef<"Chapter", 'DateTime'>
    readonly updatedAt: FieldRef<"Chapter", 'DateTime'>
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
  }

  export type EbookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    shortDescription: string | null
    ownerId: string | null
    currentSnapshotId: string | null
  }

  export type EbookCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    shortDescription: number
    ownerId: number
    currentSnapshotId: number
    _all: number
  }


  export type EbookMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    shortDescription?: true
    ownerId?: true
    currentSnapshotId?: true
  }

  export type EbookMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    shortDescription?: true
    ownerId?: true
    currentSnapshotId?: true
  }

  export type EbookCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    shortDescription?: true
    ownerId?: true
    currentSnapshotId?: true
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
        [P in keyof T & keyof AggregateEbook]: P extends '_count' | 'count'
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
    _count: EbookCountAggregateOutputType | null
    _min: EbookMinAggregateOutputType | null
    _max: EbookMaxAggregateOutputType | null
  }

  type GetEbookGroupByPayload<T extends EbookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EbookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EbookGroupByOutputType))]: P extends '_count'
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
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
    snapshots?: boolean | Ebook$snapshotsArgs<ExtArgs>
    chapters?: boolean | Ebook$chaptersArgs<ExtArgs>
    _count?: boolean | EbookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebook"]>

  export type EbookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    shortDescription?: boolean
    ownerId?: boolean
    currentSnapshotId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
  }, ExtArgs["result"]["ebook"]>

  export type EbookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    shortDescription?: boolean
    ownerId?: boolean
    currentSnapshotId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
  }, ExtArgs["result"]["ebook"]>

  export type EbookSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    shortDescription?: boolean
    ownerId?: boolean
    currentSnapshotId?: boolean
  }

  export type EbookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "subtitle" | "shortDescription" | "ownerId" | "currentSnapshotId", ExtArgs["result"]["ebook"]>
  export type EbookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
    snapshots?: boolean | Ebook$snapshotsArgs<ExtArgs>
    chapters?: boolean | Ebook$chaptersArgs<ExtArgs>
    _count?: boolean | EbookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EbookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
  }
  export type EbookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    currentSnapshot?: boolean | Ebook$currentSnapshotArgs<ExtArgs>
  }

  export type $EbookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ebook"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      currentSnapshot: Prisma.$SnapshotPayload<ExtArgs> | null
      snapshots: Prisma.$SnapshotPayload<ExtArgs>[]
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subtitle: string | null
      shortDescription: string | null
      ownerId: string
      currentSnapshotId: string | null
    }, ExtArgs["result"]["ebook"]>
    composites: {}
  }

  type EbookGetPayload<S extends boolean | null | undefined | EbookDefaultArgs> = $Result.GetResult<Prisma.$EbookPayload, S>

  type EbookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EbookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EbookCountAggregateInputType | true
    }

  export interface EbookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ebook'], meta: { name: 'Ebook' } }
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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EbookCountAggregateOutputType>
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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EbookGroupByArgs['orderBy'] }
        : { orderBy?: EbookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
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
    snapshots<T extends Ebook$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Ebook$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chapters<T extends Ebook$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Ebook$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Ebook", 'String'>
    readonly title: FieldRef<"Ebook", 'String'>
    readonly subtitle: FieldRef<"Ebook", 'String'>
    readonly shortDescription: FieldRef<"Ebook", 'String'>
    readonly ownerId: FieldRef<"Ebook", 'String'>
    readonly currentSnapshotId: FieldRef<"Ebook", 'String'>
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
    updatedAt: Date | null
  }

  export type SnapshotMaxAggregateOutputType = {
    id: string | null
    ebookId: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SnapshotCountAggregateOutputType = {
    id: number
    ebookId: number
    version: number
    createdAt: number
    updatedAt: number
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
    updatedAt?: true
  }

  export type SnapshotMaxAggregateInputType = {
    id?: true
    ebookId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SnapshotCountAggregateInputType = {
    id?: true
    ebookId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
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
        [P in keyof T & keyof AggregateSnapshot]: P extends '_count' | 'count'
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
    updatedAt: Date
    _count: SnapshotCountAggregateOutputType | null
    _avg: SnapshotAvgAggregateOutputType | null
    _sum: SnapshotSumAggregateOutputType | null
    _min: SnapshotMinAggregateOutputType | null
    _max: SnapshotMaxAggregateOutputType | null
  }

  type GetSnapshotGroupByPayload<T extends SnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnapshotGroupByOutputType))]: P extends '_count'
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
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    currentForEbook?: boolean | Snapshot$currentForEbookArgs<ExtArgs>
    assetLinks?: boolean | Snapshot$assetLinksArgs<ExtArgs>
    _count?: boolean | SnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebookId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectScalar = {
    id?: boolean
    ebookId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ebookId" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["snapshot"]>
  export type SnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebook?: boolean | EbookDefaultArgs<ExtArgs>
    currentForEbook?: boolean | Snapshot$currentForEbookArgs<ExtArgs>
    assetLinks?: boolean | Snapshot$assetLinksArgs<ExtArgs>
    _count?: boolean | SnapshotCountOutputTypeDefaultArgs<ExtArgs>
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
      currentForEbook: Prisma.$EbookPayload<ExtArgs> | null
      assetLinks: Prisma.$AssetLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ebookId: string
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["snapshot"]>
    composites: {}
  }

  type SnapshotGetPayload<S extends boolean | null | undefined | SnapshotDefaultArgs> = $Result.GetResult<Prisma.$SnapshotPayload, S>

  type SnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnapshotCountAggregateInputType | true
    }

  export interface SnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Snapshot'], meta: { name: 'Snapshot' } }
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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnapshotCountAggregateOutputType>
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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnapshotGroupByArgs['orderBy'] }
        : { orderBy?: SnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
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
    currentForEbook<T extends Snapshot$currentForEbookArgs<ExtArgs> = {}>(args?: Subset<T, Snapshot$currentForEbookArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assetLinks<T extends Snapshot$assetLinksArgs<ExtArgs> = {}>(args?: Subset<T, Snapshot$assetLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Snapshot", 'String'>
    readonly ebookId: FieldRef<"Snapshot", 'String'>
    readonly version: FieldRef<"Snapshot", 'Int'>
    readonly createdAt: FieldRef<"Snapshot", 'DateTime'>
    readonly updatedAt: FieldRef<"Snapshot", 'DateTime'>
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
   * Snapshot.assetLinks
   */
  export type Snapshot$assetLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetLink
     */
    select?: AssetLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetLink
     */
    omit?: AssetLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetLinkInclude<ExtArgs> | null
    where?: AssetLinkWhereInput
    orderBy?: AssetLinkOrderByWithRelationInput | AssetLinkOrderByWithRelationInput[]
    cursor?: AssetLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetLinkScalarFieldEnum | AssetLinkScalarFieldEnum[]
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
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
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
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
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
    name?: boolean
    stripeCustomerId?: boolean
    subscriptionStatus?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ebooks?: boolean | User$ebooksArgs<ExtArgs>
    assets?: boolean | User$assetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
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
    name?: boolean
    stripeCustomerId?: boolean
    subscriptionStatus?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "stripeCustomerId" | "subscriptionStatus" | "plan" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebooks?: boolean | User$ebooksArgs<ExtArgs>
    assets?: boolean | User$assetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ebooks: Prisma.$EbookPayload<ExtArgs>[]
      assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
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
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
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
    ebooks<T extends User$ebooksArgs<ExtArgs> = {}>(args?: Subset<T, User$ebooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assets<T extends User$assetsArgs<ExtArgs> = {}>(args?: Subset<T, User$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
    readonly subscriptionStatus: FieldRef<"User", 'SubscriptionStatus'>
    readonly plan: FieldRef<"User", 'PlanType'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AssetScalarFieldEnum: {
    id: 'id',
    key: 'key',
    bucket: 'bucket',
    fileName: 'fileName',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    etag: 'etag',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const AssetLinkScalarFieldEnum: {
    id: 'id',
    assetId: 'assetId',
    snapshotId: 'snapshotId',
    type: 'type'
  };

  export type AssetLinkScalarFieldEnum = (typeof AssetLinkScalarFieldEnum)[keyof typeof AssetLinkScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    ebookId: 'ebookId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const EbookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    shortDescription: 'shortDescription',
    ownerId: 'ownerId',
    currentSnapshotId: 'currentSnapshotId'
  };

  export type EbookScalarFieldEnum = (typeof EbookScalarFieldEnum)[keyof typeof EbookScalarFieldEnum]


  export const SnapshotScalarFieldEnum: {
    id: 'id',
    ebookId: 'ebookId',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SnapshotScalarFieldEnum = (typeof SnapshotScalarFieldEnum)[keyof typeof SnapshotScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    stripeCustomerId: 'stripeCustomerId',
    subscriptionStatus: 'subscriptionStatus',
    plan: 'plan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AssetLinkType'
   */
  export type EnumAssetLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetLinkType'>
    


  /**
   * Reference to a field of type 'AssetLinkType[]'
   */
  export type ListEnumAssetLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetLinkType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
    mimeType?: StringNullableFilter<"Asset"> | string | null
    sizeBytes?: IntNullableFilter<"Asset"> | number | null
    etag?: StringNullableFilter<"Asset"> | string | null
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    ownerId?: StringNullableFilter<"Asset"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assetLinks?: AssetLinkListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    etag?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    assetLinks?: AssetLinkOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    bucket?: StringFilter<"Asset"> | string
    fileName?: StringFilter<"Asset"> | string
    mimeType?: StringNullableFilter<"Asset"> | string | null
    sizeBytes?: IntNullableFilter<"Asset"> | number | null
    etag?: StringNullableFilter<"Asset"> | string | null
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    ownerId?: StringNullableFilter<"Asset"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assetLinks?: AssetLinkListRelationFilter
  }, "id" | "key">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    etag?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrderInput | SortOrder
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
    mimeType?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    sizeBytes?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    etag?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    ownerId?: StringNullableWithAggregatesFilter<"Asset"> | string | null
  }

  export type AssetLinkWhereInput = {
    AND?: AssetLinkWhereInput | AssetLinkWhereInput[]
    OR?: AssetLinkWhereInput[]
    NOT?: AssetLinkWhereInput | AssetLinkWhereInput[]
    id?: StringFilter<"AssetLink"> | string
    assetId?: StringFilter<"AssetLink"> | string
    snapshotId?: StringNullableFilter<"AssetLink"> | string | null
    type?: EnumAssetLinkTypeFilter<"AssetLink"> | $Enums.AssetLinkType
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    snapshot?: XOR<SnapshotNullableScalarRelationFilter, SnapshotWhereInput> | null
  }

  export type AssetLinkOrderByWithRelationInput = {
    id?: SortOrder
    assetId?: SortOrder
    snapshotId?: SortOrderInput | SortOrder
    type?: SortOrder
    asset?: AssetOrderByWithRelationInput
    snapshot?: SnapshotOrderByWithRelationInput
  }

  export type AssetLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssetLinkWhereInput | AssetLinkWhereInput[]
    OR?: AssetLinkWhereInput[]
    NOT?: AssetLinkWhereInput | AssetLinkWhereInput[]
    assetId?: StringFilter<"AssetLink"> | string
    snapshotId?: StringNullableFilter<"AssetLink"> | string | null
    type?: EnumAssetLinkTypeFilter<"AssetLink"> | $Enums.AssetLinkType
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    snapshot?: XOR<SnapshotNullableScalarRelationFilter, SnapshotWhereInput> | null
  }, "id">

  export type AssetLinkOrderByWithAggregationInput = {
    id?: SortOrder
    assetId?: SortOrder
    snapshotId?: SortOrderInput | SortOrder
    type?: SortOrder
    _count?: AssetLinkCountOrderByAggregateInput
    _max?: AssetLinkMaxOrderByAggregateInput
    _min?: AssetLinkMinOrderByAggregateInput
  }

  export type AssetLinkScalarWhereWithAggregatesInput = {
    AND?: AssetLinkScalarWhereWithAggregatesInput | AssetLinkScalarWhereWithAggregatesInput[]
    OR?: AssetLinkScalarWhereWithAggregatesInput[]
    NOT?: AssetLinkScalarWhereWithAggregatesInput | AssetLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssetLink"> | string
    assetId?: StringWithAggregatesFilter<"AssetLink"> | string
    snapshotId?: StringNullableWithAggregatesFilter<"AssetLink"> | string | null
    type?: EnumAssetLinkTypeWithAggregatesFilter<"AssetLink"> | $Enums.AssetLinkType
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: StringFilter<"Chapter"> | string
    ebookId?: StringFilter<"Chapter"> | string
    content?: JsonFilter<"Chapter">
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebook?: EbookOrderByWithRelationInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    ebookId?: StringFilter<"Chapter"> | string
    content?: JsonFilter<"Chapter">
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapter"> | string
    ebookId?: StringWithAggregatesFilter<"Chapter"> | string
    content?: JsonWithAggregatesFilter<"Chapter">
    createdAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
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
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    currentSnapshot?: XOR<SnapshotNullableScalarRelationFilter, SnapshotWhereInput> | null
    snapshots?: SnapshotListRelationFilter
    chapters?: ChapterListRelationFilter
  }

  export type EbookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    currentSnapshot?: SnapshotOrderByWithRelationInput
    snapshots?: SnapshotOrderByRelationAggregateInput
    chapters?: ChapterOrderByRelationAggregateInput
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
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    currentSnapshot?: XOR<SnapshotNullableScalarRelationFilter, SnapshotWhereInput> | null
    snapshots?: SnapshotListRelationFilter
    chapters?: ChapterListRelationFilter
  }, "id" | "currentSnapshotId">

  export type EbookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrderInput | SortOrder
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
  }

  export type SnapshotWhereInput = {
    AND?: SnapshotWhereInput | SnapshotWhereInput[]
    OR?: SnapshotWhereInput[]
    NOT?: SnapshotWhereInput | SnapshotWhereInput[]
    id?: StringFilter<"Snapshot"> | string
    ebookId?: StringFilter<"Snapshot"> | string
    version?: IntFilter<"Snapshot"> | number
    createdAt?: DateTimeFilter<"Snapshot"> | Date | string
    updatedAt?: DateTimeFilter<"Snapshot"> | Date | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    currentForEbook?: XOR<EbookNullableScalarRelationFilter, EbookWhereInput> | null
    assetLinks?: AssetLinkListRelationFilter
  }

  export type SnapshotOrderByWithRelationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebook?: EbookOrderByWithRelationInput
    currentForEbook?: EbookOrderByWithRelationInput
    assetLinks?: AssetLinkOrderByRelationAggregateInput
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
    updatedAt?: DateTimeFilter<"Snapshot"> | Date | string
    ebook?: XOR<EbookScalarRelationFilter, EbookWhereInput>
    currentForEbook?: XOR<EbookNullableScalarRelationFilter, EbookWhereInput> | null
    assetLinks?: AssetLinkListRelationFilter
  }, "id" | "ebookId_version">

  export type SnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    ebookId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    updatedAt?: DateTimeWithAggregatesFilter<"Snapshot"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"User"> | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ebooks?: EbookListRelationFilter
    assets?: AssetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ebooks?: EbookOrderByRelationAggregateInput
    assets?: AssetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    stripeCustomerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"User"> | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ebooks?: EbookListRelationFilter
    assets?: AssetListRelationFilter
  }, "id" | "email" | "stripeCustomerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusWithAggregatesFilter<"User"> | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeWithAggregatesFilter<"User"> | $Enums.PlanType
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AssetCreateInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType?: string | null
    sizeBytes?: number | null
    etag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutAssetsInput
    assetLinks?: AssetLinkCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType?: string | null
    sizeBytes?: number | null
    etag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId?: string | null
    assetLinks?: AssetLinkUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutAssetsNestedInput
    assetLinks?: AssetLinkUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    assetLinks?: AssetLinkUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType?: string | null
    sizeBytes?: number | null
    etag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId?: string | null
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetLinkCreateInput = {
    id?: string
    type: $Enums.AssetLinkType
    asset: AssetCreateNestedOneWithoutAssetLinksInput
    snapshot?: SnapshotCreateNestedOneWithoutAssetLinksInput
  }

  export type AssetLinkUncheckedCreateInput = {
    id?: string
    assetId: string
    snapshotId?: string | null
    type: $Enums.AssetLinkType
  }

  export type AssetLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
    asset?: AssetUpdateOneRequiredWithoutAssetLinksNestedInput
    snapshot?: SnapshotUpdateOneWithoutAssetLinksNestedInput
  }

  export type AssetLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
  }

  export type AssetLinkCreateManyInput = {
    id?: string
    assetId: string
    snapshotId?: string | null
    type: $Enums.AssetLinkType
  }

  export type AssetLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
  }

  export type AssetLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
  }

  export type ChapterCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: string
    ebookId: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateManyInput = {
    id?: string
    ebookId: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    owner: UserCreateNestedOneWithoutEbooksInput
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type EbookCreateManyInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
  }

  export type EbookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EbookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SnapshotCreateInput = {
    id?: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutSnapshotsInput
    currentForEbook?: EbookCreateNestedOneWithoutCurrentSnapshotInput
    assetLinks?: AssetLinkCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateInput = {
    id?: string
    ebookId: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentForEbook?: EbookUncheckedCreateNestedOneWithoutCurrentSnapshotInput
    assetLinks?: AssetLinkUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutSnapshotsNestedInput
    currentForEbook?: EbookUpdateOneWithoutCurrentSnapshotNestedInput
    assetLinks?: AssetLinkUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentForEbook?: EbookUncheckedUpdateOneWithoutCurrentSnapshotNestedInput
    assetLinks?: AssetLinkUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotCreateManyInput = {
    id?: string
    ebookId: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    ebooks?: EbookCreateNestedManyWithoutOwnerInput
    assets?: AssetCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    ebooks?: EbookUncheckedCreateNestedManyWithoutOwnerInput
    assets?: AssetUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebooks?: EbookUpdateManyWithoutOwnerNestedInput
    assets?: AssetUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebooks?: EbookUncheckedUpdateManyWithoutOwnerNestedInput
    assets?: AssetUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AssetLinkListRelationFilter = {
    every?: AssetLinkWhereInput
    some?: AssetLinkWhereInput
    none?: AssetLinkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssetLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    etag?: SortOrder
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
    etag?: SortOrder
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
    etag?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EnumAssetLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetLinkType | EnumAssetLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetLinkType[] | ListEnumAssetLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetLinkType[] | ListEnumAssetLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetLinkTypeFilter<$PrismaModel> | $Enums.AssetLinkType
  }

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type SnapshotNullableScalarRelationFilter = {
    is?: SnapshotWhereInput | null
    isNot?: SnapshotWhereInput | null
  }

  export type AssetLinkCountOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    snapshotId?: SortOrder
    type?: SortOrder
  }

  export type AssetLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    snapshotId?: SortOrder
    type?: SortOrder
  }

  export type AssetLinkMinOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    snapshotId?: SortOrder
    type?: SortOrder
  }

  export type EnumAssetLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetLinkType | EnumAssetLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetLinkType[] | ListEnumAssetLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetLinkType[] | ListEnumAssetLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetLinkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetLinkTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetLinkTypeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

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

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
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

  export type SnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EbookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    shortDescription?: SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrder
  }

  export type EbookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    shortDescription?: SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrder
  }

  export type EbookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    shortDescription?: SortOrder
    ownerId?: SortOrder
    currentSnapshotId?: SortOrder
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
    updatedAt?: SortOrder
  }

  export type SnapshotAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type SnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    ebookId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnapshotSumOrderByAggregateInput = {
    version?: SortOrder
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

  export type EbookListRelationFilter = {
    every?: EbookWhereInput
    some?: EbookWhereInput
    none?: EbookWhereInput
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type EbookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
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
    name?: SortOrder
    stripeCustomerId?: SortOrder
    subscriptionStatus?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserCreateNestedOneWithoutAssetsInput = {
    create?: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetsInput
    connect?: UserWhereUniqueInput
  }

  export type AssetLinkCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetLinkCreateWithoutAssetInput, AssetLinkUncheckedCreateWithoutAssetInput> | AssetLinkCreateWithoutAssetInput[] | AssetLinkUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetLinkCreateOrConnectWithoutAssetInput | AssetLinkCreateOrConnectWithoutAssetInput[]
    createMany?: AssetLinkCreateManyAssetInputEnvelope
    connect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
  }

  export type AssetLinkUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetLinkCreateWithoutAssetInput, AssetLinkUncheckedCreateWithoutAssetInput> | AssetLinkCreateWithoutAssetInput[] | AssetLinkUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetLinkCreateOrConnectWithoutAssetInput | AssetLinkCreateOrConnectWithoutAssetInput[]
    createMany?: AssetLinkCreateManyAssetInputEnvelope
    connect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutAssetsNestedInput = {
    create?: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetsInput
    upsert?: UserUpsertWithoutAssetsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssetsInput, UserUpdateWithoutAssetsInput>, UserUncheckedUpdateWithoutAssetsInput>
  }

  export type AssetLinkUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetLinkCreateWithoutAssetInput, AssetLinkUncheckedCreateWithoutAssetInput> | AssetLinkCreateWithoutAssetInput[] | AssetLinkUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetLinkCreateOrConnectWithoutAssetInput | AssetLinkCreateOrConnectWithoutAssetInput[]
    upsert?: AssetLinkUpsertWithWhereUniqueWithoutAssetInput | AssetLinkUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetLinkCreateManyAssetInputEnvelope
    set?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    disconnect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    delete?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    connect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    update?: AssetLinkUpdateWithWhereUniqueWithoutAssetInput | AssetLinkUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetLinkUpdateManyWithWhereWithoutAssetInput | AssetLinkUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetLinkScalarWhereInput | AssetLinkScalarWhereInput[]
  }

  export type AssetLinkUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetLinkCreateWithoutAssetInput, AssetLinkUncheckedCreateWithoutAssetInput> | AssetLinkCreateWithoutAssetInput[] | AssetLinkUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetLinkCreateOrConnectWithoutAssetInput | AssetLinkCreateOrConnectWithoutAssetInput[]
    upsert?: AssetLinkUpsertWithWhereUniqueWithoutAssetInput | AssetLinkUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetLinkCreateManyAssetInputEnvelope
    set?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    disconnect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    delete?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    connect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    update?: AssetLinkUpdateWithWhereUniqueWithoutAssetInput | AssetLinkUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetLinkUpdateManyWithWhereWithoutAssetInput | AssetLinkUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetLinkScalarWhereInput | AssetLinkScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutAssetLinksInput = {
    create?: XOR<AssetCreateWithoutAssetLinksInput, AssetUncheckedCreateWithoutAssetLinksInput>
    connectOrCreate?: AssetCreateOrConnectWithoutAssetLinksInput
    connect?: AssetWhereUniqueInput
  }

  export type SnapshotCreateNestedOneWithoutAssetLinksInput = {
    create?: XOR<SnapshotCreateWithoutAssetLinksInput, SnapshotUncheckedCreateWithoutAssetLinksInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutAssetLinksInput
    connect?: SnapshotWhereUniqueInput
  }

  export type EnumAssetLinkTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetLinkType
  }

  export type AssetUpdateOneRequiredWithoutAssetLinksNestedInput = {
    create?: XOR<AssetCreateWithoutAssetLinksInput, AssetUncheckedCreateWithoutAssetLinksInput>
    connectOrCreate?: AssetCreateOrConnectWithoutAssetLinksInput
    upsert?: AssetUpsertWithoutAssetLinksInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutAssetLinksInput, AssetUpdateWithoutAssetLinksInput>, AssetUncheckedUpdateWithoutAssetLinksInput>
  }

  export type SnapshotUpdateOneWithoutAssetLinksNestedInput = {
    create?: XOR<SnapshotCreateWithoutAssetLinksInput, SnapshotUncheckedCreateWithoutAssetLinksInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutAssetLinksInput
    upsert?: SnapshotUpsertWithoutAssetLinksInput
    disconnect?: SnapshotWhereInput | boolean
    delete?: SnapshotWhereInput | boolean
    connect?: SnapshotWhereUniqueInput
    update?: XOR<XOR<SnapshotUpdateToOneWithWhereWithoutAssetLinksInput, SnapshotUpdateWithoutAssetLinksInput>, SnapshotUncheckedUpdateWithoutAssetLinksInput>
  }

  export type EbookCreateNestedOneWithoutChaptersInput = {
    create?: XOR<EbookCreateWithoutChaptersInput, EbookUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: EbookCreateOrConnectWithoutChaptersInput
    connect?: EbookWhereUniqueInput
  }

  export type EbookUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<EbookCreateWithoutChaptersInput, EbookUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: EbookCreateOrConnectWithoutChaptersInput
    upsert?: EbookUpsertWithoutChaptersInput
    connect?: EbookWhereUniqueInput
    update?: XOR<XOR<EbookUpdateToOneWithWhereWithoutChaptersInput, EbookUpdateWithoutChaptersInput>, EbookUncheckedUpdateWithoutChaptersInput>
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

  export type EbookCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<EbookCreateWithoutSnapshotsInput, EbookUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: EbookCreateOrConnectWithoutSnapshotsInput
    connect?: EbookWhereUniqueInput
  }

  export type EbookCreateNestedOneWithoutCurrentSnapshotInput = {
    create?: XOR<EbookCreateWithoutCurrentSnapshotInput, EbookUncheckedCreateWithoutCurrentSnapshotInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCurrentSnapshotInput
    connect?: EbookWhereUniqueInput
  }

  export type AssetLinkCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<AssetLinkCreateWithoutSnapshotInput, AssetLinkUncheckedCreateWithoutSnapshotInput> | AssetLinkCreateWithoutSnapshotInput[] | AssetLinkUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AssetLinkCreateOrConnectWithoutSnapshotInput | AssetLinkCreateOrConnectWithoutSnapshotInput[]
    createMany?: AssetLinkCreateManySnapshotInputEnvelope
    connect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
  }

  export type EbookUncheckedCreateNestedOneWithoutCurrentSnapshotInput = {
    create?: XOR<EbookCreateWithoutCurrentSnapshotInput, EbookUncheckedCreateWithoutCurrentSnapshotInput>
    connectOrCreate?: EbookCreateOrConnectWithoutCurrentSnapshotInput
    connect?: EbookWhereUniqueInput
  }

  export type AssetLinkUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<AssetLinkCreateWithoutSnapshotInput, AssetLinkUncheckedCreateWithoutSnapshotInput> | AssetLinkCreateWithoutSnapshotInput[] | AssetLinkUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AssetLinkCreateOrConnectWithoutSnapshotInput | AssetLinkCreateOrConnectWithoutSnapshotInput[]
    createMany?: AssetLinkCreateManySnapshotInputEnvelope
    connect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EbookUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<EbookCreateWithoutSnapshotsInput, EbookUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: EbookCreateOrConnectWithoutSnapshotsInput
    upsert?: EbookUpsertWithoutSnapshotsInput
    connect?: EbookWhereUniqueInput
    update?: XOR<XOR<EbookUpdateToOneWithWhereWithoutSnapshotsInput, EbookUpdateWithoutSnapshotsInput>, EbookUncheckedUpdateWithoutSnapshotsInput>
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

  export type AssetLinkUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<AssetLinkCreateWithoutSnapshotInput, AssetLinkUncheckedCreateWithoutSnapshotInput> | AssetLinkCreateWithoutSnapshotInput[] | AssetLinkUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AssetLinkCreateOrConnectWithoutSnapshotInput | AssetLinkCreateOrConnectWithoutSnapshotInput[]
    upsert?: AssetLinkUpsertWithWhereUniqueWithoutSnapshotInput | AssetLinkUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: AssetLinkCreateManySnapshotInputEnvelope
    set?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    disconnect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    delete?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    connect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    update?: AssetLinkUpdateWithWhereUniqueWithoutSnapshotInput | AssetLinkUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: AssetLinkUpdateManyWithWhereWithoutSnapshotInput | AssetLinkUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: AssetLinkScalarWhereInput | AssetLinkScalarWhereInput[]
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

  export type AssetLinkUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<AssetLinkCreateWithoutSnapshotInput, AssetLinkUncheckedCreateWithoutSnapshotInput> | AssetLinkCreateWithoutSnapshotInput[] | AssetLinkUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AssetLinkCreateOrConnectWithoutSnapshotInput | AssetLinkCreateOrConnectWithoutSnapshotInput[]
    upsert?: AssetLinkUpsertWithWhereUniqueWithoutSnapshotInput | AssetLinkUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: AssetLinkCreateManySnapshotInputEnvelope
    set?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    disconnect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    delete?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    connect?: AssetLinkWhereUniqueInput | AssetLinkWhereUniqueInput[]
    update?: AssetLinkUpdateWithWhereUniqueWithoutSnapshotInput | AssetLinkUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: AssetLinkUpdateManyWithWhereWithoutSnapshotInput | AssetLinkUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: AssetLinkScalarWhereInput | AssetLinkScalarWhereInput[]
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

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumAssetLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetLinkType | EnumAssetLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetLinkType[] | ListEnumAssetLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetLinkType[] | ListEnumAssetLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetLinkTypeFilter<$PrismaModel> | $Enums.AssetLinkType
  }

  export type NestedEnumAssetLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetLinkType | EnumAssetLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetLinkType[] | ListEnumAssetLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetLinkType[] | ListEnumAssetLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetLinkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetLinkTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetLinkTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

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
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    ebooks?: EbookCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAssetsInput = {
    id?: string
    email: string
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    ebooks?: EbookUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAssetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
  }

  export type AssetLinkCreateWithoutAssetInput = {
    id?: string
    type: $Enums.AssetLinkType
    snapshot?: SnapshotCreateNestedOneWithoutAssetLinksInput
  }

  export type AssetLinkUncheckedCreateWithoutAssetInput = {
    id?: string
    snapshotId?: string | null
    type: $Enums.AssetLinkType
  }

  export type AssetLinkCreateOrConnectWithoutAssetInput = {
    where: AssetLinkWhereUniqueInput
    create: XOR<AssetLinkCreateWithoutAssetInput, AssetLinkUncheckedCreateWithoutAssetInput>
  }

  export type AssetLinkCreateManyAssetInputEnvelope = {
    data: AssetLinkCreateManyAssetInput | AssetLinkCreateManyAssetInput[]
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebooks?: EbookUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebooks?: EbookUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type AssetLinkUpsertWithWhereUniqueWithoutAssetInput = {
    where: AssetLinkWhereUniqueInput
    update: XOR<AssetLinkUpdateWithoutAssetInput, AssetLinkUncheckedUpdateWithoutAssetInput>
    create: XOR<AssetLinkCreateWithoutAssetInput, AssetLinkUncheckedCreateWithoutAssetInput>
  }

  export type AssetLinkUpdateWithWhereUniqueWithoutAssetInput = {
    where: AssetLinkWhereUniqueInput
    data: XOR<AssetLinkUpdateWithoutAssetInput, AssetLinkUncheckedUpdateWithoutAssetInput>
  }

  export type AssetLinkUpdateManyWithWhereWithoutAssetInput = {
    where: AssetLinkScalarWhereInput
    data: XOR<AssetLinkUpdateManyMutationInput, AssetLinkUncheckedUpdateManyWithoutAssetInput>
  }

  export type AssetLinkScalarWhereInput = {
    AND?: AssetLinkScalarWhereInput | AssetLinkScalarWhereInput[]
    OR?: AssetLinkScalarWhereInput[]
    NOT?: AssetLinkScalarWhereInput | AssetLinkScalarWhereInput[]
    id?: StringFilter<"AssetLink"> | string
    assetId?: StringFilter<"AssetLink"> | string
    snapshotId?: StringNullableFilter<"AssetLink"> | string | null
    type?: EnumAssetLinkTypeFilter<"AssetLink"> | $Enums.AssetLinkType
  }

  export type AssetCreateWithoutAssetLinksInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType?: string | null
    sizeBytes?: number | null
    etag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateWithoutAssetLinksInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType?: string | null
    sizeBytes?: number | null
    etag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId?: string | null
  }

  export type AssetCreateOrConnectWithoutAssetLinksInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutAssetLinksInput, AssetUncheckedCreateWithoutAssetLinksInput>
  }

  export type SnapshotCreateWithoutAssetLinksInput = {
    id?: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutSnapshotsInput
    currentForEbook?: EbookCreateNestedOneWithoutCurrentSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutAssetLinksInput = {
    id?: string
    ebookId: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentForEbook?: EbookUncheckedCreateNestedOneWithoutCurrentSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutAssetLinksInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutAssetLinksInput, SnapshotUncheckedCreateWithoutAssetLinksInput>
  }

  export type AssetUpsertWithoutAssetLinksInput = {
    update: XOR<AssetUpdateWithoutAssetLinksInput, AssetUncheckedUpdateWithoutAssetLinksInput>
    create: XOR<AssetCreateWithoutAssetLinksInput, AssetUncheckedCreateWithoutAssetLinksInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutAssetLinksInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutAssetLinksInput, AssetUncheckedUpdateWithoutAssetLinksInput>
  }

  export type AssetUpdateWithoutAssetLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateWithoutAssetLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SnapshotUpsertWithoutAssetLinksInput = {
    update: XOR<SnapshotUpdateWithoutAssetLinksInput, SnapshotUncheckedUpdateWithoutAssetLinksInput>
    create: XOR<SnapshotCreateWithoutAssetLinksInput, SnapshotUncheckedCreateWithoutAssetLinksInput>
    where?: SnapshotWhereInput
  }

  export type SnapshotUpdateToOneWithWhereWithoutAssetLinksInput = {
    where?: SnapshotWhereInput
    data: XOR<SnapshotUpdateWithoutAssetLinksInput, SnapshotUncheckedUpdateWithoutAssetLinksInput>
  }

  export type SnapshotUpdateWithoutAssetLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutSnapshotsNestedInput
    currentForEbook?: EbookUpdateOneWithoutCurrentSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutAssetLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentForEbook?: EbookUncheckedUpdateOneWithoutCurrentSnapshotNestedInput
  }

  export type EbookCreateWithoutChaptersInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    owner: UserCreateNestedOneWithoutEbooksInput
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutChaptersInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutChaptersInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutChaptersInput, EbookUncheckedCreateWithoutChaptersInput>
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
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type UserCreateWithoutEbooksInput = {
    id?: string
    email: string
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutEbooksInput = {
    id?: string
    email: string
    name?: string | null
    stripeCustomerId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    plan?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutEbooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEbooksInput, UserUncheckedCreateWithoutEbooksInput>
  }

  export type SnapshotCreateWithoutCurrentForEbookInput = {
    id?: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ebook: EbookCreateNestedOneWithoutSnapshotsInput
    assetLinks?: AssetLinkCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutCurrentForEbookInput = {
    id?: string
    ebookId: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assetLinks?: AssetLinkUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutCurrentForEbookInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutCurrentForEbookInput, SnapshotUncheckedCreateWithoutCurrentForEbookInput>
  }

  export type SnapshotCreateWithoutEbookInput = {
    id?: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentForEbook?: EbookCreateNestedOneWithoutCurrentSnapshotInput
    assetLinks?: AssetLinkCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutEbookInput = {
    id?: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentForEbook?: EbookUncheckedCreateNestedOneWithoutCurrentSnapshotInput
    assetLinks?: AssetLinkUncheckedCreateNestedManyWithoutSnapshotInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUncheckedCreateWithoutEbookInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterCreateOrConnectWithoutEbookInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutEbookInput, ChapterUncheckedCreateWithoutEbookInput>
  }

  export type ChapterCreateManyEbookInputEnvelope = {
    data: ChapterCreateManyEbookInput | ChapterCreateManyEbookInput[]
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutEbooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutOwnerNestedInput
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
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebook?: EbookUpdateOneRequiredWithoutSnapshotsNestedInput
    assetLinks?: AssetLinkUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutCurrentForEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    ebookId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetLinks?: AssetLinkUncheckedUpdateManyWithoutSnapshotNestedInput
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
    updatedAt?: DateTimeFilter<"Snapshot"> | Date | string
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
    ebookId?: StringFilter<"Chapter"> | string
    content?: JsonFilter<"Chapter">
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
  }

  export type EbookCreateWithoutSnapshotsInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    owner: UserCreateNestedOneWithoutEbooksInput
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutSnapshotsInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    currentSnapshotId?: string | null
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutSnapshotsInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutSnapshotsInput, EbookUncheckedCreateWithoutSnapshotsInput>
  }

  export type EbookCreateWithoutCurrentSnapshotInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    owner: UserCreateNestedOneWithoutEbooksInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutCurrentSnapshotInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    ownerId: string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
  }

  export type EbookCreateOrConnectWithoutCurrentSnapshotInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutCurrentSnapshotInput, EbookUncheckedCreateWithoutCurrentSnapshotInput>
  }

  export type AssetLinkCreateWithoutSnapshotInput = {
    id?: string
    type: $Enums.AssetLinkType
    asset: AssetCreateNestedOneWithoutAssetLinksInput
  }

  export type AssetLinkUncheckedCreateWithoutSnapshotInput = {
    id?: string
    assetId: string
    type: $Enums.AssetLinkType
  }

  export type AssetLinkCreateOrConnectWithoutSnapshotInput = {
    where: AssetLinkWhereUniqueInput
    create: XOR<AssetLinkCreateWithoutSnapshotInput, AssetLinkUncheckedCreateWithoutSnapshotInput>
  }

  export type AssetLinkCreateManySnapshotInputEnvelope = {
    data: AssetLinkCreateManySnapshotInput | AssetLinkCreateManySnapshotInput[]
    skipDuplicates?: boolean
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
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
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
    owner?: UserUpdateOneRequiredWithoutEbooksNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutCurrentSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type AssetLinkUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: AssetLinkWhereUniqueInput
    update: XOR<AssetLinkUpdateWithoutSnapshotInput, AssetLinkUncheckedUpdateWithoutSnapshotInput>
    create: XOR<AssetLinkCreateWithoutSnapshotInput, AssetLinkUncheckedCreateWithoutSnapshotInput>
  }

  export type AssetLinkUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: AssetLinkWhereUniqueInput
    data: XOR<AssetLinkUpdateWithoutSnapshotInput, AssetLinkUncheckedUpdateWithoutSnapshotInput>
  }

  export type AssetLinkUpdateManyWithWhereWithoutSnapshotInput = {
    where: AssetLinkScalarWhereInput
    data: XOR<AssetLinkUpdateManyMutationInput, AssetLinkUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type EbookCreateWithoutOwnerInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    currentSnapshot?: SnapshotCreateNestedOneWithoutCurrentForEbookInput
    snapshots?: SnapshotCreateNestedManyWithoutEbookInput
    chapters?: ChapterCreateNestedManyWithoutEbookInput
  }

  export type EbookUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    currentSnapshotId?: string | null
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutEbookInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutEbookInput
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
    mimeType?: string | null
    sizeBytes?: number | null
    etag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assetLinks?: AssetLinkCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutOwnerInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType?: string | null
    sizeBytes?: number | null
    etag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assetLinks?: AssetLinkUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutOwnerInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput>
  }

  export type AssetCreateManyOwnerInputEnvelope = {
    data: AssetCreateManyOwnerInput | AssetCreateManyOwnerInput[]
    skipDuplicates?: boolean
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
    mimeType?: StringNullableFilter<"Asset"> | string | null
    sizeBytes?: IntNullableFilter<"Asset"> | number | null
    etag?: StringNullableFilter<"Asset"> | string | null
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    ownerId?: StringNullableFilter<"Asset"> | string | null
  }

  export type AssetLinkCreateManyAssetInput = {
    id?: string
    snapshotId?: string | null
    type: $Enums.AssetLinkType
  }

  export type AssetLinkUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
    snapshot?: SnapshotUpdateOneWithoutAssetLinksNestedInput
  }

  export type AssetLinkUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
  }

  export type AssetLinkUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
  }

  export type SnapshotCreateManyEbookInput = {
    id?: string
    version: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterCreateManyEbookInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnapshotUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentForEbook?: EbookUpdateOneWithoutCurrentSnapshotNestedInput
    assetLinks?: AssetLinkUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentForEbook?: EbookUncheckedUpdateOneWithoutCurrentSnapshotNestedInput
    assetLinks?: AssetLinkUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateManyWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyWithoutEbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetLinkCreateManySnapshotInput = {
    id?: string
    assetId: string
    type: $Enums.AssetLinkType
  }

  export type AssetLinkUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
    asset?: AssetUpdateOneRequiredWithoutAssetLinksNestedInput
  }

  export type AssetLinkUncheckedUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
  }

  export type AssetLinkUncheckedUpdateManyWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetLinkTypeFieldUpdateOperationsInput | $Enums.AssetLinkType
  }

  export type EbookCreateManyOwnerInput = {
    id?: string
    title: string
    subtitle?: string | null
    shortDescription?: string | null
    currentSnapshotId?: string | null
  }

  export type AssetCreateManyOwnerInput = {
    id?: string
    key: string
    bucket: string
    fileName: string
    mimeType?: string | null
    sizeBytes?: number | null
    etag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EbookUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentSnapshot?: SnapshotUpdateOneWithoutCurrentForEbookNestedInput
    snapshots?: SnapshotUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    snapshots?: SnapshotUncheckedUpdateManyWithoutEbookNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutEbookNestedInput
  }

  export type EbookUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentSnapshotId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetLinks?: AssetLinkUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetLinks?: AssetLinkUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
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