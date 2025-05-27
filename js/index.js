const footer = document.querySelector('footer');

const today = document.createElement('h4');
today.className = 'today';
today.innerHTML = new Date();


const thisYear = document.createElement('h5');
thisYear.className = 'thisYear';
thisYear.innerHTML = new Date().getFullYear();

const copyright = document.createElement('p');

copyright.innerHTML = 'Alexander Cornejo ' + thisYear.innerHTML + ' &#169';
footer.append(copyright);


const skills = ["Javascript", "HTML", "CSS", "Github", "DOM"];

const skillsSection = document.getElementById('Skills');

const skillsList = document.querySelector('#Skills ul');

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
