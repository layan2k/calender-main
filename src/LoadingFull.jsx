import { Spin } from 'antd';
const LoadingFull = () => (
    <div>
        <Spin fullscreen={true} size="large" delay={2000} />
    </div>
);
export default LoadingFull;