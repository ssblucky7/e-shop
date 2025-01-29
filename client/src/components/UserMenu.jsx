import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Divider from './Divider';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import { logout } from '../store/userSlice';
import toast from 'react-hot-toast';
import AxiosToastError from '../utils/AxiosToastError';

const UserMenu = React.memo(() => {
  const user = useSelector((state) => state.user?.name || state.user?.mobile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      const response = await Axios({ ...SummaryApi.logout });
      console.log('logout', response);

      if (response.data.success) {
        dispatch(logout());
        localStorage.removeItem('userToken'); // Remove only necessary items
        toast.success(response.data.message);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      AxiosToastError(error);
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <div className="font-semibold">My Account</div>
      <div className="text-sm">{user}</div>

      <Divider />
      <div className="text-sm grid gap-1">
        <Link to="/orders" className="px-2 hover:bg-orange-200 py-1">
          My Orders
        </Link>
        <Link to="/addresses" className="px-2 hover:bg-orange-200 py-1">
          Saved Addresses
        </Link>

        <button onClick={handleLogout} className="text-left px-2 hover:bg-orange-200 py-1">
          Log Out
        </button>
      </div>
    </div>
  );
});

export default UserMenu;
