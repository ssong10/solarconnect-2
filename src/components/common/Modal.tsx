import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components'
const Content = styled.div`
  margin-top: 18px;
  white-space: pre-line;
`
export const errorInfo = (message:string) => {
  Modal.info({
    title:"입력값을 확인해 주세요",
    icon:<ExclamationCircleOutlined/>,
    content: (
      <Content>
        {message}
      </Content>
    )
  })
}