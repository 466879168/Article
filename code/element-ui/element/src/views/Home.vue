<template>
	<div class="home">
		<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

		<el-dialog title="收货地址" :visible.sync="dialogFormVisible" destroy-on-close @close="clear">
			<el-form :model="form" ref="formData">
				<el-form-item label="活动名称" :label-width="formLabelWidth" prop="name">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="活动名称" :label-width="formLabelWidth" prop="region">
					<el-input v-model="form.region" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="活动名称" :label-width="formLabelWidth" prop="date1">
					<el-input v-model="form.date1" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="活动名称" :label-width="formLabelWidth" prop="date2">
					<el-input v-model="form.date2" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="活动名称" :label-width="formLabelWidth" prop="resource">
					<el-input v-model="form.resource" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="活动名称" :label-width="formLabelWidth" prop="desc">
					<el-input v-model="form.desc" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="success">成功按钮</el-button>
		<el-button type="info">信息按钮</el-button>
		<div class="my">
			<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
		</div>
		
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: "home",
		data() {
			return {
				input:'',
				gridData: [{
						date: "2016-05-02",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄"
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄"
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄"
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄"
					}
				],
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: "",
					region: "",
					date1: "",
					date2: "",
					delivery: false,
					type: [],
					resource: "",
					desc: ""
				},
				formLabelWidth: "120px"
			};
		},
		methods: {
			clear() {
				this.$refs.formData.resetFields()
			}
		}
	};
</script>

<style scoped>
	.my >>> .el-input__inner{
		border-radius: 30px;
		border: 1px solid #eceef2;
		outline: 0;
		width: 400px!important;
	}
</style>