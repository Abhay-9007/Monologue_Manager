
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function AuthSuccess() {
    const navigate = useNavigate()

    useEffect(() => {
        const handleAuth = async () => {
            const params = new URLSearchParams(window.location.search)
            const accessToken = params.get("token")

            if (!accessToken) {
                console.error("No token found")
                navigate("/login")
                return
            }

            localStorage.setItem("accessToken", accessToken)

            try {
                const res = await fetch("http://localhost:3000/auth/me", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })

                const data = await res.json()

                console.log(data)

                if (res.ok && data.success) {
                    navigate("/data")
                } else {
                    console.error("Authentication failed")
                    localStorage.removeItem("accessToken")
                    navigate("/login")
                }
            } catch (error) {
                console.error("Error fetching user:", error)
                localStorage.removeItem("accessToken")
                navigate("/login")
            }
        }

        handleAuth()
    }, [navigate])

    return (
        <div>
            <h1>Logging In...</h1>
        </div>
    )
}

export default AuthSuccess

