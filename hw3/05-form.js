function handleSubmit(event) {
  // Add your code here
}
let form = document.querySelector('form');
  form.addEventListener("submit", event =>{
    event.preventDefault();
    console.group('========Form submission========')
    console.log('Name:  ', form.elements.name.value);
    console.log('Email ', form.elements.email.value);
    if(form.elements.comments.value.length > 0){
      console.log('Feedback: ', form.elements.comments.value);
    }
    if(form.elements.signup.checked){
      console.log('Newletter: Yes, I would like to join the newsletter.');
    }
    else{
      console.log('Newsletter: No, I would not like to join the newsletter');
    }
    console.groupEnd();
  });