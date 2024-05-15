const person = {
  name: "Adarsh",
  Address: {
    city: "Kanpur ",
    line: "Mandhana ",
    country: "India",
    landmark: "MPGI Kanpur"
  },
  profile: ["twitter", "linkedin", "instagram"],
  allProfiles: () => {
    let x = "";
    person.profile.map(
      profile => x = x + " " + profile,
      console.log(x),
    )
    return x;
  }
}

function LearningJavaScript() {
  return (
    <>
      <div className="name">My Name is {person.name}</div>
      <div className="add">I am from  {person.Address.city}</div>
      {/* <div className="add">My Profile is on {person.allProfiles()}</div> */}

    </>
  )
}

export default LearningJavaScript;