import { Representative } from "./Representative";
import "./representatives.scss";

export const Representatives: React.FC = () => {
  return <div className="representatives">
    <Representative to='https://www.remesco.com/' type={0} />
    <Representative to='https://www.heliousa.com/' type={1} />
    <Representative to='https://www.lyncmed.com/' type={2} />
  </div>
};