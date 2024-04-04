import {useNavigate} from 'react-router-dom'

import { ListGroup, Row, Col } from 'react-bootstrap';

import AppBar from '../commons/AppBar'
import Error from '../commons/Error'
import Loading from '../commons/Loading'
import NoResults from '../commons/NoResults'

import useFetchContas from './useFetchContas'

function Conta({id, nm_conta, vl_conta, dt_venci, tx_juros, dt_pagam, onClick}) {
    return (
       <ListGroup.Item action onClick={() => onClick(id)}>
            <Row>
            <Col xs={2}>
              <strong>{id}</strong>
            </Col>
            <Col xs={2}>
              <p>{nm_conta}</p>
            </Col>
            <Col xs={2}>
              <p>{vl_conta}</p>
            </Col>
            <Col xs={2}>
              <p>{dt_venci}</p>
            </Col>
            <Col xs={2}>
              <p>{tx_juros}</p>
            </Col>
            <Col xs={2}>
              <p>{dt_pagam}</p>
            </Col>
            </Row>
        </ListGroup.Item>
    )
}

function CntListScreen() {
    const navigate = useNavigate()
    const [loading, contas, error] = useFetchContas()
    return <CntList
        loading={loading}
        contas={contas}
        error={error}
        onItemClick={id => navigate(id)}
    />
}

function CntList({loading, contas, error, onItemClick}) {
    const List = ({contas, onItemClick}) => (
        contas.length === 0 ? <NoResults/> : <ListGroup>
    <ListGroup.Item variant="primary">
        <Row>
          <Col xs={2}><strong>Id</strong></Col>
          <Col xs={2}><strong>Conta</strong></Col>
          <Col xs={2}><strong>Valor</strong></Col>
          <Col xs={2}><strong>Vencimento</strong></Col>
          <Col xs={2}><strong>Juros</strong></Col>
          <Col xs={2}><strong>Pagamento</strong></Col>
        </Row>
    </ListGroup.Item>
            {
                contas.map(conta => <Conta
                    id={conta.id}
                    nm_conta = {conta.nm_conta}
                    vl_conta = {conta.vl_conta}
                    dt_venci = {conta.dt_venci}
                    tx_juros = {conta.tx_juros}
                    dt_pagam = {conta.dt_pagam}
                    onClick={onItemClick}
                />)
            }
        </ListGroup>
    )

    const Body = () => (error ? <Error message={error.message}/> : <List contas={contas} onItemClick={onItemClick}/>)

    return (
        <div>
            <AppBar/>
            {loading ? <Loading/> : <Body/>}
        </div>
    )
}

export {
    CntList,
    CntListScreen
}
