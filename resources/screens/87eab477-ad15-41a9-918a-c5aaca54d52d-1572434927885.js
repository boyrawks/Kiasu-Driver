jQuery("#simulation")
  .on("click", ".s-87eab477-ad15-41a9-918a-c5aaca54d52d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Carpark",
                    "fields": {
                      "Location": {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },
                      "Distance (m)": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },
                      "Hourly Rate": {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });