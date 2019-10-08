import o from '../common'

export const categoryCreate = params => o.post(`category/create`, params)
export const categoryFind = params => o.get(`category`, params)
export const categoryFindById = id => o.get(`category/${id}`)
export const categoryFindByIdAndUpdate = (id, params) => o.put(`category/${id}`, params)
export const categoryDeleteById = id => o.delete(`category/${id}`)
