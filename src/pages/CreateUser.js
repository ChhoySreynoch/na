import { useState } from "react"

export default function CreateUser(){
    const [user, setUser] = useState({
        "name": "",
        "email": "",
        "password": "",
        "role": "customer",
        "avatar": "https://api.lorem.space/image/face?w=640&h=480"
    })
    return(
        <form>

        </form>
    )
}