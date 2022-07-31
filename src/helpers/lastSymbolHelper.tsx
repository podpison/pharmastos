export const lastSymbolHelper = (array: any[], itemIndex: number) => {
  return itemIndex === array.length - 1 ? '.' : ';';
};