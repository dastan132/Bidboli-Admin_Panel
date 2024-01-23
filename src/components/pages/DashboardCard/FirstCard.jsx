import React from 'react'
import { NavLink } from 'react-router-dom'
import { DASHBOARD } from '../../global/routes'
import TotalEvent from '../../../assets/images/icons/png/Total Events.png'
import ActivEvent from '../../../assets/images/icons/png/Active Event.png'
import PublishedEvents from '../../../assets/images/icons/png/Published Event.png'
import CloseEvents from '../../../assets/images/icons/png/Closed Event.png'

const FirstCard = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row cards'>
          <div className='col-md-3 '>
            <NavLink to={DASHBOARD.TOTAL_EVENTS} id='Event List'>
              <div className='card  shadow-lg  '>
                <div className='card-header bg-white text-muted '>
                  <div className='row'>
                    <div className='col  my-card'>
                      <img
                        className='cardimg'
                        src={TotalEvent}
                        alt='total event'
                      ></img>
                    </div>
                    <div className='col cardtext'>
                      <h6>Total Events</h6>
                      <h2 className='text-dark'>281</h2>
                    </div>
                  </div>
                </div>
                <div className='card-footer bg-white col text-right'>
                  <h6 className='text-success'>
                    +55% <span className='text-muted'> than last week</span>{' '}
                  </h6>
                </div>
              </div>
            </NavLink>
          </div>

          <div className='col-md-3'>
            <NavLink to={DASHBOARD.ACTIVE_EVENTS} id='Active Events'>
              <div className='card  shadow-lg '>
                <div className='card-header bg-white text-muted'>
                  <div className='row '>
                    <div className='col  my-card'>
                      <img
                        className='cardimg'
                        src={ActivEvent}
                        alt='active events'
                      ></img>
                    </div>
                    <div className='col cardtext'>
                      <h6 className='text-warning'>Active Events</h6>
                      <h2>2300</h2>
                    </div>
                  </div>
                </div>
                <div className='card-footer bg-white col text-right'>
                  <h6 className='text-success'>
                    +3% <span className='text-muted'> than last month</span>{' '}
                  </h6>
                </div>
              </div>
            </NavLink>
          </div>

          <div className='col-md-3'>
            <NavLink to={DASHBOARD.PUBLISHED_EVENTS} id='Published Events'>
              <div className='card  shadow-lg '>
                <div className='card-header bg-white text-muted'>
                  <div className='row '>
                    <div className='col  my-card'>
                      <img
                        className='cardimg'
                        src={PublishedEvents}
                        alt='published events'
                      />
                    </div>
                    <div className='col cardtext'>
                      <h6 className='text-success'>Published Events</h6>
                      <h2>34K</h2>
                    </div>
                  </div>
                </div>
                <div className='card-footer bg-white col text-right'>
                  <h6 className='text-success'>
                    +1% <span className='text-muted'> than yesterday</span>{' '}
                  </h6>
                </div>
              </div>
            </NavLink>
          </div>

          <div className='col-md-3'>
            <NavLink to={DASHBOARD.EVENTS_CLOSED} id=' Closed Events'>
              <div className='card  shadow-lg '>
                <div className='card-header bg-white text-muted'>
                  <div className='row '>
                    <div className='col my-card'>
                      <img
                        className='cardimg'
                        src={CloseEvents}
                        alt='close events'
                      />
                    </div>
                    <div className='col cardtext'>
                      <h6 className='text-danger'> Event Closed</h6>
                      <h2>+91</h2>
                    </div>
                  </div>
                </div>
                <div className='card-footer  bg-white col text-right'>
                  <h6 className='text-success'>
                    <span className='text-muted'> Just updated</span>{' '}
                  </h6>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        {/* ))} */}
      </div>
    </>
  )
}

export default FirstCard
