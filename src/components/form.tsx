import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Button, Input, Row, Select, Spin } from 'antd';
// list
import list from '../current_list.json';
// api
import api from '../api';
import SelectValue from './elements/form/select';
import InputValue from './elements/form/input';

const { Option } = Select;

interface DataType {
    error?: string;
    to?: string;
    value?: string; 
    currency?: string;
}

interface responseType {
    info?: {
        timestamp: number;
        quote: number;
    };
    query?: {
        from: string;
        to: string;
        amount: number;
    };
    result?: number;
    success?: boolean;
    loading?: boolean;
}

const FormAction: React.FC = () => {

    const [data, setData] = useState<DataType>({});
    const [disabled, setDisabled] = useState<boolean>(true);
    const [response, setResponse] = useState<responseType>({ loading: false });

    useEffect(() => {
        if (data?.to && !data?.error) {
            setDisabled(false);
            return;
        }
        setDisabled(true);
    }, [data?.error, data?.to])

    const getInfo = (obj: any) => {
        setData({ ...data, ...obj })
    }

    const action = () => {
        setResponse({ loading: true })
        api.getConvert(data, setResponse);
    }

    return (
        <div className='action-form'>
            <Row>
                <span className='action-form__label'>correctly example: 100 usd</span>
            </Row>
            <Row style={{ flexFlow: 'row' }}>
                <InputValue setInputInfo={getInfo} />
                <SelectValue setSelectInfo={getInfo} />
            </Row>
            <Button className='action-form__btn' disabled={disabled} onClick={action}>
                <Spin spinning={response?.loading ? true : false} size={'small'}>Convert</Spin>
            </Button>
            <span className='action-form__result'>{response?.result ? response.result.toFixed(2) : ''}</span>
        </div> 
  )
}

export default FormAction



