import cx from "../cx";

type Item = {
  id: string;
  title: string;
  description: string;
};
type RenderProps = {
  isLoading: boolean;
  page?: number;
  data?: Item[];
  hasNextPage?: boolean;
};
export type AddList = (data: Item[], page: number) => void;
const scrollFetch = (wrapper: HTMLDivElement, addList: AddList) => {
  const $more = document.createElement("div");
  const $spinner = document.createElement("div");
  $spinner.classList.add(cx("spinner"));
  let currentPage = -1;

  const renderer = ({
    isLoading,
    page,
    data = [],
    hasNextPage = true,
  }: RenderProps) => {
    $spinner.style.display = isLoading ? "block" : "none";
    if(!hasNextPage) 
  };
};
