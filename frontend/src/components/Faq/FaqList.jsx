import React from 'react'
import {faqs} from '../../assets/data/faqs'
import FaqItem from './FaqItem'

const FaqList = () => {

  return (
    <ul className='mt-[38px]'>
        {faqs.map((items,index)=><FaqItem key={index} item={items}/>
        )}
    </ul>
  )
}

export default FaqList;