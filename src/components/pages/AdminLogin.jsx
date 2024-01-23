import React from 'react'
import bidboli from '../../assets/images/bidboli.png'

function AdminLogin() {
  return (
    <>
      <div className='wrapper overflow-hidden m-0'>
        <div className='container-fluid'>
          <div className=' row'>
            <div className='bg-primary-dark blue_box_hei'>
              <div className='d-flex align-items-center justify-content-center '>
                <div className=' bg-lite whitebox text-center'>
                  <div className=' d-flex justify-content-center align-items-center text-center'>
                    <div className='w-50 bidimg '>
                      <img src={bidboli} alt='#' />
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center align-items-center mx-xl-4'>
                    <hr className='w-50 my-xl-4 my-3' />
                    <div className='row d-flex justify-content-center align-items-center'>
                      <div className='col-12 py-md-0 py-3'>
                        <h5 className='text-center text-dark h5'>
                          Login as Super Admin
                        </h5>
                      </div>

                      <br />
                      <div className='col-11 col-xl-8 my-2'>
                        <div className='input-group'>
                          <input
                            type='password'
                            className='form-control py-2 bg-primary-lite'
                            name='password'
                            id='password'
                            placeholder='Password'
                          />
                        </div>
                      </div>
                      <div className='col-11 col-xl-8 my-3'>
                        <button className='btn btn-secondary w-100 text-lite fw-bold oran_bg sign_btn'>
                          LOGIN
                        </button>
                      </div>
                      <div className='col-11 col-xl-8'>
                        <div className='row'>
                          <div className='col-12 col-xl-4 ps-xl-0 text-start text-xl-end'>
                            <a href='#' className='h6 text-center'>
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
