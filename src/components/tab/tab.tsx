import { useState, useCallback, memo, Children } from "react";
import { TabShape, TabItemShape } from "./type";

/* --------------------------------------------------------------------------- */

const TabItem = memo(
  ({
    label,
    active,
    onClick,
    activeClassName = "bg-white border-blue-500",
    inactiveClassName = "text-gray-500 hover:text-gray-700 bg-transparent",
    tabItemClassName,
  }: TabItemShape) => (
    <button
      type="button"
      title={label}
      onClick={onClick}
      className={`px-4 
      py-2  
      font-medium 
      transition-colors 
      duration-200 ${
        active
          ? `${activeClassName} border-b-2`
          : `${inactiveClassName} border-transparent`
      } ${tabItemClassName}`}
    >
      {label}
    </button>
  )
);

const Tab = ({
  items = [],
  defaultTab = 0,
  containerClassName = "bg-gray-50",
  tabListClassName = "border-b",
  tabItemClassName,
  activeClassName,
  inactiveClassName,
  onChange,
  children,
}: TabShape) => {
  const [activeTab, setActiveTab] = useState<number>(defaultTab);

  const handleTabClick = useCallback(
    (index: number, tabItem?: string) => {
      setActiveTab(index);
      onChange?.(tabItem);
    },
    [onChange]
  );

  return (
    <div className={`rounded-lg ${containerClassName}`}>
      <div className={`flex space-x-1 ${tabListClassName}`}>
        {items.map((item, index) => (
          <TabItem
            key={index}
            label={item}
            active={activeTab === index}
            onClick={() => handleTabClick(index, item)}
            tabItemClassName={tabItemClassName}
            activeClassName={activeClassName}
            inactiveClassName={inactiveClassName}
          />
        ))}
      </div>

      {children && (
        <div className="p-4">{Children.toArray(children)[activeTab]}</div>
      )}
    </div>
  );
};

export default Tab;
