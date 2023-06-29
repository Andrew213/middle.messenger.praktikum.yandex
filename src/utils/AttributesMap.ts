export type AttributesMap<T> = Partial<{ [key in keyof T]: T[key] }>;
