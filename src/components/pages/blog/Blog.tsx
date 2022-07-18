import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { BlogItemType } from "../../../redux/reducers/staticReducer";
import { selectBlogItems } from "../../../redux/selectors";
import { Cards } from "../../ui/cards/Cards";
import { Pagination } from "./pagination/Pagination";


export const Blog: React.FC = () => {
  useBreadcrumbs({name: 'Блог', link: 'blog'});
  let items = useSelector(selectBlogItems);
  const [currentItems, setCurrentItems] = useState<BlogItemType[]>(items);

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  return <section>
    <Cards threeCardsPerRow disabledImgPaddings heading="Блог" items={items} headingNumber={2} />
    <Pagination items={currentItems} setCurrentItems={setCurrentItems} />
  </section>
};