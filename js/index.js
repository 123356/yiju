 {
	let prev=document.querySelector(".prev");
	let next=document.querySelector(".next");
	let ineer=document.querySelector(".innwe");
	let n=0;
	next.onclick=function(){
	n++;
	prev.classList.remove("active");
	console.log(this);
	if(n===2){
		this.classList.add("active");
		console.log(this);
	}
	if(n===3){
		n=2;
		return;
	}
	ineer.style.marginLeft=1190*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("active");
		if(n===0){
		this.classList.add("active");
	}
	if(n===-1){
		n=0;
		return;
	}
	ineer.style.marginLeft=-1190*n+"px";
	}
}
{
		
		const up=document.querySelectorAll(".dapei_right h2 ");
		const down=document.querySelectorAll(".zhineng_right ");
		up.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for( let i=0;i<up.length;i++){
			up[i].classList.remove("active");
		    down[i].classList.remove("active");		 
		}
		this.classList.add("active");
		down[index].classList.add("active");
	}
	})

}
