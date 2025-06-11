
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons';
import logo from '../../asset/image/logo.png'

const CardComponent = () => {
  return (
   <WrapperCardStyle
    hoverable
    headStyle={{width: '200px', height: '200px'}}
    style={{ width: 200 }}
    bodyStyle={{pasdding: '10px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  > 
    <WrapperImageStyle src={ logo}  alt='logo'/>
    <StyleNameProduct>Iphone</StyleNameProduct>
    <WrapperReportText>
        <span style={{marginRight: '4px'}}>
            <span>4.96</span> <StarFilled style={{fontSize: '12px', color:'yellow'}} />
        </span>
        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        
    </WrapperReportText>
    <WrapperPriceText>
        10.000.000đ
        <WrapperDiscountText>
            -5%
        </WrapperDiscountText>
    </WrapperPriceText>

  </WrapperCardStyle>
  )
}

export default CardComponent
