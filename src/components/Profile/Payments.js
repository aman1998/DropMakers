import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlePaypalActionCreator } from '../../store/actions/payment';

import { MoneyIcon, PaymentPaypalModal } from '../index';

import PaypalIcon from '../../assets/icons/paypal.png'

const Payments = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const dispatch = useDispatch()

  const handlePaypal = () => {
    dispatch(handlePaypalActionCreator(setIsModalVisible))
  }

  const paypalMethods = [
    {id: 1, title: 'Paypal', icon: PaypalIcon},
  ]

  return (
    <section className='payments container'>
      <h1 className='payments-title'>Buy Premuim</h1>
      <div className='payments-price'>
        <MoneyIcon />
        <p>400.00 KGS</p>
      </div>
      <p className='payments-choose'>Select a Payment Method</p>
      <div className='payments-methods'>
        {
          paypalMethods.map((item) => (
            <div className='method' key={item.id} onClick={handlePaypal}>
              <img src={item.icon} alt='method' className='method-icon'/>
              <div className='method-title'>{item.title}</div>
            </div>
          ))
        }
      </div>
      <PaymentPaypalModal 
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </section>
  )
}

export default Payments
