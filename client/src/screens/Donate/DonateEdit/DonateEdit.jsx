import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export default function DonateEdit(props) {
  const [name, setName] = useState('')
  const [desciption, setDesciption] = useState('')
  const [logo_url, setLogo_url] = useState('')
  const [link, setLink] = useState('')

  const {id} = useParams()

  useEffect(() => {
    const foundDonate = props.donates.find(donate => {
      return donate.id === parseInt(id)
    })
    if (foundDonate) {
      setName(foundDonate.name)
      setDesciption(foundDonate.desciption)
      setLogo_url(foundDonate.logo_url)
      setLink(foundDonate.link)
    }
  }, [id, props.donates ])

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const donate = {
        name, desciption, logo_url, link
      }
      props.handleEdit(id, donate)
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
      <button>Edit</button>
    </form>
  )
}
