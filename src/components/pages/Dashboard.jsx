import React from 'react'
import Header from '../header'
import PageLink from './PagesLink'

import FirstCard from './DashboardCard/FirstCard'
import BarChart from './DashboardCard/DashboardComponents/BarChart'
import LineChart from './DashboardCard/DashboardComponents/LineChart'

export default function Dashboard() {
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
                    <div className='row'>
                      <div className='col-12 pt-3 text-center text-xl-start'>
                        <FirstCard width='1000px' />

                        <br />
                      </div>
                    </div>
                    <br />
                    <div className='container'>
                      <div className='row'>
                        <div className='col-sm-6 '>
                          <LineChart />
                        </div>
                        <br />
                        <div className='col-sm-6'>
                          <BarChart />
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
