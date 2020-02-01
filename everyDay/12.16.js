/**
 * 局部变量：函数体内定义的变量就是局部变量。
    全局变量: 函数体外 定义的变量就是全局变量。
 */




data:
询盘等级   inquiry_level: ""   
运输类型   shipping_mode: 4
离场类型   departure_type: 2
离开国家id   departure_country_id: 21
离开国家英文名字   departure_country_name_en: "Aland lslands"
离开国家中文名字   departure_country_name_cn: "奥兰群岛"
离开国家编码?     departure_country_code: "ALA"
离开城市的id   departure_city_id: null
离开城市英文名字  departure_city_name_en: ""
离开城市中文名字   departure_city_name_cn: ""
到达类型   arrival_type: 2
到达国家id    arrival_country_id: 3
到达国家中文名  arrival_country_name_cn: "阿尔及利亚"
到达国家英文名   arrival_country_name_en: "Algeria"
到达国家编码?   arrival_country_code: "DZA"
到达城市id   arrival_city_id: null
到达城市中文名   arrival_city_name_cn: ""
到达城市英文名   arrival_city_name_en: ""
有效时间 有用时间   available_time: 1577635200
商品   commodity: "Cargo"
材料类型id?    packing_type_id: 70
材料类型   packing_type: "Unpacked"
数量   quantity: 20
总重    total_weight: 20
重量单位  weight_unit: 1
长  length: 20
宽  width: 20
高   height: 20
尺寸单位  dimension_unit: 1
国际贸易术语   incoterms: "CIF"
可堆叠  stackable: 1
危险品  hazardous: 0
保险  insurance: 0
补充说明  additional_notes: "MASTER"
询盘单号   inquiry_number: "2019120914222972439"
引用类型 quote_type: 1
状态   status: 1
跟进人id   follow_up_user_id: 24
跟进人英文名  follow_up_user_name_en: "wangqili22211"
跟进人中文名   follow_up_user_name_cn: "wangqilin"
跟进状态   follow_up_state: 2
评价   evaluation: 1
分配时间  allocation_time: 1575007129
托运人id  shipper_user_id: 24
托运人英文名 shipper_user_name_en: "wangqili22211"
托运人中文名  shipper_user_name_cn: "wangqilin"
托运人公司
英文名  shipper_company_name_en: "AI logistics intemational pte.ltd"
托运公司国家英文名   shipper_company_country_name_en: "Singapore"
托运公司城市中文名   shipper_company_city_name_cn: ""
托运公司城市英文名   shipper_company_city_name_en: ""
托运人职位   shipper_user_job_title: "front-end"
托运人电话   shipper_user_phone: "18595749975"
托运人邮件   shipper_user_email: "82085316@qq.com"
托运人qq shipper_user_qq: ""
托运人微信  shipper_user_wechat: "",

联系人列表
shipper_contacts: (3) [{…}, {…}, {…}, __ob__: yo]
联系人名称 contact_name: "xxxx"
联系人电话 contact_phone: "11111111111"
联系人职位  contact_job_title: "测试"
联系人邮箱  contact_email: "44444444444"
联系人电话  contact_telephone: "1111111111111"
inquiry_remarks_info: [{…}],
备注   remarks_name: "备注1"
备注详情  remarks_detail: "这个询盘真不赖，货少、钱多、风险低"


id: 7
created_time: 1579154457
updated_time: 1579154457
distribution_id: 168
offeror_type: 0
offeror_country_id: 2
delivery_intention: 4
information_reality: 4
cooperation_feelings: "好"
evaluation: 0









 <li>询盘等级
 <li>Shipping mode  运输方式
 <li>Departure     离开国家
 <li>Departure Type  发货类型?
 <li>Arrival   到达
 <li>Arrival Type  到达类型 
 <li>Available time  有空时间 
 <li>Commodity   商品 
 <li>Packing type   填料类型 
 <li>Quantity   数量  
 <li>Total weight   总重   
 <li>L*W*H   长宽高  
 <li>Incoterms/Freight Terms 国际贸易术语
 <li>Stackable?  可堆叠?
 <li>Hazardous?  危险品?
 <li>Cargo Insurance?  保险?
 <li>Additional notes   其他事项
 
 
 
 
 
 let params={
           inquiry_distribution_id:this.inquiryDistributionId
         }
         console.log(params)
         Service.showContactInformation(params).then(res => {
           console.log(res)
           if(res.success){
 
           }else{
             console.log("Error")
           }
         })
				 
				 
				 
				 
				 shipper_user_id: 24
				 shipper_user_name_en: "wangqili22211"
				 shipper_user_name_cn: "wangqilin"
				 shipper_company_name_en: "AI logistics intemational pte.ltd"
				 shipper_company_country_name_en: "Singapore"
				 shipper_company_city_name_cn: ""
				 shipper_company_city_name_en: ""
				 shipper_user_job_title: "front-end"
				 shipper_user_phone: "18595749975"
				 shipper_user_email: "82085316@qq.com"
				 shipper_user_qq: ""
				 shipper_user_wechat: "",
				 
				 
				 
				 
				 
				 
				 style="background:#036db7!important"
				 
				 
				 
				 RequestInquiryContact(){
				         
								 
								 
								 //跟进中联系人的请求
				       }
							 
							 
							 let params = {
							           inquiry_distribution_id: this.inquiryDistributionId
							         };
							         console.log(params);
							         Service.getInquiryAllPerson(params).then(res => {
							           if (res.success) {
							             console.log(res);
							             this.InquiryAllPerson = res.data;
							             console.log(this.InquiryAllPerson)
							           } else {
							 
							           }
							         });
											 
											 
											 
											 2020011518004316943
											 
											 
											 
											 
											 
											 || (scope.row.follow_up_user_name_en ==this.userEn &&scope.row.follow_up_user_name_cn ==this.userCn)
											 
											 follow_up_user_name_en
											 
											 follow_up_user_name_cn
											 
											 user_name_en
											 user_name_cn
											 
											 
											 
											                 <span v-if="scope.row.follow_up_user_name_en ==this.userEn">
																			 
																			 
																			 
																			 v-if="scope.row.follow_up_user_name_en == this.userEn"
																			 
																			 
																			 
																			 
																			 
	 <span v-if="scope.row.follow_up_status != 1 &&scope.row.follow_up_status != 12&&scope.row.follow_up_status != 13">
	                  <span v-if="scope.row.follow_up_user_name_en ==userEn">
	                    <span
	                      v-if="!!scope.row.inquiry_evaluation == false"
	                      @click="openComment(scope.row.inquiry_id,scope.row.inquiry_distribution_id)"
	                    >评价</span>
	                <span
	                  v-if="!!scope.row.inquiry_evaluation == true"
	                  @click="openCommentRecord(scope.row.inquiry_distribution_id)"
	                >评价记录</span>
	                  </span>
	              </span>
								
								
								scope.row.follow_up_user_name_en ==userEn &&scope.row.follow_up_user_name_cn ==userCn
								
								
								v-if="Date.now() / 1000 < activity.created_time + 60"
								
								
								v-if="showDelete"
								
								
								
								
								
								Overseas Freight Agency Deutschland GmbH
								
								
								正式环境错误,点击联系人打不开对话框
								
								报错信息 
								
								根据国家判断区号
								