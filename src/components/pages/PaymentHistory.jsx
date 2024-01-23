import React from 'react'
import Header from '../header'
import PageLink from './PagesLink'

export default function PaymentHistory() {
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
                    <div className='bg-lite px-xl-4 px-3 pb-4 mt-4'>
                      <div className='row '>
                        <div className='col-12 col-md-6 col-xl-6 text-center text-md-start text-xl-start mt-md-2'>
                          <h4 className='fw-bold m-0'>Payment History</h4>
                        </div>
                      </div>

                      <div className='row mt-4'>
                        <div className='col-sm-6'>
                          <div className='card shadow-lg'>
                            <div className='card-body mt-4'>
                              <span className='col'>
                                <h4 className='card-title'>
                                  Billing Information
                                </h4>
                              </span>

                              <div
                                className='card bg-white mb-3 mt-4'
                                width='30rem'
                              >
                                <div className='h6'>Anshul Rawat</div>
                                <div className='card-body'>
                                  <h6 className='card-title'>
                                    Company Name : Newtowntek
                                  </h6>
                                  <h6 className='card-title'>
                                    Email Address : anshulrawat132@gmail.com
                                  </h6>
                                  <h6 className='card-title'>
                                    VAT Number : 1234
                                  </h6>
                                </div>
                              </div>

                              <br />
                              <div
                                className='card bg-white mb-3 mt-2'
                                width='30rem'
                              >
                                <div className='h6'>Anshul Rawat</div>
                                <div className='card-body'>
                                  <h6 className='card-title'>
                                    Company Name : Newtowntek
                                  </h6>
                                  <h6 className='card-title'>
                                    Email Address : anshulrawat132@gmail.com
                                  </h6>
                                  <h6 className='card-title'>
                                    VAT Number : 1234
                                  </h6>
                                </div>
                              </div>
                              <br />
                              <div
                                className='card bg-white mb-3 mt-2'
                                width='30rem'
                              >
                                <div className='h6'>Anshul Rawat</div>
                                <div className='card-body'>
                                  <h6 className='card-title'>
                                    Company Name : Newtowntek
                                  </h6>
                                  <h6 className='card-title'>
                                    Email Address : anshulrawat132@gmail.com
                                  </h6>
                                  <h6 className='card-title'>
                                    VAT Number : 1234
                                  </h6>
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>
                        </div>

                        <div className='col-sm-6 '>
                          <div className='card shadow-lg '>
                            <div className='card-body mt-4'>
                              <span className='col'>
                                <h4 className='card-title'>
                                  Your Transaction's
                                </h4>
                              </span>

                              <div className='h6 mt-4'>Newest</div>

                              <div className='row  mt-4  '>
                                <button className='roundbtn'>
                                  <span>
                                    <i className=' fa-solid fa-chevron-down'></i>
                                  </span>
                                </button>

                                <div className='col'>
                                  <div className='h6 fw-bold m-0'>Netflix</div>
                                  <span className='text-secondary h6'>
                                    27 March 2022, at 12:30 PM
                                  </span>
                                </div>
                                <div className='col '>
                                  <span className='money '>- $2000</span>
                                </div>
                              </div>

                              <div className='row mt-4'>
                                <button className='roundbtn2'>
                                  <span>
                                    <i className=' fa-solid fa-chevron-up'></i>
                                  </span>
                                </button>

                                <div className='col'>
                                  <div className='h6 fw-bold m-0'>Apple</div>
                                  <span className='text-secondary h6 '>
                                    27 March 2022, at 12:30 PM
                                  </span>
                                </div>
                                <div className='col'>
                                  <span className='money2'>- $2000</span>
                                </div>
                              </div>

                              <div className='h6 mt-4'>Yesterday</div>

                              <div className='row mt-4 ml-4'>
                                <button className='roundbtn2'>
                                  <span>
                                    <i className=' fa-solid fa-chevron-up'></i>
                                  </span>
                                </button>

                                <div className='col'>
                                  <div className='h6 fw-bold m-0'>Stripe</div>
                                  <span className='text-secondary h6'>
                                    27 March 2022, at 12:30 PM
                                  </span>
                                </div>
                                <div className='col'>
                                  <span className='money2'>- $2000</span>
                                </div>
                              </div>

                              <div className='row mt-4 ml-4'>
                                <button className='roundbtn2'>
                                  <span>
                                    <i className=' fa-solid fa-chevron-up'></i>
                                  </span>
                                </button>

                                <div className='col'>
                                  <div className='h6 fw-bold m-0'>Hubspot</div>
                                  <span className='text-secondary h6'>
                                    27 March 2022, at 12:30 PM
                                  </span>
                                </div>
                                <div className='col'>
                                  <span className='money2'>- $2000</span>
                                </div>
                              </div>

                              <div className='row mt-4 ml-4'>
                                <button className='roundbtn2'>
                                  <span>
                                    <i className=' fa-solid fa-chevron-up'></i>
                                  </span>
                                </button>

                                <div className='col'>
                                  <div className='h6 fw-bold m-0'>
                                    Creative tim
                                  </div>
                                  <span className='text-secondary h6'>
                                    27 March 2022, at 12:30 PM
                                  </span>
                                </div>
                                <div className='col'>
                                  <span className='money2'>- $2000</span>
                                </div>
                              </div>

                              <div className='row mt-4 ml-4'>
                                <button className='roundbtn3'>
                                  <span>
                                    <i className=' fa-solid fa-exclamation'></i>
                                  </span>
                                </button>

                                <div className='col'>
                                  <div className='h6 fw-bold m-0'>Webflow</div>
                                  <span className='text-secondary h6'>
                                    27 March 2022, at 12:30 PM
                                  </span>
                                </div>
                                <div className='col'>
                                  <span className='money3'>Pending</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <button className='roundbtn4'>
                                <span>
                                  <i className=' fa-solid fa-gear'></i>
                                </span>
                              </button>
                            </div>
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
