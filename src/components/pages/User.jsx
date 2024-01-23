import React from 'react'
import Header from '../header'
import PageLink from './PagesLink'
import { ADMIN_ROUTES } from '../global/routes'
import { NavLink } from 'react-router-dom'

const User = () => {
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
                          <h4 className='fw-bold m-0'>List of User</h4>
                        </div>
                      </div>
                      <hr />
                      <div className='row mt-4 px-2'>
                        <div className='col'>
                          <p className='text-secondary m-0'>Username </p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Created on</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Email ID</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Company Name</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Contact no.</p>
                        </div>
                        <div className='col'>
                          <p className='text-secondary m-0'>Action</p>
                        </div>
                      </div>
                      <br />
                      <div className='row '>
                        <div className='col'>
                          <p className=' fw-bold m-0'>Anshul Rawat</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>28/08/2022 </p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>anshul@newtowntek.com</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>Raman Steel Works</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>9411396387</p>
                        </div>
                        <div className='col'>
                          <NavLink to={ADMIN_ROUTES.DASHBOARD}>
                            <button className='dashbtn'>
                              <span></span>
                              Go to Event Dashboard
                            </button>
                          </NavLink>
                          <button className='sideicon'>
                            <i className='fa-solid fa-trash'></i>
                          </button>
                        </div>
                      </div>
                      <div className='row mt-4'>
                        <div className='col'>
                          <p className=' fw-bold m-0'>Anshul Rawat</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>28/08/2022 </p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>anshul@newtowntek.com</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>Raman Steel Works</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>9411396387</p>
                        </div>
                        <div className='col'>
                          <NavLink to={ADMIN_ROUTES.DASHBOARD}>
                            <button className='dashbtn'>
                              Go to Event Dashboard
                            </button>
                          </NavLink>
                          <button className='sideicon'>
                            <i className='fa-solid fa-trash'></i>
                          </button>
                        </div>
                      </div>
                      <div className='row mt-4'>
                        <div className='col'>
                          <p className=' fw-bold m-0'>Anshul Rawat</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>28/08/2022 </p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>anshul@newtowntek.com</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>Raman Steel Works</p>
                        </div>
                        <div className='col'>
                          <p className=' fw-bold m-0'>9411396387</p>
                        </div>
                        <div className='col'>
                          <NavLink to={ADMIN_ROUTES.DASHBOARD}>
                            <button className='dashbtn'>
                              Go to Event Dashboard
                            </button>
                          </NavLink>
                          <button className='sideicon'>
                            <i className='fa-solid fa-trash'></i>
                          </button>
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

export default User
