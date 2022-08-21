import React from 'react';
import { Select } from 'antd';
// list
import list from '../../../current_list.json';

const { Option } = Select;

const SelectValue: React.FC<any> = ({ setSelectInfo }: any) => {

	const handleChange = (value: string) => {
        setSelectInfo({ to: value })
	};

	return (
		<Select defaultValue="" placeholder="USD" style={{ width: 100 }} onChange={handleChange}>
			{Object.keys(list.currencies).map((item, index) => {
				return (
					<Option key={index} value={item}>{item}</Option>
				)
			})}
	  	</Select>
	)
}

export default SelectValue;