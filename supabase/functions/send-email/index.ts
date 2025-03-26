
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // 处理CORS预检请求
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    const { name, email, phone, message } = formData;

    console.log("接收到联系表单数据:", formData);

    // 发送电子邮件给jason@marbellaai.com
    const emailResponse = await resend.emails.send({
      from: "Marbella AI Contact <onboarding@resend.dev>",
      to: ["jason@marbellaai.com"],
      subject: `新联系消息 - 来自 ${name}`,
      html: `
        <h1>新联系表单提交</h1>
        <p><strong>姓名:</strong> ${name}</p>
        <p><strong>电子邮件:</strong> ${email}</p>
        <p><strong>电话号码:</strong> ${phone || "未提供"}</p>
        <p><strong>消息:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("邮件发送结果:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("发送邮件时发生错误:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
