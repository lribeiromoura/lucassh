import Gallery from "react-photo-gallery";
import photoAssets from "./photo.json";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Photo() {
  const photos = photoAssets;
  return (
    <div>
      <Gallery photos={photos} direction={"column"} margin={4} columns={2} />
      {/* <Footer /> */}
    </div>
  );
}
