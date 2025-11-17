import {
    createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../layouts/LandingPage";
import ScheduleConsultation from "../features/ScheduleConsultation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/schedule-consultation",
        element: <ScheduleConsultation />,
    },
]);






export default router;