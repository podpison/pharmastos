import { useSelector } from "react-redux";
import { selectBlogItems } from "../../../redux/selectors";
import { Cards } from "../cards/Cards";

export const News: React.FC = () => {
  let items = useSelector(selectBlogItems).map(i => ({...i, to: `/blog/${i.id}`}));

  return <Cards disabledImgPaddings heading="news.heading" items={items.slice(0, 4)} link={{link: 'news.allNews', path: '/blog'}} />
};