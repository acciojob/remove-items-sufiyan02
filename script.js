//your JS code here. If required.
document.getElementById("input[type='button']").addEventListener('click',()=>{
	let s = document.getElementById('colorSelect');
	let so = select.options[select.selectedIndex];

	if(so){
		so.remove();
	}
})