import {useState, useEffect} from 'react'
import axios from 'axios'

function mapResponse(response) {
    return response.data.map(cnt => ({
        id: cnt.nm_conta,
        avatarUrl: cnt.nm_conta,
        username: cnt.nm_conta,
        name: cnt.nm_conta ? cnt.nm_conta : cnt.nm_conta,
    }))
}

function mapError(error) {
    return {
        message: error.message,
    }
}

function fetchUsersCall(onSuccess, onError) {
    axios.get('http://localhost:8080/contas')
        .then(response => onSuccess(mapResponse(response)))
        .catch(error => onError(mapError(error)))
}

export default function useFetchUsers() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUsers = () => {
        setLoading(true)

        const onSuccess = (users) => {
            setLoading(false)
            setUsers(users)
            setError(null)
        }

        const onError = (error) => {
            setLoading(false)
            setError(error)
            setUsers([])
        }

        fetchUsersCall(onSuccess, onError)
    }

    useEffect(() => fetchUsers(), [])

    return [loading, users, error]
}
