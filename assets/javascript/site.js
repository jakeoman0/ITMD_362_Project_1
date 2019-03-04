(function(){
  // Check if browser is new enough
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

})();

  // functions to remove characters not used for input
  function clean_nonnumbers(value) {
    // returns string with no characters that aren't numbers
    return (value.replace(/\D/g,''));
  }

  function strip_us_country_code(value) {
    // remove country code
    return value.replace(/^1/,'');
  }

    // Phone validity function
  function validate_us_phone(value) {
    value=clean_nonnumbers(value);
    if (value.length==11){
    var value = strip_us_country_code(clean_nonnumbers(value));
    }
    console.log(value);
    if (value.length==10){

      return(true);
    }else {
      return(false);
    }
  }
  //  Finds if value is not empty
  function not_empty(value) {

    if(value == ""){
      return(false);
    }else{
      return(true);
    }
  }
  // Finds if email is valid
  function validate_email(value){
    var re = /^[^@\s]+@[^@\s]+$/g;
    console.log(value);
    return(re.test(value));

  }

  document.addEventListener('DOMContentLoaded',function(event){
    //  Find the form inputs
    var quote_form = document.querySelector('#form');
    var email = document.querySelector('#email');
    var name = document.querySelector('#name');
    var phone = document.querySelector('#phone');
    var company = document.querySelector('#company');
    var info = document.querySelector('#info');
    var submit = document.querySelector('#submit');

    //  disable submit button
    submit.disabled=true;

    //  Check the values of functions and see if the meet requirements
    quote_form.addEventListener('keyup',function(){

      if(validate_email(email.value)){
        email.className='valid';
      }else{
        email.className='invalid';
      }

      if(not_empty(name.value)){
        name.className='valid';
      }else{
        name.className='invalid';
      }

      if(not_empty(company.value)){
        company.className='valid';
      }else{
        company.className='invalid';
      }

      if(not_empty(info.value)){
        info.className='valid';
      }else{
        info.className='invalid';
      }

      if(validate_us_phone(phone.value)){
        phone.className='valid';
      }else{
        phone.className='invalid';
      }

      //  unlock the submit button if all values are valid
      if(validate_email(email.value)==true && not_empty(name.value)==true &&not_empty(company.value)==true && not_empty(info.value)==true && validate_us_phone(phone.value)==true){
        submit.className='valid';
        submit.disabled=false;
      }else{
        submit.className='invalid';
        submit.disabled=true;
      }

    });

  });
