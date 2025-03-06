

import { FaRegEye, FaUserGroup } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { useEffect, useState } from "react";
import Chart from "../../../components/dashboard/charts/Charts";




const CommonDashboard = () => {

  const [count, setCount] = useState({})
  const [chartValue, setChartValue] = useState([]);
  const [userType, setUserType] = useState('total_users')
  const [curdTitle, setCurdTitle] = useState('Total Users')



  const dashboardAllData = [
    {
      icon1: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="26" fill="#EBF8FF" />
          <path d="M31.6666 33.3333V36H13V33.3333C13 33.3333 13 28 22.3333 28C31.6666 28 31.6666 33.3333 31.6666 33.3333ZM27 20.6667C27 19.7437 26.7263 18.8415 26.2135 18.074C25.7007 17.3066 24.9719 16.7085 24.1192 16.3553C23.2664 16.0021 22.3281 15.9097 21.4229 16.0897C20.5176 16.2698 19.6861 16.7142 19.0335 17.3669C18.3808 18.0195 17.9364 18.851 17.7563 19.7563C17.5763 20.6615 17.6687 21.5998 18.0219 22.4526C18.3751 23.3053 18.9732 24.0341 19.7407 24.5469C20.5081 25.0597 21.4103 25.3334 22.3333 25.3334C23.571 25.3334 24.758 24.8417 25.6331 23.9665C26.5083 23.0914 27 21.9044 27 20.6667ZM31.5866 28C32.4063 28.6343 33.077 29.4406 33.5515 30.362C34.0261 31.2835 34.2929 32.2977 34.3333 33.3333V36H39.6666V33.3333C39.6666 33.3333 39.6666 28.4934 31.5866 28ZM30.3333 16C29.4157 15.9958 28.5184 16.2701 27.76 16.7867C28.5699 17.9184 29.0054 19.2751 29.0054 20.6667C29.0054 22.0583 28.5699 23.415 27.76 24.5467C28.5184 25.0633 29.4157 25.3376 30.3333 25.3334C31.571 25.3334 32.7579 24.8417 33.6331 23.9665C34.5083 23.0914 34.9999 21.9044 34.9999 20.6667C34.9999 19.429 34.5083 18.242 33.6331 17.3669C32.7579 16.4917 31.571 16 30.3333 16Z" fill="#043249" />
        </svg>


      ),
      icon2: (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.9878 13V3.22849L1.19255 7.02374L0 5.83119L5.83119 0L11.6624 5.83119L10.4698 7.02374L6.67458 3.22849V13H4.9878Z" fill="#008E40" />
        </svg>


      ),
      name: "Total users",
      subscribe: count.total_users,
      title: "45% increases than last month",
    },



    {
      icon1: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="26" fill="#EBF8FF" />
          <path d="M21.25 36C20.8958 36 20.5992 35.88 20.36 35.64C20.1208 35.4 20.0008 35.1033 20 34.75V17.25C20 16.8958 20.12 16.5992 20.36 16.36C20.6 16.1208 20.8967 16.0008 21.25 16H31.25C31.6042 16 31.9012 16.12 32.1412 16.36C32.3812 16.6 32.5008 16.8967 32.5 17.25V34.75C32.5 35.1042 32.38 35.4012 32.14 35.6412C31.9 35.8812 31.6033 36.0008 31.25 36H21.25ZM15 32.25V19.7187C15 19.3646 15.12 19.0729 15.36 18.8437C15.6 18.6146 15.8967 18.5 16.25 18.5C16.6033 18.5 16.9004 18.62 17.1412 18.86C17.3821 19.1 17.5017 19.3967 17.5 19.75V32.2812C17.5 32.6354 17.38 32.9271 17.14 33.1562C16.9 33.3854 16.6033 33.5 16.25 33.5C15.8967 33.5 15.6 33.38 15.36 33.14C15.12 32.9 15 32.6033 15 32.25ZM35 32.25V19.7187C35 19.3646 35.12 19.0729 35.36 18.8437C35.6 18.6146 35.8967 18.5 36.25 18.5C36.6033 18.5 36.9004 18.62 37.1412 18.86C37.3821 19.1 37.5017 19.3967 37.5 19.75V32.2812C37.5 32.6354 37.38 32.9271 37.14 33.1562C36.9 33.3854 36.6033 33.5 36.25 33.5C35.8967 33.5 35.6 33.38 35.36 33.14C35.12 32.9 35 32.6033 35 32.25Z" fill="#043249" />
        </svg>


      ),
      icon2: (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.9878 0V9.77151L1.19255 5.97626L0 7.16881L5.83119 13L11.6624 7.16881L10.4698 5.97626L6.67458 9.77151V0H4.9878Z" fill="#F40000" />
        </svg>


      ),
      name: "Total listened stories",
      subscribe: count.total_lawyers,
      title: "45% decreases than last month",
    },


    {
      icon1: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="26" fill="#EBF8FF" />
          <mask id="mask0_8665_1552" maskUnits="userSpaceOnUse" x="13" y="13" width="26" height="26">
            <rect x="13" y="13" width="26" height="26" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_8665_1552)">
            <path d="M16.2502 35.6315C15.6543 35.6315 15.1443 35.4077 14.72 34.9602C14.2956 34.5127 14.0835 33.9748 14.0835 33.3463V20.778H16.2502V33.3463H34.6668V35.6315H16.2502ZM20.5835 31.0612C19.9877 31.0612 19.4776 30.8374 19.0533 30.3899C18.629 29.9424 18.4168 29.4045 18.4168 28.776V19.6354C18.4168 19.007 18.629 18.469 19.0533 18.0215C19.4776 17.574 19.9877 17.3503 20.5835 17.3503H35.7502C36.346 17.3503 36.8561 17.574 37.2804 18.0215C37.7047 18.469 37.9168 19.007 37.9168 19.6354V28.776C37.9168 29.4045 37.7047 29.9424 37.2804 30.3899C36.8561 30.8374 36.346 31.0612 35.7502 31.0612H20.5835ZM22.7502 28.776C22.7502 28.1476 22.538 27.6097 22.1137 27.1621C21.6894 26.7146 21.1793 26.4909 20.5835 26.4909V28.776H22.7502ZM33.5835 28.776H35.7502V26.4909C35.1543 26.4909 34.6443 26.7146 34.22 27.1621C33.7956 27.6097 33.5835 28.1476 33.5835 28.776ZM28.1668 27.6335C29.0696 27.6335 29.837 27.3002 30.4689 26.6337C31.1009 25.9672 31.4168 25.1579 31.4168 24.2057C31.4168 23.2536 31.1009 22.4442 30.4689 21.7777C29.837 21.1112 29.0696 20.778 28.1668 20.778C27.2641 20.778 26.4967 21.1112 25.8647 21.7777C25.2328 22.4442 24.9168 23.2536 24.9168 24.2057C24.9168 25.1579 25.2328 25.9672 25.8647 26.6337C26.4967 27.3002 27.2641 27.6335 28.1668 27.6335ZM20.5835 21.9206C21.1793 21.9206 21.6894 21.6968 22.1137 21.2493C22.538 20.8018 22.7502 20.2638 22.7502 19.6354H20.5835V21.9206ZM35.7502 21.9206V19.6354H33.5835C33.5835 20.2638 33.7956 20.8018 34.22 21.2493C34.6443 21.6968 35.1543 21.9206 35.7502 21.9206Z" fill="#043249" />
          </g>
        </svg>


      ),
      icon2: (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.9878 13V3.22849L1.19255 7.02374L0 5.83119L5.83119 0L11.6624 5.83119L10.4698 7.02374L6.67458 3.22849V13H4.9878Z" fill="#008E40" />
        </svg>
      ),
      name: "Total earnings",
      subscribe: count.total_clients,
      title: "45% increases than last month",
    },
  ]
  const handleClick = (name) => {
    let itemValue = {};
    if (name?.name === 'User statistics') {
      itemValue = { category: 'User statistics' };
      setCurdTitle(name?.name)
    } else if (name?.name === 'Total Users') {
      itemValue = { category: 'total_users' };
      setCurdTitle(name?.name)
    } else if (name?.name === 'Clients') {
      itemValue = { category: 'Clients' };
      setCurdTitle(name?.name)
    }
    setUserType(itemValue.category)
  }








  return (
    <div>
      <div className="flex items-center gap-2 pb-[20px]">

      </div>
      <div className="bg-[#FFFFFF] p-4 rounded-lg">
        <div className="pb-[24px]">
          <h2 className="font-Poppins text-[28px] font-bold text-[#000000]">Overview</h2>
          <p className="text-[12px] font-Poppins text-[#929299]">Activities summary at a glance</p>
        </div>

        {/* main div here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[23px] ">
          {
            dashboardAllData?.map((item, index) => {
              return (
                <div onClick={() => handleClick(item)} key={index} className=" max-w-[399px] p-5 border rounded-lg hover:border-2 hover:border-primary transition-all duration-300 ease-in-out transform hover:scale-105">
                  <div className="pb-[12px]">
                    {item.icon1}
                    <h1 className="font-Poppins text-[18px] font-bold">{item.name}</h1>
                  </div>
                  <div className="pb-[4px]">
                    <h1 className="font-Poppins text-[26px] font-bold">{item.subscribe || 0}</h1>

                  </div>
                  <p className="flex items-center gap-2 font-Poppins text[12px]">{item.icon2} {item.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* dynamic chart */}
      <Chart chartValue={chartValue} curdTitle={curdTitle} />
    </div>
  )
}

export default CommonDashboard