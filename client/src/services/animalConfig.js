import { api } from './apiConfig'

export const getAllAnimals = async () => {
  const resp = await api.get('/animals')
  return resp.data
}

export const getOneAnimals = async (animal_id) => {
  const resp = await api.get(`/animals/${animal_id}`)
  return resp.data
}

export const createAnimals = async (animalData) => {
  const resp = await api.post('/animals', {animal: animalData})
  return resp.data
}

export const updateAnimals = async (animal_id, animalData) => {
  const resp = await api.put(`/animals/${animal_id}`, {animal: animalData})
  return resp.data
}

export const deleteAnimals = async (animal_id) => {
  const resp = await api.delete(`/animals/${animal_id}`)
  return resp.data
}