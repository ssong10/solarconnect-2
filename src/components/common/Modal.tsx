import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';

export const errorInfo = (message:string) => {
  Modal.info({
    title:"입력값을 확인해 주세요",
    icon:<ExclamationCircleOutlined/>,
    content: (
      <div>
        {message}
      </div>
    )
  })
}