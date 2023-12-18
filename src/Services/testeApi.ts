import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const testeApi = createApi({
  reducerPath : 'testeApi',
  baseQuery : fetchBaseQuery({baseUrl: process.env.EXPO_PUBLIC_BASE_URL}),
  tagTypes: ['teste'],
  endpoints: (build) =>({
    getCharacter: build.query({
      query: () => '/character',
      providesTags : ['teste'],
      transformResponse(response:any ,meta ,arg){
        //console.log('Resposta',meta.response )
        return response
      }
    })
  })

})

export const UsetesteApi = testeApi
export const { useLazyGetCharacterQuery } = testeApi