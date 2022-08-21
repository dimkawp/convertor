import React from 'react';

const List: React.FC<any> = ({ quotes }: any) => {
    return (
        <div className='list'>
            {quotes && Object.keys(quotes).map((item) => {
                return <div className='list__item' key={item}>
                            <div className='list__item-name'>{item}</div> {quotes[item].toFixed(2)}
                        </div>
            })}
        </div>
    )
}

export default List;