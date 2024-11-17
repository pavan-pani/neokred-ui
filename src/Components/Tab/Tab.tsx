import React, { useState, useEffect, useRef } from 'react';
import './Tab.scss';

interface TabProps {
  tabs: string[];
  onTabChange?: (selectedTab: string) => void;
}

const Tabs: React.FC<TabProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const currentTab = tabsRef.current[tabs.indexOf(activeTab)];
    if (currentTab) {
      setUnderlineStyle({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  }, [activeTab, tabs]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  return (
    <div className="tabs-container" role="tablist">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          ref={(el) => (tabsRef.current[index] = el!)}
          className={`tab-button ${tab === activeTab ? 'active' : ''}`}
          onClick={() => handleTabClick(tab)}
          role="tab"
          aria-selected={tab === activeTab}
          tabIndex={tab === activeTab ? 0 : -1}
        >
          {tab}
        </button>
      ))}
      <div className="underline" style={underlineStyle} />
    </div>
  );
};

export default Tabs;
