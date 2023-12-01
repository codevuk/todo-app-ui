import axios from "axios";
import { useState } from "react"

type LoginProps = {
    handleSuccess: () => void;
}

function Login(props: LoginProps) {
    const { handleSuccess } = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const result = await axios.post<string>("http://localhost:5050/api/auth/login", { username, password });

            window.localStorage.setItem("auth", result.data);
            handleSuccess();
        } catch(err) {
            setError("Username or password incorrect");
        }
    }

    return (
        <>
            <div>
                <input type="text" value={username} onChange={(ev) => setUsername(ev.target.value)} />
            </div>
            <div>
                 <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
            </div>
            {error && <div>{error}</div>}
            <button onClick={handleSubmit}>Login</button>
        </>

    )
}

export default Login;