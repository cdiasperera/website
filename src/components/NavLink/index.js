import React from 'react'

const NavLink = ({ name, dest }) => {
  return (
    <a href={dest}>> {name}</a>
  )
}

export default NavLink
