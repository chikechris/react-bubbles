import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bubbles from './Bubbles';
import ColorList from './ColorList';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import Button from './FormStyle';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)

      .then(res => {
        console.log(res.data);
        setColorList([...res.data]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Button>
        <Link to='/'>
          <button>Return To Main Page </button>
        </Link>
      </Button>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};
export default BubblePage;
