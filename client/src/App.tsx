import './App.css'

type User = {
  username: string;
  displayname: string;
  email: string;
  password: string;
}

const UserInfoComponent = (props: any) => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div style={{fontSize: "21px", fontWeight: "bold"}}>
        {props.title}:
      </div>
      <div>{props.value}</div>
    </div>
  )
}

const UserComponent = ({username, email, password}: User) => {
    return (
      <div style={{width: '200px', display: 'flex', backgroundColor: 'pink', alignItems: 'center', flexDirection: 'column', padding: '20px', borderRadius: "10px", margin: '5px'}}>
        <UserInfoComponent title="username" value={username}/>
        <UserInfoComponent title="email" value={email}/>
        <UserInfoComponent title="password" value={password}/>
      </div>
    )
}

const App = () => {
  const user: User = {
    displayname: "Toto",
    username: "Toto",
    email: "toto@gmail.com",
    password: "Toto123?"
  }

  return (
    <div>
      <h1>User: {user.displayname}</h1>
      <UserComponent username={user.username} email={user.email} password={user.password} displayname={user.displayname}/>
      {/* <UserComponent {...user}/> */}
    </div>
  )
}

export default App
