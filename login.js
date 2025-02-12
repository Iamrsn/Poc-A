// $(document).ready(function(){
    function login(){
        event.preventDefault();
      let myuid="admin",mypass="123";
      $(".err").remove();
      let uid=$("#txtuid").val().trim();
      let pass=$("#txtpass").val().trim();
      if(uid.length==0)
      {
        let sp="<span class='err'>Please enter userid.</span>";
        $("#txtuid").after(sp);
      }
      if(pass.length==0)
      {
        let sp="<span class='err'>Please enter password.</span>";
        $("#txtpass").after(sp);
      }
      if(uid.length>0 && pass.length>0)
      {
        if(uid==myuid && pass==mypass)
        {
          window.location.href="landing.html";
        }
        else
        {
    let sp="<p class='err text-center'style='padding-top:5px;'invalid userid or password.</p>";
          $("#btn").after(sp);
        }
        }
      };
    // })