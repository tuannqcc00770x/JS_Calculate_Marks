/* Bắt đầu chương trình tính toán */
var stt=1;
/* Code tạo dropdown form theo số lượng đã chọn */
$(document).ready(function(){
$("#slform").change(function(){
	$(function(){
    $('#dsform').empty();
});
	var idform="<form id=\"form";
	var noidung="\">\
			<p>\
				<label>Họ tên</label>\
				<input type=\"text\" name=\"hoten\" class=\"hoten\">\
				<span>Họ tên bắt buộc nhập</span>\
			</p>\
			<p>\
				<label>Lớp</label>\
				<input type=\"text\" name=\"lop\" class=\"lop\">\
				<span>Lớp bắt buộc nhập</span>\
			</p>\
			<p>\
				<label>Email</label>\
				<input type=\"text\" name=\"email\" class=\"email\">\
				<span>Email phải nhập và đúng định dạng</span>\
			</p>\
			<p>\
				<label>Số điện thoại</label>\
				<input type=\"\" name=\"sodienthoai\" class=\"sdt\">\
				<span>Số điện thoại phải nhập và đúng định dạng</span>\
			</p>\
			<p>\
				<label>Điểm Văn</label>\
				<input type=\"number\" name=\"diemvan\" class=\"van\">\
				<span>Điểm Văn phải nhập và phải là số từ 0-10</span>\
			</p>\
			<p>\
				<label>Điểm Đạo Đức</label>\
				<input type=\"number\" name=\"diemdaoduc\" class=\"daoduc\">\
				<span>Điểm Đạo Đức phải nhập và phải là số từ 0-10</span>\
			</p>\
			<p>\
				<label>Điểm Lập Trình</label>\
				<input type=\"number\" name=\"diemlaptrinh\" class=\"laptrinh\">\
				<span>Điểm Lập Trình phải nhập và phải là số từ 0-10</span>\
			</p>\
		</form>\
		<hr>";
	var slform=$("#slform").val();
	var form="";
		for (i=0;i<slform;i++){
		form=form+idform+(i+1)+noidung;
		}
	$(function(){$("#dsform").append(form);});
});
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Code tạo chuỗi Json chứa dữ liệu nhập*/
var danhsach="";	
$(document).ready(function(){
	$("#css2").click(function(){
var slform=$("#slform").val();
var json="{";
for (i=1;i<slform;i++){
	json=json+"\""+"sv"+i+"\""+":{\"hoten\":"+"\""+$("#form"+i+" .hoten").val()+"\","+"\"lop\":"+"\""+$("#form"+i+" .lop").val()+"\","+"\"email\":"+"\""+$("#form"+i+" .email").val()+"\","+"\"sdt\":"+"\""+$("#form"+i+" .sdt").val()+"\","+"\"van\":"+"\""+$("#form"+i+" .van").val()+"\","+"\"daoduc\":"+"\""+$("#form"+i+" .daoduc").val()+"\","+"\"laptrinh\":"+"\""+$("#form"+i+" .laptrinh").val()+"\"},";
}
json=json+"\""+"sv"+slform+"\""+":{\"hoten\":"+"\""+$("#form"+slform+" .hoten").val()+"\","+"\"lop\":"+"\""+$("#form"+slform+" .lop").val()+"\","+"\"email\":"+"\""+$("#form"+slform+" .email").val()+"\","+"\"sdt\":"+"\""+$("#form"+slform+" .sdt").val()+"\","+"\"van\":"+"\""+$("#form"+slform+" .van").val()+"\","+"\"daoduc\":"+"\""+$("#form"+slform+" .daoduc").val()+"\","+"\"laptrinh\":"+"\""+$("#form"+slform+" .laptrinh").val()+"\"}}";
danhsach=JSON.parse(json);
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Hàm kiểm tra số điện thoại tham khảo tại "https://www.inithtml.com/html-css/kiem-tra-so-dien-thoai-viet-nam-bang-jquery/". Đã có chỉnh sửa lại cho phù hợp với bài tập */
function checkPhoneNumber(phone) {
    var flag = false;
    if (phone != "") {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == "09" || firstNumber == "08") && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        } else if (firstNumber == "01" && phone.length == 11) {
            if (phone.match(/^\d{11}/)) {
                flag = true;
            }
        }
    }
    return flag;
};
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Hàm kiểm tra email tham khảo tại "http://vnhow.vn/howto/cach-kiem-tra-dia-chi-email-trong-javascript-voi-regular-expression". Đã có chỉnh sửa lại cho phù hợp với bài tập */
function isEmail(email) {
			var isValid = false;
			var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(regex.test(email)) {
				isValid = true;
			}
			return isValid;
		};
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Code tiến hành kiểm tra dữ liệu */
var kt=true;
for (i=0;i<slform;i++){
	if (danhsach["sv"+(i+1)]["hoten"].length==0){
		alert("Bạn chưa nhập họ tên ở form số "+(i+1));
		kt=false;
	}
}
for (i=0;i<slform;i++){
	if (danhsach["sv"+(i+1)]["lop"].length==0){
		alert("Bạn chưa nhập lớp ở form số "+(i+1));
		kt=false;
	}
}
for (i=0;i<slform;i++){
	if (danhsach["sv"+(i+1)]["email"].length==0||!isEmail(danhsach["sv"+(i+1)]["email"])){
		alert("Email phải nhập và đúng định dạng (Ví dụ Ex@gmail.com) ở form số "+(i+1));
		kt=false;
	}
}
for (i=0;i<slform;i++){
	if (danhsach["sv"+(i+1)]["sdt"].length==0||!checkPhoneNumber(danhsach["sv"+(i+1)]["sdt"])){
		alert("Số điện thoại di động phải nhập và đúng định dạng 08xxxxxxxx (10 số) hoặc 09xxxxxxxx (10 số) hoặc 01xxxxxxxxx (11 số)  ở form số "+(i+1));
		kt=false;
	}
}
for (i=0;i<slform;i++){
	if (danhsach["sv"+(i+1)]["van"].length==0||parseInt(danhsach["sv"+(i+1)]["van"])<0||parseInt(danhsach["sv"+(i+1)]["van"])>10){
		alert("Điểm Văn phải nhập và phải là số từ 0-10 ở form số "+(i+1));
		kt=false;
	}
}
for (i=0;i<slform;i++){
	if (danhsach["sv"+(i+1)]["daoduc"].length==0||parseInt(danhsach["sv"+(i+1)]["daoduc"])<0||parseInt(danhsach["sv"+(i+1)]["daoduc"])>10){
		alert("Điểm Đạo Đức phải nhập và phải là số từ 0-10 ở form số "+(i+1));
		kt=false;
	}
}
for (i=0;i<slform;i++){
	if (danhsach["sv"+(i+1)]["laptrinh"].length==0||parseInt(danhsach["sv"+(i+1)]["laptrinh"])<0||parseInt(danhsach["sv"+(i+1)]["laptrinh"])>10){
		alert("Điểm Lập Trình phải nhập và phải là số từ 0-10 ở form số "+(i+1));
		kt=false;
	}
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Code đưa dữ liệu đã kiểm tra xuống bảng thống kê */
if (kt==true){
	for (i=0;i<slform;i++){
		$("#bangthongke tr:last").after("<tr><td style=\"text-align: center\">"+ stt++ +"</td><td style=\"text-align: center\">"+danhsach["sv"+(i+1)]["hoten"]+"</td><td style=\"text-align: center\">"+danhsach["sv"+(i+1)]["lop"]+"</td><td style=\"text-align: center\">"+danhsach["sv"+(i+1)]["email"]+"</td><td style=\"text-align: center\">"+danhsach["sv"+(i+1)]["sdt"]+"</td><td style=\"text-align: center\"class=\"diem\">"+danhsach["sv"+(i+1)]["van"]+"</td><td style=\"text-align: center\"class=\"diem\">"+danhsach["sv"+(i+1)]["daoduc"]+"</td><td style=\"text-align: center\"class=\"diem\">"+danhsach["sv"+(i+1)]["laptrinh"]+"</td><td style=\"text-align: center\" class=\"diem\">"+"?"+"</td></tr>");
	}
	$(".hoten").val("");
	$(".lop").val("");
	$(".email").val("");
	$(".sdt").val("");
	$(".van").val("");
	$(".daoduc").val("");
	$(".laptrinh").val("");
}
/* Code tính điểm trung bình */
$("#css5").click(function(){
		$("tr").each(function(i,tr) {
			var van = $(tr).find("td").eq(5).text();
			var daoduc = $(tr).find("td").eq(6).text();
			var laptrinh = $(tr).find("td").eq(7).text();
			var dtb = ((parseInt(van) + parseInt(daoduc) + parseInt(laptrinh))/3).toFixed(1);
			var diem = $(tr).find("td").eq(8);
			diem.html(dtb);
		});
	});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Code tô màu */
$("#css4").click(function() {
		//Tô màu cho các cột điểm văn, đạo đức, lập trình và điểm trung bình khi đã click tính TB
		$(".diem").each(function(i, td) {
			var giatri = $(td).text();
			if (giatri >= 8) {
				$(td).css({"color": "red", "font-weight": "bold"});
			}
			
			if (giatri < 5) {
				$(td).css({"color": "blue", "font-weight": "bold"});
			}
		});
		//-----------------------------------------------------------------------------------------
		//Tô màu cho dấu ? khi chưa click tính TB
		$("tr").each(function(i,tr) {
			var van = $(tr).find("td").eq(5).text();
			var daoduc = $(tr).find("td").eq(6).text();
			var laptrinh = $(tr).find("td").eq(7).text();
			var dtb = ((parseInt(van) + parseInt(daoduc) + parseInt(laptrinh))/3).toFixed(1);
			var diem = $(tr).find("td").eq(8);
			diem.val(dtb);
		});
		$(".diem").each(function(i, td) {
			var giatri = parseInt($(td).val());
			if (giatri >= 8) {
				$(td).css({"color": "red", "font-weight": "bold"});
			}
			
			if (giatri < 5) {
				$(td).css({"color": "blue", "font-weight": "bold"});
			}
		});
	});
		//-------------------------------------------------------------------------------------------
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
});
});
/* Kết thúc chương trình tính toán */
