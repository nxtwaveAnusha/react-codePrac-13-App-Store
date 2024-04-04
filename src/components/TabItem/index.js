import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  const isActiveTabClassName = isActive ? 'act-tab-id' : ''
  return (
    <li className="tab-item-container">
      <button
        className={`tab-btn ${isActiveTabClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
