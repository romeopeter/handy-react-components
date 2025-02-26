import { ReactNode } from "react";

/* -------------------------------------------- */

export type TabShape = {
  items: string[];
  defaultTab?: 0;
  containerClass?: string;
  tabListClassName?: string;
  tabItemClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  containerClassName?: string;
  children?: ReactNode;
  onChange?: (arg1: any) => void;
};

export type TabItemShape = {
  label: string;
  active: boolean;
  onClick: () => any;
  activeClassName?: string;
  inactiveClassName?: string;
  tabItemClassName?: string;
};
