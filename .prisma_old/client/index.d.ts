
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tender
 * 
 */
export type Tender = $Result.DefaultSelection<Prisma.$TenderPayload>
/**
 * Model Dealer
 * 
 */
export type Dealer = $Result.DefaultSelection<Prisma.$DealerPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Quote
 * 
 */
export type Quote = $Result.DefaultSelection<Prisma.$QuotePayload>
/**
 * Model UsedCaravan
 * 
 */
export type UsedCaravan = $Result.DefaultSelection<Prisma.$UsedCaravanPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenders
 * const tenders = await prisma.tender.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenders
   * const tenders = await prisma.tender.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tender`: Exposes CRUD operations for the **Tender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenders
    * const tenders = await prisma.tender.findMany()
    * ```
    */
  get tender(): Prisma.TenderDelegate<ExtArgs>;

  /**
   * `prisma.dealer`: Exposes CRUD operations for the **Dealer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dealers
    * const dealers = await prisma.dealer.findMany()
    * ```
    */
  get dealer(): Prisma.DealerDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.quote`: Exposes CRUD operations for the **Quote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotes
    * const quotes = await prisma.quote.findMany()
    * ```
    */
  get quote(): Prisma.QuoteDelegate<ExtArgs>;

  /**
   * `prisma.usedCaravan`: Exposes CRUD operations for the **UsedCaravan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsedCaravans
    * const usedCaravans = await prisma.usedCaravan.findMany()
    * ```
    */
  get usedCaravan(): Prisma.UsedCaravanDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Tender: 'Tender',
    Dealer: 'Dealer',
    Client: 'Client',
    Quote: 'Quote',
    UsedCaravan: 'UsedCaravan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'tender' | 'dealer' | 'client' | 'quote' | 'usedCaravan'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Tender: {
        payload: Prisma.$TenderPayload<ExtArgs>
        fields: Prisma.TenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          findFirst: {
            args: Prisma.TenderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          findMany: {
            args: Prisma.TenderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>[]
          }
          create: {
            args: Prisma.TenderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          createMany: {
            args: Prisma.TenderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenderCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>[]
          }
          delete: {
            args: Prisma.TenderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          update: {
            args: Prisma.TenderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          deleteMany: {
            args: Prisma.TenderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TenderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TenderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          aggregate: {
            args: Prisma.TenderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTender>
          }
          groupBy: {
            args: Prisma.TenderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TenderGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenderCountArgs<ExtArgs>,
            result: $Utils.Optional<TenderCountAggregateOutputType> | number
          }
        }
      }
      Dealer: {
        payload: Prisma.$DealerPayload<ExtArgs>
        fields: Prisma.DealerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          findFirst: {
            args: Prisma.DealerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          findMany: {
            args: Prisma.DealerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>[]
          }
          create: {
            args: Prisma.DealerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          createMany: {
            args: Prisma.DealerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealerCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>[]
          }
          delete: {
            args: Prisma.DealerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          update: {
            args: Prisma.DealerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          deleteMany: {
            args: Prisma.DealerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DealerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DealerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          aggregate: {
            args: Prisma.DealerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDealer>
          }
          groupBy: {
            args: Prisma.DealerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DealerGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealerCountArgs<ExtArgs>,
            result: $Utils.Optional<DealerCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Quote: {
        payload: Prisma.$QuotePayload<ExtArgs>
        fields: Prisma.QuoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          findFirst: {
            args: Prisma.QuoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          findMany: {
            args: Prisma.QuoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>[]
          }
          create: {
            args: Prisma.QuoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          createMany: {
            args: Prisma.QuoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuoteCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>[]
          }
          delete: {
            args: Prisma.QuoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          update: {
            args: Prisma.QuoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          deleteMany: {
            args: Prisma.QuoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          aggregate: {
            args: Prisma.QuoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuote>
          }
          groupBy: {
            args: Prisma.QuoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteCountArgs<ExtArgs>,
            result: $Utils.Optional<QuoteCountAggregateOutputType> | number
          }
        }
      }
      UsedCaravan: {
        payload: Prisma.$UsedCaravanPayload<ExtArgs>
        fields: Prisma.UsedCaravanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsedCaravanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsedCaravanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload>
          }
          findFirst: {
            args: Prisma.UsedCaravanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsedCaravanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload>
          }
          findMany: {
            args: Prisma.UsedCaravanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload>[]
          }
          create: {
            args: Prisma.UsedCaravanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload>
          }
          createMany: {
            args: Prisma.UsedCaravanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsedCaravanCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload>[]
          }
          delete: {
            args: Prisma.UsedCaravanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload>
          }
          update: {
            args: Prisma.UsedCaravanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload>
          }
          deleteMany: {
            args: Prisma.UsedCaravanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsedCaravanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsedCaravanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsedCaravanPayload>
          }
          aggregate: {
            args: Prisma.UsedCaravanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsedCaravan>
          }
          groupBy: {
            args: Prisma.UsedCaravanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsedCaravanGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsedCaravanCountArgs<ExtArgs>,
            result: $Utils.Optional<UsedCaravanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type TenderCountOutputType
   */

  export type TenderCountOutputType = {
    quotes: number
  }

  export type TenderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | TenderCountOutputTypeCountQuotesArgs
  }

  // Custom InputTypes
  /**
   * TenderCountOutputType without action
   */
  export type TenderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenderCountOutputType
     */
    select?: TenderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenderCountOutputType without action
   */
  export type TenderCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
  }


  /**
   * Count Type DealerCountOutputType
   */

  export type DealerCountOutputType = {
    quotes: number
  }

  export type DealerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | DealerCountOutputTypeCountQuotesArgs
  }

  // Custom InputTypes
  /**
   * DealerCountOutputType without action
   */
  export type DealerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerCountOutputType
     */
    select?: DealerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DealerCountOutputType without action
   */
  export type DealerCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    tenders: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenders?: boolean | ClientCountOutputTypeCountTendersArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountTendersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tender
   */

  export type AggregateTender = {
    _count: TenderCountAggregateOutputType | null
    _min: TenderMinAggregateOutputType | null
    _max: TenderMaxAggregateOutputType | null
  }

  export type TenderMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    selectedDealerIds: string | null
    customerName: string | null
    customerEmail: string | null
    customerPostcode: string | null
    tow_vehicle: string | null
    type: string | null
    length: string | null
    frame: string | null
    solar: string | null
    batteries: string | null
    inverter: string | null
    water_tanks: string | null
    external_shower: string | null
    hot_water: string | null
    toilet: string | null
    fridge_size: string | null
    fridge_type: string | null
    appliances: string | null
    ac: string | null
    diesel_heater: string | null
    bed: string | null
    kids_beds: string | null
    fixtures: string | null
    outdoor_kitchen: string | null
    electric_awning: string | null
    auto_level: string | null
    final_comments: string | null
    custom_notes: string | null
    targetDate: string | null
    clientId: string | null
  }

  export type TenderMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    selectedDealerIds: string | null
    customerName: string | null
    customerEmail: string | null
    customerPostcode: string | null
    tow_vehicle: string | null
    type: string | null
    length: string | null
    frame: string | null
    solar: string | null
    batteries: string | null
    inverter: string | null
    water_tanks: string | null
    external_shower: string | null
    hot_water: string | null
    toilet: string | null
    fridge_size: string | null
    fridge_type: string | null
    appliances: string | null
    ac: string | null
    diesel_heater: string | null
    bed: string | null
    kids_beds: string | null
    fixtures: string | null
    outdoor_kitchen: string | null
    electric_awning: string | null
    auto_level: string | null
    final_comments: string | null
    custom_notes: string | null
    targetDate: string | null
    clientId: string | null
  }

  export type TenderCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    status: number
    selectedDealerIds: number
    customerName: number
    customerEmail: number
    customerPostcode: number
    tow_vehicle: number
    type: number
    length: number
    frame: number
    solar: number
    batteries: number
    inverter: number
    water_tanks: number
    external_shower: number
    hot_water: number
    toilet: number
    fridge_size: number
    fridge_type: number
    appliances: number
    ac: number
    diesel_heater: number
    bed: number
    kids_beds: number
    fixtures: number
    outdoor_kitchen: number
    electric_awning: number
    auto_level: number
    final_comments: number
    custom_notes: number
    targetDate: number
    clientId: number
    _all: number
  }


  export type TenderMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    selectedDealerIds?: true
    customerName?: true
    customerEmail?: true
    customerPostcode?: true
    tow_vehicle?: true
    type?: true
    length?: true
    frame?: true
    solar?: true
    batteries?: true
    inverter?: true
    water_tanks?: true
    external_shower?: true
    hot_water?: true
    toilet?: true
    fridge_size?: true
    fridge_type?: true
    appliances?: true
    ac?: true
    diesel_heater?: true
    bed?: true
    kids_beds?: true
    fixtures?: true
    outdoor_kitchen?: true
    electric_awning?: true
    auto_level?: true
    final_comments?: true
    custom_notes?: true
    targetDate?: true
    clientId?: true
  }

  export type TenderMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    selectedDealerIds?: true
    customerName?: true
    customerEmail?: true
    customerPostcode?: true
    tow_vehicle?: true
    type?: true
    length?: true
    frame?: true
    solar?: true
    batteries?: true
    inverter?: true
    water_tanks?: true
    external_shower?: true
    hot_water?: true
    toilet?: true
    fridge_size?: true
    fridge_type?: true
    appliances?: true
    ac?: true
    diesel_heater?: true
    bed?: true
    kids_beds?: true
    fixtures?: true
    outdoor_kitchen?: true
    electric_awning?: true
    auto_level?: true
    final_comments?: true
    custom_notes?: true
    targetDate?: true
    clientId?: true
  }

  export type TenderCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    selectedDealerIds?: true
    customerName?: true
    customerEmail?: true
    customerPostcode?: true
    tow_vehicle?: true
    type?: true
    length?: true
    frame?: true
    solar?: true
    batteries?: true
    inverter?: true
    water_tanks?: true
    external_shower?: true
    hot_water?: true
    toilet?: true
    fridge_size?: true
    fridge_type?: true
    appliances?: true
    ac?: true
    diesel_heater?: true
    bed?: true
    kids_beds?: true
    fixtures?: true
    outdoor_kitchen?: true
    electric_awning?: true
    auto_level?: true
    final_comments?: true
    custom_notes?: true
    targetDate?: true
    clientId?: true
    _all?: true
  }

  export type TenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tender to aggregate.
     */
    where?: TenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenders to fetch.
     */
    orderBy?: TenderOrderByWithRelationInput | TenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenders
    **/
    _count?: true | TenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenderMaxAggregateInputType
  }

  export type GetTenderAggregateType<T extends TenderAggregateArgs> = {
        [P in keyof T & keyof AggregateTender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTender[P]>
      : GetScalarType<T[P], AggregateTender[P]>
  }




  export type TenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenderWhereInput
    orderBy?: TenderOrderByWithAggregationInput | TenderOrderByWithAggregationInput[]
    by: TenderScalarFieldEnum[] | TenderScalarFieldEnum
    having?: TenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenderCountAggregateInputType | true
    _min?: TenderMinAggregateInputType
    _max?: TenderMaxAggregateInputType
  }

  export type TenderGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    status: string
    selectedDealerIds: string | null
    customerName: string | null
    customerEmail: string | null
    customerPostcode: string | null
    tow_vehicle: string | null
    type: string | null
    length: string | null
    frame: string | null
    solar: string | null
    batteries: string | null
    inverter: string | null
    water_tanks: string | null
    external_shower: string | null
    hot_water: string | null
    toilet: string | null
    fridge_size: string | null
    fridge_type: string | null
    appliances: string
    ac: string | null
    diesel_heater: string | null
    bed: string | null
    kids_beds: string | null
    fixtures: string | null
    outdoor_kitchen: string | null
    electric_awning: string | null
    auto_level: string | null
    final_comments: string | null
    custom_notes: string | null
    targetDate: string | null
    clientId: string | null
    _count: TenderCountAggregateOutputType | null
    _min: TenderMinAggregateOutputType | null
    _max: TenderMaxAggregateOutputType | null
  }

  type GetTenderGroupByPayload<T extends TenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenderGroupByOutputType[P]>
            : GetScalarType<T[P], TenderGroupByOutputType[P]>
        }
      >
    >


  export type TenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    selectedDealerIds?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPostcode?: boolean
    tow_vehicle?: boolean
    type?: boolean
    length?: boolean
    frame?: boolean
    solar?: boolean
    batteries?: boolean
    inverter?: boolean
    water_tanks?: boolean
    external_shower?: boolean
    hot_water?: boolean
    toilet?: boolean
    fridge_size?: boolean
    fridge_type?: boolean
    appliances?: boolean
    ac?: boolean
    diesel_heater?: boolean
    bed?: boolean
    kids_beds?: boolean
    fixtures?: boolean
    outdoor_kitchen?: boolean
    electric_awning?: boolean
    auto_level?: boolean
    final_comments?: boolean
    custom_notes?: boolean
    targetDate?: boolean
    clientId?: boolean
    client?: boolean | Tender$clientArgs<ExtArgs>
    quotes?: boolean | Tender$quotesArgs<ExtArgs>
    _count?: boolean | TenderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tender"]>

  export type TenderSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    selectedDealerIds?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPostcode?: boolean
    tow_vehicle?: boolean
    type?: boolean
    length?: boolean
    frame?: boolean
    solar?: boolean
    batteries?: boolean
    inverter?: boolean
    water_tanks?: boolean
    external_shower?: boolean
    hot_water?: boolean
    toilet?: boolean
    fridge_size?: boolean
    fridge_type?: boolean
    appliances?: boolean
    ac?: boolean
    diesel_heater?: boolean
    bed?: boolean
    kids_beds?: boolean
    fixtures?: boolean
    outdoor_kitchen?: boolean
    electric_awning?: boolean
    auto_level?: boolean
    final_comments?: boolean
    custom_notes?: boolean
    targetDate?: boolean
    clientId?: boolean
  }


  export type TenderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Tender$clientArgs<ExtArgs>
    quotes?: boolean | Tender$quotesArgs<ExtArgs>
    _count?: boolean | TenderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tender"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      quotes: Prisma.$QuotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      status: string
      selectedDealerIds: string | null
      customerName: string | null
      customerEmail: string | null
      customerPostcode: string | null
      tow_vehicle: string | null
      type: string | null
      length: string | null
      frame: string | null
      solar: string | null
      batteries: string | null
      inverter: string | null
      water_tanks: string | null
      external_shower: string | null
      hot_water: string | null
      toilet: string | null
      fridge_size: string | null
      fridge_type: string | null
      appliances: string
      ac: string | null
      diesel_heater: string | null
      bed: string | null
      kids_beds: string | null
      fixtures: string | null
      outdoor_kitchen: string | null
      electric_awning: string | null
      auto_level: string | null
      final_comments: string | null
      custom_notes: string | null
      targetDate: string | null
      clientId: string | null
    }, ExtArgs["result"]["tender"]>
    composites: {}
  }


  type TenderGetPayload<S extends boolean | null | undefined | TenderDefaultArgs> = $Result.GetResult<Prisma.$TenderPayload, S>

  type TenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenderCountAggregateInputType | true
    }

  export interface TenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tender'], meta: { name: 'Tender' } }
    /**
     * Find zero or one Tender that matches the filter.
     * @param {TenderFindUniqueArgs} args - Arguments to find a Tender
     * @example
     * // Get one Tender
     * const tender = await prisma.tender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TenderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TenderFindUniqueArgs<ExtArgs>>
    ): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tender that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenderFindUniqueOrThrowArgs} args - Arguments to find a Tender
     * @example
     * // Get one Tender
     * const tender = await prisma.tender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TenderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TenderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderFindFirstArgs} args - Arguments to find a Tender
     * @example
     * // Get one Tender
     * const tender = await prisma.tender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TenderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TenderFindFirstArgs<ExtArgs>>
    ): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderFindFirstOrThrowArgs} args - Arguments to find a Tender
     * @example
     * // Get one Tender
     * const tender = await prisma.tender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TenderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TenderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tenders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenders
     * const tenders = await prisma.tender.findMany()
     * 
     * // Get first 10 Tenders
     * const tenders = await prisma.tender.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenderWithIdOnly = await prisma.tender.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TenderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TenderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tender.
     * @param {TenderCreateArgs} args - Arguments to create a Tender.
     * @example
     * // Create one Tender
     * const Tender = await prisma.tender.create({
     *   data: {
     *     // ... data to create a Tender
     *   }
     * })
     * 
    **/
    create<T extends TenderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TenderCreateArgs<ExtArgs>>
    ): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tenders.
     * @param {TenderCreateManyArgs} args - Arguments to create many Tenders.
     * @example
     * // Create many Tenders
     * const tender = await prisma.tender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TenderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TenderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenders and returns the data saved in the database.
     * @param {TenderCreateManyAndReturnArgs} args - Arguments to create many Tenders.
     * @example
     * // Create many Tenders
     * const tender = await prisma.tender.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenders and only return the `id`
     * const tenderWithIdOnly = await prisma.tender.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TenderCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TenderCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Tender.
     * @param {TenderDeleteArgs} args - Arguments to delete one Tender.
     * @example
     * // Delete one Tender
     * const Tender = await prisma.tender.delete({
     *   where: {
     *     // ... filter to delete one Tender
     *   }
     * })
     * 
    **/
    delete<T extends TenderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TenderDeleteArgs<ExtArgs>>
    ): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tender.
     * @param {TenderUpdateArgs} args - Arguments to update one Tender.
     * @example
     * // Update one Tender
     * const tender = await prisma.tender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TenderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TenderUpdateArgs<ExtArgs>>
    ): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tenders.
     * @param {TenderDeleteManyArgs} args - Arguments to filter Tenders to delete.
     * @example
     * // Delete a few Tenders
     * const { count } = await prisma.tender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TenderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TenderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenders
     * const tender = await prisma.tender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TenderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TenderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tender.
     * @param {TenderUpsertArgs} args - Arguments to update or create a Tender.
     * @example
     * // Update or create a Tender
     * const tender = await prisma.tender.upsert({
     *   create: {
     *     // ... data to create a Tender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tender we want to update
     *   }
     * })
    **/
    upsert<T extends TenderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TenderUpsertArgs<ExtArgs>>
    ): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderCountArgs} args - Arguments to filter Tenders to count.
     * @example
     * // Count the number of Tenders
     * const count = await prisma.tender.count({
     *   where: {
     *     // ... the filter for the Tenders we want to count
     *   }
     * })
    **/
    count<T extends TenderCountArgs>(
      args?: Subset<T, TenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenderAggregateArgs>(args: Subset<T, TenderAggregateArgs>): Prisma.PrismaPromise<GetTenderAggregateType<T>>

    /**
     * Group by Tender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderGroupByArgs} args - Group by arguments.
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
      T extends TenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenderGroupByArgs['orderBy'] }
        : { orderBy?: TenderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tender model
   */
  readonly fields: TenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends Tender$clientArgs<ExtArgs> = {}>(args?: Subset<T, Tender$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    quotes<T extends Tender$quotesArgs<ExtArgs> = {}>(args?: Subset<T, Tender$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tender model
   */ 
  interface TenderFieldRefs {
    readonly id: FieldRef<"Tender", 'String'>
    readonly createdAt: FieldRef<"Tender", 'DateTime'>
    readonly updatedAt: FieldRef<"Tender", 'DateTime'>
    readonly status: FieldRef<"Tender", 'String'>
    readonly selectedDealerIds: FieldRef<"Tender", 'String'>
    readonly customerName: FieldRef<"Tender", 'String'>
    readonly customerEmail: FieldRef<"Tender", 'String'>
    readonly customerPostcode: FieldRef<"Tender", 'String'>
    readonly tow_vehicle: FieldRef<"Tender", 'String'>
    readonly type: FieldRef<"Tender", 'String'>
    readonly length: FieldRef<"Tender", 'String'>
    readonly frame: FieldRef<"Tender", 'String'>
    readonly solar: FieldRef<"Tender", 'String'>
    readonly batteries: FieldRef<"Tender", 'String'>
    readonly inverter: FieldRef<"Tender", 'String'>
    readonly water_tanks: FieldRef<"Tender", 'String'>
    readonly external_shower: FieldRef<"Tender", 'String'>
    readonly hot_water: FieldRef<"Tender", 'String'>
    readonly toilet: FieldRef<"Tender", 'String'>
    readonly fridge_size: FieldRef<"Tender", 'String'>
    readonly fridge_type: FieldRef<"Tender", 'String'>
    readonly appliances: FieldRef<"Tender", 'String'>
    readonly ac: FieldRef<"Tender", 'String'>
    readonly diesel_heater: FieldRef<"Tender", 'String'>
    readonly bed: FieldRef<"Tender", 'String'>
    readonly kids_beds: FieldRef<"Tender", 'String'>
    readonly fixtures: FieldRef<"Tender", 'String'>
    readonly outdoor_kitchen: FieldRef<"Tender", 'String'>
    readonly electric_awning: FieldRef<"Tender", 'String'>
    readonly auto_level: FieldRef<"Tender", 'String'>
    readonly final_comments: FieldRef<"Tender", 'String'>
    readonly custom_notes: FieldRef<"Tender", 'String'>
    readonly targetDate: FieldRef<"Tender", 'String'>
    readonly clientId: FieldRef<"Tender", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tender findUnique
   */
  export type TenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * Filter, which Tender to fetch.
     */
    where: TenderWhereUniqueInput
  }

  /**
   * Tender findUniqueOrThrow
   */
  export type TenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * Filter, which Tender to fetch.
     */
    where: TenderWhereUniqueInput
  }

  /**
   * Tender findFirst
   */
  export type TenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * Filter, which Tender to fetch.
     */
    where?: TenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenders to fetch.
     */
    orderBy?: TenderOrderByWithRelationInput | TenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenders.
     */
    cursor?: TenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenders.
     */
    distinct?: TenderScalarFieldEnum | TenderScalarFieldEnum[]
  }

  /**
   * Tender findFirstOrThrow
   */
  export type TenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * Filter, which Tender to fetch.
     */
    where?: TenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenders to fetch.
     */
    orderBy?: TenderOrderByWithRelationInput | TenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenders.
     */
    cursor?: TenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenders.
     */
    distinct?: TenderScalarFieldEnum | TenderScalarFieldEnum[]
  }

  /**
   * Tender findMany
   */
  export type TenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * Filter, which Tenders to fetch.
     */
    where?: TenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenders to fetch.
     */
    orderBy?: TenderOrderByWithRelationInput | TenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenders.
     */
    cursor?: TenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenders.
     */
    skip?: number
    distinct?: TenderScalarFieldEnum | TenderScalarFieldEnum[]
  }

  /**
   * Tender create
   */
  export type TenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * The data needed to create a Tender.
     */
    data: XOR<TenderCreateInput, TenderUncheckedCreateInput>
  }

  /**
   * Tender createMany
   */
  export type TenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenders.
     */
    data: TenderCreateManyInput | TenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tender createManyAndReturn
   */
  export type TenderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * The data used to create many Tenders.
     */
    data: TenderCreateManyInput | TenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tender update
   */
  export type TenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * The data needed to update a Tender.
     */
    data: XOR<TenderUpdateInput, TenderUncheckedUpdateInput>
    /**
     * Choose, which Tender to update.
     */
    where: TenderWhereUniqueInput
  }

  /**
   * Tender updateMany
   */
  export type TenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenders.
     */
    data: XOR<TenderUpdateManyMutationInput, TenderUncheckedUpdateManyInput>
    /**
     * Filter which Tenders to update
     */
    where?: TenderWhereInput
  }

  /**
   * Tender upsert
   */
  export type TenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * The filter to search for the Tender to update in case it exists.
     */
    where: TenderWhereUniqueInput
    /**
     * In case the Tender found by the `where` argument doesn't exist, create a new Tender with this data.
     */
    create: XOR<TenderCreateInput, TenderUncheckedCreateInput>
    /**
     * In case the Tender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenderUpdateInput, TenderUncheckedUpdateInput>
  }

  /**
   * Tender delete
   */
  export type TenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    /**
     * Filter which Tender to delete.
     */
    where: TenderWhereUniqueInput
  }

  /**
   * Tender deleteMany
   */
  export type TenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenders to delete
     */
    where?: TenderWhereInput
  }

  /**
   * Tender.client
   */
  export type Tender$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Tender.quotes
   */
  export type Tender$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    cursor?: QuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Tender without action
   */
  export type TenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
  }


  /**
   * Model Dealer
   */

  export type AggregateDealer = {
    _count: DealerCountAggregateOutputType | null
    _avg: DealerAvgAggregateOutputType | null
    _sum: DealerSumAggregateOutputType | null
    _min: DealerMinAggregateOutputType | null
    _max: DealerMaxAggregateOutputType | null
  }

  export type DealerAvgAggregateOutputType = {
    quotesUsedThisMonth: number | null
  }

  export type DealerSumAggregateOutputType = {
    quotesUsedThisMonth: number | null
  }

  export type DealerMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    company: string | null
    phone: string | null
    website: string | null
    location: string | null
    logo: string | null
    subscriptionTier: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subscriptionStatus: string | null
    planTier: string | null
    quotesUsedThisMonth: number | null
    hasUsedTrial: boolean | null
    trialEndsAt: Date | null
    stripeCustomerId: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type DealerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    company: string | null
    phone: string | null
    website: string | null
    location: string | null
    logo: string | null
    subscriptionTier: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subscriptionStatus: string | null
    planTier: string | null
    quotesUsedThisMonth: number | null
    hasUsedTrial: boolean | null
    trialEndsAt: Date | null
    stripeCustomerId: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type DealerCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    company: number
    phone: number
    website: number
    location: number
    logo: number
    subscriptionTier: number
    createdAt: number
    updatedAt: number
    subscriptionStatus: number
    planTier: number
    quotesUsedThisMonth: number
    hasUsedTrial: number
    trialEndsAt: number
    stripeCustomerId: number
    resetToken: number
    resetTokenExpiry: number
    _all: number
  }


  export type DealerAvgAggregateInputType = {
    quotesUsedThisMonth?: true
  }

  export type DealerSumAggregateInputType = {
    quotesUsedThisMonth?: true
  }

  export type DealerMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    company?: true
    phone?: true
    website?: true
    location?: true
    logo?: true
    subscriptionTier?: true
    createdAt?: true
    updatedAt?: true
    subscriptionStatus?: true
    planTier?: true
    quotesUsedThisMonth?: true
    hasUsedTrial?: true
    trialEndsAt?: true
    stripeCustomerId?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type DealerMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    company?: true
    phone?: true
    website?: true
    location?: true
    logo?: true
    subscriptionTier?: true
    createdAt?: true
    updatedAt?: true
    subscriptionStatus?: true
    planTier?: true
    quotesUsedThisMonth?: true
    hasUsedTrial?: true
    trialEndsAt?: true
    stripeCustomerId?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type DealerCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    company?: true
    phone?: true
    website?: true
    location?: true
    logo?: true
    subscriptionTier?: true
    createdAt?: true
    updatedAt?: true
    subscriptionStatus?: true
    planTier?: true
    quotesUsedThisMonth?: true
    hasUsedTrial?: true
    trialEndsAt?: true
    stripeCustomerId?: true
    resetToken?: true
    resetTokenExpiry?: true
    _all?: true
  }

  export type DealerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealer to aggregate.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dealers
    **/
    _count?: true | DealerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealerMaxAggregateInputType
  }

  export type GetDealerAggregateType<T extends DealerAggregateArgs> = {
        [P in keyof T & keyof AggregateDealer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealer[P]>
      : GetScalarType<T[P], AggregateDealer[P]>
  }




  export type DealerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealerWhereInput
    orderBy?: DealerOrderByWithAggregationInput | DealerOrderByWithAggregationInput[]
    by: DealerScalarFieldEnum[] | DealerScalarFieldEnum
    having?: DealerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealerCountAggregateInputType | true
    _avg?: DealerAvgAggregateInputType
    _sum?: DealerSumAggregateInputType
    _min?: DealerMinAggregateInputType
    _max?: DealerMaxAggregateInputType
  }

  export type DealerGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    company: string
    phone: string | null
    website: string | null
    location: string | null
    logo: string | null
    subscriptionTier: string
    createdAt: Date
    updatedAt: Date
    subscriptionStatus: string
    planTier: string
    quotesUsedThisMonth: number
    hasUsedTrial: boolean
    trialEndsAt: Date | null
    stripeCustomerId: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    _count: DealerCountAggregateOutputType | null
    _avg: DealerAvgAggregateOutputType | null
    _sum: DealerSumAggregateOutputType | null
    _min: DealerMinAggregateOutputType | null
    _max: DealerMaxAggregateOutputType | null
  }

  type GetDealerGroupByPayload<T extends DealerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealerGroupByOutputType[P]>
            : GetScalarType<T[P], DealerGroupByOutputType[P]>
        }
      >
    >


  export type DealerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    company?: boolean
    phone?: boolean
    website?: boolean
    location?: boolean
    logo?: boolean
    subscriptionTier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionStatus?: boolean
    planTier?: boolean
    quotesUsedThisMonth?: boolean
    hasUsedTrial?: boolean
    trialEndsAt?: boolean
    stripeCustomerId?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    quotes?: boolean | Dealer$quotesArgs<ExtArgs>
    _count?: boolean | DealerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealer"]>

  export type DealerSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    company?: boolean
    phone?: boolean
    website?: boolean
    location?: boolean
    logo?: boolean
    subscriptionTier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionStatus?: boolean
    planTier?: boolean
    quotesUsedThisMonth?: boolean
    hasUsedTrial?: boolean
    trialEndsAt?: boolean
    stripeCustomerId?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }


  export type DealerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | Dealer$quotesArgs<ExtArgs>
    _count?: boolean | DealerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DealerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dealer"
    objects: {
      quotes: Prisma.$QuotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      company: string
      phone: string | null
      website: string | null
      location: string | null
      logo: string | null
      subscriptionTier: string
      createdAt: Date
      updatedAt: Date
      subscriptionStatus: string
      planTier: string
      quotesUsedThisMonth: number
      hasUsedTrial: boolean
      trialEndsAt: Date | null
      stripeCustomerId: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
    }, ExtArgs["result"]["dealer"]>
    composites: {}
  }


  type DealerGetPayload<S extends boolean | null | undefined | DealerDefaultArgs> = $Result.GetResult<Prisma.$DealerPayload, S>

  type DealerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DealerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DealerCountAggregateInputType | true
    }

  export interface DealerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dealer'], meta: { name: 'Dealer' } }
    /**
     * Find zero or one Dealer that matches the filter.
     * @param {DealerFindUniqueArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DealerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DealerFindUniqueArgs<ExtArgs>>
    ): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dealer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DealerFindUniqueOrThrowArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DealerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DealerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dealer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerFindFirstArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DealerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DealerFindFirstArgs<ExtArgs>>
    ): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dealer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerFindFirstOrThrowArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DealerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DealerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dealers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dealers
     * const dealers = await prisma.dealer.findMany()
     * 
     * // Get first 10 Dealers
     * const dealers = await prisma.dealer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealerWithIdOnly = await prisma.dealer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DealerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DealerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dealer.
     * @param {DealerCreateArgs} args - Arguments to create a Dealer.
     * @example
     * // Create one Dealer
     * const Dealer = await prisma.dealer.create({
     *   data: {
     *     // ... data to create a Dealer
     *   }
     * })
     * 
    **/
    create<T extends DealerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DealerCreateArgs<ExtArgs>>
    ): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dealers.
     * @param {DealerCreateManyArgs} args - Arguments to create many Dealers.
     * @example
     * // Create many Dealers
     * const dealer = await prisma.dealer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DealerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DealerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dealers and returns the data saved in the database.
     * @param {DealerCreateManyAndReturnArgs} args - Arguments to create many Dealers.
     * @example
     * // Create many Dealers
     * const dealer = await prisma.dealer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dealers and only return the `id`
     * const dealerWithIdOnly = await prisma.dealer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends DealerCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, DealerCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Dealer.
     * @param {DealerDeleteArgs} args - Arguments to delete one Dealer.
     * @example
     * // Delete one Dealer
     * const Dealer = await prisma.dealer.delete({
     *   where: {
     *     // ... filter to delete one Dealer
     *   }
     * })
     * 
    **/
    delete<T extends DealerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DealerDeleteArgs<ExtArgs>>
    ): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dealer.
     * @param {DealerUpdateArgs} args - Arguments to update one Dealer.
     * @example
     * // Update one Dealer
     * const dealer = await prisma.dealer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DealerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DealerUpdateArgs<ExtArgs>>
    ): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dealers.
     * @param {DealerDeleteManyArgs} args - Arguments to filter Dealers to delete.
     * @example
     * // Delete a few Dealers
     * const { count } = await prisma.dealer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DealerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DealerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dealers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dealers
     * const dealer = await prisma.dealer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DealerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DealerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dealer.
     * @param {DealerUpsertArgs} args - Arguments to update or create a Dealer.
     * @example
     * // Update or create a Dealer
     * const dealer = await prisma.dealer.upsert({
     *   create: {
     *     // ... data to create a Dealer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dealer we want to update
     *   }
     * })
    **/
    upsert<T extends DealerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DealerUpsertArgs<ExtArgs>>
    ): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dealers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerCountArgs} args - Arguments to filter Dealers to count.
     * @example
     * // Count the number of Dealers
     * const count = await prisma.dealer.count({
     *   where: {
     *     // ... the filter for the Dealers we want to count
     *   }
     * })
    **/
    count<T extends DealerCountArgs>(
      args?: Subset<T, DealerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dealer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DealerAggregateArgs>(args: Subset<T, DealerAggregateArgs>): Prisma.PrismaPromise<GetDealerAggregateType<T>>

    /**
     * Group by Dealer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerGroupByArgs} args - Group by arguments.
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
      T extends DealerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealerGroupByArgs['orderBy'] }
        : { orderBy?: DealerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DealerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dealer model
   */
  readonly fields: DealerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dealer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    quotes<T extends Dealer$quotesArgs<ExtArgs> = {}>(args?: Subset<T, Dealer$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dealer model
   */ 
  interface DealerFieldRefs {
    readonly id: FieldRef<"Dealer", 'String'>
    readonly email: FieldRef<"Dealer", 'String'>
    readonly password: FieldRef<"Dealer", 'String'>
    readonly name: FieldRef<"Dealer", 'String'>
    readonly company: FieldRef<"Dealer", 'String'>
    readonly phone: FieldRef<"Dealer", 'String'>
    readonly website: FieldRef<"Dealer", 'String'>
    readonly location: FieldRef<"Dealer", 'String'>
    readonly logo: FieldRef<"Dealer", 'String'>
    readonly subscriptionTier: FieldRef<"Dealer", 'String'>
    readonly createdAt: FieldRef<"Dealer", 'DateTime'>
    readonly updatedAt: FieldRef<"Dealer", 'DateTime'>
    readonly subscriptionStatus: FieldRef<"Dealer", 'String'>
    readonly planTier: FieldRef<"Dealer", 'String'>
    readonly quotesUsedThisMonth: FieldRef<"Dealer", 'Int'>
    readonly hasUsedTrial: FieldRef<"Dealer", 'Boolean'>
    readonly trialEndsAt: FieldRef<"Dealer", 'DateTime'>
    readonly stripeCustomerId: FieldRef<"Dealer", 'String'>
    readonly resetToken: FieldRef<"Dealer", 'String'>
    readonly resetTokenExpiry: FieldRef<"Dealer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dealer findUnique
   */
  export type DealerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer findUniqueOrThrow
   */
  export type DealerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer findFirst
   */
  export type DealerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealers.
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealers.
     */
    distinct?: DealerScalarFieldEnum | DealerScalarFieldEnum[]
  }

  /**
   * Dealer findFirstOrThrow
   */
  export type DealerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealers.
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealers.
     */
    distinct?: DealerScalarFieldEnum | DealerScalarFieldEnum[]
  }

  /**
   * Dealer findMany
   */
  export type DealerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealers to fetch.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dealers.
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    distinct?: DealerScalarFieldEnum | DealerScalarFieldEnum[]
  }

  /**
   * Dealer create
   */
  export type DealerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The data needed to create a Dealer.
     */
    data: XOR<DealerCreateInput, DealerUncheckedCreateInput>
  }

  /**
   * Dealer createMany
   */
  export type DealerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dealers.
     */
    data: DealerCreateManyInput | DealerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dealer createManyAndReturn
   */
  export type DealerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The data used to create many Dealers.
     */
    data: DealerCreateManyInput | DealerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dealer update
   */
  export type DealerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The data needed to update a Dealer.
     */
    data: XOR<DealerUpdateInput, DealerUncheckedUpdateInput>
    /**
     * Choose, which Dealer to update.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer updateMany
   */
  export type DealerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dealers.
     */
    data: XOR<DealerUpdateManyMutationInput, DealerUncheckedUpdateManyInput>
    /**
     * Filter which Dealers to update
     */
    where?: DealerWhereInput
  }

  /**
   * Dealer upsert
   */
  export type DealerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The filter to search for the Dealer to update in case it exists.
     */
    where: DealerWhereUniqueInput
    /**
     * In case the Dealer found by the `where` argument doesn't exist, create a new Dealer with this data.
     */
    create: XOR<DealerCreateInput, DealerUncheckedCreateInput>
    /**
     * In case the Dealer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealerUpdateInput, DealerUncheckedUpdateInput>
  }

  /**
   * Dealer delete
   */
  export type DealerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter which Dealer to delete.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer deleteMany
   */
  export type DealerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealers to delete
     */
    where?: DealerWhereInput
  }

  /**
   * Dealer.quotes
   */
  export type Dealer$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    cursor?: QuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Dealer without action
   */
  export type DealerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    freeTendersUsed: number | null
    tenderCount: number | null
  }

  export type ClientSumAggregateOutputType = {
    freeTendersUsed: number | null
    tenderCount: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    location: string | null
    freeTendersUsed: number | null
    tenderCount: number | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    location: string | null
    freeTendersUsed: number | null
    tenderCount: number | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    phone: number
    location: number
    freeTendersUsed: number
    tenderCount: number
    resetToken: number
    resetTokenExpiry: number
    createdAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    freeTendersUsed?: true
    tenderCount?: true
  }

  export type ClientSumAggregateInputType = {
    freeTendersUsed?: true
    tenderCount?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    location?: true
    freeTendersUsed?: true
    tenderCount?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    location?: true
    freeTendersUsed?: true
    tenderCount?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    location?: true
    freeTendersUsed?: true
    tenderCount?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    phone: string
    location: string
    freeTendersUsed: number
    tenderCount: number
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    freeTendersUsed?: boolean
    tenderCount?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    tenders?: boolean | Client$tendersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    freeTendersUsed?: boolean
    tenderCount?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
  }


  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenders?: boolean | Client$tendersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      tenders: Prisma.$TenderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      phone: string
      location: string
      freeTendersUsed: number
      tenderCount: number
      resetToken: string | null
      resetTokenExpiry: Date | null
      createdAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }


  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends ClientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ClientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends ClientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends ClientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tenders<T extends Client$tendersArgs<ExtArgs> = {}>(args?: Subset<T, Client$tendersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly password: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly location: FieldRef<"Client", 'String'>
    readonly freeTendersUsed: FieldRef<"Client", 'Int'>
    readonly tenderCount: FieldRef<"Client", 'Int'>
    readonly resetToken: FieldRef<"Client", 'String'>
    readonly resetTokenExpiry: FieldRef<"Client", 'DateTime'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.tenders
   */
  export type Client$tendersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenderInclude<ExtArgs> | null
    where?: TenderWhereInput
    orderBy?: TenderOrderByWithRelationInput | TenderOrderByWithRelationInput[]
    cursor?: TenderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenderScalarFieldEnum | TenderScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Quote
   */

  export type AggregateQuote = {
    _count: QuoteCountAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  export type QuoteMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    price: string | null
    description: string | null
    tenderId: string | null
    dealerId: string | null
    status: string | null
  }

  export type QuoteMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    price: string | null
    description: string | null
    tenderId: string | null
    dealerId: string | null
    status: string | null
  }

  export type QuoteCountAggregateOutputType = {
    id: number
    createdAt: number
    price: number
    description: number
    tenderId: number
    dealerId: number
    status: number
    _all: number
  }


  export type QuoteMinAggregateInputType = {
    id?: true
    createdAt?: true
    price?: true
    description?: true
    tenderId?: true
    dealerId?: true
    status?: true
  }

  export type QuoteMaxAggregateInputType = {
    id?: true
    createdAt?: true
    price?: true
    description?: true
    tenderId?: true
    dealerId?: true
    status?: true
  }

  export type QuoteCountAggregateInputType = {
    id?: true
    createdAt?: true
    price?: true
    description?: true
    tenderId?: true
    dealerId?: true
    status?: true
    _all?: true
  }

  export type QuoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quote to aggregate.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotes
    **/
    _count?: true | QuoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteMaxAggregateInputType
  }

  export type GetQuoteAggregateType<T extends QuoteAggregateArgs> = {
        [P in keyof T & keyof AggregateQuote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuote[P]>
      : GetScalarType<T[P], AggregateQuote[P]>
  }




  export type QuoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithAggregationInput | QuoteOrderByWithAggregationInput[]
    by: QuoteScalarFieldEnum[] | QuoteScalarFieldEnum
    having?: QuoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteCountAggregateInputType | true
    _min?: QuoteMinAggregateInputType
    _max?: QuoteMaxAggregateInputType
  }

  export type QuoteGroupByOutputType = {
    id: string
    createdAt: Date
    price: string
    description: string
    tenderId: string
    dealerId: string
    status: string
    _count: QuoteCountAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  type GetQuoteGroupByPayload<T extends QuoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteGroupByOutputType[P]>
        }
      >
    >


  export type QuoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    price?: boolean
    description?: boolean
    tenderId?: boolean
    dealerId?: boolean
    status?: boolean
    tender?: boolean | TenderDefaultArgs<ExtArgs>
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>

  export type QuoteSelectScalar = {
    id?: boolean
    createdAt?: boolean
    price?: boolean
    description?: boolean
    tenderId?: boolean
    dealerId?: boolean
    status?: boolean
  }


  export type QuoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tender?: boolean | TenderDefaultArgs<ExtArgs>
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
  }


  export type $QuotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quote"
    objects: {
      tender: Prisma.$TenderPayload<ExtArgs>
      dealer: Prisma.$DealerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      price: string
      description: string
      tenderId: string
      dealerId: string
      status: string
    }, ExtArgs["result"]["quote"]>
    composites: {}
  }


  type QuoteGetPayload<S extends boolean | null | undefined | QuoteDefaultArgs> = $Result.GetResult<Prisma.$QuotePayload, S>

  type QuoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuoteCountAggregateInputType | true
    }

  export interface QuoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quote'], meta: { name: 'Quote' } }
    /**
     * Find zero or one Quote that matches the filter.
     * @param {QuoteFindUniqueArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuoteFindUniqueArgs<ExtArgs>>
    ): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quote that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuoteFindUniqueOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuoteFindFirstArgs<ExtArgs>>
    ): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotes
     * const quotes = await prisma.quote.findMany()
     * 
     * // Get first 10 Quotes
     * const quotes = await prisma.quote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteWithIdOnly = await prisma.quote.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quote.
     * @param {QuoteCreateArgs} args - Arguments to create a Quote.
     * @example
     * // Create one Quote
     * const Quote = await prisma.quote.create({
     *   data: {
     *     // ... data to create a Quote
     *   }
     * })
     * 
    **/
    create<T extends QuoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuoteCreateArgs<ExtArgs>>
    ): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quotes.
     * @param {QuoteCreateManyArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends QuoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quotes and returns the data saved in the database.
     * @param {QuoteCreateManyAndReturnArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quotes and only return the `id`
     * const quoteWithIdOnly = await prisma.quote.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends QuoteCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, QuoteCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Quote.
     * @param {QuoteDeleteArgs} args - Arguments to delete one Quote.
     * @example
     * // Delete one Quote
     * const Quote = await prisma.quote.delete({
     *   where: {
     *     // ... filter to delete one Quote
     *   }
     * })
     * 
    **/
    delete<T extends QuoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuoteDeleteArgs<ExtArgs>>
    ): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quote.
     * @param {QuoteUpdateArgs} args - Arguments to update one Quote.
     * @example
     * // Update one Quote
     * const quote = await prisma.quote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuoteUpdateArgs<ExtArgs>>
    ): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quotes.
     * @param {QuoteDeleteManyArgs} args - Arguments to filter Quotes to delete.
     * @example
     * // Delete a few Quotes
     * const { count } = await prisma.quote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotes
     * const quote = await prisma.quote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quote.
     * @param {QuoteUpsertArgs} args - Arguments to update or create a Quote.
     * @example
     * // Update or create a Quote
     * const quote = await prisma.quote.upsert({
     *   create: {
     *     // ... data to create a Quote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quote we want to update
     *   }
     * })
    **/
    upsert<T extends QuoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuoteUpsertArgs<ExtArgs>>
    ): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteCountArgs} args - Arguments to filter Quotes to count.
     * @example
     * // Count the number of Quotes
     * const count = await prisma.quote.count({
     *   where: {
     *     // ... the filter for the Quotes we want to count
     *   }
     * })
    **/
    count<T extends QuoteCountArgs>(
      args?: Subset<T, QuoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuoteAggregateArgs>(args: Subset<T, QuoteAggregateArgs>): Prisma.PrismaPromise<GetQuoteAggregateType<T>>

    /**
     * Group by Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteGroupByArgs} args - Group by arguments.
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
      T extends QuoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteGroupByArgs['orderBy'] }
        : { orderBy?: QuoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quote model
   */
  readonly fields: QuoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tender<T extends TenderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenderDefaultArgs<ExtArgs>>): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    dealer<T extends DealerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealerDefaultArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Quote model
   */ 
  interface QuoteFieldRefs {
    readonly id: FieldRef<"Quote", 'String'>
    readonly createdAt: FieldRef<"Quote", 'DateTime'>
    readonly price: FieldRef<"Quote", 'String'>
    readonly description: FieldRef<"Quote", 'String'>
    readonly tenderId: FieldRef<"Quote", 'String'>
    readonly dealerId: FieldRef<"Quote", 'String'>
    readonly status: FieldRef<"Quote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quote findUnique
   */
  export type QuoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote findUniqueOrThrow
   */
  export type QuoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote findFirst
   */
  export type QuoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote findFirstOrThrow
   */
  export type QuoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote findMany
   */
  export type QuoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quotes to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote create
   */
  export type QuoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Quote.
     */
    data: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
  }

  /**
   * Quote createMany
   */
  export type QuoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotes.
     */
    data: QuoteCreateManyInput | QuoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quote createManyAndReturn
   */
  export type QuoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The data used to create many Quotes.
     */
    data: QuoteCreateManyInput | QuoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quote update
   */
  export type QuoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Quote.
     */
    data: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
    /**
     * Choose, which Quote to update.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote updateMany
   */
  export type QuoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotes.
     */
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyInput>
    /**
     * Filter which Quotes to update
     */
    where?: QuoteWhereInput
  }

  /**
   * Quote upsert
   */
  export type QuoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Quote to update in case it exists.
     */
    where: QuoteWhereUniqueInput
    /**
     * In case the Quote found by the `where` argument doesn't exist, create a new Quote with this data.
     */
    create: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
    /**
     * In case the Quote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
  }

  /**
   * Quote delete
   */
  export type QuoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter which Quote to delete.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote deleteMany
   */
  export type QuoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotes to delete
     */
    where?: QuoteWhereInput
  }

  /**
   * Quote without action
   */
  export type QuoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
  }


  /**
   * Model UsedCaravan
   */

  export type AggregateUsedCaravan = {
    _count: UsedCaravanCountAggregateOutputType | null
    _avg: UsedCaravanAvgAggregateOutputType | null
    _sum: UsedCaravanSumAggregateOutputType | null
    _min: UsedCaravanMinAggregateOutputType | null
    _max: UsedCaravanMaxAggregateOutputType | null
  }

  export type UsedCaravanAvgAggregateOutputType = {
    year: number | null
    length: number | null
    price: number | null
  }

  export type UsedCaravanSumAggregateOutputType = {
    year: number | null
    length: number | null
    price: number | null
  }

  export type UsedCaravanMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    category: string | null
    year: number | null
    make: string | null
    model: string | null
    length: number | null
    sleeps: string | null
    price: number | null
    description: string | null
    images: string | null
    sellerName: string | null
    sellerEmail: string | null
    sellerPhone: string | null
    location: string | null
    status: string | null
  }

  export type UsedCaravanMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    category: string | null
    year: number | null
    make: string | null
    model: string | null
    length: number | null
    sleeps: string | null
    price: number | null
    description: string | null
    images: string | null
    sellerName: string | null
    sellerEmail: string | null
    sellerPhone: string | null
    location: string | null
    status: string | null
  }

  export type UsedCaravanCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    category: number
    year: number
    make: number
    model: number
    length: number
    sleeps: number
    price: number
    description: number
    images: number
    sellerName: number
    sellerEmail: number
    sellerPhone: number
    location: number
    status: number
    _all: number
  }


  export type UsedCaravanAvgAggregateInputType = {
    year?: true
    length?: true
    price?: true
  }

  export type UsedCaravanSumAggregateInputType = {
    year?: true
    length?: true
    price?: true
  }

  export type UsedCaravanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    year?: true
    make?: true
    model?: true
    length?: true
    sleeps?: true
    price?: true
    description?: true
    images?: true
    sellerName?: true
    sellerEmail?: true
    sellerPhone?: true
    location?: true
    status?: true
  }

  export type UsedCaravanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    year?: true
    make?: true
    model?: true
    length?: true
    sleeps?: true
    price?: true
    description?: true
    images?: true
    sellerName?: true
    sellerEmail?: true
    sellerPhone?: true
    location?: true
    status?: true
  }

  export type UsedCaravanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    year?: true
    make?: true
    model?: true
    length?: true
    sleeps?: true
    price?: true
    description?: true
    images?: true
    sellerName?: true
    sellerEmail?: true
    sellerPhone?: true
    location?: true
    status?: true
    _all?: true
  }

  export type UsedCaravanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsedCaravan to aggregate.
     */
    where?: UsedCaravanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsedCaravans to fetch.
     */
    orderBy?: UsedCaravanOrderByWithRelationInput | UsedCaravanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsedCaravanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsedCaravans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsedCaravans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsedCaravans
    **/
    _count?: true | UsedCaravanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsedCaravanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsedCaravanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsedCaravanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsedCaravanMaxAggregateInputType
  }

  export type GetUsedCaravanAggregateType<T extends UsedCaravanAggregateArgs> = {
        [P in keyof T & keyof AggregateUsedCaravan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsedCaravan[P]>
      : GetScalarType<T[P], AggregateUsedCaravan[P]>
  }




  export type UsedCaravanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsedCaravanWhereInput
    orderBy?: UsedCaravanOrderByWithAggregationInput | UsedCaravanOrderByWithAggregationInput[]
    by: UsedCaravanScalarFieldEnum[] | UsedCaravanScalarFieldEnum
    having?: UsedCaravanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsedCaravanCountAggregateInputType | true
    _avg?: UsedCaravanAvgAggregateInputType
    _sum?: UsedCaravanSumAggregateInputType
    _min?: UsedCaravanMinAggregateInputType
    _max?: UsedCaravanMaxAggregateInputType
  }

  export type UsedCaravanGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    category: string
    year: number
    make: string
    model: string
    length: number
    sleeps: string
    price: number
    description: string
    images: string
    sellerName: string
    sellerEmail: string
    sellerPhone: string
    location: string
    status: string
    _count: UsedCaravanCountAggregateOutputType | null
    _avg: UsedCaravanAvgAggregateOutputType | null
    _sum: UsedCaravanSumAggregateOutputType | null
    _min: UsedCaravanMinAggregateOutputType | null
    _max: UsedCaravanMaxAggregateOutputType | null
  }

  type GetUsedCaravanGroupByPayload<T extends UsedCaravanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsedCaravanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsedCaravanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsedCaravanGroupByOutputType[P]>
            : GetScalarType<T[P], UsedCaravanGroupByOutputType[P]>
        }
      >
    >


  export type UsedCaravanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    year?: boolean
    make?: boolean
    model?: boolean
    length?: boolean
    sleeps?: boolean
    price?: boolean
    description?: boolean
    images?: boolean
    sellerName?: boolean
    sellerEmail?: boolean
    sellerPhone?: boolean
    location?: boolean
    status?: boolean
  }, ExtArgs["result"]["usedCaravan"]>

  export type UsedCaravanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    year?: boolean
    make?: boolean
    model?: boolean
    length?: boolean
    sleeps?: boolean
    price?: boolean
    description?: boolean
    images?: boolean
    sellerName?: boolean
    sellerEmail?: boolean
    sellerPhone?: boolean
    location?: boolean
    status?: boolean
  }



  export type $UsedCaravanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsedCaravan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      category: string
      year: number
      make: string
      model: string
      length: number
      sleeps: string
      price: number
      description: string
      images: string
      sellerName: string
      sellerEmail: string
      sellerPhone: string
      location: string
      status: string
    }, ExtArgs["result"]["usedCaravan"]>
    composites: {}
  }


  type UsedCaravanGetPayload<S extends boolean | null | undefined | UsedCaravanDefaultArgs> = $Result.GetResult<Prisma.$UsedCaravanPayload, S>

  type UsedCaravanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsedCaravanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsedCaravanCountAggregateInputType | true
    }

  export interface UsedCaravanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsedCaravan'], meta: { name: 'UsedCaravan' } }
    /**
     * Find zero or one UsedCaravan that matches the filter.
     * @param {UsedCaravanFindUniqueArgs} args - Arguments to find a UsedCaravan
     * @example
     * // Get one UsedCaravan
     * const usedCaravan = await prisma.usedCaravan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsedCaravanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsedCaravanFindUniqueArgs<ExtArgs>>
    ): Prisma__UsedCaravanClient<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UsedCaravan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsedCaravanFindUniqueOrThrowArgs} args - Arguments to find a UsedCaravan
     * @example
     * // Get one UsedCaravan
     * const usedCaravan = await prisma.usedCaravan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsedCaravanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsedCaravanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsedCaravanClient<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UsedCaravan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsedCaravanFindFirstArgs} args - Arguments to find a UsedCaravan
     * @example
     * // Get one UsedCaravan
     * const usedCaravan = await prisma.usedCaravan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsedCaravanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsedCaravanFindFirstArgs<ExtArgs>>
    ): Prisma__UsedCaravanClient<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UsedCaravan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsedCaravanFindFirstOrThrowArgs} args - Arguments to find a UsedCaravan
     * @example
     * // Get one UsedCaravan
     * const usedCaravan = await prisma.usedCaravan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsedCaravanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsedCaravanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsedCaravanClient<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UsedCaravans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsedCaravanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsedCaravans
     * const usedCaravans = await prisma.usedCaravan.findMany()
     * 
     * // Get first 10 UsedCaravans
     * const usedCaravans = await prisma.usedCaravan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usedCaravanWithIdOnly = await prisma.usedCaravan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsedCaravanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsedCaravanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UsedCaravan.
     * @param {UsedCaravanCreateArgs} args - Arguments to create a UsedCaravan.
     * @example
     * // Create one UsedCaravan
     * const UsedCaravan = await prisma.usedCaravan.create({
     *   data: {
     *     // ... data to create a UsedCaravan
     *   }
     * })
     * 
    **/
    create<T extends UsedCaravanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsedCaravanCreateArgs<ExtArgs>>
    ): Prisma__UsedCaravanClient<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UsedCaravans.
     * @param {UsedCaravanCreateManyArgs} args - Arguments to create many UsedCaravans.
     * @example
     * // Create many UsedCaravans
     * const usedCaravan = await prisma.usedCaravan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UsedCaravanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsedCaravanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsedCaravans and returns the data saved in the database.
     * @param {UsedCaravanCreateManyAndReturnArgs} args - Arguments to create many UsedCaravans.
     * @example
     * // Create many UsedCaravans
     * const usedCaravan = await prisma.usedCaravan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsedCaravans and only return the `id`
     * const usedCaravanWithIdOnly = await prisma.usedCaravan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UsedCaravanCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UsedCaravanCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UsedCaravan.
     * @param {UsedCaravanDeleteArgs} args - Arguments to delete one UsedCaravan.
     * @example
     * // Delete one UsedCaravan
     * const UsedCaravan = await prisma.usedCaravan.delete({
     *   where: {
     *     // ... filter to delete one UsedCaravan
     *   }
     * })
     * 
    **/
    delete<T extends UsedCaravanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsedCaravanDeleteArgs<ExtArgs>>
    ): Prisma__UsedCaravanClient<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UsedCaravan.
     * @param {UsedCaravanUpdateArgs} args - Arguments to update one UsedCaravan.
     * @example
     * // Update one UsedCaravan
     * const usedCaravan = await prisma.usedCaravan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsedCaravanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsedCaravanUpdateArgs<ExtArgs>>
    ): Prisma__UsedCaravanClient<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UsedCaravans.
     * @param {UsedCaravanDeleteManyArgs} args - Arguments to filter UsedCaravans to delete.
     * @example
     * // Delete a few UsedCaravans
     * const { count } = await prisma.usedCaravan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsedCaravanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsedCaravanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsedCaravans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsedCaravanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsedCaravans
     * const usedCaravan = await prisma.usedCaravan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsedCaravanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsedCaravanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsedCaravan.
     * @param {UsedCaravanUpsertArgs} args - Arguments to update or create a UsedCaravan.
     * @example
     * // Update or create a UsedCaravan
     * const usedCaravan = await prisma.usedCaravan.upsert({
     *   create: {
     *     // ... data to create a UsedCaravan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsedCaravan we want to update
     *   }
     * })
    **/
    upsert<T extends UsedCaravanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsedCaravanUpsertArgs<ExtArgs>>
    ): Prisma__UsedCaravanClient<$Result.GetResult<Prisma.$UsedCaravanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UsedCaravans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsedCaravanCountArgs} args - Arguments to filter UsedCaravans to count.
     * @example
     * // Count the number of UsedCaravans
     * const count = await prisma.usedCaravan.count({
     *   where: {
     *     // ... the filter for the UsedCaravans we want to count
     *   }
     * })
    **/
    count<T extends UsedCaravanCountArgs>(
      args?: Subset<T, UsedCaravanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsedCaravanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsedCaravan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsedCaravanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsedCaravanAggregateArgs>(args: Subset<T, UsedCaravanAggregateArgs>): Prisma.PrismaPromise<GetUsedCaravanAggregateType<T>>

    /**
     * Group by UsedCaravan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsedCaravanGroupByArgs} args - Group by arguments.
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
      T extends UsedCaravanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsedCaravanGroupByArgs['orderBy'] }
        : { orderBy?: UsedCaravanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsedCaravanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsedCaravanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsedCaravan model
   */
  readonly fields: UsedCaravanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsedCaravan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsedCaravanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UsedCaravan model
   */ 
  interface UsedCaravanFieldRefs {
    readonly id: FieldRef<"UsedCaravan", 'String'>
    readonly createdAt: FieldRef<"UsedCaravan", 'DateTime'>
    readonly updatedAt: FieldRef<"UsedCaravan", 'DateTime'>
    readonly category: FieldRef<"UsedCaravan", 'String'>
    readonly year: FieldRef<"UsedCaravan", 'Int'>
    readonly make: FieldRef<"UsedCaravan", 'String'>
    readonly model: FieldRef<"UsedCaravan", 'String'>
    readonly length: FieldRef<"UsedCaravan", 'Float'>
    readonly sleeps: FieldRef<"UsedCaravan", 'String'>
    readonly price: FieldRef<"UsedCaravan", 'Float'>
    readonly description: FieldRef<"UsedCaravan", 'String'>
    readonly images: FieldRef<"UsedCaravan", 'String'>
    readonly sellerName: FieldRef<"UsedCaravan", 'String'>
    readonly sellerEmail: FieldRef<"UsedCaravan", 'String'>
    readonly sellerPhone: FieldRef<"UsedCaravan", 'String'>
    readonly location: FieldRef<"UsedCaravan", 'String'>
    readonly status: FieldRef<"UsedCaravan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UsedCaravan findUnique
   */
  export type UsedCaravanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * Filter, which UsedCaravan to fetch.
     */
    where: UsedCaravanWhereUniqueInput
  }

  /**
   * UsedCaravan findUniqueOrThrow
   */
  export type UsedCaravanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * Filter, which UsedCaravan to fetch.
     */
    where: UsedCaravanWhereUniqueInput
  }

  /**
   * UsedCaravan findFirst
   */
  export type UsedCaravanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * Filter, which UsedCaravan to fetch.
     */
    where?: UsedCaravanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsedCaravans to fetch.
     */
    orderBy?: UsedCaravanOrderByWithRelationInput | UsedCaravanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsedCaravans.
     */
    cursor?: UsedCaravanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsedCaravans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsedCaravans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsedCaravans.
     */
    distinct?: UsedCaravanScalarFieldEnum | UsedCaravanScalarFieldEnum[]
  }

  /**
   * UsedCaravan findFirstOrThrow
   */
  export type UsedCaravanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * Filter, which UsedCaravan to fetch.
     */
    where?: UsedCaravanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsedCaravans to fetch.
     */
    orderBy?: UsedCaravanOrderByWithRelationInput | UsedCaravanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsedCaravans.
     */
    cursor?: UsedCaravanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsedCaravans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsedCaravans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsedCaravans.
     */
    distinct?: UsedCaravanScalarFieldEnum | UsedCaravanScalarFieldEnum[]
  }

  /**
   * UsedCaravan findMany
   */
  export type UsedCaravanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * Filter, which UsedCaravans to fetch.
     */
    where?: UsedCaravanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsedCaravans to fetch.
     */
    orderBy?: UsedCaravanOrderByWithRelationInput | UsedCaravanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsedCaravans.
     */
    cursor?: UsedCaravanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsedCaravans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsedCaravans.
     */
    skip?: number
    distinct?: UsedCaravanScalarFieldEnum | UsedCaravanScalarFieldEnum[]
  }

  /**
   * UsedCaravan create
   */
  export type UsedCaravanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * The data needed to create a UsedCaravan.
     */
    data: XOR<UsedCaravanCreateInput, UsedCaravanUncheckedCreateInput>
  }

  /**
   * UsedCaravan createMany
   */
  export type UsedCaravanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsedCaravans.
     */
    data: UsedCaravanCreateManyInput | UsedCaravanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsedCaravan createManyAndReturn
   */
  export type UsedCaravanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * The data used to create many UsedCaravans.
     */
    data: UsedCaravanCreateManyInput | UsedCaravanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsedCaravan update
   */
  export type UsedCaravanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * The data needed to update a UsedCaravan.
     */
    data: XOR<UsedCaravanUpdateInput, UsedCaravanUncheckedUpdateInput>
    /**
     * Choose, which UsedCaravan to update.
     */
    where: UsedCaravanWhereUniqueInput
  }

  /**
   * UsedCaravan updateMany
   */
  export type UsedCaravanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsedCaravans.
     */
    data: XOR<UsedCaravanUpdateManyMutationInput, UsedCaravanUncheckedUpdateManyInput>
    /**
     * Filter which UsedCaravans to update
     */
    where?: UsedCaravanWhereInput
  }

  /**
   * UsedCaravan upsert
   */
  export type UsedCaravanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * The filter to search for the UsedCaravan to update in case it exists.
     */
    where: UsedCaravanWhereUniqueInput
    /**
     * In case the UsedCaravan found by the `where` argument doesn't exist, create a new UsedCaravan with this data.
     */
    create: XOR<UsedCaravanCreateInput, UsedCaravanUncheckedCreateInput>
    /**
     * In case the UsedCaravan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsedCaravanUpdateInput, UsedCaravanUncheckedUpdateInput>
  }

  /**
   * UsedCaravan delete
   */
  export type UsedCaravanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
    /**
     * Filter which UsedCaravan to delete.
     */
    where: UsedCaravanWhereUniqueInput
  }

  /**
   * UsedCaravan deleteMany
   */
  export type UsedCaravanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsedCaravans to delete
     */
    where?: UsedCaravanWhereInput
  }

  /**
   * UsedCaravan without action
   */
  export type UsedCaravanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsedCaravan
     */
    select?: UsedCaravanSelect<ExtArgs> | null
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


  export const TenderScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    selectedDealerIds: 'selectedDealerIds',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    customerPostcode: 'customerPostcode',
    tow_vehicle: 'tow_vehicle',
    type: 'type',
    length: 'length',
    frame: 'frame',
    solar: 'solar',
    batteries: 'batteries',
    inverter: 'inverter',
    water_tanks: 'water_tanks',
    external_shower: 'external_shower',
    hot_water: 'hot_water',
    toilet: 'toilet',
    fridge_size: 'fridge_size',
    fridge_type: 'fridge_type',
    appliances: 'appliances',
    ac: 'ac',
    diesel_heater: 'diesel_heater',
    bed: 'bed',
    kids_beds: 'kids_beds',
    fixtures: 'fixtures',
    outdoor_kitchen: 'outdoor_kitchen',
    electric_awning: 'electric_awning',
    auto_level: 'auto_level',
    final_comments: 'final_comments',
    custom_notes: 'custom_notes',
    targetDate: 'targetDate',
    clientId: 'clientId'
  };

  export type TenderScalarFieldEnum = (typeof TenderScalarFieldEnum)[keyof typeof TenderScalarFieldEnum]


  export const DealerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    company: 'company',
    phone: 'phone',
    website: 'website',
    location: 'location',
    logo: 'logo',
    subscriptionTier: 'subscriptionTier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subscriptionStatus: 'subscriptionStatus',
    planTier: 'planTier',
    quotesUsedThisMonth: 'quotesUsedThisMonth',
    hasUsedTrial: 'hasUsedTrial',
    trialEndsAt: 'trialEndsAt',
    stripeCustomerId: 'stripeCustomerId',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry'
  };

  export type DealerScalarFieldEnum = (typeof DealerScalarFieldEnum)[keyof typeof DealerScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phone: 'phone',
    location: 'location',
    freeTendersUsed: 'freeTendersUsed',
    tenderCount: 'tenderCount',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    createdAt: 'createdAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const QuoteScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    price: 'price',
    description: 'description',
    tenderId: 'tenderId',
    dealerId: 'dealerId',
    status: 'status'
  };

  export type QuoteScalarFieldEnum = (typeof QuoteScalarFieldEnum)[keyof typeof QuoteScalarFieldEnum]


  export const UsedCaravanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    category: 'category',
    year: 'year',
    make: 'make',
    model: 'model',
    length: 'length',
    sleeps: 'sleeps',
    price: 'price',
    description: 'description',
    images: 'images',
    sellerName: 'sellerName',
    sellerEmail: 'sellerEmail',
    sellerPhone: 'sellerPhone',
    location: 'location',
    status: 'status'
  };

  export type UsedCaravanScalarFieldEnum = (typeof UsedCaravanScalarFieldEnum)[keyof typeof UsedCaravanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type TenderWhereInput = {
    AND?: TenderWhereInput | TenderWhereInput[]
    OR?: TenderWhereInput[]
    NOT?: TenderWhereInput | TenderWhereInput[]
    id?: StringFilter<"Tender"> | string
    createdAt?: DateTimeFilter<"Tender"> | Date | string
    updatedAt?: DateTimeFilter<"Tender"> | Date | string
    status?: StringFilter<"Tender"> | string
    selectedDealerIds?: StringNullableFilter<"Tender"> | string | null
    customerName?: StringNullableFilter<"Tender"> | string | null
    customerEmail?: StringNullableFilter<"Tender"> | string | null
    customerPostcode?: StringNullableFilter<"Tender"> | string | null
    tow_vehicle?: StringNullableFilter<"Tender"> | string | null
    type?: StringNullableFilter<"Tender"> | string | null
    length?: StringNullableFilter<"Tender"> | string | null
    frame?: StringNullableFilter<"Tender"> | string | null
    solar?: StringNullableFilter<"Tender"> | string | null
    batteries?: StringNullableFilter<"Tender"> | string | null
    inverter?: StringNullableFilter<"Tender"> | string | null
    water_tanks?: StringNullableFilter<"Tender"> | string | null
    external_shower?: StringNullableFilter<"Tender"> | string | null
    hot_water?: StringNullableFilter<"Tender"> | string | null
    toilet?: StringNullableFilter<"Tender"> | string | null
    fridge_size?: StringNullableFilter<"Tender"> | string | null
    fridge_type?: StringNullableFilter<"Tender"> | string | null
    appliances?: StringFilter<"Tender"> | string
    ac?: StringNullableFilter<"Tender"> | string | null
    diesel_heater?: StringNullableFilter<"Tender"> | string | null
    bed?: StringNullableFilter<"Tender"> | string | null
    kids_beds?: StringNullableFilter<"Tender"> | string | null
    fixtures?: StringNullableFilter<"Tender"> | string | null
    outdoor_kitchen?: StringNullableFilter<"Tender"> | string | null
    electric_awning?: StringNullableFilter<"Tender"> | string | null
    auto_level?: StringNullableFilter<"Tender"> | string | null
    final_comments?: StringNullableFilter<"Tender"> | string | null
    custom_notes?: StringNullableFilter<"Tender"> | string | null
    targetDate?: StringNullableFilter<"Tender"> | string | null
    clientId?: StringNullableFilter<"Tender"> | string | null
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
    quotes?: QuoteListRelationFilter
  }

  export type TenderOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    selectedDealerIds?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrderInput | SortOrder
    customerPostcode?: SortOrderInput | SortOrder
    tow_vehicle?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    frame?: SortOrderInput | SortOrder
    solar?: SortOrderInput | SortOrder
    batteries?: SortOrderInput | SortOrder
    inverter?: SortOrderInput | SortOrder
    water_tanks?: SortOrderInput | SortOrder
    external_shower?: SortOrderInput | SortOrder
    hot_water?: SortOrderInput | SortOrder
    toilet?: SortOrderInput | SortOrder
    fridge_size?: SortOrderInput | SortOrder
    fridge_type?: SortOrderInput | SortOrder
    appliances?: SortOrder
    ac?: SortOrderInput | SortOrder
    diesel_heater?: SortOrderInput | SortOrder
    bed?: SortOrderInput | SortOrder
    kids_beds?: SortOrderInput | SortOrder
    fixtures?: SortOrderInput | SortOrder
    outdoor_kitchen?: SortOrderInput | SortOrder
    electric_awning?: SortOrderInput | SortOrder
    auto_level?: SortOrderInput | SortOrder
    final_comments?: SortOrderInput | SortOrder
    custom_notes?: SortOrderInput | SortOrder
    targetDate?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    quotes?: QuoteOrderByRelationAggregateInput
  }

  export type TenderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenderWhereInput | TenderWhereInput[]
    OR?: TenderWhereInput[]
    NOT?: TenderWhereInput | TenderWhereInput[]
    createdAt?: DateTimeFilter<"Tender"> | Date | string
    updatedAt?: DateTimeFilter<"Tender"> | Date | string
    status?: StringFilter<"Tender"> | string
    selectedDealerIds?: StringNullableFilter<"Tender"> | string | null
    customerName?: StringNullableFilter<"Tender"> | string | null
    customerEmail?: StringNullableFilter<"Tender"> | string | null
    customerPostcode?: StringNullableFilter<"Tender"> | string | null
    tow_vehicle?: StringNullableFilter<"Tender"> | string | null
    type?: StringNullableFilter<"Tender"> | string | null
    length?: StringNullableFilter<"Tender"> | string | null
    frame?: StringNullableFilter<"Tender"> | string | null
    solar?: StringNullableFilter<"Tender"> | string | null
    batteries?: StringNullableFilter<"Tender"> | string | null
    inverter?: StringNullableFilter<"Tender"> | string | null
    water_tanks?: StringNullableFilter<"Tender"> | string | null
    external_shower?: StringNullableFilter<"Tender"> | string | null
    hot_water?: StringNullableFilter<"Tender"> | string | null
    toilet?: StringNullableFilter<"Tender"> | string | null
    fridge_size?: StringNullableFilter<"Tender"> | string | null
    fridge_type?: StringNullableFilter<"Tender"> | string | null
    appliances?: StringFilter<"Tender"> | string
    ac?: StringNullableFilter<"Tender"> | string | null
    diesel_heater?: StringNullableFilter<"Tender"> | string | null
    bed?: StringNullableFilter<"Tender"> | string | null
    kids_beds?: StringNullableFilter<"Tender"> | string | null
    fixtures?: StringNullableFilter<"Tender"> | string | null
    outdoor_kitchen?: StringNullableFilter<"Tender"> | string | null
    electric_awning?: StringNullableFilter<"Tender"> | string | null
    auto_level?: StringNullableFilter<"Tender"> | string | null
    final_comments?: StringNullableFilter<"Tender"> | string | null
    custom_notes?: StringNullableFilter<"Tender"> | string | null
    targetDate?: StringNullableFilter<"Tender"> | string | null
    clientId?: StringNullableFilter<"Tender"> | string | null
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
    quotes?: QuoteListRelationFilter
  }, "id">

  export type TenderOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    selectedDealerIds?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrderInput | SortOrder
    customerPostcode?: SortOrderInput | SortOrder
    tow_vehicle?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    frame?: SortOrderInput | SortOrder
    solar?: SortOrderInput | SortOrder
    batteries?: SortOrderInput | SortOrder
    inverter?: SortOrderInput | SortOrder
    water_tanks?: SortOrderInput | SortOrder
    external_shower?: SortOrderInput | SortOrder
    hot_water?: SortOrderInput | SortOrder
    toilet?: SortOrderInput | SortOrder
    fridge_size?: SortOrderInput | SortOrder
    fridge_type?: SortOrderInput | SortOrder
    appliances?: SortOrder
    ac?: SortOrderInput | SortOrder
    diesel_heater?: SortOrderInput | SortOrder
    bed?: SortOrderInput | SortOrder
    kids_beds?: SortOrderInput | SortOrder
    fixtures?: SortOrderInput | SortOrder
    outdoor_kitchen?: SortOrderInput | SortOrder
    electric_awning?: SortOrderInput | SortOrder
    auto_level?: SortOrderInput | SortOrder
    final_comments?: SortOrderInput | SortOrder
    custom_notes?: SortOrderInput | SortOrder
    targetDate?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    _count?: TenderCountOrderByAggregateInput
    _max?: TenderMaxOrderByAggregateInput
    _min?: TenderMinOrderByAggregateInput
  }

  export type TenderScalarWhereWithAggregatesInput = {
    AND?: TenderScalarWhereWithAggregatesInput | TenderScalarWhereWithAggregatesInput[]
    OR?: TenderScalarWhereWithAggregatesInput[]
    NOT?: TenderScalarWhereWithAggregatesInput | TenderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tender"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tender"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tender"> | Date | string
    status?: StringWithAggregatesFilter<"Tender"> | string
    selectedDealerIds?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    customerName?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    customerEmail?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    customerPostcode?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    tow_vehicle?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    type?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    length?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    frame?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    solar?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    batteries?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    inverter?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    water_tanks?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    external_shower?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    hot_water?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    toilet?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    fridge_size?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    fridge_type?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    appliances?: StringWithAggregatesFilter<"Tender"> | string
    ac?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    diesel_heater?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    bed?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    kids_beds?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    fixtures?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    outdoor_kitchen?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    electric_awning?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    auto_level?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    final_comments?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    custom_notes?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    targetDate?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"Tender"> | string | null
  }

  export type DealerWhereInput = {
    AND?: DealerWhereInput | DealerWhereInput[]
    OR?: DealerWhereInput[]
    NOT?: DealerWhereInput | DealerWhereInput[]
    id?: StringFilter<"Dealer"> | string
    email?: StringFilter<"Dealer"> | string
    password?: StringFilter<"Dealer"> | string
    name?: StringFilter<"Dealer"> | string
    company?: StringFilter<"Dealer"> | string
    phone?: StringNullableFilter<"Dealer"> | string | null
    website?: StringNullableFilter<"Dealer"> | string | null
    location?: StringNullableFilter<"Dealer"> | string | null
    logo?: StringNullableFilter<"Dealer"> | string | null
    subscriptionTier?: StringFilter<"Dealer"> | string
    createdAt?: DateTimeFilter<"Dealer"> | Date | string
    updatedAt?: DateTimeFilter<"Dealer"> | Date | string
    subscriptionStatus?: StringFilter<"Dealer"> | string
    planTier?: StringFilter<"Dealer"> | string
    quotesUsedThisMonth?: IntFilter<"Dealer"> | number
    hasUsedTrial?: BoolFilter<"Dealer"> | boolean
    trialEndsAt?: DateTimeNullableFilter<"Dealer"> | Date | string | null
    stripeCustomerId?: StringNullableFilter<"Dealer"> | string | null
    resetToken?: StringNullableFilter<"Dealer"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Dealer"> | Date | string | null
    quotes?: QuoteListRelationFilter
  }

  export type DealerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    subscriptionTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionStatus?: SortOrder
    planTier?: SortOrder
    quotesUsedThisMonth?: SortOrder
    hasUsedTrial?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    quotes?: QuoteOrderByRelationAggregateInput
  }

  export type DealerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: DealerWhereInput | DealerWhereInput[]
    OR?: DealerWhereInput[]
    NOT?: DealerWhereInput | DealerWhereInput[]
    password?: StringFilter<"Dealer"> | string
    name?: StringFilter<"Dealer"> | string
    company?: StringFilter<"Dealer"> | string
    phone?: StringNullableFilter<"Dealer"> | string | null
    website?: StringNullableFilter<"Dealer"> | string | null
    location?: StringNullableFilter<"Dealer"> | string | null
    logo?: StringNullableFilter<"Dealer"> | string | null
    subscriptionTier?: StringFilter<"Dealer"> | string
    createdAt?: DateTimeFilter<"Dealer"> | Date | string
    updatedAt?: DateTimeFilter<"Dealer"> | Date | string
    subscriptionStatus?: StringFilter<"Dealer"> | string
    planTier?: StringFilter<"Dealer"> | string
    quotesUsedThisMonth?: IntFilter<"Dealer"> | number
    hasUsedTrial?: BoolFilter<"Dealer"> | boolean
    trialEndsAt?: DateTimeNullableFilter<"Dealer"> | Date | string | null
    stripeCustomerId?: StringNullableFilter<"Dealer"> | string | null
    resetToken?: StringNullableFilter<"Dealer"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Dealer"> | Date | string | null
    quotes?: QuoteListRelationFilter
  }, "id" | "email">

  export type DealerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    subscriptionTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionStatus?: SortOrder
    planTier?: SortOrder
    quotesUsedThisMonth?: SortOrder
    hasUsedTrial?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    _count?: DealerCountOrderByAggregateInput
    _avg?: DealerAvgOrderByAggregateInput
    _max?: DealerMaxOrderByAggregateInput
    _min?: DealerMinOrderByAggregateInput
    _sum?: DealerSumOrderByAggregateInput
  }

  export type DealerScalarWhereWithAggregatesInput = {
    AND?: DealerScalarWhereWithAggregatesInput | DealerScalarWhereWithAggregatesInput[]
    OR?: DealerScalarWhereWithAggregatesInput[]
    NOT?: DealerScalarWhereWithAggregatesInput | DealerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dealer"> | string
    email?: StringWithAggregatesFilter<"Dealer"> | string
    password?: StringWithAggregatesFilter<"Dealer"> | string
    name?: StringWithAggregatesFilter<"Dealer"> | string
    company?: StringWithAggregatesFilter<"Dealer"> | string
    phone?: StringNullableWithAggregatesFilter<"Dealer"> | string | null
    website?: StringNullableWithAggregatesFilter<"Dealer"> | string | null
    location?: StringNullableWithAggregatesFilter<"Dealer"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Dealer"> | string | null
    subscriptionTier?: StringWithAggregatesFilter<"Dealer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dealer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dealer"> | Date | string
    subscriptionStatus?: StringWithAggregatesFilter<"Dealer"> | string
    planTier?: StringWithAggregatesFilter<"Dealer"> | string
    quotesUsedThisMonth?: IntWithAggregatesFilter<"Dealer"> | number
    hasUsedTrial?: BoolWithAggregatesFilter<"Dealer"> | boolean
    trialEndsAt?: DateTimeNullableWithAggregatesFilter<"Dealer"> | Date | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Dealer"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"Dealer"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"Dealer"> | Date | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    password?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    location?: StringFilter<"Client"> | string
    freeTendersUsed?: IntFilter<"Client"> | number
    tenderCount?: IntFilter<"Client"> | number
    resetToken?: StringNullableFilter<"Client"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Client"> | Date | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    tenders?: TenderListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    freeTendersUsed?: SortOrder
    tenderCount?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tenders?: TenderOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    password?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    location?: StringFilter<"Client"> | string
    freeTendersUsed?: IntFilter<"Client"> | number
    tenderCount?: IntFilter<"Client"> | number
    resetToken?: StringNullableFilter<"Client"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Client"> | Date | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    tenders?: TenderListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    freeTendersUsed?: SortOrder
    tenderCount?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    password?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    location?: StringWithAggregatesFilter<"Client"> | string
    freeTendersUsed?: IntWithAggregatesFilter<"Client"> | number
    tenderCount?: IntWithAggregatesFilter<"Client"> | number
    resetToken?: StringNullableWithAggregatesFilter<"Client"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type QuoteWhereInput = {
    AND?: QuoteWhereInput | QuoteWhereInput[]
    OR?: QuoteWhereInput[]
    NOT?: QuoteWhereInput | QuoteWhereInput[]
    id?: StringFilter<"Quote"> | string
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    price?: StringFilter<"Quote"> | string
    description?: StringFilter<"Quote"> | string
    tenderId?: StringFilter<"Quote"> | string
    dealerId?: StringFilter<"Quote"> | string
    status?: StringFilter<"Quote"> | string
    tender?: XOR<TenderRelationFilter, TenderWhereInput>
    dealer?: XOR<DealerRelationFilter, DealerWhereInput>
  }

  export type QuoteOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
    description?: SortOrder
    tenderId?: SortOrder
    dealerId?: SortOrder
    status?: SortOrder
    tender?: TenderOrderByWithRelationInput
    dealer?: DealerOrderByWithRelationInput
  }

  export type QuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuoteWhereInput | QuoteWhereInput[]
    OR?: QuoteWhereInput[]
    NOT?: QuoteWhereInput | QuoteWhereInput[]
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    price?: StringFilter<"Quote"> | string
    description?: StringFilter<"Quote"> | string
    tenderId?: StringFilter<"Quote"> | string
    dealerId?: StringFilter<"Quote"> | string
    status?: StringFilter<"Quote"> | string
    tender?: XOR<TenderRelationFilter, TenderWhereInput>
    dealer?: XOR<DealerRelationFilter, DealerWhereInput>
  }, "id">

  export type QuoteOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
    description?: SortOrder
    tenderId?: SortOrder
    dealerId?: SortOrder
    status?: SortOrder
    _count?: QuoteCountOrderByAggregateInput
    _max?: QuoteMaxOrderByAggregateInput
    _min?: QuoteMinOrderByAggregateInput
  }

  export type QuoteScalarWhereWithAggregatesInput = {
    AND?: QuoteScalarWhereWithAggregatesInput | QuoteScalarWhereWithAggregatesInput[]
    OR?: QuoteScalarWhereWithAggregatesInput[]
    NOT?: QuoteScalarWhereWithAggregatesInput | QuoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Quote"> | Date | string
    price?: StringWithAggregatesFilter<"Quote"> | string
    description?: StringWithAggregatesFilter<"Quote"> | string
    tenderId?: StringWithAggregatesFilter<"Quote"> | string
    dealerId?: StringWithAggregatesFilter<"Quote"> | string
    status?: StringWithAggregatesFilter<"Quote"> | string
  }

  export type UsedCaravanWhereInput = {
    AND?: UsedCaravanWhereInput | UsedCaravanWhereInput[]
    OR?: UsedCaravanWhereInput[]
    NOT?: UsedCaravanWhereInput | UsedCaravanWhereInput[]
    id?: StringFilter<"UsedCaravan"> | string
    createdAt?: DateTimeFilter<"UsedCaravan"> | Date | string
    updatedAt?: DateTimeFilter<"UsedCaravan"> | Date | string
    category?: StringFilter<"UsedCaravan"> | string
    year?: IntFilter<"UsedCaravan"> | number
    make?: StringFilter<"UsedCaravan"> | string
    model?: StringFilter<"UsedCaravan"> | string
    length?: FloatFilter<"UsedCaravan"> | number
    sleeps?: StringFilter<"UsedCaravan"> | string
    price?: FloatFilter<"UsedCaravan"> | number
    description?: StringFilter<"UsedCaravan"> | string
    images?: StringFilter<"UsedCaravan"> | string
    sellerName?: StringFilter<"UsedCaravan"> | string
    sellerEmail?: StringFilter<"UsedCaravan"> | string
    sellerPhone?: StringFilter<"UsedCaravan"> | string
    location?: StringFilter<"UsedCaravan"> | string
    status?: StringFilter<"UsedCaravan"> | string
  }

  export type UsedCaravanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    length?: SortOrder
    sleeps?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    sellerName?: SortOrder
    sellerEmail?: SortOrder
    sellerPhone?: SortOrder
    location?: SortOrder
    status?: SortOrder
  }

  export type UsedCaravanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsedCaravanWhereInput | UsedCaravanWhereInput[]
    OR?: UsedCaravanWhereInput[]
    NOT?: UsedCaravanWhereInput | UsedCaravanWhereInput[]
    createdAt?: DateTimeFilter<"UsedCaravan"> | Date | string
    updatedAt?: DateTimeFilter<"UsedCaravan"> | Date | string
    category?: StringFilter<"UsedCaravan"> | string
    year?: IntFilter<"UsedCaravan"> | number
    make?: StringFilter<"UsedCaravan"> | string
    model?: StringFilter<"UsedCaravan"> | string
    length?: FloatFilter<"UsedCaravan"> | number
    sleeps?: StringFilter<"UsedCaravan"> | string
    price?: FloatFilter<"UsedCaravan"> | number
    description?: StringFilter<"UsedCaravan"> | string
    images?: StringFilter<"UsedCaravan"> | string
    sellerName?: StringFilter<"UsedCaravan"> | string
    sellerEmail?: StringFilter<"UsedCaravan"> | string
    sellerPhone?: StringFilter<"UsedCaravan"> | string
    location?: StringFilter<"UsedCaravan"> | string
    status?: StringFilter<"UsedCaravan"> | string
  }, "id">

  export type UsedCaravanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    length?: SortOrder
    sleeps?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    sellerName?: SortOrder
    sellerEmail?: SortOrder
    sellerPhone?: SortOrder
    location?: SortOrder
    status?: SortOrder
    _count?: UsedCaravanCountOrderByAggregateInput
    _avg?: UsedCaravanAvgOrderByAggregateInput
    _max?: UsedCaravanMaxOrderByAggregateInput
    _min?: UsedCaravanMinOrderByAggregateInput
    _sum?: UsedCaravanSumOrderByAggregateInput
  }

  export type UsedCaravanScalarWhereWithAggregatesInput = {
    AND?: UsedCaravanScalarWhereWithAggregatesInput | UsedCaravanScalarWhereWithAggregatesInput[]
    OR?: UsedCaravanScalarWhereWithAggregatesInput[]
    NOT?: UsedCaravanScalarWhereWithAggregatesInput | UsedCaravanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsedCaravan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UsedCaravan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UsedCaravan"> | Date | string
    category?: StringWithAggregatesFilter<"UsedCaravan"> | string
    year?: IntWithAggregatesFilter<"UsedCaravan"> | number
    make?: StringWithAggregatesFilter<"UsedCaravan"> | string
    model?: StringWithAggregatesFilter<"UsedCaravan"> | string
    length?: FloatWithAggregatesFilter<"UsedCaravan"> | number
    sleeps?: StringWithAggregatesFilter<"UsedCaravan"> | string
    price?: FloatWithAggregatesFilter<"UsedCaravan"> | number
    description?: StringWithAggregatesFilter<"UsedCaravan"> | string
    images?: StringWithAggregatesFilter<"UsedCaravan"> | string
    sellerName?: StringWithAggregatesFilter<"UsedCaravan"> | string
    sellerEmail?: StringWithAggregatesFilter<"UsedCaravan"> | string
    sellerPhone?: StringWithAggregatesFilter<"UsedCaravan"> | string
    location?: StringWithAggregatesFilter<"UsedCaravan"> | string
    status?: StringWithAggregatesFilter<"UsedCaravan"> | string
  }

  export type TenderCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    selectedDealerIds?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPostcode?: string | null
    tow_vehicle?: string | null
    type?: string | null
    length?: string | null
    frame?: string | null
    solar?: string | null
    batteries?: string | null
    inverter?: string | null
    water_tanks?: string | null
    external_shower?: string | null
    hot_water?: string | null
    toilet?: string | null
    fridge_size?: string | null
    fridge_type?: string | null
    appliances: string
    ac?: string | null
    diesel_heater?: string | null
    bed?: string | null
    kids_beds?: string | null
    fixtures?: string | null
    outdoor_kitchen?: string | null
    electric_awning?: string | null
    auto_level?: string | null
    final_comments?: string | null
    custom_notes?: string | null
    targetDate?: string | null
    client?: ClientCreateNestedOneWithoutTendersInput
    quotes?: QuoteCreateNestedManyWithoutTenderInput
  }

  export type TenderUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    selectedDealerIds?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPostcode?: string | null
    tow_vehicle?: string | null
    type?: string | null
    length?: string | null
    frame?: string | null
    solar?: string | null
    batteries?: string | null
    inverter?: string | null
    water_tanks?: string | null
    external_shower?: string | null
    hot_water?: string | null
    toilet?: string | null
    fridge_size?: string | null
    fridge_type?: string | null
    appliances: string
    ac?: string | null
    diesel_heater?: string | null
    bed?: string | null
    kids_beds?: string | null
    fixtures?: string | null
    outdoor_kitchen?: string | null
    electric_awning?: string | null
    auto_level?: string | null
    final_comments?: string | null
    custom_notes?: string | null
    targetDate?: string | null
    clientId?: string | null
    quotes?: QuoteUncheckedCreateNestedManyWithoutTenderInput
  }

  export type TenderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    selectedDealerIds?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPostcode?: NullableStringFieldUpdateOperationsInput | string | null
    tow_vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    solar?: NullableStringFieldUpdateOperationsInput | string | null
    batteries?: NullableStringFieldUpdateOperationsInput | string | null
    inverter?: NullableStringFieldUpdateOperationsInput | string | null
    water_tanks?: NullableStringFieldUpdateOperationsInput | string | null
    external_shower?: NullableStringFieldUpdateOperationsInput | string | null
    hot_water?: NullableStringFieldUpdateOperationsInput | string | null
    toilet?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_size?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_type?: NullableStringFieldUpdateOperationsInput | string | null
    appliances?: StringFieldUpdateOperationsInput | string
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    diesel_heater?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: NullableStringFieldUpdateOperationsInput | string | null
    kids_beds?: NullableStringFieldUpdateOperationsInput | string | null
    fixtures?: NullableStringFieldUpdateOperationsInput | string | null
    outdoor_kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    electric_awning?: NullableStringFieldUpdateOperationsInput | string | null
    auto_level?: NullableStringFieldUpdateOperationsInput | string | null
    final_comments?: NullableStringFieldUpdateOperationsInput | string | null
    custom_notes?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneWithoutTendersNestedInput
    quotes?: QuoteUpdateManyWithoutTenderNestedInput
  }

  export type TenderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    selectedDealerIds?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPostcode?: NullableStringFieldUpdateOperationsInput | string | null
    tow_vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    solar?: NullableStringFieldUpdateOperationsInput | string | null
    batteries?: NullableStringFieldUpdateOperationsInput | string | null
    inverter?: NullableStringFieldUpdateOperationsInput | string | null
    water_tanks?: NullableStringFieldUpdateOperationsInput | string | null
    external_shower?: NullableStringFieldUpdateOperationsInput | string | null
    hot_water?: NullableStringFieldUpdateOperationsInput | string | null
    toilet?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_size?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_type?: NullableStringFieldUpdateOperationsInput | string | null
    appliances?: StringFieldUpdateOperationsInput | string
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    diesel_heater?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: NullableStringFieldUpdateOperationsInput | string | null
    kids_beds?: NullableStringFieldUpdateOperationsInput | string | null
    fixtures?: NullableStringFieldUpdateOperationsInput | string | null
    outdoor_kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    electric_awning?: NullableStringFieldUpdateOperationsInput | string | null
    auto_level?: NullableStringFieldUpdateOperationsInput | string | null
    final_comments?: NullableStringFieldUpdateOperationsInput | string | null
    custom_notes?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    quotes?: QuoteUncheckedUpdateManyWithoutTenderNestedInput
  }

  export type TenderCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    selectedDealerIds?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPostcode?: string | null
    tow_vehicle?: string | null
    type?: string | null
    length?: string | null
    frame?: string | null
    solar?: string | null
    batteries?: string | null
    inverter?: string | null
    water_tanks?: string | null
    external_shower?: string | null
    hot_water?: string | null
    toilet?: string | null
    fridge_size?: string | null
    fridge_type?: string | null
    appliances: string
    ac?: string | null
    diesel_heater?: string | null
    bed?: string | null
    kids_beds?: string | null
    fixtures?: string | null
    outdoor_kitchen?: string | null
    electric_awning?: string | null
    auto_level?: string | null
    final_comments?: string | null
    custom_notes?: string | null
    targetDate?: string | null
    clientId?: string | null
  }

  export type TenderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    selectedDealerIds?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPostcode?: NullableStringFieldUpdateOperationsInput | string | null
    tow_vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    solar?: NullableStringFieldUpdateOperationsInput | string | null
    batteries?: NullableStringFieldUpdateOperationsInput | string | null
    inverter?: NullableStringFieldUpdateOperationsInput | string | null
    water_tanks?: NullableStringFieldUpdateOperationsInput | string | null
    external_shower?: NullableStringFieldUpdateOperationsInput | string | null
    hot_water?: NullableStringFieldUpdateOperationsInput | string | null
    toilet?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_size?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_type?: NullableStringFieldUpdateOperationsInput | string | null
    appliances?: StringFieldUpdateOperationsInput | string
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    diesel_heater?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: NullableStringFieldUpdateOperationsInput | string | null
    kids_beds?: NullableStringFieldUpdateOperationsInput | string | null
    fixtures?: NullableStringFieldUpdateOperationsInput | string | null
    outdoor_kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    electric_awning?: NullableStringFieldUpdateOperationsInput | string | null
    auto_level?: NullableStringFieldUpdateOperationsInput | string | null
    final_comments?: NullableStringFieldUpdateOperationsInput | string | null
    custom_notes?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    selectedDealerIds?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPostcode?: NullableStringFieldUpdateOperationsInput | string | null
    tow_vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    solar?: NullableStringFieldUpdateOperationsInput | string | null
    batteries?: NullableStringFieldUpdateOperationsInput | string | null
    inverter?: NullableStringFieldUpdateOperationsInput | string | null
    water_tanks?: NullableStringFieldUpdateOperationsInput | string | null
    external_shower?: NullableStringFieldUpdateOperationsInput | string | null
    hot_water?: NullableStringFieldUpdateOperationsInput | string | null
    toilet?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_size?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_type?: NullableStringFieldUpdateOperationsInput | string | null
    appliances?: StringFieldUpdateOperationsInput | string
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    diesel_heater?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: NullableStringFieldUpdateOperationsInput | string | null
    kids_beds?: NullableStringFieldUpdateOperationsInput | string | null
    fixtures?: NullableStringFieldUpdateOperationsInput | string | null
    outdoor_kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    electric_awning?: NullableStringFieldUpdateOperationsInput | string | null
    auto_level?: NullableStringFieldUpdateOperationsInput | string | null
    final_comments?: NullableStringFieldUpdateOperationsInput | string | null
    custom_notes?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealerCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    company: string
    phone?: string | null
    website?: string | null
    location?: string | null
    logo?: string | null
    subscriptionTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionStatus?: string
    planTier?: string
    quotesUsedThisMonth?: number
    hasUsedTrial?: boolean
    trialEndsAt?: Date | string | null
    stripeCustomerId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    quotes?: QuoteCreateNestedManyWithoutDealerInput
  }

  export type DealerUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    company: string
    phone?: string | null
    website?: string | null
    location?: string | null
    logo?: string | null
    subscriptionTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionStatus?: string
    planTier?: string
    quotesUsedThisMonth?: number
    hasUsedTrial?: boolean
    trialEndsAt?: Date | string | null
    stripeCustomerId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    quotes?: QuoteUncheckedCreateNestedManyWithoutDealerInput
  }

  export type DealerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    quotesUsedThisMonth?: IntFieldUpdateOperationsInput | number
    hasUsedTrial?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotes?: QuoteUpdateManyWithoutDealerNestedInput
  }

  export type DealerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    quotesUsedThisMonth?: IntFieldUpdateOperationsInput | number
    hasUsedTrial?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotes?: QuoteUncheckedUpdateManyWithoutDealerNestedInput
  }

  export type DealerCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    company: string
    phone?: string | null
    website?: string | null
    location?: string | null
    logo?: string | null
    subscriptionTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionStatus?: string
    planTier?: string
    quotesUsedThisMonth?: number
    hasUsedTrial?: boolean
    trialEndsAt?: Date | string | null
    stripeCustomerId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type DealerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    quotesUsedThisMonth?: IntFieldUpdateOperationsInput | number
    hasUsedTrial?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DealerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    quotesUsedThisMonth?: IntFieldUpdateOperationsInput | number
    hasUsedTrial?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    phone: string
    location: string
    freeTendersUsed?: number
    tenderCount?: number
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    tenders?: TenderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    phone: string
    location: string
    freeTendersUsed?: number
    tenderCount?: number
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    tenders?: TenderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    freeTendersUsed?: IntFieldUpdateOperationsInput | number
    tenderCount?: IntFieldUpdateOperationsInput | number
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenders?: TenderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    freeTendersUsed?: IntFieldUpdateOperationsInput | number
    tenderCount?: IntFieldUpdateOperationsInput | number
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenders?: TenderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    phone: string
    location: string
    freeTendersUsed?: number
    tenderCount?: number
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    freeTendersUsed?: IntFieldUpdateOperationsInput | number
    tenderCount?: IntFieldUpdateOperationsInput | number
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    freeTendersUsed?: IntFieldUpdateOperationsInput | number
    tenderCount?: IntFieldUpdateOperationsInput | number
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteCreateInput = {
    id?: string
    createdAt?: Date | string
    price: string
    description: string
    status?: string
    tender: TenderCreateNestedOneWithoutQuotesInput
    dealer: DealerCreateNestedOneWithoutQuotesInput
  }

  export type QuoteUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    price: string
    description: string
    tenderId: string
    dealerId: string
    status?: string
  }

  export type QuoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tender?: TenderUpdateOneRequiredWithoutQuotesNestedInput
    dealer?: DealerUpdateOneRequiredWithoutQuotesNestedInput
  }

  export type QuoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tenderId?: StringFieldUpdateOperationsInput | string
    dealerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteCreateManyInput = {
    id?: string
    createdAt?: Date | string
    price: string
    description: string
    tenderId: string
    dealerId: string
    status?: string
  }

  export type QuoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tenderId?: StringFieldUpdateOperationsInput | string
    dealerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsedCaravanCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: string
    year: number
    make: string
    model: string
    length: number
    sleeps: string
    price: number
    description: string
    images: string
    sellerName: string
    sellerEmail: string
    sellerPhone: string
    location: string
    status?: string
  }

  export type UsedCaravanUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: string
    year: number
    make: string
    model: string
    length: number
    sleeps: string
    price: number
    description: string
    images: string
    sellerName: string
    sellerEmail: string
    sellerPhone: string
    location: string
    status?: string
  }

  export type UsedCaravanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    sleeps?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    sellerEmail?: StringFieldUpdateOperationsInput | string
    sellerPhone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsedCaravanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    sleeps?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    sellerEmail?: StringFieldUpdateOperationsInput | string
    sellerPhone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsedCaravanCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: string
    year: number
    make: string
    model: string
    length: number
    sleeps: string
    price: number
    description: string
    images: string
    sellerName: string
    sellerEmail: string
    sellerPhone: string
    location: string
    status?: string
  }

  export type UsedCaravanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    sleeps?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    sellerEmail?: StringFieldUpdateOperationsInput | string
    sellerPhone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsedCaravanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    sleeps?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    sellerEmail?: StringFieldUpdateOperationsInput | string
    sellerPhone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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

  export type ClientNullableRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type QuoteListRelationFilter = {
    every?: QuoteWhereInput
    some?: QuoteWhereInput
    none?: QuoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenderCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    selectedDealerIds?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPostcode?: SortOrder
    tow_vehicle?: SortOrder
    type?: SortOrder
    length?: SortOrder
    frame?: SortOrder
    solar?: SortOrder
    batteries?: SortOrder
    inverter?: SortOrder
    water_tanks?: SortOrder
    external_shower?: SortOrder
    hot_water?: SortOrder
    toilet?: SortOrder
    fridge_size?: SortOrder
    fridge_type?: SortOrder
    appliances?: SortOrder
    ac?: SortOrder
    diesel_heater?: SortOrder
    bed?: SortOrder
    kids_beds?: SortOrder
    fixtures?: SortOrder
    outdoor_kitchen?: SortOrder
    electric_awning?: SortOrder
    auto_level?: SortOrder
    final_comments?: SortOrder
    custom_notes?: SortOrder
    targetDate?: SortOrder
    clientId?: SortOrder
  }

  export type TenderMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    selectedDealerIds?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPostcode?: SortOrder
    tow_vehicle?: SortOrder
    type?: SortOrder
    length?: SortOrder
    frame?: SortOrder
    solar?: SortOrder
    batteries?: SortOrder
    inverter?: SortOrder
    water_tanks?: SortOrder
    external_shower?: SortOrder
    hot_water?: SortOrder
    toilet?: SortOrder
    fridge_size?: SortOrder
    fridge_type?: SortOrder
    appliances?: SortOrder
    ac?: SortOrder
    diesel_heater?: SortOrder
    bed?: SortOrder
    kids_beds?: SortOrder
    fixtures?: SortOrder
    outdoor_kitchen?: SortOrder
    electric_awning?: SortOrder
    auto_level?: SortOrder
    final_comments?: SortOrder
    custom_notes?: SortOrder
    targetDate?: SortOrder
    clientId?: SortOrder
  }

  export type TenderMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    selectedDealerIds?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPostcode?: SortOrder
    tow_vehicle?: SortOrder
    type?: SortOrder
    length?: SortOrder
    frame?: SortOrder
    solar?: SortOrder
    batteries?: SortOrder
    inverter?: SortOrder
    water_tanks?: SortOrder
    external_shower?: SortOrder
    hot_water?: SortOrder
    toilet?: SortOrder
    fridge_size?: SortOrder
    fridge_type?: SortOrder
    appliances?: SortOrder
    ac?: SortOrder
    diesel_heater?: SortOrder
    bed?: SortOrder
    kids_beds?: SortOrder
    fixtures?: SortOrder
    outdoor_kitchen?: SortOrder
    electric_awning?: SortOrder
    auto_level?: SortOrder
    final_comments?: SortOrder
    custom_notes?: SortOrder
    targetDate?: SortOrder
    clientId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DealerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    location?: SortOrder
    logo?: SortOrder
    subscriptionTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionStatus?: SortOrder
    planTier?: SortOrder
    quotesUsedThisMonth?: SortOrder
    hasUsedTrial?: SortOrder
    trialEndsAt?: SortOrder
    stripeCustomerId?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type DealerAvgOrderByAggregateInput = {
    quotesUsedThisMonth?: SortOrder
  }

  export type DealerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    location?: SortOrder
    logo?: SortOrder
    subscriptionTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionStatus?: SortOrder
    planTier?: SortOrder
    quotesUsedThisMonth?: SortOrder
    hasUsedTrial?: SortOrder
    trialEndsAt?: SortOrder
    stripeCustomerId?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type DealerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    location?: SortOrder
    logo?: SortOrder
    subscriptionTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionStatus?: SortOrder
    planTier?: SortOrder
    quotesUsedThisMonth?: SortOrder
    hasUsedTrial?: SortOrder
    trialEndsAt?: SortOrder
    stripeCustomerId?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type DealerSumOrderByAggregateInput = {
    quotesUsedThisMonth?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TenderListRelationFilter = {
    every?: TenderWhereInput
    some?: TenderWhereInput
    none?: TenderWhereInput
  }

  export type TenderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    freeTendersUsed?: SortOrder
    tenderCount?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    freeTendersUsed?: SortOrder
    tenderCount?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    freeTendersUsed?: SortOrder
    tenderCount?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    freeTendersUsed?: SortOrder
    tenderCount?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    freeTendersUsed?: SortOrder
    tenderCount?: SortOrder
  }

  export type TenderRelationFilter = {
    is?: TenderWhereInput
    isNot?: TenderWhereInput
  }

  export type DealerRelationFilter = {
    is?: DealerWhereInput
    isNot?: DealerWhereInput
  }

  export type QuoteCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
    description?: SortOrder
    tenderId?: SortOrder
    dealerId?: SortOrder
    status?: SortOrder
  }

  export type QuoteMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
    description?: SortOrder
    tenderId?: SortOrder
    dealerId?: SortOrder
    status?: SortOrder
  }

  export type QuoteMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
    description?: SortOrder
    tenderId?: SortOrder
    dealerId?: SortOrder
    status?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsedCaravanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    length?: SortOrder
    sleeps?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    sellerName?: SortOrder
    sellerEmail?: SortOrder
    sellerPhone?: SortOrder
    location?: SortOrder
    status?: SortOrder
  }

  export type UsedCaravanAvgOrderByAggregateInput = {
    year?: SortOrder
    length?: SortOrder
    price?: SortOrder
  }

  export type UsedCaravanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    length?: SortOrder
    sleeps?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    sellerName?: SortOrder
    sellerEmail?: SortOrder
    sellerPhone?: SortOrder
    location?: SortOrder
    status?: SortOrder
  }

  export type UsedCaravanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    length?: SortOrder
    sleeps?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    sellerName?: SortOrder
    sellerEmail?: SortOrder
    sellerPhone?: SortOrder
    location?: SortOrder
    status?: SortOrder
  }

  export type UsedCaravanSumOrderByAggregateInput = {
    year?: SortOrder
    length?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ClientCreateNestedOneWithoutTendersInput = {
    create?: XOR<ClientCreateWithoutTendersInput, ClientUncheckedCreateWithoutTendersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTendersInput
    connect?: ClientWhereUniqueInput
  }

  export type QuoteCreateNestedManyWithoutTenderInput = {
    create?: XOR<QuoteCreateWithoutTenderInput, QuoteUncheckedCreateWithoutTenderInput> | QuoteCreateWithoutTenderInput[] | QuoteUncheckedCreateWithoutTenderInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutTenderInput | QuoteCreateOrConnectWithoutTenderInput[]
    createMany?: QuoteCreateManyTenderInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type QuoteUncheckedCreateNestedManyWithoutTenderInput = {
    create?: XOR<QuoteCreateWithoutTenderInput, QuoteUncheckedCreateWithoutTenderInput> | QuoteCreateWithoutTenderInput[] | QuoteUncheckedCreateWithoutTenderInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutTenderInput | QuoteCreateOrConnectWithoutTenderInput[]
    createMany?: QuoteCreateManyTenderInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientUpdateOneWithoutTendersNestedInput = {
    create?: XOR<ClientCreateWithoutTendersInput, ClientUncheckedCreateWithoutTendersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTendersInput
    upsert?: ClientUpsertWithoutTendersInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTendersInput, ClientUpdateWithoutTendersInput>, ClientUncheckedUpdateWithoutTendersInput>
  }

  export type QuoteUpdateManyWithoutTenderNestedInput = {
    create?: XOR<QuoteCreateWithoutTenderInput, QuoteUncheckedCreateWithoutTenderInput> | QuoteCreateWithoutTenderInput[] | QuoteUncheckedCreateWithoutTenderInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutTenderInput | QuoteCreateOrConnectWithoutTenderInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutTenderInput | QuoteUpsertWithWhereUniqueWithoutTenderInput[]
    createMany?: QuoteCreateManyTenderInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutTenderInput | QuoteUpdateWithWhereUniqueWithoutTenderInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutTenderInput | QuoteUpdateManyWithWhereWithoutTenderInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type QuoteUncheckedUpdateManyWithoutTenderNestedInput = {
    create?: XOR<QuoteCreateWithoutTenderInput, QuoteUncheckedCreateWithoutTenderInput> | QuoteCreateWithoutTenderInput[] | QuoteUncheckedCreateWithoutTenderInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutTenderInput | QuoteCreateOrConnectWithoutTenderInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutTenderInput | QuoteUpsertWithWhereUniqueWithoutTenderInput[]
    createMany?: QuoteCreateManyTenderInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutTenderInput | QuoteUpdateWithWhereUniqueWithoutTenderInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutTenderInput | QuoteUpdateManyWithWhereWithoutTenderInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type QuoteCreateNestedManyWithoutDealerInput = {
    create?: XOR<QuoteCreateWithoutDealerInput, QuoteUncheckedCreateWithoutDealerInput> | QuoteCreateWithoutDealerInput[] | QuoteUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutDealerInput | QuoteCreateOrConnectWithoutDealerInput[]
    createMany?: QuoteCreateManyDealerInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type QuoteUncheckedCreateNestedManyWithoutDealerInput = {
    create?: XOR<QuoteCreateWithoutDealerInput, QuoteUncheckedCreateWithoutDealerInput> | QuoteCreateWithoutDealerInput[] | QuoteUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutDealerInput | QuoteCreateOrConnectWithoutDealerInput[]
    createMany?: QuoteCreateManyDealerInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type QuoteUpdateManyWithoutDealerNestedInput = {
    create?: XOR<QuoteCreateWithoutDealerInput, QuoteUncheckedCreateWithoutDealerInput> | QuoteCreateWithoutDealerInput[] | QuoteUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutDealerInput | QuoteCreateOrConnectWithoutDealerInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutDealerInput | QuoteUpsertWithWhereUniqueWithoutDealerInput[]
    createMany?: QuoteCreateManyDealerInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutDealerInput | QuoteUpdateWithWhereUniqueWithoutDealerInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutDealerInput | QuoteUpdateManyWithWhereWithoutDealerInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type QuoteUncheckedUpdateManyWithoutDealerNestedInput = {
    create?: XOR<QuoteCreateWithoutDealerInput, QuoteUncheckedCreateWithoutDealerInput> | QuoteCreateWithoutDealerInput[] | QuoteUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutDealerInput | QuoteCreateOrConnectWithoutDealerInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutDealerInput | QuoteUpsertWithWhereUniqueWithoutDealerInput[]
    createMany?: QuoteCreateManyDealerInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutDealerInput | QuoteUpdateWithWhereUniqueWithoutDealerInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutDealerInput | QuoteUpdateManyWithWhereWithoutDealerInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type TenderCreateNestedManyWithoutClientInput = {
    create?: XOR<TenderCreateWithoutClientInput, TenderUncheckedCreateWithoutClientInput> | TenderCreateWithoutClientInput[] | TenderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TenderCreateOrConnectWithoutClientInput | TenderCreateOrConnectWithoutClientInput[]
    createMany?: TenderCreateManyClientInputEnvelope
    connect?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
  }

  export type TenderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<TenderCreateWithoutClientInput, TenderUncheckedCreateWithoutClientInput> | TenderCreateWithoutClientInput[] | TenderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TenderCreateOrConnectWithoutClientInput | TenderCreateOrConnectWithoutClientInput[]
    createMany?: TenderCreateManyClientInputEnvelope
    connect?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
  }

  export type TenderUpdateManyWithoutClientNestedInput = {
    create?: XOR<TenderCreateWithoutClientInput, TenderUncheckedCreateWithoutClientInput> | TenderCreateWithoutClientInput[] | TenderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TenderCreateOrConnectWithoutClientInput | TenderCreateOrConnectWithoutClientInput[]
    upsert?: TenderUpsertWithWhereUniqueWithoutClientInput | TenderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TenderCreateManyClientInputEnvelope
    set?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
    disconnect?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
    delete?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
    connect?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
    update?: TenderUpdateWithWhereUniqueWithoutClientInput | TenderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TenderUpdateManyWithWhereWithoutClientInput | TenderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TenderScalarWhereInput | TenderScalarWhereInput[]
  }

  export type TenderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<TenderCreateWithoutClientInput, TenderUncheckedCreateWithoutClientInput> | TenderCreateWithoutClientInput[] | TenderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TenderCreateOrConnectWithoutClientInput | TenderCreateOrConnectWithoutClientInput[]
    upsert?: TenderUpsertWithWhereUniqueWithoutClientInput | TenderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TenderCreateManyClientInputEnvelope
    set?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
    disconnect?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
    delete?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
    connect?: TenderWhereUniqueInput | TenderWhereUniqueInput[]
    update?: TenderUpdateWithWhereUniqueWithoutClientInput | TenderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TenderUpdateManyWithWhereWithoutClientInput | TenderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TenderScalarWhereInput | TenderScalarWhereInput[]
  }

  export type TenderCreateNestedOneWithoutQuotesInput = {
    create?: XOR<TenderCreateWithoutQuotesInput, TenderUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: TenderCreateOrConnectWithoutQuotesInput
    connect?: TenderWhereUniqueInput
  }

  export type DealerCreateNestedOneWithoutQuotesInput = {
    create?: XOR<DealerCreateWithoutQuotesInput, DealerUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: DealerCreateOrConnectWithoutQuotesInput
    connect?: DealerWhereUniqueInput
  }

  export type TenderUpdateOneRequiredWithoutQuotesNestedInput = {
    create?: XOR<TenderCreateWithoutQuotesInput, TenderUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: TenderCreateOrConnectWithoutQuotesInput
    upsert?: TenderUpsertWithoutQuotesInput
    connect?: TenderWhereUniqueInput
    update?: XOR<XOR<TenderUpdateToOneWithWhereWithoutQuotesInput, TenderUpdateWithoutQuotesInput>, TenderUncheckedUpdateWithoutQuotesInput>
  }

  export type DealerUpdateOneRequiredWithoutQuotesNestedInput = {
    create?: XOR<DealerCreateWithoutQuotesInput, DealerUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: DealerCreateOrConnectWithoutQuotesInput
    upsert?: DealerUpsertWithoutQuotesInput
    connect?: DealerWhereUniqueInput
    update?: XOR<XOR<DealerUpdateToOneWithWhereWithoutQuotesInput, DealerUpdateWithoutQuotesInput>, DealerUncheckedUpdateWithoutQuotesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ClientCreateWithoutTendersInput = {
    id?: string
    email: string
    password: string
    name: string
    phone: string
    location: string
    freeTendersUsed?: number
    tenderCount?: number
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutTendersInput = {
    id?: string
    email: string
    password: string
    name: string
    phone: string
    location: string
    freeTendersUsed?: number
    tenderCount?: number
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutTendersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTendersInput, ClientUncheckedCreateWithoutTendersInput>
  }

  export type QuoteCreateWithoutTenderInput = {
    id?: string
    createdAt?: Date | string
    price: string
    description: string
    status?: string
    dealer: DealerCreateNestedOneWithoutQuotesInput
  }

  export type QuoteUncheckedCreateWithoutTenderInput = {
    id?: string
    createdAt?: Date | string
    price: string
    description: string
    dealerId: string
    status?: string
  }

  export type QuoteCreateOrConnectWithoutTenderInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutTenderInput, QuoteUncheckedCreateWithoutTenderInput>
  }

  export type QuoteCreateManyTenderInputEnvelope = {
    data: QuoteCreateManyTenderInput | QuoteCreateManyTenderInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutTendersInput = {
    update: XOR<ClientUpdateWithoutTendersInput, ClientUncheckedUpdateWithoutTendersInput>
    create: XOR<ClientCreateWithoutTendersInput, ClientUncheckedCreateWithoutTendersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTendersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTendersInput, ClientUncheckedUpdateWithoutTendersInput>
  }

  export type ClientUpdateWithoutTendersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    freeTendersUsed?: IntFieldUpdateOperationsInput | number
    tenderCount?: IntFieldUpdateOperationsInput | number
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutTendersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    freeTendersUsed?: IntFieldUpdateOperationsInput | number
    tenderCount?: IntFieldUpdateOperationsInput | number
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteUpsertWithWhereUniqueWithoutTenderInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutTenderInput, QuoteUncheckedUpdateWithoutTenderInput>
    create: XOR<QuoteCreateWithoutTenderInput, QuoteUncheckedCreateWithoutTenderInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutTenderInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutTenderInput, QuoteUncheckedUpdateWithoutTenderInput>
  }

  export type QuoteUpdateManyWithWhereWithoutTenderInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutTenderInput>
  }

  export type QuoteScalarWhereInput = {
    AND?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
    OR?: QuoteScalarWhereInput[]
    NOT?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
    id?: StringFilter<"Quote"> | string
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    price?: StringFilter<"Quote"> | string
    description?: StringFilter<"Quote"> | string
    tenderId?: StringFilter<"Quote"> | string
    dealerId?: StringFilter<"Quote"> | string
    status?: StringFilter<"Quote"> | string
  }

  export type QuoteCreateWithoutDealerInput = {
    id?: string
    createdAt?: Date | string
    price: string
    description: string
    status?: string
    tender: TenderCreateNestedOneWithoutQuotesInput
  }

  export type QuoteUncheckedCreateWithoutDealerInput = {
    id?: string
    createdAt?: Date | string
    price: string
    description: string
    tenderId: string
    status?: string
  }

  export type QuoteCreateOrConnectWithoutDealerInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutDealerInput, QuoteUncheckedCreateWithoutDealerInput>
  }

  export type QuoteCreateManyDealerInputEnvelope = {
    data: QuoteCreateManyDealerInput | QuoteCreateManyDealerInput[]
    skipDuplicates?: boolean
  }

  export type QuoteUpsertWithWhereUniqueWithoutDealerInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutDealerInput, QuoteUncheckedUpdateWithoutDealerInput>
    create: XOR<QuoteCreateWithoutDealerInput, QuoteUncheckedCreateWithoutDealerInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutDealerInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutDealerInput, QuoteUncheckedUpdateWithoutDealerInput>
  }

  export type QuoteUpdateManyWithWhereWithoutDealerInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutDealerInput>
  }

  export type TenderCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    selectedDealerIds?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPostcode?: string | null
    tow_vehicle?: string | null
    type?: string | null
    length?: string | null
    frame?: string | null
    solar?: string | null
    batteries?: string | null
    inverter?: string | null
    water_tanks?: string | null
    external_shower?: string | null
    hot_water?: string | null
    toilet?: string | null
    fridge_size?: string | null
    fridge_type?: string | null
    appliances: string
    ac?: string | null
    diesel_heater?: string | null
    bed?: string | null
    kids_beds?: string | null
    fixtures?: string | null
    outdoor_kitchen?: string | null
    electric_awning?: string | null
    auto_level?: string | null
    final_comments?: string | null
    custom_notes?: string | null
    targetDate?: string | null
    quotes?: QuoteCreateNestedManyWithoutTenderInput
  }

  export type TenderUncheckedCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    selectedDealerIds?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPostcode?: string | null
    tow_vehicle?: string | null
    type?: string | null
    length?: string | null
    frame?: string | null
    solar?: string | null
    batteries?: string | null
    inverter?: string | null
    water_tanks?: string | null
    external_shower?: string | null
    hot_water?: string | null
    toilet?: string | null
    fridge_size?: string | null
    fridge_type?: string | null
    appliances: string
    ac?: string | null
    diesel_heater?: string | null
    bed?: string | null
    kids_beds?: string | null
    fixtures?: string | null
    outdoor_kitchen?: string | null
    electric_awning?: string | null
    auto_level?: string | null
    final_comments?: string | null
    custom_notes?: string | null
    targetDate?: string | null
    quotes?: QuoteUncheckedCreateNestedManyWithoutTenderInput
  }

  export type TenderCreateOrConnectWithoutClientInput = {
    where: TenderWhereUniqueInput
    create: XOR<TenderCreateWithoutClientInput, TenderUncheckedCreateWithoutClientInput>
  }

  export type TenderCreateManyClientInputEnvelope = {
    data: TenderCreateManyClientInput | TenderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TenderUpsertWithWhereUniqueWithoutClientInput = {
    where: TenderWhereUniqueInput
    update: XOR<TenderUpdateWithoutClientInput, TenderUncheckedUpdateWithoutClientInput>
    create: XOR<TenderCreateWithoutClientInput, TenderUncheckedCreateWithoutClientInput>
  }

  export type TenderUpdateWithWhereUniqueWithoutClientInput = {
    where: TenderWhereUniqueInput
    data: XOR<TenderUpdateWithoutClientInput, TenderUncheckedUpdateWithoutClientInput>
  }

  export type TenderUpdateManyWithWhereWithoutClientInput = {
    where: TenderScalarWhereInput
    data: XOR<TenderUpdateManyMutationInput, TenderUncheckedUpdateManyWithoutClientInput>
  }

  export type TenderScalarWhereInput = {
    AND?: TenderScalarWhereInput | TenderScalarWhereInput[]
    OR?: TenderScalarWhereInput[]
    NOT?: TenderScalarWhereInput | TenderScalarWhereInput[]
    id?: StringFilter<"Tender"> | string
    createdAt?: DateTimeFilter<"Tender"> | Date | string
    updatedAt?: DateTimeFilter<"Tender"> | Date | string
    status?: StringFilter<"Tender"> | string
    selectedDealerIds?: StringNullableFilter<"Tender"> | string | null
    customerName?: StringNullableFilter<"Tender"> | string | null
    customerEmail?: StringNullableFilter<"Tender"> | string | null
    customerPostcode?: StringNullableFilter<"Tender"> | string | null
    tow_vehicle?: StringNullableFilter<"Tender"> | string | null
    type?: StringNullableFilter<"Tender"> | string | null
    length?: StringNullableFilter<"Tender"> | string | null
    frame?: StringNullableFilter<"Tender"> | string | null
    solar?: StringNullableFilter<"Tender"> | string | null
    batteries?: StringNullableFilter<"Tender"> | string | null
    inverter?: StringNullableFilter<"Tender"> | string | null
    water_tanks?: StringNullableFilter<"Tender"> | string | null
    external_shower?: StringNullableFilter<"Tender"> | string | null
    hot_water?: StringNullableFilter<"Tender"> | string | null
    toilet?: StringNullableFilter<"Tender"> | string | null
    fridge_size?: StringNullableFilter<"Tender"> | string | null
    fridge_type?: StringNullableFilter<"Tender"> | string | null
    appliances?: StringFilter<"Tender"> | string
    ac?: StringNullableFilter<"Tender"> | string | null
    diesel_heater?: StringNullableFilter<"Tender"> | string | null
    bed?: StringNullableFilter<"Tender"> | string | null
    kids_beds?: StringNullableFilter<"Tender"> | string | null
    fixtures?: StringNullableFilter<"Tender"> | string | null
    outdoor_kitchen?: StringNullableFilter<"Tender"> | string | null
    electric_awning?: StringNullableFilter<"Tender"> | string | null
    auto_level?: StringNullableFilter<"Tender"> | string | null
    final_comments?: StringNullableFilter<"Tender"> | string | null
    custom_notes?: StringNullableFilter<"Tender"> | string | null
    targetDate?: StringNullableFilter<"Tender"> | string | null
    clientId?: StringNullableFilter<"Tender"> | string | null
  }

  export type TenderCreateWithoutQuotesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    selectedDealerIds?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPostcode?: string | null
    tow_vehicle?: string | null
    type?: string | null
    length?: string | null
    frame?: string | null
    solar?: string | null
    batteries?: string | null
    inverter?: string | null
    water_tanks?: string | null
    external_shower?: string | null
    hot_water?: string | null
    toilet?: string | null
    fridge_size?: string | null
    fridge_type?: string | null
    appliances: string
    ac?: string | null
    diesel_heater?: string | null
    bed?: string | null
    kids_beds?: string | null
    fixtures?: string | null
    outdoor_kitchen?: string | null
    electric_awning?: string | null
    auto_level?: string | null
    final_comments?: string | null
    custom_notes?: string | null
    targetDate?: string | null
    client?: ClientCreateNestedOneWithoutTendersInput
  }

  export type TenderUncheckedCreateWithoutQuotesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    selectedDealerIds?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPostcode?: string | null
    tow_vehicle?: string | null
    type?: string | null
    length?: string | null
    frame?: string | null
    solar?: string | null
    batteries?: string | null
    inverter?: string | null
    water_tanks?: string | null
    external_shower?: string | null
    hot_water?: string | null
    toilet?: string | null
    fridge_size?: string | null
    fridge_type?: string | null
    appliances: string
    ac?: string | null
    diesel_heater?: string | null
    bed?: string | null
    kids_beds?: string | null
    fixtures?: string | null
    outdoor_kitchen?: string | null
    electric_awning?: string | null
    auto_level?: string | null
    final_comments?: string | null
    custom_notes?: string | null
    targetDate?: string | null
    clientId?: string | null
  }

  export type TenderCreateOrConnectWithoutQuotesInput = {
    where: TenderWhereUniqueInput
    create: XOR<TenderCreateWithoutQuotesInput, TenderUncheckedCreateWithoutQuotesInput>
  }

  export type DealerCreateWithoutQuotesInput = {
    id?: string
    email: string
    password: string
    name: string
    company: string
    phone?: string | null
    website?: string | null
    location?: string | null
    logo?: string | null
    subscriptionTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionStatus?: string
    planTier?: string
    quotesUsedThisMonth?: number
    hasUsedTrial?: boolean
    trialEndsAt?: Date | string | null
    stripeCustomerId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type DealerUncheckedCreateWithoutQuotesInput = {
    id?: string
    email: string
    password: string
    name: string
    company: string
    phone?: string | null
    website?: string | null
    location?: string | null
    logo?: string | null
    subscriptionTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionStatus?: string
    planTier?: string
    quotesUsedThisMonth?: number
    hasUsedTrial?: boolean
    trialEndsAt?: Date | string | null
    stripeCustomerId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type DealerCreateOrConnectWithoutQuotesInput = {
    where: DealerWhereUniqueInput
    create: XOR<DealerCreateWithoutQuotesInput, DealerUncheckedCreateWithoutQuotesInput>
  }

  export type TenderUpsertWithoutQuotesInput = {
    update: XOR<TenderUpdateWithoutQuotesInput, TenderUncheckedUpdateWithoutQuotesInput>
    create: XOR<TenderCreateWithoutQuotesInput, TenderUncheckedCreateWithoutQuotesInput>
    where?: TenderWhereInput
  }

  export type TenderUpdateToOneWithWhereWithoutQuotesInput = {
    where?: TenderWhereInput
    data: XOR<TenderUpdateWithoutQuotesInput, TenderUncheckedUpdateWithoutQuotesInput>
  }

  export type TenderUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    selectedDealerIds?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPostcode?: NullableStringFieldUpdateOperationsInput | string | null
    tow_vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    solar?: NullableStringFieldUpdateOperationsInput | string | null
    batteries?: NullableStringFieldUpdateOperationsInput | string | null
    inverter?: NullableStringFieldUpdateOperationsInput | string | null
    water_tanks?: NullableStringFieldUpdateOperationsInput | string | null
    external_shower?: NullableStringFieldUpdateOperationsInput | string | null
    hot_water?: NullableStringFieldUpdateOperationsInput | string | null
    toilet?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_size?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_type?: NullableStringFieldUpdateOperationsInput | string | null
    appliances?: StringFieldUpdateOperationsInput | string
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    diesel_heater?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: NullableStringFieldUpdateOperationsInput | string | null
    kids_beds?: NullableStringFieldUpdateOperationsInput | string | null
    fixtures?: NullableStringFieldUpdateOperationsInput | string | null
    outdoor_kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    electric_awning?: NullableStringFieldUpdateOperationsInput | string | null
    auto_level?: NullableStringFieldUpdateOperationsInput | string | null
    final_comments?: NullableStringFieldUpdateOperationsInput | string | null
    custom_notes?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneWithoutTendersNestedInput
  }

  export type TenderUncheckedUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    selectedDealerIds?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPostcode?: NullableStringFieldUpdateOperationsInput | string | null
    tow_vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    solar?: NullableStringFieldUpdateOperationsInput | string | null
    batteries?: NullableStringFieldUpdateOperationsInput | string | null
    inverter?: NullableStringFieldUpdateOperationsInput | string | null
    water_tanks?: NullableStringFieldUpdateOperationsInput | string | null
    external_shower?: NullableStringFieldUpdateOperationsInput | string | null
    hot_water?: NullableStringFieldUpdateOperationsInput | string | null
    toilet?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_size?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_type?: NullableStringFieldUpdateOperationsInput | string | null
    appliances?: StringFieldUpdateOperationsInput | string
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    diesel_heater?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: NullableStringFieldUpdateOperationsInput | string | null
    kids_beds?: NullableStringFieldUpdateOperationsInput | string | null
    fixtures?: NullableStringFieldUpdateOperationsInput | string | null
    outdoor_kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    electric_awning?: NullableStringFieldUpdateOperationsInput | string | null
    auto_level?: NullableStringFieldUpdateOperationsInput | string | null
    final_comments?: NullableStringFieldUpdateOperationsInput | string | null
    custom_notes?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealerUpsertWithoutQuotesInput = {
    update: XOR<DealerUpdateWithoutQuotesInput, DealerUncheckedUpdateWithoutQuotesInput>
    create: XOR<DealerCreateWithoutQuotesInput, DealerUncheckedCreateWithoutQuotesInput>
    where?: DealerWhereInput
  }

  export type DealerUpdateToOneWithWhereWithoutQuotesInput = {
    where?: DealerWhereInput
    data: XOR<DealerUpdateWithoutQuotesInput, DealerUncheckedUpdateWithoutQuotesInput>
  }

  export type DealerUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    quotesUsedThisMonth?: IntFieldUpdateOperationsInput | number
    hasUsedTrial?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DealerUncheckedUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    quotesUsedThisMonth?: IntFieldUpdateOperationsInput | number
    hasUsedTrial?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuoteCreateManyTenderInput = {
    id?: string
    createdAt?: Date | string
    price: string
    description: string
    dealerId: string
    status?: string
  }

  export type QuoteUpdateWithoutTenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dealer?: DealerUpdateOneRequiredWithoutQuotesNestedInput
  }

  export type QuoteUncheckedUpdateWithoutTenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dealerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteUncheckedUpdateManyWithoutTenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dealerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteCreateManyDealerInput = {
    id?: string
    createdAt?: Date | string
    price: string
    description: string
    tenderId: string
    status?: string
  }

  export type QuoteUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tender?: TenderUpdateOneRequiredWithoutQuotesNestedInput
  }

  export type QuoteUncheckedUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tenderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteUncheckedUpdateManyWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tenderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TenderCreateManyClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    selectedDealerIds?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPostcode?: string | null
    tow_vehicle?: string | null
    type?: string | null
    length?: string | null
    frame?: string | null
    solar?: string | null
    batteries?: string | null
    inverter?: string | null
    water_tanks?: string | null
    external_shower?: string | null
    hot_water?: string | null
    toilet?: string | null
    fridge_size?: string | null
    fridge_type?: string | null
    appliances: string
    ac?: string | null
    diesel_heater?: string | null
    bed?: string | null
    kids_beds?: string | null
    fixtures?: string | null
    outdoor_kitchen?: string | null
    electric_awning?: string | null
    auto_level?: string | null
    final_comments?: string | null
    custom_notes?: string | null
    targetDate?: string | null
  }

  export type TenderUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    selectedDealerIds?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPostcode?: NullableStringFieldUpdateOperationsInput | string | null
    tow_vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    solar?: NullableStringFieldUpdateOperationsInput | string | null
    batteries?: NullableStringFieldUpdateOperationsInput | string | null
    inverter?: NullableStringFieldUpdateOperationsInput | string | null
    water_tanks?: NullableStringFieldUpdateOperationsInput | string | null
    external_shower?: NullableStringFieldUpdateOperationsInput | string | null
    hot_water?: NullableStringFieldUpdateOperationsInput | string | null
    toilet?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_size?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_type?: NullableStringFieldUpdateOperationsInput | string | null
    appliances?: StringFieldUpdateOperationsInput | string
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    diesel_heater?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: NullableStringFieldUpdateOperationsInput | string | null
    kids_beds?: NullableStringFieldUpdateOperationsInput | string | null
    fixtures?: NullableStringFieldUpdateOperationsInput | string | null
    outdoor_kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    electric_awning?: NullableStringFieldUpdateOperationsInput | string | null
    auto_level?: NullableStringFieldUpdateOperationsInput | string | null
    final_comments?: NullableStringFieldUpdateOperationsInput | string | null
    custom_notes?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableStringFieldUpdateOperationsInput | string | null
    quotes?: QuoteUpdateManyWithoutTenderNestedInput
  }

  export type TenderUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    selectedDealerIds?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPostcode?: NullableStringFieldUpdateOperationsInput | string | null
    tow_vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    solar?: NullableStringFieldUpdateOperationsInput | string | null
    batteries?: NullableStringFieldUpdateOperationsInput | string | null
    inverter?: NullableStringFieldUpdateOperationsInput | string | null
    water_tanks?: NullableStringFieldUpdateOperationsInput | string | null
    external_shower?: NullableStringFieldUpdateOperationsInput | string | null
    hot_water?: NullableStringFieldUpdateOperationsInput | string | null
    toilet?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_size?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_type?: NullableStringFieldUpdateOperationsInput | string | null
    appliances?: StringFieldUpdateOperationsInput | string
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    diesel_heater?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: NullableStringFieldUpdateOperationsInput | string | null
    kids_beds?: NullableStringFieldUpdateOperationsInput | string | null
    fixtures?: NullableStringFieldUpdateOperationsInput | string | null
    outdoor_kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    electric_awning?: NullableStringFieldUpdateOperationsInput | string | null
    auto_level?: NullableStringFieldUpdateOperationsInput | string | null
    final_comments?: NullableStringFieldUpdateOperationsInput | string | null
    custom_notes?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableStringFieldUpdateOperationsInput | string | null
    quotes?: QuoteUncheckedUpdateManyWithoutTenderNestedInput
  }

  export type TenderUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    selectedDealerIds?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPostcode?: NullableStringFieldUpdateOperationsInput | string | null
    tow_vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    frame?: NullableStringFieldUpdateOperationsInput | string | null
    solar?: NullableStringFieldUpdateOperationsInput | string | null
    batteries?: NullableStringFieldUpdateOperationsInput | string | null
    inverter?: NullableStringFieldUpdateOperationsInput | string | null
    water_tanks?: NullableStringFieldUpdateOperationsInput | string | null
    external_shower?: NullableStringFieldUpdateOperationsInput | string | null
    hot_water?: NullableStringFieldUpdateOperationsInput | string | null
    toilet?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_size?: NullableStringFieldUpdateOperationsInput | string | null
    fridge_type?: NullableStringFieldUpdateOperationsInput | string | null
    appliances?: StringFieldUpdateOperationsInput | string
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    diesel_heater?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: NullableStringFieldUpdateOperationsInput | string | null
    kids_beds?: NullableStringFieldUpdateOperationsInput | string | null
    fixtures?: NullableStringFieldUpdateOperationsInput | string | null
    outdoor_kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    electric_awning?: NullableStringFieldUpdateOperationsInput | string | null
    auto_level?: NullableStringFieldUpdateOperationsInput | string | null
    final_comments?: NullableStringFieldUpdateOperationsInput | string | null
    custom_notes?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TenderCountOutputTypeDefaultArgs instead
     */
    export type TenderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DealerCountOutputTypeDefaultArgs instead
     */
    export type DealerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DealerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenderDefaultArgs instead
     */
    export type TenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DealerDefaultArgs instead
     */
    export type DealerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DealerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuoteDefaultArgs instead
     */
    export type QuoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsedCaravanDefaultArgs instead
     */
    export type UsedCaravanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsedCaravanDefaultArgs<ExtArgs>

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