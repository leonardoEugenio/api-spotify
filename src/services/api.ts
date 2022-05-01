import axius from 'axios'
// import { useSession } from 'next-auth/react'

export const apiSpotify = axius.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {'Content-Type': 'application/json'}
})

export const apiLocalSpotify = 
axius.create({
    baseURL: `http://localhost:3000/api/spotify/`,
})