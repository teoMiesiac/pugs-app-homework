import { action, makeObservable, observable, runInAction } from 'mobx'
import { Apod } from 'models'
import { NasaService, LocalStorageService } from 'services'

class ApodStore {
  nasaService: NasaService
  localStorageService: LocalStorageService
  apod = {} as Apod
  apods = [] as Apod[]
  loading = false

  constructor() {
    this.nasaService = new NasaService()
    this.localStorageService = new LocalStorageService()

    makeObservable(this, {
      apod: observable,
      apods: observable,
      loading: observable,
      updateApods: action,
    })
  }

  updateApods = (): void => {
    this.apods = this.localStorageService.getApods()
  }

  getApod = async (): Promise<void> => {
    runInAction(() => {
      this.loading = true
    })

    try {
      const data = await this.nasaService.getApod()
      const apod = data.data[0]
      if (this.localStorageService.wasApodSeen(apod)) {
        this.getApod()
      } else {
        this.localStorageService.addToSeenApods(apod)
        runInAction(() => {
          this.apod = apod
          this.loading = false
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  saveApod = (): void => {
    this.localStorageService.saveApod(this.apod)
    this.updateApods()
  }
}

export { ApodStore }
