import { Input } from 'antd'
import React from 'react'

const InputComponent = ({size, bordered, placeholder, style, ...rest}) => {
  return (
        <Input 
            size={size} 
            placeholder ={placeholder} 
            bordered ={bordered} 
            style={style}
            {...rest}
        />
  )
}

export default InputComponent
