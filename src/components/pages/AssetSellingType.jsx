import React from 'react'
import Header from '../header'
import PageLink from './PagesLink'

const AssetSellingType = () => {
  return (
    <>
      <div className='wrapper overflow-hidden'>
        <div className='container-fluid'>
          <Header />
          <section className='pt-5'>
            <div className='container-fluid p-0 mx-xl-5 ps-lg-3 ps-xl-5'>
              <div className='row'>
                <PageLink />
              </div>
            </div>
          </section>
          <footer></footer>
        </div>
      </div>
    </>
  )
}

export default AssetSellingType
