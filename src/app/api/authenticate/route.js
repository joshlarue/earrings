import db from "@/app/db_instance/instance";

export async function POST(req, res) {
  const formData = await req.formData();
  const userName = formData.get("userName");
  const password = formData.get("password");

  try {
    const response = await db.authenticate(userName, password);
    console.log(response);
    if (response.status === 200) {
      return new Response(JSON.stringify({ authToken: response.token }), {
        status: 200,
      });
    } else {
      return new Response({ status: 400 });
    }
  } catch (e) {
    console.log(e);
    return new Response({ status: 400 });
  }
}
