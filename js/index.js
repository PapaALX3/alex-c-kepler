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
            newMessage.appendChild(removeButton);
            messageList.append(newMessage);   
        }
    }   
    
        this.reset();     
    
    });

    /*lesson 13- Promises*/
    fetch('https://api.github.com/users/PapaALX3/repos')
    .then(response =>{
        if (!response.ok){
            throw new Error('Request failed');
            }
        return response.json();
    })
    .then(PapaALX3 => {
        for(let l = 0; l < PapaALX3.length; l++){ 
                var repoName = PapaALX3[l].full_name;
                const projectSection = document.createElement('section');
                const projectList = document.createElement('ul');
                const project = document.createElement('li');
                project.innerText = repoName; 
                projectList.appendChild(project); 
                projectSection.appendChild(projectList);
                document.getElementById('Projects').appendChild(projectSection);
        }
    });
    
 
