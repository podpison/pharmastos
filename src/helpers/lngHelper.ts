import { RuUaArrayTextType, RuUaTextType } from "../redux/reducers/staticReducer";

//It is certainly the worst part of the whole project 

export const isItRuUaArrayTextType = (item: TextType): item is RuUaArrayTextType => {
  return (item as RuUaArrayTextType).ru?.array !== undefined;
}

export const isItRuUaTextType = (item: RuUaTextType | JSX.Element): item is RuUaTextType => {
  return typeof (item as RuUaTextType).ru === 'string';
};

type LngsType = 'ru' | 'ua';
type TextType = RuUaTextType | RuUaArrayTextType | undefined | string | null;
type ReturnType<T> = T extends string ? string : T extends string[] ? string[] : T extends null ? LngsType : undefined;

export function lngHelper<T extends TextType>(text: TextType): ReturnType<T> {
    let currentLng = localStorage.getItem('lng') as LngsType || 'ru';
    //@ts-ignore
    if (text === undefined) return;
    //@ts-ignore
    if (text === null) return currentLng;
    //@ts-ignore
    if (typeof text === 'string') return text;
    //@ts-ignore
    return text[currentLng];
};