import React from 'react'
import { WrapperContent, WrapperlableText, WrapperPrice, WrapperTextValue } from './style'
import { type } from '@testing-library/user-event/dist/type'
import { Checkbox, Col, Rate, Row } from 'antd'

const NavBarComponent = () => {
  const onChange = () => {}
    const renderContent = (type, options) => {
        switch (type){
            case 'text': 
                return options.map((option)=>{
                      return (
                      <WrapperTextValue>{option}</WrapperTextValue>
                      )
                  })
            case 'checkbox':
            return(
                  <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {
                      options.map((option) => {
                        return (
                            <Checkbox style={{marginLeft: 0}} value={option.value}>{option.lable}</Checkbox>
                        )
                      })
                    }
                          
                          <Checkbox value="B">B</Checkbox>
                  </Checkbox.Group>
                  )
            case 'star':
            return(
                      options.map((option) => {
                        return (
                            <div style={{ display: 'flex'}}>
                              <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                              <span>{` từ ${option} sao`}</span>
                            </div>
                        )
                      })
                    )
            
            case 'price':
            return(
                      options.map((option) => {
                        return (
                            <WrapperPrice>
                              option
                            </WrapperPrice>
                        )
                      })
                    )
            default:
                return {}
        }
    }
  return (
    <div>
      <WrapperlableText>Label</WrapperlableText>
      <WrapperContent>
        {renderContent('text', ['Tủ Lạnh', 'TV', 'Máy giặt'])}
      </WrapperContent>
      
    </div>
  )
}

export default NavBarComponent
