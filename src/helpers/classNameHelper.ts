type ConditionsType = { [key: string]: boolean }

export const classNameHelper = (className: string, conditions: ConditionsType, incomingClassNames?: string) => {
  let string = incomingClassNames ? `${className} ${incomingClassNames}` : className;
  for (let condition in conditions) {
    if (conditions[condition]) {
      string = string.concat(' ', `${className}_${condition}`)
    }
  };
  return string;
};