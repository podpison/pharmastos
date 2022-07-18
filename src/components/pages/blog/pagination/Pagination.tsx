import { useEffect, useState } from "react";
import "./pagination.scss";
import ReactPaginate from 'react-paginate';
import { BlogItemType } from "../../../../redux/reducers/staticReducer";

type Props = {
  items: BlogItemType[]
  setCurrentItems: (items: BlogItemType[]) => void
}

const itemsPerPage = 9

export const Pagination: React.FC<Props> = ({ items, setCurrentItems }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  type HandlePageClickProps = {
    selected: number
  }
  const handlePageClick = ({selected}: HandlePageClickProps) => {
    const newOffset = (selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return <ReactPaginate
  className="pagination"
  pageClassName="pagination__page"
  activeClassName="pagination__page_active"
  pageLinkClassName="pagination__pageLink"
  onPageChange={handlePageClick}
  previousLabel="<"
  nextLabel=">"
  pageRangeDisplayed={3}
  marginPagesDisplayed={2}
  pageCount={pageCount}
  breakLabel="..."
  />
};