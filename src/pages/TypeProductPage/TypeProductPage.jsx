import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNabar, WrapperProducts } from './TypeProduct'

const TypeProductPage = () => {
    const onChange =() => {}
  return (
    <div style={{ padding: '0 120px', background: '#efefef',}}>
        <Row style={{ flexWrap: 'nowrap', paddingTop:'10px' }}>
            <WrapperNabar span={4} >
                <NavBarComponent/>
            </WrapperNabar>
            <Col span={20}>
                <WrapperProducts >
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </WrapperProducts>
                <Pagination  defaultCurrent={2} total={100} onChange={onChange} style={{textAlign: 'center', marginTop: '10px'}} />
            </Col>
         </Row>
           
        
    </div >
  )
}

export default TypeProductPage
