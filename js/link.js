    function redirectUserDiplay(){
    location.href = "userprofiledisplay.html";
   }

   function redirectUserEdit(){
     location.href= "userprofile.html";
   }

   function redirectAquaScan(){
     location.href="aqua-scan.html";
   }

   function redirectRunChart() {
    location.href="runchart.html";
   }

  function redirectDashboard() {
    location.href="dashboard.html";
  }

(function($) {
  $(document).ready(function() {
    $('.button-login').click(function(e) {
      e.preventDefault();
      location.href="dashboard.html";
    });
  });
})(jQuery);


function openNext(old,accordionNumber){
            $old=$(old).closest(".accordion-section");
            var $content=$old.find(".accordion-section-content");
            $content.slideToggle(function(){
              var $el=$old.find(".accordion-btn");
              $el.removeClass("open fa-minus-square-o").addClass("close fa-plus-square-o");
              $("#accordion-divider-"+ (accordionNumber-1)).height(40);
            });
            if(accordionNumber)
            {
              var $this=$('[data-accordion-id="'+ accordionNumber +'"]');
              var $el=$this.find(".accordion-btn");
              var $content=$this.find(".accordion-section-content");

                $content.slideToggle(function(){
                $el.removeClass("close fa-plus-square-o").addClass("open fa-minus-square-o");
                $("#accordion-divider-"+ accordionNumber).height($this.height()-10);
                });
            }

          }
        (function($) {

          $(".accordion .open" ).each(function( index,element ) {
            var $this=$(this);
            var $parent=$this.closest(".accordion-section")
            var accordionid=$parent.data("accordion-id");
            console.log(accordionid)
            $("#accordion-divider-"+ accordionid).height($parent.height()-10);
          });

          $('.accordion > .accordion-section > .accordion-header').click(function() {
            var $this=$(this);
            var $el=$this.find(".accordion-btn");
            var $parent=$this.parent(".accordion-section")
            var accordionid=$parent.data("accordion-id");
            var $content=$this.next();
              $content.slideToggle(function(){
                if($el.hasClass('open'))
              {

                $el.removeClass("open fa-minus-square-o").addClass("close fa-plus-square-o");
                $("#accordion-divider-"+ accordionid).height("40px");
              }else
              {
                $el.removeClass("close fa-plus-square-o").addClass("open fa-minus-square-o");
                $("#accordion-divider-"+ accordionid).height($parent.height()-10);
              }
              });


            });
        })(jQuery);
