import axios from 'axios'

export const apimovies= axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

apimovies.interceptors.request.use(req=> {
     req.headers['Authorization']=`Bearer ${token}`
     return req
})

const token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmJlMTY2MTRmMTFiOGM0OTBmNjczMzNhMDk4ZDM2MSIsInN1YiI6IjVkN2Y4YzcxZjA2NDdjNzYyOTlkOTA0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.50EI4M3V9ztGkVfmAU1Nibko3b0zbH3afImUMgJS0DA'