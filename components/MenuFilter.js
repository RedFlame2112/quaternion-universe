
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const VIEW_ICONS = ['list-ul', 'border-all'];

const FilteringMenu = ({onChange, filter}) => {
  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
      className='clickable hoverable'
      icon={VIEW_ICONS[filter.view.list]}
      size='lg' 
      onClick={() => {
        //toggles between opposite view state values 
        //when view button has been clicked
        onChange('view', {list: +!filter.view.list });
      }} />
    </div>
  )
}

export default FilteringMenu