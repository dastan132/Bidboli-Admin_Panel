import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTES } from '../global/routes'
import dummyProfile from '../../assets/images/_dummy.png'
import { useLocation } from 'react-router-dom'

export default function PageLink() {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <div className='col-12 col-lg-3 col-xl-2 p-0'>
        <div className='bg-lite pt-3'>
          <ul className='p-0'>
            <div className='row'>
              <div className='col-xl-12 display_slid user_sidebar'>
                <div className='bg-primary-lite lite_blue_box mx-3 mb-4'>
                  <img src={dummyProfile} alt='/' />
                </div>

                <NavLink
                  className='py-3 d-block h6 '
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                      : undefined
                  }
                  to={ADMIN_ROUTES.DASHBOARD}
                >
                  <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                    <i className='ps-1 fa fa-tachometer'></i>
                  </span>
                  Dashboard
                </NavLink>
                <NavLink
                  className='py-3 d-block h6 '
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                      : undefined
                  }
                  to={ADMIN_ROUTES.USER}
                >
                  <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                    <i className='ps-1 fa-solid fa-user'></i>
                  </span>
                  User
                </NavLink>

                <NavLink
                  className='py-3 d-block h6 '
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                      : undefined
                  }
                  to={ADMIN_ROUTES.LIST_EVENTS}
                >
                  <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                    <i className='ps-1 fa fa-list'></i>
                  </span>
                  Events
                </NavLink>

                <li className='list-unstyled'>
                  <NavLink
                    className='py-3 d-block h6'
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                        : undefined
                    }
                    to={ADMIN_ROUTES.REQS_SUBMITTED}
                  >
                    <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                      <i className='ps-1 fa fa-clipboard'></i>
                    </span>
                    RFQs submitted
                  </NavLink>
                </li>
                <li className='list-unstyled'>
                  <NavLink
                    className='py-3 d-block h6'
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                        : undefined
                    }
                    to={ADMIN_ROUTES.ASSET_CLASSIFICATION}
                  >
                    <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                      <i className=' ps-1 fa-solid fa-calendar-check'></i>
                    </span>
                    Asset Classification
                  </NavLink>
                </li>

                <li className='list-unstyled'>
                  <NavLink
                    id='account'
                    className='py-3 d-block h6 '
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                        : undefined
                    }
                    to={ADMIN_ROUTES.ASSET_SELLING_TYPE}
                  >
                    <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                      <i className='ps-1 fa-sharp fa-solid fa-box'></i>
                    </span>
                    Asset Selling Type
                  </NavLink>
                </li>

                <li className='list-unstyled'>
                  <NavLink
                    id='account'
                    className='py-3 d-block h6 '
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                        : undefined
                    }
                    to={ADMIN_ROUTES.ASSET_TYPE}
                  >
                    <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                      <i className='ps-1 fa-solid fa-rectangle-list'></i>
                    </span>
                    Asset Type
                  </NavLink>
                </li>
                <li className='list-unstyled h6'>
                  <NavLink
                    className='py-3 d-block'
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                        : undefined
                    }
                    to={ADMIN_ROUTES.POST_BLOGS}
                  >
                    <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                      <i className='ps-1 fa-solid fa-bars'></i>
                    </span>
                    Blogs
                  </NavLink>
                </li>

                <li className='list-unstyled'>
                  <NavLink
                    className='py-3 d-block h6'
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                        : undefined
                    }
                    to={ADMIN_ROUTES.AUDIT_LOG_ACTIVITY}
                  >
                    <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                      <i className='ps-1 fa-solid fa-pager'></i>
                    </span>
                    Audit Log/Activity Trail
                  </NavLink>
                </li>

                <li className='list-unstyled'>
                  <NavLink
                    className='py-3 d-block h6'
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                        : undefined
                    }
                    to={ADMIN_ROUTES.PRICE_RANGE}
                  >
                    <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                      <i className='ps-1 fa-solid fa-wave-pulse'></i>
                    </span>
                    Price Range
                  </NavLink>
                </li>
                <li className='list-unstyled'>
                  <NavLink
                    className='py-3 d-block h6'
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                        : undefined
                    }
                    to={ADMIN_ROUTES.NOTIFICATION}
                  >
                    <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                      <i className='ps-1 fa-solid fa-envelope'></i>
                    </span>
                    Notifications
                  </NavLink>
                </li>
                <li className='list-unstyled'>
                  <NavLink
                    className='py-3 d-block h6'
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                        : undefined
                    }
                    to={ADMIN_ROUTES.PAYMENT_HISTORY}
                  >
                    <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                      <i className='ps-1 fa-solid fa-clock-rotate-left'></i>
                    </span>
                    Payment History
                  </NavLink>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}
