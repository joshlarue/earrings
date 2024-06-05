import { writefile } from "fs/promises";
export async function POST(req, res) {
  console.log("posted!");
  const formData = await req.formData();
  console.log(formData.get("image"));
  return new Response(200);
}
