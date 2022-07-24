import React from 'react'
import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'
import {useRouter} from 'next/router'
import ImageResults from '../components/ImageResults'

const Search = ({results}) => {
  const router = useRouter();
  // console.log(results);
  return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
        </Head>

        {/* search Header */}
        <SearchHeader />

        {/* search web & images result */}
        {router.query.searchType==='image'
        ?<ImageResults results={results} />
        :<SearchResults results={results} />
        }
        
    </div>
  )
}
 
export async function getServerSideProps(context){
  const startIndex = context.query.start||"1"
  const mData = false;
  const data = mData?"": await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && '&searchType=image'}&start=${startIndex}
  `).then((response)=>response.json())
  return {
    props: {
      results: data
    }
  }
}

export default Search
