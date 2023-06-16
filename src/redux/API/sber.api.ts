import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFormData} from "../../interfaces/FormData.interface";

export const sberApi = createApi({
    reducerPath: 'sberApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.sbercloud.ru/content/v1/'}),
    endpoints: build => ({
        postFormData: build.mutation<IFormData, IFormData>({
            query: (body) => ({
                url: 'bootcamp/frontend',
                method: 'POST',
                body
            })
        })
    })
})
export const {usePostFormDataMutation} = sberApi