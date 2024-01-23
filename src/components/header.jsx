import React, { useState, useRef, useEffect } from 'react'
import bidbolilogo from '../assets/images/bidboli.png'
import { ADMIN_ROUTES } from './global/routes'
import { NavLink, useNavigate } from 'react-router-dom'
import { OverlayTrigger } from 'react-bootstrap'
import useOutSideAlerter from '../components/hooks/useOutSideAlerter'
import { useAuth } from './hooks/useAuth'
import ToolTip from './ToolTip'


function Header() {
  const user = useAuth()
  const navigate = useNavigate()
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const wrapperRef = useRef()
  const { outsideClicked, setOutsideClicked } = useOutSideAlerter(wrapperRef)

  useEffect(() => {
    if (outsideClicked) setOutsideClicked(false)
    setIsDropdownVisible(false)
  }, [outsideClicked])
  const handleClickAvatar = () => {
    if (user) setIsDropdownVisible(!isDropdownVisible)
  }
  const NotificationsList = (
    <ul className='list-unstyled mb-0'>
      <div className='px-3 pt-3'>
        <strong>
          {' '}
          {/* <i className='ps-1 fa-solid fa-bell'>Notifications</i> */}
          Notifications
        </strong>
      </div>
      <div className=''>
        <hr className='pb-0 mb-0' />
      </div>

      <li className='col-12 col-xl-12 h6 row border-bottom m-0 py-2 pt-3'>
        <NavLink to={ADMIN_ROUTES.NOTIFICATION} className='d-flex'>
          <div>
            <i className='fa fa-bell d-inline-block me-2'></i>
          </div>
          <div>
            <p className='text-dark mb-2'>
              <br />
              <span className='curs_point text-secondary d-inline-block mt-2'></span>
            </p>
          </div>
        </NavLink>
      </li>

      <button className='notification-button'>
        <NavLink to={ADMIN_ROUTES.NOTIFICATION}>VIEW ALL NOTIFICATIONS</NavLink>
      </button>
    </ul>
  )

  return (
    <>
      <header id='' className='d-none d-xl-block py-2 px-5 shadow-sm bg-lite'>
        <div className='container mx-0'>
          <div className='row align-items-center'>
            <div className='col-6'>
              <div className='row'>
                <div className='col-3 ps-0'>
                  <NavLink to={ADMIN_ROUTES.DASHBOARD} id='brandlogo'>
                    <img src={bidbolilogo} alt='' />
                  </NavLink>
                </div>
              </div>
            </div>

            <div className='col-6 position-relative d-flex justify-content-end align-items-center p-0 '>
              <form>
                <div className='hdr-srch '>
                  <div className='input-group' id='header-search'>
                    <input
                      type='text'
                      className='form-control border-end-0 bg-primary-lite'
                      placeholder='Event name'
                      aria-label='Event Name'
                      aria-describedby='basic-addon2'
                    />
                    <span
                      role='button'
                      className='input-group-text bg-primary-lite h-100'
                      id='basic-addon2'
                    >
                      <i className='fa fa-search'></i>
                    </span>
                  </div>
                </div>
              </form>
              <ul className='list-unstyled list-inline mb-0 ms-3'>
                <li className='list-inline-item px-3'>
                  <OverlayTrigger
                    trigger='click'
                    placement='bottom'
                    rootClose={true}
                    overlay={ToolTip({
                      body: NotificationsList,
                    })}
                  >
                    <button className='text-dark fs-5 fw-bold border-0 bg-white'>
                      <i className='fa fa-bell fs-4'></i>
                    </button>
                  </OverlayTrigger>
                </li>
                <li className='list-inline-item pe-3'>
                  <button
                    className='text-dark fs-4 fw-bold border-0 bg-white text-base d-flex align-items-center'
                    onClick={handleClickAvatar}
                  >
                    <i className='fa fa-user-circle fs-3 me-2'></i> Super Admin
                  </button>
                  {isDropdownVisible && (
                    <div className='menu-lg position-relative'>
                      <div className='position-absolute top-30 start-0 usermenu menubox dropdown pb-3 shadow'>
                        <ul className='list-unstyled mb-0'>
                          <li className='dropdown-item'>
                            <NavLink to={ADMIN_ROUTES.DASHBOARD}>
                              <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                                <i className='ps-1 fa fa-tachometer'></i>
                              </span>
                              Dashboard
                            </NavLink>
                          </li>
                          <li className='dropdown-item'>
                            <NavLink to={ADMIN_ROUTES.PAYMENT_HISTORY}>
                              <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                                <i className='ps-1 fa fa-credit-card-alt'></i>
                              </span>
                              Payment History
                            </NavLink>
                          </li>

                          <li className='dropdown-item'>
                            <NavLink to={ADMIN_ROUTES.NOTIFICATION}>
                              <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                                <i className='ps-1 fa-solid fa-envelope'></i>
                              </span>
                              Notification
                            </NavLink>
                          </li>

                          <li className='dropdown-item'>
                            <NavLink to={ADMIN_ROUTES.LIST_EVENTS}>
                              <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                                <i className='ps-1 fa fa-list'></i>
                              </span>
                              Events
                            </NavLink>
                          </li>
                          <li className='dropdown-item'>
                            <NavLink to={ADMIN_ROUTES.ASSET_SELLING_TYPE}>
                              <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                                <i className='ps-1 fa fa-book'></i>
                              </span>
                              Asset Library
                            </NavLink>
                          </li>
                          <li className='dropdown-item'>
                            <NavLink to={ADMIN_ROUTES.LOGIN_ADMIN}>
                              <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                                <i className='ps-1 fa fa-sign-in'></i>
                              </span>
                              Admin Login
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
