import Image from "next/image";

const ItemsBlock = ({ title, Icon, texte, link, picture }) => {
  return (
    <div className="border  w-80 h-4/5 box-content overflow-hidden relative  ">
      <div className="absolute z-0">
        <Image src={picture} alt={title} />
      </div>
      <div className="absolute z-10">
        <h2>{title}</h2>
        <p>{texte}</p>
        <Icon />
      </div>
    </div>
  );
};

export default ItemsBlock;
