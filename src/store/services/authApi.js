import { keySignGenerator } from '../../utils'
import { api } from './api'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (credentials) => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    signIn: build.mutation({
      query: (user) => ({
        url: "myself",
        method: "GET",
        headers: keySignGenerator(user, "GET/myself")
      }),
      providesTags: ["user-info"]
    })
  })
})

export const {
  useSignUpMutation,
  useSignInMutation
} = authApi