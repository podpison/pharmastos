import { useState } from "react";
import { classNameHelper } from "../../../../helpers/classNameHelper";
import "./CEOText.scss";

export const CEOText: React.FC = () => {
  const [hidden, setHidden] = useState(true);

  return <div className='CEO-text'>
    <h3 className='CEO-text__heading'>CEO текст</h3>
    <div className={classNameHelper('CEO-text__texts', {hidden})}>
      <p className='text CEO-text__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatibus, tempora nostrum illum tenetur magnam? Totam officiis quos libero, sint obcaecati laborum aliquam. Cupiditate maiores similique impedit quaerat, dolorem obcaecati?
      Animi rem delectus, ex est sapiente eaque atque nemo vel aperiam dolores dolorum reprehenderit placeat incidunt non laboriosam recusandae. Accusamus minus aspernatur placeat qui dolor pariatur eos excepturi quo sunt.</p>
      <p className='text CEO-text__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet enim vero, dicta repellendus excepturi quia, necessitatibus ipsam earum assumenda ex, autem quae tempora aperiam! Laborum repudiandae repellat cumque nisi?
      Exercitationem cumque ad unde animi quasi neque harum iure commodi veniam maxime laudantium sit quaerat officia dolorem odit, libero praesentium accusantium, distinctio quae voluptates nam consectetur sed? Delectus, beatae consequatur?
      Iure molestiae reprehenderit sint modi ducimus eos veritatis, molestias facere nam id quidem! Odit similique vitae nisi blanditiis accusamus voluptate, consequatur quae dignissimos fugiat ad, nostrum ducimus est illum harum!</p>
      <p className='text CEO-text__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ducimus, error consectetur vitae et excepturi at quisquam ipsam a eum id distinctio dolore reprehenderit dolorem molestias similique impedit? Quasi, itaque!</p>
    </div>
    <p onClick={() => setHidden(prev => !prev)} className='CEO-text__showMoreButton'>Читать дальше</p>
  </div>
};