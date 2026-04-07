import VanillaWrapper from "@/components/vanillaWrapper";
import { shiftData } from "@/services/util";
import data from "../data";
import cx from "../cx";
type Item = {
  id: string;
  title: string;
  description: string;
};
const PAGE_SIZE = 15;

const generateListItem = ({
  number,
  title,
  description,
}: Item & { number: number }) => {
  const $li = document.createElement("li");
  $li.insertAdjacentHTML(
    "beforeend",
    `
        <p><strong>${number}. ${title}</strong></p>
        <div>${description}</div>
    `,
  );
  return $li;
};

const generateList = (items: Item[], page: number) => {
  const $list = document.createElement("ul");
  $list.classList.add(cx("list"));
  items.forEach((item, i) =>
    $list.append(
      generateListItem({
        ...item,
        number: page * PAGE_SIZE + i + 1,
      }),
    ),
  );
  return $list;
};
const initiator = (wrapper: HTMLDivElement) => {
  const $$list = document.createElement("div");
  wrapper.append($$list);
  const addList = (data: Item[], page: number) =>
    $$list.append(generateList(data, page));
  addList(shiftData(data, 0, PAGE_SIZE), 0);
};

const InfiniteScrollV = () => {
  return (
    <div>
      <h2>페이지네이션</h2>
      <VanillaWrapper title="#3" subTitle="무한 스크롤" initiator={initiator} />
    </div>
  );
};

export default InfiniteScrollV;
