
        //常用的验证规则扩展

        //配置错误提示的节点，默认为label，这里配置成 span （errorElement:'span'）
        $.validator.setDefaults({
            errorElement: 'span'
        });

        //配置通用的默认提示语
        $.extend($.validator.messages, {
        required: "不能为空",
		remote: "请修正该字段",
		email: "请输入正确格式的电子邮件",
		url: "请输入合法的网址",
		date: "请输入合法的日期",
		dateISO: "请输入合法的日期 (ISO).",
		number: "请输入合法的数字",
		digits: "只能输入整数",
		creditcard: "请输入合法的信用卡号",
		equalTo: "请再次输入相同的值",
		accept: "请输入拥有合法后缀名的字符串",
		maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),
		minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),
		rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
		range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
		max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
		min: jQuery.validator.format("请输入一个最小为 {0} 的值")
        });
        //邮箱 
        jQuery.validator.addMethod("mail", function(value, element) {
            var mail = /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$/;
            return this.optional(element) || (mail.test(value));
        }, "邮箱格式不对");
         //手机验证规则  
        jQuery.validator.addMethod("mobile", function(value, element) {
            var mobile = /^1[3|4|5|7|8]\d{9}$/;
            return this.optional(element) || (mobile.test(value));
        }, "手机格式不对");

        //区号验证规则  
        jQuery.validator.addMethod("ac", function(value, element) {
            var ac = /^0\d{2,3}$/;
            return this.optional(element) || (ac.test(value));
        }, "区号如：010或0371");

        //无区号电话验证规则  
        jQuery.validator.addMethod("noactel", function(value, element) {
            var noactel = /^\d{7,8}$/;
            return this.optional(element) || (noactel.test(value));
        }, "电话格式如：68787027");

       

        //邮箱或手机验证规则  
        jQuery.validator.addMethod("mm", function(value, element) {
            var mm = /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$|^1[3|4|5|7|8]\d{9}$/;
            return this.optional(element) || (mm.test(value));
        }, "格式不对");

        //电话或手机验证规则  
        jQuery.validator.addMethod("tm", function(value, element) {
            var tm = /(^1[3|4|5|7|8]\d{9}$)|(^\d{3,4}-\d{7,8}$)|(^\d{7,8}$)|(^\d{3,4}-\d{7,8}-\d{1,4}$)|(^\d{7,8}-\d{1,4}$)/;
            return this.optional(element) || (tm.test(value));
        }, "格式不对");

        //年龄
        jQuery.validator.addMethod("age", function(value, element) {
            var age = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
            return this.optional(element) || (age.test(value));
        }, "不能超过120岁");
        ///// 20-60   /^([2-5]\d)|60$/
        
        //正整数
        jQuery.validator.addMethod("number", function(value, element) {
            var number =  /^[1-9]\d*$/;
            return this.optional(element) || (number.test(value));
        }, "请输入实际成绩");

        //传真
        jQuery.validator.addMethod("fax", function(value, element) {
            var fax = /^(\d{3,4})?[-]?\d{7,8}$/;
            return this.optional(element) || (fax.test(value));
        }, "传真格式如：0371-68787027");

        //验证当前值和目标val的值相等 相等返回为 false
        jQuery.validator.addMethod("equalTo2", function(value, element) {
            var returnVal = true;
            var id = $(element).attr("data-rule-equalto2");
            var targetVal = $(id).val();
            if (value === targetVal) {
                returnVal = false;
            }
            return returnVal;
        }, "不能和原始密码相同");

        //大于指定数
        jQuery.validator.addMethod("gt", function(value, element) {
            var returnVal = false;
            var gt = $(element).data("gt");
            alert(gt);
            if (value > gt && value != "") {
                returnVal = true;
            }
            return returnVal;
        }, '不能小于 {0} 或空');

        //汉字
        jQuery.validator.addMethod("chinese", function(value, element) {
            var chinese = /^[\u4E00-\u9FFF]+$/;
            return this.optional(element) || (chinese.test(value));
        }, "格式不对");
        

        //指定数字的整数倍
        jQuery.validator.addMethod("times", function(value, element) {
            var returnVal = true;
            var base = $(element).attr('data-rule-times');
            if (value % base != 0) {
                returnVal = false;
            }
            return returnVal;
        }, "必须是发布赏金的整数倍");

        //身份证
        jQuery.validator.addMethod("idCard", function(value, element) {
            var isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/; //(15位)
            var isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; //(18位)

            return this.optional(element) || (isIDCard1.test(value)) || (isIDCard2.test(value));
        }, "格式不对");