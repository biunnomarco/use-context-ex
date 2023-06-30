import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react'
import LatestRelease from './LatestRelease/LatestRelease';
import { useContext } from 'react';
import BookState from '../../Context/BookContext';


const MyBody = () => {


  const allBooks = useContext(BookState)
  console.log(allBooks.genre, 'body')

  return (
    <Container fluid>
    <Row>
      <Col className='col-8'>
        <LatestRelease/>
      </Col>
      <Col className='col-4'>1 of 2</Col>
    </Row>
  </Container>
  )
}

export default MyBody