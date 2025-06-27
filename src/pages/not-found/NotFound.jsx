import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section style={{ background: '#f0f2f5', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className='container' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Result
          status="404"
          title={<span style={{ fontSize: 80, color: '#1677ff' }}>404</span>}
          subTitle={<span style={{ fontSize: 20, color: '#595959' }}>Sorry, the page you visited does not exist.</span>}
          extra={<Button type="primary"><Link to="/" style={{ color: '#fff' }}>Back Home</Link></Button>}
        />
      </div>
    </section>
  )
}

export default React.memo(NotFound)