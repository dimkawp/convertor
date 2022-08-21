import React from 'react';
import { Select } from 'antd';
// list
import list from '../../current_list.json';
// api
import api from '../../api';

const { Option } = Select;

const SelectValue: React.FC<any> = ({ setResponse, defaultValue, setDef }: any) => {

	const handleChange = (value: string) => {
        setResponse({ loading: true });
        setDef(value);
        api.getList(value, setResponse);
	};

	return (
		<Select defaultValue={defaultValue} style={{ width: 100 }} onChange={handleChange}>
			{Object.keys(list.currencies).map((item, index) => {
				return (
					<Option key={index} value={item}>{item}</Option>
				)
			})}
	  	</Select>
	)
}

export default SelectValue;