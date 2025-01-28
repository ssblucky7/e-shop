import React from 'react'

const UserMenu = () => {
    const user = userSelector((state)=> state.user)
  return (
    <div>
      <div className = 'font-semibold'>My Account</div>
      <div className = 'text-sm'>{user.name || user.mobile}</div>

      <Divider/>
      <div className = 'text-sm grid gap-2'>
        <Link to={""}className='px-2'>My Orders</Link>
        <Link to={""}className='px-2'>Save Address</Link>
        <button classname='text-left px-2'>Log Out</button>
      </div>
    </div>
  )
}

export default UserMenu
