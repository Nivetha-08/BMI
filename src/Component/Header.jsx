import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Main from './Main';
import './style.css';

const validationSchema = Yup.object().shape({
  height: Yup.number()
    .typeError('Height must be a number')
    .positive('Height must be greater than 0')
    .required('Height is required'),
weight: Yup.number()
    .typeError('Weight must be a number')
    .positive('Weight must be greater than 0')
    .required('Weight is required')
});

const Header = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [bmi, setBmi] = useState(null);

  const onSubmit = (data) => {
    const { height, weight } = data;
    const calculatedBMI = Math.floor(weight / ((height * 0.01) ** 2));
    setBmi(calculatedBMI);
  };

  const handleClear = () => {
    reset();
    setBmi(null);
  };

  return (
    <Main 
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      bmi={bmi}
      onClear={handleClear}
    />
  );
};

export default Header;
