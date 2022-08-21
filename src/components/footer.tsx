import { Button } from 'antd'
import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent: React.FC = () => {
  return (
    <footer>
        <Button type="dashed" ghost>
            <Link to='/'>HOME</Link>
        </Button>
        <Button type="dashed" ghost>
            <Link to='/list'>LIST</Link>
        </Button>
    </footer>
  )
}

export default FooterComponent