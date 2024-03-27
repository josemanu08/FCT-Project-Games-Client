import { Subject } from 'rxjs'

export class DataSubject {
  subject = new Subject()

  getSubject () {
    return this.subject.asObservable()
  }

  setSubject (data) {
    this.subject.next(data)
  }
}
