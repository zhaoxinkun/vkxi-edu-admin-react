import "./login.css";
import { userLogin } from "@/api/api.js";
// import { setToken } from "@/utils/token.js";
import { Button, Form, Input, Checkbox, Flex } from "antd";
import { message } from "@/utils/messages.jsx";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import md5 from "md5";

function Login() {
  // 表单数据获取
  const [form] = Form.useForm(); // ✅ 顶层

  // 编程式路由导航
  // const navigate = useNavigate();

  //防止多次点击发送登陆请求
  const [loading, setLoading] = useState(false);

  // 完成
  const onFinish = async (values) => {
    setLoading(true);
    let { account, password } = values;

    try {
      let res = (
        await userLogin({
          account,
          password: md5(password),
        })
      ).data;

      if (res.code === 20000) {
        console.log(res);
        message.success(res.msg || "登录成功");
        form.resetFields();
        // navigate("/home");
      }
    } catch (error) {
      message.error(error.message || "请求失败");
    } finally {
      setLoading(false);
    }

    console.log("Success:", values);
  };

  // 失败
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <div className="login-content">
        <div className="login-form">
          <p className="login-title">高校教务管理系统</p>

          <Form
            form={form}
            name="login"
            initialValues={{
              account: "admin",
              password: "admin@123",
              remember: true,
            }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="username"
              name="account"
              rules={[
                { required: true, message: "Please input your Username!" },
                { min: 3, message: "Username must be at least 3 characters long!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              label="password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
                { min: 3, message: "Password must be at least 3 characters long!" },
              ]}
            >
              <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password</a>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit" loading={loading}>
                Log in
              </Button>
              or <a href="">Register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
