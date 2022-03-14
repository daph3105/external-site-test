// function myFunction() {
//     document.getElementById("button1").style.color = "red";
//   }

  function myFunction2() {
    document.getElementById("button2").style.color = "blue";
  }

  var app = new Vue({
  el: "#app-cbe",
  data: {
    email: "",
    software_version: "(this value will update after selecting a Software Version)",
    dashboard_name: "(this value will update after selecting a Dashboard Name)",
  },
  delimiters: ["[[", "]]"],
  methods: {
    fireCustomBehavioralEvent: function () {
      //Add your CBE JS here
      _hsq.push([
        "identify",
        {
          email: this.email,
        },
      ]);
      _hsq.push([
        "trackCustomBehavioralEvent",
        {
          name: "pe20777930_software_usage_event",
          properties: {
            software_version: this.software_version,
            dashboard_name: this.dashboard_name,
          },
        },
      ]);
    },
  }
});

  /*
Example code to fire a custom behavioral event
*/

// document.getElementById("button1").onclick = function() {_hsq.push(["trackCustomBehavioralEvent", {
//     name: "pe20777930_page_1",
//     properties: {
//         hs_page_path: "button 1"
//     }
//  }])
//  document.getElementById("button1").style.color = "red";
// };