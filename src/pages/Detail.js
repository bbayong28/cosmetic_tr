import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({list}) => {
  //useParams : cosmetic_tr/list/1 중에 마지막 1,2,3,4,...를 가지고 오는일을 함
  const { num } = useParams();
  const match = list.find(it => String(it.id) === num)

  return (
    <ul>
      <li>{match.id}</li>
      <li>{match.con}</li>
      <li>{match.des}</li>
    </ul>
  )
}

export default Detail;