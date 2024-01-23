import React from 'react'
import PageLink from './PagesLink'
import Header from '../header'

export default function PriceRange() {
  return (
    <>
      <div className='wrapper overflow-hidden'>
        <div className='container-fluid'>
          <Header />
          <section className='pt-5'>
            <div className='container-fluid p-0 mx-xl-5 ps-lg-3 ps-xl-5'>
              <div className='row'>
                <PageLink />

                <div className='col-12 col-md-12 col-lg-9 col-xl-9 mx-xl-3 px-lg-3 px-2'>
                  <div className='bg-lite px-xl-4 px-3 pb-4'>
                    <div className='bg-lite px-xl-4 px-3 pb-4 '>

                    </div>
                    </div>
                    </div>
              </div>
            </div>
          </section>
          <footer></footer>
        </div>
      </div>
    </>
  )
}
