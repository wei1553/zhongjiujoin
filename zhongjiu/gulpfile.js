//引入所需要的插件
var gulp = require("gulp");
var sass = require("gulp-sass");
//创建任务（发布任务）
gulp.task("hello",function(){
	console.log("hello");
})
gulp.task("styles",function(){
	return gulp.src("scss/*.scss").pipe(sass({style:"nested" })).pipe(gulp.dest("css"));
})
//发布一个监听任务
gulp.task("watch",function(){
	gulp.watch("scss/*.scss",["styles"]);
})
/*
 * 1.安装node环境
 * 2.安装cnpm(通过淘宝镜像安装)
 * 3.全局安装gulp
 * 4.在项目中生成package.json文件
 * 5.在项目的路径上安装本地的gulp
 * 6.在项目的路径上安装所需要的插件
 * 7.创建gulpfile.js文件
 * 		1》导入所需插件
 * 		2》发布任务
 * 8.通过gulp 任务名      执行任务
 */