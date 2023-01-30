import { makeRequest } from 'service/makeRequest'
import { RequestEnum } from 'types'

const url = 'http://localhost:3005/store/api'

export const getWBlist = async () => {
    const { data } = await makeRequest({
        url: `${url}/stocks`,
        method: RequestEnum.GET,
    })

    return data
}
