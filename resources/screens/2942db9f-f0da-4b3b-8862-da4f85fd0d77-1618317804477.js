jQuery("#simulation")
  .on("click", ".s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_3","#s-Button_6","#s-Button_5","#s-Button_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_15","#s-Button_19","#s-Button_7","#s-Button_10","#s-Button_18","#s-Button_13","#s-Button_11","#s-Button_16","#s-Button_12","#s-Button_22","#s-Button_9","#s-Button_14","#s-Button_20","#s-Button_21","#s-Button_8","#s-Button_17" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#35B736"
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
    } else if(jFirer.is("#s-Image_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_10","#s-Button_9","#s-Button_7","#s-Button_14","#s-Button_13","#s-Button_11","#s-Button_8","#s-Button_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#35B736"
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#35B736"
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
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#35B736"
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
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_15","#s-Button_19","#s-Button_18","#s-Button_20","#s-Button_21","#s-Button_16","#s-Button_22","#s-Button_17" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
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
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
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
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#35B736"
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
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
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
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
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
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
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
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
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
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_20 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_21 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D6D6D6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#9FBEE3"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_13 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#35B736"
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
    } else if(jFirer.is("#s-Button_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_14 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#FD9727"
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
    } else if(jFirer.is("#s-Button_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#E2202C"
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
    } else if(jFirer.is("#s-Button_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2942db9f-f0da-4b3b-8862-da4f85fd0d77 #s-Button_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#FD9727"
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
    } else if(jFirer.is("#s-Button_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7e124c9f-cb37-416b-95b2-bae7d761afb7"
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
    } else if(jFirer.is("#s-Button_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2942db9f-f0da-4b3b-8862-da4f85fd0d77"
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