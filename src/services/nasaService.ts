import axios from 'axios'

const URL = 'https://api.nasa.gov/planetary/'
const api_key = 'H5a8WjbqHfH1D3CPoiswnEXoqtkgwtfS42XF0fmh'

export interface GetParams {
  page: number
}

export class NasaService {
  instance = axios.create({ baseURL: URL })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getApod = async (): Promise<any> => await this.instance.get('apod', { params: { api_key, count: 1 } })
}
