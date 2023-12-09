/**
 * Builderパターン適用の際に使用
 */
export interface Builer<T> {
    build(): T;
}
