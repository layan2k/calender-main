/*
Loading Spinner for full page use, in this project this is diplayed
Until Page is fully loaded
https://ant.design/components/spin
*/
import { Spin } from 'antd';
const LoadingFull = () => (
    <div>
        <Spin fullscreen={true} size="large" />
    </div>
);
export default LoadingFull;