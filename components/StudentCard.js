function StudentCard(name, photo, role, wOW, github) {
  document.getElementById("studentcard").innerHTML = `
    <div class="studentcard">
    <div>
      <img
        class="profileimage"
        src=${photo}
        alt="img"
      />
      <h2>${name}</h2>
    </div>
    <div class="details">
      <div>${role}</div>
      <div>${wOW}</div>
      <div><a href=${github}>Github</a></div>
    </div>
  </div>
    `;
}
///"https://images.media-allrecipes.com/userphotos/429450.jpg"
//Do it
//Instructor
//"https://github.com/cawilson1"
