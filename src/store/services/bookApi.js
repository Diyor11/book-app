import { keySignGenerator } from '../../utils'
import { api } from './api'

export const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooksSearch: build.query({
      query: ({serchText, user}) => ({
        url: `books/${serchText}`,
        method: "GET",
        headers: keySignGenerator(user, `GET/books/${serchText}`),
      }),
      transformResponse: (res) => {
        return res.data
      },
    }),
    getBooks: build.query({
      query: (user) => {
        return {
          url: `books`,
          method: "GET",
          headers: keySignGenerator(user, "GET/books"),
        };
      },
      transformResponse: (res) => {
        return res.data
      },
      providesTags: ["books"],
    }),
    createBook: build.mutation({
      query: (body, user) => ({
        url: `books`,
        method: "POST",
        body,
        headers: keySignGenerator(user, "POST/books", body)
      }),
      invalidatesTags: ["books"]
    }),
    editBook: build.mutation({
      query: (body) => ({
        url: `books`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["books"]
    }),
    deleteBook: build.mutation({
      query: (data) => {
        console.log(keySignGenerator(data.user, `DELETE/books/${data.id}`), data.user)
        return {
          url: `books/${data.id}`,
          method: "DELETE",
          headers: keySignGenerator(data.user, `DELETE/books/${data.id}`)
        }
      },
      invalidatesTags: ["books"]
    }),
  })
})

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetBooksSearchQuery,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookApi