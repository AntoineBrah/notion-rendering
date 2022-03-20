interface IAnnotation<T> {
    bold: T;
    code: T;
    color: T;
    italic: T;
    strikethrough: T;
    underline: T;
}
export declare const textDecoration: (annotations: IAnnotation<boolean>, text: HTMLSpanElement) => HTMLSpanElement;
export {};
