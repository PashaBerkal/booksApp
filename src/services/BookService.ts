
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { BookRequestParams, BookResponseParams, SpecificBookRequestParams, IBook } from "../models/IBook"
import { MAX_RESULTS } from "../constants/constants"

const key = 'AIzaSyDAaOGjPDRz9ICeM2RbMFcmI63XkfnGmyw'


export const bookAPI = createApi({
    reducerPath: 'bookAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://www.googleapis.com/books/v1`
    }),
    endpoints: (build) => ({
        fetchDefaultBooks: build.query<BookResponseParams, BookRequestParams>({
            query: ({title, startIndex, selectedSortOption, category }) => {
                let subject = ''
                category === 'all' ? subject = '' : subject = `+subject:${category}`
            return {
                url: `volumes?maxResults=${MAX_RESULTS}&q=intitle:${title + subject}&orderBy=${selectedSortOption}&startIndex=${startIndex}&key=${key}`,                
            }
            }}),
        fetchtSpecificBook: build.query<IBook, SpecificBookRequestParams>({
            query: ({id}) => ({
                url: `volumes/${id?.slice(1)}?key=${key}`,                
            })
        }),
    })
})