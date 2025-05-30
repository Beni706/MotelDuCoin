
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model chambre
 * 
 */
export type chambre = $Result.DefaultSelection<Prisma.$chambrePayload>
/**
 * Model reservation
 * 
 */
export type reservation = $Result.DefaultSelection<Prisma.$reservationPayload>
/**
 * Model utilisateur
 * 
 */
export type utilisateur = $Result.DefaultSelection<Prisma.$utilisateurPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  EN_ATTENTE: 'EN_ATTENTE',
  REFUSER: 'REFUSER',
  ACCEPTER: 'ACCEPTER'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  caissiere: 'caissiere',
  administrateur: 'administrateur'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chambres
 * const chambres = await prisma.chambre.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Chambres
   * const chambres = await prisma.chambre.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chambre`: Exposes CRUD operations for the **chambre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chambres
    * const chambres = await prisma.chambre.findMany()
    * ```
    */
  get chambre(): Prisma.chambreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.reservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.utilisateurDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    chambre: 'chambre',
    reservation: 'reservation',
    utilisateur: 'utilisateur'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chambre" | "reservation" | "utilisateur"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      chambre: {
        payload: Prisma.$chambrePayload<ExtArgs>
        fields: Prisma.chambreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chambreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chambreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload>
          }
          findFirst: {
            args: Prisma.chambreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chambreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload>
          }
          findMany: {
            args: Prisma.chambreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload>[]
          }
          create: {
            args: Prisma.chambreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload>
          }
          createMany: {
            args: Prisma.chambreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chambreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload>[]
          }
          delete: {
            args: Prisma.chambreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload>
          }
          update: {
            args: Prisma.chambreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload>
          }
          deleteMany: {
            args: Prisma.chambreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chambreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chambreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload>[]
          }
          upsert: {
            args: Prisma.chambreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chambrePayload>
          }
          aggregate: {
            args: Prisma.ChambreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChambre>
          }
          groupBy: {
            args: Prisma.chambreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChambreGroupByOutputType>[]
          }
          count: {
            args: Prisma.chambreCountArgs<ExtArgs>
            result: $Utils.Optional<ChambreCountAggregateOutputType> | number
          }
        }
      }
      reservation: {
        payload: Prisma.$reservationPayload<ExtArgs>
        fields: Prisma.reservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          findFirst: {
            args: Prisma.reservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          findMany: {
            args: Prisma.reservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>[]
          }
          create: {
            args: Prisma.reservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          createMany: {
            args: Prisma.reservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>[]
          }
          delete: {
            args: Prisma.reservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          update: {
            args: Prisma.reservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          deleteMany: {
            args: Prisma.reservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>[]
          }
          upsert: {
            args: Prisma.reservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.reservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      utilisateur: {
        payload: Prisma.$utilisateurPayload<ExtArgs>
        fields: Prisma.utilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.utilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.utilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          findFirst: {
            args: Prisma.utilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.utilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          findMany: {
            args: Prisma.utilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>[]
          }
          create: {
            args: Prisma.utilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          createMany: {
            args: Prisma.utilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.utilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>[]
          }
          delete: {
            args: Prisma.utilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          update: {
            args: Prisma.utilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          deleteMany: {
            args: Prisma.utilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.utilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.utilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>[]
          }
          upsert: {
            args: Prisma.utilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.utilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.utilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    chambre?: chambreOmit
    reservation?: reservationOmit
    utilisateur?: utilisateurOmit
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
   * Count Type ChambreCountOutputType
   */

  export type ChambreCountOutputType = {
    reservations: number
  }

  export type ChambreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | ChambreCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * ChambreCountOutputType without action
   */
  export type ChambreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChambreCountOutputType
     */
    select?: ChambreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChambreCountOutputType without action
   */
  export type ChambreCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model chambre
   */

  export type AggregateChambre = {
    _count: ChambreCountAggregateOutputType | null
    _avg: ChambreAvgAggregateOutputType | null
    _sum: ChambreSumAggregateOutputType | null
    _min: ChambreMinAggregateOutputType | null
    _max: ChambreMaxAggregateOutputType | null
  }

  export type ChambreAvgAggregateOutputType = {
    id_chambre: number | null
    numero_chambre: number | null
    prix_nuit: number | null
    prix_jour: number | null
  }

  export type ChambreSumAggregateOutputType = {
    id_chambre: number | null
    numero_chambre: number | null
    prix_nuit: number | null
    prix_jour: number | null
  }

  export type ChambreMinAggregateOutputType = {
    id_chambre: number | null
    numero_chambre: number | null
    prix_nuit: number | null
    prix_jour: number | null
    type: string | null
    capacite: string | null
    photo: string | null
  }

  export type ChambreMaxAggregateOutputType = {
    id_chambre: number | null
    numero_chambre: number | null
    prix_nuit: number | null
    prix_jour: number | null
    type: string | null
    capacite: string | null
    photo: string | null
  }

  export type ChambreCountAggregateOutputType = {
    id_chambre: number
    numero_chambre: number
    prix_nuit: number
    prix_jour: number
    type: number
    capacite: number
    photo: number
    _all: number
  }


  export type ChambreAvgAggregateInputType = {
    id_chambre?: true
    numero_chambre?: true
    prix_nuit?: true
    prix_jour?: true
  }

  export type ChambreSumAggregateInputType = {
    id_chambre?: true
    numero_chambre?: true
    prix_nuit?: true
    prix_jour?: true
  }

  export type ChambreMinAggregateInputType = {
    id_chambre?: true
    numero_chambre?: true
    prix_nuit?: true
    prix_jour?: true
    type?: true
    capacite?: true
    photo?: true
  }

  export type ChambreMaxAggregateInputType = {
    id_chambre?: true
    numero_chambre?: true
    prix_nuit?: true
    prix_jour?: true
    type?: true
    capacite?: true
    photo?: true
  }

  export type ChambreCountAggregateInputType = {
    id_chambre?: true
    numero_chambre?: true
    prix_nuit?: true
    prix_jour?: true
    type?: true
    capacite?: true
    photo?: true
    _all?: true
  }

  export type ChambreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chambre to aggregate.
     */
    where?: chambreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chambres to fetch.
     */
    orderBy?: chambreOrderByWithRelationInput | chambreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chambreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chambres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chambres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chambres
    **/
    _count?: true | ChambreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChambreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChambreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChambreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChambreMaxAggregateInputType
  }

  export type GetChambreAggregateType<T extends ChambreAggregateArgs> = {
        [P in keyof T & keyof AggregateChambre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChambre[P]>
      : GetScalarType<T[P], AggregateChambre[P]>
  }




  export type chambreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chambreWhereInput
    orderBy?: chambreOrderByWithAggregationInput | chambreOrderByWithAggregationInput[]
    by: ChambreScalarFieldEnum[] | ChambreScalarFieldEnum
    having?: chambreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChambreCountAggregateInputType | true
    _avg?: ChambreAvgAggregateInputType
    _sum?: ChambreSumAggregateInputType
    _min?: ChambreMinAggregateInputType
    _max?: ChambreMaxAggregateInputType
  }

  export type ChambreGroupByOutputType = {
    id_chambre: number
    numero_chambre: number
    prix_nuit: number
    prix_jour: number
    type: string
    capacite: string
    photo: string | null
    _count: ChambreCountAggregateOutputType | null
    _avg: ChambreAvgAggregateOutputType | null
    _sum: ChambreSumAggregateOutputType | null
    _min: ChambreMinAggregateOutputType | null
    _max: ChambreMaxAggregateOutputType | null
  }

  type GetChambreGroupByPayload<T extends chambreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChambreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChambreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChambreGroupByOutputType[P]>
            : GetScalarType<T[P], ChambreGroupByOutputType[P]>
        }
      >
    >


  export type chambreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chambre?: boolean
    numero_chambre?: boolean
    prix_nuit?: boolean
    prix_jour?: boolean
    type?: boolean
    capacite?: boolean
    photo?: boolean
    reservations?: boolean | chambre$reservationsArgs<ExtArgs>
    _count?: boolean | ChambreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chambre"]>

  export type chambreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chambre?: boolean
    numero_chambre?: boolean
    prix_nuit?: boolean
    prix_jour?: boolean
    type?: boolean
    capacite?: boolean
    photo?: boolean
  }, ExtArgs["result"]["chambre"]>

  export type chambreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chambre?: boolean
    numero_chambre?: boolean
    prix_nuit?: boolean
    prix_jour?: boolean
    type?: boolean
    capacite?: boolean
    photo?: boolean
  }, ExtArgs["result"]["chambre"]>

  export type chambreSelectScalar = {
    id_chambre?: boolean
    numero_chambre?: boolean
    prix_nuit?: boolean
    prix_jour?: boolean
    type?: boolean
    capacite?: boolean
    photo?: boolean
  }

  export type chambreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_chambre" | "numero_chambre" | "prix_nuit" | "prix_jour" | "type" | "capacite" | "photo", ExtArgs["result"]["chambre"]>
  export type chambreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | chambre$reservationsArgs<ExtArgs>
    _count?: boolean | ChambreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chambreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type chambreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $chambrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chambre"
    objects: {
      reservations: Prisma.$reservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_chambre: number
      numero_chambre: number
      prix_nuit: number
      prix_jour: number
      type: string
      capacite: string
      photo: string | null
    }, ExtArgs["result"]["chambre"]>
    composites: {}
  }

  type chambreGetPayload<S extends boolean | null | undefined | chambreDefaultArgs> = $Result.GetResult<Prisma.$chambrePayload, S>

  type chambreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chambreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChambreCountAggregateInputType | true
    }

  export interface chambreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chambre'], meta: { name: 'chambre' } }
    /**
     * Find zero or one Chambre that matches the filter.
     * @param {chambreFindUniqueArgs} args - Arguments to find a Chambre
     * @example
     * // Get one Chambre
     * const chambre = await prisma.chambre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chambreFindUniqueArgs>(args: SelectSubset<T, chambreFindUniqueArgs<ExtArgs>>): Prisma__chambreClient<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chambre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chambreFindUniqueOrThrowArgs} args - Arguments to find a Chambre
     * @example
     * // Get one Chambre
     * const chambre = await prisma.chambre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chambreFindUniqueOrThrowArgs>(args: SelectSubset<T, chambreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chambreClient<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chambre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chambreFindFirstArgs} args - Arguments to find a Chambre
     * @example
     * // Get one Chambre
     * const chambre = await prisma.chambre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chambreFindFirstArgs>(args?: SelectSubset<T, chambreFindFirstArgs<ExtArgs>>): Prisma__chambreClient<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chambre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chambreFindFirstOrThrowArgs} args - Arguments to find a Chambre
     * @example
     * // Get one Chambre
     * const chambre = await prisma.chambre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chambreFindFirstOrThrowArgs>(args?: SelectSubset<T, chambreFindFirstOrThrowArgs<ExtArgs>>): Prisma__chambreClient<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chambres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chambreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chambres
     * const chambres = await prisma.chambre.findMany()
     * 
     * // Get first 10 Chambres
     * const chambres = await prisma.chambre.findMany({ take: 10 })
     * 
     * // Only select the `id_chambre`
     * const chambreWithId_chambreOnly = await prisma.chambre.findMany({ select: { id_chambre: true } })
     * 
     */
    findMany<T extends chambreFindManyArgs>(args?: SelectSubset<T, chambreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chambre.
     * @param {chambreCreateArgs} args - Arguments to create a Chambre.
     * @example
     * // Create one Chambre
     * const Chambre = await prisma.chambre.create({
     *   data: {
     *     // ... data to create a Chambre
     *   }
     * })
     * 
     */
    create<T extends chambreCreateArgs>(args: SelectSubset<T, chambreCreateArgs<ExtArgs>>): Prisma__chambreClient<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chambres.
     * @param {chambreCreateManyArgs} args - Arguments to create many Chambres.
     * @example
     * // Create many Chambres
     * const chambre = await prisma.chambre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chambreCreateManyArgs>(args?: SelectSubset<T, chambreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chambres and returns the data saved in the database.
     * @param {chambreCreateManyAndReturnArgs} args - Arguments to create many Chambres.
     * @example
     * // Create many Chambres
     * const chambre = await prisma.chambre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chambres and only return the `id_chambre`
     * const chambreWithId_chambreOnly = await prisma.chambre.createManyAndReturn({
     *   select: { id_chambre: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chambreCreateManyAndReturnArgs>(args?: SelectSubset<T, chambreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chambre.
     * @param {chambreDeleteArgs} args - Arguments to delete one Chambre.
     * @example
     * // Delete one Chambre
     * const Chambre = await prisma.chambre.delete({
     *   where: {
     *     // ... filter to delete one Chambre
     *   }
     * })
     * 
     */
    delete<T extends chambreDeleteArgs>(args: SelectSubset<T, chambreDeleteArgs<ExtArgs>>): Prisma__chambreClient<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chambre.
     * @param {chambreUpdateArgs} args - Arguments to update one Chambre.
     * @example
     * // Update one Chambre
     * const chambre = await prisma.chambre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chambreUpdateArgs>(args: SelectSubset<T, chambreUpdateArgs<ExtArgs>>): Prisma__chambreClient<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chambres.
     * @param {chambreDeleteManyArgs} args - Arguments to filter Chambres to delete.
     * @example
     * // Delete a few Chambres
     * const { count } = await prisma.chambre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chambreDeleteManyArgs>(args?: SelectSubset<T, chambreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chambres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chambreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chambres
     * const chambre = await prisma.chambre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chambreUpdateManyArgs>(args: SelectSubset<T, chambreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chambres and returns the data updated in the database.
     * @param {chambreUpdateManyAndReturnArgs} args - Arguments to update many Chambres.
     * @example
     * // Update many Chambres
     * const chambre = await prisma.chambre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chambres and only return the `id_chambre`
     * const chambreWithId_chambreOnly = await prisma.chambre.updateManyAndReturn({
     *   select: { id_chambre: true },
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
    updateManyAndReturn<T extends chambreUpdateManyAndReturnArgs>(args: SelectSubset<T, chambreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chambre.
     * @param {chambreUpsertArgs} args - Arguments to update or create a Chambre.
     * @example
     * // Update or create a Chambre
     * const chambre = await prisma.chambre.upsert({
     *   create: {
     *     // ... data to create a Chambre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chambre we want to update
     *   }
     * })
     */
    upsert<T extends chambreUpsertArgs>(args: SelectSubset<T, chambreUpsertArgs<ExtArgs>>): Prisma__chambreClient<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chambres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chambreCountArgs} args - Arguments to filter Chambres to count.
     * @example
     * // Count the number of Chambres
     * const count = await prisma.chambre.count({
     *   where: {
     *     // ... the filter for the Chambres we want to count
     *   }
     * })
    **/
    count<T extends chambreCountArgs>(
      args?: Subset<T, chambreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChambreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chambre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChambreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChambreAggregateArgs>(args: Subset<T, ChambreAggregateArgs>): Prisma.PrismaPromise<GetChambreAggregateType<T>>

    /**
     * Group by Chambre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chambreGroupByArgs} args - Group by arguments.
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
      T extends chambreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chambreGroupByArgs['orderBy'] }
        : { orderBy?: chambreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chambreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChambreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chambre model
   */
  readonly fields: chambreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chambre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chambreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends chambre$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, chambre$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the chambre model
   */
  interface chambreFieldRefs {
    readonly id_chambre: FieldRef<"chambre", 'Int'>
    readonly numero_chambre: FieldRef<"chambre", 'Int'>
    readonly prix_nuit: FieldRef<"chambre", 'Int'>
    readonly prix_jour: FieldRef<"chambre", 'Int'>
    readonly type: FieldRef<"chambre", 'String'>
    readonly capacite: FieldRef<"chambre", 'String'>
    readonly photo: FieldRef<"chambre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chambre findUnique
   */
  export type chambreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
    /**
     * Filter, which chambre to fetch.
     */
    where: chambreWhereUniqueInput
  }

  /**
   * chambre findUniqueOrThrow
   */
  export type chambreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
    /**
     * Filter, which chambre to fetch.
     */
    where: chambreWhereUniqueInput
  }

  /**
   * chambre findFirst
   */
  export type chambreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
    /**
     * Filter, which chambre to fetch.
     */
    where?: chambreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chambres to fetch.
     */
    orderBy?: chambreOrderByWithRelationInput | chambreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chambres.
     */
    cursor?: chambreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chambres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chambres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chambres.
     */
    distinct?: ChambreScalarFieldEnum | ChambreScalarFieldEnum[]
  }

  /**
   * chambre findFirstOrThrow
   */
  export type chambreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
    /**
     * Filter, which chambre to fetch.
     */
    where?: chambreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chambres to fetch.
     */
    orderBy?: chambreOrderByWithRelationInput | chambreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chambres.
     */
    cursor?: chambreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chambres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chambres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chambres.
     */
    distinct?: ChambreScalarFieldEnum | ChambreScalarFieldEnum[]
  }

  /**
   * chambre findMany
   */
  export type chambreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
    /**
     * Filter, which chambres to fetch.
     */
    where?: chambreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chambres to fetch.
     */
    orderBy?: chambreOrderByWithRelationInput | chambreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chambres.
     */
    cursor?: chambreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chambres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chambres.
     */
    skip?: number
    distinct?: ChambreScalarFieldEnum | ChambreScalarFieldEnum[]
  }

  /**
   * chambre create
   */
  export type chambreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
    /**
     * The data needed to create a chambre.
     */
    data: XOR<chambreCreateInput, chambreUncheckedCreateInput>
  }

  /**
   * chambre createMany
   */
  export type chambreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chambres.
     */
    data: chambreCreateManyInput | chambreCreateManyInput[]
  }

  /**
   * chambre createManyAndReturn
   */
  export type chambreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * The data used to create many chambres.
     */
    data: chambreCreateManyInput | chambreCreateManyInput[]
  }

  /**
   * chambre update
   */
  export type chambreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
    /**
     * The data needed to update a chambre.
     */
    data: XOR<chambreUpdateInput, chambreUncheckedUpdateInput>
    /**
     * Choose, which chambre to update.
     */
    where: chambreWhereUniqueInput
  }

  /**
   * chambre updateMany
   */
  export type chambreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chambres.
     */
    data: XOR<chambreUpdateManyMutationInput, chambreUncheckedUpdateManyInput>
    /**
     * Filter which chambres to update
     */
    where?: chambreWhereInput
    /**
     * Limit how many chambres to update.
     */
    limit?: number
  }

  /**
   * chambre updateManyAndReturn
   */
  export type chambreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * The data used to update chambres.
     */
    data: XOR<chambreUpdateManyMutationInput, chambreUncheckedUpdateManyInput>
    /**
     * Filter which chambres to update
     */
    where?: chambreWhereInput
    /**
     * Limit how many chambres to update.
     */
    limit?: number
  }

  /**
   * chambre upsert
   */
  export type chambreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
    /**
     * The filter to search for the chambre to update in case it exists.
     */
    where: chambreWhereUniqueInput
    /**
     * In case the chambre found by the `where` argument doesn't exist, create a new chambre with this data.
     */
    create: XOR<chambreCreateInput, chambreUncheckedCreateInput>
    /**
     * In case the chambre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chambreUpdateInput, chambreUncheckedUpdateInput>
  }

  /**
   * chambre delete
   */
  export type chambreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
    /**
     * Filter which chambre to delete.
     */
    where: chambreWhereUniqueInput
  }

  /**
   * chambre deleteMany
   */
  export type chambreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chambres to delete
     */
    where?: chambreWhereInput
    /**
     * Limit how many chambres to delete.
     */
    limit?: number
  }

  /**
   * chambre.reservations
   */
  export type chambre$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    where?: reservationWhereInput
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    cursor?: reservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * chambre without action
   */
  export type chambreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chambre
     */
    select?: chambreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chambre
     */
    omit?: chambreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chambreInclude<ExtArgs> | null
  }


  /**
   * Model reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id_reservation: number | null
    id_chambre: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id_reservation: number | null
    id_chambre: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id_reservation: number | null
    nom_client: string | null
    prenom_client: string | null
    telephone1: string | null
    telephone2: string | null
    email: string | null
    date_arrivee: Date | null
    date_depart: Date | null
    date_reservation: Date | null
    prix_total: string | null
    status: $Enums.Status | null
    id_chambre: number | null
  }

  export type ReservationMaxAggregateOutputType = {
    id_reservation: number | null
    nom_client: string | null
    prenom_client: string | null
    telephone1: string | null
    telephone2: string | null
    email: string | null
    date_arrivee: Date | null
    date_depart: Date | null
    date_reservation: Date | null
    prix_total: string | null
    status: $Enums.Status | null
    id_chambre: number | null
  }

  export type ReservationCountAggregateOutputType = {
    id_reservation: number
    nom_client: number
    prenom_client: number
    telephone1: number
    telephone2: number
    email: number
    date_arrivee: number
    date_depart: number
    date_reservation: number
    prix_total: number
    status: number
    id_chambre: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id_reservation?: true
    id_chambre?: true
  }

  export type ReservationSumAggregateInputType = {
    id_reservation?: true
    id_chambre?: true
  }

  export type ReservationMinAggregateInputType = {
    id_reservation?: true
    nom_client?: true
    prenom_client?: true
    telephone1?: true
    telephone2?: true
    email?: true
    date_arrivee?: true
    date_depart?: true
    date_reservation?: true
    prix_total?: true
    status?: true
    id_chambre?: true
  }

  export type ReservationMaxAggregateInputType = {
    id_reservation?: true
    nom_client?: true
    prenom_client?: true
    telephone1?: true
    telephone2?: true
    email?: true
    date_arrivee?: true
    date_depart?: true
    date_reservation?: true
    prix_total?: true
    status?: true
    id_chambre?: true
  }

  export type ReservationCountAggregateInputType = {
    id_reservation?: true
    nom_client?: true
    prenom_client?: true
    telephone1?: true
    telephone2?: true
    email?: true
    date_arrivee?: true
    date_depart?: true
    date_reservation?: true
    prix_total?: true
    status?: true
    id_chambre?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservation to aggregate.
     */
    where?: reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type reservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationWhereInput
    orderBy?: reservationOrderByWithAggregationInput | reservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: reservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id_reservation: number
    nom_client: string
    prenom_client: string
    telephone1: string
    telephone2: string | null
    email: string
    date_arrivee: Date
    date_depart: Date
    date_reservation: Date
    prix_total: string
    status: $Enums.Status
    id_chambre: number
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends reservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type reservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reservation?: boolean
    nom_client?: boolean
    prenom_client?: boolean
    telephone1?: boolean
    telephone2?: boolean
    email?: boolean
    date_arrivee?: boolean
    date_depart?: boolean
    date_reservation?: boolean
    prix_total?: boolean
    status?: boolean
    id_chambre?: boolean
    chambre?: boolean | chambreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type reservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reservation?: boolean
    nom_client?: boolean
    prenom_client?: boolean
    telephone1?: boolean
    telephone2?: boolean
    email?: boolean
    date_arrivee?: boolean
    date_depart?: boolean
    date_reservation?: boolean
    prix_total?: boolean
    status?: boolean
    id_chambre?: boolean
    chambre?: boolean | chambreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type reservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reservation?: boolean
    nom_client?: boolean
    prenom_client?: boolean
    telephone1?: boolean
    telephone2?: boolean
    email?: boolean
    date_arrivee?: boolean
    date_depart?: boolean
    date_reservation?: boolean
    prix_total?: boolean
    status?: boolean
    id_chambre?: boolean
    chambre?: boolean | chambreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type reservationSelectScalar = {
    id_reservation?: boolean
    nom_client?: boolean
    prenom_client?: boolean
    telephone1?: boolean
    telephone2?: boolean
    email?: boolean
    date_arrivee?: boolean
    date_depart?: boolean
    date_reservation?: boolean
    prix_total?: boolean
    status?: boolean
    id_chambre?: boolean
  }

  export type reservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reservation" | "nom_client" | "prenom_client" | "telephone1" | "telephone2" | "email" | "date_arrivee" | "date_depart" | "date_reservation" | "prix_total" | "status" | "id_chambre", ExtArgs["result"]["reservation"]>
  export type reservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chambre?: boolean | chambreDefaultArgs<ExtArgs>
  }
  export type reservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chambre?: boolean | chambreDefaultArgs<ExtArgs>
  }
  export type reservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chambre?: boolean | chambreDefaultArgs<ExtArgs>
  }

  export type $reservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservation"
    objects: {
      chambre: Prisma.$chambrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reservation: number
      nom_client: string
      prenom_client: string
      telephone1: string
      telephone2: string | null
      email: string
      date_arrivee: Date
      date_depart: Date
      date_reservation: Date
      prix_total: string
      status: $Enums.Status
      id_chambre: number
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type reservationGetPayload<S extends boolean | null | undefined | reservationDefaultArgs> = $Result.GetResult<Prisma.$reservationPayload, S>

  type reservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface reservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservation'], meta: { name: 'reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {reservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservationFindUniqueArgs>(args: SelectSubset<T, reservationFindUniqueArgs<ExtArgs>>): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservationFindUniqueOrThrowArgs>(args: SelectSubset<T, reservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservationFindFirstArgs>(args?: SelectSubset<T, reservationFindFirstArgs<ExtArgs>>): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservationFindFirstOrThrowArgs>(args?: SelectSubset<T, reservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id_reservation`
     * const reservationWithId_reservationOnly = await prisma.reservation.findMany({ select: { id_reservation: true } })
     * 
     */
    findMany<T extends reservationFindManyArgs>(args?: SelectSubset<T, reservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {reservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends reservationCreateArgs>(args: SelectSubset<T, reservationCreateArgs<ExtArgs>>): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {reservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservationCreateManyArgs>(args?: SelectSubset<T, reservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {reservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id_reservation`
     * const reservationWithId_reservationOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id_reservation: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reservationCreateManyAndReturnArgs>(args?: SelectSubset<T, reservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {reservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends reservationDeleteArgs>(args: SelectSubset<T, reservationDeleteArgs<ExtArgs>>): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {reservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservationUpdateArgs>(args: SelectSubset<T, reservationUpdateArgs<ExtArgs>>): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {reservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservationDeleteManyArgs>(args?: SelectSubset<T, reservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservationUpdateManyArgs>(args: SelectSubset<T, reservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {reservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id_reservation`
     * const reservationWithId_reservationOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id_reservation: true },
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
    updateManyAndReturn<T extends reservationUpdateManyAndReturnArgs>(args: SelectSubset<T, reservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {reservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends reservationUpsertArgs>(args: SelectSubset<T, reservationUpsertArgs<ExtArgs>>): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends reservationCountArgs>(
      args?: Subset<T, reservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationGroupByArgs} args - Group by arguments.
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
      T extends reservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservationGroupByArgs['orderBy'] }
        : { orderBy?: reservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservation model
   */
  readonly fields: reservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chambre<T extends chambreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chambreDefaultArgs<ExtArgs>>): Prisma__chambreClient<$Result.GetResult<Prisma.$chambrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reservation model
   */
  interface reservationFieldRefs {
    readonly id_reservation: FieldRef<"reservation", 'Int'>
    readonly nom_client: FieldRef<"reservation", 'String'>
    readonly prenom_client: FieldRef<"reservation", 'String'>
    readonly telephone1: FieldRef<"reservation", 'String'>
    readonly telephone2: FieldRef<"reservation", 'String'>
    readonly email: FieldRef<"reservation", 'String'>
    readonly date_arrivee: FieldRef<"reservation", 'DateTime'>
    readonly date_depart: FieldRef<"reservation", 'DateTime'>
    readonly date_reservation: FieldRef<"reservation", 'DateTime'>
    readonly prix_total: FieldRef<"reservation", 'String'>
    readonly status: FieldRef<"reservation", 'Status'>
    readonly id_chambre: FieldRef<"reservation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * reservation findUnique
   */
  export type reservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservation to fetch.
     */
    where: reservationWhereUniqueInput
  }

  /**
   * reservation findUniqueOrThrow
   */
  export type reservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservation to fetch.
     */
    where: reservationWhereUniqueInput
  }

  /**
   * reservation findFirst
   */
  export type reservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservation to fetch.
     */
    where?: reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservations.
     */
    cursor?: reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * reservation findFirstOrThrow
   */
  export type reservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservation to fetch.
     */
    where?: reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservations.
     */
    cursor?: reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * reservation findMany
   */
  export type reservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where?: reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservations.
     */
    cursor?: reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * reservation create
   */
  export type reservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * The data needed to create a reservation.
     */
    data: XOR<reservationCreateInput, reservationUncheckedCreateInput>
  }

  /**
   * reservation createMany
   */
  export type reservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservations.
     */
    data: reservationCreateManyInput | reservationCreateManyInput[]
  }

  /**
   * reservation createManyAndReturn
   */
  export type reservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * The data used to create many reservations.
     */
    data: reservationCreateManyInput | reservationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservation update
   */
  export type reservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * The data needed to update a reservation.
     */
    data: XOR<reservationUpdateInput, reservationUncheckedUpdateInput>
    /**
     * Choose, which reservation to update.
     */
    where: reservationWhereUniqueInput
  }

  /**
   * reservation updateMany
   */
  export type reservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservations.
     */
    data: XOR<reservationUpdateManyMutationInput, reservationUncheckedUpdateManyInput>
    /**
     * Filter which reservations to update
     */
    where?: reservationWhereInput
    /**
     * Limit how many reservations to update.
     */
    limit?: number
  }

  /**
   * reservation updateManyAndReturn
   */
  export type reservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * The data used to update reservations.
     */
    data: XOR<reservationUpdateManyMutationInput, reservationUncheckedUpdateManyInput>
    /**
     * Filter which reservations to update
     */
    where?: reservationWhereInput
    /**
     * Limit how many reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservation upsert
   */
  export type reservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * The filter to search for the reservation to update in case it exists.
     */
    where: reservationWhereUniqueInput
    /**
     * In case the reservation found by the `where` argument doesn't exist, create a new reservation with this data.
     */
    create: XOR<reservationCreateInput, reservationUncheckedCreateInput>
    /**
     * In case the reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservationUpdateInput, reservationUncheckedUpdateInput>
  }

  /**
   * reservation delete
   */
  export type reservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter which reservation to delete.
     */
    where: reservationWhereUniqueInput
  }

  /**
   * reservation deleteMany
   */
  export type reservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservations to delete
     */
    where?: reservationWhereInput
    /**
     * Limit how many reservations to delete.
     */
    limit?: number
  }

  /**
   * reservation without action
   */
  export type reservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservation
     */
    omit?: reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
  }


  /**
   * Model utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id_utilisateur: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id_utilisateur: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id_utilisateur: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id_utilisateur: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id_utilisateur: number
    nom: number
    prenom: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id_utilisateur?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id_utilisateur?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id_utilisateur?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id_utilisateur?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id_utilisateur?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateur to aggregate.
     */
    where?: utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateurOrderByWithRelationInput | utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type utilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateurWhereInput
    orderBy?: utilisateurOrderByWithAggregationInput | utilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: utilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id_utilisateur: number
    nom: string
    prenom: string
    email: string
    password: string
    role: $Enums.Role
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends utilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type utilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_utilisateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type utilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_utilisateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type utilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_utilisateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type utilisateurSelectScalar = {
    id_utilisateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type utilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_utilisateur" | "nom" | "prenom" | "email" | "password" | "role", ExtArgs["result"]["utilisateur"]>

  export type $utilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "utilisateur"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_utilisateur: number
      nom: string
      prenom: string
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type utilisateurGetPayload<S extends boolean | null | undefined | utilisateurDefaultArgs> = $Result.GetResult<Prisma.$utilisateurPayload, S>

  type utilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<utilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface utilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['utilisateur'], meta: { name: 'utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {utilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends utilisateurFindUniqueArgs>(args: SelectSubset<T, utilisateurFindUniqueArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {utilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends utilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, utilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends utilisateurFindFirstArgs>(args?: SelectSubset<T, utilisateurFindFirstArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends utilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, utilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id_utilisateur`
     * const utilisateurWithId_utilisateurOnly = await prisma.utilisateur.findMany({ select: { id_utilisateur: true } })
     * 
     */
    findMany<T extends utilisateurFindManyArgs>(args?: SelectSubset<T, utilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {utilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends utilisateurCreateArgs>(args: SelectSubset<T, utilisateurCreateArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {utilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends utilisateurCreateManyArgs>(args?: SelectSubset<T, utilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {utilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id_utilisateur`
     * const utilisateurWithId_utilisateurOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id_utilisateur: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends utilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, utilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {utilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends utilisateurDeleteArgs>(args: SelectSubset<T, utilisateurDeleteArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {utilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends utilisateurUpdateArgs>(args: SelectSubset<T, utilisateurUpdateArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {utilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends utilisateurDeleteManyArgs>(args?: SelectSubset<T, utilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends utilisateurUpdateManyArgs>(args: SelectSubset<T, utilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {utilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id_utilisateur`
     * const utilisateurWithId_utilisateurOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id_utilisateur: true },
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
    updateManyAndReturn<T extends utilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, utilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {utilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends utilisateurUpsertArgs>(args: SelectSubset<T, utilisateurUpsertArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends utilisateurCountArgs>(
      args?: Subset<T, utilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurGroupByArgs} args - Group by arguments.
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
      T extends utilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: utilisateurGroupByArgs['orderBy'] }
        : { orderBy?: utilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, utilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the utilisateur model
   */
  readonly fields: utilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__utilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the utilisateur model
   */
  interface utilisateurFieldRefs {
    readonly id_utilisateur: FieldRef<"utilisateur", 'Int'>
    readonly nom: FieldRef<"utilisateur", 'String'>
    readonly prenom: FieldRef<"utilisateur", 'String'>
    readonly email: FieldRef<"utilisateur", 'String'>
    readonly password: FieldRef<"utilisateur", 'String'>
    readonly role: FieldRef<"utilisateur", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * utilisateur findUnique
   */
  export type utilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Filter, which utilisateur to fetch.
     */
    where: utilisateurWhereUniqueInput
  }

  /**
   * utilisateur findUniqueOrThrow
   */
  export type utilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Filter, which utilisateur to fetch.
     */
    where: utilisateurWhereUniqueInput
  }

  /**
   * utilisateur findFirst
   */
  export type utilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Filter, which utilisateur to fetch.
     */
    where?: utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateurOrderByWithRelationInput | utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateurs.
     */
    cursor?: utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * utilisateur findFirstOrThrow
   */
  export type utilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Filter, which utilisateur to fetch.
     */
    where?: utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateurOrderByWithRelationInput | utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateurs.
     */
    cursor?: utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * utilisateur findMany
   */
  export type utilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where?: utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateurOrderByWithRelationInput | utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing utilisateurs.
     */
    cursor?: utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * utilisateur create
   */
  export type utilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * The data needed to create a utilisateur.
     */
    data: XOR<utilisateurCreateInput, utilisateurUncheckedCreateInput>
  }

  /**
   * utilisateur createMany
   */
  export type utilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many utilisateurs.
     */
    data: utilisateurCreateManyInput | utilisateurCreateManyInput[]
  }

  /**
   * utilisateur createManyAndReturn
   */
  export type utilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many utilisateurs.
     */
    data: utilisateurCreateManyInput | utilisateurCreateManyInput[]
  }

  /**
   * utilisateur update
   */
  export type utilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * The data needed to update a utilisateur.
     */
    data: XOR<utilisateurUpdateInput, utilisateurUncheckedUpdateInput>
    /**
     * Choose, which utilisateur to update.
     */
    where: utilisateurWhereUniqueInput
  }

  /**
   * utilisateur updateMany
   */
  export type utilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update utilisateurs.
     */
    data: XOR<utilisateurUpdateManyMutationInput, utilisateurUncheckedUpdateManyInput>
    /**
     * Filter which utilisateurs to update
     */
    where?: utilisateurWhereInput
    /**
     * Limit how many utilisateurs to update.
     */
    limit?: number
  }

  /**
   * utilisateur updateManyAndReturn
   */
  export type utilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * The data used to update utilisateurs.
     */
    data: XOR<utilisateurUpdateManyMutationInput, utilisateurUncheckedUpdateManyInput>
    /**
     * Filter which utilisateurs to update
     */
    where?: utilisateurWhereInput
    /**
     * Limit how many utilisateurs to update.
     */
    limit?: number
  }

  /**
   * utilisateur upsert
   */
  export type utilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * The filter to search for the utilisateur to update in case it exists.
     */
    where: utilisateurWhereUniqueInput
    /**
     * In case the utilisateur found by the `where` argument doesn't exist, create a new utilisateur with this data.
     */
    create: XOR<utilisateurCreateInput, utilisateurUncheckedCreateInput>
    /**
     * In case the utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<utilisateurUpdateInput, utilisateurUncheckedUpdateInput>
  }

  /**
   * utilisateur delete
   */
  export type utilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Filter which utilisateur to delete.
     */
    where: utilisateurWhereUniqueInput
  }

  /**
   * utilisateur deleteMany
   */
  export type utilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateurs to delete
     */
    where?: utilisateurWhereInput
    /**
     * Limit how many utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * utilisateur without action
   */
  export type utilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChambreScalarFieldEnum: {
    id_chambre: 'id_chambre',
    numero_chambre: 'numero_chambre',
    prix_nuit: 'prix_nuit',
    prix_jour: 'prix_jour',
    type: 'type',
    capacite: 'capacite',
    photo: 'photo'
  };

  export type ChambreScalarFieldEnum = (typeof ChambreScalarFieldEnum)[keyof typeof ChambreScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id_reservation: 'id_reservation',
    nom_client: 'nom_client',
    prenom_client: 'prenom_client',
    telephone1: 'telephone1',
    telephone2: 'telephone2',
    email: 'email',
    date_arrivee: 'date_arrivee',
    date_depart: 'date_depart',
    date_reservation: 'date_reservation',
    prix_total: 'prix_total',
    status: 'status',
    id_chambre: 'id_chambre'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const UtilisateurScalarFieldEnum: {
    id_utilisateur: 'id_utilisateur',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type chambreWhereInput = {
    AND?: chambreWhereInput | chambreWhereInput[]
    OR?: chambreWhereInput[]
    NOT?: chambreWhereInput | chambreWhereInput[]
    id_chambre?: IntFilter<"chambre"> | number
    numero_chambre?: IntFilter<"chambre"> | number
    prix_nuit?: IntFilter<"chambre"> | number
    prix_jour?: IntFilter<"chambre"> | number
    type?: StringFilter<"chambre"> | string
    capacite?: StringFilter<"chambre"> | string
    photo?: StringNullableFilter<"chambre"> | string | null
    reservations?: ReservationListRelationFilter
  }

  export type chambreOrderByWithRelationInput = {
    id_chambre?: SortOrder
    numero_chambre?: SortOrder
    prix_nuit?: SortOrder
    prix_jour?: SortOrder
    type?: SortOrder
    capacite?: SortOrder
    photo?: SortOrderInput | SortOrder
    reservations?: reservationOrderByRelationAggregateInput
  }

  export type chambreWhereUniqueInput = Prisma.AtLeast<{
    id_chambre?: number
    AND?: chambreWhereInput | chambreWhereInput[]
    OR?: chambreWhereInput[]
    NOT?: chambreWhereInput | chambreWhereInput[]
    numero_chambre?: IntFilter<"chambre"> | number
    prix_nuit?: IntFilter<"chambre"> | number
    prix_jour?: IntFilter<"chambre"> | number
    type?: StringFilter<"chambre"> | string
    capacite?: StringFilter<"chambre"> | string
    photo?: StringNullableFilter<"chambre"> | string | null
    reservations?: ReservationListRelationFilter
  }, "id_chambre">

  export type chambreOrderByWithAggregationInput = {
    id_chambre?: SortOrder
    numero_chambre?: SortOrder
    prix_nuit?: SortOrder
    prix_jour?: SortOrder
    type?: SortOrder
    capacite?: SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: chambreCountOrderByAggregateInput
    _avg?: chambreAvgOrderByAggregateInput
    _max?: chambreMaxOrderByAggregateInput
    _min?: chambreMinOrderByAggregateInput
    _sum?: chambreSumOrderByAggregateInput
  }

  export type chambreScalarWhereWithAggregatesInput = {
    AND?: chambreScalarWhereWithAggregatesInput | chambreScalarWhereWithAggregatesInput[]
    OR?: chambreScalarWhereWithAggregatesInput[]
    NOT?: chambreScalarWhereWithAggregatesInput | chambreScalarWhereWithAggregatesInput[]
    id_chambre?: IntWithAggregatesFilter<"chambre"> | number
    numero_chambre?: IntWithAggregatesFilter<"chambre"> | number
    prix_nuit?: IntWithAggregatesFilter<"chambre"> | number
    prix_jour?: IntWithAggregatesFilter<"chambre"> | number
    type?: StringWithAggregatesFilter<"chambre"> | string
    capacite?: StringWithAggregatesFilter<"chambre"> | string
    photo?: StringNullableWithAggregatesFilter<"chambre"> | string | null
  }

  export type reservationWhereInput = {
    AND?: reservationWhereInput | reservationWhereInput[]
    OR?: reservationWhereInput[]
    NOT?: reservationWhereInput | reservationWhereInput[]
    id_reservation?: IntFilter<"reservation"> | number
    nom_client?: StringFilter<"reservation"> | string
    prenom_client?: StringFilter<"reservation"> | string
    telephone1?: StringFilter<"reservation"> | string
    telephone2?: StringNullableFilter<"reservation"> | string | null
    email?: StringFilter<"reservation"> | string
    date_arrivee?: DateTimeFilter<"reservation"> | Date | string
    date_depart?: DateTimeFilter<"reservation"> | Date | string
    date_reservation?: DateTimeFilter<"reservation"> | Date | string
    prix_total?: StringFilter<"reservation"> | string
    status?: EnumStatusFilter<"reservation"> | $Enums.Status
    id_chambre?: IntFilter<"reservation"> | number
    chambre?: XOR<ChambreScalarRelationFilter, chambreWhereInput>
  }

  export type reservationOrderByWithRelationInput = {
    id_reservation?: SortOrder
    nom_client?: SortOrder
    prenom_client?: SortOrder
    telephone1?: SortOrder
    telephone2?: SortOrderInput | SortOrder
    email?: SortOrder
    date_arrivee?: SortOrder
    date_depart?: SortOrder
    date_reservation?: SortOrder
    prix_total?: SortOrder
    status?: SortOrder
    id_chambre?: SortOrder
    chambre?: chambreOrderByWithRelationInput
  }

  export type reservationWhereUniqueInput = Prisma.AtLeast<{
    id_reservation?: number
    AND?: reservationWhereInput | reservationWhereInput[]
    OR?: reservationWhereInput[]
    NOT?: reservationWhereInput | reservationWhereInput[]
    nom_client?: StringFilter<"reservation"> | string
    prenom_client?: StringFilter<"reservation"> | string
    telephone1?: StringFilter<"reservation"> | string
    telephone2?: StringNullableFilter<"reservation"> | string | null
    email?: StringFilter<"reservation"> | string
    date_arrivee?: DateTimeFilter<"reservation"> | Date | string
    date_depart?: DateTimeFilter<"reservation"> | Date | string
    date_reservation?: DateTimeFilter<"reservation"> | Date | string
    prix_total?: StringFilter<"reservation"> | string
    status?: EnumStatusFilter<"reservation"> | $Enums.Status
    id_chambre?: IntFilter<"reservation"> | number
    chambre?: XOR<ChambreScalarRelationFilter, chambreWhereInput>
  }, "id_reservation">

  export type reservationOrderByWithAggregationInput = {
    id_reservation?: SortOrder
    nom_client?: SortOrder
    prenom_client?: SortOrder
    telephone1?: SortOrder
    telephone2?: SortOrderInput | SortOrder
    email?: SortOrder
    date_arrivee?: SortOrder
    date_depart?: SortOrder
    date_reservation?: SortOrder
    prix_total?: SortOrder
    status?: SortOrder
    id_chambre?: SortOrder
    _count?: reservationCountOrderByAggregateInput
    _avg?: reservationAvgOrderByAggregateInput
    _max?: reservationMaxOrderByAggregateInput
    _min?: reservationMinOrderByAggregateInput
    _sum?: reservationSumOrderByAggregateInput
  }

  export type reservationScalarWhereWithAggregatesInput = {
    AND?: reservationScalarWhereWithAggregatesInput | reservationScalarWhereWithAggregatesInput[]
    OR?: reservationScalarWhereWithAggregatesInput[]
    NOT?: reservationScalarWhereWithAggregatesInput | reservationScalarWhereWithAggregatesInput[]
    id_reservation?: IntWithAggregatesFilter<"reservation"> | number
    nom_client?: StringWithAggregatesFilter<"reservation"> | string
    prenom_client?: StringWithAggregatesFilter<"reservation"> | string
    telephone1?: StringWithAggregatesFilter<"reservation"> | string
    telephone2?: StringNullableWithAggregatesFilter<"reservation"> | string | null
    email?: StringWithAggregatesFilter<"reservation"> | string
    date_arrivee?: DateTimeWithAggregatesFilter<"reservation"> | Date | string
    date_depart?: DateTimeWithAggregatesFilter<"reservation"> | Date | string
    date_reservation?: DateTimeWithAggregatesFilter<"reservation"> | Date | string
    prix_total?: StringWithAggregatesFilter<"reservation"> | string
    status?: EnumStatusWithAggregatesFilter<"reservation"> | $Enums.Status
    id_chambre?: IntWithAggregatesFilter<"reservation"> | number
  }

  export type utilisateurWhereInput = {
    AND?: utilisateurWhereInput | utilisateurWhereInput[]
    OR?: utilisateurWhereInput[]
    NOT?: utilisateurWhereInput | utilisateurWhereInput[]
    id_utilisateur?: IntFilter<"utilisateur"> | number
    nom?: StringFilter<"utilisateur"> | string
    prenom?: StringFilter<"utilisateur"> | string
    email?: StringFilter<"utilisateur"> | string
    password?: StringFilter<"utilisateur"> | string
    role?: EnumRoleFilter<"utilisateur"> | $Enums.Role
  }

  export type utilisateurOrderByWithRelationInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type utilisateurWhereUniqueInput = Prisma.AtLeast<{
    id_utilisateur?: number
    email?: string
    AND?: utilisateurWhereInput | utilisateurWhereInput[]
    OR?: utilisateurWhereInput[]
    NOT?: utilisateurWhereInput | utilisateurWhereInput[]
    nom?: StringFilter<"utilisateur"> | string
    prenom?: StringFilter<"utilisateur"> | string
    password?: StringFilter<"utilisateur"> | string
    role?: EnumRoleFilter<"utilisateur"> | $Enums.Role
  }, "id_utilisateur" | "email">

  export type utilisateurOrderByWithAggregationInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: utilisateurCountOrderByAggregateInput
    _avg?: utilisateurAvgOrderByAggregateInput
    _max?: utilisateurMaxOrderByAggregateInput
    _min?: utilisateurMinOrderByAggregateInput
    _sum?: utilisateurSumOrderByAggregateInput
  }

  export type utilisateurScalarWhereWithAggregatesInput = {
    AND?: utilisateurScalarWhereWithAggregatesInput | utilisateurScalarWhereWithAggregatesInput[]
    OR?: utilisateurScalarWhereWithAggregatesInput[]
    NOT?: utilisateurScalarWhereWithAggregatesInput | utilisateurScalarWhereWithAggregatesInput[]
    id_utilisateur?: IntWithAggregatesFilter<"utilisateur"> | number
    nom?: StringWithAggregatesFilter<"utilisateur"> | string
    prenom?: StringWithAggregatesFilter<"utilisateur"> | string
    email?: StringWithAggregatesFilter<"utilisateur"> | string
    password?: StringWithAggregatesFilter<"utilisateur"> | string
    role?: EnumRoleWithAggregatesFilter<"utilisateur"> | $Enums.Role
  }

  export type chambreCreateInput = {
    numero_chambre: number
    prix_nuit: number
    prix_jour: number
    type: string
    capacite: string
    photo?: string | null
    reservations?: reservationCreateNestedManyWithoutChambreInput
  }

  export type chambreUncheckedCreateInput = {
    id_chambre?: number
    numero_chambre: number
    prix_nuit: number
    prix_jour: number
    type: string
    capacite: string
    photo?: string | null
    reservations?: reservationUncheckedCreateNestedManyWithoutChambreInput
  }

  export type chambreUpdateInput = {
    numero_chambre?: IntFieldUpdateOperationsInput | number
    prix_nuit?: IntFieldUpdateOperationsInput | number
    prix_jour?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    capacite?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: reservationUpdateManyWithoutChambreNestedInput
  }

  export type chambreUncheckedUpdateInput = {
    id_chambre?: IntFieldUpdateOperationsInput | number
    numero_chambre?: IntFieldUpdateOperationsInput | number
    prix_nuit?: IntFieldUpdateOperationsInput | number
    prix_jour?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    capacite?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: reservationUncheckedUpdateManyWithoutChambreNestedInput
  }

  export type chambreCreateManyInput = {
    id_chambre?: number
    numero_chambre: number
    prix_nuit: number
    prix_jour: number
    type: string
    capacite: string
    photo?: string | null
  }

  export type chambreUpdateManyMutationInput = {
    numero_chambre?: IntFieldUpdateOperationsInput | number
    prix_nuit?: IntFieldUpdateOperationsInput | number
    prix_jour?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    capacite?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type chambreUncheckedUpdateManyInput = {
    id_chambre?: IntFieldUpdateOperationsInput | number
    numero_chambre?: IntFieldUpdateOperationsInput | number
    prix_nuit?: IntFieldUpdateOperationsInput | number
    prix_jour?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    capacite?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reservationCreateInput = {
    nom_client: string
    prenom_client: string
    telephone1: string
    telephone2?: string | null
    email: string
    date_arrivee: Date | string
    date_depart: Date | string
    date_reservation: Date | string
    prix_total: string
    status?: $Enums.Status
    chambre: chambreCreateNestedOneWithoutReservationsInput
  }

  export type reservationUncheckedCreateInput = {
    id_reservation?: number
    nom_client: string
    prenom_client: string
    telephone1: string
    telephone2?: string | null
    email: string
    date_arrivee: Date | string
    date_depart: Date | string
    date_reservation: Date | string
    prix_total: string
    status?: $Enums.Status
    id_chambre: number
  }

  export type reservationUpdateInput = {
    nom_client?: StringFieldUpdateOperationsInput | string
    prenom_client?: StringFieldUpdateOperationsInput | string
    telephone1?: StringFieldUpdateOperationsInput | string
    telephone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    date_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    date_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    chambre?: chambreUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type reservationUncheckedUpdateInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    nom_client?: StringFieldUpdateOperationsInput | string
    prenom_client?: StringFieldUpdateOperationsInput | string
    telephone1?: StringFieldUpdateOperationsInput | string
    telephone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    date_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    date_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    id_chambre?: IntFieldUpdateOperationsInput | number
  }

  export type reservationCreateManyInput = {
    id_reservation?: number
    nom_client: string
    prenom_client: string
    telephone1: string
    telephone2?: string | null
    email: string
    date_arrivee: Date | string
    date_depart: Date | string
    date_reservation: Date | string
    prix_total: string
    status?: $Enums.Status
    id_chambre: number
  }

  export type reservationUpdateManyMutationInput = {
    nom_client?: StringFieldUpdateOperationsInput | string
    prenom_client?: StringFieldUpdateOperationsInput | string
    telephone1?: StringFieldUpdateOperationsInput | string
    telephone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    date_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    date_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type reservationUncheckedUpdateManyInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    nom_client?: StringFieldUpdateOperationsInput | string
    prenom_client?: StringFieldUpdateOperationsInput | string
    telephone1?: StringFieldUpdateOperationsInput | string
    telephone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    date_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    date_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    id_chambre?: IntFieldUpdateOperationsInput | number
  }

  export type utilisateurCreateInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type utilisateurUncheckedCreateInput = {
    id_utilisateur?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type utilisateurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type utilisateurUncheckedUpdateInput = {
    id_utilisateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type utilisateurCreateManyInput = {
    id_utilisateur?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type utilisateurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type utilisateurUncheckedUpdateManyInput = {
    id_utilisateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ReservationListRelationFilter = {
    every?: reservationWhereInput
    some?: reservationWhereInput
    none?: reservationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chambreCountOrderByAggregateInput = {
    id_chambre?: SortOrder
    numero_chambre?: SortOrder
    prix_nuit?: SortOrder
    prix_jour?: SortOrder
    type?: SortOrder
    capacite?: SortOrder
    photo?: SortOrder
  }

  export type chambreAvgOrderByAggregateInput = {
    id_chambre?: SortOrder
    numero_chambre?: SortOrder
    prix_nuit?: SortOrder
    prix_jour?: SortOrder
  }

  export type chambreMaxOrderByAggregateInput = {
    id_chambre?: SortOrder
    numero_chambre?: SortOrder
    prix_nuit?: SortOrder
    prix_jour?: SortOrder
    type?: SortOrder
    capacite?: SortOrder
    photo?: SortOrder
  }

  export type chambreMinOrderByAggregateInput = {
    id_chambre?: SortOrder
    numero_chambre?: SortOrder
    prix_nuit?: SortOrder
    prix_jour?: SortOrder
    type?: SortOrder
    capacite?: SortOrder
    photo?: SortOrder
  }

  export type chambreSumOrderByAggregateInput = {
    id_chambre?: SortOrder
    numero_chambre?: SortOrder
    prix_nuit?: SortOrder
    prix_jour?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ChambreScalarRelationFilter = {
    is?: chambreWhereInput
    isNot?: chambreWhereInput
  }

  export type reservationCountOrderByAggregateInput = {
    id_reservation?: SortOrder
    nom_client?: SortOrder
    prenom_client?: SortOrder
    telephone1?: SortOrder
    telephone2?: SortOrder
    email?: SortOrder
    date_arrivee?: SortOrder
    date_depart?: SortOrder
    date_reservation?: SortOrder
    prix_total?: SortOrder
    status?: SortOrder
    id_chambre?: SortOrder
  }

  export type reservationAvgOrderByAggregateInput = {
    id_reservation?: SortOrder
    id_chambre?: SortOrder
  }

  export type reservationMaxOrderByAggregateInput = {
    id_reservation?: SortOrder
    nom_client?: SortOrder
    prenom_client?: SortOrder
    telephone1?: SortOrder
    telephone2?: SortOrder
    email?: SortOrder
    date_arrivee?: SortOrder
    date_depart?: SortOrder
    date_reservation?: SortOrder
    prix_total?: SortOrder
    status?: SortOrder
    id_chambre?: SortOrder
  }

  export type reservationMinOrderByAggregateInput = {
    id_reservation?: SortOrder
    nom_client?: SortOrder
    prenom_client?: SortOrder
    telephone1?: SortOrder
    telephone2?: SortOrder
    email?: SortOrder
    date_arrivee?: SortOrder
    date_depart?: SortOrder
    date_reservation?: SortOrder
    prix_total?: SortOrder
    status?: SortOrder
    id_chambre?: SortOrder
  }

  export type reservationSumOrderByAggregateInput = {
    id_reservation?: SortOrder
    id_chambre?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type utilisateurCountOrderByAggregateInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type utilisateurAvgOrderByAggregateInput = {
    id_utilisateur?: SortOrder
  }

  export type utilisateurMaxOrderByAggregateInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type utilisateurMinOrderByAggregateInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type utilisateurSumOrderByAggregateInput = {
    id_utilisateur?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type reservationCreateNestedManyWithoutChambreInput = {
    create?: XOR<reservationCreateWithoutChambreInput, reservationUncheckedCreateWithoutChambreInput> | reservationCreateWithoutChambreInput[] | reservationUncheckedCreateWithoutChambreInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutChambreInput | reservationCreateOrConnectWithoutChambreInput[]
    createMany?: reservationCreateManyChambreInputEnvelope
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
  }

  export type reservationUncheckedCreateNestedManyWithoutChambreInput = {
    create?: XOR<reservationCreateWithoutChambreInput, reservationUncheckedCreateWithoutChambreInput> | reservationCreateWithoutChambreInput[] | reservationUncheckedCreateWithoutChambreInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutChambreInput | reservationCreateOrConnectWithoutChambreInput[]
    createMany?: reservationCreateManyChambreInputEnvelope
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type reservationUpdateManyWithoutChambreNestedInput = {
    create?: XOR<reservationCreateWithoutChambreInput, reservationUncheckedCreateWithoutChambreInput> | reservationCreateWithoutChambreInput[] | reservationUncheckedCreateWithoutChambreInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutChambreInput | reservationCreateOrConnectWithoutChambreInput[]
    upsert?: reservationUpsertWithWhereUniqueWithoutChambreInput | reservationUpsertWithWhereUniqueWithoutChambreInput[]
    createMany?: reservationCreateManyChambreInputEnvelope
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    update?: reservationUpdateWithWhereUniqueWithoutChambreInput | reservationUpdateWithWhereUniqueWithoutChambreInput[]
    updateMany?: reservationUpdateManyWithWhereWithoutChambreInput | reservationUpdateManyWithWhereWithoutChambreInput[]
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[]
  }

  export type reservationUncheckedUpdateManyWithoutChambreNestedInput = {
    create?: XOR<reservationCreateWithoutChambreInput, reservationUncheckedCreateWithoutChambreInput> | reservationCreateWithoutChambreInput[] | reservationUncheckedCreateWithoutChambreInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutChambreInput | reservationCreateOrConnectWithoutChambreInput[]
    upsert?: reservationUpsertWithWhereUniqueWithoutChambreInput | reservationUpsertWithWhereUniqueWithoutChambreInput[]
    createMany?: reservationCreateManyChambreInputEnvelope
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    update?: reservationUpdateWithWhereUniqueWithoutChambreInput | reservationUpdateWithWhereUniqueWithoutChambreInput[]
    updateMany?: reservationUpdateManyWithWhereWithoutChambreInput | reservationUpdateManyWithWhereWithoutChambreInput[]
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[]
  }

  export type chambreCreateNestedOneWithoutReservationsInput = {
    create?: XOR<chambreCreateWithoutReservationsInput, chambreUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: chambreCreateOrConnectWithoutReservationsInput
    connect?: chambreWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type chambreUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<chambreCreateWithoutReservationsInput, chambreUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: chambreCreateOrConnectWithoutReservationsInput
    upsert?: chambreUpsertWithoutReservationsInput
    connect?: chambreWhereUniqueInput
    update?: XOR<XOR<chambreUpdateToOneWithWhereWithoutReservationsInput, chambreUpdateWithoutReservationsInput>, chambreUncheckedUpdateWithoutReservationsInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type reservationCreateWithoutChambreInput = {
    nom_client: string
    prenom_client: string
    telephone1: string
    telephone2?: string | null
    email: string
    date_arrivee: Date | string
    date_depart: Date | string
    date_reservation: Date | string
    prix_total: string
    status?: $Enums.Status
  }

  export type reservationUncheckedCreateWithoutChambreInput = {
    id_reservation?: number
    nom_client: string
    prenom_client: string
    telephone1: string
    telephone2?: string | null
    email: string
    date_arrivee: Date | string
    date_depart: Date | string
    date_reservation: Date | string
    prix_total: string
    status?: $Enums.Status
  }

  export type reservationCreateOrConnectWithoutChambreInput = {
    where: reservationWhereUniqueInput
    create: XOR<reservationCreateWithoutChambreInput, reservationUncheckedCreateWithoutChambreInput>
  }

  export type reservationCreateManyChambreInputEnvelope = {
    data: reservationCreateManyChambreInput | reservationCreateManyChambreInput[]
  }

  export type reservationUpsertWithWhereUniqueWithoutChambreInput = {
    where: reservationWhereUniqueInput
    update: XOR<reservationUpdateWithoutChambreInput, reservationUncheckedUpdateWithoutChambreInput>
    create: XOR<reservationCreateWithoutChambreInput, reservationUncheckedCreateWithoutChambreInput>
  }

  export type reservationUpdateWithWhereUniqueWithoutChambreInput = {
    where: reservationWhereUniqueInput
    data: XOR<reservationUpdateWithoutChambreInput, reservationUncheckedUpdateWithoutChambreInput>
  }

  export type reservationUpdateManyWithWhereWithoutChambreInput = {
    where: reservationScalarWhereInput
    data: XOR<reservationUpdateManyMutationInput, reservationUncheckedUpdateManyWithoutChambreInput>
  }

  export type reservationScalarWhereInput = {
    AND?: reservationScalarWhereInput | reservationScalarWhereInput[]
    OR?: reservationScalarWhereInput[]
    NOT?: reservationScalarWhereInput | reservationScalarWhereInput[]
    id_reservation?: IntFilter<"reservation"> | number
    nom_client?: StringFilter<"reservation"> | string
    prenom_client?: StringFilter<"reservation"> | string
    telephone1?: StringFilter<"reservation"> | string
    telephone2?: StringNullableFilter<"reservation"> | string | null
    email?: StringFilter<"reservation"> | string
    date_arrivee?: DateTimeFilter<"reservation"> | Date | string
    date_depart?: DateTimeFilter<"reservation"> | Date | string
    date_reservation?: DateTimeFilter<"reservation"> | Date | string
    prix_total?: StringFilter<"reservation"> | string
    status?: EnumStatusFilter<"reservation"> | $Enums.Status
    id_chambre?: IntFilter<"reservation"> | number
  }

  export type chambreCreateWithoutReservationsInput = {
    numero_chambre: number
    prix_nuit: number
    prix_jour: number
    type: string
    capacite: string
    photo?: string | null
  }

  export type chambreUncheckedCreateWithoutReservationsInput = {
    id_chambre?: number
    numero_chambre: number
    prix_nuit: number
    prix_jour: number
    type: string
    capacite: string
    photo?: string | null
  }

  export type chambreCreateOrConnectWithoutReservationsInput = {
    where: chambreWhereUniqueInput
    create: XOR<chambreCreateWithoutReservationsInput, chambreUncheckedCreateWithoutReservationsInput>
  }

  export type chambreUpsertWithoutReservationsInput = {
    update: XOR<chambreUpdateWithoutReservationsInput, chambreUncheckedUpdateWithoutReservationsInput>
    create: XOR<chambreCreateWithoutReservationsInput, chambreUncheckedCreateWithoutReservationsInput>
    where?: chambreWhereInput
  }

  export type chambreUpdateToOneWithWhereWithoutReservationsInput = {
    where?: chambreWhereInput
    data: XOR<chambreUpdateWithoutReservationsInput, chambreUncheckedUpdateWithoutReservationsInput>
  }

  export type chambreUpdateWithoutReservationsInput = {
    numero_chambre?: IntFieldUpdateOperationsInput | number
    prix_nuit?: IntFieldUpdateOperationsInput | number
    prix_jour?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    capacite?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type chambreUncheckedUpdateWithoutReservationsInput = {
    id_chambre?: IntFieldUpdateOperationsInput | number
    numero_chambre?: IntFieldUpdateOperationsInput | number
    prix_nuit?: IntFieldUpdateOperationsInput | number
    prix_jour?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    capacite?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reservationCreateManyChambreInput = {
    id_reservation?: number
    nom_client: string
    prenom_client: string
    telephone1: string
    telephone2?: string | null
    email: string
    date_arrivee: Date | string
    date_depart: Date | string
    date_reservation: Date | string
    prix_total: string
    status?: $Enums.Status
  }

  export type reservationUpdateWithoutChambreInput = {
    nom_client?: StringFieldUpdateOperationsInput | string
    prenom_client?: StringFieldUpdateOperationsInput | string
    telephone1?: StringFieldUpdateOperationsInput | string
    telephone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    date_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    date_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type reservationUncheckedUpdateWithoutChambreInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    nom_client?: StringFieldUpdateOperationsInput | string
    prenom_client?: StringFieldUpdateOperationsInput | string
    telephone1?: StringFieldUpdateOperationsInput | string
    telephone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    date_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    date_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type reservationUncheckedUpdateManyWithoutChambreInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    nom_client?: StringFieldUpdateOperationsInput | string
    prenom_client?: StringFieldUpdateOperationsInput | string
    telephone1?: StringFieldUpdateOperationsInput | string
    telephone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    date_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    date_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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