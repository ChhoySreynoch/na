import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import secureLocalStorage from 'react-secure-storage'
import { fetchProfile } from '../redux/actions/profileAction'

export default function Profile() {
    const dispatch = useDispatch()
	const {profile} = useSelector(state => state.profileR)
    const {isLogin} = useSelector(state => state.authR)

    useEffect(() => {
        const auth = secureLocalStorage.getItem("kiki")
        dispatch(fetchProfile(auth ? auth.access_token : ""))
        .then(res => {
            console.log(profile)
        })
    }, [])

  return (
    <main>
        {
            isLogin ? 
                <div class="container my-5">
                <div class="p-5 text-center bg-body-tertiary rounded-3">
                    {/* <svg class="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="100" height="100"><use xlink:href="#bootstrap"></use></svg> */}
                    <h1 class="text-body-emphasis mb-4">{profile && profile.name}</h1>
                    <img src={profile && profile.avatar} alt="" width={200} className="rounded-circle" />
                    <p class="col-lg-8 mx-auto fs-5 text-muted mt-3">
                    Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
                    </p>
                    <div class="d-inline-flex gap-2 mb-5">
                    <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                        Call me
                        {/* <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg> */}
                    </button>
                    <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                        Message Me
                    </button>
                    </div>
                </div>
            </div>
            : 

            <div class="container my-5">
                <div class="p-5 text-center bg-body-tertiary rounded-3">
                    {/* <svg class="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="100" height="100"><use xlink:href="#bootstrap"></use></svg> */}
                    <h1 class="text-body-emphasis mb-4">You don't have authorizated to access</h1>
                    
                    <p class="col-lg-8 mx-auto fs-5 text-muted mt-3">
                        <code>Please login</code>
                    </p>
                    <div class="d-inline-flex gap-2 mb-5">
                    <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                        Call Me
                        {/* <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg> */}
                    </button>
                    <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                        Message Me
                    </button>
                    </div>
                </div>
            </div>
        }
    </main>
  )
}

