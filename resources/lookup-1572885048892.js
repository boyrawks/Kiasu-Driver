(function(window, undefined) {
  var dictionary = {
    "784050d3-3516-4110-a2aa-f6832ac67a13": "Events Plan B",
    "7f55f35e-8681-48c1-b4fb-a4b14d38e504": "Events Plan A",
    "76c2e88c-01fe-4c0d-ac9c-2d1ed677caba": "Settings",
    "b8f23311-7f25-4031-8d8d-12a0bff84b44": "Calendar",
    "91ba4982-6fcc-4954-9cb4-d6f9f4bcc7f0": "Google",
    "4351102c-831c-4624-9b26-18e82a2156b1": "Savings",
    "c9eb5d85-7458-4087-8627-8f02da8aaede": "Plan",
    "db7c4926-f29d-415c-b5c6-2656785a2ba5": "LogIn",
    "081213e6-c168-4fa4-aba6-6007985ce4b6": "Homepage",
    "feefc762-81a9-4f38-a0bb-0ff760f4fa44": "Google",
    "14d62762-8055-47ae-816c-61acb6201275": "Home Template",
    "cc758cc1-3d0e-4ec6-b005-c88b362ec388": "Setting Template",
    "b4594805-6987-4394-9d0d-3758132a6c19": "Saving Template",
    "ef2f14eb-84b7-4b0b-8334-f2f5ed3ac329": "LogIn Template",
    "f6bed819-cc8f-4f16-9248-4a899cb0234d": "Calendar Template",
    "cfb24705-8796-4496-b8ee-2c95ddbe4c6f": "Plan Template",
    "4a8f3ae3-3688-4ff7-901e-cd92bc04f844": "Layout",
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