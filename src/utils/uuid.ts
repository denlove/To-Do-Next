import { v4 as uuid } from 'uuid'

const uuidGenerate = (): string => {
    return uuid()
}

export { uuidGenerate }
