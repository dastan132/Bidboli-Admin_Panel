import React from 'react'
import Header from '../header'
import PageLink from './PagesLink'
import dummy from '../../assets/images/_dummy.png'

export default function PostBlogs() {
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
                    <div className='row'>
                      <div className='col-12 pt-3 text-center text-xl-start'>
                        <h4 className='fw-bold m-0'>Post a Blog</h4>
                      </div>
                    </div>
                    <hr />
                    <div className='hdr-srch me-3'>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control border-end-0 bg-primary-lite'
                          placeholder='Title'
                          aria-label='Title'
                          aria-describedby='basic-addon2'
                        />
                        <span
                          className='input-group-text bg-primary-lite'
                          id='basic-addon2'
                        >
                          <i></i>
                        </span>
                      </div>
                    </div>
                    <br />
                    <div>
                      <div className='mb-4 d-flex justify-content-left'>
                        {/* <img
                          src='/assets/images/dummy_lap.png'
                          alt='example placeholder'
                          style='width: 300px;'
                        /> */}
                        <img src={dummy} width='300px' alt='dummy' />
                      </div>
                      <div className='d-flex justify-content-left'>
                        <div className='btn btn-primary btn-rounded'>
                          <label
                            className='form-label text-white m-1'
                            htmlFor='customFile1'
                          >
                            Choose Image
                          </label>
                          <input
                            type='file'
                            className='form-control d-none'
                            id='customFile1'
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className='hdr-srch me-3'>
                      <div className='row'>
                        <div className='form-group'>
                          <textarea
                            placeholder='Start your blog here...'
                            className='form-control'
                            id='exampleFormControlTextarea1'
                            rows='3'
                          ></textarea>
                        </div>
                        <div className='col-12 col-md-6 col-xl-6 text-right text-md-end text-xl-end my-2 px-3 '>
                          <button className='border-0 btn-secondary offcan_but px-4 py-1'>
                            <p className='m-0 fw-normal'>Post</p>
                          </button>
                        </div>
                      </div>

                      <hr />
                      <div className='bg-lite px-xl-4 px-3 pb-4 '>
                        <div className='row '>
                          <div className='col-12 col-md-6 col-xl-6 text-center text-md-start text-xl-start mt-md-2'>
                            <h4 className='fw-bold m-0'>List of Blogs</h4>
                          </div>
                          <div className='col-12 col-md-6 col-xl-6 text-center text-md-end text-xl-end my-2 px-3'></div>
                        </div>
                        <hr />
                        <div className='row mt-4'>
                          <div className='col'>
                            <p className='text-secondary m-0'>Blog</p>
                          </div>
                          <div className='col'>
                            <p className='text-secondary m-0'>Title </p>
                          </div>
                          <div className='col'>
                            <p className='text-secondary m-0'>Time </p>
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
                            <p className=' fw-bold m-0'>Ownership </p>
                          </div>
                          <div className='col'>
                            <p className=' fw-bold m-0'>11:30 28/09/2022</p>
                          </div>
                          <div className='col'>
                            <button className='commanbtn'>
                              <p className=' fw-bold m-0'>Edit</p>
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
                            <p className=' fw-bold m-0'>Insurance </p>
                          </div>
                          <div className='col'>
                            <p className=' fw-bold m-0'> 11:30 28/09/2022</p>
                          </div>
                          <div className='col'>
                            <button className='commanbtn'>
                              <p className=' fw-bold m-0'>Edit</p>
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
                            <p className=' fw-bold m-0'>Bank Bazar </p>
                          </div>
                          <div className='col'>
                            <p className=' fw-bold m-0'>11:30 28/09/2022</p>
                          </div>
                          <div className='col'>
                            <button className='commanbtn'>
                              <p className=' fw-bold m-0'>Edit</p>
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
            </div>
          </section>
          <footer></footer>
        </div>
      </div>
    </>
  )
}
