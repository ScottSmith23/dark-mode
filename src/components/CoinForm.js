import React from 'react';
import { useForm } from 'react-hook-form';

const CoinForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => props.getCoinType(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="CoinType" ref={register}>
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="xrp">XRP</option>
        <option value="usdt">Tether</option>
        <option value="bch">BitCoin Cash</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default CoinForm;