import { useState, useEffect } from "react";
import Head from 'next/head'
import HomeComponent from '../src/components/home/home-component'
import Image from 'next/image'
import Link from 'next/link'
import formatCityName from './helpers/formatCityName'
import styles from '@/styles/Home.module.scss'

export default function Home({ cities }) {

  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomeComponent cities={cities} />
    </>
  )
}

export async function getStaticProps() {
    const { cities } = await import('/data/data.json')
    return {
        props: {
            cities
        }
    }
}
