import socialLink from "../containlink/BlockLinkList";
import Image from "next/image";
// import Link from "next/link";
const ChoiceBlockPageOne = () => {
  return (
    <>
      <div className="cursor-pointer flex justify-between items-center h-96 w-full">
        {socialLink.map((link) => {
          return (
            <div key={link.id} className="border border-yellow-600 w-80 h-4/5">
              {/* <Image
                src={link.picture}
                alt={link.title}
                width={50}
                height={50}
              /> */}
              <h2>{link.title}</h2>
              <p>{link.text}</p>
            </div>
          );
        })}
        {/* <div className="border border-yellow-600 w-80 h-4/5">2</div>
        <div className="border border-yellow-600 w-80 h-4/5">3</div>
        <div className="border border-yellow-600 w-80 h-4/5">4</div> */}
      </div>
    </>
  );
};

export default ChoiceBlockPageOne;
