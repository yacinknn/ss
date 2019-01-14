function ss(){
	   //  localStorage.removeItem("sad");
		 if (localStorage.sad === undefined ) {
		      localStorage.setItem("sad", 0);
		 }
		 if ( (parseInt(localStorage.getItem("sad")) % 5) == 0) {
	
	     //alert("  ."+localStorage.getItem("sad"));
	      var i =  parseInt(localStorage.getItem("sad"));
	      //alert(i++);
	      var j =i+1;
          localStorage.setItem("sad", j.toString());	
	  //  alert(" show ads ");
		
           AdMob.showInterstitial();
		   AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: false,
      });
        }
else{
	var i =  parseInt(localStorage.getItem("sad"));
	//alert(i);
	 var j =i+1;
	//alert(j);
    localStorage.setItem("sad", ""+j);	
	// alert(" not show ads ");
  } 
 //alert("  ."+localStorage.getItem("sad"));
		}
		
		function dol(id){ 
			ss();
			if (id=='home'){
				window.location.assign('home.html');
			}
			if (id=='a3rad'){
				window.location.assign('a3rad.html');
			}
			if (id=='index'){
				window.location.assign('index.html');
			}
			if (id=='body'){
				window.location.assign('body.html');
			}
			if (id=='info'){
				window.location.assign('info.html');
			}
			if (id=='irchd'){
				window.location.assign('irchd.html');
			}
			if (id=='credit'){
				window.location.assign('credit.html');
			}
		}
//*******
