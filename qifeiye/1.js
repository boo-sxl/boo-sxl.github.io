var demo1 = {
    template:`
        <div>
        	<div class="k1">
        		<img src="http://57e243aaa779a.t73.qifeiye.com/qfy-content/uploads/2016/10/f549634402d680ae8cccd5a6039000b5.jpg">
        	<div class="shadow">
        		<transition :name="handle"  v-for="(i,$index) in arr">
	     			<div  v-show="$index==type">
	     				<p style="font-size:36px">{{ i.title }}</p>
	      				<p style="font-size:20px">{{ i.english }}</p>
	      			</div>
        		</transition>
        	</div>
        		
        	</div>

       </div>

</div>
    `,
    data(){
    	return{
    		handle:"d2",
    		type:0,
    		arr:[
    		{
    			title:"我们无法做到完美，  但追求完美能让人卓越",
    			english:"Perfection’snot attainable, but if we chase it we can catch excellence."
    		},
    		{
    			title:"我们无法做到完美",
    			english:"Perfection’snot attainable"
    		},
    		{
    			title:"但追求完美能让人卓越",
    			english:"but if we chase it we can catch excellence."
    		}
  
    		]
    	}
    },
    created(){
    	setInterval(()=>{
    		this.type++
			if(this.type >= this.arr.length){
						this.type = 0
			}
    	},3000)
    }
}

var demo2 = {
    template:`
        <div>
        	<div style="position:relative;height:345px;overflow:hidden">
        			<img style="width:100%;position:relative;top:-230px" src="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvMDViZjRkNzAxMDU2NTNkNjI2ODQ2NmY4ZGY4NzFmM2YuanBn.jpg">
        			<div style="background-color: rgba(25,25,25,0.6);position:absolute;left:0;top:0;z-index:20;width:100%;height:100%"></div>
        	</div>
        	<div style="text-align:center;height:756px;box-sizing:border-box;padding:50px">
        		<p style="font-size:34px">产品发布</p>
        		<div style="background:#54d7e0;height:2px;margin:10px auto;width:50px;"></div>
        		<p style="font-size:14px">応捠捡换攴朰朸妀夲夳夵壱，売圢圤圥圦圧圪咐咑厺厼厽帄帇</p>
        		<img src="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNGQxZGJmMGU0MTg5YWUxYWU1ZjNmZDkyZjc3OWRhMGItNzY2eDUwMC5wbmc_p_p100_p_3D.png">
        	</div>
        </div>
    `
}

var demo3 = {
    template:`
        <div>
        	<div style="position:relative;height:345px;overflow:hidden">
        			<img style="width:100%;position:relative;top:-230px" src="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOTk4ZGE5MWY4MGZiNDg3NjU4MjI2MDQ1NzBhY2RmNDYuanBn.jpg">
        			<div style="background-color: rgba(25,25,25,0.6);position:absolute;left:0;top:0;z-index:20;width:100%;height:100%"></div>
        	</div>
        	<div style="width:800px;margin:auto;display:flex;justify-content: space-between;padding-top:50px">
        		<div class="a_c">
        			<a href="#/core3/child1">▶全部发布</a>
        			<a href="#/core3/child2" style="border-top:1px solid #ccc;border-bottom:1px solid #ccc">▶公司新闻</a>
        			<a href="#/core3/child3">▶行业资讯</a>
        		</div>
        		<div style="width:550px">
        		   		<h3 style="font-size:20px;padding:10px 0;border-bottom:1px solid #ccc">资讯发布</h3>
        			<router-view></router-view>
        		</div>
        	</div>
        </div>
    `
}
Vue.component("boo",{
	template:`
		<div style="display:flex;justify-content:space-between;margin:10px 0;cursor:pointer">
			<div>
				<img :src="img">
			</div>
			<div style="margin-left:10px">
				<p style="font-size:16px;color:#666">{{ title }}</p>
				<p style="color: #4cd7de;font-size: 11px;margin:10px 0">发布日期：2017-03-14</p>
				<div style="color: #9E9E9E;font-size: 12px;">
					起飞页的工作团队是一群热爱互联网及软件事业的大伙伴和小伙伴，经验丰富、成熟稳定，基于对网站出版行业的热爱、对人人都能做出精美网站的向往，公司投入一千万元人民币，历时两年时间打造出起飞页平台。截至2015年底，在起飞页上创建的网站已超过10万+。
				</div>
			</div>
		</div>
	`,
	props:["img_u","title_l"],
	data(){
		return{
			img:this.img_u,
			title:this.title_l
		}
	}
})
var router =new VueRouter({
    routes:[
        {path:'/',component:demo1},
        {path:'/core2',component:demo2},
        {path:'/core3',component:demo3,children:[
        {path:"child1",component:{
        	template:`
        	<div>
     			<boo img_u="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvMDViZjRkNzAxMDU2NTNkNjI2ODQ2NmY4ZGY4NzFmM2YtMTgweDEyMC5qcGc_p_p100_p_3D.jpg" title_l="三大能源停征价格调节基金为煤炭资源税改革清路"></boo>
     			<boo img_u="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOWVmMDY3ODQ0ZDIzZmFiZDA2Y2NkNjVkZGY2MWQyZDgtMTgweDEyMC5qcGc_p_p100_p_3D.jpg" title_l="北京130多家工业企业采取停限产措施应对雾霾"></boo>
        	</div>`
        }},
        {path:"child2",component:{
        	template:`<div>
        			<boo img_u="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOWVmMDY3ODQ0ZDIzZmFiZDA2Y2NkNjVkZGY2MWQyZDgtMTgweDEyMC5qcGc_p_p100_p_3D.jpg" title_l="北京130多家工业企业采取停限产措施应对雾霾"></boo>
        		<boo img_u="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOWFjMDViN2VmMzVkYmVhOGU5ZTI2MDQ2OGY4M2E1MjEtMTgweDEyMC5qcGc_p_p100_p_3D.jpg" title_l="三大能源停征价格调节基金为煤炭资源税改革清路"></boo>
        			<boo img_u="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOWFjMDViN2VmMzVkYmVhOGU5ZTI2MDQ2OGY4M2E1MjEtMTgweDEyMC5qcGc_p_p100_p_3D.jpg" title_l="三大能源停征价格调节基金为煤炭资源税改革清路"></boo>
        	</div>`
        }},
        {path:"child3",component:{
        	template:`<div>
        			<boo img_u="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOWVmMDY3ODQ0ZDIzZmFiZDA2Y2NkNjVkZGY2MWQyZDgtMTgweDEyMC5qcGc_p_p100_p_3D.jpg" title_l="北京130多家工业企业采取停限产措施应对雾霾"></boo>
        		<boo img_u="https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOWVmMDY3ODQ0ZDIzZmFiZDA2Y2NkNjVkZGY2MWQyZDgtMTgweDEyMC5qcGc_p_p100_p_3D.jpg" title_l="北京130多家工业企业采取停限产措施应对雾霾"></boo>
        	</div>`
        }},
        ]},
        ]
})
new Vue({
    el: "#box",
    router
})
