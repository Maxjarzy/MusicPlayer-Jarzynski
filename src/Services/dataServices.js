import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../Database/dataBase";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => "genres.json",
    }),
    getGenreImage: builder.query({
      query: (genre) => `images.json?orderBy="name"&equalTo="${genre}"`,
      transformResponse: (response) => {
        const imageTransformed = Object.values(response);
        return imageTransformed[0].image;
      },
    }),
    getSongsByGenre: builder.query({
      query: (genre) => `songs.json?orderBy="genre"&equalTo="${genre}"`,
      transformResponse: (response) => {
        const songsTransfored = Object.values(response);
        return songsTransfored;
      },
    }),
    getSongById: builder.query({
      query: (id) => `songs.json?orderBy="id"&equalTo=${id}`,
      transformResponse: (response) => {
        const songTransformed = Object.values(response);
        return songTransformed[0];
      },
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
    }),
    postPlaylist: builder.mutation({
      query: (order) => ({
        url: "playlists.json",
        method: "POST",
        body: order,
      }),
    }),
    deletePlaylist: builder.mutation({
      query: (id) => ({
        url: `playlists/${id}.json`,
        method: "DELETE",
      }),
    }),
    getPlaylistByUser: builder.query({
      query: (user) => `playlists.json?orderBy="user"&equalTo="${user}"`,
      transformResponse: (response) => {
        const playlistsWithIds = [];
        for (const playlistId in response) {
          if (response.hasOwnProperty(playlistId)) {
            const playlistWithId = { id: playlistId, ...response[playlistId] };
            playlistsWithIds.push(playlistWithId);
          }
        }
        return playlistsWithIds;
      },
    }),
    addSongToPlaylist: builder.mutation({
      query: ({ item, song }) => ({
        url: `playlists/${item.id}.json`,
        method: "PATCH",
        body: {
          playlist: item.playlist ? [...item.playlist, song]: [song] ,
          updateAt: Date().toLocaleString()
        },
      }),
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetGenreImageQuery,
  useGetSongsByGenreQuery,
  useGetSongByIdQuery,
  usePostPlaylistMutation,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetPlaylistByUserQuery,
  useDeletePlaylistMutation,
  useAddSongToPlaylistMutation,
} = dataApi;
