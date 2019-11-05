jQuery("#simulation")
  .on("click", ".s-081213e6-c168-4fa4-aba6-6007985ce4b6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Notification-lite_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Events",
                    "fields": {
                      "EventName": {
                        "datatype": "property",
                        "target": "#s-Label_106",
                        "property": "jimGetValue"
                      },
                      "EventTime": {
                        "datatype": "property",
                        "target": "#s-Label_108",
                        "property": "jimGetValue"
                      },
                      "Location": {
                        "datatype": "property",
                        "target": "#s-Label_107",
                        "property": "jimGetValue"
                      },
                      "Parking": {
                        "datatype": "property",
                        "target": "#s-Label_111",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-081213e6-c168-4fa4-aba6-6007985ce4b6 #s-Image_20 > svg": {
                      "attributes": {
                        "overlay": "#3F72AF"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Events",
                    "fields": {
                      "EventName": {
                        "datatype": "property",
                        "target": "#s-Label_106",
                        "property": "jimGetValue"
                      },
                      "EventTime": {
                        "datatype": "property",
                        "target": "#s-Label_108",
                        "property": "jimGetValue"
                      },
                      "Location": {
                        "datatype": "property",
                        "target": "#s-Label_107",
                        "property": "jimGetValue"
                      },
                      "Parking": {
                        "datatype": "property",
                        "target": "#s-Label_111",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-081213e6-c168-4fa4-aba6-6007985ce4b6 #s-Image_20 > svg": {
                      "attributes": {
                        "overlay": "#F46036"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7f55f35e-8681-48c1-b4fb-a4b14d38e504",
                    "transition": {
                      "type": "slideleft",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Events",
                    "fields": {
                      "EventName": {
                        "datatype": "property",
                        "target": "#s-Label_112",
                        "property": "jimGetValue"
                      },
                      "EventTime": {
                        "datatype": "property",
                        "target": "#s-Label_118",
                        "property": "jimGetValue"
                      },
                      "Location": {
                        "datatype": "property",
                        "target": "#s-Label_113",
                        "property": "jimGetValue"
                      },
                      "Parking": {
                        "datatype": "property",
                        "target": "#s-Label_119",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-081213e6-c168-4fa4-aba6-6007985ce4b6 #s-Image_22 > svg": {
                      "attributes": {
                        "overlay": "#021D5B"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7f55f35e-8681-48c1-b4fb-a4b14d38e504",
                    "transition": {
                      "type": "slideleft",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Events",
                    "fields": {
                      "EventName": {
                        "datatype": "property",
                        "target": "#s-Label_109",
                        "property": "jimGetValue"
                      },
                      "EventTime": {
                        "datatype": "property",
                        "target": "#s-Label_117",
                        "property": "jimGetValue"
                      },
                      "Location": {
                        "datatype": "property",
                        "target": "#s-Label_110",
                        "property": "jimGetValue"
                      },
                      "Parking": {
                        "datatype": "property",
                        "target": "#s-Label_116",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-081213e6-c168-4fa4-aba6-6007985ce4b6 #s-Image_21 > svg": {
                      "attributes": {
                        "overlay": "#021D5B"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7f55f35e-8681-48c1-b4fb-a4b14d38e504",
                    "transition": {
                      "type": "slideleft",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 300
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
  })
  .on("pageload", ".s-081213e6-c168-4fa4-aba6-6007985ce4b6 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Date-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Login",
                    "value": {
                      "field": "Login"
                    }
                  }
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Label_83","#t-Image_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Date-Label_2" ],
                    "value": "Thursday, 31 October"
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
  })
  .on("pageunload", ".s-081213e6-c168-4fa4-aba6-6007985ce4b6 .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Date-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Label_83","#t-Image_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Login"
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