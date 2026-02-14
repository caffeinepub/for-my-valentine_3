import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    addTranslations(word: string, translations: Array<string>): Promise<void>;
    addWord(word: string): Promise<void>;
    deleteWord(word: string): Promise<void>;
    getTranslations(): Promise<Array<[string, Array<string>]>>;
}
