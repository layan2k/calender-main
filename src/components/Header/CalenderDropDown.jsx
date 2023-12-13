/*
Dropdown component for calender Header with the ability to switch the display mode.
*/

import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space, Typography } from 'antd'


const CalenderDropDown = () => {
    const { viewCalender, setViewCalender } = useContext(GlobalContext)

    // Dropdown Items
    const items = [
        {
            key: 'Day',
            label: 'Day',
            onClick: () => {
                setViewCalender('Day'); // Update global context
            }
        },
        {
            key: 'Week',
            label: 'Week',
            onClick: () => {
                setViewCalender('Week'); // Update global context
            }
        },
        {
            key: 'Month',
            label: 'Month',
            onClick: () => {
                setViewCalender('Month'); // Update global context
            }
        },
        {
            key: 'Appointments',
            label: 'Appointments',
            onClick: () => {
                setViewCalender('Appointments'); // Update global context
            }
        }
    ];

    return (
        /*
        AntD Dropdown that takes in array of objects
        https://ant.design/components/dropdown
        https://ant.design/components/typography
        */
        <Dropdown
            menu={{
                items,
                selectable: true,
                defaultSelectedKeys: [ viewCalender ]
            }}
            className="mr-5 border px-4 py-2 w-36 hiddenItemsSmallScreen"
        >
            <Typography>
                <Space className="flex items-center justify-between">
                    {viewCalender}
                    <DownOutlined />
                </Space>
            </Typography>
        </Dropdown>

    );
}

export default CalenderDropDown