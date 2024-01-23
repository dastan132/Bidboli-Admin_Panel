import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ADMIN_ROUTES, DASHBOARD } from './routes'
import { ListEvents } from '../pages/ListEvents'
import { AssetType } from '../pages/AssetType'
import AuditLog from '../pages/AuditLogActivity'
import Notification from '../pages/Notification'
import PaymentHistory from '../pages/PaymentHistory'
import PostBlogs from '../pages/PostBlogs'
import PriceRange from '../pages/PriceRange'
import RFQsSubmitted from '../pages/RFQsSubmitted'
import AssetClassification from '../pages/AssetClassification'
import { UserProvider } from '../../context/UserContext'
import Dashboard from '../pages/Dashboard'
import User from '../pages/User'
import AssetSellingType from '../pages/AssetSellingType'
import AdminLogin from '../pages/AdminLogin'

import ActiveEvents from '../pages/DashboardCard/DashTabs/ActiveEvents'
import ClosedEvents from '../pages/DashboardCard/DashTabs/ClosedEvents'
import PublishedEvents from '../pages/DashboardCard/DashTabs/PublishedEvents'
import TotalEvent from '../pages/DashboardCard/DashTabs/TotalEvents'


function AppRouter(params) {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Dashboard />} />

            <Route
              path={ADMIN_ROUTES.DASHBOARD}
              element={<Dashboard />}
            ></Route>

            <Route path={DASHBOARD.TOTAL_EVENTS} element={<TotalEvent />} />
            <Route path={DASHBOARD.ACTIVE_EVENTS} element={<ActiveEvents />} />
            <Route path={DASHBOARD.PUBLISHED_EVENTS} element={<PublishedEvents />} />
            <Route path={DASHBOARD.EVENTS_CLOSED} element={<ClosedEvents />} />

            <Route path={ADMIN_ROUTES.LIST_EVENTS} element={<ListEvents />} />
            <Route path={ADMIN_ROUTES.USER} element={<User />} />
            <Route path={ADMIN_ROUTES.ASSET_TYPE} element={<AssetType />} />
            <Route
              path={ADMIN_ROUTES.AUDIT_LOG_ACTIVITY}
              element={<AuditLog />}
            />
            <Route
              path={ADMIN_ROUTES.NOTIFICATION}
              element={<Notification />}
            />
            <Route
              path={ADMIN_ROUTES.PAYMENT_HISTORY}
              element={<PaymentHistory />}
            />
            <Route path={ADMIN_ROUTES.PRICE_RANGE} element={<PriceRange />} />

            <Route
              path={ADMIN_ROUTES.REQS_SUBMITTED}
              element={<RFQsSubmitted />}
            />

            <Route
              path={ADMIN_ROUTES.ASSET_CLASSIFICATION}
              element={<AssetClassification />}
            />
            <Route path={ADMIN_ROUTES.POST_BLOGS} element={<PostBlogs />} />
            <Route
              path={ADMIN_ROUTES.ASSET_SELLING_TYPE}
              element={<AssetSellingType />}
            />
            <Route path={ADMIN_ROUTES.LOGIN_ADMIN} element={<AdminLogin />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default AppRouter
