import {Product1,Product2,Product3} from 'public/img/image';
import {Blog1, Blog2,Blog3,Blog4,Blog5} from 'public/img/image';
import { CollectionImg7, CollectionImg6, CollectionImg5, UserImg } from 'public/img/image';


{/*DECOUVRE NOS BLOG SECTION HOME PAGE*/}
export const blogs = [
  {
    imgSrc: CollectionImg7,
    Catégorie: 'Catégorie',
    title: 'Porte Traditionnelle 101',
    description:
      'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,
    userImgSrc: UserImg,
    userName: 'User2',
    date: '2023-07-10',
  },
  {
    imgSrc: CollectionImg6,
    Catégorie: 'Catégorie 2',
    title: 'Porte Traditionnelle 102',
    description:
      'Explorez les nouvelles tendances en cuisine moderne et découvrez des recettes innovantes qui émerveilleront vos invités.',
    likes: 12,
    comments: 22,
    userImgSrc: UserImg,
    userName: 'User3',
    date: '2023-07-11',
  },
  {
    imgSrc: CollectionImg5,
    Catégorie: 'Catégorie 3',
    title: 'Porte Traditionnelle 103',
    description:
      'Un voyage fascinant à travers les âges, explorez les événements marquants qui ont façonné notre monde.',
    likes: 15,
    comments: 30,
    userImgSrc: UserImg,
    userName: 'User4',
    date: '2023-07-12',
  },
];


{/*Dernier Blog IN Home Page*/}
export const posts = [
    {
      blogimg1: Blog1,
      blogimg2: Blog2,
      blogimg3: Blog3,
      blogimg4: Blog4,
      blogimg5: Blog5,
      userImgSrc: '/img/PNG/usreimg.png',
      userName: 'User2',
      date: '2023-07-10', 
      title: 'Porte Traditionnelle 101',
      description:
        'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
      likes: 6,
      comments: 18,
    },
   
  ];

  {/*All Peoduct IN Product Page*/}
  export const products = [
    {
        imgSrc: Product1,
        title: 'SIDI BOUSAID DOOR',
        description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
        likes: 6,
        comments: 18,
        savoir: 'SAVOIR PLUS',
    },
    {
        imgSrc: Product2,
        title: 'RADIAS',
        description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
        likes: 6,
        comments: 18,
        savoir: 'SAVOIR PLUS',
    },
    {
        imgSrc: Product3,
        title: 'TUNIS',
        description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
        likes: 6,
        comments: 18,
        savoir: 'SAVOIR PLUS',
    },
];