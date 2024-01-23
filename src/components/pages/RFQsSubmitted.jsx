import React from 'react'
import Header from '../header'
import PageLink from './PagesLink'
export default function RFQsSubmitted() {
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
                          <h4 className='fw-bold m-0'>List of RFQs</h4>
                        </div>
                      </div>
                      <hr />
                      <div className='row mt-4'>
                        <div className='col'>
                          <p className='text-secondary m-0'>RFQs</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Requested on</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>
                            Services Provider
                          </p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Action</p>
                        </div>
                      </div>
                      <div className='row mt-4'>
                        <div className='col'>
                          <p className=' fw-bold m-0'>Event owinership Doc</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>28/08/2022 </p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>28/09/2022</p>
                        </div>
                        <div className='col'>
                          <button className='commanbtn'>
                            <p className=' fw-bold m-0'>Unpublish</p>
                          </button>
                          <span className='sideicon'>
                            <i className='ps-3 fa-solid fa-eye'></i>
                            <i className=" ps-3 fa-solid fa-arrow-down"></i>
                            <i className=' ps-3 fa-solid fa-trash'></i>
                          </span>
                        </div>
                      </div>
                      <div className='row mt-4'>
                        <div className='col'>
                          <p className=' fw-bold m-0'>Asset Insurance</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>28/08/2022 </p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>28/09/2022</p>
                        </div>
                        <div className='col'>
                          <button className='commanbtn'>
                            <p className=' fw-bold m-0'>Unpublish</p>
                          </button>
                          <span className='sideicon'>
                            <i className='ps-3 fa-solid fa-eye'></i>
                            <i className=" ps-3 fa-solid fa-arrow-down"></i>
                            <i className=' ps-3 fa-solid fa-trash'></i>
                          </span>
                        </div>
                      </div>
                      <div className='row mt-4'>
                        <div className='col'>
                          <p className=' fw-bold m-0'>Asset Bank Details</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>28/08/2022 </p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>28/09/2022</p>
                        </div>
                        <div className='col'>
                          <button className='commanbtn'>
                            <p className=' fw-bold m-0'>Unpublish</p>
                          </button>
                          <span className='sideicon'>
                            <i className='ps-3 fa-solid fa-eye'></i>
                            <i className=" ps-3 fa-solid fa-arrow-down"></i>
                            <i className=' ps-3 fa-solid fa-trash'></i>
                          </span>
                        </div>
                      </div>
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
