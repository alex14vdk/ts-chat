export interface IMessage {
    readonly id: number
    readonly author: string
    type: number
    date: number
    text: string
}

export interface IDialogue {
    readonly id: number
    readonly name: string
    readonly icon: string
}

export interface IOutClickRef {
    (element: HTMLElement | null): void;
}