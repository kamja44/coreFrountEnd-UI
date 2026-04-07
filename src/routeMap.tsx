import type { ComponentType } from "react";
import Accordions from "./components/01_accordion";
import TabMenus from "./components/02_tabMenu";
import Tooltips from "./components/03_tooltip";
import ReactiveTextBox from "./components/04_reactiveTextBox";
import LineClapms from "./components/05_lineClamp";
import Forms from "./components/06_form";
import LazyLoad1 from "./components/07_lazyLoading/1_r";
import LazyLoad2 from "./components/07_lazyLoading/2_r";
import LazyLoad3_V from "./components/07_lazyLoading/3_v";
import LazyLoad4 from "./components/07_lazyLoading/4_r";
import TraditionalPagination from "./components/08_pagination/1_traditional";
import InfiniteScrollR from "./components/08_pagination/2_infiniteScroll";

const _routeMap = {
  root: {
    name: "root",
    children: [
      "accordion",
      "tabMenu",
      "tooltip",
      "reactiveTextBox",
      "lineClamp",
      "form",
      "lazyLoading",
      "pagination",
    ],
  },
  accordion: {
    name: "01. 아코디언",
    Component: Accordions,
  },
  tabMenu: {
    name: "02. 탭메뉴",
    Component: TabMenus,
  },
  tooltip: {
    name: "03. 툴팁",
    Component: Tooltips,
  },
  reactiveTextBox: {
    name: "04. 반응형 텍스트박스",
    Component: ReactiveTextBox,
  },
  lineClamp: {
    name: "05. 여러줄 말모임",
    Component: LineClapms,
  },
  form: {
    name: "06. 폼",
    Component: Forms,
  },
  lazyLoading: {
    link: "lazyLoading/1_r",
    name: "07. 지연 로딩",
    children: [
      "lazyLoading/1_r",
      "lazyLoading/2_r",
      "lazyLoading/3_v",
      "lazyLoading/4_r",
    ],
  },
  "lazyLoading/1_r": {
    name: "1R 직접계산",
    Component: LazyLoad1,
  },
  "lazyLoading/2_r": {
    name: "2R IntersectionObserver",
    Component: LazyLoad2,
  },
  "lazyLoading/3_v": {
    name: "3V 바닐라 레이지 로딩",
    Component: LazyLoad3_V,
  },
  "lazyLoading/4_r": {
    name: "4R IntersectionObserver + 작은 이미지 로딩 추가",
    Component: LazyLoad4,
  },
  pagination: {
    link: "pagination/1_traditional",
    name: "08. 페이지네이션",
    children: ["pagination/1_traditional", "pagination/2_infiniteScrollR"],
  },
  "pagination/1_traditional": {
    name: "1R 내비게이션 바",
    Component: TraditionalPagination,
  },
  "pagination/2_infiniteScrollR": {
    name: "2R 무한 스크롤",
    Component: InfiniteScrollR,
  },
};

export type RoutePath = keyof typeof _routeMap;

type BaseRoute = { name: string; link?: RoutePath };
export type ParentRoute = BaseRoute & { children: RoutePath[] };
export type ChildRoute = BaseRoute & { Component: ComponentType | null };
export type Route = ChildRoute | ParentRoute;
export const routeMap = _routeMap as Record<RoutePath, Route>;

export const isParentRoute = (route: Route): route is ParentRoute =>
  "children" in route;
export const gnbRootList: [RoutePath, Route][] = (
  routeMap.root as ParentRoute
).children.map((r) => [r, routeMap[r]]);
