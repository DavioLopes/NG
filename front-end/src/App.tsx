import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
    return (
        <AppThemeProvider>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
        </AppThemeProvider>
    );
};
