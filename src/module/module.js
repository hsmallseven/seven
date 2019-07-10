import Vue from 'vue'
Vue.directive("gd",(el,binding)=>{
el.addEventListener("scroll",()=>{
    var dis = Number(el.getAttribute("dis"))
        if(el.scrollTop>dis){
            // console.log(binding)
            binding.value.vis=true;
            
        }else{
            // console.log(binding)
            binding.value.vis=false;
        }
})
})