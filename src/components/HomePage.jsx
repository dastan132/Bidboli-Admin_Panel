import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './header'

import { NavLink } from 'react-router-dom'
import PageTabs from './pages/PageTabs'
import { ADMIN_ROUTES } from './global/routes'

const tabs = [
  {
    value: 1,
    label: 'List Events',
    href: ADMIN_ROUTES.LIST_EVENTS,
    icon: 'fa fa-list',
  },
  {
    value: 7,
    label: 'Asset library',
    href: ADMIN_ROUTES.ASSET_LIBRARY,
    icon: 'fa fa-bell',
  },
  {
    value: 3,
    label: 'Audit log Activity',
    href: ADMIN_ROUTES.AUDIT_LOG_ACTIVITY,
    icon: 'fa fa-calendar-week',
  },
  {
    value: 4,
    label: 'Notification',
    href: ADMIN_ROUTES.NOTIFICATION,
    icon: 'fa fa-person',
  },
  {
    value: 5,
    label: 'Post Blogs',
    href: ADMIN_ROUTES.POST_BLOGS,
    icon: 'fa fa-calendar',
  },
  {
    value: 6,
    label: 'Payment history',
    href: ADMIN_ROUTES.PAYMENT_HISTORY,
    icon: 'fa fa-stopwatch',
  },

  {
    value: 2,
    label: 'Price Range',
    href: ADMIN_ROUTES.PRICE_RANGE,
    icon: 'fa fa-gear',
  },
  {
    value: 8,
    label: 'Sale Confirmed',
    href: ADMIN_ROUTES.SALE_CONFIRMED,
    icon: 'fa fa-gear',
  },
  {
    value: 9,
    label: 'REQs Submitted',
    href: ADMIN_ROUTES.REQS_SUBMITTED,
    icon: 'fa fa-gear',
  },
]

export default function HomePage() {
  const { pathname } = useLocation()
  const path = pathname.split('/')
  const [selectedOptions, setSelectedOptions] = useState({})
  const [currentTab, setCurrentTab] = useState(path[path.length - 1])
  function handleOptionSelect(type, value) {
    setSelectedOptions((currentOptions) => ({ ...currentOptions, type: value }))
  }
console.log(selectedOptions)
  return (
    <>
      <div className='wrapper overflow-hidden'>
        <div className='container-fluid'>
          <Header />
          <section className='pt-5'>
            <div className='container-fluid p-0 mx-xl-5 ps-lg-3 ps-xl-5'>
              <div className='row'>
                <div className='col-12 col-lg-3 col-xl-2 p-0'>
                  <div className='bg-lite pt-3'>
                    <ul className='p-0'>
                      <div className='row'>
                        <div className='col-xl-12 display_slid user_sidebar'>
                          {tabs.map(({ value, label, href, icon }) => (
                            <NavLink
                              className='py-3 d-block'
                              key={value}
                              style={({ isActive }) =>
                                isActive || href === currentTab
                                  ? {
                                      backgroundColor: '#FF663E',
                                      color: '#FFFFFF',
                                    }
                                  : undefined
                              }
                              id='account'
                              to={`/pageTabs/${href}`}
                              onClick={() => setCurrentTab(href)}
                            >
                              <div
                                className='h6 m-0 ps-3 navLink-div '
                                style={
                                  href === currentTab
                                    ? { backgroundColor: '', color: '' }
                                    : undefined
                                }
                              >
                                <span className='pe-3 d-inline-block me-2 text-dark-lite'>
                                  <i className={'ps-1 ' + icon}></i>
                                </span>
                                {label}
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                <PageTabs
                  tab={currentTab}
                  handleOptionSelect={handleOptionSelect}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
