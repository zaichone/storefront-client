import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HeroHomepage from '../src/components/hero/HeroHomepage';

export default function Home() {
  return (
    <div>
      <HeroHomepage />
    </div>
  )
}
