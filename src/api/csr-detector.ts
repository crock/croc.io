import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'
import cheerio from 'cheerio'

const handler = async (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => {
  
    const { url } = req.body
    const { data, status } = await axios.get(url)

    if (status !== 200) {
        res.status(status).send('Error')
    }

    const $ = cheerio.load(data)


    const reactRoot = $('#root')
    const gatsbyRoot = $('#___gatsby')
    const vueRoot = $('#app')
    const nextRoot = $('#__next')

    if (reactRoot.length || vueRoot.length) {
        res.status(200).send('CSR')
    } else if (gatsbyRoot.length) {
        res.status(200).send('SSR')
    } else if (nextRoot.length) {
        res.status(200).send('SSR')
    } else {
        res.status(200).send('Unknown')
    }
    
}

export default handler