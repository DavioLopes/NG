import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField/TextField";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
    return (
        <Paper elevation={24} className="paperstyle">
            <Box
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                borderRadius={15}>
                <Avatar className="avatar">
                    <LockIcon />
                </Avatar>
                <h2>Login</h2>
                <TextField
                    className="input"
                    id="usuario"
                    label="Usuario"
                    variant="outlined"
                    size="medium"
                    margin="dense"
                />
                <TextField
                    className="input"
                    id="password"
                    label="Senha"
                    type="password"
                    variant="outlined"
                    size="medium"
                    margin="dense"
                />
            </Box>
            <Button
                variant="contained"
                color="success"
                size="medium"
                className="button">
                Login
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="medium"
                className="button">
                Registrar
            </Button>
        </Paper>
    );
}

export default Login;
