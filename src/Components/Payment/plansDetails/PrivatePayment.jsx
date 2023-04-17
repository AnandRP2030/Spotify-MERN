import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

export const PrivatePayment = ({children}) => {
  const viewAuth = useSelector(state=>state.paymentReducer.viewPayment)

  return  viewAuth ? children : <Navigate to="/upgrade" />
}
