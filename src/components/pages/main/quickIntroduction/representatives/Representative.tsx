import "./representatives.scss";
import "./representative_type.scss";

type Props = {
  to: string
  type: 0 | 1 | 2
}

export const Representative: React.FC<Props> = ({ to, type }) => {
  return type !== 0
    ? <a target="_blank" rel="noopener noreferrer" href={to} className={`quickIntroduction__representative quickIntroduction__representative_type_${type}`}>
      <div></div>
    </a>
    : <div className={`quickIntroduction__representative quickIntroduction__representative_type_${type}`}>
      <a target="_blank" rel="noopener noreferrer" href={to}></a>
      <a target="_blank" rel="noopener noreferrer" href='https://www.wrpworld.com/'></a>
    </div>
};