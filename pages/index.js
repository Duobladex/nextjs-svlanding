import Head from 'next/head'
import Layout from '../Components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import { title } from 'process'
import CardsBox from '../Components/CardsBox'

const dummy = [
  {
    title: 'GoShareLah',
    logo: <Image src='/../public/images/gosharelah.png' width={127} height={21} />,
    content: 'Want influencers to create the content and promote your brand, product or service?',
    lists: ['KOL self service : 0%',
      'KOL VIP service : 10% (incl simple video editing & caption writing)',
      "Brands VIP service : 30 - 45% (depends on service). Refer to the 'VIP Service for Brands' below"
    ]
  },
  {
    title: 'Sushivid',
    logo: <Image src='/../public/images/SushiVid Logo 1.png' width={60} height={21} />,
    content: 'Want influencers to create the content and promote your brand, product or service?',
    lists: ['KOL self service : 0%',
      'KOL VIP service : 10% (incl simple video editing & caption writing)',
      "Brands VIP service : 30 - 45% (depends on service). Refer to the 'VIP Service for Brands' below"
    ]
  },
  {
    title: 'confirm plus chop',
    logo: <Image src='/../public/images/Asset 7 1.png' height={21} width={127} />,
    content: 'Want influencers to create the content and promote your brand, product or service?',
    lists: ['KOL self service : 0%',
      'KOL VIP service : 10% (incl simple video editing & caption writing)',
      "Brands VIP service : 30 - 45% (depends on service). Refer to the 'VIP Service for Brands' below"
    ]
  }
]

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <CardsBox storedData={dummy} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
