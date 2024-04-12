import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './';
import { ThunkDispatch } from 'redux-thunk';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useThunkDispatch = () => useDispatch<ThunkDispatch<RootState, undefined, any> & AppDispatch>();