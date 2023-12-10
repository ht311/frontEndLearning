import { useEffect,useState } from "react";
import { Listitem } from "./components/Listitem";
import type{ User } from "./types/user";
import axios from "axios"



export const App = ()=> {

  const [users,setUsers] = useState<User[]>([])

  useEffect(()=>{
    axios.get<User[]>("https://example.com/users").then((res)=>{
      setUsers(res.data)
    })
  },[])

  return (
    <div>
      {users.map(user=>(
        <Listitem id={user.id} name={user.name} age={user.age} parsonalColor={user.parsonalColor}></Listitem>
      ))}
    </div>
  );
}

export default App;
