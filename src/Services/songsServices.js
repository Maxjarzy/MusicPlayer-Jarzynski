import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { base_url } from '../Database/dataBase'


export const songsApi = createApi({
    reducerPath: "songsApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getGenres: builder.query({
            query: () => 'genres.json',
        }),
        getGenreImage: builder.query({
            query: (genre) => `images.json?orderBy="genre"&equalTo="${genre}"`,
            transformResponse: (response) => {
                const imageTransformed = Object.values(response)
                return(imageTransformed[0].image)
            }
        })
    }),
});

export const {useGetGenresQuery, useGetGenreImageQuery} = songsApi;