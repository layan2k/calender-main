import {PlusOutlined} from '@ant-design/icons'
import { FloatButton } from 'antd';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const AddButton = () => {
  const {setShowEventModal} = useContext(GlobalContext)
  return (
    <FloatButton className='text-3xl text-white' icon={<PlusOutlined />} onClick={() => setShowEventModal(true)} />
  )
}
export default AddButton;