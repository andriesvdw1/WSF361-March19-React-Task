function UserProfile(){
    //define the user object 
    const user = {
        firstName: "Emily",
        lastName: "Johnson",
        age: 29,
        city: "New York"
      };

    
    return (
        <div>
            {getFullName(user)}<br/>
            Age: {user.age}<br/>
            Location: {user.city}           
        </div>
    )
};

function getFullName(user) {
    return `User Name: ${user.firstName} ${user.lastName}`;
};

export default UserProfile;