import { makeRequest } from 'service/makeRequest'
import { RequestEnum } from 'types'

const url = 'example.com'

export const getWBlist = async (id: string) => {
    const { data } = await makeRequest({
        url: `${url}/${id}`,
        method: RequestEnum.GET,
    })

    return data
}
