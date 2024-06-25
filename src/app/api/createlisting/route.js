"use server";
import { writeFile } from "fs/promises";
import fs from "fs";

export async function POST(req, res) {
  const formData = await req.formData();

  const listingImage = formData.get("image");
  const contentType = listingImage.type;
  const mimeType = contentType.split("/")[1];
  const listingImageBuffer = await listingImage.arrayBuffer();

  // will need to check if listingTitle already exists
  const listingTitle = formData.get("title");
  const listingPrice = formData.get("price");
  const listingDescription = formData.get("description");

  let response = new Response(500);
  // creates directory for listing if it doesn't exist
  if (!fs.existsSync(`public/${listingTitle}`)) {
    fs.mkdirSync(`public/${listingTitle}`);
    await writeFile(
      `public/${listingTitle}/listing-image.${mimeType}`,
      Buffer.from(listingImageBuffer),
      (err) => {
        if (err) {
          console.error("Error saving image: ", err);
        } else {
          console.log("Image saved successfully");
        }
      },
    );
    await writeFile(`public/${listingTitle}/price.txt`, listingPrice);
    await writeFile(
      `public/${listingTitle}/description.txt`,
      listingDescription,
    );
    response = new Response(200);
  } else {
    response = new Response(500);
  }

  return response;
}
