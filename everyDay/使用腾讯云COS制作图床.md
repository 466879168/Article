## 图床的选择
现在用的是github的做的图床，但是很多时候访问太慢了，图片都裂了，看不了，想了想阿里云七牛云和腾讯云，最终还是选择了腾讯云，因为域名也是在腾讯云上买的...  


## 开始



 <el-table-column prop="name_en" label="公司英文名" min-width="300">
          <template slot-scope="scope">
            <span
              :class="{ showDetail: !!scope.row.company_name_en == true }"
              @click="
                !!scope.row.company_name_en == true
                  ? openDetail(scope.row.company_id)
                  : null
              "
            >
              {{ scope.row.company_name_en | textFormat }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="name_cn" label="公司中文名" min-width="300">
          <template slot-scope="scope">
            <span
              :class="{ showDetail: !!scope.row.company_name_cn == true }"
              @click="
                !!scope.row.company_name_cn == true
                  ? openDetail(scope.row.company_id)
                  : null
              "
            >
              {{ scope.row.company_name_cn | textFormat }}
            </span>
						
						
						
						
						
						vue+element中自定义表单校验特殊字符
						
						
						
						
						
						git撤销本地所有修改（新增、删除、修改）  
						
						
						
						
						
				router		路由跳转中   name的作用
				
				
				
				 {
        path:'/personCenter/Message/MyQuotationDetail',
        name:'MyQuotationDetail',
        component: resolve => require(['../views/person_center/newCargo/myQuotationDetail.vue'],resolve),
        meta: {
          keepAlive: true
        }
      },
			
			
			
			
			
			
			path: "/personCenter/Message/myQuotationDetail"