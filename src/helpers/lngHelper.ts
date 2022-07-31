import { RuUaArrayTextType, RuUaTextType } from "../redux/store";

//It is certainly the worst part of the whole project 

export const isItRuUaArrayTextType = (item: TextType): item is RuUaArrayTextType => {
  return (item as RuUaArrayTextType).ru?.array !== undefined;
}

export const isItRuUaTextType = (item: RuUaTextType | JSX.Element): item is RuUaTextType => {
  return typeof (item as RuUaTextType).ru === 'string';
};

type LngsType = 'ru' | 'ua';
type TextType = RuUaTextType | RuUaArrayTextType | undefined | string | null | string[];
// type ReturnType<T> = T extends string[] ? string[] : T extends string ? string : T extends null ? LngsType : undefined;

export function lngHelper(text: TextType) {
    let currentLng = localStorage.getItem('lng') as LngsType || 'ru';

    if (text === undefined) return;

    if (text === null) return currentLng;

    if (typeof text === 'string') return text;

    if (isItRuUaArrayTextType(text)) return text[currentLng].array

    //@ts-ignore
    return text[currentLng];
    // return (text as RuUaTextType)[currentLng];
};