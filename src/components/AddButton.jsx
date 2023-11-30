import React from 'react';
import {PlusOutlined} from '@ant-design/icons'
import { FloatButton } from 'antd';

const App = () => <FloatButton className='text-3xl text-white' icon={<PlusOutlined />} onClick={() => console.log('click')} />;
export default App;