import { useContext } from "react";
import { useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space, Typography } from 'antd'


const CalenderDropDown = () => {
    const { viewCalender, setViewCalender } = useContext(GlobalContext)
    const [selectedMode, setSelectedMode] = useState(viewCalender); // Initialize the selected mode with the default value

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
        <Dropdown
            menu={{
                items,
                selectable: true,
                defaultSelectedKeys: [{ viewCalender }]
            }}
            className="mr-5 border px-4 py-2 w-36"
        >
            <Typography>
                <Space className="flex items-center justify-between">
                    {selectedMode}
                    <DownOutlined />
                </Space>
            </Typography>
        </Dropdown>

    );
}

export default CalenderDropDown