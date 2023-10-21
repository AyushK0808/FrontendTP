import React from 'react'
import { useLocation} from 'react-router-dom'
import Button from './Button'
import PropTypes from 'prop-types'


const Header = ({title,onAdd,showAdd}) => {
  let location=useLocation()
  return (
    <header class='header'>
        <h1>Task Tracker</h1>
        {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Headers.defaultProps= {
  title: "Task Tracker"
}

Headers.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
