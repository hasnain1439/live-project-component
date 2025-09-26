import { createBrowserRouter } from 'react-router-dom'
import DashboardCard from './component/DashboardCard'
import Dashborard from './component/Dashborard'
import OrderFulfill from './component/OrderFulfill'
import RegionalSales from './component/RegionalSales'
import UserManagement from './component/UserManagement'
import WareHouse from './component/WareHouse'
import Account from './page/account/Account'
import CheckOut from './page/CheckOut'
import HomePageComponent from './website/HomePageComponent'


function App() {
  return (
    <>
      {/* <Dashborard/> */}
      {/* <WareHouse/> */}
      {/* <RegionalSales/> */}
      {/* <UserManagement/> */}
      {/* <OrderFulfill/> */}
      {/* <HomePageComponent/> */}
      {/* <CheckOut/> */}
      <Account/>
    </>
  )
}

export default App
