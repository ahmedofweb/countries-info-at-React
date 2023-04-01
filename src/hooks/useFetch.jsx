import { useState, useEffect} from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setIsPending(true)
            try {
               const req = await fetch(url)
               if (!req.ok) {
                throw new Error(req.statusText)
               }
               const data = await req.json()
               setData(data)
               setIsPending(false)
            } catch (err) {
                console.log(err.message)
                setIsPending(false)
                setError(err.message)
            }
        }
        getData()
    }, [url])

    return {data, error , isPending}
}

export { useFetch }