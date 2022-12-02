import { Route, Routes } from "react-router-dom";
import Login from "../shared/components/Login";

export const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
    );
}
