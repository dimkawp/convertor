import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
// components
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import SelectValue from '../components/elements/select';
import List from '../components/elements/list';
// api
import api from '../api';

interface ResponseListType {
    quotes?: { [name: string]: number};
    source?: string;
    success?: boolean;
    timestamp?: string;
    loading?: boolean;
}

const ListPage: React.FC = () => {
    const [response, setResponse] = useState<ResponseListType>({ loading: true });
    const [def, setDef] = useState<string>('USD');

    useEffect(() => {
        api.getList(def, setResponse);
    }, []);

    return (
        <Spin spinning={response?.loading ? true : false}>
            <div className='page'>
                <HeaderComponent />
                <main>
                    <section>
                        {!response?.loading && <SelectValue setResponse={setResponse} defaultValue={def} setDef={setDef} />}
                        <List quotes={response?.quotes} />
                    </section>
                </main>
                <FooterComponent />
            </div>
        </Spin>
  )
}

export default ListPage;



