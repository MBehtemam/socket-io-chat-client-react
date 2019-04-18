const Tab = ({ tabId, activeTab, children }) => tabId === activeTab && children;
export default Tab;
