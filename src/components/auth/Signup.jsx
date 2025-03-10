import React, { useState , useEffect } from 'react'
import Select from "react-select";
import { auth } from '../../constant/auth'
import { motion } from 'motion/react';
import google from '../../assets/google.png'
import { userResgistration, verifyOtp } from '../../api/auth';
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { otpReq, otpReqSuccess, otpverifeid, signInFailed, signInReq, signInSucces } from '../../redux/feature/auth/signIn';
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from 'react-hot-toast';
import GoogleLogin from './GoogleLogin';
function Signup({ setSignIn }) {
  const [emailOtp, setEmailOtp] = useState(false)
  const { register, formState: { errors }, handleSubmit, control } = useForm()
  const { userId } = useParams()
  const naviagte = useNavigate()
  const { loadingSignIn, user  , otploading } = useSelector((state) => state.signIn)
  const { } = useSelector((state) => state.menu)
  const dispatch = useDispatch()
  const [resendBtn, setResendBtn] = useState(false)
    const [resendtime, setResendTime] = useState(60);
    useEffect(() => {
      const handleResend = () => {
        const currentTime = resendtime
        if (currentTime === 0) {
          setResendBtn(true)
        } else {
          setResendBtn(false);
          const time = setTimeout(() => {
            setResendTime(currentTime - 1)
          }, 1000);
        }
       
      }
      if(emailOtp){
        handleResend()
      }
      
    }, [resendtime , emailOtp])
  
    const handleResendOtp = async () => {
      try {
        dispatch(otpReq())
        const res = await resendOtp(userId)
        toast.success(res.message)
        if (res.success) {
          setResendTime(60)
        }
        dispatch(otpReqSuccess())
      } catch (error) {
        toast.error(error.message)
        dispatch(otpReqSuccess())
        console.log(error);

      }
    }
  const days = Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 }));
  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => ({
    value: currentYear - i,
    label: currentYear - i,
  }));
  const handleSignIn = async (data) => {
    try {
      console.log(data);
      const day = String(data.day?.value || data.day).padStart(2, "0");
      let month = String(data.month?.value || data.month).padStart(2, "0");
      const year = String(data.year?.value || data.year);
      const monthIndex = parseInt(month, 10) - 1;
      const dob = new Date(Date.UTC(year, monthIndex, day))
      const updatedData = { ...data, dob };
      delete updatedData.day;
      delete updatedData.month;
      delete updatedData.year;
      dispatch(signInReq())
      const res = await userResgistration(updatedData);
      toast.success(res.message, {
        position: "top-right",
      })
      setEmailOtp(true)
      naviagte(`/auth/${res.data._id}`)
      dispatch(signInSucces())
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data.message, {
        position: "top-right",
      })
      dispatch(signInFailed(error.response.data.data))
    }

  }
  const handleOtp = async (e) => {
    try {
      dispatch(signInReq())
      console.log(userId);
      const res = await verifyOtp(e, userId)
      console.log(res);

      toast.success(res.message, {
        position: "top-right",
      })
      dispatch(otpverifeid(res.data.loggedInUser))
      console.log(res.data.loggedInUser);

      console.log(user);


      const expiresIn = res.data.accessTokenExpiryTime
      console.log(expiresIn);

     
      const loggedInUser = res.data.loggedInUser;
      console.log(loggedInUser);


      localStorage.setItem("expiryTime", JSON.stringify(expiresIn))
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
      if (res.success) {
        naviagte('/')
      }

    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
      })
      console.log(error.response.data.message);

      dispatch(signInFailed(error.response.data.data))
      console.log(error.response.data.data);

    }

  }


  return (
    <div className='w-92 sm:w-[100%] md:w-[80%] bg-white lg:w-[65%] flex flex-col md:gap-3 lg:gap-4 md:px-3 border-b-2 p-3 rounded-xl border-r-2 border-gray-500 lg:p-5 lg:px-5'>
      <div className='flex flex-col'>
        <div className='w-full text-[34px] sm:text-[35px] lg:text-[45px] font-oswald'>
          {auth.signUp.title}
        </div>
        <div className='flex gap-2 font-outfit'>
          <p>
            {auth.signUp.existingUser}
          </p>
          <p className='text-[#FF1C1C] hover:cursor-pointer' onClick={() => setSignIn(true)}>
            {auth.signUp.signIn}
          </p>
        </div>
      </div>
      <div className='font-outfit' >
        {
          auth.signUp.signupwithmail
        }
      </div>
      <form action=""
        onSubmit={emailOtp ? handleSubmit(handleOtp) : handleSubmit(handleSignIn)}>
        {
          emailOtp ? (
            <motion.div className='flex flex-col gap-2'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "circOut" }}>

              <div>
                <label htmlFor="otp" className='text-[]'>{auth.signUp.otp} </label>
                <div className='text-[13px]'>
                  <p>{auth.signUp.otpBoxText}</p>
                </div>
                <input
                  type="text"
                  id="otp"
                  className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                  {...register("otp", {
                    required: true,
                  })}
                />
                {errors.email && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
              </div>

              <div className=' flex justify-center '>
                {
                  loadingSignIn ? (
                    <button type='submit'
                      disabled={loadingSignIn}
                      className='bg-gray-400 font-outfit text-[15px] flex justify-center items-center gap-2 text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                      <p>{auth.signUp.createing}</p>
                      <LuLoaderCircle className='animate-spin' />
                    </button>
                  ) : (
                    <button type='submit'
                      className='bg-[#FF1C1C] font-outfit text-[15px] text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                      {auth.signUp.create}
                    </button>
                  )
                }
              </div>
            </motion.div>

          ) : (
            <div>
              <div>
                <label htmlFor="email" className='font-outfit text-[13px]'>{auth.signUp.email}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
              </div>
              <div className='flex gap-2'>
                <div className=''>
                  <label htmlFor="firstName" className='font-outfit text-[13px]'>{auth.signUp.first}</label>
                  <input type="text"
                    id="firstName"
                    className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                    {...register("firstName", {
                      required: true,
                    })}
                  />
                  {errors.firstName && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
                </div>
                <div>
                  <label htmlFor="lastName" className='font-outfit text-[13px]'>{auth.signUp.last}</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                    {...register("lastName", {
                      required: true,
                    })}
                  />
                  {errors.lastName && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
                </div>

              </div>
              <div>
                <div className='font-outfit text-[13px]'>
                  {auth.signUp.date}

                </div>
                <div>
                  <div className="flex gap-2 w-full">
                    <div className="w-1/3">
                      <label htmlFor="day" className="font-outfit text-[13px] text-black">{auth.signUp.Day}</label>
                      <Controller
                        name="day"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={days}
                            placeholder="Day"
                            styles={{
                              control: (base) => ({
                                ...base,
                                width: "100%",
                                fontFamily: "'Outfit', sans-serif",
                                height: "40px",
                                border: "1px solid black",
                                borderRadius: "4px",
                                backgroundColor: "white",
                                color: "black",
                                display: "flex",
                                alignItems: "center",
                              }),
                              placeholder: (base) => ({
                                ...base,
                                color: "#000",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }),
                              singleValue: (base) => ({
                                ...base,
                                color: "black",
                              }),
                            }}
                          />
                        )}
                      />
                    </div>
                    <div className="w-1/3">
                      <label htmlFor="month" className="font-outfit text-[13px] text-black">{auth.signUp.month}</label>
                      <Controller
                        name="month"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={months}
                            placeholder="Month"
                            styles={{
                              control: (base) => ({
                                ...base,
                                width: "100%",
                                fontFamily: "'Outfit', sans-serif",
                                height: "40px",
                                border: "1px solid black",
                                borderRadius: "4px",
                                backgroundColor: "white",
                                color: "black",
                                display: "flex",
                                alignItems: "center",
                              }),
                              placeholder: (base) => ({
                                ...base,
                                color: "#000",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }),
                              singleValue: (base) => ({
                                ...base,
                                color: "black",
                              }),
                            }}
                          />
                        )}
                      />
                    </div>
                    <div className="w-1/3">
                      <label htmlFor="year" className="font-outfit text-[13px] text-black">{auth.signUp.year}</label>
                      <Controller
                        name="year"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={years}
                            placeholder="Year"
                            styles={{
                              control: (base) => ({
                                ...base,
                                width: "100%",
                                fontFamily: "'Outfit', sans-serif",
                                height: "40px",
                                border: "1px solid black",
                                borderRadius: "4px",
                                backgroundColor: "white",
                                color: "black",
                                display: "flex",
                                alignItems: "center",
                              }),
                              placeholder: (base) => ({
                                ...base,
                                color: "#000",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }),
                              singleValue: (base) => ({
                                ...base,
                                color: "black",
                              }),
                            }}
                          />
                        )}
                      />
                    </div>
                  </div>

                </div>
              </div>
              <div className=' flex justify-center mt-2'>
                {
                  loadingSignIn ? (
                    <button type='submit'
                      disabled={loadingSignIn}
                      className='bg-gray-400 font-outfit text-[15px] flex justify-center items-center gap-2 text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                      <p>{auth.signUp.createing}</p>
                      <LuLoaderCircle className='animate-spin ' />
                    </button>
                  ) : (
                    <button type='submit'
                      className='bg-[#FF1C1C] font-outfit text-[15px] text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                      {auth.signUp.create}
                    </button>
                  )
                }
              </div>

            </div>
          )
        }

      </form>
      {
        emailOtp && (
          <motion.div className=' flex justify-center sm:mt-2 md:mt-0 mt-2 '
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "circOut" }}>
            <button type='submit'
              onClick={handleResendOtp}
              disabled={!resendBtn}
              className={`${(resendBtn && !otploading) ? "bg-[#FF1C1C]" : "bg-gray-400"} font-outfit text-[15px] flex justify-center items-center gap-2 text-white px-4 py-1 rounded-md hover:cursor-pointer`}>
              {
                resendBtn ? <div>
                  {
                    otploading ? <div className='flex gap-1 font-oswald'>
                      <p>{auth.signIn.otpResendIng}</p>
                      <LuLoaderCircle className='animate-spin mt-1 ' />

                    </div> : <p>{auth.signIn.otpResend}</p>
                  }
                </div> : <div className='flex gap-1'><p>{auth.signIn.otpResend} in :</p>
                  {resendtime}
                </div>
              }
            </button>
          </motion.div>
        )
      }

      <div className="flex items-center gap-2">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="text-black font-medium font-outfit text-[24px]">Or</div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className='w-full flex gap-6 justify-center items-center pb-5'>
        {/* <button className='py-1 font-outfit text-[15px] flex justify-center items-center gap-2  w-full border rounded-3xl hover:cursor-pointer'>
          <div className=' flex justify-center h-8'>
            <img src={google} alt="google" />
          </div>
          <div className='flex justify-center items-center '>
            {auth.signIn.google}
          </div>
        </button>  */}
        <GoogleLogin />

      </div>
    </div>
  )
}

export default Signup
