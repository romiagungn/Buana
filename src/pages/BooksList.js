import React, { useEffect, useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getBranch, handlePush } from '../redux/Action';
import { useHistory } from 'react-router-dom';
import ListigPageComponent from "../components/ListingPage";
import debounce from 'lodash.debounce';

const BooksList = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const isLogin = localStorage.getItem("auth-token")
  const [loading, setloading] = useState(true);
  const [name, setName] = useState("");
  const [currPage, setCurrPage] = useState(0);
  const [noData, setNoData] = useState(false);
  const branch_data = useSelector((state) => state.ReduxData.branch)

  useEffect(() => {
    setTimeout(() => {
        setloading(false);
    }, 2000);
  }, [])

  const nextPage = () => {
    dispatch(getBranch(currPage + 1))
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }

  const handleLogout = () => {
    localStorage.removeItem("auth-token")
    history.push('/')
  }

  const onChangeDescription = (e) => {
    setName(e.target.value)
  }
  
  useEffect(() => {
    dispatch(getBranch(currPage))
  }, [dispatch, currPage])

  const handleFilterSearch = () => {
    
  }

  const handleClearFilter = () => {
    const currPage = 0;
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
    setName("");
    setNoData(false);
    setCurrPage(currPage);
    dispatch(getBranch(currPage));
  }

  useEffect(() => {
    let pagesCounter = 2;
    window.onscroll = debounce(() => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      dispatch(getBranch(pagesCounter))
        pagesCounter++ 
        if(pagesCounter >= 7){
          setNoData(true);
          setTimeout(() => {
            pagesCounter = 0  
            dispatch(getBranch(pagesCounter))
            setNoData(false)
        }, 2000)
        } else {
          setNoData(false)
        }
      }
    }, 100);
  },[dispatch])

  const filtered = !name
    ? branch_data
    : branch_data.filter((person) =>
        person.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      {
        isLogin ? 
            loading
              ?
            <Loading/>
          :
            <>
              <div>
                <Container>
                  <Row>
                    <Col xs={12} md={4}>
                      <Form.Group controlId="name">
                        <Form.Control
                          className="input-control"
                          type="text"
                          name="bookname"
                          placeholder="Enter Name"
                          value={name}
                          onChange={onChangeDescription}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6} style={{paddingTop : 5, paddingBottom : 10}}>
                        <Button variant="primary" onClick={handleFilterSearch}>
                          Submit
                        </Button>
                        <Button variant="outline-secondary" onClick={handleClearFilter}>
                          Clear
                        </Button>
                        <Button variant="outline-dark" onClick={handleLogout}>
                          Log Out
                        </Button>
                    </Col>
                  </Row>
                </Container>
                  <ListigPageComponent
                    dataList={filtered}
                    noData={noData}
                  />
                  <Button
                    className="mt-4"
                    onClick={nextPage}
                  >
                    Load more
                  </Button>
              </div>
            </> :
          handlePush('/')
        }
    </>
  );
};

export default BooksList;
