import { useState, useEffect } from "react"
import axios from "axios"
const useCustomHook = () => {
    const [res, setRes] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchdata = () => {
            axios
                .get("https://opentdb.com/api.php?amount=4")
                .then((res) => setRes(res.data.results))
                .catch((err) => setError(err))
                .finally(() => setLoading(false))
        }
        fetchdata()
    }, [])

    return { res, error, loading }
}
export default useCustomHook
