import React, { useState } from 'react'
import Header from '../header'
import PageLink from './PagesLink'
import Select from 'react-select'
import { useLocation } from 'react-router-dom'

export default function AuditLog() {
  const styles = {
    container: base => ({
      ...base,
      flex: 1
    })
  };

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
                          <h4 className='fw-bold m-0'>
                            Audit Log/Activity Trail
                          </h4>
                        </div>
                      </div>
                      <hr />
                      <div className='row mt-4'>
                        <div className='col'>
                          <p className='text-secondary m-0'>Username</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Action </p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>
                            Choose Data Range
                          </p>
                        </div>
                      </div>
                      <div className='row mt-4'>
                        <div className='col'>
                          <Select
                            className=' form-control-sm'
                            placeholder='Filter by user'
                            aria-label='Default select example'
                          />
                        </div>
                        <div className='col form-group col-4'>
                          <Select
                          styles={styles}

                            placeholder='Filter by user'
                            aria-label='Default select example'
                          />
                        </div>

                        <div className='col '>
                          <div className='input-group ps-xl-2'>
                            <input
                              type='date'
                              className='form-control'
                              name='bid_deadline'
                              id='bid_deadline'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mt-4'>
                      <div className='col'>
                        <p className=' fw-bold m-0'>User Id</p>
                      </div>
                      <div className='col'>
                        <p className=' fw-bold m-0'>User Name </p>
                      </div>
                      <div className='col'>
                        <p className=' fw-bold m-0'>Date and Time</p>
                      </div>
                      <div className='col'>
                        <p className=' fw-bold m-0'>Action</p>
                      </div>
                    </div>
                    <hr />
                    <div className='row mt-4'>
                      <div className='col'>
                        <p className=' m-0'>2375</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Anshul Rawat</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>28/10/2022</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Login</p>
                      </div>
                    </div>
                    <hr />

                    <div className='row mt-4'>
                      <div className='col'>
                        <p className=' m-0'>2375</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Anshul Rawat</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>28/10/2022</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Login</p>
                      </div>
                    </div>
                    <hr />

                    <div className='row mt-4'>
                      <div className='col'>
                        <p className=' m-0'>2375</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Anshul Rawat</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>28/10/2022</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Login</p>
                      </div>
                    </div>
                    <hr />

                    <div className='row mt-4'>
                      <div className='col'>
                        <p className=' m-0'>2375</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Anshul Rawat</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>28/10/2022</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Login</p>
                      </div>
                    </div>
                    <hr />

                    <div className='row mt-4'>
                      <div className='col'>
                        <p className=' m-0'>2375</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Anshul Rawat</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>28/10/2022</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Login</p>
                      </div>
                    </div>
                    <hr />

                    <div className='row mt-4'>
                      <div className='col'>
                        <p className=' m-0'>2375</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Anshul Rawat</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>28/10/2022</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Login</p>
                      </div>
                    </div>
                    <hr />

                    <div className='row mt-4'>
                      <div className='col'>
                        <p className=' m-0'>2375</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Anshul Rawat</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>28/10/2022</p>
                      </div>
                      <div className='col'>
                        <p className=' m-0'>Login</p>
                      </div>
                    </div>
                    <hr />
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
