import React from 'react'

import { NavLink } from 'react-router-dom'
import { DASHBOARD } from '../../../global/routes'

const TabsLinks = () => {
  return (
    <>
      <div className='col-12 col-lg-3 col-xl-2 p-0'>
        <div className='bg-lite pt-3'>
          <ul className='p-0'>
            <div className='row'>
              <div className='col-xl-12 display_slid user_sidebar'>
                <NavLink
                  className='py-3 d-block h6 '
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                      : undefined
                  }
                  to={DASHBOARD.TOTAL_EVENTS}
                >
                  <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                    <i className='ps-1 fa fa-calendar'></i>
                  </span>
                  Total Events
                </NavLink>
                <NavLink
                  className='py-3 d-block h6 '
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                      : undefined
                  }
                  to={DASHBOARD.ACTIVE_EVENTS}
                >
                  <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                    <i className='ps-1 fa-solid fa-calendar-plus'></i>
                  </span>
                  Active Events
                </NavLink>

                <NavLink
                  className='py-3 d-block h6 '
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                      : undefined
                  }
                  to={DASHBOARD.PUBLISHED_EVENTS}
                >
                  <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                    <i className='ps-1 fa-solid fa-calendar-check'></i>
                  </span>
                  Published Events
                </NavLink>

                <NavLink
                  className='py-3 d-block h6 '
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: '#FF663E', color: '#FFFFFF' }
                      : undefined
                  }
                  to={DASHBOARD.EVENTS_CLOSED}
                >
                  <span className='pe-1 d-inline-block me-2 text-dark-lite'>
                    <i className='ps-1 fa-solid fa-calendar-xmark'></i>
                  </span>
                  Closed Events
                </NavLink>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default TabsLinks
