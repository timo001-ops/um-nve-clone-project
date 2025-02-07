export declare function isUndefined(item: any): item is null | undefined;
export declare function isDefined<T>(x: T): x is Exclude<T, null | undefined>;
export declare function isNotEmpty(value: string | null | undefined): value is Exclude<string, null | undefined | ''>;
export declare function isNotNull<T>(obj: T): obj is Exclude<T, null>;
export declare function contains(sourceArray: Array<any>, element: any): boolean;
export declare function isEmptyString(value: string | undefined): boolean;
