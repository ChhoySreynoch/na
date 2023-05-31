function UserCard({users}) {
    
    return (
      users && users.map(user => (
          <div className="col-sm-6 col-lg-4 col-xl-2" key={user.id}>
              <div class="card h-100 border-0 shadow-sm">
              <img src={user.avatar} class="card-img-top" alt="product" />
              <div class="card-body">
                  <h5 class="card-title">{user.name}</h5>
              </div>
              </div>
          </div>
      ))
    )
  }
  
  export default UserCard