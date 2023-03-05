import { ReduxState } from '@reducers/index'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxDispatch } from '../typings/ReduxDispatch'

export const useAppDispatch = useDispatch as () => ReduxDispatch
export function useAppSelector<Selected>(selectFn: (state: ReduxState) => Selected) {
  return useSelector(selectFn)
}
