import React from 'react';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';

// eslint-disable-next-line arrow-body-style
const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToggle />
        <CreateRoomBtnModal />
      </div>
      bottom
    </div>
  );
};

export default Sidebar;
