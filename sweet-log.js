SweetLog = new function() {
	var debugging = false;
	var logLevel = "none";
  var allowedTags = [];
  
  function debug() {
    if($.browser.msie){
	    return;
	  }
	  if(logLevel == 'debug')
		  log('info', arguments);
	}
  
	function info() {
	  if($.browser.msie){
	    return;
	  }
	  var levels = ['info', 'debug'];
	  if(levels.indexOf(logLevel) != -1)
		  log('info', arguments);
	}

	function warn() {
	  if($.browser.msie){
	    return;
	  }
	  var levels = ['warn', 'info', 'debug'];
	  if(levels.indexOf(logLevel) != -1)
		  log('warn', arguments);
	}

	function error() {
	  if($.browser.msie){
	    return;
	  }
	  var levels = ['error', 'warn', 'info', 'debug'];
	  if(levels.indexOf(logLevel) != -1)
		  log('error', arguments);
  }

	function log(level) {
	  // insert check for tags which is now loggingArguments
		if (!debugging) {
			return;
		}
		var loggingArguments = argsToArray(arguments[1]);
	  var text = loggingArguments.shift();
	  if(!anyTagsMatch(loggingArguments)){
	    return;
	  }
		switch(level) {
		case 'debug':
			console.debug(text);
			break;
		case 'info':
			console.log(text);
			break;
		case 'warn':
			console.warn(text);
			break;
		case 'error':
			console.error(text);
			break;
		}
	}
	
	function anyTagsMatch(tags){
	  if(allowedTags.indexOf("all") != -1){
	    return true;
	  }
	  var matching = false;
	  for(var i=0;i<allowedTags.length;i++) {
      for(var j=0;j<tags.length;j++) {
        if(tags[j] == allowedTags[i]) {
         matching = true;
        }
      }
    }
    return matching;
	}
	
	function argsToArray(args){
	  var newArgs = new Array();
	  for(var i=0; i<args.length; i++)
        newArgs.push(args[i]);
    return newArgs;
	}
	
	function inspect(item){
    if (!debugging) {
			return;
		}
		console.dir(item);
  }
	
	function setLevel(newLevel){
	  logLevel = newLevel;
	}
	
	function settings(){
	  console.log("Debug:");
	  console.log(debugging);
	  console.log("Log Level:");
	  console.log(logLevel);
	  console.log("Tags:");
	  console.log(allowedTags);
	}
	
	function enable(){
	  debugging = true;
	}
	
	function disable(){
	  debugging = false;
	}
	
	function setTags(){
	  allowedTags = argsToArray(arguments);
	}

	return {
	  debug: debug,
		info: info,
		warn: warn,
		error: error,
		inspect: inspect,
		setLevel: setLevel,
		enable: enable,
		disable: disable,
		setTags: setTags,
		settings: settings
	};
}();

if (typeof console == "undefined" || typeof console.log == "undefined") var console = { log: function() {}, warn: function(){}, debug: function(){}, error: function(){} }; 
