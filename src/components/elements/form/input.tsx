import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Input } from 'antd';
// list
import list from '../../../current_list.json';

const InputValue: React.FC<any> = ({ setInputInfo }: any) => {
	const [error, setError] = useState<string>('');

    useEffect(() => {
        setInputInfo({ error: error });
    }, [error]);

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const [value, currency] = e.currentTarget.value.split(' ');
		
		let currencyValidatio = currency && _.find(Object.keys(list.currencies), (el) => el === currency.toUpperCase());

		!currencyValidatio && setError('currency is not correctly');

		_.isInteger(Number(value)) && currencyValidatio && setError('');

        setInputInfo({ value: value, currency: currency });
	};

	return (
		<div className='input-selectort'>
			<Input aria-label={error} addonBefore="100 usd" addonAfter="in" defaultValue="" onChange={handleChange} maxLength={10}/>
			<span className='input-selectort__error'>{error}</span>
		</div>
	)
}

export default InputValue;