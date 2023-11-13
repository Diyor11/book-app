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
        res.data = res.data.map(item => item?.book)
        return res.data
      },
      providesTags: ["books"],
    }),
    createBook: build.mutation({
      query: ({values, user}) => ({
        url: `books`,
        method: "POST",
        body: values,
        headers: keySignGenerator(user, "POST/books", values)
      }),
      invalidatesTags: ["books"]
    }),
    editBook: build.mutation({
      query: ({values: {id, ...values}, user}) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: {book: values, status: 1},
        headers: keySignGenerator(user, `PATCH/books/${id}`, {book: values, status: 1})
      }),
      invalidatesTags: ["books"]
    }),
    deleteBook: build.mutation({
      query: (data) => {
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