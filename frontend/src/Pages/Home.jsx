import React from 'react'
import Banner from '../Components/Banner'
import CategorySection from '../components/CategorySection';
import ProductSection from '../components/ProductSection';
import CollectionSection from '../components/CollectionSection';
import Newsletter from '../components/Newsletter';   


function Home() {
  return (
    <div>
          <Banner />
      <CategorySection />
      <ProductSection />
      <CollectionSection />
      <Newsletter />


    </div>
  )
}

export default Home