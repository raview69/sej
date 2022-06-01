import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const MyPagination = styled(ReactPaginate).attrs({
    activeClassName: 'active',
})`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    border: black 1px solid;
    border-radius: 4px;
    li a {
        width: 50px;
        padding: 0.1rem 0.5rem;
        border-left: black 0.5px solid;
        border-rigt: black 0.5px solid;
        cursor: pointer;
        color: black;
    }
    li.previous a {
        width: 50px;
        cursor: pointer;
        border-left: none;
    }
    ,
    li.next a {
        cursor: pointer;
    }
    ,
    li.break a {
    }
    li.active a {
        background-color: black;
        border: black 1px solid;
        color: white;
        min-width: 32px;
    }
    li.disabled a {
        color: grey;
    }
    li.disable,
    li.disabled a {
        cursor: default;
    }
`
