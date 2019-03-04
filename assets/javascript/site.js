(function(){
  // Check if browser is new enough
  console.log("good");
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

})();

  // functions to remove characters not used for input
  function clean_nonnumbers(value) {
    // returns string with no characters that aren't numbers
    return value.replace(/\D/g,'');
  }

  function strip_us_country_code(value) {
    // remove country code
    return value.replace(/^1/,'');
  }

  function clean_whitespace(value) {
    // returns value without any spaces
    return value.replace(/\s/g, '');
  }



    // Phone validity functions
  function validate_us_phone(value) {
    value=clean_nonnumbers(value);
    if (value.length==11)
    {
    var value = strip_us_country_code(clean_nonnumbers(value));
    }
    console.log(value);
    if (value.length==10)
    {

      return(true);
    }
    else {
      return(false);
    }
  }

  function not_empty(value) {

    if(value == "")
    {
      return(false);
    }
    else
    {
      return(true);
    }
  }

  function validate_email(value)
  {
    var re = /^[^@\s]+@[^@\s]+$/g;
    console.log(value);
    return(re.test(value));

  }
/*

*/
  document.addEventListener('DOMContentLoaded',function(event){
    //  Find the form inputs
    var quote_form = document.querySelector('#form');
    var email = document.querySelector('#email');
    var name = document.querySelector('#name');
    var phone = document.querySelector('#phone');
    var company = document.querySelector('#company');
    var info = document.querySelector('#info');
    var submit = document.querySelector('#submit');
    console.log("loaded");

    submit.disabled=true;

    quote_form.addEventListener('keyup',function(){
      console.log(validate_us_phone(phone.value));
      console.log(not_empty(name.value));
      console.log(validate_email(email.value));

      if(validate_email(email.value))
      {
        email.className='valid';
      }
      else
      {
        email.className='invalid';
      }

      if(not_empty(name.value))
      {
        name.className='valid';
      }
      else
      {
        name.className='invalid';
      }

      if(not_empty(company.value))
      {
        company.className='valid';
      }
      else
      {
        company.className='invalid';
      }

      if(not_empty(info.value))
      {
        info.className='valid';
      }
      else
      {
        info.className='invalid';
      }

      if(validate_us_phone(phone.value))
      {
        phone.className='valid';
      }
      else
      {
        phone.className='invalid';
      }
      if(validate_email(email.value)==true && not_empty(name.value)==true &&not_empty(company.value)==true && not_empty(info.value)==true && validate_us_phone(phone.value)==true)
      {
        submit.className='valid';
        submit.disabled=false;
      }
      else
      {
          submit.className='invalid';
          submit.disabled=true;
      }

    });
    //console.log(validate_us_phone(phone));



  });
