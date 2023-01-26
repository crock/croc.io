import React, { useState } from 'react';
import axios from 'axios'

const CSRDetector = () => {
    const [data, setData] = useState(undefined)
    const [url, setUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        // detect if url is valid
        const isValid = /^(http|https):\/\/[^ "]+$/.test(url)

        const properUrl = isValid ? url : `https://${url}`
        
        if (properUrl) {
            const response = await axios({
                method: 'POST',
                url: '/api/csr-detector',
                data: {
                    url: properUrl
                }
            })

            if (response.status === 200) {
                if (response.data) {
                    setData(response.data)
                }
            }
                
        }
    }

    return (
        <>
            <h1 className="font-black text-3xl mb-4">CSR / SSR Detector</h1>
            <p className="font-light text-lg">
            Intelligently detect whether any given site uses client-side or server-side rendering.
            </p>
            <div className="mt-4">
                <form>
                    <input onChange={e => setUrl(e.target.value)} type="text" className="w-full text-black form-input" placeholder="https://example.com" />
                    <button onClick={handleSubmit} className="mt-4 py-2 px-3 font-semibold text-white bg-primary hover:bg-primary-light text-sm">Detect</button>
                </form>

                <div className="mt-4">
                    { data === 'CSR' && <p className="text-green-500">This site uses client-side rendering.</p> }
                    { data === 'SSR' && <p className="text-red-500">This site uses server-side rendering.</p> }
                    { data === 'Unknown' && <p className="text-yellow-500">I&apos;m not too sure about this site, but it likely uses server-side rendering.</p> }
                </div>
            </div>
        </>
    )
}

export const Head = () => {

    return (
      <>
        <body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
        <title>CSR Detector | Croc&apos;s Tools</title>
        <meta name="description" content="Intelligently detect whether any given site uses client-side or server-side rendering." />
      </>
    )
}
  

export default CSRDetector