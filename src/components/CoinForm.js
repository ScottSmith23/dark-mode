import React from 'react';
import { useForm } from 'react-hook-form';

const CoinForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => props.getCoinType(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="CoinType" ref={register}>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ethereum">Ethereum</option>
        <option value="XRP">XRP</option>
        <option value="Tether">Tether</option>
        <option value="BitCoin Cash">BitCoin Cash</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default CoinForm;