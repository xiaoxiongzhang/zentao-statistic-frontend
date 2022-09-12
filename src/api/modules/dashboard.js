import axios from '../axios'
import config from '@/config'

export const getCoverData = (params) => {
    return axios({
        url: `${config.baseUrl}/dashboard`,
        method: 'post',
        data: params
    })
}


