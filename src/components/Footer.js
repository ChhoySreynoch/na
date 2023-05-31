import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div class="container">
        <footer class="py-5">
            <div class="row">
            <div class="col-6 col-md-4 mb-3">
                <h5>Codewithmey</h5>
                <p>
                    Sharing is my happines 👩🏻‍💻
                </p>
            </div>

        

            <div class="col-6 col-md-2 mb-3">
                <h5>Community</h5>
                <p>
                    <Link to={"https://t.me/mentors_it"} className="text-decoration-none"> Join 👩🏻‍💻 Community </Link>
                </p>
                
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
                <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                    <button class="btn btn-outline-primary" type="button">Joined</button>
                </div>
                </form>
            </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Codewithmey, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
            </ul>
            </div>
        </footer>
        </div>
  )
}