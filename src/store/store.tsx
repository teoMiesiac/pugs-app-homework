import React, { createContext } from 'react'
import { ApodStore } from './apodStore'

export interface IStore {
  ApodStore: ApodStore
}

export const store: IStore = {
  ApodStore: new ApodStore(),
}

export const StoreContext = createContext(store)

interface Props {
  children: React.ReactNode
}

export const DataStoreProvider = ({ children }: Props): JSX.Element => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
