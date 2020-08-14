function StudentCards() {
  console.log(people);
  for (let i = 0; i < people.length; i++) {
    const currentPerson = people[i];
    document.getElementById("studentcards").innerHTML += `
        <div class="studentcard">
        <div>
          <img
            class="profileimage"
            src=${currentPerson.pic}
            alt="img"
          />
          <h2>${currentPerson.name}</h2>
        </div>
        <div class="details">
          <div>${currentPerson.role}</div>
          <div>${currentPerson.wow}</div>
          <div><a href=${currentPerson.github}>Github</a></div>
        </div>
      </div>
        `;
  }
}
