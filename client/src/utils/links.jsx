import React from 'react';
//import { IoBarChartSharp } from 'react-icons/io5';
import { GiDogHouse } from 'react-icons/gi';
import { FaDog } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { BsPeople } from 'react-icons/bs';
import { BsImages } from 'react-icons/bs';

const links = [
  {
    text: 'profile',
    path: '.',
    icon: <ImProfile />,
    adminOnly: false
  },
  {
    text: 'litters',
    path: 'litters',
    icon: <GiDogHouse />,
    adminOnly: true
  },
  {
    text: 'puppies',
    path: 'litters/puppies',
    icon: <FaDog />,
    adminOnly: true
  },
  {
    text: 'clients',
    path: 'clients',
    icon: <BsPeople />,
    adminOnly: true
  },
  {
    text: 'Gallery Admin',
    path: 'gallery-admin',
    icon: <BsImages />,
    adminOnly: true
  }
  // {
  //   text: 'stats',
  //   path: 'stats',
  //   icon: <IoBarChartSharp />,
  //   adminOnly: true
  // }
];

export default links;
