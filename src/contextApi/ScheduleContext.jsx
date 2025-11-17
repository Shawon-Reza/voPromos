import { createContext, useContext, useState, useCallback } from "react";

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
    const [scheduleData, setScheduleData] = useState({
        preferredDate: null,
        preferredTime: null,
        selectedDay: null,
        company: null,
        email: null,
        firstName: null,
        lastName: null,
        phone: null,
        serviceNeeded: null,
    });

    const updateSchedule = useCallback((key, value) => {
        setScheduleData((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, []);

    return (
        <ScheduleContext.Provider value={{ scheduleData, updateSchedule }}>
            {children}
        </ScheduleContext.Provider>
    );
};

export const useSchedule = () => useContext(ScheduleContext);
