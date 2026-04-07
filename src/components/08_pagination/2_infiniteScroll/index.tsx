import cx from "../cx";
import useScrollFetch from "./useScrollFetch";

type Item = { id: string; title: string; description: string };
const PAGE_SIZE = 15;
const ListItem = ({
  number,
  title,
  description,
}: Item & { number: number }) => {
  return (
    <li>
      <p>
        <strong>
          {number}. {title}
        </strong>
      </p>
      <p>{description}</p>
    </li>
  );
};

const List = ({ page, pageIndex }: { page: Item[]; pageIndex: number }) => {
  return (
    <ul className={cx("list")}>
      {page.map((item, i) => (
        <ListItem
          {...item}
          number={pageIndex * PAGE_SIZE + i + 1}
          key={`${item.id}`}
        />
      ))}
    </ul>
  );
};

const InfiniteScrollR = () => {
  const { data, isLoading, moreRef } = useScrollFetch();
  return (
    <>
      <h2>페이지네이션</h2>
      <h3>
        #2. React <sub>무한 스크롤</sub>
      </h3>
      {data.map((page, i) => (
        <List page={page} pageIndex={i} key={page[0].id} />
      ))}
      <div id="fetchMore" ref={moreRef} />
      {isLoading && <div className={cx("spinner")} />}
    </>
  );
};
export default InfiniteScrollR;
