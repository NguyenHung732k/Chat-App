import { Link } from "react-router-dom"
import GenderCheckbox from "../components/GenderCheckbox"
import { useState } from "react"
import useSignUp from "../hooks/useSignUp"


const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const { loading, signup } = useSignUp()

  const handleCheckboxChange = (gender: "male" | "female") => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(inputs)
    signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmitForm}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              onChange={(event) => setInputs({ ...inputs, fullName: event.target.value })}
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              onChange={(event) => setInputs({ ...inputs, username: event.target.value })}
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              onChange={(event) => setInputs({ ...inputs, password: event.target.value })}
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              onChange={(event) => setInputs({ ...inputs, confirmPassword: event.target.value })}
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10" />
          </div>

          <GenderCheckbox selectedGender={inputs.gender} onCheckboxChange={handleCheckboxChange} />

          <Link to="/login">
            Already have an account ?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
              {loading ? "Loading..." : " Sign Up"}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp