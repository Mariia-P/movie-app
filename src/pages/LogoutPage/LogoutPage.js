import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import {logoutUser} from '../../store';


export const LogoutPage = () => {
   const dispatch = useDispatch();

   useEffect(() => {
       dispatch(logoutUser())
   }, []);
    return null;
};

 