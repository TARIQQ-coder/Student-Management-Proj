import React from "react";
import Overview from "./Overview";
import OngoingLesson from "./OngoingLesson";
import Schedule from "./Schedule";
import Grades from "./Grades";
import Inbox from "./Inbox";
import { CiSearch, CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Sidebar from "./Sidebar"; // Assuming Sidebar is from the previous response

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="container mx-auto flex-1">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <div className="col-span-3 bg-white p-4 rounded">
            <div className="flex justify-between items-center mb-6 border-b pb-2">
              <h1 className="text-2xl font-semibold ml-6">Overview</h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 bg-[#dddbdb] rounded-3xl outline-none placeholder:text-[#f5f5f5]"
                    />
                  </div>
                  <div>
                    <IoIosNotificationsOutline className="text-gray-500" />
                  </div>
                  <div>
                    <CiMail className="text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Overview />
              <Schedule />
            </div>
          </div>
          <div className="col-span-2 space-y-4">
            <div className="bg-[#f5f1f1] px-4 py-6 rounded pb-8">
              <OngoingLesson />
              <Grades />
              <Inbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
