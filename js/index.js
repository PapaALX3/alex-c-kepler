const footer2 = document.createElement('footer');

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Alex Cornejo " + thisYear + '&#169';

footer.append(copyright);


const skills = ["Javascript", "HTML", "CSS", "Github", "DOM"];

const skillsSection = document.getElementById('Skills');

const skillsList = document.querySelector('#Skills ul');

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
/* handle message form submit */
const messageForm = document.getElementsByName('leave_message')[0].addEventListener('submit', function(event) {
    event.preventDefault();/*to prevent refreshing behavior*/

    const user = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.userMessage.value;
    console.log(user, email, message);

    event.preventDefault();/*to prevent refreshing behavior*/

  
    const messageSection = document.querySelector('#messages');

    if (messageSection) {

        const messageList = messageSection.querySelector('ul');

        const newMessage = document.createElement('li');

        newMessage.innerHTML = `<a href="mailto:${email}">${user}</a><span> ${message}</span>`;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.setAttribute = ('type', 'button');
    
        removeButton.addEventListener('click', function(event){
        const entry = removeButton.parentNode;
        entry.remove();
        });
       
       
        if (messageList) {
            removeButton.appendChild(newMessage);
            messageList.append(newMessage);   
        }
    }   
    
        messageForm.reset();     
    
    });

    /*lesson 13- Promises*/
    fetch('https://api.github.com/users/PapaALX3/repos')
    .then(response =>{
        if (!response.ok){
            throw new Error('Request failed');
            }
        return response.json();
    })
    .then(PapaALX3 => console.log(PapaALX3))
    
    console.log(PapaALX3);
    const projectSection = document.createElement('section');
    const projectList = document.createElement('ul');

    for(let l = 0; l < PapaALX3.length; l++){
            const project = document.createElement('li');
            project.innerText = PapaALX3[l].name; 
            projectList.appendChild(project); 
    }
    document.body.appendChild(projectSection);
    projectSection.appendChild(projectList);
/*.catch(error => console.log('fetch error:', error));*/
 
