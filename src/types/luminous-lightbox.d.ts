declare module 'luminous-lightbox' {
    export class Luminous {
        constructor(element: Element, options?: any);
        open(): void;
        close(): void;
        destroy(): void;
    }
}
