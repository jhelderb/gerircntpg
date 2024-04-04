import {useState, useEffect} from 'react'
import axios from 'axios'

function mapResponse(response) {
    return response.data.map(cnt => ({
        id: cnt.id,
        nm_conta: cnt.nm_conta,
        vl_conta: cnt.vl_conta,
        dt_venci: cnt.dt_venci,
        tx_juros: cnt.tx_juros,
        dt_pagam: cnt.dt_pagam,
    }))
}

function mapError(error) {    
    return {
        message: error.message,
    }
}

function fetchcontasCall(onSuccess, onError) {
    axios.get('http://localhost:8080/contas/listacontas')
        .then(response => onSuccess(mapResponse(response)))
        .catch(error => {
            onError(mapError(error));
        });
}

export default function useFetchcontas() {
    const [contas, setcontas] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchcontas = () => {
        setLoading(true)

        const onSuccess = (contas) => {
            setLoading(false)
            setcontas(contas)
            setError(null)
        }

        const onError = (error) => {
            setLoading(false)
            setError(error)
            setcontas([])
        }

        fetchcontasCall(onSuccess, onError)
    }

    useEffect(() => fetchcontas(), [])

    return [loading, contas, error]
}
