import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { createDonates, deleteDonates, getAllDonates, updateDonates } from '../../../services/donateConfig';
import { Routes, Route } from 'react-router-dom';
import DonateList from '../DonateList/DonateList';
import DonateNew from '../DonateNew/DonateNew';
import DonateEdit from '../DonateEdit/DonateEdit';

export default function DonaitContainer(props) {

  const [donates, setDonates] = useState([])
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDonates = async () => {
      const donates = await getAllDonates()
      setDonates(donates)
    }
    fetchDonates()
  }, [toggle])

  const handleNewDonate = async (donateData) => {
    await createDonates( donateData)
    setToggle(prevToggle => !prevToggle)
    navigate('/donate')
  }

  const handleEdit = async (id, donateData) => {
    await updateDonates(id, donateData)
    setToggle(prevToggle => !prevToggle)
    navigate(`/donate/`)
  }

  const handleDelete = async (id) => {
    await deleteDonates(id)
    setToggle(prevToggle => !prevToggle)
    navigate('/donate')
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<DonateList donates={donates} handleDelete={handleDelete}  currentUser={props.currentUser} />} />
        <Route path='/newFund' element={<DonateNew handleNewDonate={handleNewDonate} currentUser={props.currentUser}/>} />
        <Route path='/:id/edit' element={<DonateEdit handleEdit={handleEdit} donates={donates} />} />
      </Routes>
    </div>
  )
}
