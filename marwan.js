document.addeventlistener("contextmenu",function(e){e.preventdefault();
});
document.onkeydown=function(e){if(event.keycode==123){return false;
}
if(e.ctrl&&e.shiftkey&&e.keycode=="I"charCodeAt(0)){
	return false;
}
if(e.ctrl&&e.shiftkey&&e.keycode=="c"charCodeAt(0)){
	return false;
}if(e.ctrl&&e.shiftkey&&e.keycode=="J"charCodeAt(0)){
	return false;
}if(e.ctrl&&e.shiftkey&&e.keycode=="u"charCodeAt(0)){
	return false;

}
};
document.addeventlistener('keyup',(e)=>{
	navigator.cliboard.writeText('');
	alert('screenshot Disabled');
});
document.addeventlistener('keyup',(e)=>{
	navigator.cliboard.writeText('');
	alert('screenrecorder Disabled');
});


