// ** Axios Imports
import axios from 'axios'

//** Sweet Alerts Imports
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const errorNotice = (response) => {
  if (!response) { return }
  return MySwal.fire({
    title: `Error ${!response ? 'Unknown' : response.status}!`,
    text: `${!response ? 'An unknown error has occurred' : response.statusText}`,
    icon: 'error',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  })
} 

// ** Set api Base URL by env variable

const url = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  } else {
    return process.env.REACT_APP_API_URL
  }
} 
axios.defaults.baseURL = url()

//Item Fetch Requests

export const getItem = (...args) => new Promise((resolve, reject) => {
  return axios.get(`/api/items/${args[0]}`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

export const getRecipeType = (...args) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipe_types/${args[0]}`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

//Recipe Fetch Requests

export const getAllRecipeTypes = (...args) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipe_types`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

export const getRecipesInHandler = (id, offset = 0) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipes/recipe_types/${id}`, {params: {offset: offset}})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

export const getRecipesByItem = (recipe_type_id, item_id, offset = 0) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipes/items/${item_id}/recipe_types/${recipe_type_id}`, {params: {offset: offset}})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

export const getItemRecipeData = (item_id) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipes/items/${item_id}`)
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})