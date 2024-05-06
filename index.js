const name =document.querySelector('#name');
const email =document.querySelector('#email');
const age =document.querySelector('#age');
const contact =document.querySelector('#contact');
const submitbtn =document.querySelector('button');
const tbody =document.querySelector('tbody');

const userdetails=[];
submitbtn.addEventListener("click",()=>
{

if(!name.value && !email.value && !age.value && !contact.value)
{
    alert("Please enter details properly");
    return;
}

const userdata={
    name:name.value,
    email:email.value,
    age:age.value,
    contact:contact.value
}
// push to add element to array

userdetails.push(userdata);

//erase the previous outputs

name.value="";
email.value="";
age.value="";
contact.value="";


// to print userdetails in table format

displaydata(); // fun call
})

//table,tr,th,td

function displaydata(){
    tbody.innerText=""; //table-old value erase
    userdetails.forEach((user)=>{

    const tr=document.createElement('tr'); //<tr> </tr>
const nameData=document.createElement('td');
const emailData=document.createElement("td");
const ageData=document.createElement("td");
const contactData=document.createElement("td");

nameData.innerText=user.name;
emailData.innerText=user.email;
ageData.innerText=user.age;
contactData.innerText=user.contact;

tr.append(nameData);
tr.append(emailData);
tr.append(ageData);
tr.append(contactData);

tbody.append(tr); // one row created and paste all columns

})

}







//     if(name.value == "" && email.value=="" && age.value=="" && contact.value=="")
// {
//     alert('Enter the details properly');
// }
// if(email.value==""){
//     alert('email is invalid');
// }
// if(age.value=="" && age.value.length<4){
//     alert('Enter the age properly');
// }
// if(contact.value="" && contact.value.length!==10)
// {
//     alert('contact number should be 10');
// }