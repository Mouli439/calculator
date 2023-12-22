import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export default function InputIcon({type,placeholder}) {
  return (
    <div>
        <input type={type} placeholder={placeholder}/>
    </div>
  )
}
