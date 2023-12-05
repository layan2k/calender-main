import { useState } from 'react';
import { Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';





const MobileMenu = () => {
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => setVisible(!visible);

    const { viewCalender, setViewCalender } = useContext(GlobalContext)
    const [selectedMode, setSelectedMode] = useState(viewCalender);

    const items = [
        {
            key: 'Day',
            label: 'Day',
            onClick: () => {
                setViewCalender('Day'); // Update global context
                setSelectedMode('Day'); // Update local state
            }
        },
        {
            key: 'Week',
            label: 'Week',
            onClick: () => {
                setViewCalender('Week'); // Update global context
                setSelectedMode('Week'); // Update local state
            }
        },
        {
            key: 'Month',
            label: 'Month',
            onClick: () => {
                setViewCalender('Month'); // Update global context
                setSelectedMode('Month'); // Update local state
            }
        }
    ];

    return (
        <div className='px-3 py-2 min-h-14 ml-auto '>
            <button
                className="mobile-menu-button border  focus:outline-none p-1 "
                onClick={toggleMenu}
            >
                <MenuOutlined  style={{ fontSize: '24px' }} />
            </button>
            <Drawer
                title={`Calender Mode: ${selectedMode}`}
                placement="right"
                closable={true}
                open={visible}
                onClose={toggleMenu}
                className="mobile-menu bg-white"

            >
                <Menu items={items} mode="inline" />
            </Drawer>
        </div>
    );
};

export default MobileMenu;
