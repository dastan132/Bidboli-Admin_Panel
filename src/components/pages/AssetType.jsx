import React from 'react'
import PageLink from './PagesLink'
import Header from '../header'

export const AssetType = () => {
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
                    <br />
                    <div className='bg-lite px-xl-4 px-3 pb-4 '>
                      <div className='row '>
                        <div className='col-12 col-md-6 col-xl-6 text-center text-md-start text-xl-start mt-md-2'>
                          <h4 className='fw-bold m-0'>List of Asset Type</h4>
                        </div>
                          <div className='col-12 col-md-6 col-xl-6 text-center text-md-end text-xl-end my-2 px-3'>
                          <button className='btn btn-sm btn-secondary w-xl-75 h-100'>
                            <p className='m-0 fw-normal'>
                              + Add New
                            </p>
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className='row mt-4'>
                        <div className='col'>
                          <p className='text-secondary m-0'>Name</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Active</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Create Date</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Action</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Action</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
