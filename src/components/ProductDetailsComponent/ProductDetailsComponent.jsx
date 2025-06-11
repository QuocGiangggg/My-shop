import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../asset/image/test.webp'
import imageProductsmall from '../../asset/image/small.webp'
import { WrapperAddressProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperStyleColSmall, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'

const ProductDetailsComponent = () => {
  return (
    <Row style={{ padding: '16px', background: '#fff'}}>
        <Col span={10}>
            <Image src={ imageProduct} alt='image product' preview={false} />
            <Row style={{ padding: '10px', justifyContent: 'space-between'}}>
                <WrapperStyleColSmall span={4} >
                    <WrapperStyleImageSmall src={ imageProductsmall} alt='image small'  preview={false}/>
                </WrapperStyleColSmall>

                <WrapperStyleColSmall span={4} >
                    <WrapperStyleImageSmall src={ imageProductsmall} alt='image small'  preview={false}/>
                </WrapperStyleColSmall>

                <WrapperStyleColSmall span={4} >
                    <WrapperStyleImageSmall src={ imageProductsmall} alt='image small'  preview={false}/>
                </WrapperStyleColSmall>

                <WrapperStyleColSmall span={4} >
                    <WrapperStyleImageSmall src={ imageProductsmall} alt='image small'  preview={false}/>
                </WrapperStyleColSmall>

                <WrapperStyleColSmall span={4} >
                    <WrapperStyleImageSmall src={ imageProductsmall} alt='image small'  preview={false}/>
                </WrapperStyleColSmall>

                <WrapperStyleColSmall span={4} >
                    <WrapperStyleImageSmall src={ imageProductsmall} alt='image small'  preview={false}/>
                </WrapperStyleColSmall>
            </Row>
        </Col>
        <Col span={14}>
            <WrapperStyleNameProduct> Tên Sản phẩm </WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>            
            </div>
            <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.0000đ</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                    <span>Giao Đến </span>
                    <span className='address'>14A, Định Công, Hoàng Mai, Hà Nội </span>
                    <span className='change-address'>Đổi địa chỉ</span>
            </WrapperAddressProduct>
        </Col> 
    </Row>
  )
}

export default ProductDetailsComponent
 