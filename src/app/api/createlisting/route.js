import { writeFile } from "fs/promises";
export async function POST(req, res) {
  const formData = await req.formData();
  console.log(formData.get("image"));
  const listingImage = formData.get("image");
  console.log(listingImage.type);
  const contentType = listingImage.type;
  const mimeType = contentType.split("/")[1];
  const listingImageBuffer = await listingImage.arrayBuffer();

  await writeFile(
    `image.${mimeType}`,
    Buffer.from(listingImageBuffer),
    (err) => {
      if (err) {
        console.error("Error saving image: ", err);
      } else {
        console.log("Image saved successfully");
      }
    },
  );

  //try {
  //  await writeFile("image.png", base64ListingImage);
  //} catch (e) {
  //  console.error(e);
  //}
  return new Response(200);
}
