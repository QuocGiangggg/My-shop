import { Badge, Col } from 'antd'
import React from 'react'
import { WarpperHeader, WarpperHeaderAccount, WarpperHeaderSmall, WarpperTextHeader } from './style'
import Search from 'antd/es/transfer/search'
import {
    CaretDownOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInpuSearch/ButtonInputSearch';


export default function HeaderComponents() {
  return (
    <div>
     <WarpperHeader gutter={16}>
        <Col span={6}>
            <WarpperTextHeader>DANGQUOCGIANG</WarpperTextHeader>
        </Col>
        <Col span={12}>
            <ButtonInputSearch
                size ="large"
                bordered = {false}
                placeholder="input search text" 
                textButton = "Tìm Kiếm"
                // onSearch={onSearch} 
            />
        </Col>
        <Col span={6} style={{display: 'flex', gap:'20px', alignItems: "center"}} >
            <WarpperHeaderAccount>
                <UserOutlined style={{fontSize: '30px'}} />
                 <div>
                    <WarpperHeaderSmall>Đăng Nhập/Đăng ký</WarpperHeaderSmall>
                    <div>
                        <WarpperHeaderSmall>Tài Khoản</WarpperHeaderSmall>
                        <CaretDownOutlined />
                    </div>
                 </div>
            </WarpperHeaderAccount>
            <div>
                <Badge count ={4} size='small' >
                    <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'} }/>
                </Badge>
                <WarpperHeaderSmall>Giỏ hàng</WarpperHeaderSmall>
            </div>
        </Col>
     </WarpperHeader>
    </div>
  )
}
