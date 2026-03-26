import React from 'react'
import { User2Icon, Mail, Lock } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import api from '../configs/api';
import { useDispatch } from 'react-redux';
import { login } from '../app/features/authSlice';
import toast from 'react-hot-toast';

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const query = new URLSearchParams(location.search)
  const urlState = query.get('state')
  const [state, setState] = React.useState(urlState || "login")

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post(`/api/users/${state}`, formData)

      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)

      navigate('/app')

    } catch (error) {
      const msg = error?.response?.data?.message || "Something went wrong"
      toast.error(msg)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const toggleState = () => {
    const newState = state === "login" ? "register" : "login"
    setState(newState)
    navigate(`/login?state=${newState}`, { replace: true })
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      
      <form
        onSubmit={handleSubmit}
        className="sm:w-87.5 w-full text-center bg-white border border-gray-300 rounded-2xl px-8 shadow-lg">

        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-600 text-sm mt-2">
          Please {state} to continue
        </p>

        {/* NAME */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-gray-100 border border-gray-300 h-12 rounded-full pl-6 gap-2 overflow-hidden">
            <User2Icon size={16} />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 appearance-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* EMAIL */}
        <div className="flex items-center w-full mt-4 bg-gray-100 border border-gray-300 h-12 rounded-full pl-6 gap-2 overflow-hidden">
          <Mail size={13} />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 appearance-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="flex items-center mt-4 w-full bg-gray-100 border border-gray-300 h-12 rounded-full pl-6 gap-2 overflow-hidden">
          <Lock size={13} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 appearance-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-5 w-full h-11 rounded-full text-white bg-blue-600 hover:opacity-90 transition">
          {state === "login" ? "Login" : "Sign up"}
        </button>

        {/* TOGGLE */}
        <p
          onClick={toggleState}
          className="text-gray-600 text-sm mt-4 mb-10 cursor-pointer">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="text-blue-600 ml-1 hover:underline">
            click here
          </span>
        </p>

      </form>
    </div>
  )
}

export default Login;