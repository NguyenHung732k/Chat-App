import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin"

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const { loading, login } = useLogin()

  const handleSubmitForm = (event: any) => {
    event.preventDefault()
    login(inputs.username, inputs.password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmitForm}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              onChange={(event) => setInputs({ ...inputs, username: event.target.value })}
              type="text"
              placeholder="Enter Username"
              className="w-full input inpu-bordered h-10" />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              onChange={(event) => setInputs({ ...inputs, password: event.target.value })}
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10" />
          </div>
          <Link to="/signup" className="text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account ?

          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login