import { api } from './apiConfig'

export const getAllDonates = async () => {
  const resp = await api.get('/donates')
  return resp.data
}

export const getOneDonates = async (donate_id) => {
  const resp = await api.get(`/donates/${donate_id}`)
  return resp.data
}

export const createDonates = async (donateData) => {
  const resp = await api.post('/donates', {donate: donateData})
  return resp.data
}

export const updateDonates = async (donate_id, donateData) => {
  const resp = await api.put(`/donates/${donate_id}`, {donate: donateData})
  return resp.data
}

export const deleteDonates = async (donate_id) => {
  const resp = await api.delete(`/donates/${donate_id}`)
  return resp.data
}