(function(window, undefined) {
  var dictionary = {
    "2942db9f-f0da-4b3b-8862-da4f85fd0d77": "Steekproef_matrijs",
    "7e124c9f-cb37-416b-95b2-bae7d761afb7": "Steekproef_resultaat",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Main",
    "f6f064d4-5180-4f6f-b0e6-a2ee327d0a83": "Steekproef_select",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);