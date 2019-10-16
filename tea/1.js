var demo1 = {
	template: `
	<div>
		<div style="100%">
	    	 <el-carousel :interval="5000"   height="700px" arrow="never" trigger="click">
			    <el-carousel-item v-for="item in 2" :key="item">
			    
			    </el-carousel-item>
  			</el-carousel>
	    
  			<div style="width:100%;padding:45px 0;background-color: #f7f7f7;">
  				<div style="marign:0 auto;text-align:center;line-height:30px;padding:10px 15px 19px 0">
  					<div style="font-size:23px;color:#232323">新茶上市</div>
  					<div style="font-size:13px;color:#999">Tea Leave</div>
  				</div>
  				<div class="tea">
	  				<div v-for="i in arr" style="width:380px;font-size:16px;color:#555" class="op">
	  					<div style="width:100%;height:380px;">
	  						<img :src="i.img" class="img_B">
	  					</div>
	  					<p class="t_B">{{ i.title }}</p>
	  					<p class="ranges"></p>
	  					<p style="margin:20px 0">￥{{ i.money }}</p>	
	  				</div>
  				</div>
  				<div style="text-align:center;padding-top:20px">
  					<a class="ele">
  					→
  				</a>
  				</div>
  			</div>
  			<div style="width:100%;position:absolute;height:626px;top:0;left:0;z-index:-20">
  				<div style="position:fixed;width:100%;height:100%;top:0;left:0;">
  					<img style="width:100%;height:100%;" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvYTMxNGNjMzEzM2JhMGRkOTE2NTA0NmYwYTZjMDlmZjcuanBn.jpg"> 
  				</div>
  			</div>
  			<div class="about1">
  				<div style="width:80%;text-align:center;margin:auto;color:#fff;padding-top:130px;padding-bottom:5px"> 
  					<p style="font-size:26px">关于我们</p>
  					<p style="font-size:13px">About</p>
  				</div>
  				<div style="width:1210px;box-sizing:border-box;border:10px solid #fff;margin:auto;height:290px;display:flex;background:#fff;margin-top:35px">
  					<div style="width:50%;">
  						<img style="height:270px;"  src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvOGJiMjZlNDUwZjY0NjBkNWNiMmE4NTg4YjBhYTY5ZmMtNTQweDI4MC5qcGc_p_p100_p_3D.jpg">
  					</div>
  					<div style="width:50%">
  						<div style="line-height: 28px;color: #8d9095;font-size:14px;padding:50px 45px 20px 0">
  							茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。
  						</div>
  						<div style="font-size:14px;padding:8px 25px;background-color: #90af6b;color:#fff;display:inline-block;cursor:pointer">
  						了解更多
  						</div>
  					</div>
  				</div>
  			</div>
  			<div style="height:170px;background:#fff;">
  				<div style="width:1200px;margin: auto;display:flex;justify-content: space-around;align-items:center;height:170px">
  					<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjMwZTdjYTlmNmIwNjRhYjM2NzIzZGZiYTViMzU2MjQtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png">
  					<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYzU0OGUxMmQwM2FhMTE4MmE1ZmM5YWY4YjBlZDNhODMtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png">
  					<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvZmE3YjM1YzA3Mzg5Mjg4ODVjOTY3NDRjYTNkZjAzNDQtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png">
  					<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMTdlYWNiYTc0ZmU4MDZkMTk1NGI5MWY0MTdhMzUzZDgtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png">
  					<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMDFjMDE4YjAwYzA0MWMwYmQ3MTIzYTkzZjVhMTkyOTgtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png">
  					<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMWQyNGZhYmI0ZWRiODk1MGUxMmI3MzkxOGU3OTY1ZDktMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png">
  				</div>
  			</div>
		</div>
		      
	</div>
	`,
	data() {
		return {
			arr: [{
					img: "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvODMxNGZmNmYyYjkyNzcxZmY2N2U5NjdlZjQyNjAzZWItNDAweDQwMC5qcGc_p_p100_p_3D.jpg",
					title: "茉莉花茶",
					money: "223.0"
				},
				{
					img: "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMGFkMzdiZDQwOGNjYWMwYzI0Y2JmNzdiMDZiNDg4ODAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg",
					title: "白牡丹",
					money: "1,235.0"
				},
				{
					img: "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvOTc4NTUwMDZjYzA1MDQ1OGVkMDFmZjE2N2I4YjNkOTctNDAweDQwMC5qcGc_p_p100_p_3D.jpg",
					title: "白毫银针",
					money: "228.0"
				},
				{
					img: "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMDMzMjg2Zjc0ZWU4M2ZiM2U5MTllZTgwMDc4MjRjNTAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg",
					title: "云南普洱茶",
					money: "500.0"
				},
				{
					img: "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjY1ZjU4NWU5ZmNmYjkxMDBlMzc1YmFkMDQyNTkwMzEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg",
					title: "湖北老青茶",
					money: "400.0"
				},
				{
					img: "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjhlYTFmMDQ0Y2NhOWI4NWEzYWZkMzExYzczZTY3MjQtNDAweDQwMC5qcGc_p_p100_p_3D.jpg",
					title: "霍山黄芽蒙洱银针",
					money: "710.0"
				}
			]
		}
	}
}
var demo2 = {
	template: `
	<div>
		<div>
			<img style="height:205px;width:100%" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNDlhZTM4YTg2N2VmNzVhNDA3M2RmNzRiYTFmOThjMjYuanBn.jpg">
		</div>
		<boo style="text-align:center;padding:40px">
			<p slot="n1"  style="font-size:24px;">春茶</p>
			<div slot="n2" class="text-w">
				饮茶不但是传统饮食文化，同时，由于茶中含有多种抗氧化物质与抗氧化营养素，对于消除自由基有一定的效果。因此喝茶也有助防老，具养生保健功能，每天喝三两杯茶可起到防老的作用。
			</div>
		</boo>
		<div style="display:flex;justify-content:center;border-top:1px solid rgba(224,224,224,0.5);border-bottom:1px solid rgba(224,224,224,0.5);padding:70px 0;width:1160px;margin:auto">
			<nums n_b="138" n_title="历史悠久" style="border-right:1px solid rgba(224,224,224,0.5)"></nums>
			<nums n_b="423" n_title="冲泡温度" style="border-right:1px solid rgba(224,224,224,0.5)"></nums>
			<nums n_b="89" n_title="碧螺春等级" style="border-right:1px solid rgba(224,224,224,0.5)"></nums>
			<nums n_b="567" n_title="茶园面积"></nums>
		</div>
		<boo style="padding:50px 0">
			<p slot="n1"  style="font-size:24px;text-align:center;padding:15px 0">喝茶的好处</p>
			<div slot="n2" style="width:1240px;padding:0 40px;line-height:1.5em;text-align:center;margin:auto;color: #808080;box-sizing:border-box">
		饮茶不但是传统饮食文化，同时，由于茶中含有多种抗氧化物质与抗氧化营养素，对于消除自由基有一定的效果。因此喝茶也有助防老，具养生保健功能，每天喝三两杯茶可起到防老的作用。茶叶中含有多种维生素和氨基酸，喝茶对于清油解腻，增强神经兴奋以及消食利尿也具有一定的作用。 但并不是喝得越多越好，也不是所有的人都适合喝茶。一般来说，每天1-2次，每次3-5克、400毫升的饮量是比较适当的。一般，人们说喝茶还指喝水。
			</div>
		</boo>
		<div style="display:flex;width:1280px;margin:auto;justify-content:space-around;padding-bottom:100px;padding-top:20px">
			<describe image="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNjczNTEyZGI2NGM2N2U0MzdjMjMxNGMyYzc3MjRmM2YuanBn.jpg" title="茶园规划"></describe>
			<describe image="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNGRmMDFhNzRmYTBhZWFiODIyYmM1MThhY2M2ZWFhOTYuanBn.jpg" title="茶叶品质鉴别"></describe>
			<describe image="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNDVhMmJlZTE1ZjE5MTc0OTQ2OTIxMTBiMjNkYWRiZDUuanBn.jpg" title="冲泡工艺"></describe>
		</div>
	</div>
	`
}

var demo3 = {
	template: `
	<div>
	<div class="con">
	<ul class="clearfix">
		<li class="cha">茶叶</li>
		<li v-for="(i,$index) in arr" :style="{color:$index==index?'green':''}" @click="index=$index"  class="ho">
			{{i.title}}
		</li>
	</ul>
	<div class="clearfix" v-for="(i,$index) in arr" v-if="$index==index">
		<div class="item" v-for="arr1 in i.content">
			<img :src="arr1.url1" alt="">
			<p class="h_p">{{arr1._title}}</p>
			<div class="ranges"></div>
			<p style="font-size:16px;color:#">{{arr1._price}}</p>
		</div>
	</div>
</div>
	</div>
	`,
	data() {
		return {
			index: 0,
			arr1: '',
			arr: [{
				title: '全部',
				content: [{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvODMxNGZmNmYyYjkyNzcxZmY2N2U5NjdlZjQyNjAzZWItNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '茉莉花茶',
						_price: '￥223.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMGFkMzdiZDQwOGNjYWMwYzI0Y2JmNzdiMDZiNDg4ODAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '白牡丹',
						_price: '￥1235.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvOTc4NTUwMDZjYzA1MDQ1OGVkMDFmZjE2N2I4YjNkOTctNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '白毫银针',
						_price: '￥223.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMDMzMjg2Zjc0ZWU4M2ZiM2U5MTllZTgwMDc4MjRjNTAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '云南普洱茶',
						_price: '￥1235.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjY1ZjU4NWU5ZmNmYjkxMDBlMzc1YmFkMDQyNTkwMzEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '湖北老青茶',
						_price: '￥400.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjhlYTFmMDQ0Y2NhOWI4NWEzYWZkMzExYzczZTY3MjQtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '霍山黄芽蒙洱银针',
						_price: '￥711.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWM4NmNiNjkzOTdjOTM4NWQ4MzI0MDdlZDhhY2EwMmUtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '蒙顶黄芽',
						_price: '￥450.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWNjYjNmZjU3YWU2YjBmMmRiYWZmOTk2MzljY2E4N2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '冻顶乌龙茶',
						_price: '￥620.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNDM1OTBkNjFjM2ViOGU2YzUyYWU3ZmM2N2I3YjQwZGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '大红袍',
						_price: '￥3480.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYzNjYmVkZWE4N2JmNzZjOTUyODdjZWUyYWQ4MjgyM2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '祁门红茶',
						_price: '￥568.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjc0Y2E2YTE1Nzc3Mjk4MTFhMDJiOTg0Y2ZlMzliY2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '正山小种',
						_price: '￥952.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYTY5N2NjZmUxNzIwNTg1YjcwM2E2OTk2ZWY3N2U4NmEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '西湖龙井特级',
						_price: '￥888.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYWNkYWZkYWVmNGVlM2NiNmJlYTFjNWI5MWE2MzQwOGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '洞庭碧螺春',
						_price: '￥880.0'
					},
				]
			}, {
				title: '绿茶',
				content: [{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYTY5N2NjZmUxNzIwNTg1YjcwM2E2OTk2ZWY3N2U4NmEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '西湖龙井特级',
						_price: '￥888.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYWNkYWZkYWVmNGVlM2NiNmJlYTFjNWI5MWE2MzQwOGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '洞庭碧螺春',
						_price: '￥880.0'
					},
				]
			}, {
				title: '黄茶',
				content: [{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjhlYTFmMDQ0Y2NhOWI4NWEzYWZkMzExYzczZTY3MjQtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '霍山黄芽蒙洱银针',
						_price: '￥711.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWM4NmNiNjkzOTdjOTM4NWQ4MzI0MDdlZDhhY2EwMmUtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '蒙顶黄芽',
						_price: '￥450.0'
					},
				]
			}, {
				title: '乌龙茶',
				content: [{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWNjYjNmZjU3YWU2YjBmMmRiYWZmOTk2MzljY2E4N2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '冻顶乌龙茶',
						_price: '￥620.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNDM1OTBkNjFjM2ViOGU2YzUyYWU3ZmM2N2I3YjQwZGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '大红袍',
						_price: '￥3480.0'
					},
				]
			}, {
				title: '红茶',
				content: [{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYzNjYmVkZWE4N2JmNzZjOTUyODdjZWUyYWQ4MjgyM2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '祁门红茶',
						_price: '￥568.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjc0Y2E2YTE1Nzc3Mjk4MTFhMDJiOTg0Y2ZlMzliY2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '正山小种',
						_price: '￥952.0'
					},
				]
			}, {
				title: '黑茶',
				content: [{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMDMzMjg2Zjc0ZWU4M2ZiM2U5MTllZTgwMDc4MjRjNTAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '云南普洱茶',
						_price: '￥1235.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjY1ZjU4NWU5ZmNmYjkxMDBlMzc1YmFkMDQyNTkwMzEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '湖北老青茶',
						_price: '￥400.0'
					},
				]
			}, {
				title: '白茶',
				content: [{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMGFkMzdiZDQwOGNjYWMwYzI0Y2JmNzdiMDZiNDg4ODAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '白牡丹',
						_price: '￥1235.0'
					},
					{
						url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvOTc4NTUwMDZjYzA1MDQ1OGVkMDFmZjE2N2I4YjNkOTctNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
						_title: '白毫银针',
						_price: '￥223.0'
					},
				]
			}, {
				title: '花茶',
				content: [{
					url1: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvODMxNGZmNmYyYjkyNzcxZmY2N2U5NjdlZjQyNjAzZWItNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
					_title: '茉莉花茶',
					_price: '￥223.0'
				}, ]
			}, ]
		}
	}
}
var demo4 = {
	template: `
	<div>
		<div>
			<img style="width:100%;height:205px" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNzNlYjg4NTNhNmZkNTZiYWRhN2Q4ZjI4NjNkOWM1ODguanBn.jpg">
		</div>
		<boo style="padding:50px 0">
			<p slot="n1"  style="font-size:24px;text-align:center;padding:15px 0">种植基地</p>
			<div slot="n2" style="width:1240px;padding:0 40px;line-height:1.5em;text-align:center;margin:auto;color: #808080;box-sizing:border-box">
			公司拥有完整、科学、质量管理体系，通过ISO14001，ISO22000国际质量体系认 证，有机产品认证，拥有大量先进、专业的生产设备和检测仪器，秉承“顾客至上，锐意进取”的经营理念，坚持“客户第一”的原则为广大客户提供优质的服务。
			</div>
		</boo>
		<div class="imgs">
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNWQ3ZTc0ZDI3NTEzM2MxZmZkYTVkZTFmY2FiNGFkZTctMzAweDMwMC5qcGc_p_p100_p_3D.jpg">
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNzQwMmZhZTFiYWE3OTgxODA4MWYwM2I2N2UwZTU0ZDItMzAweDMwMC5qcGc_p_p100_p_3D.jpg">
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvOWVlYzA0NGVmYmNiZGQwYzE0M2QwYmZhMGY2MjNkMDUtMzAweDMwMC5qcGc_p_p100_p_3D.jpg">
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvMGQ5YWMxYWEzOWNmZmIzYzk4NDE0Njk4YzZmZGQwZjQtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"> 
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvOWVkYTg5ZjIzMWEzOGFjODE5NmJiYmYyOTA5YWEyZjctMzAweDMwMC5qcGc_p_p100_p_3D.jpg"> 
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvMTI1ZmM2NTk4YWE0NmFlY2JkOWY1NDAzYzkwYjM3ODctMzAweDMwMC5qcGc_p_p100_p_3D.jpg"> 
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNGRmMDFhNzRmYTBhZWFiODIyYmM1MThhY2M2ZWFhOTYtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"> 
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvMmZlZDQ0NjA2NDI0N2FmZWI4YTk0ZmQ0NGRiMDc5NzktMzAweDMwMC5qcGc_p_p100_p_3D.jpg"> 

		</div>
	</div>
	`
}
var demo5 = {
	template: `
	<div>
		<div>
			<img style="width:100%;height:205px" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvOTIwYWRjMGM1M2U4OGQ2MTY0OWE0MzYwMmY5MWQ0NzQuanBn.jpg"> 
		</div>
		<div style="padding:80px 0;width:1160px;margin:auto;box-sizing:border-box;display:flex">
			<div class="childs">
				<a href="#/core5/child1">
				<i style="margin-right:5px">▶</i>全部新闻
				</a>
				<a href="#/core5/child2" style="border-top:1px solid rgba(224, 224, 224, 0.8);;border-bottom:1px solid rgba(224, 224, 224, 0.8);">
					<i style="margin-right:5px">▶</i>新茶动态
				</a>
				<a href="#/core5/child3">
				<i style="margin-right:5px">▶</i>产品新闻
				</a>
			</div>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
	`,
}
var demo6 = {
	template: `
	<div>
		<div>
			<img style="width:100%;height:205px" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNTYzNGI5ZDFlYmFkNzBkY2FlZmM1NDM0MWE0YzNkYWEuanBn.jpg">
		</div>
		<boo style="text-align:center;padding:40px">
			<div slot="n2" class="text-w">
中国历史上有很长的饮茶纪录，已经无法确切地查明到底是在什么年代了，但是大致的时代是有说法的。并且也可以找到证据显示，确实在世界上的很多地方饮茶的习惯是从中国传过去的。
			</div>
		</boo>
  	<div style="width:1190px;margin:auto;display:flex;justify-content:space-between">
			<last l_img="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvZmM3ZjZkOTc4MzNjYjk5ZDliY2Y1NWQzMmNjNjFiNDYtODB4ODAuanBn.jpg" l_title="邮箱" l_email="info@email.com"></last>
			<last style="border-left:1px solid rgba(224, 224, 224, 0.8);border-right:1px solid rgba(224, 224, 224, 0.8);" l_img="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvZDY4ZDFlYWFjZjgyMmQxOGQxOTI2M2M3ZTE5Y2Y3NWEtODB4ODAuanBn.jpg" l_title="手机" l_email="13725415481/010 6888 6888"></last>
			<last l_img="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNmZkOTQ2MGI2MzM1ZjUzNmY1MzY0NTFiYmJhMjA5ZGQtODB4ODAuanBn.jpg" l_title="地址" l_email="苏州市建外SOHO东区2号楼"></last>
		</div>
		<div id="allmap" style="width:1190px;height:400px;margin:80px auto"></div>
	</div>
	`
}
Vue.component("last", {
	template: `
	<div style="text-align:center;width:390px">
		<img :src="L_img" style="width:80px;height:80px">
		<p style="font-size:20px;color:#333;padding-top:17px">{{ L_title }}</p>
		<p style="font-size:14px;color:#BFBFBF">{{ L_email }}</p>
	</div>
	`,
	props: ["l_img", "l_title", "l_email"],
	data() {
		return {
			L_img: this.l_img,
			L_title: this.l_title,
			L_email: this.l_email
		}

	}
})
var router = new VueRouter({
	routes: [{
			path: '/',
			component: demo1
		},
		{
			path: '/core2',
			component: demo2
		},
		{
			path: '/core3',
			component: demo3
		},
		{
			path: '/core4',
			component: demo4
		},
		{
			path: '/core5',
			component: demo5,
			children: [{
					path: 'child1',
					component: {
						template: `
			<div>
				<mains style="border:none" imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNjczNTEyZGI2NGM2N2U0MzdjMjMxNGMyYzc3MjRmM2YtMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="喝茶的好处有哪些 6大好处告诉你" content_c="中国历史上有很长的饮茶纪录，已经无法确切地查明到底是在什么年代了，但是大致的时代是有说法的。并且也可以找到证据显示，确实在世界上的很多地方饮茶的习惯是从中国传过去的。所以，很多人认为饮茶就是中国人首创..."></mains>
			</div>
		`
					}
				},
				{
					path: 'child2',
					component: {
						template: `
			<div>	
				<mains imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNWQ3ZTc0ZDI3NTEzM2MxZmZkYTVkZTFmY2FiNGFkZTctMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="2019茶叶展-第十六届上海国际茶业交易春季博览会" content_c="野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。"></mains>
				<mains imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNzQwMmZhZTFiYWE3OTgxODA4MWYwM2I2N2UwZTU0ZDItMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="喝什么茶叶好?春天适合喝什么茶?喝白茶喝什么茶叶好?" content_c="2017年10月27日，世界卫生组织国际癌症研究机构公布的致癌物清单初步整理参考，茶在3类致癌物清单中。属于对人类致癌性可疑，尚无充分的人体或动物数据的物质类。"></mains>
				<mains imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNjczNTEyZGI2NGM2N2U0MzdjMjMxNGMyYzc3MjRmM2YtMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="喝茶的好处有哪些 6大好处告诉你?" content_c="中国历史上有很长的饮茶纪录，已经无法确切地查明到底是在什么年代了，但是大致的时代是有说法的。并且也可以找到证据显示，确实在世界上的很多地方饮茶的习惯是从中国传过去的。所以，很多人认为饮茶就是中国人首创..."></mains>
				<mains imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvMGQ5YWMxYWEzOWNmZmIzYzk4NDE0Njk4YzZmZGQwZjQtMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="喝茶也会有危险——茶这样喝真的很危险" content_c="但是也有人能够找到证据指出，饮茶的习惯不仅仅是中国人发明的，在世界上的其他一些地方也是饮茶的发明地，例如印度、非洲等。1823年，一个英国侵略军的少校在印度发现了野生的大茶树，从而有人开始认定茶的发源..."></mains>
				<mains imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNGRmMDFhNzRmYTBhZWFiODIyYmM1MThhY2M2ZWFhOTYtMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="喝什么茶好?如何正确喝茶?" content_c="中国饮茶起源众说纷纭：追溯中国人饮茶的起源，有的认为起于上古，有的认为起于周，起于秦汉、三国、南北朝、唐代的说法也都有，造成众说纷纭的主要原因是因唐代以前无“茶”字，而只有“荼”字的记载，直到茶经的作..."></mains>
				<mains imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYjc0NWU4ZGE0NTU0ODIyYWJjMjNhMmE1NGQ2NDJkM2EtMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="喝茶养生好处多 但是喝错茶竟会致丧命" content_c="唐．陆羽《茶经》：“茶之为饮，发乎神农氏。”，在中国的文化发展史上，往往是把一切与农业、与植物相关的事物起源最终都归结于神农氏。而中国饮茶起源于神农的说法也因民间传说而衍生出不同的观点。有人认为茶是神..."></mains>
				<mains imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvMmZlZDQ0NjA2NDI0N2FmZWI4YTk0ZmQ0NGRiMDc5NzktMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="服用“阿司匹林”尽量少喝茶" content_c="晋．常璩《华阳国志．巴志》：“周武王伐纣，实得巴蜀之师，......茶蜜......皆纳贡之。”这一记载表明在周朝的武王伐纣时，巴国就已经以茶与其它珍贵产品纳贡与周武王了。《华阳国志》中还记载，那时并..."></mains>
				<mains imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvMTI1ZmM2NTk4YWE0NmFlY2JkOWY1NDAzYzkwYjM3ODctMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="碧螺春茶叶喝第几泡才是最好喝的呢?" content_c="中国饮茶起于六朝的说法，有人认为起于“孙皓以茶代酒”，有人认为系“王肃茗饮”而始，日本、印度则流传饮茶系起于“达摩禅定”的说法。然而秦汉说具有史料证据确凿可考，因而削弱了六朝说的正确性。"></mains>
				<mains style="border:none" imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNDVhMmJlZTE1ZjE5MTc0OTQ2OTIxMTBiMjNkYWRiZDUtMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="饮用碧螺春茶的几个注意事项" content_c="市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将是“..."></mains>
			</div>
		`
					}
				},
				{
					path: 'child3',
					component: {
						template: `
			<div>
				<mains imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNzQwMmZhZTFiYWE3OTgxODA4MWYwM2I2N2UwZTU0ZDItMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="喝什么茶叶好?春天适合喝什么茶?喝白茶喝什么茶叶好?" content_c="2017年10月27日，世界卫生组织国际癌症研究机构公布的致癌物清单初步整理参考，茶在3类致癌物清单中。属于对人类致癌性可疑，尚无充分的人体或动物数据的物质类。"></mains>
				<mains style="border:none" imgs="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNGRmMDFhNzRmYTBhZWFiODIyYmM1MThhY2M2ZWFhOTYtMjAweDEzMC5qcGc_p_p100_p_3D.jpg" title_c="喝什么茶好?如何正确喝茶?" content_c="中国饮茶起源众说纷纭：追溯中国人饮茶的起源，有的认为起于上古，有的认为起于周，起于秦汉、三国、南北朝、唐代的说法也都有，造成众说纷纭的主要原因是因唐代以前无“茶”字，而只有“荼”字的记载，直到茶经的作..."></mains>
			</div>
		`
					}
				}
			]
		},
		{
			path: '/core6',
			component: demo6
		},
	]
})
Vue.component("boo", {
	template: `
		<div>
			<slot name="n1"></slot>
			<slot name="n2"></slot>
		</div>
	`
})
Vue.component("nums", {
	template: `
		<div style="text-align:center;width:320px">
			<div style="font-size:60px;font-family: courier new;color: #3c3c3c;">{{ num }}</div>
			<div style="color:#939396">{{ title }}</div>
		</div>
	`,
	props: ["n_b", "n_title"],
	data() {
		return {
			num: 0,
			title: this.n_title
		}
	},
	created() {
		var timers = setInterval(() => {
			this.num++
			if (this.num >= this.n_b) {
				this.num = this.n_b
				clearInterval(timers)
			}
		}, 1000 / this.n_b)
	}
})
Vue.component("describe", {
	template: `
	<div class="describe">
		<img :src="t_image">
		<p style="font-size:18px;padding:17px 0;text-align:center">{{ t_title }}</p>
		<div style="font-size:14px;line-height:26px">
		明万历二十三年（1595）张源撰写的《茶录》中，对当时洞庭东西山绿茶（炒青）的采摘、炒制有较为详细的记载，其炒制过程分杀青、轻团、焙干等工序，已与当今洞庭碧螺春的炒制工艺基本一致。
		</div>
	</div>
	`,
	props: ["image", "title"],
	data() {
		return {
			t_image: this.image,
			t_title: this.title
		}
	}
})
Vue.component("mains", {
	template: `
	<div class="con_c">
		<div>
			<p class="tit_c"> {{ title }} </p>
			<div style="font-size:13px;color:#999;width:662px;margin-top:10px;line-height:24px"> {{ contents }} </div>
			<div style="font-size:14px;color:#90AF6B;margin-top:30px;cursor:pointer">阅读正文→</div>
		</div>
		<div style="width:200px;height:130px;overflow:hidden">
			<img :src="imgUrl"> 
		</div>
	</div>
	`,
	props: ["imgs", "title_c", "content_c"],
	data() {
		return {
			imgUrl: this.imgs,
			title: this.title_c,
			contents: this.content_c
		}
	}
})
new Vue({
	el: '#container',
	mounted() {
		var map = new BMap.Map("allmap");
		map.addControl(new BMap.NavigationControl());
		map.addControl(new BMap.ScaleControl());
		map.addControl(new BMap.OverviewMapControl());
		map.addControl(new BMap.MapTypeControl());
		map.centerAndZoom('苏州市外河桥', 11);
	},
	router: router,


})