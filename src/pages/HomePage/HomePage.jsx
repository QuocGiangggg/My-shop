import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WarpperTypeProduct, WrapperButtonMore, WrapperProducts } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../asset/image/slider1.webp';
import slider2 from '../../asset/image/slider2.webp';
import slider3 from '../../asset/image/slider3.webp';
import CardComponent from '../../components/CardComponent/CardComponent';



const HomePage =()=>  {
   const arr = ['TV', 'Tu Lanh', 'Laptop']
  return (
    <>
        <div style={{padding: "0 120px"}} >
        <WarpperTypeProduct>
            {arr.map((item) => {
                return (<TypeProduct name ={item} key={item}/>
                )
            })}
        </WarpperTypeProduct>
        </div>
        <div id='container' style={{backgroundColor: '#efefef', padding: '0 120px', height: '1000px', width: '100%'}} >
            <SliderComponent arrImage={[slider1, slider2, slider3]} />
            <WrapperProducts>
                <CardComponent />
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </WrapperProducts>
            <div style={{ width: '100%', display:'flex', justifyContent: 'center', marginTop: '10px'}}>
                <WrapperButtonMore textButton = "Xem Thêm" type ="outline" 
                 styleButton={{
                    border: '1px solid rgb(11, 116, 229)', 
                    color: 'rgb(11, 116, 229)',
                    width: '240px',
                    height: '38px',
                    borderRadius: '4px',
                 }}
                 styleTextButton={{fontWeight: 500}}
            />
            </div>
        </div>
    </>
  )
}
export default HomePage
