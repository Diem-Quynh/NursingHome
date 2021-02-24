import {
  HomeOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  ScheduleOutlined,
  SolutionOutlined,
  CalendarOutlined,
  VerifiedOutlined,
  InsertRowRightOutlined,
  LayoutOutlined,
  CarryOutOutlined,
  LineChartOutlined
} from "@ant-design/icons";

const sidebar = [
  {
    routeName: "frontend.admin.dashboard.index",
    icon: <HomeOutlined />,
    routeParams: {},
  },
  {
    routeName: "frontend.admin.users.index",
    icon: <UserOutlined />,
    routeParams: {}
    // type: "sub",
  },
  {
    routeName: "frontend.admin.rooms.index",
    icon: <InsertRowRightOutlined />,
    routeParams: {}
    // type: "sub",
  },
  {
    routeName: "frontend.admin.beds.index",
    icon: <LayoutOutlined />,
    routeParams: {}
    // type: "sub",
  },
  {
    routeName: "frontend.admin.patients.index",
    icon: <UserOutlined />,
    routeParams: {}
    // type: "sub",
  },
  {
    routeName: "frontend.admin.assignment",
    icon: <ScheduleOutlined />,
    routeParams: {},
    type: "sub",
    children: [
      {
        routeName: "frontend.admin.doctorAssignments.index",
        icon: <SolutionOutlined />,
        routeParams: {}
      },
      {
        routeName: "frontend.admin.nurseAssignments.index",
        icon: <SolutionOutlined />,
        routeParams: {}
      }
    ]
  },
  {
    routeName: "frontend.admin.healthStatuses.index",
    icon: <CalendarOutlined />,
    routeParams: {}
    // type: "sub",
  },
  {
    routeName: "frontend.admin.adminsIndex",
    icon: <TeamOutlined />,
    routeParams: {},
    type: "sub",
    children: [
      {
        routeName: "frontend.admin.userGroups.index",
        icon: <UsergroupAddOutlined />,
        routeParams: {}
      },
      {
        routeName: "frontend.admin.userPermissions.index",
        icon: <VerifiedOutlined />,
        routeParams: {}
      }
    ]
  },
  {
    routeName: "frontend.admin.statistic",
    icon: <CarryOutOutlined />,
    routeParams: {},
    type: "sub",
    children: [
      {
        routeName: "frontend.admin.statistics.healthStatus",
        icon: <LineChartOutlined />,
        routeParams: {}
      }
    ]
  }
];

export default sidebar;
