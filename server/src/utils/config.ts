import path from 'path'
import dotenv from 'dotenv'

const rawConfig = dotenv.config({
    path: path.resolve(__dirname, '../../../.env')
})

if (rawConfig.error) {
    throw rawConfig.error
}

const config = rawConfig.parsed

export default config