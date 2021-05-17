import { Apod } from 'models'

export class LocalStorageService {
  getApods = (): Apod[] => {
    const apodsString = window.localStorage.getItem('apods')
    return apodsString ? (JSON.parse(apodsString) as Apod[]) : ([] as Apod[])
  }

  saveApod = (apod: Apod): void => {
    const apods = this.getApods()
    apods.push(apod)
    window.localStorage.setItem('apods', JSON.stringify(apods))
  }

  getSeenApods = (): Apod[] => {
    const apodsString = window.localStorage.getItem('seenApods')
    return apodsString ? (JSON.parse(apodsString) as Apod[]) : ([] as Apod[])
  }

  addToSeenApods = (apod: Apod): void => {
    const seenApods = this.getSeenApods()
    seenApods.push(apod)
    window.localStorage.setItem('seenApods', JSON.stringify(seenApods))
  }

  wasApodSeen = (apod: Apod): boolean => {
    const seenApods = this.getSeenApods()
    const seenApod = seenApods.find((seenApod) => seenApod.title === apod.title)
    return seenApod ? true : false
  }
}
