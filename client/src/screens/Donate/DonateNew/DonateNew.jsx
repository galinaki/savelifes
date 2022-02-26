import React from 'react'
import { useState } from 'react'

export default function DonateNew(props) {

  const [name, setName] = useState('')
  const [desciption, setDesciption] = useState('')
  const [logo_url, setLogo_url] = useState('')
  const [link, setLink] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const donate = {
        name, desciption, logo_url, link
      }
      props.handleNewDonate(donate)
    }}>
      <input
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <input
        type='text'
        value={desciption}
        onChange={(e)=>setDesciption(e.target.value)}
      />
      <input
        type='text'
        value={logo_url}
        onChange={(e)=>setLogo_url(e.target.value)}
      />
      <input
        type='text'
        value={link}
        onChange={(e)=>setLink(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}
