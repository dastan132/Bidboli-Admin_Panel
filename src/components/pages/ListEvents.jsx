import React from 'react'
import Header from '../header'
import PageLink from './PagesLink'
// import Graph from '../../assets/images/Graph.png'
// import Graph2 from '../../assets/images/Graph2.png'
// import GroupTable from '../../assets/images/GroupTable.png'

export function ListEvents() {
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
                      <br />
                      <div className='row '>
                        <div className='col-12 col-md-6 col-xl-6 text-center text-md-start text-xl-start mt-md-2'>
                          <h4 className='fw-bold m-0'>List of Events</h4>
                        </div>
                        <div className='col-12 col-md-6 col-xl-6 text-center text-md-end text-xl-end my-2 px-3'>
                          <button className='btn btn-sm btn-secondary w-xl-75 h-100'>
                            <p className='m-0 fw-normal'>
                              + Create a new event
                            </p>
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className='row mt-4'>
                        <div className='col'>
                          <p className='text-secondary m-0'>Events</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Created on</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Auction Data</p>
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
                          {/* <div className='row'> */}
                          <button className='sideicon'>
                            <i className='ps-3 fa-solid fa-eye'></i>
                            <i className=' ps-3 fa-solid fa-arrow-down'></i>
                            <i className=' ps-3 fa-solid fa-trash'></i>
                          </button>
                          {/* </div> */}
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
                          <button className='sideicon'>
                            <i className='ps-3 fa-solid fa-eye'></i>
                            <i className=' ps-3 fa-solid fa-arrow-down'></i>
                            <i className=' ps-3 fa-solid fa-trash'></i>
                          </button>
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
                          <button className='sideicon'>
                            <i className='ps-3 fa-solid fa-eye'></i>
                            <i className=' ps-3 fa-solid fa-arrow-down'></i>
                            <i className=' ps-3 fa-solid fa-trash'></i>
                          </button>
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
