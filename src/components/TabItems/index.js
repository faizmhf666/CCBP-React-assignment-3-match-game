import './index.css'

const TabItems = props => {
  const {tabDetails, onClickChange, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeClassName = isActive ? 'active-tab' : ''
  const onClickTabButton = () => {
    onClickChange(tabId)
  }

  return (
    <li className="tab-container">
      <button
        type="button"
        onClick={onClickTabButton}
        className={`tab-btn ${activeClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
