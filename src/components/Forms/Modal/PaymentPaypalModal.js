import React from 'react';
import { useSelector } from 'react-redux';

import { Modal } from 'antd';
import { MoneyIcon } from '../../index';

const PaymentPaypalModal = ({isModalVisible, setIsModalVisible}) => {
  const {item_name, business, amount, invoice, currency_code} = useSelector((state) => ({
    item_name: state.payment.paypalValue.item_name,
    business: state.payment.paypalValue.business,
    amount: state.payment.paypalValue.amount,
    invoice: state.payment.paypalValue.invoice,
    currency_code: state.payment.paypalValue.currency_code,
  }))
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal 
      visible={isModalVisible} 
      footer={null}
      className='modal'
      onCancel={handleCancel}
      >
      <div className='modal-title'>Pay with Paypal</div>
      <div className='modal-text'>Click on the "Go" button to proceed with the payment</div>
      <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_xclick" id="id_cmd" />
          <input type="hidden" name="charset" value="utf-8" id="id_charset" />
          <input type="hidden" name="currency_code" value={currency_code} id="id_currency_code" />
          <input type="hidden" name="no_shipping" value="1" id="id_no_shipping" />
          <input type="hidden" name="business" value={business} id="id_business" />
          <input type="hidden" name="amount" value={amount} id="id_amount" />
          <input type="hidden" name="item_name" value={item_name} id="id_item_name" />
          <input type="hidden" name="invoice" value={invoice} id="id_invoice" />
          <input type="hidden" name="notify_url" value="http://127.0.0.1:8001/paypal/" id="id_notify_url" />
          <input type="hidden" name="cancel_return" value="http://127.0.0.1:8080/payment-cancelled/"
                id="id_cancel_return" />
          <input type="hidden" name="return" value="http://127.0.0.1:8080/payment-done/" id="id_return" />
          <div className='modal-price'>
            <MoneyIcon />
            <p>400.00 KGS</p>
          </div>
          <div className='modal-btns modal-btns--payment'>
            <button type='submit' className='btn'>Go</button>
          </div>
        </form>
    </Modal>
  )
}

export default PaymentPaypalModal
