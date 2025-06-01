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
/* adding messages */
const messageForm = document.getElementsByName('leave_message')[0];
const submit = document.getElementsByName('Submit')[0];

messageForm.addEventListener('click', function(event) {
    event.preventDefault();

    var userName = messageForm.elements.usersName.value;
    var email = messageForm.elements.usersEmail.value;
    var message = messageForm.elements.userMessage.value;
    console.log(userName, email, message);
    
    const messageSection = document.getElementById('messages');
    var messageList = document.querySelector('messages ul');
    const newMessage = document.createElement('li');
    
    const linkElement = document.createElement('a');
    linkElement.href = 'mailto:usersEmail';
    
    const span = document.createElement('span');
    span.innerText = "usersMessage";
    
    newMessage.innerHTML = linkElement.innerHTML + span.innerHTML;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.setAttribute = 'type';
    
    removeButton.addEventListener('click', function(event){
        const entry = document.getElementById('li');
        const parent = entry.ul;

        entry.remove();
    });
    removeButton.appendChild(newMessage);
    newMessage.append(messageList);
 
    messageForm.reset();     
});
    
